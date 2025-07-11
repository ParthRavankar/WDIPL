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
  TrendingUp as GrowthIcon, HelpCircle, ArrowUpRight, Workflow, 
  BarChart, CloudCog, Layers2, Boxes, Puzzle, Cloud, CloudLightning,
  Scaling, Container, Component, Repeat2, Analytics
} from "lucide-react";

// SaaS Product Engineering Hero Section
const SaaSHeroWithCTA = () => {
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
            {/* SaaS Engineering Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Web & Cloud Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                SaaS Product Engineering Services
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                From ideation to scalable deployment, WDI specializes in engineering robust, multi-tenant SaaS products that drive recurring revenue.
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
                  <Rocket className="w-5 h-5 flex-shrink-0" />
                  <span>Launch Your SaaS Product</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>Explore Our SaaS Portfolio</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with SaaS architecture visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* SaaS Architecture Diagram */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Central SaaS Platform */}
                <div className="relative mx-auto w-40 h-32 bg-gradient-to-br from-accent to-purple-600 rounded-2xl border border-accent/30 shadow-2xl flex items-center justify-center mb-8">
                  <div className="text-center">
                    <Cloud className="w-10 h-10 text-white mx-auto mb-2" />
                    <div className="text-white text-sm font-medium">SaaS Platform</div>
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/30 animate-ping"></div>
                </div>
                
                {/* Multi-tenant Architecture */}
                <div className="relative grid grid-cols-3 gap-4 mb-8">
                  {/* Tenant 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl border border-blue-400/30 shadow-lg p-4 text-center"
                  >
                    <Users className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Tenant A</div>
                  </motion.div>
                  
                  {/* Tenant 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl border border-green-400/30 shadow-lg p-4 text-center"
                  >
                    <Building className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Tenant B</div>
                  </motion.div>
                  
                  {/* Tenant 3 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl border border-orange-400/30 shadow-lg p-4 text-center"
                  >
                    <Store className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Tenant C</div>
                  </motion.div>
                </div>
                
                {/* Infrastructure Layer */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg border border-purple-400/30 shadow-lg p-3 text-center"
                  >
                    <Database className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Database</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg border border-pink-400/30 shadow-lg p-3 text-center"
                  >
                    <Network className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">APIs</div>
                  </motion.div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: '-20px', width: '100%', height: '320px'}}>
                  <g className="opacity-30">
                    {/* Lines from SaaS Platform to Tenants */}
                    <line x1="160" y1="80" x2="80" y2="140" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="80" x2="160" y2="140" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="2.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="80" x2="240" y2="140" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" repeatCount="indefinite" />
                    </line>
                  </g>
                </svg>
              </motion.div>
              
              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <CloudLightning className="w-3 h-3 mr-1" />
                  Multi-Tenant
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Scalable
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of SaaS Product Engineering
const SaaSBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalability for Growth",
      description: "Architected for exponential user growth and feature expansion."
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency & ROI",
      description: "Optimized development for lower TCO and higher profitability."
    },
    {
      icon: Shield,
      title: "Secure Multi-Tenancy",
      description: "Robust solutions for isolating customer data securely."
    },
    {
      icon: Zap,
      title: "Rapid Feature Delivery",
      description: "Agile methodologies for continuous innovation."
    },
    {
      icon: Network,
      title: "Seamless Integrations",
      description: "Expertise in connecting with other platforms and APIs."
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
            Why Partner with WDI for Your SaaS Product?
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

// SaaS Product Engineering Process
const SaaSProcess = () => {
  const steps = [
    {
      title: "Ideation & Market Validation",
      description: "Research-driven validation of your SaaS concept with competitive analysis and market opportunity assessment.",
      icon: Lightbulb
    },
    {
      title: "Product Strategy & MVP Definition",
      description: "Strategic planning to define core features, user personas, and minimum viable product scope for rapid market entry.",
      icon: Target
    },
    {
      title: "Architecture & Design",
      description: "Scalable cloud architecture design with multi-tenant considerations, security frameworks, and technology selection.",
      icon: Layout
    },
    {
      title: "Development & Iteration",
      description: "Agile development sprints with continuous integration, regular demos, and iterative feature refinement.",
      icon: Code
    },
    {
      title: "Deployment & DevOps",
      description: "Automated deployment pipelines, monitoring systems, and scalable infrastructure management.",
      icon: Rocket
    },
    {
      title: "Growth & Optimization",
      description: "Performance optimization, feature expansion, and scaling strategies based on user feedback and analytics.",
      icon: TrendingUp
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
            Your SaaS Journey: From Concept to Market Leader
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

// SaaS Engineering Services
const SaaSServices = () => {
  const services = [
    {
      title: "SaaS MVP Development",
      description: "Rapidly launch and validate your core idea.",
      icon: Rocket,
      features: ["Core Feature Set", "User Authentication", "Basic Analytics", "Payment Integration"]
    },
    {
      title: "Full-Cycle SaaS Product Development",
      description: "End-to-end engineering from scratch.",
      icon: Code,
      features: ["Complete Development", "Advanced Features", "Integrations", "Scaling Support"]
    },
    {
      title: "SaaS Architecture Design",
      description: "Scalable, secure, and cost-effective cloud architectures.",
      icon: Layout,
      features: ["Multi-tenant Architecture", "Microservices", "Cloud Infrastructure", "Security Design"]
    },
    {
      title: "Legacy SaaS Modernization",
      description: "Re-platforming and upgrading existing SaaS solutions.",
      icon: RefreshCcw,
      features: ["Platform Migration", "Performance Optimization", "Feature Updates", "Security Enhancement"]
    },
    {
      title: "Integrations & APIs",
      description: "Building robust APIs and third-party integrations.",
      icon: Network,
      features: ["RESTful APIs", "Third-party Integrations", "Webhook Systems", "API Documentation"]
    },
    {
      title: "DevOps & Cloud Management",
      description: "Automation for continuous delivery and operations.",
      icon: CloudCog,
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Auto-scaling"]
    },
    {
      title: "Data Analytics & Reporting",
      description: "Embedding actionable insights into your product.",
      icon: BarChart,
      features: ["Custom Dashboards", "Real-time Analytics", "Reporting Tools", "Data Visualization"]
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
            Comprehensive SaaS Engineering Capabilities
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = service.icon;
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
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
                            {feature}
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

        {/* Last service card centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="w-full max-w-md">
            {services.slice(6).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index + 6}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 6) * 0.1 }}
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
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
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

// SaaS Tech Stack
const SaaSTechStack = () => {
  const cloudPlatforms = [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "Cloud Platform" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud Platform" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Cloud Platform" }
  ];

  const containerization = [
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Containerization" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "Orchestration" }
  ];

  const backends = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Backend" },
    { name: "Ruby", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg", category: "Backend" }
  ];

  const frontends = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend" }
  ];

  const databases = [
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Cache" }
  ];

  const specializedTools = [
    { name: "Microservices", icon: Component, description: "Distributed architecture for scalability" },
    { name: "GraphQL", icon: Network, description: "Flexible API query language" },
    { name: "Auto-scaling", icon: TrendingUp, description: "Dynamic resource management" },
    { name: "Multi-tenancy", icon: Users, description: "Isolated customer environments" }
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
            Building Resilient and High-Performing SaaS Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With cutting-edge technologies designed for scale, security, and performance.
          </p>
        </motion.div>

        {/* Cloud Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Cloud Platforms</h3>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {cloudPlatforms.map((tech, index) => (
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
                      className="w-10 h-10 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend & Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Backend */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Backend Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {backends.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group"
                  >
                    <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center">
                      <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                        <ImageWithFallback
                          src={tech.logo}
                          alt={tech.name}
                          className="w-8 h-8 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{tech.name}</h4>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Frontend Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                {frontends.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group"
                  >
                    <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center">
                      <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                        <ImageWithFallback
                          src={tech.logo}
                          alt={tech.name}
                          className="w-8 h-8 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{tech.name}</h4>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specialized SaaS Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Specialized SaaS Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedTools.map((tool, index) => {
              const IconComponent = tool.icon;
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
                    <h4 className="font-semibold text-foreground mb-2">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
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

// SaaS Case Studies
const SaaSCaseStudies = () => {
  const caseStudies = [
    {
      title: "Enterprise CRM SaaS Platform",
      client: "SalesTech Pro",
      description: "Comprehensive customer relationship management platform with advanced analytics, automation workflows, and multi-tenant architecture supporting 10,000+ users",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      results: "500% user growth in 18 months",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "Multi-tenancy, Advanced Analytics, Workflow Automation"
    },
    {
      title: "Healthcare Practice Management SaaS",
      client: "MedFlow Solutions",
      description: "HIPAA-compliant practice management system with patient scheduling, billing automation, and telehealth integration for healthcare providers",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&auto=format",
      results: "99.9% uptime achieved",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "HIPAA Compliance, Telehealth Integration, Automated Billing"
    },
    {
      title: "Project Management SaaS Suite",
      client: "TeamSync",
      description: "Collaborative project management platform with real-time collaboration, resource planning, and advanced reporting for distributed teams",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format",
      results: "50% faster project delivery",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "Real-time Collaboration, Resource Planning, Advanced Reporting"
    }
  ];

  return (
    <section className="py-32 bg-black" id="case-studies">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8">
            Successful SaaS Products Engineered by WDI
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
                        <Cloud className="w-6 h-6 text-accent" />
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
const SaaSInlineCTA = () => {
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
                <Lightbulb className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Unicorn Potential</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Build Your Next{" "}
              <span className="text-accent">Unicorn SaaS Product?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let's validate your idea and map out a scalable development plan.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free SaaS Strategy Call</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire SaaS Developers
const HireSaaSDevelopers = () => {
  const developerTypes = [
    {
      title: "SaaS Architects",
      description: "System architects specializing in scalable SaaS architecture design",
      icon: Layout,
      skills: ["Multi-tenant Architecture", "Microservices", "Cloud Infrastructure", "Security Design"]
    },
    {
      title: "Full-Stack SaaS Engineers",
      description: "End-to-end developers with SaaS product development expertise",
      icon: Code,
      skills: ["Frontend + Backend", "API Development", "Database Design", "Payment Integration"]
    },
    {
      title: "DevOps Specialists",
      description: "Infrastructure automation and deployment pipeline experts",
      icon: CloudCog,
      skills: ["CI/CD Pipelines", "Container Orchestration", "Monitoring", "Auto-scaling"]
    },
    {
      title: "Product Engineers",
      description: "Feature-focused engineers with product development experience",
      icon: Rocket,
      skills: ["Feature Development", "User Analytics", "A/B Testing", "Performance Optimization"]
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
            Need Specialized SaaS Talent?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hire experienced SaaS architects, engineers, and DevOps specialists to accelerate your product development.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
        >
          {developerTypes.map((type, index) => {
            const IconComponent = type.icon;
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
                      {type.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Core Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
                            {skill}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShimmerButton className="text-lg px-8 py-4">
              <div className="inline-flex items-center gap-2">
                <Users className="w-5 h-5 flex-shrink-0" />
                <span>Hire SaaS Developers</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <div className="inline-flex items-center gap-2">
                <FileText className="w-5 h-5 flex-shrink-0" />
                <span>Request Profiles</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// SaaS FAQs
const SaaSFAQs = () => {
  const faqs = [
    {
      question: "What is multi-tenancy in SaaS and how do you handle it?",
      answer: "Multi-tenancy allows multiple customers (tenants) to share the same application instance while keeping their data completely isolated. We implement multi-tenancy through database-level isolation, tenant-specific configurations, and secure data partitioning. This approach reduces costs while maintaining security and customization capabilities for each tenant."
    },
    {
      question: "How do you ensure the scalability of a SaaS product?",
      answer: "We design SaaS products with scalability from day one using microservices architecture, auto-scaling cloud infrastructure, database optimization, and caching strategies. Our approach includes horizontal scaling, load balancing, and performance monitoring to ensure your product can handle exponential user growth without compromising performance."
    },
    {
      question: "What's the typical timeline for SaaS MVP development?",
      answer: "SaaS MVP development typically takes 12-20 weeks, depending on complexity and feature scope. This includes market research, architecture design, core feature development, multi-tenant setup, payment integration, and initial testing. We use agile methodologies to deliver working software incrementally and gather user feedback early."
    },
    {
      question: "Do you assist with post-launch feature development and scaling?",
      answer: "Absolutely! We provide ongoing development support including feature expansion, performance optimization, scaling infrastructure, security updates, and technical maintenance. Our post-launch services include analytics implementation, user feedback integration, and continuous product improvement based on market demands."
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
const SaaSFinalCTA = () => {
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
                <Cloud className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Market Leadership</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Engineer a Market-Leading{" "}
            <span className="text-accent">SaaS Product with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with our experts to build a scalable, secure, and user-centric SaaS solution that captivates your market.
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
                <span>Start Your SaaS Project Today</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              MVP Development • Full-scale Engineering • Growth & Optimization
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

// Main SaaS Product Engineering Page
export const SaaSProductEngineering = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <SaaSHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <SaaSBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <SaaSProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <SaaSServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <SaaSTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <SaaSCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <SaaSInlineCTA />
      </section>
      
      {/* Hire Developers */}
      <section className="bg-background">
        <HireSaaSDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <SaaSFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <SaaSFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};