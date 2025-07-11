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
  Crystal, Telescope, Radar, ScanLine, Crosshair, ScanFace, AlignHorizontalJustifyStart,
  Hash as HashIcon, Regex as RegexIcon, Languages as LanguagesIcon, Music, Film,
  BookOpen as BookIcon, Coffee, Gamepad2, Utensils, Plane, Car, ShirtIcon,
  Smartphone as DeviceIcon, Monitor as ScreenIcon
} from "lucide-react";

// Personalized Recommendation Engines Hero Section
const RecommendationEnginesHeroWithCTA = () => {
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
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Personalized Recommendation Engines
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Building intelligent systems that personalize user experiences, drive engagement, and boost conversions by suggesting relevant products, content, or services.
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
                  <span>Enhance User Engagement</span>
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
          
          {/* Right side with Personalized Recommendation Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Product Grid with "Recommended For You" */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Recommendation Dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* "Recommended For You" Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-center mb-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">Recommended For You</h3>
                    <p className="text-gray-400 text-sm">Based on your preferences and behavior</p>
                  </motion.div>
                  
                  {/* Product Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 gap-4 mb-6"
                  >
                    {/* Product Cards */}
                    {[
                      { icon: ShirtIcon, title: "Summer Jacket", price: "$89", match: "95%" },
                      { icon: Headphones, title: "Wireless Headphones", price: "$199", match: "92%" },
                      { icon: BookIcon, title: "Tech Guide 2024", price: "$29", match: "88%" },
                      { icon: Coffee, title: "Premium Coffee", price: "$24", match: "85%" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                        className="bg-black/50 rounded-lg p-4 border border-gray-600 hover:border-accent/30 transition-all duration-300"
                      >
                        <div className="flex flex-col items-center text-center">
                          <item.icon className="w-8 h-8 text-blue-400 mb-2" />
                          <div className="text-white text-sm font-medium mb-1">{item.title}</div>
                          <div className="text-accent text-sm font-bold mb-1">{item.price}</div>
                          <div className="text-green-400 text-xs">{item.match} match</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Content Feed Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="bg-black/50 rounded-lg p-4 border border-gray-700 mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Film className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 text-xs font-mono">Content Feed</span>
                      </div>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                        Personalized
                      </Badge>
                    </div>
                    
                    {/* Content Suggestions */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 2.0 }}
                        className="flex items-center gap-3 p-2 bg-purple-500/10 rounded-lg"
                      >
                        <Film className="w-4 h-4 text-purple-400" />
                        <div className="flex-1">
                          <div className="text-white text-xs">Sci-Fi Thriller Movie</div>
                          <div className="text-purple-300 text-xs">94% match</div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 2.2 }}
                        className="flex items-center gap-3 p-2 bg-blue-500/10 rounded-lg"
                      >
                        <Music className="w-4 h-4 text-blue-400" />
                        <div className="flex-1">
                          <div className="text-white text-xs">Electronic Playlist</div>
                          <div className="text-blue-300 text-xs">91% match</div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Performance Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="text-green-400 text-lg font-bold">+45%</div>
                      <div className="text-white text-xs">Engagement</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-lg font-bold">+32%</div>
                      <div className="text-white text-xs">Conversions</div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Intertwined Arrows showing user-product connection */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                    <ArrowRight className="w-6 h-6 text-orange-400" />
                  </div>
                </motion.div>
                
                {/* Connection Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-cyan-400 text-sm">
                    <Target className="w-4 h-4" />
                    <span>Connected</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-orange-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* User-Product Connection Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.0 }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-accent text-sm font-bold">AI</div>
                      <div className="text-white text-xs">Match</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Recommendation Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.2 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Target className="w-3 h-3 mr-1" />
                  Personalized
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Engagement
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <DollarSign className="w-3 h-3 mr-1" />
                  Conversions
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Recommendation Engines
const RecommendationBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Increased Sales/Conversions",
      description: "Presenting relevant items leads to higher purchases and improved conversion rates."
    },
    {
      icon: Users,
      title: "Enhanced User Engagement",
      description: "Keeping users on your platform longer with tailored content and personalized experiences."
    },
    {
      icon: Heart,
      title: "Improved Customer Satisfaction",
      description: "Making discovery effortless and enjoyable through intelligent recommendations."
    },
    {
      icon: TrendingUp,
      title: "Higher Average Order Value (AOV)",
      description: "Suggesting complementary products that increase basket size and revenue per customer."
    },
    {
      icon: Search,
      title: "New Product/Content Discovery",
      description: "Helping users find what they didn't know they needed through smart suggestions."
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
            Drive Growth with Hyper-Personalization
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

// Our Recommendation Engine Development Process
const RecommendationProcess = () => {
  const steps = [
    {
      title: "Data Collection & User Behavior Analysis",
      description: "Gathering and analyzing user interaction data, preferences, and behavioral patterns to understand recommendation requirements.",
      icon: Database
    },
    {
      title: "Algorithm Selection (Collaborative, Content-Based, Hybrid)", 
      description: "Choosing the optimal recommendation algorithms based on your data characteristics and business objectives.",
      icon: Brain
    },
    {
      title: "Model Training & Optimization",
      description: "Training recommendation models on your data and optimizing for accuracy, performance, and relevance metrics.",
      icon: Settings
    },
    {
      title: "API Integration & A/B Testing",
      description: "Integrating recommendation APIs with your platform and conducting A/B tests to validate performance improvements.",
      icon: GitBranch
    },
    {
      title: "Deployment & Real-time Feedback",
      description: "Deploying the recommendation system to production with real-time feedback loops for continuous learning.",
      icon: Rocket
    },
    {
      title: "Monitoring & Continuous Improvement",
      description: "Ongoing monitoring of recommendation quality and performance with regular model updates and optimizations.",
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
            Our Strategic Approach to Building Your Personalized Engine
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

// Specific Recommendation Engine Services
const RecommendationServices = () => {
  const services = [
    {
      title: "Product Recommendation Systems",
      description: "For eCommerce (e.g., \"Customers who bought this also bought...\").",
      icon: ShoppingCart,
      features: ["Cross-selling", "Upselling", "Similar Products", "Bundle Recommendations"]
    },
    {
      title: "Content Recommendation Systems",
      description: "For media, news, and streaming platforms.",
      icon: Film,
      features: ["Content Discovery", "Personalized Feeds", "Related Articles", "Next Episode"]
    },
    {
      title: "Service & Feature Recommendations",
      description: "Guiding users through complex applications.",
      icon: Compass,
      features: ["Feature Discovery", "User Onboarding", "Progressive Disclosure", "Usage Optimization"]
    },
    {
      title: "Collaborative Filtering",
      description: "Based on user behavior similarity.",
      icon: Users,
      features: ["User-based CF", "Item-based CF", "Matrix Factorization", "Neighborhood Methods"]
    },
    {
      title: "Content-Based Filtering",
      description: "Based on item characteristics and user preferences.",
      icon: Tag,
      features: ["Feature Matching", "Profile Building", "Similarity Metrics", "Preference Learning"]
    },
    {
      title: "Hybrid Recommendation Systems",
      description: "Combining multiple approaches for optimal results.",
      icon: Zap,
      features: ["Multi-algorithm", "Weighted Hybrid", "Switching Hybrid", "Mixed Recommendations"]
    },
    {
      title: "Real-time Recommendations",
      description: "Instant suggestions based on current user activity.",
      icon: Activity,
      features: ["Live Processing", "Session-based", "Context Aware", "Streaming Data"]
    },
    {
      title: "Personalized Search Results",
      description: "Enhancing search relevance.",
      icon: Search,
      features: ["Query Understanding", "Ranking Personalization", "Search Suggestions", "Result Reordering"]
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
            Our Specialized Recommendation Engine Solutions
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

// Tech Stack (Recommendation Engine Specific)
const RecommendationTechStack = () => {
  const technologies = [
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "Apache Spark", icon: Zap, category: "Big Data", color: "orange" },
    { name: "TensorFlow", icon: Brain, category: "Deep Learning", color: "orange" },
    { name: "PyTorch", icon: Brain, category: "Deep Learning", color: "red" },
    { name: "Scikit-learn", icon: Cog, category: "ML Library", color: "blue" },
    { name: "Pandas", icon: Table, category: "Data Processing", color: "green" },
    { name: "NumPy", icon: Calculator, category: "Numerical Computing", color: "blue" },
    { name: "Collaborative Filtering (ALS, SVD)", icon: Users, category: "Algorithm", color: "purple" },
    { name: "Factorization Machines", icon: Grid, category: "Algorithm", color: "green" },
    { name: "Deep Learning for Recommenders", icon: Brain, category: "Neural Networks", color: "red" },
    { name: "Apache Kafka", icon: Activity, category: "Real-time Data", color: "orange" },
    { name: "AWS Personalize", icon: CloudCog, category: "Cloud ML", color: "yellow" },
    { name: "Google Cloud Recommendations AI", icon: Cloud, category: "Cloud ML", color: "blue" }
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
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leveraging advanced algorithms and data pipelines for intelligent personalization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const colorClasses = {
              blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
              orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
              green: "bg-green-500/20 text-green-400 border-green-500/30",
              red: "bg-red-500/20 text-red-400 border-red-500/30",
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
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

// Relevant Recommendation Engine Case Studies
const RecommendationCaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Personalization Engine",
      client: "Fashion Retailer",
      description: "Implemented hybrid recommendation system combining collaborative filtering and content-based approaches, resulting in 35% increase in conversion rates and 28% boost in average order value through personalized product suggestions.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&auto=format",
      results: "35% conversion increase, 28% AOV boost",
      engagement: "Real-world impact through personalization",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Streaming Content Discovery",
      client: "Media Platform",
      description: "Built intelligent content recommendation engine using deep learning and user behavior analytics, achieving 52% increase in user engagement and 40% improvement in content discovery rates for personalized viewing experiences.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop&auto=format",
      results: "52% engagement increase, 40% discovery improvement",
      engagement: "Transforming content consumption patterns",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "News Personalization System",
      client: "Digital Publisher",
      description: "Developed real-time news recommendation platform using NLP and user preference modeling, leading to 43% increase in article engagement and 31% improvement in time spent on platform through personalized content delivery.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&auto=format",
      results: "43% article engagement, 31% time increase",
      engagement: "Driving personalized news consumption",
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
            Personalization Driving Real-World Impact
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
                        <Target className="w-6 h-6 text-accent" />
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
                        <TrendingUp className="w-3 h-3" />
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

// Mid-Page Lead Capture CTA
const RecommendationInlineCTA = () => {
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
                <Target className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Hyper-Personalization</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Deliver{" "}
              <span className="text-accent">Hyper-Personalized Experiences?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Discover how intelligent recommendations can transform your user engagement and revenue.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Recommendation Engine Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire ML Engineers (Recommendation Systems)
const HireMLEngineers = () => {
  const specialistTypes = [
    {
      title: "Recommendation Systems Engineers",
      description: "Specialists in building, optimizing, and deploying highly effective recommendation engines.",
      icon: Target,
      skills: ["Algorithm Development", "System Architecture", "Performance Optimization", "A/B Testing"]
    },
    {
      title: "Data Scientists (Recommendations)",
      description: "Data scientists focused on recommendation algorithms and user behavior analysis.",
      icon: BarChart3,
      skills: ["Collaborative Filtering", "Content-Based Systems", "Hybrid Models", "Behavioral Analysis"]
    },
    {
      title: "ML Engineers (Personalization)",
      description: "Machine learning engineers specialized in personalization and recommendation systems.",
      icon: Brain,
      skills: ["Model Deployment", "Real-time Systems", "MLOps", "Scalable Infrastructure"]
    },
    {
      title: "Big Data Engineers",
      description: "Engineers handling large-scale data processing for recommendation systems.",
      icon: Database,
      skills: ["Spark/Hadoop", "Data Pipelines", "Stream Processing", "Data Architecture"]
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
            Access Expert Recommendation Systems Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our data scientists and ML engineers specializing in building, optimizing, and deploying highly effective recommendation engines.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
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
                <span>Hire ML Engineers</span>
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

// FAQs (Recommendation Engine Specific)
const RecommendationFAQs = () => {
  const faqs = [
    {
      question: "What data is crucial for building a good recommendation engine?",
      answer: "Building effective recommendation engines requires several types of data: User interaction data (clicks, views, purchases, ratings, time spent), user profile information (demographics, preferences, past behavior), item/content metadata (categories, descriptions, features, price), contextual data (time, location, device, session information), and social data (connections, shares, reviews). The quality and quantity of user-item interactions are most critical - we typically need at least 1000+ users and 100+ items with sufficient interaction history. We can also incorporate external data sources like social media activity, browsing patterns, and third-party demographics to enhance recommendation accuracy and handle cold start scenarios."
    },
    {
      question: "What is the \"cold start problem\" in recommendations?",
      answer: "The cold start problem occurs when recommendation systems struggle to make accurate suggestions for new users (user cold start) or new items (item cold start) due to lack of historical data. For new users, we address this through: demographic-based recommendations, popular item suggestions, onboarding questionnaires to capture preferences, and social login integration. For new items, we use: content-based filtering using item attributes, expert/editorial recommendations, promotional campaigns, and transfer learning from similar items. We implement hybrid approaches that combine multiple strategies, active learning to quickly gather feedback, and gradual transition from simple to sophisticated recommendations as data accumulates."
    },
    {
      question: "How do you measure the success of a recommendation engine?",
      answer: "We measure recommendation engine success through multiple metrics: Accuracy metrics (precision, recall, F1-score, RMSE for ratings), ranking quality (NDCG, MAP, MRR), business metrics (click-through rate, conversion rate, revenue per user, average order value), engagement metrics (time on site, pages per session, return visits), and diversity/coverage metrics (catalog coverage, recommendation diversity, novelty). We implement comprehensive A/B testing frameworks to compare different algorithms and track both online (real-time user behavior) and offline (historical data validation) performance. Key business KPIs typically include 15-35% increase in conversions, 20-40% improvement in user engagement, and 10-25% boost in average order value."
    },
    {
      question: "Can recommendation engines be integrated into any platform?",
      answer: "Yes, recommendation engines can be integrated into virtually any digital platform through flexible APIs and SDKs. We provide: RESTful APIs for real-time recommendations, batch processing for offline recommendations, webhooks for event-driven updates, and multiple SDK options (JavaScript, Python, Java, iOS, Android). Integration approaches include: embedded widgets for e-commerce sites, API calls for mobile apps, server-side integration for web applications, and cloud-based solutions (AWS Personalize, Google Recommendations AI). We ensure compatibility with existing tech stacks, provide comprehensive documentation, handle data privacy/GDPR compliance, and offer custom integration support. The system scales from small applications to enterprise platforms handling millions of users and recommendations per day."
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
const RecommendationFinalCTA = () => {
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
                <Target className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Intelligent Personalization</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Personalize Every Interaction,{" "}
            <span className="text-accent">Drive Every Conversion</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            WDI designs and builds sophisticated recommendation engines that captivate your audience and significantly boost your business metrics.
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
                <TrendingUp className="w-6 h-6 flex-shrink-0" />
                <span>Boost Your Engagement Now</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Collaborative Filtering • Content-Based • Hybrid Systems • Real-time Personalization
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

// Main Recommendation Engines Page
export const RecommendationEngines = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <RecommendationEnginesHeroWithCTA />
      </section>
      
      {/* Key Benefits */}
      <section className="bg-background">
        <RecommendationBenefits />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <RecommendationProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <RecommendationServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <RecommendationTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <RecommendationCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <RecommendationInlineCTA />
      </section>
      
      {/* Hire Engineers */}
      <section className="bg-background">
        <HireMLEngineers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <RecommendationFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <RecommendationFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};