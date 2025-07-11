import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Users, Globe, TrendingUp, Search, Figma, Zap, Shield, Settings, Rocket } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { GridPattern } from "../components/GridPattern";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../App";
import regroupImage from 'figma:asset/92c9546d073e10bfa567559041d8b7e5b0d84ce7.png';

const projectMetrics = [
  { 
    icon: <Users className="w-8 h-8" />, 
    label: "Active Users", 
    value: "2.5M+",
    description: "Sports fans connected globally"
  },
  { 
    icon: <TrendingUp className="w-8 h-8" />, 
    label: "Engagement Rate", 
    value: "+150%",
    description: "Increase in user interaction"
  },
  { 
    icon: <Globe className="w-8 h-8" />, 
    label: "Time on Platform", 
    value: "+220%",
    description: "Average session duration"
  }
];

const keyFeatures = [
  {
    title: "Global Sports Networking",
    description: "Connect with sports fans and teams from around the world, breaking down geographical barriers."
  },
  {
    title: "Team Formation & Management",
    description: "Create, join, and manage sports teams with comprehensive collaboration tools."
  },
  {
    title: "Event Tracking & Coordination",
    description: "Keep track of sports events, matches, and team activities in one centralized platform."
  },
  {
    title: "Real-time Communication",
    description: "Chat, collaborate, and coordinate with team members and fellow sports enthusiasts."
  },
  {
    title: "Community Building",
    description: "Build vibrant sports communities around shared passions and interests."
  },
  {
    title: "Activity Feeds & Updates",
    description: "Stay updated with the latest from your teams, leagues, and sports communities."
  }
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "Discovery & Scoping",
    icon: <Search className="w-6 h-6" />,
    description: "Conducted stakeholder interviews and market research to define project goals, target audience, and key features.",
    details: "Outlined the product vision, user personas, and high-level requirements. Developed a clear project scope, timeline, and resource allocation plan to align expectations and reduce risks."
  },
  {
    phase: "Phase 2",
    title: "Design & Prototyping",
    icon: <Figma className="w-6 h-6" />,
    description: "Created user journey maps and detailed wireframes to visualize core workflows.",
    details: "Built interactive prototypes to validate usability and gather early stakeholder feedback. Established a consistent visual language, ensuring accessibility and brand alignment across all screens."
  },
  {
    phase: "Phase 3",
    title: "Development (Agile Sprints)",
    icon: <Zap className="w-6 h-6" />,
    description: "Broke down development into iterative sprints, each focused on delivering specific features or improvements.",
    details: "Held sprint planning meetings to prioritize tasks and define sprint goals. Conducted daily stand-ups for progress tracking and quick issue resolution. Delivered incremental releases for review, enabling continuous feedback and adaptation."
  },
  {
    phase: "Phase 4",
    title: "QA & Security Testing",
    icon: <Shield className="w-6 h-6" />,
    description: "Performed comprehensive functional, integration, and regression testing to ensure reliability and performance.",
    details: "Conducted security assessments, including vulnerability scans and penetration testing, to safeguard user data and prevent unauthorized access. Addressed all identified issues before deployment, following best practices for quality assurance and risk mitigation."
  },
  {
    phase: "Phase 5",
    title: "CI/CD & DevOps",
    icon: <Settings className="w-6 h-6" />,
    description: "Implemented automated pipelines for continuous integration and delivery, enabling rapid, reliable code deployments.",
    details: "Used version control and automated testing at every stage to catch issues early and maintain code quality. Employed infrastructure-as-code and monitoring tools to support scalable, resilient operations."
  },
  {
    phase: "Phase 6",
    title: "Launch & Support",
    icon: <Rocket className="w-6 h-6" />,
    description: "Coordinated a cross-functional launch plan, preparing infrastructure and customer support for go-live.",
    details: "Executed a smooth rollout with real-time monitoring and rapid response to any issues. Established ongoing support processes for bug fixes, user feedback, and continuous improvement, ensuring long-term success and user satisfaction."
  }
];

export const RegroupProject = () => {
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
                Unite Sports Fans from Around the World with{" "}
                <span className="text-accent">Regroup</span>
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-[10px]">
                  +150% User Engagement
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Social Media
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]">
                  Digital Products
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
                src={regroupImage}
                alt="Regroup mobile app banner showcasing sports networking features"
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
                Connect, Share, and Join Teams Around the World
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Break all barriers in sports networking. Regroup aggregates sports fans and teams and lets you communicate, collaborate, and keep track of events in one active space.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                Revolutionize the Sports Community with Regroup
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built Regroup as a social platform that brings together passion, global connections, teamwork, and love for sports through a vibrant online community.
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
                Key Features & Capabilities
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

            {/* UI/UX Process */}
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
              Ready to Build Your Next Sports Platform?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's create something amazing together. From concept to launch, we'll help you build a platform that brings people together through their shared passion for sports.
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