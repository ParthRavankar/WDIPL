import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Users, Target, Zap, UserCheck, Shield, CheckCircle, TrendingUp, DollarSign,
  ArrowRight, Clock, Heart, Lightbulb, Search, PenTool, Eye, FileText,
  TestTube, RefreshCcw, Layers, Route, Puzzle, Star, BarChart3, MessageSquare,
  Brain, Rocket, Code, Settings, Briefcase, Building, GraduationCap,
  UserPlus, MapPin, Workflow, FlaskConical, Compass, Wand2, Network,
  GitBranch, Palette, MousePointer2, Play, Award, HelpCircle, ArrowUpRight, 
  Send, Calendar, Sparkles, Handshake, Globe, Hash, Package, Activity, 
  Coffee, MessageCircle, BookOpen, Edit3, Mic, Video, Users2, Smartphone, 
  Monitor, Tablet, Layout, Grid, Square, Circle, Triangle, Hexagon,
  Plus, Minus, X, Check, ChevronRight, ChevronDown, Menu, Home, Mail, Phone,
  Headphones, UserCog, Group, Accessibility, Contrast, Type, Frame, 
  BarChart, PieChart, LineChart, Table, Filter, Grid3X3, Settings2,
  ClipboardList, Receipt, FolderOpen, Archive, MoreHorizontal, Sliders,
  ToggleLeft, Edit, Trash2, Upload, FileChartBar, Building2, ShieldIcon,
  HardDrive, Terminal, CircuitBoard, GitCommit, RotateCw, Repeat as RepeatIcon,
  MonitorSpeaker, Gauge as MetricsIcon, AlertTriangle, TrendingDown,
  Cable, ArrowUpDown, Shuffle, GitPullRequest, PlugIcon, Waypoints,
  SendHorizontal, FileCode, Layers as LayersIcon, Smartphone as MobileIcon,
  Forward, Rewind, Pen, Move, SquareStack, MousePointer as ClickIcon,
  PlayCircle, Hand, TouchpadOff, Vibrate, Database, Analytics
} from "lucide-react";

// User Research & Testing Hero Section
const ResearchHeroWithCTA = () => {
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
            {/* Research Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Design & Experience</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Comprehensive User Research & Testing
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Gaining deep insights into user behaviors, needs, and pain points to inform design decisions and build truly user-centric products.
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
                  <Users className="w-5 h-5 flex-shrink-0" />
                  <span>Understand Your Users</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <span>Get a Research Proposal</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with User Research Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* User Research Observation Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Research Setup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-6 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* User Testing Interface */}
                  <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                    {/* Screen Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="flex items-center justify-between mb-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-400">User Testing Session</div>
                    </motion.div>
                    
                    {/* User Interface Being Tested */}
                    <div className="space-y-4">
                      {/* Navigation */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="h-10 bg-gradient-to-r from-accent to-blue-500 rounded-lg flex items-center px-4"
                      >
                        <div className="text-white text-sm font-medium">Product Interface</div>
                      </motion.div>
                      
                      {/* Interactive Elements Being Tested */}
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.4 }}
                          className="h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 p-3 flex items-center gap-3 relative"
                        >
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                            <Search className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs">Search Function</div>
                          </div>
                          {/* Click indicator */}
                          <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                          ></motion.div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.6 }}
                          className="h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 p-3 flex items-center gap-3"
                        >
                          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                            <Settings className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs">User Settings</div>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.8 }}
                          className="h-8 bg-gradient-to-r from-accent to-accent/80 rounded-lg flex items-center justify-center text-white text-xs font-medium"
                        >
                          Complete Task
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Observer/Researcher */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="absolute -bottom-6 -left-6 transform -rotate-12"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full flex items-center justify-center border border-accent/30">
                      <Eye className="w-6 h-6 text-accent" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Research Data Visualizations */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <BarChart3 className="w-4 h-4" />
                    <span>Analytics</span>
                  </div>
                  <div className="space-y-1">
                    <motion.div
                      animate={{ width: ["60%", "80%", "60%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-1 bg-accent rounded-full"
                      style={{ width: "60%" }}
                    ></motion.div>
                    <motion.div
                      animate={{ width: ["40%", "70%", "40%"] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="h-1 bg-blue-400 rounded-full"
                      style={{ width: "40%" }}
                    ></motion.div>
                    <motion.div
                      animate={{ width: ["30%", "90%", "30%"] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="h-1 bg-green-400 rounded-full"
                      style={{ width: "30%" }}
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Sticky Notes from Interviews */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.4 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    {/* Sticky Notes */}
                    <motion.div
                      animate={{ rotate: [2, -2, 2] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-16 h-16 bg-yellow-300 rounded-lg shadow-lg p-2 text-gray-800 text-xs flex items-center justify-center font-medium transform rotate-2"
                    >
                      User<br/>Feedback
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [-3, 3, -3] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className="absolute -top-2 -right-2 w-12 h-12 bg-pink-300 rounded-lg shadow-lg p-2 text-gray-800 text-xs flex items-center justify-center font-medium transform -rotate-3"
                    >
                      Pain<br/>Point
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [1, -1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                      className="absolute -bottom-2 -left-2 w-14 h-14 bg-blue-300 rounded-lg shadow-lg p-2 text-gray-800 text-xs flex items-center justify-center font-medium transform rotate-1"
                    >
                      Insight
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Research Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Eye className="w-3 h-3 mr-1" />
                  Observational
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Data-Driven
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Users className="w-3 h-3 mr-1" />
                  User-Centric
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of User Research & Testing
const ResearchBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Reduce Development Risk",
      description: "Build what users actually need, not what you assume."
    },
    {
      icon: Heart,
      title: "Increase User Satisfaction",
      description: "Create intuitive and enjoyable experiences."
    },
    {
      icon: TrendingUp,
      title: "Improve Conversion Rates",
      description: "Optimize flows based on real user interactions."
    },
    {
      icon: DollarSign,
      title: "Save Costs",
      description: "Identify usability issues early, avoiding expensive reworks."
    },
    {
      icon: Target,
      title: "Gain Competitive Edge",
      description: "Develop products that truly stand out in the market."
    },
    {
      icon: Brain,
      title: "Informed Decision Making",
      description: "Data-driven insights to guide product strategy."
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
            Why Invest in Understanding Your Users?
          </h2>
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

// User Research Process
const ResearchProcess = () => {
  const steps = [
    {
      title: "Define Objectives",
      description: "Clearly establish research goals and key questions to be answered.",
      icon: Target
    },
    {
      title: "Select Methodology",
      description: "Choose the most appropriate research methods for your specific needs.",
      icon: Compass
    },
    {
      title: "Recruit Participants",
      description: "Find and screen participants that represent your target user base.",
      icon: Users
    },
    {
      title: "Conduct Research",
      description: "Execute research sessions using proven methodologies and best practices.",
      icon: Search
    },
    {
      title: "Analyze Findings",
      description: "Process and synthesize data to extract meaningful insights and patterns.",
      icon: BarChart3
    },
    {
      title: "Deliver Actionable Insights",
      description: "Present findings in clear, actionable recommendations for your team.",
      icon: FileText
    },
    {
      title: "Test & Iterate",
      description: "Validate improvements and continue refining based on ongoing feedback.",
      icon: RefreshCcw
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
            Our Methodical Approach to Uncovering User Insights
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
                    <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-accent">0{index + 1}</div>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-black z-10 hidden lg:block"></div>
                  
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

// Research Services
const ResearchServices = () => {
  const services = [
    {
      title: "Qualitative Research",
      description: "User interviews, focus groups, ethnographic studies.",
      icon: MessageCircle,
      features: ["User Interviews", "Focus Groups", "Ethnographic Studies", "Contextual Inquiries"]
    },
    {
      title: "Quantitative Research",
      description: "Surveys, analytics review, A/B testing setup.",
      icon: BarChart3,
      features: ["User Surveys", "Analytics Analysis", "A/B Testing", "Statistical Analysis"]
    },
    {
      title: "Usability Testing",
      description: "Moderated and unmoderated testing with real users.",
      icon: TestTube,
      features: ["Moderated Testing", "Unmoderated Testing", "Task Analysis", "Performance Metrics"]
    },
    {
      title: "Persona Development",
      description: "Creating archetypes of your key user segments.",
      icon: UserCheck,
      features: ["User Personas", "Journey Mapping", "Behavioral Patterns", "Segment Analysis"]
    },
    {
      title: "User Journey Mapping",
      description: "Visualizing the complete user experience.",
      icon: Route,
      features: ["Experience Mapping", "Touchpoint Analysis", "Pain Point Identification", "Opportunity Areas"]
    },
    {
      title: "Competitor Analysis",
      description: "Understanding market benchmarks and user expectations.",
      icon: Target,
      features: ["Competitive Benchmarking", "Feature Analysis", "Best Practices", "Market Research"]
    },
    {
      title: "Information Architecture Testing",
      description: "Card sorting, tree testing for content organization.",
      icon: Layers,
      features: ["Card Sorting", "Tree Testing", "Content Strategy", "Navigation Testing"]
    },
    {
      title: "Accessibility Audits",
      description: "Ensuring your product is usable for everyone.",
      icon: Accessibility,
      features: ["WCAG Compliance", "Screen Reader Testing", "Keyboard Navigation", "Color Contrast"]
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
            Our Specialized User Research & Testing Capabilities
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
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
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-foreground">Key Methods:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground border-muted">
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
      </div>
    </section>
  );
};

// Research Tools
const ResearchTools = () => {
  const tools = [
    { name: "UserTesting", icon: Users, category: "User Testing", color: "green" },
    { name: "Maze", icon: Route, category: "User Testing", color: "blue" },
    { name: "Optimal Workshop", icon: Layers, category: "Information Architecture", color: "purple" },
    { name: "Hotjar", icon: MousePointer2, category: "User Behavior", color: "orange" },
    { name: "Google Analytics", icon: BarChart3, category: "Web Analytics", color: "yellow" },
    { name: "SurveyMonkey", icon: MessageSquare, category: "Surveys", color: "green" },
    { name: "Qualtrics", icon: FileText, category: "Research Platform", color: "blue" },
    { name: "UsabilityHub", icon: TestTube, category: "Quick Testing", color: "red" },
    { name: "Card Sorting", icon: Grid, category: "Information Architecture", color: "purple" },
    { name: "Tree Testing", icon: GitBranch, category: "Navigation Testing", color: "teal" },
    { name: "A/B Testing", icon: GitPullRequest, category: "Conversion Testing", color: "pink" },
    { name: "Lookback", icon: Video, category: "User Interviews", color: "indigo" }
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
            Research Tools & Methodologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Employing a robust toolkit for comprehensive user insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            const colorClasses = {
              green: "bg-green-500/20 text-green-400 border-green-500/30",
              blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
              orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
              yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
              red: "bg-red-500/20 text-red-400 border-red-500/30",
              teal: "bg-teal-500/20 text-teal-400 border-teal-500/30",
              pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
              indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
            };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${colorClasses[tool.color as keyof typeof colorClasses] || 'bg-accent/20 text-accent border-accent/30'}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-gray-400">{tool.category}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Research Case Studies
const ResearchCaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Usability Study",
      client: "Online Retail Platform",
      description: "Conducted comprehensive usability testing that identified critical checkout flow issues, resulting in a 45% increase in conversion rates after implementing recommended changes.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      results: "45% conversion rate increase",
      methodology: "Usability Testing",
      participants: "32 users",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "SaaS User Journey Research",
      client: "B2B Software Company",
      description: "In-depth user interviews and journey mapping revealed key pain points in onboarding, leading to a redesign that reduced churn by 60% in the first month.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "60% churn reduction",
      methodology: "User Interviews & Journey Mapping",
      participants: "18 stakeholders",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Mobile App Accessibility Audit",
      client: "Healthcare Technology",
      description: "Comprehensive accessibility testing and user research with disabled users resulted in WCAG 2.1 AA compliance and expanded user base by 25%.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      results: "25% user base expansion",
      methodology: "Accessibility Testing",
      participants: "24 diverse users",
      gradient: "from-purple-500/20 to-pink-500/20"
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
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Research-Driven Products That Connect with Users
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
              <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Search className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                          {study.results}
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="px-8 pb-6 flex-1">
                    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${study.gradient} p-4 border border-white/10`}>
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="px-8 pb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <TestTube className="w-3 h-3" />
                        {study.methodology}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {study.participants}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span className="text-sm font-medium">VIEW FULL CASE STUDY</span>
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
const ResearchInlineCTA = () => {
  return (
    <section className="py-20 bg-black">
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
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">User Research</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Deeply{" "}
              <span className="text-accent">Understand Your Users?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Let's design a research plan that reveals invaluable insights for your product.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageCircle className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free User Research Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire User Researchers
const HireResearchers = () => {
  const researcherTypes = [
    {
      title: "Senior User Researchers",
      description: "Experienced researchers who design and execute comprehensive research studies",
      icon: Search,
      skills: ["Research Strategy", "Mixed Methods", "Data Analysis", "Insight Synthesis"]
    },
    {
      title: "UX Researchers",
      description: "Specialists in user experience research and usability testing",
      icon: Users,
      skills: ["Usability Testing", "User Interviews", "Journey Mapping", "Persona Development"]
    },
    {
      title: "Quantitative Researchers",
      description: "Data analysts who focus on statistical research and metrics",
      icon: BarChart3,
      skills: ["Statistical Analysis", "Survey Design", "A/B Testing", "Analytics"]
    },
    {
      title: "Qualitative Researchers",
      description: "Experts in ethnographic studies and behavioral research",
      icon: MessageCircle,
      skills: ["Ethnographic Studies", "Focus Groups", "Interview Techniques", "Behavioral Analysis"]
    },
    {
      title: "Research Operations Specialists",
      description: "Professionals who streamline and scale research processes",
      icon: Settings,
      skills: ["Research Ops", "Tool Management", "Process Optimization", "Team Coordination"]
    },
    {
      title: "Accessibility Researchers",
      description: "Specialists in inclusive design and accessibility testing",
      icon: Accessibility,
      skills: ["Accessibility Testing", "Inclusive Design", "WCAG Compliance", "Assistive Technology"]
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
            Access Expert User Research Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our dedicated user researchers and UX strategists provide the insights you need to build truly impactful products.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {researcherTypes.map((type, index) => {
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
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Core Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground border-muted">
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
                <UserPlus className="w-5 h-5 flex-shrink-0" />
                <span>Hire User Researchers</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-white/20 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <div className="inline-flex items-center gap-2">
                <Eye className="w-5 h-5 flex-shrink-0" />
                <span>View Profiles</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// User Research FAQs
const ResearchFAQs = () => {
  const faqs = [
    {
      question: "How many users should I test with?",
      answer: "The optimal number depends on your research method and goals. For qualitative research like usability testing, 5-8 users often reveal 85% of usability issues. For quantitative research like surveys, you'll need larger sample sizes (typically 100+ respondents) for statistical significance. For A/B testing, sample sizes depend on your baseline conversion rate and the effect size you want to detect. We help determine the right sample size based on your specific research objectives and budget constraints."
    },
    {
      question: "What's the difference between qualitative and quantitative research?",
      answer: "Qualitative research focuses on understanding the 'why' behind user behaviors through methods like interviews, focus groups, and ethnographic studies. It provides rich insights into user motivations, emotions, and contexts. Quantitative research measures the 'what' and 'how much' through surveys, analytics, and A/B testing, providing statistical data about user behaviors and preferences. Most effective research strategies combine both approaches: qualitative research to understand user needs and quantitative research to validate findings at scale."
    },
    {
      question: "Can user research be done remotely?",
      answer: "Yes, remote user research has become increasingly effective and is often preferred for its convenience and broader participant reach. We conduct remote usability testing, interviews, surveys, and card sorting sessions using tools like Zoom, UserTesting, Maze, and specialized research platforms. Remote research eliminates geographical constraints, reduces costs, and often makes participants more comfortable in their natural environment. However, some research methods like ethnographic studies or physical product testing may still require in-person sessions."
    },
    {
      question: "How long does a typical usability test take?",
      answer: "Usability test duration varies by complexity and scope. Individual user sessions typically last 30-90 minutes, with simple task-based tests taking 30-45 minutes and comprehensive product evaluations lasting 60-90 minutes. The complete process including planning, recruitment, testing, and analysis usually takes 2-4 weeks. Unmoderated tests can be completed faster (1-2 weeks) as users complete tasks on their own time. We provide detailed timelines during project planning to align with your product development schedule."
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
const ResearchFinalCTA = () => {
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
                <Search className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">User Research</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Build Products Users Love with{" "}
            <span className="text-accent">Data-Driven Insights</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with WDI for thorough user research and testing that ensures your digital products resonate with your audience.
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
                <span>Start Your User Research</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              User Testing • Research Strategy • Data-Driven Insights
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

// Main User Research & Testing Page
export const UserResearchTesting = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <ResearchHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <ResearchBenefits />
      </section>
      
      {/* Research Process */}
      <section className="bg-card">
        <ResearchProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <ResearchServices />
      </section>
      
      {/* Tools */}
      <section className="bg-card">
        <ResearchTools />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <ResearchCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <ResearchInlineCTA />
      </section>
      
      {/* Hire Researchers */}
      <section className="bg-background">
        <HireResearchers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <ResearchFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <ResearchFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};