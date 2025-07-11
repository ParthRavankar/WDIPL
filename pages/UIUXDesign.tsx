import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { AnimatedGradientText } from "../components/AnimatedGradientText";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import FeaturedCaseStudies from "../components/FeaturedCaseStudies";
import { 
  CheckCircle, Smartphone, Tablet, Monitor, Code, Shield, Zap, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Database, Globe, Layers, 
  Target, Layout, Rocket, Bug, Brush, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, GraduationCap, ShoppingCart, Truck, Bolt, Palette, Tv,
  DollarSign, Stethoscope, BookOpen, Play, Package, Wifi, Activity, Map, Network,
  UserPlus, Award, Cpu, Settings, Sparkles, Lightbulb, Handshake, MonitorIcon,
  Download, Coffee, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, Eye, 
  Github, Slack, Figma, Chrome, Zap as ZapIcon, Video, MessageCircle, Brain,
  Cog, Layers3, Hexagon, Wallet, CreditCard as PaymentIcon, Users2, Merge,
  Share2, Wrench, BarChart3, GitMerge, Apple, Gauge, Maximize, Fingerprint,
  Gamepad, Building, Briefcase, Microscope, WifiOff, CloudDownload, Repeat,
  Server, PhoneCall, MousePointer, PlusCircle, Code2, Store,
  FileText, ShoppingBag, Newspaper, TicketIcon, Lightbulb as IdeaIcon,
  TrendingUp as GrowthIcon, HelpCircle, ArrowUpRight, Workflow, 
  BarChart, CloudCog, Layers2, Boxes, Puzzle, Cloud, CloudLightning,
  Scaling, Container, Component, Repeat2, Analytics, Percent, Tag,
  ShoppingCart as CartIcon, Banknote, PackageCheck, Headphones, Scan,
  Megaphone, Paintbrush2, PieChart, ShieldX, CogIcon, ArrowUpCircle,
  BadgeCheck, FastForward, RotateCcw, ArrowRightLeft, Link, ArrowLeftRight,
  BarChart2, LineChart, Table, Filter, Grid3X3, Settings2, UserCheck,
  ClipboardList, Receipt, Briefcase as CaseIcon, FolderOpen, Archive,
  MoreHorizontal, Sliders, ToggleLeft, Edit, Trash2, Plus, Upload, 
  FileChartBar, Users as UsersIcon, Building2, ShieldIcon, FlexIcon,
  HardDrive, Terminal, CircuitBoard, GitBranch, Cloudy, Key,
  PlugZap, Workflow as WorkflowIcon, Factory, Combine, BarChart3 as PresentationChart,
  FileBarChart, CircuitBoard as ChipIcon, Blocks, Construction, LockKeyhole,
  Timer, Flame, Scaling as ScaleIcon, GitCommit, RotateCw, Repeat as RepeatIcon,
  MonitorSpeaker, Gauge as MetricsIcon, AlertTriangle, TrendingDown, Wrench as ToolIcon,
  Cable, ArrowUpDown, Shuffle, GitPullRequest, PlugIcon, Waypoints, SendHorizontal,
  FileCode, Layers as LayersIcon, Smartphone as MobileIcon, Forward, Rewind,
  Pen, Move, SquareStack, MousePointer2, Grid, Ruler, Compass, Wand2, Paintbrush,
  TestTube, FlaskConical, Focus, Beaker, UserCheck2, Microscope as TestIcon,
  UserCog, Group, Accessibility, Contrast, Type, Frame, PenTool, Dribbble,
  Eraser, Crop, Scissors, Image, ImageIcon, Hash, Artboard, Blend, Swatch,
  Shapes, PaintBucket, EyeDropper, Pipette, Layers as LayerIcon, Vector
} from "lucide-react";

// UI/UX Design Hero Section
const UIUXHeroWithCTA = () => {
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
            {/* UI/UX Label */}
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
                Intuitive UI/UX Design Services
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Crafting visually stunning and highly intuitive user interfaces and experiences that engage users and drive business objectives.
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
                  <Palette className="w-5 h-5 flex-shrink-0" />
                  <span>Design Your Next Product</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>View Our Design Portfolio</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with Design Transformation visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Device Mockups & Design Process */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Device Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {/* Mobile Design */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-2">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                        MOBILE
                      </Badge>
                    </div>
                    
                    {/* Mobile Interface */}
                    <div className="bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-xl border border-accent/30 p-3 space-y-2 shadow-lg relative">
                      <div className="w-full h-2 bg-gray-800 rounded-full flex items-center justify-center">
                        <div className="w-6 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                      
                      {/* App Interface */}
                      <div className="space-y-2">
                        <div className="h-8 bg-gradient-to-r from-accent to-purple-500 rounded-lg flex items-center px-2">
                          <div className="w-4 h-4 bg-white/30 rounded"></div>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded w-full"></div>
                          <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-3/4"></div>
                          <div className="h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded"></div>
                          <div className="h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <Smartphone className="w-3 h-3 text-accent/60" />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Tablet Design */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        TABLET
                      </Badge>
                    </div>
                    
                    {/* Tablet Interface */}
                    <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30 p-4 space-y-3 shadow-lg">
                      {/* Header */}
                      <div className="h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg"></div>
                      
                      {/* Content Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded w-full"></div>
                          <div className="h-1 bg-gray-400/50 rounded w-3/4"></div>
                          <div className="h-1 bg-gray-400/50 rounded w-1/2"></div>
                        </div>
                        <div className="h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded border border-purple-400/30"></div>
                      </div>
                      
                      {/* Navigation */}
                      <div className="flex gap-1">
                        <div className="flex-1 h-2 bg-gradient-to-r from-accent to-purple-500 rounded"></div>
                        <div className="w-6 h-2 bg-gray-400/30 rounded"></div>
                        <div className="w-6 h-2 bg-gray-400/30 rounded"></div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <Tablet className="w-3 h-3 text-green-400/60" />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Desktop Design */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-2">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                        DESKTOP
                      </Badge>
                    </div>
                    
                    {/* Desktop Interface */}
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 p-4 space-y-3 shadow-lg">
                      {/* Browser Bar */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <div className="flex-1 h-1 bg-gray-400/30 rounded ml-2"></div>
                      </div>
                      
                      {/* Header */}
                      <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                      
                      {/* Content Layout */}
                      <div className="flex gap-2">
                        <div className="w-1/3 space-y-1">
                          <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                          <div className="h-1 bg-gray-400/50 rounded"></div>
                          <div className="h-1 bg-gray-400/50 rounded w-2/3"></div>
                        </div>
                        <div className="flex-1 h-8 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded border border-accent/30"></div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <Monitor className="w-3 h-3 text-purple-400/60" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Wireframe to Design Transformation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="relative bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8"
                >
                  <h3 className="text-white text-center mb-4 font-medium">Design Process Transformation</h3>
                  
                  <div className="grid grid-cols-3 gap-4 items-center">
                    {/* Wireframe */}
                    <div className="text-center space-y-2">
                      <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                        <div className="h-2 bg-gray-600 rounded w-full"></div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-4 bg-gray-600 rounded"></div>
                          <div className="h-4 bg-gray-600 rounded"></div>
                        </div>
                        <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                        <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                      </div>
                      <span className="text-xs text-gray-400">Wireframes</span>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                    
                    {/* Final Design */}
                    <div className="text-center space-y-2">
                      <div className="bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-lg p-3 space-y-2 border border-accent/30">
                        <div className="h-2 bg-gradient-to-r from-accent to-blue-500 rounded w-full"></div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                          <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                        </div>
                        <div className="h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded w-3/4"></div>
                        <div className="h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded w-1/2"></div>
                      </div>
                      <span className="text-xs text-gray-300">Final Design</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Design Tools Icons */}
                <div className="grid grid-cols-4 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Figma className="w-6 h-6 text-orange-400" />
                    </div>
                    <span className="text-xs text-gray-300">Figma</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <PenTool className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-xs text-gray-300">Sketch</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Palette className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xs text-gray-300">Adobe XD</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <TestTube className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-xs text-gray-300">Testing</span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Eye className="w-3 h-3 mr-1" />
                  User-Focused
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Palette className="w-3 h-3 mr-1" />
                  Beautiful
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Smartphone className="w-3 h-3 mr-1" />
                  Responsive
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Exceptional UI/UX
const UIUXBenefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Increased User Engagement",
      description: "Delightful experiences keep users coming back."
    },
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "Intuitive flows guide users to desired actions."
    },
    {
      icon: DollarSign,
      title: "Reduced Development Costs",
      description: "Clear designs minimize reworks and errors."
    },
    {
      icon: Shield,
      title: "Stronger Brand Identity",
      description: "Consistent, professional design builds trust."
    },
    {
      icon: Heart,
      title: "Improved User Satisfaction",
      description: "Seamless interactions lead to positive sentiment."
    },
    {
      icon: Target,
      title: "Competitive Advantage",
      description: "Superior design differentiates your product."
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
            Why User-Centric Design Matters
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

// UI/UX Design Process
const UIUXDesignProcess = () => {
  const steps = [
    {
      title: "User Research & Discovery",
      description: "Deep dive into user behaviors, needs, pain points, and goals through interviews, surveys, analytics, and competitive analysis to inform design decisions.",
      icon: Search
    },
    {
      title: "Information Architecture & Wireframing",
      description: "Structuring content hierarchy, user flows, and navigation patterns with low-fidelity wireframes to establish the foundation of user experience.",
      icon: Grid
    },
    {
      title: "UI Design & Prototyping",
      description: "Creating high-fidelity visual designs with interactive prototypes that bring the user interface to life for testing and stakeholder feedback.",
      icon: Palette
    },
    {
      title: "Usability Testing & Iteration",
      description: "Validating design solutions with real users through testing sessions, gathering feedback, and iterating on designs to optimize user experience.",
      icon: TestTube
    },
    {
      title: "Handoff & Design System Creation",
      description: "Delivering production-ready designs with comprehensive design systems, style guides, and developer documentation for seamless implementation.",
      icon: FileText
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
            Our Collaborative & Iterative Design Process
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
                    <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-accent">0{index + 1}</div>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background z-10 hidden lg:block"></div>
                  
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

// UI/UX Design Services
const UIUXDesignServices = () => {
  const services = [
    {
      title: "User Research & Analysis",
      description: "Understanding user needs and behaviors.",
      icon: Search,
      features: ["User Interviews", "Surveys & Analytics", "Persona Development", "Journey Mapping"]
    },
    {
      title: "Wireframing & Information Architecture",
      description: "Structuring content and user flows.",
      icon: Grid,
      features: ["User Flow Diagrams", "Site Maps", "Low-fi Wireframes", "Content Strategy"]
    },
    {
      title: "Interactive Prototyping",
      description: "Bringing designs to life for testing and feedback.",
      icon: MousePointer2,
      features: ["Clickable Prototypes", "Micro-interactions", "Animation Design", "User Testing"]
    },
    {
      title: "User Interface (UI) Design",
      description: "Crafting visual elements, typography, and color palettes.",
      icon: Palette,
      features: ["Visual Design", "Typography", "Color Systems", "Iconography"]
    },
    {
      title: "User Experience (UX) Strategy",
      description: "Defining the overall user journey and interactions.",
      icon: Target,
      features: ["Experience Strategy", "Interaction Design", "Usability Optimization", "Conversion Design"]
    },
    {
      title: "Design System Development",
      description: "Creating reusable components for consistency and efficiency.",
      icon: Component,
      features: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"]
    },
    {
      title: "Usability Testing & Optimization",
      description: "Validating designs with real users and iterating.",
      icon: TestTube,
      features: ["User Testing", "A/B Testing", "Heuristic Evaluation", "Performance Analysis"]
    },
    {
      title: "Mobile-First & Responsive Design",
      description: "Ensuring optimal experiences across all devices.",
      icon: Smartphone,
      features: ["Mobile Design", "Responsive Layouts", "Cross-platform", "Device Optimization"]
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
            Our Comprehensive UI/UX Design Capabilities
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service, index) => {
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
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
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

        {/* Last two service cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8"
        >
          {services.slice(6).map((service, index) => {
            const IconComponent = service.icon;
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
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
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

// Design Tools & Methodologies
const DesignToolsMethodologies = () => {
  const designTools = [
    { name: "Figma", icon: Figma, category: "Design Tool", color: "orange" },
    { name: "Sketch", icon: PenTool, category: "Design Tool", color: "blue" },
    { name: "Adobe XD", icon: Palette, category: "Design Tool", color: "purple" },
    { name: "Miro", icon: Grid, category: "Collaboration", color: "yellow" },
    { name: "Maze", icon: Target, category: "User Testing", color: "green" },
    { name: "Hotjar", icon: Eye, category: "Analytics", color: "red" }
  ];

  const methodologies = [
    { name: "Design Thinking", icon: Lightbulb, category: "Methodology" },
    { name: "Atomic Design", icon: Component, category: "System Design" },
    { name: "Material Design", icon: Layers, category: "Design System" },
    { name: "Human Interface Guidelines", icon: Apple, category: "Design System" }
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
            Design Tools & Methodologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leveraging industry-standard tools and methodologies for impactful design.
          </p>
        </motion.div>

        {/* Design Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Design Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {designTools.map((tool, index) => {
              const IconComponent = tool.icon;
              const colorClasses = {
                orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
                blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
                yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                green: "bg-green-500/20 text-green-400 border-green-500/30",
                red: "bg-red-500/20 text-red-400 border-red-500/30"
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
                  <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${colorClasses[tool.color as keyof typeof colorClasses] || 'bg-accent/20 text-accent border-accent/30'}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Design Methodologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {methodologies.map((methodology, index) => {
              const IconComponent = methodology.icon;
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
                  <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{methodology.name}</h4>
                    <p className="text-xs text-muted-foreground">{methodology.category}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Mid-Page CTA
const UIUXInlineCTA = () => {
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
                <Palette className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">UI/UX Design</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Elevate Your{" "}
              <span className="text-accent">Product's User Experience?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let our design experts create an interface that truly connects with your audience.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageCircle className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Design Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire UI/UX Designers
const HireUIUXDesigners = () => {
  const designerTypes = [
    {
      title: "Senior UI/UX Designers",
      description: "Experienced designers with full-stack design capabilities",
      icon: Palette,
      skills: ["User Research", "Visual Design", "Prototyping", "Usability Testing"]
    },
    {
      title: "UX Researchers",
      description: "Specialists in user behavior and research methodologies",
      icon: Search,
      skills: ["User Interviews", "Usability Testing", "Data Analysis", "Persona Development"]
    },
    {
      title: "Visual/UI Designers",
      description: "Experts in creating beautiful and functional interfaces",
      icon: PenTool,
      skills: ["Visual Design", "Typography", "Color Theory", "Design Systems"]
    },
    {
      title: "Interaction Designers",
      description: "Specialists in crafting engaging user interactions",
      icon: MousePointer2,
      skills: ["Micro-interactions", "Animation", "Prototyping", "User Flows"]
    },
    {
      title: "Product Designers",
      description: "Strategic designers who understand business goals",
      icon: Target,
      skills: ["Product Strategy", "Design Thinking", "Cross-functional Collaboration", "MVP Design"]
    },
    {
      title: "Design System Specialists",
      description: "Experts in creating scalable design systems",
      icon: Component,
      skills: ["Component Libraries", "Design Tokens", "Documentation", "Style Guides"]
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
            Hire World-Class UI/UX Designers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access our pool of talented designers specializing in intuitive interfaces, user research, and strategic UX.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {designerTypes.map((type, index) => {
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
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {type.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Core Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
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
                <Users className="w-5 h-5 flex-shrink-0" />
                <span>Hire UI/UX Designers</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <div className="inline-flex items-center gap-2">
                <Eye className="w-5 h-5 flex-shrink-0" />
                <span>View Portfolios</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// UI/UX FAQs
const UIUXFAQs = () => {
  const faqs = [
    {
      question: "What is the difference between UI and UX?",
      answer: "UI (User Interface) focuses on the visual elements users interact with - buttons, menus, typography, colors, and layout. UX (User Experience) encompasses the entire user journey, including research, strategy, information architecture, usability, and how users feel when interacting with your product. UI is about how it looks, UX is about how it works and feels. Both are essential for creating successful digital products."
    },
    {
      question: "How important is user research in the design process?",
      answer: "User research is fundamental to successful design. It helps us understand your target audience's needs, behaviors, pain points, and goals before we start designing. This research-driven approach reduces the risk of creating interfaces that don't resonate with users, saves development time and costs, and ensures higher user satisfaction and conversion rates. We conduct user interviews, surveys, usability testing, and competitive analysis to inform our design decisions."
    },
    {
      question: "Do you provide design systems for future development?",
      answer: "Yes, we create comprehensive design systems that include component libraries, style guides, design tokens, and detailed documentation. These systems ensure consistency across your product, speed up future development, maintain brand integrity, and make it easier for your team to scale and maintain the design. We provide assets in formats that work seamlessly with development workflows, including design handoff tools and code snippets."
    },
    {
      question: "Can you redesign an existing product's UI/UX?",
      answer: "Absolutely. We specialize in redesigning existing products to improve user experience, modernize visual design, increase conversions, and align with current best practices. Our process includes auditing your current design, analyzing user feedback and analytics, identifying pain points and opportunities, and creating a redesign strategy that improves user satisfaction while maintaining familiar elements that users already know and trust."
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
const UIUXFinalCTA = () => {
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
                <Palette className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">UI/UX Design</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Design Digital Products That{" "}
            <span className="text-accent">Users Love</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with WDI for compelling UI/UX design that captures attention and drives meaningful interactions.
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
                <span>Start Your Design Project</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              User Research • Interface Design • Prototyping • Testing
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

// Main UI/UX Design Page
export const UIUXDesign = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <UIUXHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <UIUXBenefits />
      </section>
      
      {/* Design Process */}
      <section className="bg-card">
        <UIUXDesignProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <UIUXDesignServices />
      </section>
      
      {/* Tools & Methodologies */}
      <section className="bg-card">
        <DesignToolsMethodologies />
      </section>
      
      {/* Featured Case Studies - NEW SECTION */}
      <section id="case-studies" className="bg-background">
        <FeaturedCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <UIUXInlineCTA />
      </section>
      
      {/* Hire Designers */}
      <section className="bg-background">
        <HireUIUXDesigners />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <UIUXFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <UIUXFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};