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
  Smartphone, Users, MapPin, CreditCard, Clock, 
  Star, BarChart3, Target, CheckCircle, Zap, 
  Shield, Globe, Award, Settings, Bell
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
            <span className="text-[#E5195E]">On-Demand Services</span>
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
                  On-demand services require instant matching between customers and service providers, real-time tracking, flexible pricing models, and quality assurance. Challenges include managing supply and demand imbalances, ensuring service quality, coordinating logistics, and building trust between strangers in digital marketplaces.
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
                  Our On-Demand Services Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing comprehensive on-demand service platforms. We create solutions for home services, healthcare, beauty, tutoring, and professional services, focusing on instant matching algorithms, real-time tracking, secure payments, and quality management to ensure exceptional customer and service provider experiences.
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
      icon: Users,
      title: "Service Provider & Customer Matching",
      description: "Intelligent algorithms that match customers with qualified service providers based on location, availability, and requirements."
    },
    {
      icon: MapPin,
      title: "Real-time Location Services",
      description: "GPS tracking for service providers, location-based search, and real-time service tracking and updates."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling & Booking",
      description: "Instant bookings, advance scheduling, recurring services, and automated availability management."
    },
    {
      icon: CreditCard,
      title: "Secure Payment Processing",
      description: "Multiple payment options, automatic billing, tip handling, and secure escrow systems for service completion."
    },
    {
      icon: Star,
      title: "Rating & Review Systems",
      description: "Comprehensive feedback mechanisms, quality scoring, and reputation management for service providers."
    },
    {
      icon: Settings,
      title: "Service Management Tools",
      description: "Provider onboarding, background verification, service catalog management, and performance analytics."
    },
    {
      icon: Bell,
      title: "Real-time Communication & Notifications",
      description: "In-app messaging, push notifications, status updates, and automated communication workflows."
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
            Powerful Features for Your On-Demand Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create seamless on-demand experiences that connect customers with service providers efficiently.
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
      title: "Instant Matching Algorithms",
      description: "Advanced algorithms that instantly connect customers with the best available service providers."
    },
    {
      icon: Shield,
      title: "Trust & Safety Systems",
      description: "Comprehensive verification, background checks, insurance integration, and dispute resolution mechanisms."
    },
    {
      icon: BarChart3,
      title: "Marketplace Analytics & Optimization",
      description: "Data-driven insights for supply-demand balancing, pricing optimization, and marketplace growth."
    },
    {
      icon: Globe,
      title: "Multi-Service Platform Expertise",
      description: "Experience across diverse on-demand verticals from home services to professional consultations."
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
            Why Partner with WDI for On-Demand Service Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create on-demand platforms that truly serve modern consumer needs.
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
      title: "Home Services Marketplace Platform",
      problem: "A startup needed a comprehensive platform connecting homeowners with local service professionals for repairs and maintenance.",
      solution: "WDI built a full-featured marketplace with professional verification, service catalogs, instant booking, and quality management.",
      results: "Facilitated 50,000+ service bookings in the first year with 90% customer satisfaction and successful provider onboarding.",
      metrics: ["50K+ Bookings", "90% Satisfaction", "Home Services"]
    },
    {
      title: "On-Demand Healthcare Services Platform",
      problem: "A healthcare company wanted to provide on-demand medical consultations and home healthcare services.",
      solution: "Developed a HIPAA-compliant platform with provider matching, secure consultations, appointment management, and patient records.",
      results: "Served 10,000+ patients with reduced wait times by 70% and improved healthcare accessibility in underserved areas.",
      metrics: ["10K+ Patients", "70% ↓ Wait Times", "Healthcare"]
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
            On-Demand Services Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our on-demand platform implementations that transformed service delivery.
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
const onDemandServicesFAQs = [
  {
    question: "How do you handle service provider verification and background checks?",
    answer: "We implement comprehensive verification systems including identity verification, background checks, license validation, insurance verification, and skills assessment. Our platforms integrate with third-party verification services and maintain detailed provider profiles."
  },
  {
    question: "What matching algorithms do you use to connect customers with service providers?",
    answer: "We use sophisticated algorithms considering factors like location proximity, provider availability, skills match, customer preferences, ratings history, and service urgency. Our AI-powered systems continuously optimize matching for better outcomes."
  },
  {
    question: "How do you ensure quality control and customer satisfaction?",
    answer: "We implement multi-layered quality systems including pre-service verification, real-time monitoring, post-service reviews, quality scoring, dispute resolution, and continuous feedback loops. Poor performers are automatically flagged for review."
  },
  {
    question: "Can you integrate with existing business systems and payment processors?",
    answer: "Yes, we have extensive experience integrating with CRM systems, accounting software, calendar applications, and payment processors. We ensure seamless data flow and can work with your existing business workflows."
  },
  {
    question: "What pricing models and commission structures do you support?",
    answer: "We support various pricing models including fixed pricing, hourly rates, dynamic pricing, subscription models, and auction-based pricing. Commission structures can be percentage-based, flat fees, or tiered systems with automated calculation and distribution."
  }
];

export const OnDemandServices = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Mobility & Logistics"
        title="On-Demand Services"
        description="Connect customers with service providers instantly through intelligent, scalable, and user-friendly on-demand service platforms that transform how services are delivered."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View On-Demand Case Studies",
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
          title="On-Demand Services FAQs"
          subtitle="Get answers to common questions about our on-demand platform development services."
          faqs={onDemandServicesFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};