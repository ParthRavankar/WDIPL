import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Scan, Mic, Bell, Settings, Smartphone, Globe, ShoppingCart, Package, Zap, Shield, Target, Activity, Star, BarChart3 } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { GridPattern } from "../components/GridPattern";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../App";
import ranoutofImage from 'figma:asset/a27e320bb5458bd3eaa3fd6b8ba449e3d5998e26.png';

const projectMetrics = [
  { 
    icon: <ShoppingCart className="w-8 h-8" />, 
    label: "Shopping Efficiency", 
    value: "75%",
    description: "Improvement in shopping time"
  },
  { 
    icon: <Package className="w-8 h-8" />, 
    label: "Inventory Accuracy", 
    value: "95%",
    description: "Accurate product tracking"
  },
  { 
    icon: <Star className="w-8 h-8" />, 
    label: "User Satisfaction", 
    value: "4.8/5",
    description: "App store rating"
  }
];

const keyFeatures = [
  {
    title: "Smart Barcode Scanning",
    description: "Advanced barcode recognition technology that instantly identifies products, adds them to shopping lists, and tracks inventory levels in real-time."
  },
  {
    title: "Voice Command Integration",
    description: "Hands-free shopping list management with natural language processing, allowing users to add, remove, or modify items using voice commands."
  },
  {
    title: "Intelligent Reminders",
    description: "AI-powered reminder system that learns user patterns and suggests optimal shopping times, product restocking, and deals based on consumption habits."
  },
  {
    title: "Web-based Admin CMS",
    description: "Comprehensive content management system for Global Ease Solutions to manage product databases, user accounts, and analytics dashboards."
  },
  {
    title: "Smart Shopping Lists",
    description: "Collaborative shopping lists with real-time synchronization across devices, smart categorization, and store layout optimization for efficient shopping."
  },
  {
    title: "Pantry Management",
    description: "Digital inventory tracking with expiration date monitoring, automatic reorder suggestions, and waste reduction recommendations."
  }
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "Market Research & User Analysis",
    icon: <Target className="w-6 h-6" />,
    description: "Comprehensive analysis of grocery shopping behaviors and pain points identification.",
    details: "Conducted extensive user research to understand shopping patterns, pain points in traditional grocery management, and opportunities for digital innovation. Analyzed competitor apps, studied barcode scanning technologies, and identified key features that would revolutionize the grocery shopping experience."
  },
  {
    phase: "Phase 2",
    title: "Smart UX Design & Prototyping",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Designed intuitive interfaces optimized for quick grocery management and scanning workflows.",
    details: "Created user-centric design system focusing on speed and efficiency. Developed prototypes for barcode scanning flows, voice command interfaces, and list management. Emphasized accessibility and ease of use for diverse user demographics including elderly users and busy families."
  },
  {
    phase: "Phase 3",
    title: "App Development & Scanning Integration",
    icon: <Scan className="w-6 h-6" />,
    description: "Built native mobile app with advanced barcode scanning and voice recognition capabilities.",
    details: "Developed cross-platform mobile application with optimized barcode scanning engine, integrated voice recognition APIs, and real-time synchronization. Implemented offline functionality, smart caching, and efficient data processing for smooth user experience even in poor network conditions."
  },
  {
    phase: "Phase 4",
    title: "Web CMS Development",
    icon: <Globe className="w-6 h-6" />,
    description: "Created comprehensive web-based admin system for Global Ease Solutions management.",
    details: "Built robust content management system with role-based access control, analytics dashboards, product database management, and user account administration. Integrated reporting tools, automated backups, and scalable architecture to support growing user base."
  },
  {
    phase: "Phase 5",
    title: "AI & Voice Integration",
    icon: <Mic className="w-6 h-6" />,
    description: "Implemented intelligent voice commands and AI-powered shopping assistance features.",
    details: "Integrated natural language processing for voice commands, developed AI algorithms for shopping pattern recognition, and implemented smart reminder systems. Added predictive analytics for inventory management and personalized shopping recommendations."
  },
  {
    phase: "Phase 6",
    title: "Testing & Launch Optimization",
    icon: <Activity className="w-6 h-6" />,
    description: "Comprehensive testing, optimization, and successful app store launch.",
    details: "Conducted extensive QA testing including barcode accuracy tests, voice recognition validation, and performance optimization. Managed app store submissions, implemented analytics tracking, and established customer support systems for post-launch success."
  }
];

export const RanOutOfProject = () => {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-background overflow-hidden">
        <GridPattern strokeDasharray="4 2" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigateTo('/')}
              className="text-muted-foreground hover:text-foreground flex items-center gap-2 px-0"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Grocery Shopping Done{" "}
                <span className="text-accent">Right</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Smart grocery planning with intelligent automation
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                WDI developed a smart grocery planning app with barcode scanning, voice commands, reminders, and a web-based admin CMS for Global Ease Solutions.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-[10px]">
                  +75% Shopping Efficiency
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Mobile App
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Barcode Scanning
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Voice AI
                </span>
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden bg-muted/30 rounded-[10px] px-2"
            >
              <ImageWithFallback
                src={ranoutofImage}
                alt="RanOutOf smart grocery planning app showcasing barcode scanning, voice commands, shopping lists, and pantry management features"
                className="w-full h-full object-contain object-center rounded-[10px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projectMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-accent">
                  {metric.icon}
                </div>
                <div className="text-3xl font-semibold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-medium text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                Revolutionizing Grocery Management with Smart Technology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built RanOutOf as an intelligent grocery planning solution that combines barcode scanning, voice commands, and AI-powered reminders to transform how families manage their shopping and pantry inventory. The platform empowers users to shop smarter, waste less, and save time through innovative automation.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-8">
                Smart Features &amp; Capabilities
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card/50 rounded-[10px] p-6 border border-border/50"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Delivery Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-8">
                Development Journey &amp; Process
              </h3>
              <div className="relative">
                {/* Continuous background line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent/30 via-accent/20 to-accent/30 hidden lg:block" />
                {/* Animated line overlay */}
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent/50 via-accent/30 to-accent/50 hidden lg:block origin-top"
                />
                
                <div className="space-y-8 lg:space-y-10">
                  {processPhases.map((phase, index) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Mobile connection line */}
                      {index < processPhases.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-accent/40 to-accent/20 lg:hidden" />
                      )}
                      
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Phase indicator with fixed width container */}
                        <div className="flex items-center gap-4 lg:w-[220px] lg:flex-shrink-0">
                          {/* Icon with background to mask the line */}
                          <div className="relative z-10">
                            <div className="flex items-center justify-center w-12 h-12 bg-background border-2 border-accent/50 rounded-full flex-shrink-0 shadow-lg">
                              <div className="text-accent">
                                {phase.icon}
                              </div>
                            </div>
                            {/* Icon glow effect */}
                            <div className="absolute inset-0 flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full -z-10 animate-pulse" />
                            {/* Connection dot for timeline */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full -z-20 hidden lg:block" />
                          </div>
                          <div className="min-w-0 flex-1 lg:flex-initial">
                            <div className="text-sm font-medium text-accent mb-1 flex items-center gap-2">
                              <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-xs text-accent font-bold">
                                {index + 1}
                              </span>
                              {phase.phase}
                            </div>
                            <div className="text-lg font-semibold text-foreground leading-tight">
                              {phase.title}
                            </div>
                          </div>
                        </div>
                        
                        {/* Content with consistent left alignment */}
                        <div className="flex-1 bg-card/30 rounded-[10px] p-6 border border-border/30 lg:ml-0">
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {phase.description}
                          </p>
                          
                          <p className="text-muted-foreground/80 leading-relaxed text-sm">
                            {phase.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Innovation Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
              Technical Innovation &amp; Architecture
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Built with cutting-edge barcode recognition technology, advanced voice processing APIs, and intelligent AI algorithms for pattern recognition and predictive shopping recommendations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-background/50 rounded-[10px] p-6 border border-border/50"
              >
                <Scan className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Advanced Scanning Engine
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  High-accuracy barcode recognition with offline capability and instant product identification from comprehensive databases.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background/50 rounded-[10px] p-6 border border-border/50"
              >
                <Mic className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Natural Language Processing
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sophisticated voice recognition with context awareness for intuitive hands-free shopping list management.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-background/50 rounded-[10px] p-6 border border-border/50"
              >
                <BarChart3 className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Predictive Analytics
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI-powered consumption pattern analysis for intelligent restocking suggestions and waste reduction insights.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
              Ready to Build Your Smart Consumer App?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's create an innovative consumer application together. From barcode scanning to voice AI integration, we'll help you build an app that transforms everyday experiences through smart technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-[10px]"
                onClick={() => navigateTo('/start-a-project')}
              >
                Start Your Project <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-border hover:bg-muted px-8 py-3 rounded-[10px]"
                onClick={() => navigateTo('/case-studies')}
              >
                View More Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};