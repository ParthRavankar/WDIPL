import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Users, Globe, TrendingUp, Search, Figma, Zap, Shield, Settings, Rocket, ShoppingBag, Recycle, Tag } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { GridPattern } from "../components/GridPattern";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../App";
import seezunImage from 'figma:asset/06e3cfb0c62c4da1116eaa2ecf65c8d2c54cf50a.png';

const projectMetrics = [
  { 
    icon: <ShoppingBag className="w-8 h-8" />, 
    label: "Active Users", 
    value: "50K+",
    description: "Fashion enthusiasts connected"
  },
  { 
    icon: <Recycle className="w-8 h-8" />, 
    label: "Sustainability Impact", 
    value: "+85%",
    description: "Reduction in fashion waste"
  },
  { 
    icon: <Tag className="w-8 h-8" />, 
    label: "Transaction Growth", 
    value: "+200%",
    description: "Monthly marketplace activity"
  }
];

const keyFeatures = [
  {
    title: "Rental Marketplace",
    description: "Rent South Asian clothing for special occasions, making premium fashion accessible and affordable."
  },
  {
    title: "Buy & Sell Platform",
    description: "Purchase new and pre-loved clothing from verified sellers with secure payment processing."
  },
  {
    title: "Sustainable Fashion Focus",
    description: "Promote circular fashion economy by encouraging reuse and extending garment lifecycles."
  },
  {
    title: "Authentic South Asian Styles",
    description: "Curated collection of traditional and contemporary South Asian clothing and accessories."
  },
  {
    title: "Size & Fit Matching",
    description: "Advanced size recommendation system ensuring perfect fit for every customer."
  },
  {
    title: "Community Reviews",
    description: "Trusted rating system with detailed reviews from verified customers and renters."
  }
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "Discovery & Market Research",
    icon: <Search className="w-6 h-6" />,
    description: "Conducted extensive research into South Asian fashion market trends and customer behavior patterns.",
    details: "Analyzed competitor landscape, identified key pain points in traditional clothing shopping, and defined unique value propositions for rent-buy-sell model. Developed comprehensive user personas and market positioning strategy."
  },
  {
    phase: "Phase 2",
    title: "UX Design & Prototyping",
    icon: <Figma className="w-6 h-6" />,
    description: "Created intuitive user journeys for browsing, renting, buying, and selling South Asian clothing.",
    details: "Designed mobile-first interface with cultural sensitivity and accessibility in mind. Built interactive prototypes for user testing and stakeholder validation. Established visual design system reflecting South Asian aesthetic preferences."
  },
  {
    phase: "Phase 3",
    title: "Marketplace Development",
    icon: <Zap className="w-6 h-6" />,
    description: "Built robust marketplace platform with rental management, inventory tracking, and payment processing.",
    details: "Implemented agile development methodology with weekly sprints. Developed custom rental calendar system, automated pricing algorithms, and multi-vendor management tools. Integrated secure payment gateways and shipping logistics."
  },
  {
    phase: "Phase 4",
    title: "Quality Assurance & Testing",
    icon: <Shield className="w-6 h-6" />,
    description: "Comprehensive testing across all user flows, payment systems, and rental management features.",
    details: "Performed extensive functional testing, security audits, and performance optimization. Conducted user acceptance testing with beta customers. Implemented fraud detection and content moderation systems for marketplace safety."
  },
  {
    phase: "Phase 5",
    title: "Platform Deployment",
    icon: <Settings className="w-6 h-6" />,
    description: "Deployed scalable cloud infrastructure with automated deployment pipelines and monitoring systems.",
    details: "Set up containerized microservices architecture for optimal scalability. Implemented automated backup systems, real-time monitoring, and performance analytics. Established robust CI/CD pipeline for continuous feature delivery."
  },
  {
    phase: "Phase 6",
    title: "Launch & Growth",
    icon: <Rocket className="w-6 h-6" />,
    description: "Executed successful market launch with comprehensive marketing strategy and customer onboarding.",
    details: "Coordinated launch campaign targeting South Asian communities globally. Implemented customer acquisition strategies, vendor onboarding programs, and community building initiatives. Established ongoing support and feature enhancement roadmap."
  }
];

export const SeezunProject = () => {
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
                Revolutionize the Way You Shop South Asian Clothing with{" "}
                <span className="text-accent">Seezun</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Rent, Buy, or Sell Old &amp; New Clothes
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Step into a new way of buying. Rent, buy, or sell South Asian clothing from others. Whether it be new or pre-loved clothing, Seezun covers it all.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-[10px]">
                  +200% Transaction Growth
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  E-commerce
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Marketplace
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Fashion
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
                src={seezunImage}
                alt="Seezun mobile app showcasing South Asian clothing rental marketplace with woman in traditional red saree"
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
                Transfigured the South Asian Clothing Market in Seezun
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Created Seezun as a dynamic customer-driven platform connecting buyers, sellers, and renters for a seamless marketplace that renders fashion accessible, sustainable, and affordable.
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
              Ready to Transform Your Fashion Marketplace?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's create a sustainable fashion platform together. From concept to launch, we'll help you build a marketplace that revolutionizes how people shop, rent, and sell clothing.
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