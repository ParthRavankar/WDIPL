import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, MapPin, Users, Clock, Zap, Shield, Settings, Rocket, Target, Activity, Smartphone, Globe, Star, Ticket } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { GridPattern } from "../components/GridPattern";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../App";

const projectMetrics = [
  { 
    icon: <Calendar className="w-8 h-8" />, 
    label: "Event Discovery", 
    value: "250%",
    description: "Increase in event discovery"
  },
  { 
    icon: <Users className="w-8 h-8" />, 
    label: "User Engagement", 
    value: "180%",
    description: "Growth in user engagement"
  },
  { 
    icon: <Ticket className="w-8 h-8" />, 
    label: "Bookings Made", 
    value: "50K+",
    description: "Successful event bookings"
  }
];

const keyFeatures = [
  {
    title: "Effortless Event Discovery",
    description: "Browse through a curated selection of local events with smart filtering and personalized recommendations based on your interests and location."
  },
  {
    title: "Seamless Booking Experience",
    description: "One-click booking system with secure payment processing and instant confirmation for all types of events and celebrations."
  },
  {
    title: "Real-time Event Updates",
    description: "Get instant notifications about event changes, new listings, and personalized recommendations based on your preferences."
  },
  {
    title: "Social Event Planning",
    description: "Invite friends, create groups, and coordinate event attendance with built-in social features and group booking capabilities."
  },
  {
    title: "Location-Based Recommendations",
    description: "Discover events happening near you with intelligent location-based suggestions and interactive maps."
  },
  {
    title: "Event History & Reviews",
    description: "Track your event history, leave reviews, and discover new events based on your past preferences and ratings."
  }
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "Event Market Research & User Analysis",
    icon: <MapPin className="w-6 h-6" />,
    description: "Comprehensive analysis of local event markets and user behavior patterns for event discovery.",
    details: "Studied event discovery trends, user preferences for different event types, and analyzed booking patterns across various demographics. Identified key pain points in existing event platforms and opportunities for improvement."
  },
  {
    phase: "Phase 2",
    title: "Event-Centric UX Design",
    icon: <Calendar className="w-6 h-6" />,
    description: "Designed intuitive interfaces optimized for event browsing and booking experiences.",
    details: "Created user-friendly designs focusing on visual event discovery, streamlined booking flows, and social features. Developed prototypes with emphasis on event imagery, clear information hierarchy, and effortless navigation."
  },
  {
    phase: "Phase 3",
    title: "Platform Development & Integration",
    icon: <Zap className="w-6 h-6" />,
    description: "Built scalable event platform with booking systems, payment processing, and real-time features.",
    details: "Developed robust architecture supporting event listings, booking management, payment integration, and real-time notifications. Implemented search algorithms, recommendation engines, and social features for group planning."
  },
  {
    phase: "Phase 4",
    title: "Security & Payment Integration",
    icon: <Shield className="w-6 h-6" />,
    description: "Implemented secure payment processing and data protection for user transactions.",
    details: "Integrated secure payment gateways, implemented booking confirmation systems, and ensured data protection compliance. Added fraud prevention measures and secure user authentication systems."
  },
  {
    phase: "Phase 5",
    title: "Performance & Mobile Optimization",
    icon: <Settings className="w-6 h-6" />,
    description: "Optimized platform performance for fast event discovery and seamless mobile experience.",
    details: "Fine-tuned application performance for quick event loading, efficient search results, and smooth mobile interactions. Implemented caching strategies and optimized image delivery for event listings."
  },
  {
    phase: "Phase 6",
    title: "Launch & Community Building",
    icon: <Rocket className="w-6 h-6" />,
    description: "Successfully launched platform and built active community of event organizers and attendees.",
    details: "Executed comprehensive launch strategy, onboarded event organizers, and established user community. Implemented feedback systems and iterative improvements based on user behavior and preferences."
  }
];

export const GoodTimesProject = () => {
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
                Find Top Local Events with{" "}
                <span className="text-accent">Good Times</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Find events for any event, any time, effortless
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From casual hangouts to special celebrations, Good Times makes browsing and booking a breeze, so you never miss out.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-[10px]">
                  +250% Event Discovery
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Events
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Booking
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Lifestyle
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
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&crop=center"
                alt="Good Times event discovery platform showcasing local events, booking interface, and social features for seamless event planning"
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
                Revolutionizing how you discover events with Good Times
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Positioned Good Times as the go-to platform for event discovery, creating an intuitive experience that connects people with memorable experiences.
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
              Ready to Build Your Next Event Platform?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's create an exceptional event discovery platform together. From concept to launch, we'll help you build a platform that connects people with unforgettable experiences.
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