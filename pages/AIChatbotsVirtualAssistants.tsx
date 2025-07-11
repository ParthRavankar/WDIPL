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
  ShoppingCart, CreditCard, Volume2, Languages, Smile
} from "lucide-react";

// AI Chatbots & Virtual Assistants Hero Section
const ChatbotsHeroWithCTA = () => {
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
            {/* AI Chatbots Label */}
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
                AI Chatbots & Virtual Assistants
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Building intelligent conversational AI solutions that enhance customer service, streamline internal processes, and provide instant, accurate information.
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
                  <Bot className="w-5 h-5 flex-shrink-0" />
                  <span>Deploy Your Smart Assistant</span>
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
          
          {/* Right side with Chatbot Conversation Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Chatbot Conversation Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Chat Interface */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-6 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* Chat Interface */}
                  <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                    {/* Chat Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white text-sm font-semibold">AI Assistant</h3>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-gray-400">Online</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Headphones className="w-4 h-4 text-gray-400" />
                        <Volume2 className="w-4 h-4 text-gray-400" />
                      </div>
                    </motion.div>
                    
                    {/* Chat Messages */}
                    <div className="space-y-4 mb-6">
                      {/* User Message */}
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex justify-end"
                      >
                        <div className="bg-accent rounded-2xl rounded-br-sm px-4 py-3 max-w-xs">
                          <p className="text-white text-sm">I need help with my order status</p>
                        </div>
                      </motion.div>
                      
                      {/* Bot Response */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 max-w-xs">
                          <p className="text-white text-sm">I'd be happy to help you check your order status! Could you please provide your order number?</p>
                        </div>
                      </motion.div>
                      
                      {/* User Response */}
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="flex justify-end"
                      >
                        <div className="bg-accent rounded-2xl rounded-br-sm px-4 py-3 max-w-xs">
                          <p className="text-white text-sm">#ORD-12345</p>
                        </div>
                      </motion.div>
                      
                      {/* Bot Response with Actions */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 max-w-sm">
                          <p className="text-white text-sm mb-3">Great! Your order #ORD-12345 is currently being processed and will ship within 24 hours.</p>
                          <div className="flex gap-2">
                            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
                              Track Package
                            </button>
                            <button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-lg hover:bg-gray-600 transition-colors">
                              Update Address
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Typing Indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          ></motion.div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          ></motion.div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Chat Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.2 }}
                      className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl"
                    >
                      <input 
                        type="text" 
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-400"
                      />
                      <div className="flex items-center gap-2">
                        <Smile className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                        <Send className="w-4 h-4 text-accent cursor-pointer hover:text-accent/80 transition-colors" />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Floating AI Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.4 }}
                    className="absolute -bottom-6 -left-6 transform -rotate-12"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                      <MessageSquare className="w-6 h-6 text-blue-400" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Conversation Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Languages className="w-4 h-4" />
                    <span>Multi-language</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Customer Satisfaction Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-green-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <ThumbsUp className="w-10 h-10 text-green-400" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-green-400/30 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Chatbot Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.0 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  Conversational
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Clock className="w-3 h-3 mr-1" />
                  24/7 Available
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Brain className="w-3 h-3 mr-1" />
                  Intelligent
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of AI Chatbots & Virtual Assistants
const ChatbotsBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Instant support and information around the clock."
    },
    {
      icon: DollarSign,
      title: "Reduced Operational Costs",
      description: "Automate routine queries, free up human agents."
    },
    {
      icon: ThumbsUp,
      title: "Enhanced Customer Satisfaction",
      description: "Quick, consistent, and personalized responses."
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Handle high volumes of interactions without increasing headcount."
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Streamline internal processes and data collection."
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
            Why Integrate Conversational AI?
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

// Chatbot Development Process
const ChatbotDevelopmentProcess = () => {
  const steps = [
    {
      title: "Strategy & Use Case Identification",
      description: "Analyzing your business needs to identify the most impactful chatbot use cases and defining success metrics.",
      icon: Target
    },
    {
      title: "Conversation Design & Flow Mapping", 
      description: "Designing intuitive conversation flows and mapping user journeys to ensure natural, engaging interactions.",
      icon: Workflow
    },
    {
      title: "NLP Model Training & Development",
      description: "Training natural language processing models to understand user intents and extract relevant entities accurately.",
      icon: Brain
    },
    {
      title: "Integration & Testing",
      description: "Integrating chatbots with existing systems and conducting comprehensive testing across all conversation scenarios.",
      icon: PlugIcon
    },
    {
      title: "Deployment & User Training",
      description: "Deploying chatbots across chosen channels and training your team on management and optimization best practices.",
      icon: Rocket
    },
    {
      title: "Performance Monitoring & Iteration",
      description: "Continuously monitoring chatbot performance and iterating based on user feedback and conversation analytics.",
      icon: BarChart3
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
            Our Comprehensive Approach to Conversational AI
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

// Chatbot Services
const ChatbotServices = () => {
  const services = [
    {
      title: "Customer Service Chatbots",
      description: "Automating support, FAQs, and common inquiries.",
      icon: Headphones,
      features: ["24/7 Support", "FAQ Automation", "Ticket Routing", "Multi-channel Support"]
    },
    {
      title: "Internal Employee Assistants",
      description: "HR, IT, and internal knowledge base bots.",
      icon: UserCheck,
      features: ["HR Assistance", "IT Support", "Knowledge Base", "Employee Onboarding"]
    },
    {
      title: "Sales & Marketing Bots",
      description: "Lead qualification, product recommendations, personalized offers.",
      icon: Target,
      features: ["Lead Qualification", "Product Recommendations", "Personalized Offers", "Sales Support"]
    },
    {
      title: "Transactional Chatbots",
      description: "Facilitating bookings, orders, and payments.",
      icon: CreditCard,
      features: ["Order Processing", "Booking Systems", "Payment Integration", "Transaction History"]
    },
    {
      title: "Voice AI Assistants",
      description: "Developing voice-enabled interfaces (e.g., for smart speakers).",
      icon: Volume2,
      features: ["Voice Recognition", "Speech Synthesis", "Smart Speaker Integration", "Voice Commands"]
    },
    {
      title: "Omnichannel Deployment",
      description: "Integrating bots across web, mobile, messaging apps.",
      icon: Globe,
      features: ["Web Integration", "Mobile Apps", "WhatsApp", "Social Media"]
    },
    {
      title: "Intent Recognition & Entity Extraction",
      description: "Building precise understanding of user queries.",
      icon: Brain,
      features: ["Intent Classification", "Entity Extraction", "Context Understanding", "Query Processing"]
    },
    {
      title: "Generative AI Chatbots",
      description: "Leveraging LLMs for more natural, flexible conversations.",
      icon: Sparkles,
      features: ["Natural Conversations", "Context Awareness", "Dynamic Responses", "LLM Integration"]
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
            Our Specialized Conversational AI Solutions
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

// Chatbot Tech Stack
const ChatbotTechStack = () => {
  const technologies = [
    { name: "Google Dialogflow", icon: MessageSquare, category: "Chatbot Platform", color: "blue" },
    { name: "IBM Watson Assistant", icon: Brain, category: "AI Platform", color: "blue" },
    { name: "Microsoft Bot Framework", icon: Bot, category: "Bot Platform", color: "blue" },
    { name: "Amazon Lex", icon: CloudCog, category: "AWS Service", color: "orange" },
    { name: "Rasa", icon: Code, category: "Open Source", color: "purple" },
    { name: "OpenAI (GPT)", icon: Sparkles, category: "Language Model", color: "green" },
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "Node.js", icon: Server, category: "Runtime", color: "green" },
    { name: "NLTK", icon: FileText, category: "NLP Library", color: "green" },
    { name: "spaCy", icon: Brain, category: "NLP Library", color: "blue" },
    { name: "WhatsApp", icon: MessageSquare, category: "Messaging", color: "green" },
    { name: "Slack", icon: MessageSquare, category: "Messaging", color: "purple" },
    { name: "FB Messenger", icon: MessageSquare, category: "Messaging", color: "blue" }
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
            Chatbot Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building intelligent and responsive conversational experiences.
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
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/30"
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

// Chatbot Case Studies
const ChatbotCaseStudies = () => {
  const caseStudies = [
    {
      title: "Customer Service Automation",
      client: "E-commerce Retail Company",
      description: "Deployed AI chatbot handling 80% of customer inquiries automatically, reducing response time by 90% and support costs by 60% while maintaining 95% customer satisfaction.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&auto=format",
      results: "90% faster response, 60% cost reduction",
      engagement: "3-month chatbot deployment",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Internal HR Assistant",
      client: "Fortune 500 Technology Company",
      description: "Built intelligent HR chatbot for employee queries, policy information, and leave management, handling 70% of HR requests and reducing HR workload by 50%.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&auto=format",
      results: "70% automation rate, 50% workload reduction",
      engagement: "4-month HR bot project",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Sales Lead Qualification Bot",
      client: "B2B Software Solutions Provider",
      description: "Implemented AI-powered sales chatbot for lead qualification and product recommendations, increasing qualified leads by 120% and sales team efficiency by 45%.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&auto=format",
      results: "120% more qualified leads, 45% efficiency gain",
      engagement: "5-month sales bot implementation",
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
            Intelligent Chatbots Driving Customer Engagement
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
                        <Bot className="w-6 h-6 text-accent" />
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
const ChatbotInlineCTA = () => {
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
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Conversational AI</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Enhance Your Customer or{" "}
              <span className="text-accent">Employee Experience?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how conversational AI can transform your interactions.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Chatbot Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Conversational AI Developers
const HireChatbotDevelopers = () => {
  const specialistTypes = [
    {
      title: "Conversational AI Engineers",
      description: "Specialists in building intelligent chatbots and virtual assistants",
      icon: Bot,
      skills: ["Chatbot Development", "NLP Integration", "Conversation Design", "API Integration"]
    },
    {
      title: "NLP Engineers",
      description: "Experts in natural language processing and understanding",
      icon: Brain,
      skills: ["Intent Recognition", "Entity Extraction", "Language Models", "Text Processing"]
    },
    {
      title: "Conversation Designers",
      description: "UX specialists focused on designing natural conversation flows",
      icon: MessageSquare,
      skills: ["Conversation Flow", "User Journey Mapping", "Voice & Tone", "UX Writing"]
    },
    {
      title: "Voice AI Engineers",
      description: "Specialists in developing voice-enabled assistants and interfaces",
      icon: Volume2,
      skills: ["Speech Recognition", "Text-to-Speech", "Voice UI", "Audio Processing"]
    },
    {
      title: "AI Model Trainers",
      description: "Data scientists specializing in training and fine-tuning chatbot models",
      icon: Target,
      skills: ["Model Training", "Data Curation", "Performance Optimization", "A/B Testing"]
    },
    {
      title: "Integration Specialists",
      description: "Engineers focused on chatbot integration with existing systems",
      icon: PlugIcon,
      skills: ["System Integration", "API Development", "Database Connectivity", "Platform Deployment"]
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
            Access Expert Chatbot & Virtual Assistant Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our specialists in NLP, conversation design, and AI model training for cutting-edge chatbots.
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
                <span>Hire AI Developers</span>
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

// Chatbot FAQs
const ChatbotFAQs = () => {
  const faqs = [
    {
      question: "What is the difference between a rule-based chatbot and an AI chatbot?",
      answer: "Rule-based chatbots follow predefined decision trees and can only respond to specific keywords or phrases they're programmed to recognize. They're limited to scripted responses and can't handle variations in user queries. AI chatbots, on the other hand, use natural language processing and machine learning to understand user intent, context, and variations in language. They can learn from conversations, handle complex queries, understand synonyms and context, and provide more natural, human-like responses. AI chatbots are more flexible, scalable, and capable of handling unexpected user inputs."
    },
    {
      question: "How long does it take to develop a custom chatbot?",
      answer: "The development timeline varies based on complexity and requirements. A simple rule-based chatbot can be developed in 2-4 weeks, while a basic AI chatbot typically takes 6-8 weeks. More sophisticated conversational AI with advanced NLP, multiple integrations, and custom training can take 3-6 months. Factors affecting timeline include: conversation complexity, number of integrations, training data availability, multi-language support, voice capabilities, and testing requirements. We provide detailed project timelines during the planning phase based on your specific needs."
    },
    {
      question: "Can a chatbot integrate with my existing CRM/ERP system?",
      answer: "Yes, chatbots can integrate with virtually any CRM, ERP, or business system through APIs, webhooks, or direct database connections. Common integrations include Salesforce, HubSpot, Microsoft Dynamics, SAP, Oracle, Zendesk, and custom systems. Integration capabilities include: retrieving customer information, updating records, creating tickets, processing orders, scheduling appointments, and accessing knowledge bases. We ensure secure, real-time data synchronization while maintaining data privacy and system performance. The integration complexity depends on your system's API capabilities and security requirements."
    },
    {
      question: "How do you measure the success of a chatbot?",
      answer: "Chatbot success is measured through multiple key performance indicators (KPIs): User Engagement (conversation completion rate, session duration, return users), Resolution Metrics (first contact resolution, escalation rate, successful task completion), Customer Satisfaction (CSAT scores, user feedback ratings, Net Promoter Score), Operational Efficiency (response time, cost per interaction, agent workload reduction), and Business Impact (lead generation, conversion rates, cost savings). We implement comprehensive analytics dashboards to track these metrics in real-time and provide regular performance reports with actionable insights for continuous improvement."
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
const ChatbotFinalCTA = () => {
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
                <Bot className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Conversational AI</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Deliver Instant, Intelligent Interactions{" "}
            <span className="text-accent">with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Empower your business with AI-driven chatbots and virtual assistants that engage, inform, and convert.
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
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Deploy Your Chatbot Today</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Customer Service • Employee Support • Sales Automation
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

// Main AI Chatbots & Virtual Assistants Page
export const AIChatbotsVirtualAssistants = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <ChatbotsHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <ChatbotsBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <ChatbotDevelopmentProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <ChatbotServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <ChatbotTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <ChatbotCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <ChatbotInlineCTA />
      </section>
      
      {/* Hire Developers */}
      <section className="bg-background">
        <HireChatbotDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <ChatbotFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <ChatbotFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};