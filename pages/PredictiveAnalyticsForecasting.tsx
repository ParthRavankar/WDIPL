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
  Cloud, Cpu as ProcessorIcon, Mic2, Feather, Palette, Aperture,
  Waves, Zap as Lightning, Lightbulb as BulbIcon, Layers3, Boxes as CubeIcon,
  Bot as RobotIcon, MessageSquare as ChatIcon, Headphones, UserCheck,
  ShoppingCart, CreditCard, Volume2, Languages, Smile, GitPullRequest,
  Deployment, HardDriveIcon, CloudIcon, MonitorIcon, AlertCircle,
  Scatter3D, ScanSearch, Regex, BrainCircuit, Microscope, FlaskConicalIcon,
  Calculator, LineChartIcon, TestTubes, Binary, FlaskRound, Atom,
  Crystal, Telescope, Radar
} from "lucide-react";

// Predictive Analytics & Forecasting Hero Section
const PredictiveAnalyticsHeroWithCTA = () => {
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
            {/* Predictive Analytics Label */}
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
                Predictive Analytics & Forecasting Solutions
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Harnessing the power of your data to anticipate future trends, predict outcomes, and make proactive, data-driven business decisions.
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
                  <TrendingUp className="w-5 h-5 flex-shrink-0" />
                  <span>Predict Your Future</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <Play className="w-5 h-5 flex-shrink-0" />
                  <span>Request a Demo</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Predictive Analytics Visualization Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Predictive Analytics Dashboard Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Prediction Dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-6 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* Crystal Ball with Data Points */}
                  <div className="relative flex items-center justify-center mb-8">
                    {/* Crystal Ball */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="relative z-10"
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center shadow-2xl border border-blue-500/50 backdrop-blur-sm">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-blue-400/30">
                          <TrendingUp className="w-12 h-12 text-blue-300" />
                        </div>
                      </div>
                      
                      {/* Pulsing Rings */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-blue-400/10 border border-blue-400/20"
                      ></motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.05, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        className="absolute inset-0 rounded-full bg-purple-400/10 border border-purple-400/20"
                      ></motion.div>
                    </motion.div>
                    
                    {/* Floating Data Points around Crystal Ball */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * 45) * (Math.PI / 180);
                        const radius = 80;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        
                        const colors = ['bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-orange-400', 'bg-cyan-400', 'bg-pink-400', 'bg-yellow-400', 'bg-red-400'];
                        const randomColor = colors[i % colors.length];
                        
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                            className="absolute top-1/2 left-1/2"
                            style={{
                              transform: `translate(${x}px, ${y}px)`
                            }}
                          >
                            <motion.div
                              animate={{ 
                                y: [0, -15, 0],
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1.2, 0.8]
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                delay: i * 0.4 
                              }}
                              className={`w-3 h-3 ${randomColor} rounded-full shadow-lg`}
                            ></motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Growth Chart extending into future */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="bg-black/50 rounded-lg p-4 border border-gray-700 mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-mono">Revenue Forecast</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        +34% Growth
                      </Badge>
                    </div>
                    
                    {/* Chart visualization */}
                    <div className="relative h-24 flex items-end justify-between">
                      {/* Historical data bars */}
                      {[40, 55, 48, 72, 68, 85].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 2.2 + i * 0.1 }}
                          className="w-4 bg-blue-500 rounded-t"
                        ></motion.div>
                      ))}
                      
                      {/* Future prediction bars */}
                      {[92, 105, 118, 125].map((height, i) => (
                        <motion.div
                          key={i + 6}
                          initial={{ height: 0 }}
                          animate={{ height: `${height > 100 ? 100 : height}%` }}
                          transition={{ duration: 1, delay: 2.8 + i * 0.1 }}
                          className="w-4 bg-gradient-to-t from-green-500 to-green-300 rounded-t opacity-80 border-2 border-dashed border-green-400"
                        ></motion.div>
                      ))}
                      
                      {/* Prediction line */}
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 3.2 }}
                        className="absolute top-0 left-0 w-full h-full"
                      >
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <motion.path
                            d="M5,60 L15,45 L25,52 L35,28 L45,32 L55,15 L65,8 L75,5 L85,2 L95,0"
                            stroke="#10B981"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            animate={{ strokeDashoffset: [0, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>Historical</span>
                      <span className="text-green-400">Predicted</span>
                    </div>
                  </motion.div>
                  
                  {/* Prediction Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.4 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-lg font-bold">89.2%</div>
                      <div className="text-white text-xs">Accuracy</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="text-green-400 text-lg font-bold">+34%</div>
                      <div className="text-white text-xs">Growth</div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Prediction Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.6 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                    <Telescope className="w-6 h-6 text-purple-400" />
                  </div>
                </motion.div>
                
                {/* Future Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.8 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>Future Insights</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Prediction Confidence Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 4.0 }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-blue-400 text-sm font-bold">High</div>
                      <div className="text-blue-300 text-xs">Confidence</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Predictive Analytics Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.2 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Forecasting
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Analytics
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Telescope className="w-3 h-3 mr-1" />
                  Insights
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Predictive Analytics
const PredictiveAnalyticsBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Proactive Decision Making",
      description: "Act before trends fully materialize."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify potential issues like churn or fraud early."
    },
    {
      icon: Scale,
      title: "Optimized Resource Allocation",
      description: "Forecast demand, inventory, staffing needs accurately."
    },
    {
      icon: Heart,
      title: "Personalized Customer Experiences",
      description: "Predict preferences and offer tailored solutions."
    },
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate forecasting and reduce guesswork."
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
            Gain a Competitive Edge with Future Insights
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

// Predictive Analytics Process
const PredictiveAnalyticsProcess = () => {
  const steps = [
    {
      title: "Business Goal Definition",
      description: "Identifying specific business objectives and defining what outcomes need to be predicted to drive strategic decisions.",
      icon: Target
    },
    {
      title: "Data Collection & Preparation", 
      description: "Gathering relevant historical data from multiple sources and ensuring data quality, completeness, and consistency.",
      icon: Database
    },
    {
      title: "Feature Engineering",
      description: "Creating meaningful variables and transforming raw data into features that enhance model predictive performance.",
      icon: Wrench
    },
    {
      title: "Model Selection & Training",
      description: "Selecting appropriate algorithms and training multiple models to identify the best approach for your specific use case.",
      icon: Brain
    },
    {
      title: "Validation & Evaluation",
      description: "Rigorously testing model accuracy, reliability, and performance using statistical validation and cross-validation techniques.",
      icon: CheckCircle
    },
    {
      title: "Deployment & Visualization",
      description: "Implementing models in production environments and creating intuitive dashboards for stakeholder consumption.",
      icon: Monitor
    },
    {
      title: "Monitoring & Refinement",
      description: "Continuously tracking model performance and updating predictions based on new data and changing business conditions.",
      icon: Activity
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
            Our Strategic Approach to Forecasting Future Outcomes
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

// Predictive Analytics Services
const PredictiveAnalyticsServices = () => {
  const services = [
    {
      title: "Customer Churn Prediction",
      description: "Identifying at-risk customers to improve retention.",
      icon: Users,
      features: ["Churn Risk Scoring", "Retention Strategies", "Customer Segmentation", "Lifecycle Analysis"]
    },
    {
      title: "Demand & Sales Forecasting",
      description: "Optimizing inventory, production, and marketing.",
      icon: TrendingUp,
      features: ["Sales Forecasting", "Inventory Optimization", "Demand Planning", "Market Trends"]
    },
    {
      title: "Fraud Detection",
      description: "Identifying suspicious patterns in transactions or behavior.",
      icon: Shield,
      features: ["Anomaly Detection", "Real-time Monitoring", "Risk Assessment", "Pattern Recognition"]
    },
    {
      title: "Risk Assessment Models",
      description: "Evaluating credit risk, loan defaults, investment potential.",
      icon: AlertTriangle,
      features: ["Credit Scoring", "Default Prediction", "Investment Risk", "Portfolio Analysis"]
    },
    {
      title: "Predictive Maintenance",
      description: "Forecasting equipment failures to prevent downtime.",
      icon: Wrench,
      features: ["Failure Prediction", "Maintenance Scheduling", "Asset Optimization", "Downtime Prevention"]
    },
    {
      title: "Customer Lifetime Value (CLTV) Prediction",
      description: "Estimating future revenue from customers.",
      icon: DollarSign,
      features: ["Revenue Forecasting", "Customer Segmentation", "Value Optimization", "Growth Prediction"]
    },
    {
      title: "Personalized Recommendation Systems",
      description: "Suggesting products/content based on past behavior.",
      icon: Target,
      features: ["Product Recommendations", "Content Personalization", "Behavioral Analysis", "Cross-selling"]
    },
    {
      title: "Resource Optimization",
      description: "Predicting staffing, energy, or resource needs.",
      icon: Scale,
      features: ["Capacity Planning", "Resource Allocation", "Cost Optimization", "Efficiency Analysis"]
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
            Our Specialized Predictive Analytics Capabilities
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

// Predictive Analytics Tech Stack
const PredictiveAnalyticsTechStack = () => {
  const technologies = [
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "R", icon: BarChart3, category: "Statistical Computing", color: "blue" },
    { name: "TensorFlow", icon: Brain, category: "Machine Learning", color: "orange" },
    { name: "PyTorch", icon: Brain, category: "Deep Learning", color: "orange" },
    { name: "Scikit-learn", icon: Cog, category: "ML Library", color: "orange" },
    { name: "Prophet", icon: TrendingUp, category: "Forecasting", color: "blue" },
    { name: "ARIMA", icon: LineChart, category: "Time Series", color: "green" },
    { name: "XGBoost", icon: Zap, category: "Gradient Boosting", color: "green" },
    { name: "Pandas", icon: Table, category: "Data Manipulation", color: "blue" },
    { name: "NumPy", icon: Calculator, category: "Numerical Computing", color: "blue" },
    { name: "Tableau", icon: BarChart3, category: "Visualization", color: "orange" },
    { name: "Power BI", icon: PieChart, category: "Business Intelligence", color: "yellow" },
    { name: "AWS Redshift", icon: CloudCog, category: "Data Warehouse", color: "orange" },
    { name: "Google BigQuery", icon: Database, category: "Analytics Database", color: "green" },
    { name: "Azure Synapse", icon: Cloud, category: "Analytics Platform", color: "blue" }
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
            Predictive Analytics Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Utilizing powerful tools for accurate data analysis and forecasting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const colorClasses = {
              blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
              orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
              green: "bg-green-500/20 text-green-400 border-green-500/30",
              yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
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

// Predictive Analytics Case Studies
const PredictiveAnalyticsCaseStudies = () => {
  const caseStudies = [
    {
      title: "Customer Churn Prediction Model",
      client: "Telecommunications Company",
      description: "Implemented predictive churn model identifying at-risk customers with 92% accuracy, enabling proactive retention campaigns that reduced churn by 35% and increased customer lifetime value by $2.4M annually.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "92% prediction accuracy, 35% churn reduction",
      engagement: "4-month predictive analytics project",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Sales Forecasting System",
      client: "Retail Chain Enterprise",
      description: "Built comprehensive sales forecasting system across 500+ locations, improving forecast accuracy by 78% and optimizing inventory management, resulting in 25% reduction in stockouts and 20% inventory cost savings.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      results: "78% forecast improvement, 25% stockout reduction",
      engagement: "6-month forecasting implementation",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Predictive Maintenance Platform",
      client: "Manufacturing Corporation",
      description: "Developed IoT-based predictive maintenance system for industrial equipment, achieving 88% accuracy in failure prediction and reducing unplanned downtime by 60%, saving $5.2M in maintenance costs.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&auto=format",
      results: "88% failure prediction, 60% downtime reduction",
      engagement: "8-month predictive maintenance project",
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
            Predictive Insights Driving Business Success
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
                        <TrendingUp className="w-6 h-6 text-accent" />
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
const PredictiveAnalyticsInlineCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-green-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Predictive Analytics</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Make Smarter,{" "}
              <span className="text-accent">Future-Oriented Decisions?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Unlock the power of your data to anticipate trends and drive proactive strategies.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Predictive Analytics Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Predictive Analytics Specialists
const HirePredictiveAnalyticsSpecialists = () => {
  const specialistTypes = [
    {
      title: "Data Scientists",
      description: "Experts in statistical modeling, machine learning, and business intelligence for advanced forecasting",
      icon: BarChart3,
      skills: ["Statistical Modeling", "Predictive Modeling", "Data Mining", "Forecasting Algorithms"]
    },
    {
      title: "Machine Learning Engineers",
      description: "Specialists in building and deploying predictive models at scale",
      icon: Brain,
      skills: ["ML Model Development", "Feature Engineering", "Model Optimization", "Production Deployment"]
    },
    {
      title: "Business Intelligence Analysts",
      description: "Experts in translating data insights into actionable business strategies",
      icon: Lightbulb,
      skills: ["Business Analysis", "Data Visualization", "KPI Development", "Strategic Planning"]
    },
    {
      title: "Time Series Analysts",
      description: "Specialists in forecasting and temporal data analysis",
      icon: LineChart,
      skills: ["Time Series Modeling", "Trend Analysis", "Seasonal Forecasting", "ARIMA/Prophet"]
    },
    {
      title: "Risk Analytics Specialists",
      description: "Experts in risk assessment and predictive risk modeling",
      icon: Shield,
      skills: ["Risk Modeling", "Credit Scoring", "Fraud Detection", "Compliance Analytics"]
    },
    {
      title: "Visualization Engineers",
      description: "Specialists in creating interactive dashboards and data visualizations",
      icon: Monitor,
      skills: ["Dashboard Development", "Data Visualization", "Interactive Reports", "BI Tools"]
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
            Access Expert Predictive Analytics & Data Scientists
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our specialists in statistical modeling, machine learning, and business intelligence for advanced forecasting.
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
                <span>Hire Data Scientists</span>
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

// Predictive Analytics FAQs
const PredictiveAnalyticsFAQs = () => {
  const faqs = [
    {
      question: "What data is required for accurate predictive models?",
      answer: "Accurate predictive models require sufficient historical data (typically 2-5 years), relevant features that influence the outcome, clean and consistent data quality, and adequate volume (thousands to millions of records depending on complexity). Key data types include: transactional data, customer behavior data, external factors (seasonality, economic indicators), and outcome variables. We work with structured data (databases, spreadsheets), semi-structured data (logs, JSON), and unstructured data (text, images). Data quality is more important than quantity - we assess completeness, accuracy, consistency, and relevance during our initial data audit to ensure optimal model performance."
    },
    {
      question: "How reliable are predictive forecasts?",
      answer: "Forecast reliability varies by use case, data quality, and model complexity, but our predictive models typically achieve 85-95% accuracy for well-defined problems with quality data. Reliability depends on: data completeness and quality, model selection and tuning, external factors and market stability, and forecast horizon (shorter-term predictions are generally more accurate). We provide confidence intervals and uncertainty measures with all predictions, implement continuous monitoring to track accuracy over time, use ensemble methods to improve reliability, and regularly retrain models with new data. We're transparent about model limitations and provide recommendations for interpreting and acting on predictions."
    },
    {
      question: "What industries benefit most from predictive analytics?",
      answer: "Predictive analytics provides value across virtually all industries, with particularly strong benefits in: Retail & E-commerce (demand forecasting, customer churn, personalization), Financial Services (credit risk, fraud detection, investment analysis), Healthcare (patient outcomes, resource planning, drug discovery), Manufacturing (predictive maintenance, quality control, supply chain), Telecommunications (network optimization, customer retention, capacity planning), Energy & Utilities (demand forecasting, asset management, grid optimization), and Transportation & Logistics (route optimization, demand prediction, maintenance scheduling). Success depends more on data availability and business maturity than industry type."
    },
    {
      question: "Can predictive models be integrated into existing dashboards?",
      answer: "Yes, our predictive models seamlessly integrate with existing business intelligence dashboards and reporting systems. We support integration with: Tableau, Power BI, Qlik, and other BI platforms through APIs and data connections, custom web dashboards with real-time prediction updates, Excel and Google Sheets for simpler use cases, CRM systems (Salesforce, HubSpot) for sales and marketing predictions, ERP systems for operational forecasting, and cloud platforms (AWS QuickSight, Google Data Studio, Azure Power BI). We provide REST APIs, scheduled data refreshes, real-time streaming for immediate insights, and custom visualization components. Our team ensures predictions are presented in an intuitive, actionable format for decision-makers."
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
const PredictiveAnalyticsFinalCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-green-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Predictive Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Predict the Future, Shape Your Success{" "}
            <span className="text-accent">with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Leverage our predictive analytics expertise to gain foresight, reduce risk, and optimize your business operations.
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
                <Telescope className="w-6 h-6 flex-shrink-0" />
                <span>Discover Your Predictive Power</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Sales Forecasting • Customer Analytics • Risk Prediction • Demand Planning
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Main Predictive Analytics & Forecasting Page
export const PredictiveAnalyticsForecasting = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <PredictiveAnalyticsHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <PredictiveAnalyticsBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <PredictiveAnalyticsProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <PredictiveAnalyticsServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <PredictiveAnalyticsTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <PredictiveAnalyticsCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <PredictiveAnalyticsInlineCTA />
      </section>
      
      {/* Hire Specialists */}
      <section className="bg-background">
        <HirePredictiveAnalyticsSpecialists />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <PredictiveAnalyticsFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <PredictiveAnalyticsFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};