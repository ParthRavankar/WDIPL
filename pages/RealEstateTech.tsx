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
  Repeat, Percent, Hash, Grid, Scale, Filter, Table,
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
  Hash as HashIcon, Regex as RegexIcon, Languages as LanguagesIcon, Leaf,
  TrendingUpIcon, FlaskIcon, CloudUpload, Laptop, Building2, PersonStanding,
  FileCheck, ShieldCheck, Wallet, PiggyBank, Banknote, Receipt, Coins, Coffee,
  Medal, Trophy, UserCircle, BedDouble, Home as HomeIcon, Key, Wrench as ToolIcon
} from "lucide-react";

// Real Estate Tech Hero Section
const RealEstateTechHero = () => {
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
            {/* Industries Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Industries • Financial Services</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Real Estate Tech (PropTech)
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Drive innovation in real estate with smart platforms for property management, virtual tours, data analytics, and seamless transaction experiences.
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
                  <MessageSquare className="w-5 h-5 flex-shrink-0" />
                  <span>Get a Free Consultation</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <Eye className="w-5 h-5 flex-shrink-0" />
                  <span>View PropTech Case Studies</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Property Management Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Property Management Dashboard Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Dashboard Interface */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-3xl p-6 mx-auto max-w-2xl shadow-2xl border border-gray-700"
                >
                  {/* Dashboard Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex items-center justify-between mb-6"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white">Property Management Hub</h3>
                      <p className="text-gray-400 text-sm">Real-time property analytics</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +8.3%
                      </Badge>
                    </div>
                  </motion.div>
                  
                  {/* Property Portfolio Overview */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-blue-100 text-sm mb-1">Total Property Value</div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.4 }}
                          className="text-white text-3xl font-bold"
                        >
                          $48.2M
                        </motion.div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-blue-100 text-sm">
                      <span className="flex items-center gap-1">
                        <HomeIcon className="w-4 h-4" />
                        247 Properties
                      </span>
                      <span>Occupancy: 94.2%</span>
                    </div>
                  </motion.div>
                  
                  {/* Property Status Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="grid grid-cols-2 gap-4 mb-6"
                  >
                    {[
                      { name: "Occupied", value: "233", percentage: "94.2%", color: "green", icon: Key },
                      { name: "Vacant", value: "14", percentage: "5.8%", color: "orange", icon: HomeIcon },
                      { name: "Maintenance", value: "8", percentage: "3.2%", color: "red", icon: ToolIcon },
                      { name: "Showings", value: "12", percentage: "Today", color: "blue", icon: Eye }
                    ].map((status, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                        className="bg-gray-800/50 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <status.icon className={`w-4 h-4 ${
                            status.color === 'green' ? 'text-green-400' :
                            status.color === 'orange' ? 'text-orange-400' :
                            status.color === 'red' ? 'text-red-400' :
                            'text-blue-400'
                          }`} />
                          <span className="text-white font-medium text-sm">{status.name}</span>
                        </div>
                        <div className="text-gray-300 text-lg font-semibold">{status.value}</div>
                        <div className="text-gray-400 text-xs">{status.percentage}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Revenue Analytics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="bg-gray-800/30 rounded-xl p-4 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-medium">Monthly Revenue</span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">6M</Button>
                        <Button variant="ghost" size="sm" className="text-xs text-accent bg-accent/20">1Y</Button>
                      </div>
                    </div>
                    
                    {/* Simulated Revenue Chart */}
                    <div className="relative h-24 flex items-end justify-between gap-1">
                      {Array.from({ length: 12 }, (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${30 + Math.random() * 50}%` }}
                          transition={{ duration: 0.8, delay: 2.4 + i * 0.05 }}
                          className="bg-gradient-to-t from-blue-500/60 to-blue-400/20 rounded-t-sm w-full"
                        ></motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Recent Activities */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-white">
                      <span className="font-medium">Recent Activities</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    {[
                      { activity: "New Lease Signed", property: "Apt 4B, Riverside", time: "2h ago", icon: Key, color: "green" },
                      { activity: "Maintenance Request", property: "Unit 12A, Downtown", time: "4h ago", icon: ToolIcon, color: "orange" },
                      { activity: "Virtual Tour Completed", property: "Penthouse, Skyline", time: "6h ago", icon: Eye, color: "blue" }
                    ].map((activity, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.8 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.color === 'green' ? 'bg-green-500/20' :
                          activity.color === 'orange' ? 'bg-orange-500/20' :
                          'bg-blue-500/20'
                        }`}>
                          <activity.icon className={`w-4 h-4 ${
                            activity.color === 'green' ? 'text-green-400' :
                            activity.color === 'orange' ? 'text-orange-400' :
                            'text-blue-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">{activity.activity}</div>
                          <div className="text-gray-400 text-xs">{activity.property}</div>
                        </div>
                        <div className="text-gray-400 text-xs">{activity.time}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Floating VR Tour Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.0 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                    <Eye className="w-8 h-8 text-purple-400" />
                  </div>
                </motion.div>
                
                {/* Smart Home Integration */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <HomeIcon className="w-4 h-4" />
                    <span>Smart Home</span>
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
                      className="w-2 h-2 bg-orange-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* MLS Integration Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                  className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-blue-500/30">
                    <div className="text-center">
                      <Database className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                      <div className="text-blue-400 text-xs font-bold">MLS</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* PropTech Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Eye className="w-3 h-3 mr-1" />
                  Virtual Tours
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Database className="w-3 h-3 mr-1" />
                  MLS Integration
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Brain className="w-3 h-3 mr-1" />
                  AI Analytics
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// The Challenge We Solve
const RealEstateTechChallenge = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8">
              Addressing the Core Challenges of Real Estate Tech
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-red-500/5 border-red-500/20 p-8 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">The Challenge</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>The real estate sector is undergoing a digital transformation, moving beyond traditional methods to embrace technology for efficiency, transparency, and enhanced user experiences. Challenges include fragmented data, manual processes, slow transactions, and the need for immersive property viewing experiences.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Fragmented data across multiple platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Manual, time-consuming processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Slow transaction processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Limited immersive viewing experiences</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-green-500/5 border-green-500/20 p-8 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Our Real Estate Tech (PropTech) Solution</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>WDI specializes in building innovative PropTech platforms that digitize and optimize real estate operations. We create solutions for smart property management, immersive virtual tours, streamlined transaction processing, and data-driven market insights, enhancing efficiency for agents, brokers, developers, and property managers alike.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Smart property management platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Immersive virtual tours and AR/VR</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Streamlined transaction processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Data-driven market insights</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Key Features & Capabilities
const RealEstateTechFeatures = () => {
  const features = [
    {
      icon: Building,
      title: "Property Management Platforms",
      description: "Comprehensive tools for lease management, maintenance requests, tenant communication, and financial reporting."
    },
    {
      icon: Eye,
      title: "Virtual Tour & AR/VR Integration",
      description: "Immersive 3D tours, augmented reality property visualizations, and virtual staging for enhanced property viewing."
    },
    {
      icon: BarChart3,
      title: "Real Estate Market Analytics",
      description: "AI-driven insights on property valuation, market trends, investment opportunities, and predictive analytics."
    },
    {
      icon: FileText,
      title: "Digital Transaction Management",
      description: "Streamlined workflows for offers, contracts, e-signatures, and secure document exchange."
    },
    {
      icon: Users,
      title: "CRM for Real Estate",
      description: "Specialized client relationship management tools for agents and brokers to track leads and nurture client relationships."
    },
    {
      icon: Shield,
      title: "Tenant & Landlord Portals",
      description: "Secure self-service portals for online payments, maintenance requests, and communication."
    },
    {
      icon: MapPin,
      title: "GIS Mapping & Location Intelligence",
      description: "Interactive maps with property overlays, demographic data, and proximity analysis."
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
            Powerful Features for Your Real Estate Tech Solutions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.slice(0, 6).map((feature, index) => {
            const IconComponent = feature.icon;
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
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Seventh item centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group max-w-sm"
          >
            <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {features[6].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {features[6].description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// The WDI Advantage
const RealEstateTechAdvantage = () => {
  const advantages = [
    {
      icon: Target,
      title: "Deep PropTech Insight",
      description: "Our team understands the unique workflows, pain points, and opportunities within the real estate industry."
    },
    {
      icon: Eye,
      title: "Immersive Tech Expertise",
      description: "Leveraging AR/VR, 3D modeling, and interactive mapping to create compelling property experiences."
    },
    {
      icon: Brain,
      title: "Data-Driven Solutions",
      description: "Implementing AI and analytics for smarter property valuation, market predictions, and operational efficiency."
    },
    {
      icon: Network,
      title: "Seamless Integrations",
      description: "Building solutions that connect with MLS systems, financial tools, and smart home devices for comprehensive management."
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
            Why Partner with WDI for Real Estate Tech Development?
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
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
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
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

// Development Process
const RealEstateTechProcess = () => {
  const steps = [
    {
      title: "Discovery & Market Analysis",
      description: "Deep dive into your specific real estate niche, user needs (agents, buyers, tenants), and market opportunities.",
      icon: Search
    },
    {
      title: "UX/UI Design & Property Flow Prototyping", 
      description: "Design intuitive interfaces for complex property data, search, and transaction flows, with interactive prototypes.",
      icon: Palette
    },
    {
      title: "Core Platform Development",
      description: "Build robust backend infrastructure for property listings, user management, and data processing.",
      icon: Code
    },
    {
      title: "Emerging Tech Integration",
      description: "Implement AR/VR modules, AI analytics engines, or IoT connectivity as required.",
      icon: Eye
    },
    {
      title: "Third-Party & MLS Integrations",
      description: "Seamlessly connect with Multiple Listing Services (MLS), payment gateways, and other real estate data sources.",
      icon: Network
    },
    {
      title: "Rigorous Security & Data Integrity Testing",
      description: "Comprehensive testing to ensure data accuracy, privacy, and system security.",
      icon: Shield
    },
    {
      title: "Deployment & Post-Launch Optimization",
      description: "Secure launch, ongoing monitoring, and continuous feature enhancements based on user feedback.",
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
            Our Streamlined Process for Real Estate Tech Development
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

// Case Studies
const RealEstateTechCaseStudies = () => {
  const caseStudies = [
    {
      title: "Smart Property Management Portal",
      client: "Property Management Company",
      problem: "A property management company struggled with manual tenant communication and maintenance request handling.",
      solution: "WDI developed an all-in-one portal for tenants to submit requests, make payments, and communicate, with automated workflows for property managers.",
      results: "Reduced tenant complaints by 30% and streamlined maintenance operations by 40%.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&auto=format",
      engagement: "Property management transformation",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Immersive Virtual Home Tour Platform",
      client: "Real Estate Brokerage",
      problem: "A real estate brokerage needed to offer prospective buyers highly engaging virtual viewing experiences to reduce in-person tours.",
      solution: "Built a platform integrating high-resolution 3D virtual tours with floor plans and interactive points of interest, accessible on web and VR headsets.",
      results: "Increased virtual tour engagements by 60% and shortened sales cycles by 15%.",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop&auto=format",
      engagement: "Virtual tour innovation",
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
            Real Estate Tech Success Stories
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                        <Building className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                          {study.results.split(' ').slice(0, 4).join(' ')}
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
                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="text-red-400 text-xs font-medium">Problem: </span>
                        <span className="text-muted-foreground text-sm">{study.problem}</span>
                      </div>
                      <div>
                        <span className="text-blue-400 text-xs font-medium">Solution: </span>
                        <span className="text-muted-foreground text-sm">{study.solution}</span>
                      </div>
                      <div>
                        <span className="text-green-400 text-xs font-medium">Results: </span>
                        <span className="text-muted-foreground text-sm">{study.results}</span>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
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

// Client Testimonials
const RealEstateTechTestimonials = () => {
  const testimonials = [
    {
      quote: "WDI's PropTech solution has been a game-changer for our property management. The automation and transparency it provides are invaluable.",
      author: "Owner",
      company: "Property Management Group",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format"
    },
    {
      quote: "They brought our vision for immersive virtual tours to life. Our clients are amazed, and it's significantly improved our pre-sale engagement.",
      author: "Marketing Director",
      company: "Real Estate Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
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
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8">
            What Our Clients Say About Our Real Estate Tech Solutions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
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
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white font-medium">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
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
const RealEstateTechInlineCTA = () => {
  return (
    <section className="py-20">
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
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">PropTech Innovation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Innovate Your{" "}
              <span className="text-accent">Real Estate Business?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Leverage our expertise to create cutting-edge, efficient, and immersive real estate technology solutions.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Discuss Your PropTech Project</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQs
const RealEstateTechFAQs = () => {
  const faqs = [
    {
      question: "Do you integrate with Multiple Listing Service (MLS) systems?",
      answer: "Yes, we have extensive experience integrating with major MLS systems including CRMLS, NWMLS, MRED, and many others across different regions. Our platforms support real-time data synchronization, automated listing updates, and bidirectional data flow. We handle data normalization and ensure compliance with MLS rules and data licensing agreements."
    },
    {
      question: "What kind of virtual tour technologies (e.g., 360 photos, 3D models, VR) do you support?",
      answer: "We support a comprehensive range of virtual tour technologies including 360-degree photography, 3D modeling, virtual reality (VR) experiences, augmented reality (AR) overlays, and interactive floor plans. Our platforms integrate with leading providers like Matterport and Zillow 3D Home. We also offer virtual staging and VR headset compatibility."
    },
    {
      question: "Can you build solutions for specific real estate niches (e.g., commercial, residential, rentals)?",
      answer: "Absolutely! We specialize in developing tailored solutions for various real estate niches. For commercial real estate, we build platforms with advanced search filters, lease management, and financial analytics. For residential markets, we create buyer/seller portals and agent CRM systems. For rentals, we develop tenant screening and lease management systems."
    },
    {
      question: "How do you ensure data security for property and client information?",
      answer: "We implement multiple layers of security including end-to-end encryption, secure data storage, role-based access controls, and regular security audits. Our platforms comply with real estate industry standards and data protection regulations. All data is encrypted both at rest and in transit, with comprehensive backup and disaster recovery systems."
    },
    {
      question: "What is your experience with real estate CRM or ERP integrations?",
      answer: "We have extensive experience integrating with leading real estate CRM and ERP systems including Salesforce Real Estate Cloud, Top Producer, Chime, kvCORE, and BoomTown. For ERP systems, we work with Yardi, RealPage, and AppFolio. Our integrations support contact management, lead tracking, transaction management, and automated workflows."
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
const RealEstateTechFinalCTA = () => {
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
                <Building className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Real Estate Success</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Accelerate Your Real Estate Success{" "}
            <span className="text-accent">with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with WDI to develop innovative and user-centric Real Estate Tech solutions that streamline operations, enhance client experiences, and drive growth in the dynamic property market.
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
                <Calendar className="w-6 h-6 flex-shrink-0" />
                <span>Book Your Expert PropTech Consultation</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Discovery • Design • Development • Testing • Launch • Support
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

// Main Real Estate Tech Page
export const RealEstateTech = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <RealEstateTechHero />
      </section>
      
      {/* Challenge */}
      <section className="bg-background">
        <RealEstateTechChallenge />
      </section>
      
      {/* Features */}
      <section className="bg-card">
        <RealEstateTechFeatures />
      </section>
      
      {/* Advantage */}
      <section className="bg-background">
        <RealEstateTechAdvantage />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <RealEstateTechProcess />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <RealEstateTechCaseStudies />
      </section>
      
      {/* Testimonials */}
      <section className="bg-card">
        <RealEstateTechTestimonials />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <RealEstateTechInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <RealEstateTechFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <RealEstateTechFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};