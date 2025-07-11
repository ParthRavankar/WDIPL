import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { Button } from './ui/button';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'customized');
    // In a real app, you would save the specific preferences here
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 shadow-2xl"
      >
        <div className="container mx-auto px-4 lg:px-8">
          {!showSettings ? (
            // Main Cookie Consent Banner
            <div className="py-4 lg:py-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                {/* Icon and Message */}
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-8 h-8 bg-[#E5195E]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cookie className="w-4 h-4 text-[#E5195E]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      We use cookies to enhance your experience
                    </h3>
                    <p className="text-[#CCCCCC] text-sm leading-relaxed">
                      We use cookies to analyze site performance, deliver personalized content, and improve your browsing experience. 
                      By clicking "Accept All", you consent to our use of cookies.{' '}
                      <a href="/privacy" className="text-[#E5195E] hover:text-[#E5195E]/80 underline">
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 hover:border-[#E5195E]/50 hover:text-white transition-all duration-300"
                    onClick={() => setShowSettings(true)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Customize
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                    onClick={handleDeclineAll}
                  >
                    Decline All
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white transition-all duration-300"
                    onClick={handleAcceptAll}
                  >
                    Accept All
                  </Button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 lg:relative lg:top-auto lg:right-auto w-8 h-8 flex items-center justify-center text-[#CCCCCC] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Close cookie banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            // Cookie Settings Panel
            <div className="py-6">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#E5195E]/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[#E5195E]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">Cookie Preferences</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">Necessary Cookies</h4>
                      <div className="w-12 h-6 bg-[#E5195E] rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-[#CCCCCC] text-sm">
                      These cookies are essential for the website to function properly. They cannot be disabled.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">Analytics Cookies</h4>
                      <div className="w-12 h-6 bg-white/20 rounded-full flex items-center justify-start px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-[#CCCCCC] text-sm">
                      Help us understand how visitors interact with our website by collecting anonymous information.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">Marketing Cookies</h4>
                      <div className="w-12 h-6 bg-white/20 rounded-full flex items-center justify-start px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-[#CCCCCC] text-sm">
                      Used to track visitors across websites to display relevant advertisements.
                    </p>
                  </div>
                </div>

                {/* Settings Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                    onClick={() => setShowSettings(false)}
                  >
                    Back
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white transition-all duration-300"
                    onClick={handleSavePreferences}
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};