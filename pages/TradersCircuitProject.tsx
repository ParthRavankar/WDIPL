import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, TrendingUp, DollarSign, BarChart3, Search, Figma, Zap, Shield, Settings, Rocket, Target, Activity, Users, Smartphone, Globe } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { GridPattern } from "../components/GridPattern";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../App";

const projectMetrics = [
  { 
    icon: <Users className="w-8 h-8" />, 
    label: "User Base Growth", 
    value: "+300%",
    description: "Rapid growth in active users"
  },
  { 
    icon: <Smartphone className="w-8 h-8" />, 
    label: "App Downloads", 
    value: "500K+",
    description: "Downloads across India"
  },
  { 
    icon: <TrendingUp className="w-8 h-8" />, 
    label: "Investment Volume", 
    value: "₹100Cr+",
    description: "Monthly trading volume"
  }
];

const keyFeatures = [
  {
    title: "Ultra-personalized Financial Planning",
    description: "AI-driven personalized investment recommendations tailored specifically for Indian millennials and Gen Z investors."
  },
  {
    title: "Seamless Investment Experience",
    description: "Intuitive interface designed for India's mobile-first generation with simplified investment processes."
  },
  {
    title: "Real-time Market Analytics",
    description: "Live Indian stock market data and analytics with personalized insights for smarter investment decisions."
  },
  {
    title: "Social Investment Community",
    description: "Connect with fellow investors, share strategies, and learn from India's growing investment community."
  },
  {
    title: "Multi-language Support",
    description: "Available in multiple Indian languages to make investing accessible to diverse demographics."
  },
  {
    title: "Educational Investment Content",
    description: "Comprehensive learning modules specifically designed for Indian market conditions and investment opportunities."
  }
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "Indian Market Research & Analysis",
    icon: <Search className="w-6 h-6" />,
    description: "Deep dive into Indian investment behaviors and preferences of millennials and Gen Z.",
    details: "Analyzed Indian market trends, regulatory requirements, and investment patterns. Studied user demographics, financial literacy levels, and mobile-first preferences of young Indian investors."
  },
  {
    phase: "Phase 2",
    title: "India-Centric UX Design",
    icon: <Figma className="w-6 h-6" />,
    description: "Created culturally relevant and intuitive interfaces tailored for Indian users.",
    details: "Designed user experiences considering Indian financial behaviors, language preferences, and mobile usage patterns. Created prototypes with simplified onboarding and educational elements."
  },
  {
    phase: "Phase 3",
    title: "Platform Development & Integration",
    icon: <Zap className="w-6 h-6" />,
    description: "Built scalable trading platform with Indian market integrations and real-time data feeds.",
    details: "Developed robust architecture with Indian stock exchange integrations, payment gateway connections, and real-time market data processing. Implemented AI-driven recommendation engines."
  },
  {
    phase: "Phase 4",
    title: "Compliance & Security",
    icon: <Shield className="w-6 h-6" />,
    description: "Ensured full compliance with SEBI regulations and Indian financial security standards.",
    details: "Implemented comprehensive security measures following Indian regulatory guidelines. Ensured KYC compliance, data protection, and secure transaction processing as per Indian standards."
  },
  {
    phase: "Phase 5",
    title: "Performance Optimization",
    icon: <Settings className="w-6 h-6" />,
    description: "Optimized platform performance for Indian network conditions and device capabilities.",
    details: "Fine-tuned application performance for varying Indian network speeds and diverse device specifications. Implemented efficient caching and data compression strategies."
  },
  {
    phase: "Phase 6",
    title: "Market Launch & Growth",
    icon: <Rocket className="w-6 h-6" />,
    description: "Successfully launched and scaled across Indian markets with rapid user adoption.",
    details: "Executed targeted launch strategy across major Indian cities. Implemented growth marketing campaigns and established customer support infrastructure for pan-India operations."
  }
];

export const TradersCircuitProject = () => {
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
                Empower India's Millennials &amp; Gen Z with{" "}
                <span className="text-accent">Smarter Investments</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Seamless Investment, Ultra-personalized Financial Planning
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlock a new dimension of investment decisions in the booming Indian market. With every move handcrafted for your unique needs, Trader Circuit ensures every step is nailed to your financial future.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-[10px]">
                  +300% User Growth
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  FinTech
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Trading Platform
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Indian Market
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
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center"
                alt="TradersCircuit mobile app showcasing personalized investment dashboard with Indian market data and social trading features"
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
                World-Class App Development, Delivered with Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Positioned Trader Circuit as a leader, and seeing the user base grow rapidly.
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
                Key Features &amp; Capabilities
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
                Project Delivery Lifecycle
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

      {/* CTA Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
              Ready to Build Your Next Investment Platform?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's create a revolutionary trading platform together. From concept to launch, we'll help you build a platform that empowers the next generation of investors.
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