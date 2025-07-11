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
  Medal, Trophy, UserCircle, BedDouble, Home as HomeIcon, Key, Wrench as ToolIcon,
  Stethoscope, HeartPulse, Pill, Thermometer, Activity as PulseIcon
} from "lucide-react";

// HealthTech Hero Section
const HealthTechHero = () => {
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
              <span className="text-white/70 text-sm font-medium">Industries • Healthcare</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                HealthTech Applications
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Transform healthcare delivery with secure, user-friendly, and interoperable digital health applications for patient engagement, remote care, and clinical efficiency.
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
                  <span>View HealthTech Case Studies</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with HealthTech Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* HealthTech Dashboard Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main HealthTech Interface */}
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
                      <h3 className="text-xl font-semibold text-white">Patient Health Dashboard</h3>
                      <p className="text-gray-400 text-sm">Real-time patient monitoring</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        <HeartPulse className="w-3 h-3 mr-1" />
                        Normal
                      </Badge>
                    </div>
                  </motion.div>
                  
                  {/* Patient Vitals Overview */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-blue-100 text-sm mb-1">Patient ID: P-2024-001</div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.4 }}
                          className="text-white text-3xl font-bold"
                        >
                          Sarah Chen
                        </motion.div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <UserCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-blue-100 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Age: 34
                      </span>
                      <span>Last Visit: 2 days ago</span>
                    </div>
                  </motion.div>
                  
                  {/* Vital Signs Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="grid grid-cols-2 gap-4 mb-6"
                  >
                    {[
                      { name: "Heart Rate", value: "72", unit: "bpm", status: "normal", icon: HeartPulse },
                      { name: "Blood Pressure", value: "120/80", unit: "mmHg", status: "normal", icon: PulseIcon },
                      { name: "Temperature", value: "98.6", unit: "°F", status: "normal", icon: Thermometer },
                      { name: "O2 Saturation", value: "98", unit: "%", status: "normal", icon: Activity }
                    ].map((vital, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                        className="bg-gray-800/50 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <vital.icon className="w-4 h-4 text-green-400" />
                          <span className="text-white font-medium text-sm">{vital.name}</span>
                        </div>
                        <div className="text-gray-300 text-lg font-semibold">{vital.value}</div>
                        <div className="text-gray-400 text-xs">{vital.unit}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Health Trends Chart */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="bg-gray-800/30 rounded-xl p-4 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-medium">Heart Rate Trend</span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">7D</Button>
                        <Button variant="ghost" size="sm" className="text-xs text-accent bg-accent/20">30D</Button>
                      </div>
                    </div>
                    
                    {/* Simulated Health Chart */}
                    <div className="relative h-24 flex items-end justify-between gap-1">
                      {Array.from({ length: 12 }, (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${60 + Math.random() * 20}%` }}
                          transition={{ duration: 0.8, delay: 2.4 + i * 0.05 }}
                          className="bg-gradient-to-t from-green-500/60 to-green-400/20 rounded-t-sm w-full"
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
                      { activity: "Medication Taken", detail: "Prescribed dose - Lisinopril", time: "2h ago", icon: Pill, color: "blue" },
                      { activity: "Telehealth Consultation", detail: "Dr. Johnson - Follow-up", time: "1 day ago", icon: Video, color: "green" },
                      { activity: "Lab Results Available", detail: "Blood work - Normal range", time: "3 days ago", icon: FileCheck, color: "purple" }
                    ].map((activity, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.8 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.color === 'blue' ? 'bg-blue-500/20' :
                          activity.color === 'green' ? 'bg-green-500/20' :
                          'bg-purple-500/20'
                        }`}>
                          <activity.icon className={`w-4 h-4 ${
                            activity.color === 'blue' ? 'text-blue-400' :
                            activity.color === 'green' ? 'text-green-400' :
                            'text-purple-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">{activity.activity}</div>
                          <div className="text-gray-400 text-xs">{activity.detail}</div>
                        </div>
                        <div className="text-gray-400 text-xs">{activity.time}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Floating Telemedicine Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.0 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <Stethoscope className="w-8 h-8 text-green-400" />
                  </div>
                </motion.div>
                
                {/* HIPAA Compliance Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>HIPAA Compliant</span>
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
                
                {/* EHR Integration Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                  className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-blue-500/30">
                    <div className="text-center">
                      <Database className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                      <div className="text-blue-400 text-xs font-bold">EHR</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* HealthTech Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Stethoscope className="w-3 h-3 mr-1" />
                  Telemedicine
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  HIPAA Compliant
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Activity className="w-3 h-3 mr-1" />
                  Remote Monitoring
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
const HealthTechChallenge = () => {
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
              Addressing the Core Challenges of HealthTech Applications
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
                    <p>Healthcare organizations face immense pressure to modernize while ensuring patient data privacy (HIPAA, GDPR), achieving interoperability between disparate systems, and delivering engaging patient experiences. The rise of remote care also demands robust, secure, and scalable solutions.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Complex regulatory compliance requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Interoperability challenges between systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Patient data privacy and security concerns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Need for engaging patient experiences</span>
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
                    <h3 className="text-2xl font-semibold text-foreground">Our HealthTech Application Solution</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>WDI specializes in building secure, compliant, and user-centric HealthTech applications. We develop solutions for telehealth, remote patient monitoring, patient engagement, and clinical decision support, focusing on enhancing care delivery, improving operational efficiency, and empowering both patients and providers.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>HIPAA & GDPR compliant solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Seamless EHR/EMR integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>User-centric patient experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Scalable telehealth platforms</span>
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
const HealthTechFeatures = () => {
  const features = [
    {
      icon: Video,
      title: "Telehealth & Virtual Consultations",
      description: "Secure video conferencing, appointment scheduling, and e-prescribing for remote care delivery."
    },
    {
      icon: Activity,
      title: "Remote Patient Monitoring (RPM)",
      description: "Integration with wearables and medical devices for continuous data collection and alerts."
    },
    {
      icon: Users,
      title: "Patient Engagement Portals",
      description: "Intuitive platforms for appointment booking, medical record access, secure messaging, and personalized health content."
    },
    {
      icon: Database,
      title: "EHR/EMR Integration & Interoperability",
      description: "Seamless data exchange with Electronic Health Records (EHR) and Electronic Medical Records (EMR) systems (HL7, FHIR)."
    },
    {
      icon: Brain,
      title: "Clinical Decision Support Systems",
      description: "Tools that provide real-time, evidence-based insights to assist clinicians in diagnosis and treatment."
    },
    {
      icon: Pill,
      title: "Digital Therapeutics (DTx)",
      description: "Developing software-based interventions for disease management and behavioral change."
    },
    {
      icon: BarChart3,
      title: "Healthcare Analytics & Reporting",
      description: "Dashboards and tools for analyzing patient data, population health, and operational performance."
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
            Powerful Features for Your HealthTech Applications
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
                  <BarChart3 className="w-8 h-8 text-accent" />
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
const HealthTechAdvantage = () => {
  const advantages = [
    {
      icon: ShieldCheck,
      title: "Strict Regulatory Compliance",
      description: "Deep expertise in HIPAA, GDPR, and other healthcare data privacy regulations, ensuring secure and compliant solutions."
    },
    {
      icon: Network,
      title: "FHIR & HL7 Interoperability",
      description: "Specialization in building solutions that seamlessly integrate with existing healthcare ecosystems for robust data exchange."
    },
    {
      icon: Users,
      title: "User-Centric Design for Health",
      description: "Creating intuitive interfaces for complex medical data, prioritizing ease of use for both patients and clinicians."
    },
    {
      icon: Cloud,
      title: "Scalable & Secure Architectures",
      description: "Building robust, cloud-native platforms that can handle vast amounts of sensitive data and scale with demand."
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
            Why Partner with WDI for HealthTech Application Development?
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
const HealthTechProcess = () => {
  const steps = [
    {
      title: "Discovery & Compliance Mapping",
      description: "Define application scope, user roles, and critical regulatory requirements (HIPAA, GDPR, FDA guidelines).",
      icon: Search
    },
    {
      title: "UX/UI Design & Prototyping", 
      description: "Craft intuitive user journeys and secure, compliant interfaces for diverse healthcare stakeholders, with interactive prototypes.",
      icon: Palette
    },
    {
      title: "Secure Core Development",
      description: "Build the robust backend and front-end using secure coding practices, focusing on data privacy and integrity.",
      icon: Code
    },
    {
      title: "EHR/EMR & Device Integrations",
      description: "Seamlessly connect with existing EHR/EMR systems (HL7, FHIR) and integrate with medical devices and wearables.",
      icon: Network
    },
    {
      title: "Rigorous Security & Compliance Testing",
      description: "Comprehensive penetration testing, vulnerability assessments, and audit checks for full regulatory adherence.",
      icon: Shield
    },
    {
      title: "Deployment & Ongoing Support",
      description: "Secure launch, continuous monitoring, maintenance, and future enhancements, ensuring long-term reliability.",
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
            Our Streamlined Process for HealthTech Application Development
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
const HealthTechCaseStudies = () => {
  const caseStudies = [
    {
      title: "HIPAA-Compliant Telehealth Platform",
      client: "Healthcare Provider",
      problem: "A healthcare provider needed a secure and scalable platform for virtual patient consultations to expand access to care during a pandemic.",
      solution: "WDI developed an end-to-end telemedicine solution with secure video conferencing, appointment scheduling, e-prescribing, and patient record access, ensuring full HIPAA compliance.",
      results: "Enabled 30% more patient consultations and extended reach to underserved areas, significantly improving patient access.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      engagement: "Telehealth transformation",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Remote Patient Monitoring App for Chronic Care",
      client: "Medical Group",
      problem: "A medical group aimed to improve outcomes for chronic disease patients through continuous monitoring and personalized interventions.",
      solution: "Built an RPM app integrating with smart medical devices (BP cuffs, glucometers) to collect real-time data, alert clinicians, and provide patient education.",
      results: "Reduced hospital readmissions by 15% for target patient groups and improved patient adherence to treatment plans by 20%.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format",
      engagement: "Chronic care optimization",
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
            HealthTech Application Success Stories
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
                        <Heart className="w-6 h-6 text-accent" />
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
const HealthTechTestimonials = () => {
  const testimonials = [
    {
      quote: "WDI's team deeply understood the complexities of HealthTech, delivering a patient engagement platform that is both incredibly secure and genuinely easy to use for our diverse patient population.",
      author: "CIO",
      company: "Major Hospital Network",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format"
    },
    {
      quote: "Their dedication to HIPAA compliance and seamless EHR integration made them the ideal partner for our new remote patient monitoring initiative. They truly built a lifeline for our patients.",
      author: "Medical Director",
      company: "Chronic Care Clinic",
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
            What Our Clients Say About Our HealthTech Application Solutions
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
const HealthTechInlineCTA = () => {
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
                <Heart className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">HealthTech Innovation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Innovate Your{" "}
              <span className="text-accent">HealthTech Solution?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Leverage our expertise to build secure, compliant, and impactful HealthTech applications that transform patient care.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Discuss Your HealthTech Project</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQs
const HealthTechFAQs = () => {
  const faqs = [
    {
      question: "How do you ensure HIPAA compliance in your healthcare solutions?",
      answer: "We implement comprehensive HIPAA compliance measures including end-to-end encryption, access controls, audit logging, and regular security assessments. Our development process includes privacy-by-design principles, secure data storage, and strict authentication protocols. We also conduct regular compliance audits and maintain detailed documentation to ensure all PHI is protected according to HIPAA requirements."
    },
    {
      question: "What is your experience with EHR/EMR integration (e.g., HL7, FHIR)?",
      answer: "We have extensive experience with healthcare interoperability standards including HL7 FHIR, HL7 v2, and CDA. Our team has successfully integrated with major EHR systems like Epic, Cerner, and Allscripts. We ensure seamless data exchange while maintaining data integrity and security. Our solutions support both inbound and outbound data flows, enabling real-time synchronization between systems."
    },
    {
      question: "Can you develop solutions for medical devices or wearables integration?",
      answer: "Yes, we specialize in integrating with various medical devices and wearables including FDA-approved devices, IoT health sensors, fitness trackers, and remote monitoring equipment. We support protocols like Bluetooth, Wi-Fi, and cellular connectivity. Our solutions can process real-time data streams, generate alerts, and provide actionable insights for both patients and healthcare providers."
    },
    {
      question: "What are your strategies for data privacy and security in health applications?",
      answer: "Our security strategy includes multiple layers: encryption at rest and in transit, role-based access controls, multi-factor authentication, secure API endpoints, and regular penetration testing. We implement zero-trust architecture, conduct regular security audits, and maintain SOC 2 compliance. All data handling follows HIPAA, GDPR, and other relevant privacy regulations."
    },
    {
      question: "Do you offer post-launch support and maintenance for medical software?",
      answer: "Yes, we provide comprehensive post-launch support including 24/7 monitoring, regular security updates, compliance maintenance, performance optimization, and feature enhancements. Our support includes help desk services, user training, system administration, and proactive maintenance to ensure your healthcare applications remain secure, compliant, and performant."
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
const HealthTechFinalCTA = () => {
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
                <Heart className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Digital Health Innovation</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Your Trusted Partner for{" "}
            <span className="text-accent">Digital Health Innovation</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with WDI to leverage deep industry expertise and cutting-edge technology for transformative HealthTech applications that enhance patient outcomes and streamline healthcare delivery.
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
                <span>Book Your Expert HealthTech Consultation</span>
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

// Main HealthTech Page
export const HealthTechApplications = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <HealthTechHero />
      </section>
      
      {/* Challenge */}
      <section className="bg-background">
        <HealthTechChallenge />
      </section>
      
      {/* Features */}
      <section className="bg-card">
        <HealthTechFeatures />
      </section>
      
      {/* Advantage */}
      <section className="bg-background">
        <HealthTechAdvantage />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <HealthTechProcess />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <HealthTechCaseStudies />
      </section>
      
      {/* Testimonials */}
      <section className="bg-card">
        <HealthTechTestimonials />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <HealthTechInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <HealthTechFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <HealthTechFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};