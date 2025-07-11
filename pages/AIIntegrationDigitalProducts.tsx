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
  ArrowRight, Clock, Heart, Lightbulb, Search, BarChart3, Settings,
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
  Hexagon, Plus, Minus, X, Check, ChevronRight, ChevronDown, Bot,
  Server, ArrowDownRight, ArrowUpRight, Loader, Repeat2, Play,
  FastForward, SkipForward, ChevronLeft, ChevronUp, MoreHorizontal,
  MoreVertical, Maximize, Minimize, ExternalLink, Download, Upload,
  Share, Copy, Trash, Archive, Bookmark, Flag, Tag, Link2, Unlink,
  Scissors as CutIcon, ClipboardCopy, ClipboardPaste, RotateCw as RotateIcon,
  FlipHorizontal, FlipVertical, ZoomIn, ZoomOut, Maximize2, Minimize2,
  Truck, Camera, Sparkles, Layers, Scan, Megaphone, MessageCircle,
  Cloud
} from "lucide-react";

// AI Integration Hero Section
const AIIntegrationHeroWithCTA = () => {
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
            {/* AI Integration Label */}
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
                Seamless AI Integration into Digital Products
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Elevate your existing applications with intelligent features that personalize user experiences, automate functions, and provide predictive insights.
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
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <span>Enhance Your Product with AI</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <Search className="w-5 h-5 flex-shrink-0" />
                  <span>Request an Assessment</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with AI-Enhanced App Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* AI-Enhanced App Interface Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main App Interface */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-6 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* App Interface with AI Features */}
                  <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                    {/* App Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="flex items-center justify-between mb-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-white text-sm font-semibold">Your App</h3>
                          <p className="text-gray-400 text-xs">AI-Enhanced</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-gray-400">AI Active</span>
                      </div>
                    </motion.div>
                    
                    {/* AI-Powered Features */}
                    <div className="space-y-4">
                      {/* Smart Search */}
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
                            <div className="text-white text-xs font-medium">Intelligent Search</div>
                            <div className="text-gray-400 text-xs">Natural language queries</div>
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                          ></motion.div>
                        </div>
                        {/* AI highlight */}
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-accent/30 rounded-full flex items-center justify-center"
                        >
                          <Brain className="w-2 h-2 text-accent" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Personalized Recommendations */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="relative"
                      >
                        <div className="h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-3 flex items-center gap-3">
                          <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                            <Target className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Smart Recommendations</div>
                            <div className="text-gray-400 text-xs">Personalized for you</div>
                          </div>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-3 h-3 text-purple-400"
                          >
                            <Sparkles className="w-3 h-3" />
                          </motion.div>
                        </div>
                        {/* AI highlight */}
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-accent/30 rounded-full flex items-center justify-center"
                        >
                          <Brain className="w-2 h-2 text-accent" />
                        </motion.div>
                      </motion.div>
                      
                      {/* AI Chatbot */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="relative"
                      >
                        <div className="h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 p-3 flex items-center gap-3">
                          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                            <MessageSquare className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">AI Assistant</div>
                            <div className="text-gray-400 text-xs">24/7 intelligent support</div>
                          </div>
                          <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-green-400 rounded-full"
                          ></motion.div>
                        </div>
                        {/* AI highlight */}
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-accent/30 rounded-full flex items-center justify-center"
                        >
                          <Brain className="w-2 h-2 text-accent" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Predictive Analytics */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="relative"
                      >
                        <div className="h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30 p-3 flex items-center gap-3">
                          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                            <BarChart3 className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Predictive Insights</div>
                            <div className="text-gray-400 text-xs">Future trends & behavior</div>
                          </div>
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-orange-400 rounded-full"
                          ></motion.div>
                        </div>
                        {/* AI highlight */}
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-accent/30 rounded-full flex items-center justify-center"
                        >
                          <Brain className="w-2 h-2 text-accent" />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* AI Performance Metrics */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-lg border border-accent/30"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-sm font-medium">User Engagement</div>
                          <div className="text-accent text-xs">AI-Powered Features</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">+68%</div>
                          <div className="text-xs text-white/70">Improvement</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* AI Brain Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="absolute -bottom-6 -left-6 transform -rotate-12"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full flex items-center justify-center border border-accent/30">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating AI Features */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>AI Features</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-accent rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Enhanced User Experience Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-blue-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <Users className="w-10 h-10 text-blue-400" />
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center"
                      >
                        <Sparkles className="w-3 h-3 text-accent" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* AI Integration Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Brain className="w-3 h-3 mr-1" />
                  Intelligent
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Target className="w-3 h-3 mr-1" />
                  Personalized
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Predictive
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of AI Product Integration
const AIIntegrationBenefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Personalized User Experiences",
      description: "Tailor content and interactions to individual users."
    },
    {
      icon: Zap,
      title: "Automated Features",
      description: "Reduce manual input, improve efficiency within the app."
    },
    {
      icon: Brain,
      title: "Predictive Capabilities",
      description: "Offer smarter suggestions and anticipate user needs."
    },
    {
      icon: Rocket,
      title: "Competitive Differentiation",
      description: "Stand out with cutting-edge intelligent functionalities."
    },
    {
      icon: BarChart3,
      title: "Enhanced Data Utilization",
      description: "Transform raw data into actionable insights within your product."
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
            Why Integrate AI into Your Existing Products?
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

// AI Product Integration Process
const AIIntegrationProcess = () => {
  const steps = [
    {
      title: "Product Audit & AI Opportunity Mapping",
      description: "Analyzing your existing product to identify areas where AI can add the most value and enhance user experience.",
      icon: Search
    },
    {
      title: "Data Preparation & Model Selection",
      description: "Preparing your data for AI integration and selecting the most appropriate models for your specific use cases.",
      icon: Database
    },
    {
      title: "AI Model Training & Fine-tuning",
      description: "Training and fine-tuning AI models specifically for your product requirements and user behavior patterns.",
      icon: Brain
    },
    {
      title: "Seamless API Integration",
      description: "Integrating AI capabilities into your product through robust APIs without disrupting existing functionality.",
      icon: PlugIcon
    },
    {
      title: "Testing & Performance Optimization",
      description: "Comprehensive testing to ensure AI features work seamlessly and optimizing performance for the best user experience.",
      icon: TestTube
    },
    {
      title: "Deployment & Continuous Learning",
      description: "Deploying AI features and implementing continuous learning mechanisms to improve performance over time.",
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
            Our Strategic Approach to AI-Powered Product Enhancement
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

// AI Product Integration Services
const AIIntegrationServices = () => {
  const services = [
    {
      title: "Recommendation Engines",
      description: "Personalizing content, products, or services.",
      icon: Target,
      features: ["Content Personalization", "Product Recommendations", "User Preferences", "Collaborative Filtering"]
    },
    {
      title: "Intelligent Search",
      description: "Enhancing search relevance and natural language queries.",
      icon: Search,
      features: ["Natural Language Processing", "Semantic Search", "Auto-Complete", "Search Analytics"]
    },
    {
      title: "AI-Powered Chatbots & Virtual Assistants",
      description: "Embedding conversational AI for support/engagement.",
      icon: MessageSquare,
      features: ["Natural Conversations", "Multi-language Support", "Intent Recognition", "Context Awareness"]
    },
    {
      title: "Predictive Analytics Modules",
      description: "Forecasting user behavior, churn, or trends.",
      icon: BarChart3,
      features: ["Behavior Prediction", "Churn Analysis", "Trend Forecasting", "Risk Assessment"]
    },
    {
      title: "Computer Vision Features",
      description: "Image recognition, object detection within your app.",
      icon: Camera,
      features: ["Image Recognition", "Object Detection", "Visual Search", "Quality Inspection"]
    },
    {
      title: "Natural Language Processing (NLP) Components",
      description: "Sentiment analysis, text summarization.",
      icon: FileText,
      features: ["Sentiment Analysis", "Text Summarization", "Language Translation", "Content Classification"]
    },
    {
      title: "Fraud Detection & Security",
      description: "AI-driven anomaly detection for enhanced safety.",
      icon: Shield,
      features: ["Anomaly Detection", "Risk Scoring", "Real-time Monitoring", "Behavioral Analysis"]
    },
    {
      title: "AI-Powered Personalization",
      description: "Dynamic content and UX adaptation.",
      icon: Sparkles,
      features: ["Dynamic Content", "UI Adaptation", "User Segmentation", "Experience Optimization"]
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
            Our Specialized AI Product Integration Solutions
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
                      <h4 className="text-xs font-medium text-foreground">Key Features:</h4>
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

// AI Integration Tech Stack
const AIIntegrationTechStack = () => {
  const technologies = [
    { name: "TensorFlow", icon: Brain, category: "ML Framework", color: "orange" },
    { name: "PyTorch", icon: Cpu, category: "ML Framework", color: "red" },
    { name: "Scikit-learn", icon: BarChart3, category: "ML Library", color: "blue" },
    { name: "OpenAI APIs", icon: Brain, category: "AI Platform", color: "green" },
    { name: "Hugging Face", icon: MessageSquare, category: "NLP Platform", color: "yellow" },
    { name: "AWS AI Services", icon: CloudCog, category: "Cloud AI", color: "orange" },
    { name: "Azure AI", icon: Cloud, category: "Cloud AI", color: "blue" },
    { name: "Google AI Platform", icon: Globe, category: "Cloud AI", color: "green" },
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "Node.js", icon: Server, category: "Runtime", color: "green" },
    { name: "RESTful APIs", icon: PlugIcon, category: "Integration", color: "purple" },
    { name: "GraphQL", icon: Network, category: "API Query", color: "pink" }
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
            AI Integration Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Seamlessly integrating leading AI technologies into your digital products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const colorClasses = {
              blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
              orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
              red: "bg-red-500/20 text-red-400 border-red-500/30",
              yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
              green: "bg-green-500/20 text-green-400 border-green-500/30",
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
              pink: "bg-pink-500/20 text-pink-400 border-pink-500/30"
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
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${colorClasses[tech.color as keyof typeof colorClasses] || 'bg-accent/20 text-accent border-accent/30'}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// AI Integration Case Studies
const AIIntegrationCaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Recommendation Engine",
      client: "Fashion Retail Platform",
      description: "Integrated AI-powered recommendation engine that analyzes user behavior and preferences, resulting in 45% increase in conversion rates and 60% boost in average order value.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      results: "45% conversion increase, 60% AOV boost",
      engagement: "3-month AI integration",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Intelligent Content Personalization",
      client: "Media Streaming Service",
      description: "Embedded AI-driven content personalization that analyzes viewing patterns and preferences, achieving 70% improvement in user engagement and 40% reduction in churn rate.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&auto=format",
      results: "70% engagement boost, 40% churn reduction",
      engagement: "4-month integration project",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Smart Customer Support Chatbot",
      client: "SaaS Technology Company",
      description: "Deployed AI-powered chatbot with natural language processing, handling 80% of customer inquiries automatically and reducing support response time by 85%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "80% automation rate, 85% faster response",
      engagement: "2-month chatbot integration",
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
            Digital Products Transformed by AI Integration
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
                        <Sparkles className="w-6 h-6 text-accent" />
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
const AIIntegrationInlineCTA = () => {
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
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">AI Integration</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Make Your Product{" "}
              <span className="text-accent">Smarter?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Discover how AI can unlock new value and capabilities within your existing applications.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Brain className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free AI Product Integration Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire AI Integration Specialists
const HireAIIntegrationSpecialists = () => {
  const specialistTypes = [
    {
      title: "AI Integration Engineers",
      description: "Specialists in seamlessly embedding AI capabilities into existing products",
      icon: Brain,
      skills: ["AI API Integration", "Model Deployment", "Performance Optimization", "Scalable Architecture"]
    },
    {
      title: "Machine Learning Engineers",
      description: "Experts in training and deploying ML models for product integration",
      icon: Cpu,
      skills: ["Model Training", "Feature Engineering", "MLOps", "Production Deployment"]
    },
    {
      title: "AI Product Managers",
      description: "Product specialists who understand AI capabilities and user needs",
      icon: Target,
      skills: ["AI Product Strategy", "User Experience", "Feature Planning", "Stakeholder Management"]
    },
    {
      title: "Data Scientists",
      description: "Analysts who prepare data and create insights for AI integration",
      icon: BarChart3,
      skills: ["Data Analysis", "Statistical Modeling", "Predictive Analytics", "Data Visualization"]
    },
    {
      title: "NLP Engineers",
      description: "Specialists in natural language processing and conversational AI",
      icon: MessageSquare,
      skills: ["NLP Models", "Chatbot Development", "Text Analysis", "Language Understanding"]
    },
    {
      title: "Computer Vision Engineers",
      description: "Experts in integrating visual AI capabilities into digital products",
      icon: Camera,
      skills: ["Image Recognition", "Object Detection", "Visual Search", "Video Analysis"]
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
            Access Expert AI Integration Engineers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our skilled developers and data scientists experienced in embedding AI models into diverse digital products.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {specialistTypes.map((type, index) => {
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
                <span>Hire AI Integration Talent</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white/20 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <div className="inline-flex items-center gap-2">
                <FileText className="w-5 h-5 flex-shrink-0" />
                <span>Request Profiles</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// AI Integration FAQs
const AIIntegrationFAQs = () => {
  const faqs = [
    {
      question: "What data do I need to prepare for AI integration?",
      answer: "The data requirements depend on your specific AI use case. Generally, you'll need clean, relevant data that represents your users' behavior and preferences. For recommendation engines, user interaction data and product/content metadata are essential. For chatbots, conversation logs and FAQ databases help train the model. For predictive analytics, historical user behavior and outcome data are crucial. We conduct a thorough data audit to identify what you have, what you need, and help prepare your data for optimal AI performance."
    },
    {
      question: "Will AI integration impact my app's performance?",
      answer: "When implemented correctly, AI integration should enhance rather than hinder your app's performance. We use efficient API architectures, caching strategies, and optimized models to minimize latency. Many AI features can be processed asynchronously or in the background. We also implement progressive loading and fallback mechanisms to ensure your app remains fast and responsive. Performance testing is a crucial part of our integration process to ensure optimal user experience."
    },
    {
      question: "Can you integrate AI into legacy applications?",
      answer: "Yes, we specialize in integrating AI into legacy applications through various approaches. We can create API-based integrations that work with existing systems, implement microservices architectures for gradual AI adoption, or develop hybrid solutions that bridge old and new technologies. Our team assesses your current architecture and recommends the best integration approach that minimizes disruption while maximizing AI benefits. We've successfully integrated AI into applications built on various legacy technologies."
    },
    {
      question: "How do you handle data privacy and security with AI features?",
      answer: "Data privacy and security are paramount in our AI integrations. We implement privacy-by-design principles, ensuring compliance with GDPR, CCPA, and other relevant regulations. This includes data encryption, anonymization techniques, secure API communications, and minimal data collection practices. We can implement on-premise AI solutions for sensitive data, use federated learning approaches, or ensure strict data governance in cloud deployments. All AI models are designed with privacy protection and security best practices from the ground up."
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
const AIIntegrationFinalCTA = () => {
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
                <Sparkles className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">AI Integration</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Elevate Your Product with{" "}
            <span className="text-accent">Intelligent AI Integration</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Empower your digital offerings with WDI's expertise in seamlessly embedding cutting-edge AI features.
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
                <span>Enhance Your Product Now</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              AI Integration • Smart Features • Enhanced User Experience
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

// Main AI Integration into Digital Products Page
export const AIIntegrationDigitalProducts = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <AIIntegrationHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <AIIntegrationBenefits />
      </section>
      
      {/* AI Integration Process */}
      <section className="bg-card">
        <AIIntegrationProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <AIIntegrationServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <AIIntegrationTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <AIIntegrationCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <AIIntegrationInlineCTA />
      </section>
      
      {/* Hire Specialists */}
      <section className="bg-background">
        <HireAIIntegrationSpecialists />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <AIIntegrationFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <AIIntegrationFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};