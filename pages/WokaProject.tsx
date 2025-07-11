import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Users, BookOpen, TrendingUp, Search, Figma, Zap, Shield, Settings, Rocket, PlayCircle, Heart, Star } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { GridPattern } from "../components/GridPattern";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../App";
import wokaImage from 'figma:asset/6e0cd179a2535c0a97f7dcdbcfedaa90806426b6.png';

const projectMetrics = [
  { 
    icon: <PlayCircle className="w-8 h-8" />, 
    label: "Active Young Learners", 
    value: "100K+",
    description: "Kids engaged in learning activities"
  },
  { 
    icon: <Heart className="w-8 h-8" />, 
    label: "User Retention", 
    value: "+300%",
    description: "Increase in daily active users"
  },
  { 
    icon: <Star className="w-8 h-8" />, 
    label: "Parent Satisfaction", 
    value: "95%",
    description: "Parents recommend Woka"
  }
];

const keyFeatures = [
  {
    title: "Animated Learning Content",
    description: "Engaging animated shows that make learning fun and memorable for kids of all ages."
  },
  {
    title: "Interactive Video Games",
    description: "Educational games that combine entertainment with learning objectives and skill development."
  },
  {
    title: "Educational Web Series",
    description: "Structured learning content delivered through engaging episodic format."
  },
  {
    title: "Safe Learning Environment",
    description: "Child-friendly platform with robust safety measures and parental controls."
  },
  {
    title: "Progress Tracking",
    description: "Comprehensive analytics for parents and educators to monitor learning progress."
  },
  {
    title: "Multi-Device Compatibility",
    description: "Seamless experience across tablets, smartphones, and computers."
  }
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "Educational Research & Analysis",
    icon: <Search className="w-6 h-6" />,
    description: "Conducted comprehensive research on educational methodologies and children's learning patterns.",
    details: "Analyzed current edutainment market, identified learning gaps, and collaborated with educational experts to define age-appropriate content strategies. Developed comprehensive understanding of child psychology and learning preferences."
  },
  {
    phase: "Phase 2",
    title: "Child-Centric Design",
    icon: <Figma className="w-6 h-6" />,
    description: "Created intuitive, colorful, and engaging user interfaces specifically designed for children.",
    details: "Developed interactive prototypes with focus on accessibility and ease of use. Implemented child-friendly navigation patterns, vibrant color schemes, and engaging visual elements that stimulate learning and exploration."
  },
  {
    phase: "Phase 3",
    title: "Platform Development",
    icon: <Zap className="w-6 h-6" />,
    description: "Built robust learning platform with streaming capabilities, game engines, and content management systems.",
    details: "Implemented scalable architecture supporting high-quality video streaming, interactive games, and real-time progress tracking. Developed content delivery systems optimized for various devices and network conditions."
  },
  {
    phase: "Phase 4",
    title: "Safety & Security Testing",
    icon: <Shield className="w-6 h-6" />,
    description: "Implemented comprehensive child safety measures and parental control systems.",
    details: "Conducted thorough security audits focusing on child protection protocols. Implemented content filtering, screen time management, and robust privacy controls. Ensured compliance with children's online safety regulations."
  },
  {
    phase: "Phase 5",
    title: "Content Management & Analytics",
    icon: <Settings className="w-6 h-6" />,
    description: "Deployed content management systems with real-time analytics and performance monitoring.",
    details: "Established automated content delivery pipelines and learning analytics dashboard. Implemented real-time monitoring for content performance, user engagement, and learning outcomes measurement."
  },
  {
    phase: "Phase 6",
    title: "Launch & Community Building",
    icon: <Rocket className="w-6 h-6" />,
    description: "Executed successful launch strategy with focus on educational community engagement.",
    details: "Coordinated launch campaign targeting parents, educators, and schools. Established partnerships with educational institutions and content creators. Implemented feedback systems for continuous improvement and community building."
  }
];

export const WokaProject = () => {
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
                Change the Way Kids Learn and Play with{" "}
                <span className="text-accent">Woka</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Animated Shows, Video Games, and Web Series for Kids
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Woka makes learning a fun and exciting experience. From animated content to interactive video games and engaging web series, every feature is designed to inspire kids while playing.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-[10px]">
                  +300% User Retention
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Education
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Learning Platform
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Kids
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
                src={wokaImage}
                alt="Woka educational platform mobile app interface showing interactive learning features and Bharat Gaurav Award recognition"
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
                Redefining Edutainment with Woka
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Developed Woka as a vibrant platform where learning meets play. With a safe and fun environment to explore, learn, and grow effortlessly.
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
              Ready to Transform Children's Learning Experience?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's create an educational platform that makes learning fun and engaging. From concept to launch, we'll help you build a platform that inspires children to learn and grow.
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