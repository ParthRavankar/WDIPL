import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

interface CustomReCaptchaProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpired?: () => void;
  onError?: () => void;
  className?: string;
}

export interface ReCaptchaRef {
  reset: () => void;
  execute: () => void;
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const CustomReCaptcha = forwardRef<ReCaptchaRef, CustomReCaptchaProps>(({
  siteKey,
  onVerify,
  onExpired,
  onError,
  className = ""
}, ref) => {
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const isLoadedRef = useRef(false);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (window.grecaptcha && widgetId.current !== null) {
        window.grecaptcha.reset(widgetId.current);
      }
    },
    execute: () => {
      if (window.grecaptcha && widgetId.current !== null) {
        window.grecaptcha.execute(widgetId.current);
      }
    }
  }));

  const loadReCaptcha = () => {
    if (window.grecaptcha) {
      renderReCaptcha();
      return;
    }

    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onReCaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;
    
    // Set up callback for when script loads
    (window as any).onReCaptchaLoad = () => {
      renderReCaptcha();
    };

    document.head.appendChild(script);
  };

  const renderReCaptcha = () => {
    if (!captchaRef.current || isLoadedRef.current) return;

    try {
      widgetId.current = window.grecaptcha.render(captchaRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        'expired-callback': onExpired,
        'error-callback': onError,
        theme: 'dark',
        size: 'normal'
      });
      isLoadedRef.current = true;
    } catch (error) {
      console.error('Error rendering reCAPTCHA:', error);
      if (onError) onError();
    }
  };

  useEffect(() => {
    loadReCaptcha();

    return () => {
      // Cleanup
      if (window.grecaptcha && widgetId.current !== null) {
        try {
          window.grecaptcha.reset(widgetId.current);
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  // Add styles to document head instead of using styled-jsx
  useEffect(() => {
    const styleId = 'custom-recaptcha-styles';
    
    // Check if styles are already added
    if (document.getElementById(styleId)) {
      return;
    }

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = `
      .grecaptcha-badge {
        visibility: hidden;
      }
      
      iframe[src*="recaptcha"] {
        border-radius: 8px !important;
        overflow: hidden;
      }
      
      .g-recaptcha {
        transform: scale(1);
        transform-origin: center;
      }
      
      .g-recaptcha > div {
        border-radius: 8px !important;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    `;
    
    document.head.appendChild(styleElement);

    // Cleanup function to remove styles when component unmounts
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return (
    <div className={`flex justify-center ${className}`}>
      <div 
        className="bg-gray-800/30 border border-gray-600/50 rounded-xl p-6 shadow-lg backdrop-blur-sm"
        style={{
          '--recaptcha-border-radius': '12px'
        } as React.CSSProperties}
      >
        <div ref={captchaRef} />
      </div>
    </div>
  );
});

CustomReCaptcha.displayName = 'CustomReCaptcha';

export default CustomReCaptcha;