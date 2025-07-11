import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { AnimatedGradientText } from "../components/AnimatedGradientText";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  CheckCircle, Smartphone, Tablet, Watch, Code, Shield, Zap, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Database, Globe, Layers, 
  Target, Layout, Rocket, Bug, Brush, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, GraduationCap, ShoppingCart, Truck, Bolt, Palette, Tv,
  DollarSign, Stethoscope, BookOpen, Play, Package, Wifi, Activity, Map, Network,
  UserPlus, Award, Cpu, Settings, Sparkles, Lightbulb, Handshake, Monitor,
  Download, Coffee, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, Eye, 
  Github, Slack, Figma, Chrome, Zap as ZapIcon, Video, MessageCircle, Brain,
  Cog, Layers3, Hexagon, Wallet, CreditCard as PaymentIcon, Users2, Merge,
  Share2, Wrench, BarChart3, GitMerge, Apple, Gauge, Maximize, Fingerprint,
  Gamepad, Building, Briefcase, Microscope, WifiOff, CloudDownload, Repeat,
  Server, PhoneCall, MousePointer, PlusCircle, Code2, Store,
  FileText, ShoppingBag, Newspaper, TicketIcon, Lightbulb as IdeaIcon,
  TrendingUp as GrowthIcon, HelpCircle, ArrowUpRight, Bluetooth, Radio,
  Waves, Headphones, Glasses, HeartPulse, ThermometerSun, Volume2,
  Navigation as NavigationIcon, Compass, BrainCog, Ear, Footprints
} from "lucide-react";

// Wearable & Device App Development Hero Section
const WearableHeroWithCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Wearable & IoT Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Wearable & IoT Development</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Wearable & IoT App Development
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Extending your digital presence to smartwatches, fitness trackers, IoT devices, and emerging platforms for unique user experiences.
              </p>
            </div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4">
                <div className="inline-flex items-center gap-2">
                  <Watch className="w-5 h-5 flex-shrink-0" />
                  <span>Discover Wearable Solutions</span>
                </div>
              </ShimmerButton>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Request a Device App Consultation</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with connected devices visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Connected Devices Ecosystem */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mb-8"
              >
                {/* Central Hub */}
                <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-accent to-purple-600 rounded-full border border-accent/30 shadow-2xl flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping"></div>
                </div>
                
                {/* Connected Devices - Arranged in circle */}
                <div className="relative">
                  {/* Smartwatch */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl border border-blue-400/30 shadow-lg flex items-center justify-center"
                  >
                    <Watch className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* VR Headset */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute -top-10 -right-16 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl border border-purple-400/30 shadow-lg flex items-center justify-center"
                  >
                    <Glasses className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Fitness Tracker */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute top-8 -right-20 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl border border-green-400/30 shadow-lg flex items-center justify-center"
                  >
                    <HeartPulse className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Smart Home Device */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="absolute top-8 -left-20 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl border border-orange-400/30 shadow-lg flex items-center justify-center"
                  >
                    <Home className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Audio Device */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="absolute -top-10 -left-16 w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl border border-pink-400/30 shadow-lg flex items-center justify-center"
                  >
                    <Headphones className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: '-80px', left: '-80px', width: '300px', height: '200px'}}>
                    {/* Animated connection lines */}
                    <g className="opacity-30">
                      <line x1="150" y1="100" x2="150" y2="20" stroke="#E5195E" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" values="0;-4" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="150" y1="100" x2="220" y2="50" stroke="#E5195E" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" values="0;-4" dur="2.5s" repeatCount="indefinite" />
                      </line>
                      <line x1="150" y1="100" x2="240" y2="140" stroke="#E5195E" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" values="0;-4" dur="3s" repeatCount="indefinite" />
                      </line>
                      <line x1="150" y1="100" x2="60" y2="140" stroke="#E5195E" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" values="0;-4" dur="2.2s" repeatCount="indefinite" />
                      </line>
                      <line x1="150" y1="100" x2="80" y2="50" stroke="#E5195E" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" values="0;-4" dur="2.8s" repeatCount="indefinite" />
                      </line>
                    </g>
                  </svg>
                </div>
              </motion.div>
              
              {/* Device Category Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Watch className="w-3 h-3 mr-1" />
                  Smartwatches
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <HeartPulse className="w-3 h-3 mr-1" />
                  Fitness Bands
                </Badge>
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  <Home className="w-3 h-3 mr-1" />
                  Connected Home
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Glasses className="w-3 h-3 mr-1" />
                  VR Headsets
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Wearable/Device Apps
const WearableBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Enhanced User Convenience",
      description: "Instant access to information and controls."
    },
    {
      icon: Activity,
      title: "Unique Data Collection",
      description: "Leveraging device sensors for health, environment data."
    },
    {
      icon: Glasses,
      title: "Immersive Experiences",
      description: "Expanding possibilities with AR/VR, smart home integration."
    },
    {
      icon: TrendingUp,
      title: "New Revenue Streams",
      description: "Tapping into emerging device ecosystems."
    },
    {
      icon: Award,
      title: "Competitive Edge",
      description: "Differentiating your brand with innovative solutions."
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Why Invest in Device-Specific App Development?
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.slice(0, 3).map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Second row with 2 cards centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8"
        >
          {benefits.slice(3).map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Wearable & Device App Capabilities
const WearableCapabilities = () => {
  const capabilities = [
    {
      title: "Smartwatch App Development",
      description: "Wear OS (Android Wear), watchOS (Apple Watch).",
      icon: Watch,
      technologies: ["watchOS", "Wear OS", "SwiftUI", "WatchKit", "Compose for Wear OS", "Health APIs"]
    },
    {
      title: "Fitness & Health Wearables",
      description: "Integration with health platforms, custom fitness apps.",
      icon: HeartPulse,
      technologies: ["HealthKit", "Google Fit", "Heart Rate Sensors", "Step Tracking", "Sleep Monitoring", "Workout APIs"]
    },
    {
      title: "IoT Device Integration",
      description: "Building apps to control and monitor smart devices.",
      icon: Network,
      technologies: ["MQTT", "CoAP", "Zigbee", "Matter", "AWS IoT", "Azure IoT Hub"]
    },
    {
      title: "AR/VR Application Development",
      description: "Immersive experiences for augmented and virtual reality devices.",
      icon: Glasses,
      technologies: ["ARKit", "ARCore", "Unity", "Unreal Engine", "WebXR", "OpenXR"]
    },
    {
      title: "Custom Device Connectivity",
      description: "Bluetooth, NFC, Wi-Fi Direct integration.",
      icon: Bluetooth,
      technologies: ["Bluetooth LE", "NFC", "Wi-Fi Direct", "Zigbee", "Thread", "Ultra Wideband"]
    },
    {
      title: "Data Synchronization & Security",
      description: "Ensuring seamless and secure data flow.",
      icon: Shield,
      technologies: ["End-to-End Encryption", "Secure Boot", "Device Authentication", "Cloud Sync", "Edge Computing", "Privacy by Design"]
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Expertise Across Diverse Device Ecosystems
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {capability.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {capability.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Wearable/Device App Development Process
const WearableProcess = () => {
  const steps = [
    {
      title: "Concept & Device Strategy",
      description: "Comprehensive analysis of target devices and user contexts to define optimal interaction paradigms.",
      icon: Target
    },
    {
      title: "UI/UX Design (Context-specific)",
      description: "Creating interfaces optimized for small screens, voice commands, gestures, and ambient interactions.",
      icon: Palette
    },
    {
      title: "Development & Hardware Integration",
      description: "Building applications with deep hardware integration and platform-specific optimizations.",
      icon: Code
    },
    {
      title: "Rigorous Device Testing",
      description: "Comprehensive testing across device variations, sensor accuracy, and real-world usage scenarios.",
      icon: Bug
    },
    {
      title: "Deployment & Ongoing Support",
      description: "Platform deployment with continuous monitoring, updates, and emerging device compatibility.",
      icon: Rocket
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Tailored Process for Emerging Device Applications
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden lg:block"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-accent">0{index + 1}</div>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background z-10 hidden lg:block"></div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Use Cases for Wearable/Device Apps
const WearableUseCases = () => {
  const useCases = [
    {
      title: "HealthTech & Wellness",
      description: "Remote patient monitoring, fitness tracking.",
      icon: Stethoscope,
      examples: ["Patient Monitoring", "Fitness Tracking", "Medication Reminders", "Health Analytics"]
    },
    {
      title: "Smart Home Automation",
      description: "Controlling lighting, security, appliances.",
      icon: Home,
      examples: ["Lighting Control", "Security Systems", "Climate Control", "Appliance Management"]
    },
    {
      title: "Industrial IoT",
      description: "Monitoring equipment, predictive maintenance.",
      icon: Building,
      examples: ["Equipment Monitoring", "Predictive Maintenance", "Safety Systems", "Asset Tracking"]
    },
    {
      title: "Gaming & Entertainment",
      description: "Immersive VR/AR games, interactive experiences.",
      icon: Gamepad2,
      examples: ["VR Gaming", "AR Experiences", "Interactive Media", "Spatial Computing"]
    },
    {
      title: "Retail & Payments",
      description: "Contactless payments, smart shopping assistants.",
      icon: CreditCard,
      examples: ["Contactless Pay", "Shopping Assistance", "Loyalty Programs", "Inventory Tracking"]
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Industries & Scenarios Benefiting from Device Apps
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.slice(0, 3).map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.examples.map((example) => (
                          <Badge key={example} variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Second row with 2 cards centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8"
        >
          {useCases.slice(3).map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.examples.map((example) => (
                          <Badge key={example} variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Wearable/Device Tech Stack
const WearableTechStack = () => {
  const technologies = [
    { name: "Wear OS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", category: "Wearable Platform" },
    { name: "watchOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", category: "Wearable Platform" },
    { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", category: "iOS Development" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", category: "Android Development" },
    { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", category: "AR/VR Development" },
    { name: "AWS IoT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "IoT Platform" }
  ];

  const specializedTech = [
    { name: "Bluetooth LE", icon: Bluetooth, description: "Low-energy device connectivity" },
    { name: "MQTT", icon: MessageSquare, description: "Lightweight messaging protocol for IoT" },
    { name: "Google Fit API", icon: HeartPulse, description: "Health and fitness data integration" },
    { name: "HealthKit API", icon: Stethoscope, description: "Apple health platform integration" }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Leveraging Specialized Technologies for Seamless Device Integration
          </h2>
        </motion.div>

        {/* Core Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <ImageWithFallback
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedTech.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center h-full">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Wearable Case Studies
const WearableCaseStudies = () => {
  const caseStudies = [
    {
      title: "HealthTech Wearable Platform",
      client: "VitalCare",
      description: "Comprehensive health monitoring system with smartwatch integration for real-time patient data collection and emergency alerts",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format",
      results: "50% improved patient compliance",
      gradient: "from-green-500/20 to-teal-500/20",
      features: "Real-time monitoring, Emergency alerts, Health analytics"
    },
    {
      title: "Smart Home Control Hub",
      client: "HomeConnect",
      description: "IoT platform controlling lighting, security, and climate systems through voice and wearable interfaces for seamless automation",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
      results: "30% energy savings",
      gradient: "from-blue-500/20 to-purple-500/20",
      features: "Voice control, Automated scheduling, Energy optimization"
    },
    {
      title: "Industrial AR Maintenance",
      client: "ManufactureTech",
      description: "AR application for equipment maintenance and training with hands-free operation and real-time guidance for technical staff",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format",
      results: "40% faster repairs",
      gradient: "from-orange-500/20 to-red-500/20",
      features: "AR overlays, Step-by-step guidance, Remote assistance"
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8">
            Innovative Device Applications by WDI
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Watch className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                          {study.results}
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="px-8 pb-6 flex-1">
                    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${study.gradient} p-4 border border-gray-700`}>
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-white uppercase tracking-wider">Key Features:</h4>
                      <p className="text-xs text-gray-400">
                        {study.features}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span className="text-sm font-medium">VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Mid-Page CTA
const WearableInlineCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <Watch className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Innovation Edge</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Innovate on the{" "}
              <span className="text-accent">Edge of Technology?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore the possibilities of extending your brand to new device ecosystems.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Lightbulb className="w-6 h-6 flex-shrink-0" />
                <span>Discuss Your Wearable/IoT Idea</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Wearable FAQs
const WearableFAQs = () => {
  const faqs = [
    {
      question: "What types of wearable devices do you develop for?",
      answer: "We develop for a wide range of wearable devices including smartwatches (Apple Watch, Wear OS), fitness trackers, smart glasses, AR/VR headsets, health monitoring devices, and emerging wearable technologies. Our expertise covers both consumer and enterprise-grade wearable platforms."
    },
    {
      question: "How do you ensure data security on IoT devices?",
      answer: "We implement multi-layered security including end-to-end encryption, secure device authentication, regular security updates, and privacy-by-design principles. We follow industry standards like OAuth 2.0, TLS encryption, and implement secure boot processes for IoT devices to prevent unauthorized access."
    },
    {
      question: "Can you integrate with existing mobile or web apps?",
      answer: "Absolutely! We specialize in creating seamless integrations between wearable/IoT apps and existing mobile or web applications. This includes data synchronization, shared user accounts, consistent UI/UX across platforms, and unified notification systems to provide a cohesive user experience."
    },
    {
      question: "What is the typical development timeline for a wearable app?",
      answer: "Development timelines vary based on complexity: Simple wearable apps (8-12 weeks), Medium complexity with sensor integration (12-20 weeks), Complex IoT ecosystems (20+ weeks). Factors affecting timeline include device compatibility requirements, custom hardware integration, and testing across multiple device types."
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-8">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 px-10 shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-10 text-xl">
                  <span className="font-semibold text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-10 text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

// Final CTA Section
const WearableFinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <Watch className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Connected Future</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Pioneer New Experiences with{" "}
            <span className="text-accent">WDI's Device App Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From smartwatches to complex IoT systems, we build connected applications that push the boundaries of digital interaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ShimmerButton className="px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-accent/25">
              <div className="inline-flex items-center gap-3">
                <Rocket className="w-6 h-6 flex-shrink-0" />
                <span>Start Your Wearable/IoT Project</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Device strategy • Hardware integration • Emerging technologies
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Main Wearable & Device App Development Page
export const WearableDeviceDevelopment = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <WearableHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <WearableBenefits />
      </section>
      
      {/* Capabilities */}
      <section className="bg-card">
        <WearableCapabilities />
      </section>
      
      {/* Development Process */}
      <section className="bg-background">
        <WearableProcess />
      </section>
      
      {/* Use Cases */}
      <section className="bg-card">
        <WearableUseCases />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-background">
        <WearableTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-card">
        <WearableCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <WearableInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <WearableFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <WearableFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};