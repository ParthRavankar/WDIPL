import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, TrendingUp, Building, Users, DollarSign, Zap, Shield, Settings, Rocket, Target, Activity, Smartphone, Globe, Star, PieChart } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { GridPattern } from "../components/GridPattern";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../App";

const projectMetrics = [
  { 
    icon: <PieChart className="w-8 h-8" />, 
    label: "Portfolio Diversification", 
    value: "300%",
    description: "Increase in portfolio options"
  },
  { 
    icon: <TrendingUp className="w-8 h-8" />, 
    label: "Investment Growth", 
    value: "240%",
    description: "Average portfolio growth"
  },
  { 
    icon: <Building className="w-8 h-8" />, 
    label: "Property Access", 
    value: "500+",
    description: "Investment-ready properties"
  }
];

const keyFeatures = [
  {
    title: "Fractional Real Estate Investment",
    description: "Invest in portions of high-value properties with minimal capital requirements, making real estate accessible to all investors."
  },
  {
    title: "Smart Portfolio Diversification",
    description: "Spread investments across multiple property types and locations to minimize risk and maximize returns through intelligent allocation."
  },
  {
    title: "Real-time Market Analytics",
    description: "Access comprehensive market data, property performance metrics, and investment insights to make informed decisions."
  },
  {
    title: "Automated Investment Management",
    description: "Set investment preferences and let the platform automatically diversify your portfolio across optimal property selections."
  },
  {
    title: "Transparent Fee Structure",
    description: "Clear, upfront pricing with no hidden fees, allowing investors to understand exactly what they're paying for each transaction."
  },
  {
    title: "Liquidity Solutions",
    description: "Secondary market features that provide flexibility to buy and sell property shares when needed, unlike traditional real estate."
  }
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "Real Estate Market Analysis",
    icon: <Building className="w-6 h-6" />,
    description: "Comprehensive analysis of real estate markets and fractional investment opportunities.",
    details: "Conducted extensive research on real estate investment trends, analyzed fractional ownership models, and identified key market opportunities. Studied investor behavior patterns and regulatory requirements for property investment platforms."
  },
  {
    phase: "Phase 2",
    title: "Investment-Focused UX Design",
    icon: <PieChart className="w-6 h-6" />,
    description: "Designed intuitive interfaces optimized for property investment and portfolio management.",
    details: "Created user-friendly investment flows focusing on property discovery, risk assessment, and portfolio visualization. Developed prototypes with emphasis on financial transparency, investment tracking, and decision-making tools."
  },
  {
    phase: "Phase 3",
    title: "Platform Development & Integration",
    icon: <Zap className="w-6 h-6" />,
    description: "Built scalable investment platform with property management, payment processing, and analytics.",
    details: "Developed robust architecture supporting property listings, investment processing, portfolio management, and real-time analytics. Implemented fractional ownership algorithms, automated diversification, and comprehensive reporting systems."
  },
  {
    phase: "Phase 4",
    title: "Financial Security & Compliance",
    icon: <Shield className="w-6 h-6" />,
    description: "Implemented secure financial transactions and regulatory compliance for real estate investments.",
    details: "Integrated secure payment processing, implemented KYC/AML compliance, and ensured regulatory adherence. Added fraud prevention measures, secure investor authentication, and comprehensive audit trails."
  },
  {
    phase: "Phase 5",
    title: "Performance & Mobile Optimization",
    icon: <Settings className="w-6 h-6" />,
    description: "Optimized platform performance for real-time data processing and mobile investment management.",
    details: "Fine-tuned application performance for real-time market data, efficient portfolio calculations, and seamless mobile experiences. Implemented caching strategies and optimized data visualization for investment analytics."
  },
  {
    phase: "Phase 6",
    title: "Launch & Investor Onboarding",
    icon: <Rocket className="w-6 h-6" />,
    description: "Successfully launched platform and onboarded property partners and investors.",
    details: "Executed comprehensive launch strategy, onboarded property partners, and established investor community. Implemented educational resources, customer support systems, and iterative improvements based on user feedback."
  }
];

export const ProspertyProject = () => {
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
                Change the way you think about real estate investment with{" "}
                <span className="text-accent">Prosperty</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Invest in pieces, diversify your portfolio
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Break the barrier of real estate investing. With Prosperty, you can invest in portions of properties, making portfolio diversification smarter and more accessible.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-[10px]">
                  +300% Portfolio Options
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Real Estate
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Investment
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  FinTech
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
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center"
                alt="Prosperty real estate investment platform showcasing fractional property investment, portfolio diversification, and modern property management interface"
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
                Revolutionize Real Estate Investment with Prosperty
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built Prosperty as an intuitive platform to make property investment seamless for users, empowering them to grow their wealth with ease and flexibility.
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
              Ready to Build Your Real Estate Investment Platform?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's create an exceptional real estate investment platform together. From fractional ownership to portfolio management, we'll help you build a platform that revolutionizes property investment.
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