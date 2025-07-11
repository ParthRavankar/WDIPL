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
  Users, Target, Zap, UserCheck, Shield, CheckCircle, 
  ArrowRight, Clock, Heart, Lightbulb, Search, PenTool, 
  TestTube, RefreshCcw, Layers, Route, Puzzle, Star,
  MessageSquare, Brain, Rocket, Code, Eye, Settings,
  Briefcase, Building, GraduationCap, TrendingUp, UserPlus,
  MapPin, Workflow, FlaskConical, Compass, Wand2, Network,
  GitBranch, BarChart3, Palette, MousePointer2, Play,
  Award, HelpCircle, ArrowUpRight, Send, Calendar,
  FileText, Sparkles, Handshake, Globe, Hash, Package,
  Activity, Coffee, MessageCircle, BookOpen, Edit3,
  Mic, Video, Users2, Smartphone, Monitor, Tablet,
  Layout, Grid, Square, Circle, Triangle, Hexagon,
  Plus, Minus, X, Check, ChevronRight, ChevronDown,
  Menu, Home, Mail, Phone, MapPinIcon as PinIcon
} from "lucide-react";

// Design Thinking Workshops Hero Section
const WorkshopsHeroWithCTA = () => {
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
            {/* Workshop Label */}
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
                Interactive Design Thinking Workshops
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Unlock innovation and problem-solve effectively with WDI's facilitated design thinking workshops, tailored to your business challenges.
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
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <span>Book a Workshop</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <BookOpen className="w-5 h-5 flex-shrink-0" />
                  <span>Learn About Design Thinking</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Collaborative Workshop Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Workshop Collaboration Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Workshop Board */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-100 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl"
                >
                  {/* Whiteboard with Sticky Notes */}
                  <div className="bg-white rounded-xl p-6 relative overflow-hidden border-4 border-gray-200">
                    {/* Workshop Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-center mb-6"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Design Thinking Workshop</h3>
                      <div className="w-full h-1 bg-accent rounded-full"></div>
                    </motion.div>
                    
                    {/* Sticky Notes Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {/* Empathize */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-yellow-200 p-3 rounded-lg shadow-sm transform rotate-2 hover:rotate-0 transition-transform cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="w-3 h-3 text-red-500" />
                          <span className="text-xs font-medium text-gray-700">EMPATHIZE</span>
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                          User needs<br/>Pain points
                        </div>
                      </motion.div>
                      
                      {/* Define */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="bg-blue-200 p-3 rounded-lg shadow-sm transform -rotate-1 hover:rotate-0 transition-transform cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-3 h-3 text-blue-600" />
                          <span className="text-xs font-medium text-gray-700">DEFINE</span>
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                          Problem<br/>statement
                        </div>
                      </motion.div>
                      
                      {/* Ideate */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="bg-green-200 p-3 rounded-lg shadow-sm transform rotate-1 hover:rotate-0 transition-transform cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-3 h-3 text-yellow-600" />
                          <span className="text-xs font-medium text-gray-700">IDEATE</span>
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                          Creative<br/>solutions
                        </div>
                      </motion.div>
                      
                      {/* Prototype */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="bg-purple-200 p-3 rounded-lg shadow-sm transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <PenTool className="w-3 h-3 text-purple-600" />
                          <span className="text-xs font-medium text-gray-700">PROTOTYPE</span>
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                          Build &<br/>test ideas
                        </div>
                      </motion.div>
                      
                      {/* Test */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 2.0 }}
                        className="bg-orange-200 p-3 rounded-lg shadow-sm transform rotate-3 hover:rotate-0 transition-transform cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <TestTube className="w-3 h-3 text-orange-600" />
                          <span className="text-xs font-medium text-gray-700">TEST</span>
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                          User<br/>feedback
                        </div>
                      </motion.div>
                      
                      {/* Iterate */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 2.2 }}
                        className="bg-pink-200 p-3 rounded-lg shadow-sm transform -rotate-1 hover:rotate-0 transition-transform cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <RefreshCcw className="w-3 h-3 text-pink-600" />
                          <span className="text-xs font-medium text-gray-700">ITERATE</span>
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                          Refine &<br/>improve
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Workshop Flow Arrows */}
                    <div className="absolute inset-0 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        <motion.path
                          d="M20 30 Q50 20 80 30 Q90 50 80 70 Q50 80 20 70 Q10 50 20 30"
                          stroke="#E5195E"
                          strokeWidth="1"
                          strokeDasharray="3,3"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, delay: 2.4, repeat: Infinity, repeatDelay: 2 }}
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Facilitator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                    className="absolute -bottom-6 -left-6 transform -rotate-12"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full flex items-center justify-center border border-accent/30">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Collaboration Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <Brain className="w-4 h-4" />
                    <span>Collaborative</span>
                  </div>
                  <div className="space-y-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-accent rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Idea Generation Graphics */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.0 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                    <Lightbulb className="w-10 h-10 text-yellow-500" />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Workshop Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.2 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Users className="w-3 h-3 mr-1" />
                  Collaborative
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Target className="w-3 h-3 mr-1" />
                  Goal-Oriented
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Interactive
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Design Thinking Workshops
const WorkshopBenefits = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: "User-Centric Innovation",
      description: "Focus on real user needs to build impactful solutions."
    },
    {
      icon: Zap,
      title: "Accelerated Problem Solving",
      description: "Rapidly ideate and test solutions."
    },
    {
      icon: Users,
      title: "Cross-Functional Alignment",
      description: "Get diverse teams on the same page."
    },
    {
      icon: Shield,
      title: "Reduced Risk",
      description: "Validate concepts before significant investment."
    },
    {
      icon: Rocket,
      title: "Empowered Teams",
      description: "Foster a culture of creativity and collaboration."
    },
    {
      icon: Target,
      title: "Tangible Outcomes",
      description: "End with actionable insights and defined next steps."
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
            Why Facilitate Innovation with Design Thinking?
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

// Design Thinking Approach
const DesignThinkingApproach = () => {
  const steps = [
    {
      title: "Empathize",
      description: "Deeply understand your users and their challenges.",
      icon: Heart,
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "Define",
      description: "Clearly articulate the core problem to be solved.",
      icon: Target,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Ideate",
      description: "Generate a wide range of creative solutions.",
      icon: Lightbulb,
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "Prototype",
      description: "Create tangible representations of solutions.",
      icon: PenTool,
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Test",
      description: "Validate prototypes with users to gather feedback.",
      icon: TestTube,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Iterate",
      description: "Refine solutions based on learning.",
      icon: RefreshCcw,
      color: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30"
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
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              WDI's Facilitated Design Thinking Journey
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Our expert facilitators guide your team through every step, ensuring clear objectives and actionable results.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Expert Facilitation</h4>
                <p className="text-gray-400 text-sm">Structured guidance for maximum impact</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-white font-semibold">Collaborative Process</h3>
                <p className="text-gray-300 text-sm">Interactive and engaging methodology</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
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
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl border ${step.borderColor} flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <div className="text-2xl font-bold text-accent">0{index + 1}</div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
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

// Workshop Formats & Focus Areas
const WorkshopFormats = () => {
  const formats = [
    {
      title: "Problem Definition Workshops",
      description: "Clarifying complex challenges.",
      icon: Search,
      features: ["Challenge Mapping", "Root Cause Analysis", "Problem Framing", "Stakeholder Alignment"]
    },
    {
      title: "Ideation & Brainstorming Sessions",
      description: "Generating new product/feature ideas.",
      icon: Lightbulb,
      features: ["Creative Techniques", "Rapid Ideation", "Concept Development", "Solution Prioritization"]
    },
    {
      title: "User Journey Mapping",
      description: "Visualizing and optimizing user interactions.",
      icon: Route,
      features: ["Experience Mapping", "Touchpoint Analysis", "Pain Point Identification", "Opportunity Areas"]
    },
    {
      title: "MVP Definition Workshops",
      description: "Identifying the core features for your first product version.",
      icon: Rocket,
      features: ["Feature Prioritization", "Value Proposition", "User Story Mapping", "Launch Strategy"]
    },
    {
      title: "Service Design Blueprints",
      description: "Mapping end-to-end service experiences.",
      icon: Layers,
      features: ["Service Mapping", "Process Optimization", "System Design", "Implementation Planning"]
    },
    {
      title: "Custom Workshops",
      description: "Designed specifically for your unique organizational goals.",
      icon: Settings,
      features: ["Tailored Approach", "Specific Objectives", "Custom Methodology", "Targeted Outcomes"]
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
            Tailored Workshops for Your Specific Needs
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {formats.map((format, index) => {
            const IconComponent = format.icon;
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
                      {format.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {format.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Elements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {format.features.map((feature) => (
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
const TargetAudience = () => {
  const audiences = [
    { title: "Product Managers", icon: Briefcase, description: "Drive product innovation with user-centered insights" },
    { title: "Business Leaders", icon: Building, description: "Align teams around strategic objectives and solutions" },
    { title: "Startup Founders", icon: Rocket, description: "Validate ideas and define MVP with confidence" },
    { title: "Development Teams", icon: Code, description: "Build solutions that truly address user needs" },
    { title: "Marketing Teams", icon: TrendingUp, description: "Create campaigns based on deep user understanding" },
    { title: "Innovation Teams", icon: Lightbulb, description: "Generate breakthrough ideas and concepts" }
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

// Workshop Case Studies
const WorkshopCaseStudies = () => {
  const caseStudies = [
    {
      title: "FinTech Product Strategy Workshop",
      client: "Financial Services Startup",
      description: "Facilitated a 2-day design thinking workshop that helped define their mobile banking MVP, resulting in a clear product roadmap and successful $5M Series A funding.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "Clear MVP definition, $5M funding secured",
      duration: "2 days",
      participants: "15 stakeholders",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Healthcare Innovation Workshop",
      client: "Medical Device Company",
      description: "Led cross-functional teams through user journey mapping and ideation sessions, identifying 3 key innovation opportunities and reducing time-to-market by 40%.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      results: "3 innovation opportunities, 40% faster launch",
      duration: "3 days",
      participants: "20 team members",
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
            Success Stories from Our Workshops
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
                        <Users className="w-6 h-6 text-accent" />
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
                        {study.duration}
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
const WorkshopInlineCTA = () => {
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
                <span className="text-white text-base font-medium">Design Thinking</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to{" "}
              <span className="text-accent">Innovate Your Way Forward?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Let's design a custom design thinking workshop to address your unique challenges.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Send className="w-6 h-6 flex-shrink-0" />
                <span>Request a Workshop Proposal</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Design Thinking Facilitators
const HireFacilitators = () => {
  const facilitatorTypes = [
    {
      title: "Senior UX Strategists",
      description: "Strategic guidance for design thinking initiatives",
      icon: Compass,
      skills: ["Strategic Planning", "User Research", "Design Strategy", "Workshop Design"]
    },
    {
      title: "Design Thinking Facilitators",
      description: "Expert workshop facilitation and guidance",
      icon: Users,
      skills: ["Workshop Facilitation", "Group Dynamics", "Process Design", "Team Coaching"]
    },
    {
      title: "Innovation Consultants",
      description: "Drive innovation through structured methodologies",
      icon: Lightbulb,
      skills: ["Innovation Strategy", "Ideation Techniques", "Change Management", "Process Optimization"]
    },
    {
      title: "Service Design Specialists",
      description: "End-to-end service experience design",
      icon: Layers,
      skills: ["Service Blueprinting", "Experience Design", "Systems Thinking", "Process Mapping"]
    },
    {
      title: "Product Strategy Consultants",
      description: "Align product development with user needs",
      icon: Target,
      skills: ["Product Strategy", "Market Research", "Feature Prioritization", "Roadmap Planning"]
    },
    {
      title: "Change Management Specialists",
      description: "Guide organizational transformation",
      icon: RefreshCcw,
      skills: ["Change Strategy", "Team Alignment", "Cultural Transformation", "Process Implementation"]
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
            Need Expert Facilitation or UX Strategy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our senior UX strategists and design thinking facilitators can guide your team to actionable outcomes.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {facilitatorTypes.map((type, index) => {
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
                <span>Hire UX Strategists</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-white/20 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <div className="inline-flex items-center gap-2">
                <Eye className="w-5 h-5 flex-shrink-0" />
                <span>Learn More</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Design Thinking FAQs
const WorkshopFAQs = () => {
  const faqs = [
    {
      question: "What is Design Thinking?",
      answer: "Design Thinking is a human-centered approach to innovation that integrates the needs of people, the possibilities of technology, and requirements for business success. It's a methodology that uses empathy, creativity, and rationality to meet user needs and drive business success. The process involves five key stages: Empathize, Define, Ideate, Prototype, and Test, creating solutions that are desirable, feasible, and viable."
    },
    {
      question: "How long do your workshops typically last?",
      answer: "Workshop duration varies based on objectives and scope. Half-day workshops (4 hours) work well for specific problem-solving or ideation sessions. Full-day workshops (8 hours) allow for complete design thinking cycles. Multi-day workshops (2-5 days) are ideal for comprehensive innovation projects, complex challenges, or when working with large teams. We customize the format and duration to match your specific goals and constraints."
    },
    {
      question: "Can workshops be conducted remotely?",
      answer: "Yes, we offer both in-person and remote workshop facilitation. Our remote workshops use specialized digital collaboration tools like Miro, MURAL, or Figma to replicate the interactive, visual nature of design thinking. We've successfully facilitated remote sessions for teams across different time zones, maintaining high engagement and achieving excellent outcomes. Hybrid formats are also available for teams with mixed attendance preferences."
    },
    {
      question: "What are the typical outcomes of a Design Thinking workshop?",
      answer: "Workshops typically produce concrete deliverables including: clearly defined problem statements, validated user personas and journey maps, prioritized solution concepts, testable prototypes or mockups, actionable implementation roadmaps, and alignment among stakeholders. Participants gain design thinking skills, improved collaboration abilities, and a shared understanding of user needs. Most importantly, teams leave with validated concepts ready for development and clear next steps for implementation."
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
const WorkshopFinalCTA = () => {
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
                <span className="text-foreground text-base font-medium">Design Thinking</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Empower Your Team to{" "}
            <span className="text-accent">Innovate with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Harness the power of Design Thinking to create user-centric solutions and drive meaningful business results.
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
                <Users className="w-6 h-6 flex-shrink-0" />
                <span>Explore Workshop Opportunities</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Collaborative Workshops • Expert Facilitation • Actionable Outcomes
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

// Main Design Thinking Workshops Page
export const DesignThinkingWorkshops = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <WorkshopsHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <WorkshopBenefits />
      </section>
      
      {/* Design Thinking Approach */}
      <section className="bg-card">
        <DesignThinkingApproach />
      </section>
      
      {/* Workshop Formats */}
      <section className="bg-background">
        <WorkshopFormats />
      </section>
      
      {/* Target Audience */}
      <section className="bg-card">
        <TargetAudience />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <WorkshopCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <WorkshopInlineCTA />
      </section>
      
      {/* Hire Facilitators */}
      <section className="bg-background">
        <HireFacilitators />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <WorkshopFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <WorkshopFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};