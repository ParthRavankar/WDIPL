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
  TrendingUp as GrowthIcon, HelpCircle, ArrowUpRight
} from "lucide-react";

// PWA Hero Section
const PWAHeroWithCTA = () => {
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
            {/* PWA Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Progressive Web Apps</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Progressive Web App (PWA) Development
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Deliver app-like experiences directly through the web browser, combining the best of web and mobile apps for unparalleled reach.
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
                  <Globe className="w-5 h-5 flex-shrink-0" />
                  <span>Explore PWA Benefits</span>
                </div>
              </ShimmerButton>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Get a PWA Quote</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with PWA browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* PWA Browser Mockup */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mb-8"
              >
                {/* Mobile Device Frame */}
                <div className="relative mx-auto w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl p-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4 px-2">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-white rounded-full"></div>
                      <div className="w-4 h-2 bg-white/60 rounded-full"></div>
                      <div className="w-4 h-2 bg-white/30 rounded-full"></div>
                    </div>
                    <div className="text-white text-xs">9:41</div>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3 h-3 text-white" />
                      <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Browser Bar */}
                  <div className="bg-gray-700 rounded-lg p-2 mb-4 flex items-center gap-2">
                    <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                      <Globe className="w-2 h-2 text-white" />
                    </div>
                    <div className="flex-1 bg-gray-600 rounded-md px-2 py-1">
                      <div className="text-xs text-gray-300">yourapp.com</div>
                    </div>
                    <div className="text-accent text-xs font-medium">PWA</div>
                  </div>
                  
                  {/* App Content */}
                  <div className="bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-lg p-4 h-64 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Your PWA</div>
                        <div className="text-gray-300 text-xs">App-like experience</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      <div className="h-3 bg-white/20 rounded-full"></div>
                      <div className="h-3 bg-white/15 rounded-full w-3/4"></div>
                      <div className="h-3 bg-white/10 rounded-full w-1/2"></div>
                      
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <WifiOff className="w-4 h-4 text-white/60" />
                        </div>
                        <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <CloudDownload className="w-4 h-4 text-white/60" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Install Banner */}
                    <div className="mt-4 bg-white/10 rounded-lg p-2 flex items-center justify-between">
                      <div className="text-xs text-white">Add to Home Screen</div>
                      <PlusCircle className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* PWA Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  <WifiOff className="w-3 h-3 mr-1" />
                  Offline Ready
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <CloudDownload className="w-3 h-3 mr-1" />
                  Installable
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Globe className="w-3 h-3 mr-1" />
                  Cross-Platform
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of PWAs
const PWABenefits = () => {
  const benefits = [
    {
      icon: WifiOff,
      title: "Offline Capability",
      description: "Works reliably even with no or low network connectivity, ensuring users can access content anywhere."
    },
    {
      icon: CloudDownload,
      title: "Installable",
      description: "Users can 'add to home screen' without app store downloads, reducing friction for user acquisition."
    },
    {
      icon: Search,
      title: "Discoverable",
      description: "SEO-friendly and discoverable via search engines like regular websites, improving organic reach."
    },
    {
      icon: Zap,
      title: "Instant Load Times",
      description: "Cached assets and service workers ensure lightning-fast loading speeds and smooth performance."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Single codebase for web and mobile-like experience, significantly reducing development costs."
    },
    {
      icon: Monitor,
      title: "Platform Agnostic",
      description: "Runs on any device with a modern browser, ensuring maximum compatibility and reach."
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
            Why Choose a Progressive Web App?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            PWAs combine the best of web and mobile apps, delivering native-like experiences with web-based flexibility and reach.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
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
      </div>
    </section>
  );
};

// How PWAs Work
const HowPWAsWork = () => {
  const features = [
    {
      icon: Server,
      title: "Service Workers",
      description: "Powering offline capabilities and push notifications through background scripts."
    },
    {
      icon: Layout,
      title: "Web App Manifest",
      description: "Defining app appearance on home screen and providing native app-like behavior."
    },
    {
      icon: Shield,
      title: "HTTPS",
      description: "Ensuring secure data transmission and enabling advanced PWA features."
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Adapting seamlessly to all screen sizes and device orientations."
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Re-engaging users effectively with timely and relevant notifications."
    },
    {
      icon: Repeat,
      title: "Background Sync",
      description: "Data updates even when offline, ensuring users always have fresh content."
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
            Bridging the Gap Between Web and Native
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            PWAs leverage cutting-edge web technologies to deliver app-like experiences that work seamlessly across all platforms.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
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
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
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

// PWA Development Process
const PWAProcess = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      description: "Comprehensive analysis of your business needs to determine the optimal PWA approach and feature set.",
      icon: Target
    },
    {
      title: "UI/UX Design (Web-first, App-like)",
      description: "Creating responsive designs that feel native while maintaining web accessibility and usability standards.",
      icon: Palette
    },
    {
      title: "PWA Development (Frontend + Backend)",
      description: "Building the PWA using modern web technologies with service workers, manifest, and offline capabilities.",
      icon: Code
    },
    {
      title: "Testing & Optimization",
      description: "Rigorous testing across devices, browsers, and network conditions to ensure optimal performance.",
      icon: Bug
    },
    {
      title: "Deployment & Support",
      description: "Launching your PWA with ongoing maintenance, updates, and performance monitoring.",
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
            Our Agile Approach to PWA Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures your PWA delivers exceptional user experiences while meeting your business objectives.
          </p>
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

// PWA Use Cases
const PWAUseCases = () => {
  const useCases = [
    {
      title: "eCommerce Stores",
      description: "Faster checkout processes and improved conversion rates with offline browsing capabilities.",
      icon: ShoppingBag,
      examples: ["Product Catalogs", "Shopping Carts", "Wishlist", "Order Tracking"]
    },
    {
      title: "Content Platforms",
      description: "News, blogs, and media sites with offline access for improved user engagement.",
      icon: Newspaper,
      examples: ["News Sites", "Blogs", "Magazines", "Media Platforms"]
    },
    {
      title: "Event & Ticketing",
      description: "Seamless booking and information access with offline ticket storage and updates.",
      icon: Calendar,
      examples: ["Event Booking", "Ticket Management", "Venue Information", "Schedule Updates"]
    },
    {
      title: "Startups & MVPs",
      description: "Rapid market entry with broad reach and cost-effective development approach.",
      icon: Rocket,
      examples: ["Prototype Testing", "Market Validation", "User Feedback", "Iterative Development"]
    },
    {
      title: "Global Audience",
      description: "Perfect for businesses serving areas with unreliable internet connectivity.",
      icon: Globe,
      examples: ["Emerging Markets", "Rural Areas", "Travel Apps", "International Services"]
    },
    {
      title: "Business Tools",
      description: "Productivity apps and business solutions with offline functionality.",
      icon: Briefcase,
      examples: ["CRM Systems", "Project Management", "Inventory", "Time Tracking"]
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
            When a PWA is the Right Choice for Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Progressive Web Apps excel in scenarios where broad reach, cost-effectiveness, and offline capabilities are crucial.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => {
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
      </div>
    </section>
  );
};

// PWA Tech Stack
const PWATechStack = () => {
  const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Language" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Language" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Markup" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Styling" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" }
  ];

  const pwaFeatures = [
    { name: "Service Workers", icon: Server, description: "Background processing and offline capabilities" },
    { name: "Web App Manifest", icon: Layout, description: "App-like appearance and behavior" },
    { name: "Lighthouse", icon: Zap, description: "PWA performance and quality auditing" },
    { name: "Push API", icon: Bell, description: "Real-time notifications and engagement" }
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
            Modern Web Technologies for Powerful PWA Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge web technologies and PWA-specific APIs to deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Core Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Core Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
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

        {/* PWA-Specific Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">PWA-Specific Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pwaFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
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
                    <h4 className="font-semibold text-foreground mb-2">{feature.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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

// PWA Case Studies
const PWACaseStudies = () => {
  const caseStudies = [
    {
      title: "eCommerce PWA Success",
      client: "ShopFast",
      description: "Increased conversion rates by 40% with offline browsing and instant loading capabilities",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop&auto=format",
      results: "40% higher conversions",
      gradient: "from-accent/20 to-accent/10",
      features: "Offline cart, Push notifications, Fast loading"
    },
    {
      title: "News Platform PWA",
      client: "GlobalNews",
      description: "Improved user engagement with offline reading and push notifications for breaking news",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&auto=format",
      results: "60% more engagement",
      gradient: "from-blue-500/20 to-purple-500/20",
      features: "Offline articles, Breaking news alerts, Fast navigation"
    },
    {
      title: "Event Ticketing PWA",
      client: "TicketHub",
      description: "Streamlined event booking process with offline ticket access and real-time updates",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop&auto=format",
      results: "25% faster booking",
      gradient: "from-green-500/20 to-teal-500/20",
      features: "Offline tickets, Real-time updates, Easy booking"
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
            Successful Progressive Web Apps by WDI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how our PWA solutions have transformed businesses across various industries.
          </p>
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
                        <Globe className="w-6 h-6 text-accent" />
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
const PWAInlineCTA = () => {
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
                <Globe className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">PWA Power</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Explore the Power of{" "}
              <span className="text-accent">PWAs for Your Business</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Unlock a broader audience and enhanced user engagement with a progressive web app that works everywhere.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Eye className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free PWA Assessment</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// PWA FAQs
const PWAFAQs = () => {
  const faqs = [
    {
      question: "Are PWAs suitable for all types of apps?",
      answer: "PWAs are ideal for content-heavy apps, eCommerce, news platforms, and business tools. They're perfect when you need broad reach and offline capabilities. However, for apps requiring intensive device integration (like camera apps with advanced features) or high-performance gaming, native apps might be better suited."
    },
    {
      question: "How do PWAs compare to native apps in terms of features?",
      answer: "PWAs offer many native-like features including offline functionality, push notifications, and home screen installation. While they can't access all device features that native apps can, they provide 80-90% of native functionality with significantly broader reach and lower development costs."
    },
    {
      question: "Do PWAs show up in app stores?",
      answer: "Yes! PWAs can be submitted to app stores including Google Play Store and Microsoft Store. Apple's App Store also accepts PWAs with some additional requirements. This gives you the best of both worlds - web distribution and app store presence."
    },
    {
      question: "What is the maintenance for a PWA?",
      answer: "PWA maintenance is generally simpler than native apps since you maintain one codebase. Updates are pushed directly to users like web updates, but you'll need to manage service worker updates, cache strategies, and ensure compatibility across browsers and devices."
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Common questions about Progressive Web Apps.
          </p>
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
                className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-10 shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-10 text-xl">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-10 text-lg leading-relaxed">
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
const PWAFinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
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
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Next Generation Web</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            Build Your Next Generation Web Experience with a{" "}
            <span className="text-accent">PWA</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            WDI helps you harness the speed, reliability, and engagement of PWAs for your audience.
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
                <span>Start Your PWA Project</span>
              </div>
            </ShimmerButton>

            <p className="text-gray-400 text-sm">
              Expert consultation • Modern web technologies • Ongoing support
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

// Main PWA Development Page
export const PWADevelopment = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <PWAHeroWithCTA />
      </section>
      
      {/* PWA Benefits */}
      <section className="bg-background">
        <PWABenefits />
      </section>
      
      {/* How PWAs Work */}
      <section className="bg-card">
        <HowPWAsWork />
      </section>
      
      {/* Development Process */}
      <section className="bg-background">
        <PWAProcess />
      </section>
      
      {/* Use Cases */}
      <section className="bg-card">
        <PWAUseCases />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-background">
        <PWATechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-card">
        <PWACaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <PWAInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-background">
        <PWAFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-card">
        <PWAFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-background">
        <Footer />
      </section>
    </div>
  );
};