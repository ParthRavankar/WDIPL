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
  Hash as HashIcon, Regex as RegexIcon, Languages as LanguagesIcon, Leaf,
  TrendingUpIcon, FlaskIcon, CloudUpload, Laptop, Building2, PersonStanding,
  FileCheck, ShieldCheck, Wallet, PiggyBank, Banknote, Receipt, Coins, Coffee,
  Medal, Trophy
} from "lucide-react";

// FinTech & Banking Apps Hero Section
const FinTechBankingAppsHero = () => {
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
              <span className="text-white/70 text-sm font-medium">Industries</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                FinTech & Banking Apps
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Revolutionize your financial services with secure, intuitive, and high-performance banking applications and FinTech innovations.
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
                  <span>View FinTech Case Studies</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Mobile Banking Interface Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Banking App Interface Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Banking App Interface */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-3xl p-6 mx-auto max-w-sm shadow-2xl border border-gray-700"
                >
                  {/* Mobile Screen Header */}
                  <div className="relative mb-6">
                    {/* Status Bar */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="flex items-center justify-between mb-4 text-white text-xs"
                    >
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* App Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="text-center mb-6"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">Good morning, Alex</h3>
                      <div className="flex items-center justify-center gap-4">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Secure
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                          <Wallet className="w-3 h-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Account Balance Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-blue-100 text-xs mb-1">Current Balance</div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.6 }}
                          className="text-white text-2xl font-bold"
                        >
                          $12,847.50
                        </motion.div>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-blue-100 text-xs">
                      <span>•••• 4729</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +2.5%
                      </span>
                    </div>
                  </motion.div>
                  
                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="grid grid-cols-4 gap-3 mb-6"
                  >
                    {[
                      { icon: Send, label: "Send", color: "blue" },
                      { icon: Download, label: "Request", color: "green" },
                      { icon: BarChart3, label: "Invest", color: "purple" },
                      { icon: PiggyBank, label: "Save", color: "orange" }
                    ].map((action, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 + i * 0.1 }}
                        className="text-center"
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2 ${
                          action.color === 'blue' ? 'bg-blue-500/20' :
                          action.color === 'green' ? 'bg-green-500/20' :
                          action.color === 'purple' ? 'bg-purple-500/20' :
                          'bg-orange-500/20'
                        }`}>
                          <action.icon className={`w-5 h-5 ${
                            action.color === 'blue' ? 'text-blue-400' :
                            action.color === 'green' ? 'text-green-400' :
                            action.color === 'purple' ? 'text-purple-400' :
                            'text-orange-400'
                          }`} />
                        </div>
                        <div className="text-white text-xs">{action.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Recent Transactions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.4 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-white">
                      <span className="font-medium">Recent Activity</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    {[
                      { name: "Starbucks Coffee", amount: "-$4.75", icon: Coffee, time: "2m ago" },
                      { name: "Salary Deposit", amount: "+$3,200.00", icon: Banknote, time: "1d ago" },
                      { name: "Netflix Subscription", amount: "-$15.99", icon: PlayCircle, time: "3d ago" }
                    ].map((transaction, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.6 + i * 0.1 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <transaction.icon className="w-4 h-4 text-gray-300" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">{transaction.name}</div>
                          <div className="text-gray-400 text-xs">{transaction.time}</div>
                        </div>
                        <div className={`text-sm font-medium ${
                          transaction.amount.startsWith('+') ? 'text-green-400' : 'text-white'
                        }`}>
                          {transaction.amount}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Floating Security Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.0 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                </motion.div>
                
                {/* AI Assistant Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Bot className="w-4 h-4" />
                    <span>AI Assistant</span>
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
                
                {/* Payment Success Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-accent text-sm font-bold">PAY</div>
                      <div className="text-white text-xs">OK</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* FinTech Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Smartphone className="w-3 h-3 mr-1" />
                  Mobile First
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Bank Grade Security
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Brain className="w-3 h-3 mr-1" />
                  AI Powered
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
const FinTechBankingAppsChallenge = () => {
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
              Addressing the Core Challenges of FinTech & Banking Apps
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
                    <p>The financial landscape demands constant innovation, stringent security, and seamless user experiences. Financial institutions face challenges with legacy system integration, evolving regulatory compliance (e.g., PSD2, GDPR), fierce competition from challenger banks, and the insistent demand for hyper-personalized digital services.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Legacy system integration complexities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Evolving regulatory compliance requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Fierce competition from challenger banks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Demand for hyper-personalized services</span>
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
                    <h3 className="text-2xl font-semibold text-foreground">Our FinTech & Banking App Solution</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>WDI specializes in building secure, scalable, and user-centric FinTech and banking applications. We focus on modernizing digital experiences, ensuring strict regulatory adherence, and integrating cutting-edge technologies like AI and blockchain to deliver truly transformative financial solutions that meet the demands of today's users.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Secure, scalable, and user-centric architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Modernized digital banking experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Strict regulatory compliance built-in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>AI and blockchain integration</span>
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
const FinTechBankingAppsFeatures = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Secure Mobile & Web Banking",
      description: "Robust platforms for seamless account management, payments, and transfers with multi-layered security."
    },
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Tailored financial insights, product recommendations, and predictive analytics for enhanced user experience."
    },
    {
      icon: Zap,
      title: "Real-time Payments & Transfers",
      description: "Instant transaction capabilities, including peer-to-peer (P2P) and cross-border payments."
    },
    {
      icon: Shield,
      title: "Biometric & Multi-Factor Authentication",
      description: "Advanced security features (fingerprint, facial recognition, OTP) for secure access and fraud prevention."
    },
    {
      icon: Network,
      title: "Open Banking & API Integrations",
      description: "Seamless connectivity with third-party FinTech services, aggregators, and core banking systems for expanded functionality."
    },
    {
      icon: UserCheck,
      title: "Customer Onboarding & KYC Automation",
      description: "Streamlined digital processes for new customer registration and identity verification, reducing manual effort."
    },
    {
      icon: Award,
      title: "Gamified Financial Management",
      description: "Engaging features to encourage savings, budgeting, and financial literacy, fostering healthier financial habits."
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
            Powerful Features for Your FinTech & Banking Apps
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
                  <Award className="w-8 h-8 text-accent" />
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
const FinTechBankingAppsAdvantage = () => {
  const advantages = [
    {
      icon: Target,
      title: "Deep FinTech Expertise",
      description: "Our team deeply understands the nuances of financial regulations, market trends, and consumer behavior in the dynamic banking sector."
    },
    {
      icon: Shield,
      title: "Security & Compliance First",
      description: "We embed PCI DSS, GDPR, AML, and KYC compliance from day one, ensuring your apps are secure, legally sound, and future-proof."
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Technology Stack",
      description: "Leveraging advanced tech like blockchain for secure transactions, AI for fraud detection, and cloud-native architectures for unparalleled scalability."
    },
    {
      icon: Users,
      title: "User-Centric Design Focus",
      description: "Creating intuitive, accessible, and delightful interfaces for complex financial processes that foster trust, engagement, and repeat usage."
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
            Why Partner with WDI for FinTech & Banking App Development?
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
const FinTechBankingAppsProcess = () => {
  const steps = [
    {
      title: "Discovery & Regulatory Mapping",
      description: "Deep dive into your vision, target users, and specific compliance requirements (e.g., PSD2, RBI guidelines).",
      icon: Search
    },
    {
      title: "UX/UI Design & Prototyping", 
      description: "Craft intuitive user journeys and secure, engaging interfaces, followed by interactive prototypes for early feedback.",
      icon: Palette
    },
    {
      title: "Secure Core Development",
      description: "Build the robust backend and front-end using secure coding practices and best-in-class technologies, prioritizing data integrity.",
      icon: Code
    },
    {
      title: "API Integrations & Third-Party Services",
      description: "Seamlessly connect with payment gateways, core banking systems, and other FinTech APIs for comprehensive functionality.",
      icon: Network
    },
    {
      title: "Rigorous Security & Compliance Testing",
      description: "Comprehensive penetration testing, vulnerability assessments, and audit checks to ensure full regulatory adherence.",
      icon: Shield
    },
    {
      title: "Deployment & Ongoing Support",
      description: "Secure launch, continuous monitoring, proactive maintenance, and future enhancements to keep your app competitive.",
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
            Our Streamlined Process for FinTech & Banking App Development
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
const FinTechBankingAppsCaseStudies = () => {
  const caseStudies = [
    {
      title: "Next-Gen Mobile Banking App for Regional Bank",
      client: "Regional Bank",
      problem: "Client's existing app was outdated, leading to low adoption and poor customer satisfaction scores.",
      solution: "WDI redesigned the UX/UI, integrated new features like personalized insights and budgeting tools, and rebuilt the app for performance and security.",
      results: "Increased daily active users by 40% and achieved a 4.8-star average rating, significantly boosting digital engagement and customer loyalty.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      engagement: "Mobile banking transformation",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Real-time P2P Payment Platform",
      client: "FinTech Startup",
      problem: "A FinTech startup needed a secure, fast, and scalable platform for peer-to-peer money transfers to gain market share.",
      solution: "Developed a robust P2P payment app with blockchain-secured transactions, biometric authentication, and instant notification features.",
      results: "Processed over $100M in transactions in the first year with zero security incidents, establishing the client as a reliable player.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      engagement: "P2P payment innovation",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "AI-Powered Investment Advisory App",
      client: "WealthTech Company",
      problem: "Traditional investment advisory was too expensive and inaccessible for younger demographics seeking personalized investment guidance.",
      solution: "Built an AI-driven robo-advisor with machine learning algorithms for portfolio optimization, risk assessment, and automated rebalancing.",
      results: "Attracted 50,000+ users in 6 months with 25% higher portfolio performance compared to traditional methods, democratizing wealth management.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop&auto=format",
      engagement: "WealthTech innovation",
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
            FinTech & Banking App Success Stories
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
                        <DollarSign className="w-6 h-6 text-accent" />
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
const FinTechBankingAppsTestimonials = () => {
  const testimonials = [
    {
      quote: "WDI's team delivered a banking app that is not only beautiful and user-friendly but also meets the highest standards of financial security and compliance. Our customers love it!",
      author: "VP of Digital Transformation",
      company: "Major Bank",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
    },
    {
      quote: "They helped us navigate the complex FinTech landscape, building a secure payment platform that our users trust implicitly. A true game-changer for our startup, exceeding our expectations.",
      author: "CEO",
      company: "Payment Solutions Provider",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format"
    },
    {
      quote: "The AI-powered features and intuitive design have transformed how our customers manage their investments. WDI understood our vision and delivered beyond what we imagined possible.",
      author: "CTO",
      company: "WealthTech Startup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format"
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
            What Our Clients Say About Our FinTech & Banking App Solutions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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

// Awards & Recognition Section
const FinTechBankingAppsAwards = () => {
  const awards = [
    {
      title: "Best FinTech Solution 2024",
      organization: "Financial Technology Awards",
      year: "2024",
      icon: Trophy
    },
    {
      title: "Top Banking App Developer",
      organization: "Digital Banking Summit",
      year: "2024",
      icon: Award
    },
    {
      title: "SOC 2 Type II Certified",
      organization: "AICPA",
      year: "2024",
      icon: ShieldCheck
    },
    {
      title: "ISO 27001 Certified",
      organization: "International Organization for Standardization",
      year: "2023",
      icon: FileCheck
    },
    {
      title: "AI Excellence in Banking",
      organization: "Tech Innovation Awards",
      year: "2024",
      icon: Brain
    },
    {
      title: "Blockchain Security Leader",
      organization: "Crypto & Blockchain Awards",
      year: "2023",
      icon: Shield
    },
    {
      title: "95% Client Satisfaction",
      organization: "Independent Client Survey",
      year: "2024",
      icon: Heart
    },
    {
      title: "Top Rated Development Partner",
      organization: "Clutch.co",
      year: "2024",
      icon: Star
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
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence in FinTech development has been recognized by industry leaders and clients worldwide.
          </p>
        </motion.div>
        
        {/* Awards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {awards.map((award, index) => {
            const IconComponent = award.icon;
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
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gray-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-gray-300" />
                    </div>
                    
                    <Badge variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700 mb-3">
                      {award.year}
                    </Badge>
                    
                    <h4 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                      {award.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {award.organization}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
            <h4 className="text-2xl font-semibold text-foreground mb-6">
              Trusted by Leading Financial Institutions
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Projects Delivered", value: "200+", icon: CheckCircle },
                { label: "Years of Experience", value: "10+", icon: Clock },
                { label: "Security Compliance", value: "100%", icon: Shield },
                { label: "Client Retention", value: "95%", icon: ThumbsUp }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Mid-Page Lead Capture CTA
const FinTechBankingAppsInlineCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-green-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">FinTech Innovation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Build Your Next{" "}
              <span className="text-accent">FinTech & Banking App Innovation?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Leverage our expertise to create market-leading, secure, and user-centric financial solutions that drive your business forward.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Discuss Your FinTech Project</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQs
const FinTechBankingAppsFAQs = () => {
  const faqs = [
    {
      question: "How do you ensure the security of financial transactions in your apps?",
      answer: "We implement multiple layers of security including end-to-end encryption, tokenization, biometric authentication, and fraud detection algorithms. Our security measures include: AES-256 encryption for data at rest and in transit, OAuth 2.0 and OpenID Connect for secure authentication, real-time fraud monitoring with machine learning, secure API gateways with rate limiting, and regular penetration testing. We also comply with PCI DSS standards and implement strong key management practices. All financial data is encrypted and stored in secure, compliant infrastructure with comprehensive audit trails for regulatory compliance."
    },
    {
      question: "What payment gateways and banking APIs do you typically integrate with?",
      answer: "We have extensive experience integrating with major payment gateways and banking APIs: Payment gateways include Stripe, PayPal, Square, Adyen, Braintree, and regional providers like Razorpay and Paytm. For banking APIs, we work with Plaid, Yodlee, TrueLayer, Open Banking APIs (PSD2 compliant), SWIFT for international transfers, and Fed Now for real-time payments. We also integrate with core banking systems like Temenos, FIS, and Finastra. Our team handles both REST and GraphQL APIs, webhook implementations, and real-time payment processing. We ensure compliance with regional standards like UPI in India, SEPA in Europe, and ACH in the US."
    },
    {
      question: "Do you have expertise in specific financial regulations like PSD2, GDPR, or KYC/AML?",
      answer: "Yes, we have deep expertise in financial regulations across multiple jurisdictions: PSD2 (Payment Services Directive 2) compliance including Strong Customer Authentication (SCA), Open Banking APIs, and TPP integration. GDPR compliance with data protection by design, consent management, and right to be forgotten implementation. KYC/AML expertise including identity verification, document authentication, sanctions screening, and risk scoring. We also handle SOX compliance, PCI DSS certification, CCPA requirements, and regional regulations like MiFID II in Europe and PIPEDA in Canada. Our compliance team stays current with regulatory changes and implements automated compliance monitoring and reporting systems."
    },
    {
      question: "Can you develop solutions using emerging technologies like blockchain for FinTech?",
      answer: "Absolutely! We leverage cutting-edge technologies to create innovative FinTech solutions: Blockchain development using Ethereum, Hyperledger, and custom blockchain networks for secure transactions, smart contracts, and decentralized finance (DeFi) applications. Cryptocurrency integration including wallet development, exchange platforms, and payment processing for digital assets. AI and machine learning for fraud detection, credit scoring, algorithmic trading, and personalized financial recommendations. IoT integration for contactless payments and smart banking devices. We also work with emerging technologies like quantum-resistant cryptography, zero-knowledge proofs for privacy-preserving transactions, and Central Bank Digital Currencies (CBDCs). Our blockchain solutions ensure regulatory compliance while maintaining the benefits of decentralized systems."
    },
    {
      question: "What is your approach to scalability for high-volume transaction apps?",
      answer: "We design for massive scale from day one using proven architectural patterns: Microservices architecture with containerization (Docker/Kubernetes) for independent scaling of components. Cloud-native design using AWS, Azure, or GCP with auto-scaling groups and load balancers. Database optimization with read replicas, sharding, and caching strategies using Redis and Memcached. Event-driven architecture with message queues (RabbitMQ, Apache Kafka) for asynchronous processing. CDN integration for global content delivery and reduced latency. We implement horizontal scaling patterns, circuit breakers for resilience, and comprehensive monitoring with tools like Prometheus and Grafana. Our infrastructure handles millions of transactions per day with 99.99% uptime, automatic failover, and disaster recovery capabilities."
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
const FinTechBankingAppsFinalCTA = () => {
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
                <DollarSign className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Financial Innovation</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Accelerate Your Financial Innovation{" "}
            <span className="text-accent">with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with WDI to develop secure, innovative, and user-centric FinTech and banking apps that redefine your market and drive customer loyalty.
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
                <span>Start Your FinTech Project Today</span>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Main FinTech & Banking Apps Page
export const FinTechBankingApps = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <FinTechBankingAppsHero />
      </section>
      
      {/* Challenge */}
      <section className="bg-background">
        <FinTechBankingAppsChallenge />
      </section>
      
      {/* Features */}
      <section className="bg-card">
        <FinTechBankingAppsFeatures />
      </section>
      
      {/* Advantage */}
      <section className="bg-background">
        <FinTechBankingAppsAdvantage />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <FinTechBankingAppsProcess />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <FinTechBankingAppsCaseStudies />
      </section>
      
      {/* Testimonials */}
      <section className="bg-card">
        <FinTechBankingAppsTestimonials />
      </section>
      
      {/* Awards & Recognition */}
      <section className="bg-background">
        <FinTechBankingAppsAwards />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <FinTechBankingAppsInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-background">
        <FinTechBankingAppsFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-card">
        <FinTechBankingAppsFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-background">
        <Footer />
      </section>
    </div>
  );
};