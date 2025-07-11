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
  Medal, Trophy, UserCircle
} from "lucide-react";

// WealthTech Platforms Hero Section
const WealthTechPlatformsHero = () => {
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
                WealthTech Platforms
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Empower wealth managers and investors with cutting-edge platforms for intelligent portfolio management, personalized advice, and enhanced financial planning.
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
                  <span>View WealthTech Case Studies</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Investment Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Investment Dashboard Scene */}
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
                      <h3 className="text-xl font-semibold text-white">Portfolio Overview</h3>
                      <p className="text-gray-400 text-sm">Real-time wealth management</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +12.5%
                      </Badge>
                    </div>
                  </motion.div>
                  
                  {/* Portfolio Value Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-purple-100 text-sm mb-1">Total Portfolio Value</div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.4 }}
                          className="text-white text-3xl font-bold"
                        >
                          $2,847,250
                        </motion.div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-purple-100 text-sm">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        YTD Return: +18.4%
                      </span>
                      <span>Last updated: 2 min ago</span>
                    </div>
                  </motion.div>
                  
                  {/* Asset Allocation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="grid grid-cols-2 gap-4 mb-6"
                  >
                    {[
                      { name: "Equities", value: "68%", amount: "$1,936,090", color: "blue", change: "+2.1%" },
                      { name: "Bonds", value: "22%", amount: "$626,395", color: "green", change: "+0.8%" },
                      { name: "Real Estate", value: "7%", amount: "$199,308", color: "purple", change: "+1.2%" },
                      { name: "Commodities", value: "3%", amount: "$85,417", color: "orange", change: "-0.3%" }
                    ].map((asset, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                        className="bg-gray-800/50 rounded-xl p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium text-sm">{asset.name}</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            asset.change.startsWith('+') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                          }`}>
                            {asset.change}
                          </span>
                        </div>
                        <div className="text-gray-300 text-lg font-semibold">{asset.value}</div>
                        <div className="text-gray-400 text-xs">{asset.amount}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Performance Chart Area */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="bg-gray-800/30 rounded-xl p-4 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-medium">Performance Chart</span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">1Y</Button>
                        <Button variant="ghost" size="sm" className="text-xs text-accent bg-accent/20">5Y</Button>
                      </div>
                    </div>
                    
                    {/* Simulated Chart */}
                    <div className="relative h-24 flex items-end justify-between gap-1">
                      {Array.from({ length: 12 }, (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${20 + Math.random() * 60}%` }}
                          transition={{ duration: 0.8, delay: 2.4 + i * 0.05 }}
                          className="bg-gradient-to-t from-accent/60 to-accent/20 rounded-t-sm w-full"
                        ></motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* AI Recommendations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-white">
                      <span className="font-medium">AI Recommendations</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    {[
                      { action: "Rebalance Portfolio", priority: "High", color: "red", icon: RefreshCw },
                      { action: "Consider ESG Funds", priority: "Medium", color: "yellow", icon: Leaf },
                      { action: "Tax Loss Harvesting", priority: "Low", color: "green", icon: Calculator }
                    ].map((rec, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.8 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <rec.icon className="w-4 h-4 text-gray-300" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">{rec.action}</div>
                          <div className="text-gray-400 text-xs">Priority: {rec.priority}</div>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${
                          rec.color === 'red' ? 'bg-red-400' :
                          rec.color === 'yellow' ? 'bg-yellow-400' :
                          'bg-green-400'
                        }`}></div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Floating AI Advisor */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.0 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full flex items-center justify-center border border-accent/30">
                    <Brain className="w-8 h-8 text-accent" />
                  </div>
                </motion.div>
                
                {/* Client Portal Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <UserCircle className="w-4 h-4" />
                    <span>Client Portal</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Secure Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                  className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-green-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-green-500/30">
                    <div className="text-center">
                      <Shield className="w-6 h-6 text-green-400 mx-auto mb-1" />
                      <div className="text-green-400 text-xs font-bold">SEC</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* WealthTech Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Brain className="w-3 h-3 mr-1" />
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  SEC Compliant
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Real-time Analytics
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
const WealthTechPlatformsChallenge = () => {
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
              Addressing the Core Challenges of WealthTech Platforms
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
                    <p>The wealth management industry faces a dual challenge: the demand for personalized, digital-first services from tech-savvy clients, and the need for advisors to leverage technology for efficiency while maintaining a human touch. This includes challenges with complex data integration, stringent regulatory compliance, and delivering scalable yet customized advice across diverse client needs.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Legacy systems creating data silos and inefficiencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Evolving regulatory requirements (SEC, GDPR, SEBI)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Rising client expectations for digital experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Pressure to scale personalized advisory services</span>
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
                    <h3 className="text-2xl font-semibold text-foreground">Our WealthTech Platform Solution</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>WDI specializes in building advanced WealthTech platforms that empower both financial advisors and individual investors. We create solutions for intelligent portfolio management, automated robo-advisory services, seamless client onboarding, and comprehensive financial planning tools, all designed for security, scalability, and exceptional user experience.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Unified data architecture with real-time insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Built-in compliance and regulatory automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>AI-powered personalization at scale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Modern client and advisor experience platforms</span>
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
const WealthTechPlatformsFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Intelligent Portfolio Management",
      description: "Advanced tools for real-time tracking, automatic rebalancing, and performance analysis across diverse asset classes, with intelligent optimization algorithms that maximize returns while managing risk."
    },
    {
      icon: Brain,
      title: "Robo-Advisory Integration",
      description: "Sophisticated AI-driven investment advice, automated asset allocation, and goal-based planning powered by machine learning algorithms that adapt to market conditions and client preferences."
    },
    {
      icon: UserCheck,
      title: "Client Onboarding & KYC Automation",
      description: "Streamlined digital workflows for seamless client registration, automated identity verification, and compliance checks that reduce onboarding time from days to minutes."
    },
    {
      icon: Target,
      title: "Financial Planning & Goal Tracking",
      description: "Comprehensive tools for retirement planning, savings goals, and personalized financial roadmaps with interactive calculators and scenario modeling to empower informed decision-making."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics & Reporting",
      description: "Dynamic dashboards and customizable reports providing deep insights into portfolio performance, client behavior, and market trends with real-time data visualization."
    },
    {
      icon: Shield,
      title: "Secure Client Portals",
      description: "Bank-grade secure access for clients to view portfolios, download statements, track goals, and communicate directly with advisors through encrypted messaging and video conferencing."
    },
    {
      icon: Database,
      title: "Market Data Integration",
      description: "Real-time data feeds from global exchanges, mutual funds, and financial instruments with advanced market analytics, news integration, and predictive modeling capabilities."
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
            Powerful Features for Your WealthTech Platforms
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform wealth management with technology that enhances advisor capabilities and delivers exceptional client experiences.
          </p>
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
                  <Database className="w-8 h-8 text-accent" />
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
const WealthTechPlatformsAdvantage = () => {
  const advantages = [
    {
      icon: Target,
      title: "Deep Financial Domain Expertise",
      description: "Our team combines seasoned financial services professionals with expert technologists who understand investment principles, regulatory requirements, and the evolving needs of wealth managers and their clients."
    },
    {
      icon: Brain,
      title: "AI/ML for Predictive Insights",
      description: "We leverage cutting-edge artificial intelligence and machine learning technologies to deliver advanced analytics, personalized investment recommendations, sophisticated risk assessment, and predictive market insights."
    },
    {
      icon: Shield,
      title: "Security & Regulatory Compliance",
      description: "Built-in adherence to global financial regulations (SEC, GDPR, SEBI, MiFID II) with enterprise-grade security, end-to-end encryption, and comprehensive audit trails to ensure data protection and regulatory compliance."
    },
    {
      icon: Network,
      title: "Scalable & Integrated Solutions",
      description: "We design platforms that grow seamlessly with your business, featuring cloud-native architecture and pre-built integrations with leading CRM systems, custodians, trading platforms, and data providers."
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
            Why Partner with WDI for WealthTech Platform Development?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine deep financial expertise with cutting-edge technology to deliver platforms that transform wealth management.
          </p>
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
const WealthTechPlatformsProcess = () => {
  const steps = [
    {
      title: "Discovery & Regulatory Mapping",
      description: "We begin with deep discovery sessions to understand your business model, define platform scope, identify user personas (advisors, clients), and map specific compliance requirements including SEC, SEBI, and local financial authority regulations.",
      icon: Search
    },
    {
      title: "UX/UI Design & Advisor/Client Prototyping", 
      description: "Our design team creates intuitive, accessible interfaces for both professional advisors and end-clients, focusing on clarity and ease of use for complex financial data with interactive prototypes for validation.",
      icon: Palette
    },
    {
      title: "Core Platform Development",
      description: "We build robust, scalable backend systems for data management, complex portfolio calculations, real-time analytics, and secure data storage using modern architectures and best practices.",
      icon: Code
    },
    {
      title: "Algorithm & AI Integration",
      description: "Implementation and fine-tuning of proprietary robo-advisory algorithms, personalization engines, risk assessment models, and advanced analytics components tailored to your investment philosophy.",
      icon: Brain
    },
    {
      title: "Data & API Integrations",
      description: "Seamless connection with market data providers, custodian platforms, brokerage accounts, CRM systems, and third-party financial services to create a unified ecosystem of data and functionality.",
      icon: Network
    },
    {
      title: "Rigorous Security & Performance Testing",
      description: "Comprehensive security audits, penetration testing, stress testing, and meticulous data integrity checks to ensure platform reliability, regulatory compliance, and optimal performance under load.",
      icon: Shield
    },
    {
      title: "Deployment & Post-Launch Optimization",
      description: "Secure deployment to production environments with ongoing monitoring, proactive maintenance, performance optimization, and continuous feature enhancements based on user feedback and market evolution.",
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
            Our Streamlined Process for WealthTech Platform Development
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures your WealthTech platform is built for success, compliance, and scalability.
          </p>
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
const WealthTechPlatformsCaseStudies = () => {
  const caseStudies = [
    {
      title: "Personalized Robo-Advisory Platform",
      client: "Financial Advisory Firm",
      problem: "A financial advisory firm wanted to offer automated, personalized investment advice to a broader, digitally-native client base while maintaining their human advisory approach.",
      solution: "WDI developed a comprehensive robo-advisory platform with sophisticated risk assessment, automated portfolio allocation, intelligent rebalancing features, and seamless advisor oversight capabilities, all fully compliant with SEC regulations.",
      results: "Attracted 5,000 new clients in the first year and managed over $50M in Assets Under Management (AUM) through automated portfolios, expanding market reach by 300% while reducing operational costs by 40%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      engagement: "Robo-advisory innovation",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Advisor Dashboard & Client Portal Modernization",
      client: "Established Wealth Management Firm",
      problem: "An established wealth management firm had fragmented legacy systems for advisors and an outdated, unengaging client portal that was hindering client retention and advisor productivity.",
      solution: "Built an integrated, modern platform providing advisors with a unified view of client portfolios, real-time market data, and AI-powered insights, plus a sophisticated client portal for self-service and secure communication.",
      results: "Improved advisor efficiency by 25%, reduced client service response time by 60%, and received 90% positive feedback from clients on the new portal, enhancing satisfaction and retention rates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      engagement: "Platform modernization",
      gradient: "from-blue-500/20 to-cyan-500/20"
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
            WealthTech Platform Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from wealth management firms that transformed their operations with our platforms.
          </p>
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
                        <BarChart3 className="w-6 h-6 text-accent" />
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
const WealthTechPlatformsTestimonials = () => {
  const testimonials = [
    {
      quote: "WDI's WealthTech platform transformed how our advisors manage portfolios and interact with clients. It's incredibly powerful yet intuitive, making complex financial tasks simple and efficient. Our clients love the modern interface and real-time insights.",
      author: "Sarah Chen, CIO",
      company: "Investment Advisory Firm",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format"
    },
    {
      quote: "We needed a partner who understood both technology and finance deeply. WDI delivered a robo-advisory solution that is cutting-edge, fully compliant, and truly resonates with our clients. The AI recommendations have been incredibly accurate.",
      author: "Michael Rodriguez, Founder",
      company: "FinTech Wealth Startup",
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
            What Our Clients Say About Our WealthTech Platform Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by leading wealth management firms and innovative FinTech startups worldwide.
          </p>
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
const WealthTechPlatformsInlineCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">WealthTech Innovation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Build Your Next{" "}
              <span className="text-accent">WealthTech Innovation?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Empower your advisors and clients with intelligent, secure, and personalized financial platforms that drive growth and engagement.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Discuss Your WealthTech Project</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQs
const WealthTechPlatformsFAQs = () => {
  const faqs = [
    {
      question: "How do you ensure data security for sensitive client financial information?",
      answer: "We implement multiple layers of enterprise-grade security including AES-256 encryption for data at rest and in transit, role-based access controls, multi-factor authentication, and regular security audits. Our platforms comply with financial industry standards like SOC 2 Type II, PCI DSS, and ISO 27001. We ensure complete data segregation between clients, maintain comprehensive audit trails for regulatory compliance, and implement real-time threat detection and fraud monitoring to protect against unauthorized access."
    },
    {
      question: "Can your platforms integrate with existing brokerage accounts or custodians?",
      answer: "Yes, we have extensive experience integrating with major custodians and brokerage platforms including Charles Schwab, Fidelity, TD Ameritrade, Interactive Brokers, Pershing, and many others. Our platforms support standard APIs like FIX protocol for trading, ACATS for account transfers, and real-time data feeds. We can seamlessly connect with portfolio management systems, CRM platforms, trading systems, and clearing firms. Our integration capabilities include account aggregation, position synchronization, trade execution, and real-time portfolio updates across multiple custodial relationships."
    },
    {
      question: "Do you develop robo-advisory algorithms, or do you integrate existing ones?",
      answer: "We offer both custom development and integration options based on your specific needs. We can develop proprietary robo-advisory algorithms tailored to your investment philosophy, risk models, and client base using modern portfolio theory, factor-based investing, and advanced machine learning techniques. Alternatively, we can integrate with existing algorithmic solutions from providers like Riskalyze, Orion, BlackRock's Aladdin, or iRebal. Our custom algorithms include sophisticated risk assessment questionnaires, goal-based planning, tax-loss harvesting, and automated rebalancing with backtesting, stress testing, and ongoing optimization."
    },
    {
      question: "What regulatory compliance (e.g., SEC, SEBI, local financial authorities) do your platforms support?",
      answer: "Our platforms are designed with regulatory compliance at their core. For the US, we support SEC regulations including Investment Advisers Act, Regulation Best Interest (Reg BI), Form ADV requirements, and FINRA rules. For international markets, we handle SEBI guidelines in India, FCA regulations in the UK, ESMA directives in Europe, and ASIC requirements in Australia. We implement comprehensive features for regulatory reporting, audit trails, suitability checks, disclosure management, client communication records, and trade surveillance. Our platforms include built-in compliance monitoring, automated reporting generation, alerts for regulatory changes, and support for KYC/AML requirements."
    },
    {
      question: "How do you handle market data integration and real-time updates for portfolios?",
      answer: "We integrate with leading market data providers including Bloomberg, Refinitiv (formerly Thomson Reuters), Morningstar, S&P Capital IQ, Alpha Architect, and Quandl for comprehensive real-time and historical market data. Our platforms support multiple simultaneous data feeds with automatic failover, data validation, and reconciliation. We handle real-time price updates, corporate actions, dividend adjustments, stock splits, and currency conversions. Our architecture includes advanced data normalization, cleansing, and validation processes to ensure accuracy. We provide configurable update frequencies, support for multiple asset classes including equities, bonds, mutual funds, ETFs, and alternative investments, with historical performance tracking and 99.9% uptime guarantees."
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our WealthTech platform development process and capabilities.
          </p>
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
const WealthTechPlatformsFinalCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">WealthTech Growth</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Accelerate Your WealthTech Growth{" "}
            <span className="text-accent">with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with WDI to develop secure, innovative, and user-centric WealthTech platforms that empower advisors and redefine the client experience in the digital age.
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
                <span>Book Your Expert WealthTech Consultation</span>
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
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Main WealthTech Platforms Page
export const WealthTechPlatforms = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <WealthTechPlatformsHero />
      </section>
      
      {/* Challenge */}
      <section className="bg-background">
        <WealthTechPlatformsChallenge />
      </section>
      
      {/* Features */}
      <section className="bg-card">
        <WealthTechPlatformsFeatures />
      </section>
      
      {/* Advantage */}
      <section className="bg-background">
        <WealthTechPlatformsAdvantage />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <WealthTechPlatformsProcess />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <WealthTechPlatformsCaseStudies />
      </section>
      
      {/* Testimonials */}
      <section className="bg-card">
        <WealthTechPlatformsTestimonials />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <WealthTechPlatformsInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <WealthTechPlatformsFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <WealthTechPlatformsFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};