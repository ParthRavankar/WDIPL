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
  Truck, Package, BarChart3, MapPin, Clock, 
  Database, Settings, Target, CheckCircle, Star, 
  Zap, Shield, Globe, Award, Route
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
            <span className="text-[#E5195E]">Supply Chain & Fleet Management</span>
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
                  Modern supply chains require end-to-end visibility, real-time coordination, and efficient resource allocation. Challenges include managing complex logistics networks, optimizing delivery routes, tracking inventory across multiple locations, ensuring compliance, and maintaining cost efficiency while meeting customer expectations for speed and reliability.
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
                  Our Supply Chain & Fleet Management Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing comprehensive supply chain and fleet management solutions. We create platforms for inventory tracking, route optimization, fleet monitoring, warehouse management, and logistics coordination, focusing on real-time visibility, operational efficiency, and data-driven decision making to streamline your entire supply chain operation.
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
      icon: Package,
      title: "Inventory & Warehouse Management",
      description: "Real-time inventory tracking, automated reordering, warehouse optimization, and stock level management across locations."
    },
    {
      icon: Truck,
      title: "Fleet Tracking & Vehicle Management",
      description: "GPS-enabled vehicle tracking, maintenance scheduling, fuel management, and driver performance monitoring."
    },
    {
      icon: Route,
      title: "Route Optimization & Planning",
      description: "AI-powered route planning, delivery optimization, traffic-aware routing, and dynamic re-routing capabilities."
    },
    {
      icon: BarChart3,
      title: "Supply Chain Analytics & Reporting",
      description: "Comprehensive dashboards, KPI tracking, performance analytics, and predictive insights for operational optimization."
    },
    {
      icon: MapPin,
      title: "Real-time Shipment Tracking",
      description: "End-to-end shipment visibility, delivery notifications, customer tracking portals, and proof of delivery systems."
    },
    {
      icon: Database,
      title: "ERP & Third-party Integrations",
      description: "Seamless integration with existing ERP systems, accounting software, and third-party logistics providers."
    },
    {
      icon: Settings,
      title: "Compliance & Documentation Management",
      description: "Automated compliance tracking, digital documentation, audit trails, and regulatory reporting capabilities."
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
            Powerful Features for Your Supply Chain & Fleet Management
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create efficient, transparent, and optimized supply chain operations.
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
      title: "End-to-End Visibility",
      description: "Complete supply chain transparency from procurement to delivery with real-time tracking and monitoring."
    },
    {
      icon: Route,
      title: "Optimization Algorithms",
      description: "Advanced algorithms for route planning, inventory optimization, and resource allocation to maximize efficiency."
    },
    {
      icon: Database,
      title: "Seamless Integration",
      description: "Deep integration capabilities with existing systems, third-party logistics, and supply chain partners."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built-in compliance management, security protocols, and audit capabilities for regulated industries."
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
            Why Partner with WDI for Supply Chain & Fleet Management Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create supply chain solutions that truly optimize your operations.
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
      title: "E-commerce Logistics Optimization Platform",
      problem: "A growing e-commerce company needed to optimize their complex logistics operations and reduce delivery costs.",
      solution: "WDI developed an integrated platform with route optimization, warehouse management, and real-time tracking capabilities.",
      results: "Reduced delivery costs by 30% and improved delivery times by 25% while handling 3x more orders.",
      metrics: ["30% ↓ Costs", "25% ↑ Speed", "3x Order Volume"]
    },
    {
      title: "Manufacturing Supply Chain Visibility System",
      problem: "A manufacturer lacked visibility into their global supply chain, causing production delays and inventory issues.",
      solution: "Built a comprehensive supply chain management system with real-time tracking, supplier integration, and predictive analytics.",
      results: "Improved on-time delivery by 40% and reduced inventory carrying costs by 20%.",
      metrics: ["40% ↑ On-time", "20% ↓ Inventory", "Global Scale"]
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
            Supply Chain & Fleet Management Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our supply chain platform implementations that transformed logistics operations.
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
const supplyChainFleetFAQs = [
  {
    question: "How do you integrate with existing ERP and warehouse management systems?",
    answer: "We have extensive experience integrating with major ERP systems (SAP, Oracle, Microsoft Dynamics) and WMS platforms. Our integration approach ensures seamless data flow, real-time synchronization, and minimal disruption to existing operations."
  },
  {
    question: "What route optimization algorithms do you implement for fleet management?",
    answer: "We implement advanced algorithms including vehicle routing problems (VRP), traveling salesman optimizations, genetic algorithms, and machine learning models that consider traffic patterns, vehicle capacity, time windows, and driver preferences for optimal route planning."
  },
  {
    question: "How do you ensure real-time visibility across the entire supply chain?",
    answer: "We implement IoT sensors, GPS tracking, barcode/RFID scanning, and API integrations with logistics partners. Our platforms provide real-time dashboards, automated alerts, and predictive analytics for complete supply chain transparency."
  },
  {
    question: "Can you handle complex multi-modal transportation and international logistics?",
    answer: "Yes, we develop solutions for complex logistics including air, sea, rail, and road transportation. Our platforms handle customs documentation, international regulations, multi-currency operations, and coordination across global logistics partners."
  },
  {
    question: "What compliance and regulatory features do you implement?",
    answer: "We build comprehensive compliance management including DOT regulations, international shipping requirements, hazardous materials handling, environmental regulations, and industry-specific compliance tracking with automated reporting and audit trails."
  }
];

export const SupplyChainFleetManagement = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Mobility & Logistics"
        title="Supply Chain & Fleet Management"
        description="Optimize your logistics operations and achieve end-to-end supply chain visibility with intelligent, integrated, and scalable management solutions."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View Supply Chain Case Studies",
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
          title="Supply Chain & Fleet Management FAQs"
          subtitle="Get answers to common questions about our supply chain and fleet management development services."
          faqs={supplyChainFleetFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};