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
  Brain, Target, Shield, TrendingUp, DollarSign, CheckCircle, Zap,
  ArrowRight, Clock, Lightbulb, Search, BarChart3, Settings, Layers,
  Users, Eye, FileText, MessageSquare, Award, HelpCircle, Send,
  Calendar, Rocket, Code, Database, Globe, Smartphone, Monitor,
  Building, Briefcase, GraduationCap, UserPlus, MapPin, Network,
  GitBranch, Activity, Compass, Workflow, Route, Puzzle, Star,
  RefreshCw, AlertTriangle, Lock, ThumbsUp, Handshake, Gauge,
  PieChart, LineChart, BarChart2, TrendingDown, Cpu, CloudCog,
  Factory, Cog, Wrench, Package, Boxes, Container, Component,
  Repeat, Analytics, Percent, Hash, Grid, Scale, Filter, Table,
  FileChartBar, CircuitBoard, HardDrive, Terminal, GitCommit,
  RotateCw, MonitorSpeaker, Cable, ArrowUpDown, Shuffle, PlugIcon,
  Waypoints, SendHorizontal, FileCode, Layers as LayersIcon,
  Forward, Rewind, Pen, Move, SquareStack, MousePointer2, Ruler,
  Wand2, Paintbrush, TestTube, FlaskConical, Focus, Beaker, UserCheck2,
  Microscope as TestIcon, UserCog, Group, Accessibility, Contrast,
  Type, Frame, PenTool, Dribbble, Eraser, Crop, Scissors, Image,
  ImageIcon, Artboard, Blend, Swatch, Shapes, PaintBucket, EyeDropper,
  Pipette, Vector, MousePointer as ClickIcon, PlayCircle, Hand,
  TouchpadOff, Vibrate, Menu, Home, Mail, Phone, BookOpen, Edit3,
  Mic, Video, Users2, Tablet, Layout, Square, Circle, Triangle,
  Hexagon, Plus, Minus, X, Check, ChevronRight, ChevronDown
} from "lucide-react";

// AI Strategy & Consulting Hero Section
const AIStrategyHeroWithCTA = () => {
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
            {/* AI Strategy Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">AI & ML</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                AI Strategy & Consulting Services
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Guiding your business through the complexities of Artificial Intelligence, from identifying opportunities to defining a clear, actionable AI roadmap.
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
                  <Brain className="w-5 h-5 flex-shrink-0" />
                  <span>Develop Your AI Strategy</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 flex-shrink-0" />
                  <span>Request a Consultation</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with AI Strategy Roadmap Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* AI Strategy Roadmap Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Strategy Dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-6 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* AI Strategy Interface */}
                  <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-center mb-6"
                    >
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Brain className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">AI Strategy Roadmap</h3>
                      </div>
                      <div className="w-full h-1 bg-gradient-to-r from-accent via-blue-500 to-purple-500 rounded-full"></div>
                    </motion.div>
                    
                    {/* Strategy Steps */}
                    <div className="space-y-3">
                      {/* Discovery Phase */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="relative"
                      >
                        <div className="h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 p-3 flex items-center gap-3">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                            <Search className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Discovery & Analysis</div>
                          </div>
                          <div className="text-xs text-blue-300">Phase 1</div>
                        </div>
                        {/* Progress indicator */}
                        <motion.div
                          animate={{ width: ["0%", "100%"] }}
                          transition={{ duration: 2, delay: 1.5 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
                        ></motion.div>
                      </motion.div>
                      
                      {/* Assessment Phase */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="relative"
                      >
                        <div className="h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 p-3 flex items-center gap-3">
                          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                            <Target className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Opportunity Assessment</div>
                          </div>
                          <div className="text-xs text-green-300">Phase 2</div>
                        </div>
                        {/* Progress indicator */}
                        <motion.div
                          animate={{ width: ["0%", "85%"] }}
                          transition={{ duration: 2, delay: 2.0 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-green-500 rounded-full"
                        ></motion.div>
                      </motion.div>
                      
                      {/* Roadmap Phase */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="relative"
                      >
                        <div className="h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-3 flex items-center gap-3">
                          <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                            <Route className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Roadmap Development</div>
                          </div>
                          <div className="text-xs text-purple-300">Phase 3</div>
                        </div>
                        {/* Progress indicator */}
                        <motion.div
                          animate={{ width: ["0%", "60%"] }}
                          transition={{ duration: 2, delay: 2.5 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-purple-500 rounded-full"
                        ></motion.div>
                      </motion.div>
                      
                      {/* Implementation Phase */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="relative"
                      >
                        <div className="h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30 p-3 flex items-center gap-3">
                          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                            <Rocket className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Implementation Planning</div>
                          </div>
                          <div className="text-xs text-orange-300">Phase 4</div>
                        </div>
                        {/* Progress indicator */}
                        <motion.div
                          animate={{ width: ["0%", "30%"] }}
                          transition={{ duration: 2, delay: 3.0 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-orange-500 rounded-full"
                        ></motion.div>
                      </motion.div>
                    </div>
                    
                    {/* ROI Projection */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-lg border border-accent/30"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-sm font-medium">Projected ROI</div>
                          <div className="text-accent text-xs">12-month forecast</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">+245%</div>
                          <div className="text-xs text-white/70">Expected Return</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Executive/Consultant */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="absolute -bottom-6 -left-6 transform -rotate-12"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full flex items-center justify-center border border-accent/30">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Data Points & Brain Visualization */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <Brain className="w-4 h-4" />
                    <span>AI Intelligence</span>
                  </div>
                  <div className="space-y-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-accent rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-blue-400 rounded-full ml-1"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-4 h-4 bg-purple-400 rounded-full ml-2"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Abstract Brain/Data Visualization */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <Brain className="w-10 h-10 text-accent" />
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-10 h-10"
                      >
                        <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-green-400 rounded-full transform -translate-x-1/2"></div>
                        <div className="absolute left-0 top-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
                        <div className="absolute right-0 top-1/2 w-1 h-1 bg-yellow-400 rounded-full transform -translate-y-1/2"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Strategy Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Target className="w-3 h-3 mr-1" />
                  Strategic
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Data-Driven
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Rocket className="w-3 h-3 mr-1" />
                  Actionable
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of AI Strategy & Consulting
const AIStrategyBenefits = () => {
  const benefits = [
    {
      icon: Route,
      title: "Clear Roadmap",
      description: "Translate AI potential into a practical, implementable plan."
    },
    {
      icon: DollarSign,
      title: "Identified ROI",
      description: "Focus on AI initiatives that deliver measurable business value."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Address ethical, data privacy, and implementation challenges upfront."
    },
    {
      icon: TrendingUp,
      title: "Competitive Edge",
      description: "Leverage AI to innovate and differentiate your offerings."
    },
    {
      icon: Brain,
      title: "Informed Decisions",
      description: "Gain insights into AI technologies relevant to your business."
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
            Why Partner with WDI for AI Strategy?
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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

        {/* Second row with remaining benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8"
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

// AI Strategy Process
const AIStrategyProcess = () => {
  const steps = [
    {
      title: "Discovery & Business Needs Analysis",
      description: "Understanding your business objectives, current capabilities, and specific challenges to identify where AI can create the most value.",
      icon: Search
    },
    {
      title: "AI Opportunity Assessment",
      description: "Evaluating potential AI use cases, market opportunities, and alignment with your business strategy and goals.",
      icon: Target
    },
    {
      title: "Data Readiness Evaluation",
      description: "Assessing your data quality, infrastructure, and governance to determine AI readiness and requirements.",
      icon: Database
    },
    {
      title: "Technology & Feasibility Study",
      description: "Analyzing technical requirements, platform options, and implementation feasibility for identified AI initiatives.",
      icon: Cpu
    },
    {
      title: "Roadmap Definition & ROI Projection",
      description: "Creating a prioritized implementation plan with timelines, resource requirements, and expected return on investment.",
      icon: Route
    },
    {
      title: "Implementation Planning & Pilot Program",
      description: "Developing detailed implementation strategies and launching pilot programs to validate concepts and approaches.",
      icon: Rocket
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
            Our Phased Approach to Your AI Transformation
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

// AI Strategy Offerings
const AIStrategyOfferings = () => {
  const offerings = [
    {
      title: "AI Opportunity Identification",
      description: "Pinpointing areas where AI can create value.",
      icon: Lightbulb,
      features: ["Use Case Analysis", "Value Assessment", "Opportunity Mapping", "Business Impact"]
    },
    {
      title: "AI Readiness Assessment",
      description: "Evaluating your data, infrastructure, and team for AI adoption.",
      icon: CheckCircle,
      features: ["Data Maturity", "Infrastructure Audit", "Team Capability", "Organizational Readiness"]
    },
    {
      title: "AI Roadmap Development",
      description: "Creating a phased plan for AI implementation.",
      icon: Route,
      features: ["Strategic Planning", "Phase Prioritization", "Resource Planning", "Timeline Development"]
    },
    {
      title: "AI Ethics & Governance",
      description: "Advising on responsible and unbiased AI practices.",
      icon: Shield,
      features: ["Ethical Framework", "Bias Mitigation", "Compliance Strategy", "Risk Management"]
    },
    {
      title: "Vendor & Technology Selection",
      description: "Guiding choices for AI platforms and tools.",
      icon: Settings,
      features: ["Platform Evaluation", "Vendor Analysis", "Technology Fit", "Cost-Benefit Analysis"]
    },
    {
      title: "Change Management for AI Adoption",
      description: "Preparing your organization for AI integration.",
      icon: Users,
      features: ["Change Strategy", "Training Programs", "Culture Transformation", "Adoption Support"]
    },
    {
      title: "GenAI Strategy & Use Case Identification",
      description: "Consulting on the strategic application of Generative AI.",
      icon: Brain,
      features: ["GenAI Opportunities", "Use Case Development", "Implementation Strategy", "ROI Assessment"]
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
            Our Specialized AI Consulting Capabilities
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offerings.slice(0, 6).map((offering, index) => {
            const IconComponent = offering.icon;
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
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {offering.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {offering.features.map((feature) => (
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

        {/* Last offering card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mt-8"
        >
          {offerings.slice(6).map((offering, index) => {
            const IconComponent = offering.icon;
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
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {offering.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {offering.features.map((feature) => (
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

// Target Audience
const AIStrategyTargetAudience = () => {
  const audiences = [
    { title: "CTOs", icon: Code, description: "Technical leaders driving AI transformation initiatives" },
    { title: "Product Leaders", icon: Rocket, description: "Product managers integrating AI into product strategy" },
    { title: "Business Owners", icon: Briefcase, description: "Executives seeking competitive advantage through AI" },
    { title: "Innovation Teams", icon: Lightbulb, description: "Teams exploring AI opportunities and applications" },
    { title: "Enterprise Leaders", icon: Building, description: "Decision makers considering AI adoption" }
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
            Ideal For...
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {audience.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {audience.description}
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

// AI Strategy Case Studies with AI-related images
const AIStrategyCaseStudies = () => {
  const caseStudies = [
    {
      title: "Manufacturing AI Transformation",
      client: "Industrial Manufacturing Corp",
      description: "Developed comprehensive AI strategy that identified 8 key use cases, resulting in 30% operational efficiency improvement and $2.5M annual savings through predictive maintenance and quality optimization.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format", // AI/ML circuit board
      results: "$2.5M annual savings, 30% efficiency gain",
      engagement: "6-month strategy engagement",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Financial Services AI Roadmap",
      client: "Regional Banking Institution",
      description: "Created strategic AI roadmap focusing on customer experience and risk management, leading to 40% reduction in loan processing time and improved fraud detection capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format", // AI visualization
      results: "40% faster processing, enhanced fraud detection",
      engagement: "4-month strategic assessment",
      gradient: "from-green-500/20 to-emerald-500/20"
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
            Guiding Businesses to AI Success
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
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
                        <Brain className="w-6 h-6 text-accent" />
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
                        <Clock className="w-3 h-3" />
                        {study.engagement}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300 h-auto py-3"
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
const AIStrategyInlineCTA = () => {
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
                <Brain className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">AI Strategy</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Unsure Where to Begin{" "}
              <span className="text-accent">Your AI Journey?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Our AI consultants provide clarity and a strategic direction for your business.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Book a Free AI Strategy Call</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire AI/ML Consultants
const HireAIConsultants = () => {
  const consultantTypes = [
    {
      title: "AI Strategy Consultants",
      description: "Senior strategists who design comprehensive AI transformation plans",
      icon: Brain,
      skills: ["AI Strategy", "Business Analysis", "Roadmap Development", "ROI Planning"]
    },
    {
      title: "AI Solution Architects",
      description: "Technical architects who design scalable AI infrastructure",
      icon: Cpu,
      skills: ["Solution Architecture", "Platform Design", "Technology Selection", "Integration Planning"]
    },
    {
      title: "Data Strategy Leaders",
      description: "Experts in data governance and AI-ready data architecture",
      icon: Database,
      skills: ["Data Strategy", "Governance Framework", "Data Architecture", "Quality Management"]
    },
    {
      title: "AI Ethics Consultants",
      description: "Specialists in responsible AI and ethical implementation",
      icon: Shield,
      skills: ["AI Ethics", "Bias Mitigation", "Compliance Strategy", "Risk Assessment"]
    },
    {
      title: "AI Product Strategists",
      description: "Product leaders who integrate AI into product development",
      icon: Rocket,
      skills: ["Product Strategy", "AI Integration", "User Experience", "Market Analysis"]
    },
    {
      title: "Change Management Consultants",
      description: "Experts in organizational transformation for AI adoption",
      icon: Users,
      skills: ["Change Management", "Training Strategy", "Culture Transformation", "Adoption Planning"]
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
            Access Expert AI Strategy & Leadership Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire experienced AI strategists, solution architects, and data leaders to drive your AI initiatives.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {consultantTypes.map((type, index) => {
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
                <span>Hire AI/ML Consultants</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white/20 text-muted-foreground hover:bg-muted hover:text-foreground"
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

// AI Strategy FAQs
const AIStrategyFAQs = () => {
  const faqs = [
    {
      question: "What is an \"AI Roadmap\"?",
      answer: "An AI roadmap is a strategic plan that outlines how your organization will adopt and implement AI technologies over time. It includes identified use cases, prioritized initiatives, resource requirements, timeline milestones, and expected outcomes. The roadmap typically spans 12-36 months and provides a clear path from current state to AI-enabled future state, including technical infrastructure, data preparation, team development, and change management considerations."
    },
    {
      question: "How long does an AI strategy engagement typically last?",
      answer: "AI strategy engagements typically range from 8-16 weeks, depending on organization size and complexity. A typical engagement includes 2-3 weeks for discovery and assessment, 3-4 weeks for opportunity identification and feasibility analysis, 2-3 weeks for roadmap development and ROI modeling, and 1-2 weeks for implementation planning and stakeholder alignment. Larger enterprises or complex multi-business unit organizations may require longer engagements."
    },
    {
      question: "Do you help with AI ethics and responsible AI?",
      answer: "Yes, AI ethics and responsible AI practices are integral parts of our strategy consulting. We help establish ethical AI frameworks, identify and mitigate bias risks, ensure compliance with regulations like GDPR and emerging AI laws, develop transparent AI governance policies, and create accountability mechanisms. This includes bias testing methodologies, explainable AI requirements, data privacy protection, and ongoing monitoring systems to ensure ethical AI deployment."
    },
    {
      question: "What data do I need to prepare for an AI assessment?",
      answer: "For an AI assessment, we typically need access to business process documentation, existing data inventories and quality reports, current technology architecture diagrams, team skill assessments, and business performance metrics. We'll also review data governance policies, compliance requirements, and any existing analytics or automation initiatives. Most information gathering happens through interviews and workshops, so detailed preparation isn't required upfront - we guide you through the discovery process."
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
const AIStrategyFinalCTA = () => {
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
                <Brain className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">AI Strategy</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Chart Your Course to{" "}
            <span className="text-accent">AI-Powered Future with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with our expert AI consultants to transform complex ideas into actionable strategies and achieve measurable results.
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
                <span>Start Your AI Strategy</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Strategic Planning • Implementation Roadmap • ROI Optimization
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

// Main AI Strategy & Consulting Page
export const AIStrategyConsulting = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <AIStrategyHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <AIStrategyBenefits />
      </section>
      
      {/* AI Strategy Process */}
      <section className="bg-card">
        <AIStrategyProcess />
      </section>
      
      {/* Offerings */}
      <section className="bg-background">
        <AIStrategyOfferings />
      </section>
      
      {/* Target Audience */}
      <section className="bg-card">
        <AIStrategyTargetAudience />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <AIStrategyCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <AIStrategyInlineCTA />
      </section>
      
      {/* Hire Consultants */}
      <section className="bg-background">
        <HireAIConsultants />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <AIStrategyFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <AIStrategyFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};