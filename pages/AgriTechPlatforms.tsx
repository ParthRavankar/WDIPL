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
  Sprout, CloudRain, BarChart3, Thermometer, Eye, 
  Database, Bot, Target, CheckCircle, Star, 
  Zap, Shield, Globe, Award, Satellite
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
            <span className="text-[#E5195E]">AgriTech Platforms</span>
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
                  Modern agriculture faces increasing demands for productivity, sustainability, and resource optimization. Farmers need data-driven insights for crop management, precision agriculture tools, supply chain transparency, and sustainable farming practices. Challenges include integrating IoT sensors, weather data, soil analytics, and market information into actionable farming decisions.
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
                  Our AgriTech Platform Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing comprehensive AgriTech platforms that empower farmers with data-driven insights. We create solutions for precision agriculture, crop monitoring, livestock management, supply chain optimization, and agricultural marketplaces, leveraging IoT, AI, and satellite data to maximize yields, reduce costs, and promote sustainable farming practices.
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
      icon: Satellite,
      title: "Precision Agriculture & Field Monitoring",
      description: "Satellite imagery, drone data integration, soil analysis, and GPS-guided farming equipment for optimized field management."
    },
    {
      icon: Eye,
      title: "Crop Health & Disease Detection",
      description: "AI-powered image recognition for early disease detection, pest identification, and crop health monitoring."
    },
    {
      icon: CloudRain,
      title: "Weather & Climate Data Integration",
      description: "Real-time weather monitoring, climate predictions, irrigation scheduling, and weather-based decision support systems."
    },
    {
      icon: BarChart3,
      title: "Yield Prediction & Analytics",
      description: "Data analytics for yield forecasting, harvest planning, market timing, and financial planning tools."
    },
    {
      icon: Database,
      title: "Farm Management & Records",
      description: "Comprehensive farm record keeping, compliance tracking, inventory management, and operational planning tools."
    },
    {
      icon: Bot,
      title: "Livestock Monitoring & Management",
      description: "RFID tracking, health monitoring, breeding management, and automated feeding systems for livestock operations."
    },
    {
      icon: Globe,
      title: "Agricultural Marketplace & Supply Chain",
      description: "Direct-to-consumer sales platforms, B2B agricultural marketplaces, and supply chain transparency tools."
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
            Powerful Features for Your AgriTech Platforms
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create intelligent agricultural solutions that maximize yields and promote sustainability.
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
      icon: Satellite,
      title: "IoT & Sensor Integration",
      description: "Expertise in integrating agricultural IoT devices, weather stations, soil sensors, and satellite data for comprehensive monitoring."
    },
    {
      icon: Bot,
      title: "AI for Agricultural Intelligence",
      description: "Leveraging machine learning for crop prediction, disease detection, and automated decision-making systems."
    },
    {
      icon: Sprout,
      title: "Sustainable Agriculture Focus",
      description: "Building solutions that promote sustainable farming practices, resource conservation, and environmental stewardship."
    },
    {
      icon: Globe,
      title: "Farm-to-Market Solutions",
      description: "Creating platforms that connect farmers directly with markets, ensuring fair pricing and supply chain transparency."
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
            Why Partner with WDI for AgriTech Platform Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create agricultural technology solutions that truly transform farming operations.
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
      title: "Smart Irrigation Management System",
      problem: "A large farming operation needed to optimize water usage and improve crop yields through intelligent irrigation management.",
      solution: "WDI developed an IoT-enabled irrigation system with soil moisture sensors, weather integration, and automated scheduling.",
      results: "Reduced water usage by 35% while increasing crop yields by 20% through precision irrigation management.",
      metrics: ["35% ↓ Water Usage", "20% ↑ Yields", "Smart Irrigation"]
    },
    {
      title: "Crop Disease Detection Platform",
      problem: "A agricultural cooperative needed early disease detection capabilities to prevent crop losses across member farms.",
      solution: "Built an AI-powered platform using computer vision to identify diseases from field images and provide treatment recommendations.",
      results: "Achieved 95% accuracy in disease detection and reduced crop losses by 40% through early intervention.",
      metrics: ["95% Accuracy", "40% ↓ Losses", "AI-Powered"]
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
            AgriTech Platform Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our AgriTech platform implementations that transformed agricultural operations.
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
const agriTechFAQs = [
  {
    question: "How do you integrate IoT sensors and agricultural equipment into farming platforms?",
    answer: "We integrate with various IoT devices including soil moisture sensors, weather stations, GPS tractors, and irrigation systems. Our platforms support protocols like LoRaWAN, Zigbee, and cellular connectivity, with robust data collection and real-time monitoring capabilities."
  },
  {
    question: "What AI and machine learning capabilities do you implement for crop management?",
    answer: "We develop AI models for crop disease detection, yield prediction, pest identification, and resource optimization. Our computer vision systems analyze satellite imagery and field photos, while ML algorithms provide predictive insights for farming decisions."
  },
  {
    question: "Can you integrate with existing farm management systems and equipment?",
    answer: "Yes, we have experience integrating with major farm management software, precision agriculture equipment (John Deere, Case IH), and agricultural data platforms. We ensure seamless data flow and operational continuity."
  },
  {
    question: "How do you handle agricultural data security and farmer privacy?",
    answer: "We implement robust data security measures including encryption, secure cloud storage, and privacy controls. Farmers maintain ownership of their data with granular sharing permissions and compliance with agricultural data privacy standards."
  },
  {
    question: "What support do you provide for sustainable farming and environmental compliance?",
    answer: "Our platforms include features for carbon footprint tracking, water usage optimization, pesticide management, soil health monitoring, and regulatory compliance reporting to support sustainable farming practices and environmental stewardship."
  }
];

export const AgriTechPlatforms = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Industrial & Emerging Tech"
        title="AgriTech Platforms"
        description="Empower farmers with data-driven insights and smart agriculture solutions that maximize yields, optimize resources, and promote sustainable farming practices."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View AgriTech Case Studies",
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
          title="AgriTech Platform FAQs"
          subtitle="Get answers to common questions about our agricultural technology development services."
          faqs={agriTechFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};