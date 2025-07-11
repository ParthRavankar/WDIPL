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
  Car, MapPin, CreditCard, Users, Clock, 
  Route, BarChart3, Target, CheckCircle, Star, 
  Zap, Shield, Globe, Award, Navigation as NavIcon
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
            <span className="text-[#E5195E]">Transportation Apps</span>
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
                  Modern transportation requires real-time coordination between passengers, drivers, and fleet operators. Challenges include optimizing routes, managing dynamic pricing, ensuring safety and security, handling payment processing, and providing seamless multi-modal transportation experiences while maintaining operational efficiency and user satisfaction.
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
                  Our Transportation App Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing comprehensive transportation applications. We create solutions for ride-sharing, taxi services, public transit, delivery logistics, and fleet management, focusing on real-time tracking, intelligent routing, secure payments, and seamless user experiences to optimize transportation efficiency and passenger satisfaction.
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
      icon: MapPin,
      title: "Real-time GPS Tracking & Navigation",
      description: "Live vehicle tracking, optimized routing, and turn-by-turn navigation with traffic-aware algorithms."
    },
    {
      icon: Users,
      title: "Multi-User Platforms (Passengers, Drivers, Admins)",
      description: "Separate interfaces for passengers, drivers, and fleet managers with role-specific features and dashboards."
    },
    {
      icon: Route,
      title: "Intelligent Route Optimization",
      description: "AI-powered routing algorithms that consider traffic, weather, demand patterns, and vehicle capacity."
    },
    {
      icon: CreditCard,
      title: "Secure Payment Gateway Integration",
      description: "Multiple payment options including cards, digital wallets, and corporate billing with secure processing."
    },
    {
      icon: Clock,
      title: "Ride Scheduling & Booking Management",
      description: "Advance booking, recurring trips, real-time availability, and automated dispatch systems."
    },
    {
      icon: BarChart3,
      title: "Dynamic Pricing & Surge Management",
      description: "Intelligent pricing algorithms based on demand, supply, time, and distance with transparent fare calculation."
    },
    {
      icon: Shield,
      title: "Safety Features & Emergency Tools",
      description: "Panic buttons, trip sharing, driver verification, ride monitoring, and emergency contact integration."
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
            Powerful Features for Your Transportation Apps
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create efficient, safe, and user-friendly transportation experiences.
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
      title: "Real-time Operations Expertise",
      description: "Building systems that handle real-time dispatch, tracking, and coordination with minimal latency."
    },
    {
      icon: Route,
      title: "Advanced Algorithm Development",
      description: "Implementing sophisticated routing, matching, and optimization algorithms for efficient transportation."
    },
    {
      icon: Shield,
      title: "Safety & Compliance Focus",
      description: "Ensuring platform safety, regulatory compliance, and security measures for passenger protection."
    },
    {
      icon: Globe,
      title: "Scalable Multi-Modal Solutions",
      description: "Creating platforms that support various transportation modes and scale from local to global operations."
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
            Why Partner with WDI for Transportation App Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create transportation platforms that truly optimize mobility experiences.
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
      title: "Regional Ride-Sharing Platform for Emerging Markets",
      problem: "A client needed a cost-effective ride-sharing solution tailored for emerging markets with unique payment and infrastructure challenges.",
      solution: "WDI developed a lightweight, offline-capable ride-sharing app with cash payment options, SMS integration, and localized features.",
      results: "Achieved 100,000+ active users within 18 months and captured 30% market share in target regions.",
      metrics: ["100K+ Users", "30% Market Share", "Emerging Markets"]
    },
    {
      title: "Corporate Transportation Management System",
      problem: "A large corporation needed to optimize employee transportation with advanced booking, reporting, and cost management features.",
      solution: "Built a comprehensive corporate transport platform with employee booking, fleet management, route optimization, and detailed analytics.",
      results: "Reduced transportation costs by 25% and improved employee satisfaction with seamless booking experiences.",
      metrics: ["25% ↓ Costs", "Corporate Scale", "Fleet Management"]
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
            Transportation App Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our transportation platform implementations that transformed mobility solutions.
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
const transportationAppFAQs = [
  {
    question: "How do you implement real-time tracking and GPS functionality in transportation apps?",
    answer: "We integrate with GPS APIs, implement WebSocket connections for real-time updates, use mapping services like Google Maps or Mapbox, and optimize for battery efficiency with smart location sampling. Our solutions include offline capabilities and accurate ETA calculations."
  },
  {
    question: "What algorithms do you use for route optimization and driver-passenger matching?",
    answer: "We implement advanced algorithms including Dijkstra's shortest path, A* pathfinding, machine learning for demand prediction, and genetic algorithms for route optimization. Our matching algorithms consider distance, traffic, driver ratings, and passenger preferences."
  },
  {
    question: "How do you ensure safety and security in transportation applications?",
    answer: "We implement comprehensive safety features including driver background verification, real-time trip monitoring, panic buttons, trip sharing, driver ratings, emergency contacts integration, and compliance with local transportation regulations."
  },
  {
    question: "Can you integrate with existing fleet management or dispatch systems?",
    answer: "Yes, we have extensive experience integrating with fleet management systems, dispatch software, telematics platforms, and vehicle tracking systems. We ensure seamless data flow and operational continuity during platform transitions."
  },
  {
    question: "What payment processing and pricing models do you support?",
    answer: "We support multiple payment methods including credit cards, digital wallets, cash payments, corporate billing, and split payments. Our platforms handle dynamic pricing, surge pricing, discounts, promotions, and detailed fare calculations with transparent breakdowns."
  }
];

export const TransportationApps = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Mobility & Logistics"
        title="Transportation Apps"
        description="Revolutionize mobility experiences with intelligent, efficient, and user-centric transportation applications for ride-sharing, fleet management, and logistics."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View Transportation Case Studies",
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
          title="Transportation App FAQs"
          subtitle="Get answers to common questions about our transportation app development services."
          faqs={transportationAppFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};