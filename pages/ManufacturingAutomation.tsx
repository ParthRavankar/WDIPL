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
  Factory, Cog, BarChart3, Shield, Bot, 
  Eye, Database, Target, CheckCircle, Star, 
  Zap, Globe, Clock, Award, Settings
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
            <span className="text-[#E5195E]">Manufacturing Automation</span>
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
                  Modern manufacturing demands high efficiency, precision, and adaptability. Businesses face challenges with integrating disparate machinery, collecting and analyzing vast amounts of operational data, implementing predictive maintenance, and ensuring quality control in automated environments. The move towards Industry 4.0 requires seamless software-hardware integration.
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
                  Our Manufacturing Automation Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in building advanced Manufacturing Automation solutions that drive efficiency and intelligence across your factory floor. We create software for robotic control, production line optimization, real-time data monitoring, predictive maintenance, and quality assurance, leveraging IoT and AI to transform traditional manufacturing into smart, responsive operations.
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
      icon: Database,
      title: "Industrial IoT (IIoT) Integration",
      description: "Connecting factory machinery, sensors, and devices for real-time data collection and monitoring."
    },
    {
      icon: Settings,
      title: "Production Line Optimization",
      description: "Software for sequencing, scheduling, and balancing production lines to maximize throughput and minimize bottlenecks."
    },
    {
      icon: Clock,
      title: "Predictive Maintenance",
      description: "AI/ML-powered analytics that forecast equipment failures, enabling proactive maintenance and reducing costly downtime."
    },
    {
      icon: Eye,
      title: "Quality Control & Inspection Automation",
      description: "Automated visual inspection systems, defect detection, and quality assurance data collection."
    },
    {
      icon: Bot,
      title: "Robotics Control & Orchestration",
      description: "Software interfaces for programming, monitoring, and coordinating robotic systems on the factory floor."
    },
    {
      icon: BarChart3,
      title: "Real-time Performance Dashboards",
      description: "Centralized dashboards providing live operational metrics, OEE (Overall Equipment Effectiveness), and production status."
    },
    {
      icon: Cog,
      title: "Integration with MES/ERP Systems",
      description: "Seamless data flow and command exchange with Manufacturing Execution Systems (MES) and Enterprise Resource Planning (ERP)."
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
            Powerful Features for Your Manufacturing Automation
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create intelligent manufacturing systems that maximize efficiency and minimize downtime.
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
      icon: Database,
      title: "Deep IIoT & OT Integration",
      description: "Expertise in connecting IT systems with Operational Technology (OT) for true smart factory capabilities."
    },
    {
      icon: Bot,
      title: "AI for Operational Intelligence",
      description: "Leveraging AI/ML for predictive analytics, process optimization, and enhanced decision-making on the factory floor."
    },
    {
      icon: Zap,
      title: "Scalability & Resilience",
      description: "Building robust systems designed to support critical manufacturing processes and adapt to growing production demands."
    },
    {
      icon: Shield,
      title: "Compliance & Data Security",
      description: "Ensuring industrial cybersecurity and adherence to relevant industry standards for data integrity and system reliability."
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
            Why Partner with WDI for Manufacturing Automation Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create manufacturing systems that truly transform your operations.
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
      title: "Smart Factory Production Monitoring System",
      problem: "A client needed real-time visibility into production line performance, identifying bottlenecks and equipment inefficiencies.",
      solution: "WDI developed an IIoT-enabled system integrating with various machines, providing live production metrics, OEE tracking, and anomaly detection.",
      results: "Increased production efficiency by 18% and reduced unplanned downtime by 25% within six months.",
      metrics: ["18% ↑ Efficiency", "25% ↓ Downtime", "Smart Factory"]
    },
    {
      title: "AI-Powered Quality Control & Defect Detection",
      problem: "A high-volume manufacturer struggled with manual product inspection, leading to inconsistent quality and high scrap rates.",
      solution: "Built an automated visual inspection system using computer vision and AI to detect defects on the assembly line in real-time.",
      results: "Improved product quality by 15% and reduced inspection time by 60%, leading to significant cost savings.",
      metrics: ["15% ↑ Quality", "60% ↓ Inspection Time", "AI-Powered"]
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
            Manufacturing Automation Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our manufacturing automation implementations that transformed production operations.
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
const manufacturingAutomationFAQs = [
  {
    question: "How do you ensure cybersecurity for industrial control systems (OT) in automation?",
    answer: "We implement multi-layered security including network segmentation, encrypted communications, secure authentication protocols, regular security audits, and compliance with industrial cybersecurity standards like IEC 62443. Our approach protects both IT and OT environments."
  },
  {
    question: "What IIoT platforms and protocols do you support for factory connectivity?",
    answer: "We work with major IIoT platforms including AWS IoT, Azure IoT, and Google Cloud IoT. We support industrial protocols like OPC-UA, Modbus, PROFINET, EtherNet/IP, and MQTT for seamless connectivity with diverse manufacturing equipment."
  },
  {
    question: "Can you integrate with existing MES (Manufacturing Execution Systems) or ERP systems?",
    answer: "Yes, we have extensive experience integrating with major MES platforms (Wonderware, Rockwell, Siemens) and ERP systems (SAP, Oracle, Microsoft Dynamics). We ensure seamless data flow and process synchronization across all systems."
  },
  {
    question: "What is your experience with AI/ML for predictive maintenance and quality control?",
    answer: "We develop custom AI/ML models for predictive maintenance using sensor data, historical patterns, and failure analysis. For quality control, we implement computer vision systems, statistical process control, and real-time anomaly detection algorithms."
  },
  {
    question: "Do you offer solutions for robotics control and orchestration?",
    answer: "Absolutely! We develop software for robotic programming, path planning, collaborative robot (cobot) integration, multi-robot coordination, and human-robot interaction interfaces. We work with major robotics platforms and custom automation systems."
  }
];

export const ManufacturingAutomation = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Industrial & Emerging Tech"
        title="Manufacturing Automation"
        description="Transform your production lines and factory operations with intelligent, interconnected, and highly efficient Manufacturing Automation software solutions."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View Manufacturing Case Studies",
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
          title="Manufacturing Automation FAQs"
          subtitle="Get answers to common questions about our manufacturing automation development services."
          faqs={manufacturingAutomationFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};