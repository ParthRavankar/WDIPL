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
  Scaling, Container, Component, Repeat2, Analytics, Percent, Tag,
  ShoppingCart as CartIcon, Banknote, PackageCheck, Headphones, Scan,
  Megaphone, Paintbrush2, PieChart, ShieldX, CogIcon, ArrowUpCircle,
  BadgeCheck, FastForward, RotateCcw, ArrowRightLeft, Link, ArrowLeftRight
} from "lucide-react";

// eCommerce Platforms Hero Section
const EcommerceHeroWithCTA = () => {
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
            {/* eCommerce Label */}
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
                Bespoke eCommerce Platform Development
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Building high-converting, scalable, and secure online stores and marketplaces that drive sales and enhance customer experiences.
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
                  <Store className="w-5 h-5 flex-shrink-0" />
                  <span>Launch Your Online Store</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>View Our eCommerce Portfolio</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with eCommerce visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* eCommerce Store Interface */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Store Interface */}
                <div className="relative mx-auto w-64 h-40 bg-gradient-to-br from-accent to-purple-600 rounded-2xl border border-accent/30 shadow-2xl flex flex-col p-4 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <Store className="w-6 h-6 text-white" />
                    <div className="text-white text-xs font-medium">Online Store</div>
                    <CartIcon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Product Grid */}
                  <div className="grid grid-cols-3 gap-2 flex-1">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-white/20 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-white/80" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/30 animate-ping"></div>
                </div>
                
                {/* Payment & Mobile Integration */}
                <div className="relative grid grid-cols-3 gap-4 mb-8">
                  {/* Payment Gateway */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl border border-green-400/30 shadow-lg p-4 text-center"
                  >
                    <CreditCard className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Payment</div>
                  </motion.div>
                  
                  {/* Mobile Commerce */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl border border-blue-400/30 shadow-lg p-4 text-center"
                  >
                    <Smartphone className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Mobile</div>
                  </motion.div>
                  
                  {/* Analytics */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl border border-orange-400/30 shadow-lg p-4 text-center"
                  >
                    <BarChart className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Analytics</div>
                  </motion.div>
                </div>
                
                {/* Integration Layer */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg border border-purple-400/30 shadow-lg p-3 text-center"
                  >
                    <Database className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Inventory</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg border border-pink-400/30 shadow-lg p-3 text-center"
                  >
                    <Truck className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Shipping</div>
                  </motion.div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: '-20px', width: '100%', height: '320px'}}>
                  <g className="opacity-30">
                    {/* Lines from Store to integrations */}
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
                  <TrendingUp className="w-3 h-3 mr-1" />
                  High-Converting
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Zap className="w-3 h-3 mr-1" />
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

// Key Benefits of eCommerce Solutions
const EcommerceBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Conversion-Optimized Design",
      description: "Intuitive UX to maximize sales."
    },
    {
      icon: TrendingUp,
      title: "Scalability & Performance",
      description: "Handles high traffic and large product catalogs."
    },
    {
      icon: Shield,
      title: "Robust Security",
      description: "Protecting customer data and payment information."
    },
    {
      icon: Network,
      title: "Seamless Integrations",
      description: "Connecting with payment, shipping, CRM, and ERP systems."
    },
    {
      icon: Layers,
      title: "Omnichannel Capabilities",
      description: "Consistent experience across web, mobile, and physical stores."
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
            Why Choose WDI for Your eCommerce Platform?
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

// eCommerce Development Process
const EcommerceProcess = () => {
  const steps = [
    {
      title: "Strategy & User Research",
      description: "Deep market analysis, competitor research, and user behavior studies to define your eCommerce strategy and target audience.",
      icon: Search
    },
    {
      title: "Platform Selection & Design",
      description: "Choosing the optimal platform and creating conversion-focused designs with intuitive user experience and brand alignment.",
      icon: Paintbrush2
    },
    {
      title: "Development & Customization",
      description: "Building custom features, integrating payment systems, and developing responsive interfaces optimized for all devices.",
      icon: Code
    },
    {
      title: "Integration & Testing",
      description: "Connecting with third-party services, implementing security measures, and conducting thorough testing across all systems.",
      icon: Link
    },
    {
      title: "Launch & Marketing Support",
      description: "Successful deployment with SEO optimization, analytics setup, and ongoing marketing support to drive initial sales.",
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
            Our Streamlined Process for Your eCommerce Success
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

// eCommerce Services
const EcommerceServices = () => {
  const services = [
    {
      title: "Custom eCommerce Store Development",
      description: "Tailored solutions beyond off-the-shelf platforms.",
      icon: Code,
      features: ["Custom Features", "Unique Design", "Performance Optimization", "Scalable Architecture"]
    },
    {
      title: "Multi-Vendor Marketplaces",
      description: "Building platforms like Etsy or Amazon for diverse sellers.",
      icon: Store,
      features: ["Vendor Management", "Commission Systems", "Multi-tier Catalogs", "Revenue Sharing"]
    },
    {
      title: "B2B eCommerce Solutions",
      description: "Streamlined purchasing portals for businesses.",
      icon: Building,
      features: ["Bulk Pricing", "Quote Management", "Account Hierarchies", "Custom Catalogs"]
    },
    {
      title: "Headless Commerce Implementation",
      description: "Decoupling frontend and backend for ultimate flexibility.",
      icon: ArrowLeftRight,
      features: ["API-First Design", "Omnichannel Ready", "Performance Focused", "Future-Proof"]
    },
    {
      title: "eCommerce Migrations & Upgrades",
      description: "Moving to new platforms or modernizing existing ones.",
      icon: RotateCcw,
      features: ["Data Migration", "SEO Preservation", "Zero Downtime", "Performance Improvement"]
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure and diverse payment options.",
      icon: CreditCard,
      features: ["Multiple Gateways", "Global Payments", "Security Compliance", "Fraud Protection"]
    },
    {
      title: "Inventory & Order Management",
      description: "Automated systems for efficient operations.",
      icon: PackageCheck,
      features: ["Real-time Tracking", "Multi-warehouse", "Automated Workflows", "Analytics Dashboard"]
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
            Our Comprehensive eCommerce Development Services
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

// eCommerce Tech Stack
const EcommerceTechStack = () => {
  const platforms = [
    { name: "Shopify Plus", logo: "https://cdn.shopify.com/s/files/1/0533/2089/files/shopify_logo.svg", category: "Platform" },
    { name: "Magento", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Magento_Logo.svg", category: "Platform" },
    { name: "WooCommerce", logo: "https://woocommerce.com/wp-content/themes/storefront-child/assets/images/logo-woocommerce.svg", category: "Platform" },
    { name: "BigCommerce", logo: "https://www.bigcommerce.com/assets/images/bc-logo.svg", category: "Platform" }
  ];

  const frontends = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend" }
  ];

  const backends = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "Backend" }
  ];

  const payments = [
    { name: "Stripe", icon: CreditCard, description: "Global payment processing" },
    { name: "PayPal", icon: Banknote, description: "Worldwide payment solutions" },
    { name: "Square", icon: Scan, description: "Point-of-sale integration" }
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
            Utilizing Industry-Leading Platforms and Modern Frameworks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For powerful eCommerce solutions that drive sales and scale with your business.
          </p>
        </motion.div>

        {/* eCommerce Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">eCommerce Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
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
                    <Store className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{platform.name}</h4>
                  <p className="text-xs text-muted-foreground">{platform.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frontend & Backend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
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

            {/* Backend */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Backend Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
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
          </div>
        </motion.div>

        {/* Payment Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Payment Solutions</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {payments.map((payment, index) => {
              const IconComponent = payment.icon;
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
                    <h4 className="font-semibold text-foreground mb-2">{payment.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{payment.description}</p>
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

// eCommerce Case Studies
const EcommerceCaseStudies = () => {
  const caseStudies = [
    {
      title: "Luxury Fashion Marketplace",
      client: "StyleVault",
      description: "High-end fashion platform with advanced filtering, AR try-on features, and seamless checkout experience for luxury brands and customers",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&auto=format",
      results: "300% increase in conversion rate",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "AR Try-on, Luxury UX, Advanced Search"
    },
    {
      title: "B2B Industrial Supply Platform",
      client: "IndustrialHub",
      description: "Comprehensive B2B marketplace with bulk pricing, quote management, and custom catalog solutions for industrial suppliers and buyers",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      results: "150% growth in B2B sales",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "Bulk Pricing, Quote System, Custom Catalogs"
    },
    {
      title: "Multi-Vendor Food Marketplace",
      client: "LocalEats",
      description: "Food delivery platform connecting local restaurants with customers, featuring real-time tracking, multi-payment options, and vendor management",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format",
      results: "500+ vendors onboarded",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "Real-time Tracking, Multi-vendor, Vendor Management"
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
            eCommerce Solutions That Drive Sales
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
                        <Store className="w-6 h-6 text-accent" />
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
const EcommerceInlineCTA = () => {
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
                <TrendingUp className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Sales Growth</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Boost Your{" "}
              <span className="text-accent">Online Sales?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let's discuss a platform strategy that maximizes your revenue potential.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free eCommerce Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire eCommerce Developers
const HireEcommerceDevelopers = () => {
  const developerTypes = [
    {
      title: "Shopify Experts",
      description: "Specialists in Shopify and Shopify Plus development",
      icon: Store,
      skills: ["Theme Development", "App Integration", "Performance Optimization", "Plus Features"]
    },
    {
      title: "Magento Developers",
      description: "Adobe Commerce and Magento specialists",
      icon: Code,
      skills: ["Custom Extensions", "B2B Solutions", "Multi-store Setup", "Performance Tuning"]
    },
    {
      title: "WooCommerce Specialists",
      description: "WordPress and WooCommerce development experts",
      icon: ShoppingCart,
      skills: ["Plugin Development", "Custom Themes", "Payment Integration", "SEO Optimization"]
    },
    {
      title: "Custom eCommerce Engineers",
      description: "Full-stack developers for bespoke solutions",
      icon: Wrench,
      skills: ["Custom Architecture", "API Development", "Database Design", "Security Implementation"]
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
            Find Expert eCommerce Developers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access our specialized developers proficient in Shopify, Magento, WooCommerce, and custom eCommerce solutions.
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
                <span>Hire eCommerce Developers</span>
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

// eCommerce FAQs
const EcommerceFAQs = () => {
  const faqs = [
    {
      question: "Should I choose a platform or custom eCommerce development?",
      answer: "The choice depends on your specific needs, budget, and scalability requirements. Platforms like Shopify or Magento offer faster deployment and built-in features, while custom development provides unlimited flexibility and unique functionality. We help you evaluate factors like expected traffic, product complexity, integration needs, and long-term growth plans to make the best decision."
    },
    {
      question: "How do you handle payment gateway integrations?",
      answer: "We integrate multiple payment gateways including Stripe, PayPal, Square, and regional payment providers to maximize conversion rates. Our integration process includes security compliance (PCI DSS), fraud protection, multi-currency support, and seamless checkout experiences. We also implement backup payment methods and handle all technical certifications required for secure transactions."
    },
    {
      question: "What is headless commerce and its benefits?",
      answer: "Headless commerce decouples the frontend presentation layer from the backend commerce functionality, allowing greater flexibility and performance. Benefits include faster page loads, omnichannel experiences, easier third-party integrations, and the ability to use modern frontend frameworks. This approach is ideal for businesses needing custom user experiences or planning to sell across multiple channels."
    },
    {
      question: "Do you offer ongoing support for my online store?",
      answer: "Yes, we provide comprehensive ongoing support including security updates, performance monitoring, feature enhancements, backup management, and technical troubleshooting. Our support packages range from basic maintenance to full-service management, including marketing optimization, inventory management assistance, and regular performance audits to ensure your store continues to grow and succeed."
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
const EcommerceFinalCTA = () => {
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
                <Store className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">eCommerce Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Build a High-Converting{" "}
            <span className="text-accent">eCommerce Platform with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with us to create an online presence that attracts, engages, and converts customers effectively.
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
                <span>Start Your eCommerce Project</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Custom Development • Platform Selection • Performance Optimization
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

// Main eCommerce Platforms Page
export const EcommercePlatforms = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <EcommerceHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <EcommerceBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <EcommerceProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <EcommerceServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <EcommerceTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <EcommerceCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <EcommerceInlineCTA />
      </section>
      
      {/* Hire Developers */}
      <section className="bg-background">
        <HireEcommerceDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <EcommerceFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <EcommerceFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};