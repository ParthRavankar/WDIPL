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
import { 
  CheckCircle, Smartphone, Tablet, Watch, Code, Shield, Zap, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Database, Globe, Layers, 
  Target, Layout, Rocket, Bug, Brush, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, GraduationCap, ShoppingCart, Truck, Bolt, Palette, Tv,
  DollarSign, Stethoscope, BookOpen, Play, Package, Wifi, Activity, Map, Network,
  UserPlus, Award, Cpu, Settings, Sparkles, Lightbulb, Handshake, Monitor,
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
  HardDrive, Terminal, Branes, CircuitBoard, GitBranch, Cloudy, Key,
  PlugZap, Workflow as WorkflowIcon, Factory, Combine, BarChart3 as PresentationChart,
  FileBarChart, CircuitBoard as ChipIcon, Blocks, Construction, LockKeyhole,
  Timer, Flame, Scaling as ScaleIcon, GitCommit, RotateCw, Repeat as RepeatIcon,
  MonitorSpeaker, Gauge as MetricsIcon, AlertTriangle, TrendingDown, Wrench as ToolIcon
} from "lucide-react";

// System Architecture & DevOps Hero Section
const DevOpsHeroWithCTA = () => {
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
            {/* DevOps Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Software Engineering</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                System Architecture & DevOps Consulting
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Designing robust, scalable system architectures and implementing efficient DevOps practices for continuous delivery and operational excellence.
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
                  <CloudCog className="w-5 h-5 flex-shrink-0" />
                  <span>Optimize Your Infrastructure</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Request a Consultation</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with Cloud Architecture visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Cloud Architecture Diagram */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Cloud Infrastructure Hub */}
                <div className="relative mx-auto w-80 h-56 bg-gradient-to-br from-accent to-blue-600 rounded-2xl border border-accent/30 shadow-2xl p-6 mb-8">
                  {/* Cloud Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Cloud className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-medium">Cloud Infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-white/80" />
                      <Monitor className="w-4 h-4 text-white/80" />
                      <Activity className="w-4 h-4 text-white/80" />
                    </div>
                  </div>
                  
                  {/* Infrastructure Components Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {/* CI/CD Pipeline */}
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <GitBranch className="w-4 h-4 text-white/80" />
                        <span className="text-white text-xs font-medium">CI/CD</span>
                      </div>
                      <div className="space-y-1">
                        {['Build', 'Test', 'Deploy'].map((stage, i) => (
                          <div key={i} className="text-white/70 text-xs bg-white/10 rounded px-1 py-0.5">
                            {stage}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Container Orchestration */}
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Container className="w-4 h-4 text-white/80" />
                        <span className="text-white text-xs font-medium">K8s</span>
                      </div>
                      <div className="h-8 bg-white/20 rounded flex items-center justify-center">
                        <Boxes className="w-4 h-4 text-white/60" />
                      </div>
                    </div>
                    
                    {/* Monitoring */}
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-white/80" />
                        <span className="text-white text-xs font-medium">Monitor</span>
                      </div>
                      <div className="h-8 bg-white/20 rounded flex items-end gap-1 p-1">
                        <div className="w-1 bg-green-400 rounded" style={{height: '60%'}}></div>
                        <div className="w-1 bg-blue-400 rounded" style={{height: '80%'}}></div>
                        <div className="w-1 bg-yellow-400 rounded" style={{height: '70%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Infrastructure Status */}
                  <div className="bg-white/20 rounded-lg p-2 flex items-center justify-between">
                    <div className="text-white text-xs">Infrastructure Status</div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    </div>
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/30 animate-ping"></div>
                </div>
                
                {/* DevOps Tools */}
                <div className="relative grid grid-cols-4 gap-4 mb-8">
                  {/* Docker */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl border border-blue-400/30 shadow-lg p-4 text-center"
                  >
                    <Container className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Docker</div>
                  </motion.div>
                  
                  {/* Terraform */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl border border-purple-400/30 shadow-lg p-4 text-center"
                  >
                    <Settings className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Terraform</div>
                  </motion.div>
                  
                  {/* Jenkins */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl border border-orange-400/30 shadow-lg p-4 text-center"
                  >
                    <GitBranch className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Jenkins</div>
                  </motion.div>
                  
                  {/* Monitoring */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl border border-green-400/30 shadow-lg p-4 text-center"
                  >
                    <BarChart className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Grafana</div>
                  </motion.div>
                </div>
                
                {/* Cloud Providers */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg border border-yellow-400/30 shadow-lg p-3 text-center"
                  >
                    <Cloud className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">AWS</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg border border-blue-400/30 shadow-lg p-3 text-center"
                  >
                    <CloudCog className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Azure</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-gradient-to-br from-red-500 to-pink-600 rounded-lg border border-red-400/30 shadow-lg p-3 text-center"
                  >
                    <Server className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">GCP</div>
                  </motion.div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: '-20px', width: '100%', height: '450px'}}>
                  <g className="opacity-30">
                    {/* Lines from Cloud Hub to tools */}
                    <line x1="200" y1="140" x2="120" y2="220" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="140" x2="160" y2="220" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="2.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="140" x2="240" y2="220" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="140" x2="280" y2="220" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="3.5s" repeatCount="indefinite" />
                    </line>
                  </g>
                </svg>
              </motion.div>
              
              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Scalable
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Automated
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Architecture & DevOps
const DevOpsBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalability & Resilience",
      description: "Architecting systems that handle growth and recover quickly."
    },
    {
      icon: Timer,
      title: "Faster Time-to-Market",
      description: "Automating deployments for quicker release cycles."
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Efficient resource utilization and reduced operational overhead."
    },
    {
      icon: Shield,
      title: "Enhanced Reliability",
      description: "Proactive monitoring and incident management."
    },
    {
      icon: Users,
      title: "Improved Collaboration",
      description: "Bridging development and operations for seamless workflows."
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
            The Foundation for High-Performance Software
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
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

        {/* Second row with 2 cards centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8"
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

// System Architecture & DevOps Process
const DevOpsProcess = () => {
  const steps = [
    {
      title: "Assessment & Strategy",
      description: "Comprehensive evaluation of current infrastructure, development practices, and operational workflows to identify optimization opportunities and define strategic roadmap.",
      icon: ClipboardList
    },
    {
      title: "Architecture Design & Prototyping",
      description: "Designing scalable system architecture with cloud-native principles, creating prototypes and proof-of-concepts to validate architectural decisions.",
      icon: Building2
    },
    {
      title: "DevOps Implementation",
      description: "Setting up CI/CD pipelines, infrastructure automation, containerization, and establishing DevOps culture and practices across development teams.",
      icon: GitBranch
    },
    {
      title: "Automation & CI/CD",
      description: "Implementing automated testing, deployment pipelines, infrastructure as code, and establishing continuous integration and delivery workflows.",
      icon: Cog
    },
    {
      title: "Monitoring & Optimization",
      description: "Deploying comprehensive monitoring solutions, performance optimization, alerting systems, and establishing SRE practices for operational excellence.",
      icon: Activity
    },
    {
      title: "Security & Compliance",
      description: "Implementing security best practices, compliance frameworks, vulnerability management, and establishing secure development and deployment practices.",
      icon: Shield
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
            Our Approach to Building and Optimizing Your Digital Infrastructure
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

// Architecture & DevOps Services
const DevOpsServices = () => {
  const services = [
    {
      title: "Cloud Architecture Design",
      description: "Tailored solutions for AWS, Azure, Google Cloud.",
      icon: Cloud,
      features: ["Multi-Cloud Strategy", "Serverless Architecture", "Cost Optimization", "Migration Planning"]
    },
    {
      title: "Microservices Architecture",
      description: "Designing modular, scalable systems.",
      icon: Component,
      features: ["Service Decomposition", "API Gateway", "Event-Driven Architecture", "Service Mesh"]
    },
    {
      title: "Containerization (Docker, Kubernetes)",
      description: "Efficient deployment and management of applications.",
      icon: Container,
      features: ["Container Orchestration", "Helm Charts", "Service Discovery", "Auto-scaling"]
    },
    {
      title: "CI/CD Pipeline Implementation",
      description: "Automating code integration and delivery.",
      icon: GitBranch,
      features: ["Automated Testing", "Deployment Automation", "Pipeline Optimization", "Quality Gates"]
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "Managing infrastructure programmatically (Terraform, CloudFormation).",
      icon: Settings,
      features: ["Terraform", "CloudFormation", "Ansible", "Configuration Management"]
    },
    {
      title: "Site Reliability Engineering (SRE)",
      description: "Ensuring system uptime and performance.",
      icon: Shield,
      features: ["SLA/SLO Management", "Error Budgets", "Incident Response", "Chaos Engineering"]
    },
    {
      title: "System Migration & Optimization",
      description: "Moving to cloud, optimizing existing infrastructure.",
      icon: RefreshCcw,
      features: ["Cloud Migration", "Performance Tuning", "Cost Optimization", "Legacy Modernization"]
    },
    {
      title: "Security & Compliance Audits",
      description: "Ensuring robust security postures and regulatory adherence.",
      icon: ShieldCheck,
      features: ["Security Scanning", "Compliance Frameworks", "Vulnerability Management", "Access Control"]
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
            Our Specialized Expertise
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

// DevOps Tech Stack
const DevOpsTechStack = () => {
  const cloudPlatforms = [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "Cloud Platform" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud Platform" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Cloud Platform" }
  ];

  const containerTools = [
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Containerization" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "Orchestration" }
  ];

  const cicdTools = [
    { name: "Jenkins", icon: GitBranch, description: "Continuous Integration" },
    { name: "GitLab CI", icon: GitCommit, description: "DevOps Platform" },
    { name: "GitHub Actions", icon: Github, description: "Workflow Automation" },
    { name: "Ansible", icon: Settings, description: "Configuration Management" }
  ];

  const monitoringTools = [
    { name: "Prometheus", icon: Activity, description: "Monitoring & Alerting" },
    { name: "Grafana", icon: BarChart, description: "Visualization & Dashboards" },
    { name: "ELK Stack", icon: Search, description: "Log Management" },
    { name: "Splunk", icon: Database, description: "Data Analysis" }
  ];

  const iacTools = [
    { name: "Terraform", icon: Settings, description: "Infrastructure as Code" },
    { name: "CloudFormation", icon: Cloud, description: "AWS Infrastructure" }
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
            Leveraging Industry-Leading Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For robust and automated infrastructure management.
          </p>
        </motion.div>

        {/* Cloud Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Cloud Platforms</h3>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {cloudPlatforms.map((platform, index) => (
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
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <ImageWithFallback
                      src={platform.logo}
                      alt={platform.name}
                      className="w-10 h-10 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{platform.name}</h4>
                  <p className="text-xs text-muted-foreground">{platform.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Container & Orchestration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Container & Orchestration</h3>
          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
            {containerTools.map((tool, index) => (
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
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <ImageWithFallback
                      src={tool.logo}
                      alt={tool.name}
                      className="w-10 h-10 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CI/CD & Automation Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">CI/CD & Automation</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cicdTools.map((tool, index) => {
              const IconComponent = tool.icon;
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
                  <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center h-full">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Monitoring & IaC Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Monitoring Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Monitoring & Observability</h3>
            <div className="grid grid-cols-2 gap-4">
              {monitoringTools.map((tool, index) => {
                const IconComponent = tool.icon;
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
                    <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center h-full">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                      <p className="text-xs text-muted-foreground">{tool.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Infrastructure as Code */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Infrastructure as Code</h3>
            <div className="grid grid-cols-2 gap-4">
              {iacTools.map((tool, index) => {
                const IconComponent = tool.icon;
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
                    <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center h-full">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                      <p className="text-xs text-muted-foreground">{tool.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// DevOps Case Studies
const DevOpsCaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform DevOps Transformation",
      client: "Global Retail Corp",
      description: "Implemented complete DevOps transformation reducing deployment time from hours to minutes and achieving 99.9% uptime for high-traffic e-commerce platform",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      results: "95% faster deployments, 99.9% uptime",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "CI/CD Pipeline, Kubernetes, Auto-scaling"
    },
    {
      title: "Financial Services Infrastructure Migration",
      client: "FinTech Solutions",
      description: "Migrated legacy financial systems to cloud-native architecture with enhanced security, compliance, and automated disaster recovery capabilities",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "60% cost reduction, SOC 2 compliance",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "Cloud Migration, Security Hardening, Compliance"
    },
    {
      title: "SaaS Product Scalability Enhancement",
      client: "TechStart Inc",
      description: "Redesigned microservices architecture and implemented auto-scaling infrastructure enabling 10x traffic growth without performance degradation",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&auto=format",
      results: "10x scalability, 50% cost optimization",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "Microservices, Auto-scaling, Performance Optimization"
    }
  ];

  return (
    <section className="py-32 bg-black" id="case-studies">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8">
            Empowering Businesses with Resilient Infrastructure & Agile Operations
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
              <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <CloudCog className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                          {study.results}
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="px-8 pb-6 flex-1">
                    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${study.gradient} p-4 border border-gray-700`}>
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-white uppercase tracking-wider">Key Features:</h4>
                      <p className="text-xs text-gray-400">
                        {study.features}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span className="text-sm font-medium">VIEW CASE STUDY</span>
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
const DevOpsInlineCTA = () => {
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
                <CloudCog className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Infrastructure Excellence</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Build a More Resilient and{" "}
              <span className="text-accent">Agile Infrastructure?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let our experts evaluate your current setup and propose a path to operational excellence.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <ClipboardList className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free DevOps Assessment</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire DevOps Talent
const HireDevOpsTalent = () => {
  const talentTypes = [
    {
      title: "DevOps Engineers",
      description: "Infrastructure automation and deployment specialists",
      icon: CloudCog,
      skills: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Cloud Platforms"]
    },
    {
      title: "Site Reliability Engineers",
      description: "System reliability and performance experts",
      icon: Shield,
      skills: ["SLA/SLO Management", "Incident Response", "Performance Monitoring", "Chaos Engineering"]
    },
    {
      title: "Cloud Architects",
      description: "Cloud infrastructure design specialists",
      icon: Cloud,
      skills: ["AWS/Azure/GCP", "Serverless Architecture", "Cost Optimization", "Migration Strategy"]
    },
    {
      title: "Security Engineers",
      description: "DevSecOps and security automation experts",
      icon: ShieldCheck,
      skills: ["Security Scanning", "Compliance", "Vulnerability Management", "Access Control"]
    },
    {
      title: "Platform Engineers",
      description: "Developer platform and tooling specialists",
      icon: Settings,
      skills: ["Developer Experience", "Platform APIs", "Tool Integration", "Self-Service Platforms"]
    },
    {
      title: "Automation Engineers",
      description: "Process automation and scripting experts",
      icon: Cog,
      skills: ["Infrastructure Automation", "Configuration Management", "Scripting", "Process Optimization"]
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
            Need Specialized DevOps or Cloud Architecture Talent?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access our highly skilled engineers proficient in cloud platforms, CI/CD, and system automation.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {talentTypes.map((type, index) => {
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
                <span>Hire DevOps Talent</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
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

// DevOps FAQs
const DevOpsFAQs = () => {
  const faqs = [
    {
      question: "What is the difference between DevOps and SRE?",
      answer: "DevOps is a cultural and technical movement focused on collaboration between development and operations teams, emphasizing automation, continuous integration, and deployment. SRE (Site Reliability Engineering) is a specific implementation of DevOps principles that applies software engineering approaches to infrastructure and operations problems. SRE focuses on reliability, scalability, and performance with specific metrics like SLAs, SLOs, and error budgets. While DevOps is broader in scope, SRE provides concrete practices and measurements for operational excellence."
    },
    {
      question: "How can DevOps reduce our operational costs?",
      answer: "DevOps reduces operational costs through several mechanisms: automation eliminates manual processes and reduces human error, infrastructure as code enables efficient resource provisioning and management, continuous monitoring prevents costly outages through early detection, containerization and orchestration optimize resource utilization, and cloud-native practices enable auto-scaling and pay-per-use models. Additionally, faster deployment cycles reduce time-to-market, and improved collaboration reduces communication overhead and rework."
    },
    {
      question: "Do you work with hybrid cloud environments?",
      answer: "Yes, we have extensive experience with hybrid cloud architectures that combine on-premises infrastructure with public cloud services. We help design and implement hybrid solutions that provide flexibility, cost optimization, and compliance requirements. Our expertise includes multi-cloud strategies, hybrid networking, data synchronization between environments, workload placement optimization, and unified monitoring and management across hybrid infrastructures. We work with all major cloud providers (AWS, Azure, GCP) and various on-premises technologies."
    },
    {
      question: "What security considerations are paramount in cloud architecture?",
      answer: "Cloud security requires a multi-layered approach including: identity and access management (IAM) with least-privilege principles, network security with proper segmentation and encryption, data protection through encryption at rest and in transit, compliance with industry standards (SOC 2, PCI DSS, HIPAA), security monitoring and incident response, vulnerability management and regular security assessments, secure CI/CD pipelines with security gates, container security scanning, and implementing security as code practices. We also focus on shared responsibility models and ensure proper security configuration of cloud services."
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
const DevOpsFinalCTA = () => {
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
                <CloudCog className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Infrastructure Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Architecting Your Future: Robust Systems,{" "}
            <span className="text-accent">Seamless Operations</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with WDI to build a secure, scalable, and efficient digital foundation for your business.
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
                <span>Optimize Your Infrastructure Today</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Cloud Architecture • CI/CD Automation • Infrastructure as Code
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

// Main System Architecture & DevOps Page
export const SystemArchitectureDevOps = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <DevOpsHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <DevOpsBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <DevOpsProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <DevOpsServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <DevOpsTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <DevOpsCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <DevOpsInlineCTA />
      </section>
      
      {/* Hire Talent */}
      <section className="bg-background">
        <HireDevOpsTalent />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <DevOpsFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <DevOpsFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};