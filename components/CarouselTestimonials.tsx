import { motion, useAnimationControls } from "framer-motion";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import clutchLogo from 'figma:asset/2e527c2f1a28e8f4cafbb9fd9f8f9d410530d352.png';
import { useState, useEffect, useRef } from "react";
import React from "react";

const testimonials = [
  {
    quote: "WDI brought SimpliTend to life with precision. A complex MVP, flawlessly executed and beautifully designed.",
    author: "Sayeed Saachi",
    title: "Founder, SimpliTend",
    rating: 5,
    projectName: "SimpliTend",
    projectLogo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI turned a complex, multi-layered vision into a streamlined digital product. A highly capable and responsive team.",
    author: "Aimee Zoho",
    title: "Founder, Lean In World",
    rating: 5,
    projectName: "Lean In World",
    projectLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI guided us from hybrid frustration to native transformation. Rock-solid delivery, scalable systems, and impressive uptime.",
    author: "Akarsh K Hebbar",
    title: "Founder, WOKA",
    rating: 5,
    projectName: "WOKA",
    projectLogo: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI executed our vision perfectly. The design, user flow, and admin controls are just what we needed.",
    author: "Al Yusuf-Humaira",
    title: "Founder, SSA",
    rating: 5,
    projectName: "SSA",
    projectLogo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI delivered exactly what we needed—a scalable, secure, and smart RFQ engine.",
    author: "Amol Kasar",
    title: "Manager, Dorf Ketal",
    rating: 5,
    projectName: "Dorf Ketal",
    projectLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI helped us modernize our digital presence quickly—professional, responsive, and pixel-perfect.",
    author: "Anesh Kavle",
    title: "Founder, Dayal Tours & Travel",
    rating: 5,
    projectName: "Dayal Tours & Travel",
    projectLogo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI delivered beyond expectations. Their speed, structure, and collaborative energy made this complex platform a reality.",
    author: "Edward",
    title: "Founder, ReGroup",
    rating: 5,
    projectName: "ReGroup",
    projectLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI translated a complex financial vision into a user-friendly app. Their execution was on point.",
    author: "Faisal",
    title: "Founder, Tanami Capital",
    rating: 5,
    projectName: "Tanami Capital",
    projectLogo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI's CRM gave us an exhibition edge—OCR scanning changed the game.",
    author: "Hiten Dedhia",
    title: "Director, Exhibition CRM System",
    rating: 5,
    projectName: "Exhibition CRM System",
    projectLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI made fintech frictionless. From onboarding to investment, it flows like a smart conversation.",
    author: "Rakesh Bunathar",
    title: "Founder, SuperMoney Advisor App",
    rating: 5,
    projectName: "SuperMoney Advisor App",
    projectLogo: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI helped us turn complex property cycles into an intuitive digital experience.",
    author: "Team Prosperty",
    title: "Team, Prosperty Platform",
    rating: 5,
    projectName: "Prosperty Platform",
    projectLogo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI executed my multi-phase platform with confidence and clarity. They turned ideas into an integrated system faster than expected.",
    author: "Mr. Oja Paul",
    title: "Founder, Angel-Driven Marketplace Platform",
    rating: 5,
    projectName: "Angel-Driven Marketplace Platform",
    projectLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI helped bring Moving Cargo to life—from vision to delivery, the process was smooth and professional.",
    author: "Mr Nicholas Shaak",
    title: "Founder, Moving Cargo",
    rating: 5,
    projectName: "Moving Cargo",
    projectLogo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI transformed our leadership vision into a smart, scalable platform our teams love.",
    author: "KLC",
    title: "Team, KLC Learning and Content Management Platform",
    rating: 5,
    projectName: "KLC Learning and Content Management Platform",
    projectLogo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI delivered a full-stack health-tech solution with precision and transparency.",
    author: "Priyank Mehta",
    title: "Founder, GSF Mobie App",
    rating: 5,
    projectName: "GSF Mobie App",
    projectLogo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI built more than an app—they engineered a habit-forming digital solution with beautiful UX and great scalability.",
    author: "Rishabh Jain",
    title: "Founder, Grocery List Mobile Application",
    rating: 5,
    projectName: "Grocery List Mobile Application",
    projectLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI built more than an app—they digitized our entire feed ecosystem.",
    author: "Kevin",
    title: "Founder, Farm Feeder App",
    rating: 5,
    projectName: "Farm Feeder App",
    projectLogo: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI didn't just deliver code—they delivered a digital transformation. Scalable, stable, and beautifully engineered.",
    author: "Jay Ruparel",
    title: "Founder, Melbourne City Card",
    rating: 5,
    projectName: "Melbourne City Card",
    projectLogo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI turned our idea into a highly usable mobile platform—sleek, stable, and scalable.",
    author: "Shannon",
    title: "Founder, Cheers to the Season Mobile App Redesign",
    rating: 5,
    projectName: "Cheers to the Season Mobile App Redesign",
    projectLogo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI gave us a high-performance platform to blend financial learning with fun. Seamless and smart.",
    author: "Ravi Sharma",
    title: "Founder, Nifty Eleven Fantasy Trading App",
    rating: 5,
    projectName: "Nifty Eleven Fantasy Trading App",
    projectLogo: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "The new Amble App makes heritage immersive, intuitive, and scalable—exactly what we envisioned.",
    author: "RPG Foundation",
    title: "Team, Amble App - New Version",
    rating: 5,
    projectName: "Amble App - New Version",
    projectLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI delivered a deeply integrated, future-ready system that cut our admin overheads drastically.",
    author: "Ravi Bajaj",
    title: "Manager, Travel Portal Module Addition to ZingHR System",
    rating: 5,
    projectName: "Travel Portal Module Addition to ZingHR System",
    projectLogo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=60&h=60&fit=crop&auto=format"
  },
  {
    quote: "WDI executed my multi-phase platform with confidence and clarity. They turned ideas into an integrated system faster than expected.",
    author: "Matt Weightman",
    title: "Founder, MOT & Vehicle Management Portal",
    rating: 5,
    projectName: "MOT & Vehicle Management Portal",
    projectLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&auto=format"
  }
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-600 fill-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

// Individual testimonial card
const TestimonialCard = ({ 
  testimonial, 
  onHover, 
  onLeave 
}: { 
  testimonial: typeof testimonials[0];
  onHover?: () => void;
  onLeave?: () => void;
}) => {
  return (
    <div 
      className="bg-card rounded-[10px] border border-border p-6 w-[400px] flex-shrink-0 hover:border-border/80 hover:shadow-lg transition-all duration-300 select-none"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ userSelect: 'none' }}
      role="article"
      aria-label={`Testimonial from ${testimonial.author} at ${testimonial.projectName}`}
    >
      {/* Project Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <ImageWithFallback
            src={testimonial.projectLogo}
            alt={testimonial.projectName}
            className="w-8 h-8 rounded-[10px] object-cover"
          />
          <span className="font-medium text-foreground text-base">
            {testimonial.projectName}
          </span>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
      
      {/* Quote */}
      <p className="text-muted-foreground leading-relaxed text-base mb-6">
        "{testimonial.quote}"
      </p>
      
      {/* Author Info - Without Avatar */}
      <div className="pt-2 border-t border-border/50">
        <div className="font-medium text-foreground text-base">
          {testimonial.author}
        </div>
        <div className="text-muted-foreground text-sm mt-1">
          {testimonial.title}
        </div>
      </div>
    </div>
  );
};

// Single marquee component
const MarqueeRow = ({ testimonials: rowTestimonials }: { testimonials: typeof testimonials }) => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  const currentPositionRef = useRef(0);
  const animationRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0);
  const pauseTimeRef = useRef<number>(0);

  const ANIMATION_DURATION = 60; // seconds
  const TOTAL_DISTANCE = -100 * rowTestimonials.length; // total distance to travel

  const startAnimation = async (fromPosition: number = 0) => {
    const remainingDistance = TOTAL_DISTANCE - fromPosition;
    const remainingDuration = (Math.abs(remainingDistance) / Math.abs(TOTAL_DISTANCE)) * ANIMATION_DURATION;
    
    startTimeRef.current = Date.now();
    
    try {
      await controls.start({
        x: [fromPosition, TOTAL_DISTANCE],
        transition: {
          duration: remainingDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }
      });
    } catch (error) {
      // Animation was interrupted (paused)
    }
  };

  const pauseAnimation = () => {
    controls.stop();
    pauseTimeRef.current = Date.now();
    
    // Calculate current position based on elapsed time
    const elapsedTime = (pauseTimeRef.current - startTimeRef.current) / 1000;
    const progress = (elapsedTime % ANIMATION_DURATION) / ANIMATION_DURATION;
    currentPositionRef.current = TOTAL_DISTANCE * progress;
  };

  const resumeAnimation = () => {
    startAnimation(currentPositionRef.current);
  };

  // Start initial animation
  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, []);

  // Handle pause/resume
  useEffect(() => {
    if (isPaused) {
      pauseAnimation();
    } else {
      resumeAnimation();
    }
  }, [isPaused]);

  const handleCardHover = () => {
    setIsPaused(true);
  };

  const handleCardLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="flex overflow-hidden"
      role="region"
      aria-label="Client testimonials carousel"
      aria-live="polite"
    >
      <motion.div
        className="flex gap-6"
        animate={controls}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        {/* First set */}
        {rowTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={`first-${index}`} 
            testimonial={testimonial}
            onHover={handleCardHover}
            onLeave={handleCardLeave}
          />
        ))}
        {/* Duplicate set for seamless loop */}
        {rowTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={`second-${index}`} 
            testimonial={testimonial}
            onHover={handleCardHover}
            onLeave={handleCardLeave}
          />
        ))}
      </motion.div>
    </div>
  );
};

// Clutch rating component
const ClutchRating = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 bg-card rounded-[10px] border border-border p-6 shadow-sm w-full max-w-sm mx-auto"
    >
      {/* Clutch Logo */}
      <div className="flex-shrink-0">
        <ImageWithFallback
          src={clutchLogo}
          alt="Clutch"
          className="w-16 h-16 object-contain rounded-lg"
        />
      </div>
      
      {/* Rating Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold text-foreground text-xl">4.9</span>
          <StarRating rating={5} />
        </div>
        <div className="text-muted-foreground text-base mb-1">
          (47 reviews)
        </div>
        <div className="text-muted-foreground text-sm">
          Top Web Development Company on Clutch
        </div>
      </div>
    </motion.div>
  );
};

export const CarouselTestimonials = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-semibold text-foreground mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what founders and product leaders say about working with us.
          </motion.p>
        </div>
        
        {/* Single Row Marquee Testimonials */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MarqueeRow testimonials={testimonials} />
          </motion.div>
        </div>
        
        {/* Centered Clutch Rating */}
        <div className="flex justify-center">
          <ClutchRating />
        </div>
      </div>
    </section>
  );
};