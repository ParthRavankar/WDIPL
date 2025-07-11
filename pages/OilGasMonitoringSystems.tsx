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
  Activity, AlertTriangle, BarChart3, Settings, Eye, 
  Database, Shield, Target, CheckCircle, Star, 
  Zap, Globe, Clock, Award, Gauge
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
            <span className="text-[#E5195E]">Oil & Gas Monitoring Systems</span>
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
                  Oil and gas operations require continuous monitoring of critical infrastructure, early detection of anomalies, and strict compliance with safety and environmental regulations. Challenges include managing remote facilities, preventing equipment failures, ensuring worker safety, and maintaining environmental compliance while optimizing production efficiency.
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
                  Our Oil & Gas Monitoring Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing robust oil and gas monitoring systems for upstream, midstream, and downstream operations. We create solutions for pipeline monitoring, facility surveillance, predictive maintenance, environmental compliance, and safety management, leveraging IoT sensors, AI analytics, and real-time monitoring to ensure operational excellence and regulatory compliance.
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
      icon: Activity,
      title: "Real-time Pipeline & Infrastructure Monitoring",
      description: "Continuous monitoring of pipelines, wells, and facilities with pressure, flow, and temperature sensors for operational oversight."
    },
    {
      icon: AlertTriangle,
      title: "Leak Detection & Emergency Response",
      description: "Advanced leak detection systems, gas monitoring, and automated emergency response protocols for safety and environmental protection."
    },
    {
      icon: Gauge,
      title: "Equipment Health & Predictive Maintenance",
      description: "Condition monitoring, vibration analysis, and AI-powered predictive maintenance to prevent costly equipment failures."
    },
    {
      icon: BarChart3,
      title: "Production Optimization & Analytics",
      description: "Real-time production data analysis, performance optimization, and operational efficiency monitoring across facilities."
    },
    {
      icon: Shield,
      title: "Safety & Compliance Management",
      description: "Comprehensive safety monitoring, regulatory compliance tracking, and incident management systems."
    },
    {
      icon: Eye,
      title: "Remote Facility Surveillance",
      description: "Video surveillance, access control, and remote monitoring capabilities for unmanned facilities and critical infrastructure."
    },
    {
      icon: Database,
      title: "Environmental Monitoring & Reporting",
      description: "Air quality monitoring, emissions tracking, and automated environmental compliance reporting for regulatory requirements."
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
            Powerful Features for Your Oil & Gas Monitoring Systems
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create robust monitoring solutions that ensure safety, compliance, and operational efficiency.
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
      icon: Shield,
      title: "Safety-Critical Systems Expertise",
      description: "Deep understanding of oil and gas safety requirements, hazardous environment monitoring, and emergency response protocols."
    },
    {
      icon: Globe,
      title: "Remote Operations Capability",
      description: "Specialized in building systems for remote, harsh environments with reliable connectivity and edge computing capabilities."
    },
    {
      icon: Database,
      title: "Regulatory Compliance Focus",
      description: "Comprehensive knowledge of industry regulations (API, OSHA, EPA) and automated compliance reporting systems."
    },
    {
      icon: Zap,
      title: "Industrial IoT & SCADA Integration",
      description: "Expertise in industrial protocols, SCADA systems, and IoT sensor networks for comprehensive facility monitoring."
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
            Why Partner with WDI for Oil & Gas Monitoring System Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create monitoring systems that truly ensure safety, compliance, and operational excellence.
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
      title: "Pipeline Integrity Monitoring System",
      problem: "An oil company needed comprehensive pipeline monitoring to detect leaks early and ensure environmental compliance.",
      solution: "WDI developed an integrated monitoring system with fiber optic sensors, pressure monitoring, and AI-powered anomaly detection.",
      results: "Achieved 99.9% leak detection accuracy and reduced response time to incidents by 75%.",
      metrics: ["99.9% Accuracy", "75% ↓ Response Time", "Pipeline Safety"]
    },
    {
      title: "Offshore Platform Monitoring & Safety System",
      problem: "An offshore operator required comprehensive monitoring for remote platforms with limited connectivity and harsh conditions.",
      solution: "Built a robust monitoring platform with satellite connectivity, edge computing, and comprehensive safety monitoring.",
      results: "Improved safety compliance by 95% and reduced unplanned downtime by 40% through predictive maintenance.",
      metrics: ["95% ↑ Compliance", "40% ↓ Downtime", "Offshore Platform"]
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
            Oil & Gas Monitoring System Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our monitoring system implementations that enhanced safety and operational efficiency.
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
const oilGasMonitoringFAQs = [
  {
    question: "How do you ensure system reliability in harsh oil and gas environments?",
    answer: "We design systems with industrial-grade components, redundant communication paths, edge computing capabilities, and failover mechanisms. Our solutions are tested for extreme temperatures, explosive atmospheres, and remote connectivity challenges."
  },
  {
    question: "What industrial protocols and SCADA systems do you integrate with?",
    answer: "We work with major industrial protocols including Modbus, OPC-UA, DNP3, and HART. Our platforms integrate with SCADA systems from major vendors like Schneider Electric, Siemens, Honeywell, and ABB for comprehensive facility monitoring."
  },
  {
    question: "How do you handle cybersecurity for critical oil and gas infrastructure?",
    answer: "We implement multi-layered security including network segmentation, encrypted communications, intrusion detection, and compliance with standards like IEC 62443. Our solutions include both IT and OT security measures for comprehensive protection."
  },
  {
    question: "What regulatory compliance features do you implement for oil and gas operations?",
    answer: "Our systems include automated reporting for EPA, OSHA, API standards, and international regulations. We implement emissions monitoring, safety compliance tracking, incident reporting, and audit trail capabilities for comprehensive regulatory compliance."
  },
  {
    question: "Can you integrate with existing asset management and maintenance systems?",
    answer: "Yes, we integrate with major asset management platforms (Maximo, SAP PM), maintenance systems, and enterprise software. Our predictive maintenance algorithms can trigger work orders and coordinate with existing operational workflows."
  }
];

export const OilGasMonitoringSystems = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Industrial & Emerging Tech"
        title="Oil & Gas Monitoring Systems"
        description="Ensure operational safety, environmental compliance, and maximum efficiency with comprehensive monitoring solutions for upstream, midstream, and downstream operations."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View Oil & Gas Case Studies",
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
          title="Oil & Gas Monitoring System FAQs"
          subtitle="Get answers to common questions about our oil and gas monitoring system development services."
          faqs={oilGasMonitoringFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};