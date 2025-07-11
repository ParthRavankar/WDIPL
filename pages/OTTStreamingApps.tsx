import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { HeroBanner } from "../components/HeroBanner";
import { ProcessSection } from "../components/ProcessSection";
import { WhyChooseWDI } from "../components/WhyChooseWDI";
import { FAQSection } from "../components/FAQSection";
import { SplitCallToAction } from "../components/SplitCallToAction";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { 
  Play, Monitor, Users, Shield, Star, 
  Database, Smartphone, Target, CheckCircle, 
  Zap, Globe, Clock, Award, Brain
} from "lucide-react";

// Problem Solution Block Component
const ProblemSolutionBlock = () => {
  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16">
            <span className="text-white">Addressing the Core Challenges of </span>
            <span className="text-[#E5195E]">OTT & Streaming Apps</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-red-400" />
                  </div>
                  The Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Building a successful streaming platform requires more than just content; it demands flawless video delivery, scalable infrastructure, effective content monetization, and robust digital rights management (DRM). Challenges include handling high concurrent viewership, ensuring cross-device compatibility, and delivering personalized user experiences.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  Our OTT & Streaming App Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing end-to-end OTT and streaming applications. We create platforms for live video, on-demand content, secure content delivery networks (CDN), and subscriber management, focusing on superior streaming quality, diverse monetization models, and intuitive user interfaces to maximize audience engagement and revenue.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Grid Component
const IconWithDescriptionGrid = () => {
  const features = [
    {
      icon: Play,
      title: "Live & On-Demand Video Streaming",
      description: "High-quality, low-latency streaming for live events and extensive libraries of on-demand content."
    },
    {
      icon: Monitor,
      title: "Multi-Device Compatibility",
      description: "Seamless streaming experience across web, mobile (iOS/Android), smart TVs, and gaming consoles."
    },
    {
      icon: Database,
      title: "Content Management System (CMS)",
      description: "Robust backend for uploading, organizing, categorizing, and publishing video content efficiently."
    },
    {
      icon: Users,
      title: "User Authentication & Profiles",
      description: "Secure user registration, personalized profiles, watch history, and watchlists."
    },
    {
      icon: Star,
      title: "Monetization Models",
      description: "Integration of various revenue models including Subscription Video On Demand (SVOD), Advertising Video On Demand (AVOD), and Transactional Video On Demand (TVOD)."
    },
    {
      icon: Shield,
      title: "Digital Rights Management (DRM)",
      description: "Secure content protection against unauthorized access and piracy."
    },
    {
      icon: Brain,
      title: "Personalized Recommendations & AI",
      description: "AI-driven algorithms for suggesting content based on viewing habits, enhancing discovery and engagement."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Powerful Features for Your OTT & Streaming Apps
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create captivating streaming experiences that engage audiences and maximize revenue.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-[#E5195E]/30 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-[#E5195E]/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-[#E5195E]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Three Column Feature Block Component
const ThreeColumnFeatureBlock = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Scalable Video Delivery",
      description: "Expertise in building infrastructure that handles millions of concurrent viewers and massive content libraries."
    },
    {
      icon: Star,
      title: "Comprehensive Monetization",
      description: "Implementing diverse revenue strategies to maximize your content's financial potential."
    },
    {
      icon: Shield,
      title: "Robust DRM & Security",
      description: "Protecting your valuable content with advanced digital rights management and anti-piracy measures."
    },
    {
      icon: Smartphone,
      title: "Superior User Experience",
      description: "Designing intuitive interfaces and seamless playback across all devices for ultimate viewer satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Why Partner with WDI for OTT & Streaming App Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create streaming platforms that truly captivate and engage your audience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#E5195E]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#E5195E]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Case Study Component
const CaseStudyHighlightGrid = () => {
  const caseStudies = [
    {
      title: "Niche Sports League Streaming Platform",
      problem: "A sports league wanted a direct-to-consumer streaming platform to broadcast live games and offer exclusive on-demand content.",
      solution: "WDI built a comprehensive OTT platform with live streaming capabilities, multi-camera views, real-time stats integration, and subscription management.",
      results: "Attracted over 500,000 subscribers in the first year and significantly increased fan engagement for the league.",
      metrics: ["500K+ Subscribers", "Live Streaming", "Sports League"]
    },
    {
      title: "Educational Content Subscription Service",
      problem: "An educational publisher aimed to transition its content library into a subscription-based video streaming service.",
      solution: "Developed an SVOD platform with a robust CMS, personalized learning paths, and cross-device compatibility.",
      results: "Achieved a 30% month-over-month subscriber growth and became a leading platform in its educational niche.",
      metrics: ["30% MoM Growth", "Educational Content", "SVOD Platform"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            OTT & Streaming App Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our streaming platform implementations that transformed content delivery.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-[#E5195E]/30 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-4">
                    {study.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-[#E5195E]/30">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {study.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-300 mb-2">Problem:</h4>
                      <p className="text-gray-400 text-sm">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300 mb-2">Solution:</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300 mb-2">Results:</h4>
                      <p className="text-gray-400 text-sm">{study.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Data
const ottStreamingFAQs = [
  {
    question: "How do you ensure high-quality video streaming and low latency for live events?",
    answer: "We implement adaptive bitrate streaming, global CDN networks, edge computing, and advanced video compression technologies. Our platforms use protocols like HLS and DASH to ensure optimal streaming quality across varying network conditions."
  },
  {
    question: "What monetization models (SVOD, AVOD, TVOD) can you integrate into streaming platforms?",
    answer: "We support all major monetization models: Subscription Video On Demand (SVOD), Advertising Video On Demand (AVOD), Transactional Video On Demand (TVOD), and hybrid models. We can also implement freemium tiers and pay-per-view options."
  },
  {
    question: "How do you handle Digital Rights Management (DRM) and content security?",
    answer: "We implement industry-standard DRM solutions including Widevine, PlayReady, and FairPlay. Our platforms include watermarking, token-based authentication, geo-blocking, and anti-piracy measures to protect valuable content assets."
  },
  {
    question: "What is your experience with multi-device compatibility (Smart TVs, mobile, web)?",
    answer: "We develop native applications for iOS, Android, Apple TV, Android TV, Roku, Fire TV, and web browsers. Our solutions ensure consistent user experience and feature parity across all platforms with responsive design principles."
  },
  {
    question: "Do you offer solutions for content recommendation engines and personalization?",
    answer: "Yes, we build AI-powered recommendation systems using machine learning algorithms that analyze viewing patterns, user preferences, and content metadata to deliver personalized content suggestions and improve user engagement."
  }
];

export const OTTStreamingApps = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Media & Community"
        title="OTT & Streaming Apps"
        description="Deliver captivating content directly to your audience with high-performance, secure, and engaging Over-The-Top (OTT) and streaming applications."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View Streaming Case Studies",
          href: "/case-studies"
        }}
      />

      <ProblemSolutionBlock />
      
      <IconWithDescriptionGrid />
      
      <ThreeColumnFeatureBlock />
      
      <div className="bg-[#0E0E0E]">
        <ProcessSection />
      </div>
      
      <CaseStudyHighlightGrid />
      
      <div className="bg-[#0E0E0E]">
        <FAQSection 
          title="OTT & Streaming App FAQs"
          subtitle="Get answers to common questions about our streaming platform development services."
          faqs={ottStreamingFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};