import React from "react";
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
  Shield, ShieldCheck, Lock, Key, FileCheck, Database, Eye, 
  AlertTriangle, CheckCircle, Search, Code, Network, Rocket,
  X, ArrowRight, Star, Calendar, MessageSquare, Users, Activity,
  Settings, BarChart3, FileText, Palette, Brain, Zap, Clock,
  ChevronRight, UserCheck, Fingerprint, ScrollText, Archive
} from "lucide-react";

// Medical Compliance Hero Section
const MedicalComplianceHero = () => {
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
                Medical Compliance Solutions
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Ensure unwavering regulatory adherence and robust data security with WDI's specialized medical compliance software solutions.
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
                  <span>View Compliance Case Studies</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Compliance Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Compliance Dashboard Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Compliance Interface */}
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
                      <h3 className="text-xl font-semibold text-white">Compliance Management Center</h3>
                      <p className="text-gray-400 text-sm">Real-time compliance monitoring</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        <ShieldCheck className="w-3 h-3 mr-1" />
                        Compliant
                      </Badge>
                    </div>
                  </motion.div>
                  
                  {/* Compliance Overview */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-green-100 text-sm mb-1">Overall Compliance Score</div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.4 }}
                          className="text-white text-3xl font-bold"
                        >
                          98.7%
                        </motion.div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-green-100 text-sm">
                      <span className="flex items-center gap-1">
                        <FileCheck className="w-4 h-4" />
                        Last Audit: Passed
                      </span>
                      <span>Next Review: 30 days</span>
                    </div>
                  </motion.div>
                  
                  {/* Compliance Status Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="grid grid-cols-2 gap-4 mb-6"
                  >
                    {[
                      { name: "HIPAA", status: "100%", detail: "Fully Compliant", icon: ShieldCheck, color: "green" },
                      { name: "GDPR", status: "98%", detail: "2 Minor Items", icon: Lock, color: "yellow" },
                      { name: "FDA 21 CFR", status: "100%", detail: "Validated", icon: FileCheck, color: "green" },
                      { name: "SOC 2", status: "95%", detail: "In Progress", icon: Settings, color: "blue" }
                    ].map((compliance, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                        className="bg-gray-800/50 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <compliance.icon className={`w-4 h-4 ${
                            compliance.color === 'green' ? 'text-green-400' :
                            compliance.color === 'yellow' ? 'text-yellow-400' :
                            compliance.color === 'blue' ? 'text-blue-400' :
                            'text-gray-400'
                          }`} />
                          <span className="text-white font-medium text-sm">{compliance.name}</span>
                        </div>
                        <div className="text-gray-300 text-lg font-semibold">{compliance.status}</div>
                        <div className="text-gray-400 text-xs">{compliance.detail}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Audit Trail */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="bg-gray-800/30 rounded-xl p-4 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-medium">Audit Trail Activity</span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">24H</Button>
                        <Button variant="ghost" size="sm" className="text-xs text-accent bg-accent/20">7D</Button>
                      </div>
                    </div>
                    
                    {/* Simulated Activity Chart */}
                    <div className="relative h-24 flex items-end justify-between gap-1">
                      {Array.from({ length: 12 }, (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${40 + Math.random() * 40}%` }}
                          transition={{ duration: 0.8, delay: 2.4 + i * 0.05 }}
                          className="bg-gradient-to-t from-blue-500/60 to-blue-400/20 rounded-t-sm w-full"
                        ></motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Recent Compliance Activities */}
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
                      { activity: "Access Control Review", detail: "User permissions updated", time: "1h ago", icon: Key, color: "blue" },
                      { activity: "Data Encryption Audit", detail: "All systems validated", time: "4h ago", icon: Lock, color: "green" },
                      { activity: "Compliance Report Generated", detail: "Q4 2024 assessment", time: "1 day ago", icon: FileText, color: "purple" }
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
                
                {/* Floating Security Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.0 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                    <Lock className="w-8 h-8 text-red-400" />
                  </div>
                </motion.div>
                
                {/* Real-time Monitoring */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Activity className="w-4 h-4" />
                    <span>Real-time Monitoring</span>
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
                
                {/* Audit Trail Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                  className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-purple-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-purple-500/30">
                    <div className="text-center">
                      <ScrollText className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                      <div className="text-purple-400 text-xs font-bold">AUDIT</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Compliance Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  HIPAA Compliant
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Lock className="w-3 h-3 mr-1" />
                  Data Encryption
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <ScrollText className="w-3 h-3 mr-1" />
                  Audit Trails
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
const MedicalComplianceChallenge = () => {
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
              Addressing the Core Challenges of Medical Compliance
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
                    <p>Navigating the complex and ever-evolving landscape of healthcare regulations (e.g., HIPAA, GDPR, FDA 21 CFR Part 11) is a significant challenge for medical organizations. Non-compliance can lead to severe penalties, data breaches, and reputational damage, while manual compliance processes are often inefficient and prone to error.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Complex regulatory requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Risk of severe penalties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Manual compliance processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Data breach vulnerabilities</span>
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
                    <h3 className="text-2xl font-semibold text-foreground">Our Medical Compliance Solution</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>WDI specializes in developing and integrating medical compliance solutions that ensure stringent adherence to global and local healthcare regulations. We build systems for secure data management, audit trails, privacy management, and electronic record keeping, minimizing risk and streamlining your compliance efforts.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Automated compliance workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Comprehensive audit trails</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Secure data management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Risk minimization systems</span>
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
const MedicalComplianceFeatures = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "HIPAA & GDPR Compliant Data Management",
      description: "Secure storage, transmission, and processing of Protected Health Information (PHI) and personal data."
    },
    {
      icon: FileCheck,
      title: "FDA 21 CFR Part 11 Adherence",
      description: "Solutions for electronic records and electronic signatures, ensuring authenticity, integrity, and confidentiality."
    },
    {
      icon: ScrollText,
      title: "Audit Trails & Activity Logging",
      description: "Comprehensive tracking of all system access and data modifications for accountability and compliance reporting."
    },
    {
      icon: Key,
      title: "Access Control & User Permissions",
      description: "Granular control over who can access specific data and functionalities, minimizing unauthorized access."
    },
    {
      icon: Lock,
      title: "Data Encryption (At Rest & In Transit)",
      description: "Implementing industry-standard encryption protocols to protect sensitive health data from breaches."
    },
    {
      icon: UserCheck,
      title: "Consent Management Systems",
      description: "Tools for managing patient consent for data usage, sharing, and communication in line with privacy regulations."
    },
    {
      icon: MessageSquare,
      title: "Secure Communication & Collaboration",
      description: "Encrypted messaging and file sharing within healthcare environments to protect sensitive discussions."
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
            Powerful Features for Your Medical Compliance
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
                  <MessageSquare className="w-8 h-8 text-accent" />
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
const MedicalComplianceAdvantage = () => {
  const advantages = [
    {
      icon: Brain,
      title: "Unrivaled Regulatory Expertise",
      description: "Our team possesses deep knowledge of HIPAA, GDPR, FDA guidelines, and other critical healthcare compliance frameworks."
    },
    {
      icon: Shield,
      title: "Security-First Development",
      description: "We bake security into every layer of development, from architecture to deployment, ensuring robust data protection."
    },
    {
      icon: Zap,
      title: "Automated Compliance Workflows",
      description: "Designing systems that automate audit trails, access controls, and reporting, reducing manual effort and human error."
    },
    {
      icon: Activity,
      title: "Scalable & Future-Proof",
      description: "Building solutions that can adapt to evolving regulations and securely handle growing volumes of sensitive data."
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
            Why Partner with WDI for Medical Compliance Solutions?
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
const MedicalComplianceProcess = () => {
  const steps = [
    {
      title: "Compliance Assessment & Requirements Definition",
      description: "In-depth analysis of your specific regulatory landscape and precise needs for data protection and auditability.",
      icon: Search
    },
    {
      title: "Secure Architecture Design", 
      description: "Designing system architecture with security-by-design and privacy-by-design principles at its core.",
      icon: Palette
    },
    {
      title: "Development with Compliance Protocols",
      description: "Building features and functionalities while strictly adhering to secure coding standards and regulatory requirements.",
      icon: Code
    },
    {
      title: "Robust Security & Compliance Testing",
      description: "Comprehensive penetration testing, vulnerability assessments, and specific compliance audits (e.g., HIPAA compliance checks).",
      icon: Shield
    },
    {
      title: "Documentation & Validation Support",
      description: "Providing thorough documentation and supporting your team through validation and audit processes.",
      icon: FileText
    },
    {
      title: "Deployment & Ongoing Monitoring",
      description: "Secure system deployment, continuous security monitoring, and regular updates to adapt to new regulations.",
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
            Our Streamlined Process for Medical Compliance Solution Development
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
const MedicalComplianceCaseStudies = () => {
  const caseStudies = [
    {
      title: "HIPAA-Compliant Patient Data Archiving System",
      client: "Large Medical Facility",
      problem: "A large medical facility struggled with securely archiving and retrieving vast amounts of patient data while maintaining HIPAA compliance.",
      solution: "WDI developed a centralized, encrypted, and auditable data archiving system with granular access controls and robust audit trails.",
      results: "Ensured 100% HIPAA compliance for archived data and reduced data retrieval time by 70%.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&auto=format",
      engagement: "Compliance transformation",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Electronic Consent Management Platform",
      client: "Research Institution",
      problem: "A research institution faced challenges managing patient consents for clinical trials in a compliant and efficient manner.",
      solution: "Built a digital consent management platform adhering to FDA 21 CFR Part 11 standards, with electronic signatures and automated audit logs.",
      results: "Achieved full compliance for electronic consents and accelerated patient enrollment by 15%.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
      engagement: "Research compliance optimization",
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
            Medical Compliance Solution Success Stories
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
                        <Shield className="w-6 h-6 text-accent" />
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
const MedicalComplianceTestimonials = () => {
  const testimonials = [
    {
      quote: "WDI's expertise in medical compliance is unparalleled. They built us a system that gives us complete peace of mind regarding HIPAA and patient data security.",
      author: "Compliance Officer",
      company: "Healthcare Provider",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format"
    },
    {
      quote: "Navigating FDA regulations was a huge challenge until we partnered with WDI. Their solution for electronic records is robust and made our audit process so much smoother.",
      author: "Director of Clinical Operations",
      company: "Biotech Firm",
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
            What Our Clients Say About Our Medical Compliance Solutions
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
const MedicalComplianceInlineCTA = () => {
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
                <Shield className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Compliance Excellence</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Fortify Your{" "}
              <span className="text-accent">Medical Compliance Strategy?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Leverage our expertise to build secure and fully compliant medical software solutions.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Discuss Your Compliance Needs</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQs
const MedicalComplianceFAQs = () => {
  const faqs = [
    {
      question: "What specific healthcare regulations (e.g., HIPAA, GDPR, FDA 21 CFR Part 11) do you specialize in?",
      answer: "We specialize in all major healthcare regulations including HIPAA (Health Insurance Portability and Accountability Act), GDPR (General Data Protection Regulation), FDA 21 CFR Part 11 for electronic records and signatures, SOC 2 compliance, HITECH Act requirements, and state-specific healthcare privacy laws. Our team stays current with regulatory updates and ensures your systems meet all applicable standards."
    },
    {
      question: "How do you ensure data encryption and access control for sensitive medical data?",
      answer: "We implement multiple layers of security including AES-256 encryption for data at rest, TLS 1.3 for data in transit, and end-to-end encryption for communications. Access controls include role-based permissions, multi-factor authentication, privileged access management, and the principle of least privilege. All access is logged and monitored in real-time with automated alerting for anomalies."
    },
    {
      question: "Can you integrate compliance features into existing healthcare systems?",
      answer: "Yes, we excel at retrofitting existing healthcare systems with compliance features. We can integrate audit logging, access controls, encryption, and monitoring capabilities into legacy systems without disrupting operations. Our approach includes comprehensive assessment, phased implementation, and thorough testing to ensure seamless integration while maintaining system performance."
    },
    {
      question: "What is your process for auditing and validating the compliance of developed software?",
      answer: "Our compliance validation process includes automated security scanning, penetration testing, code audits, documentation reviews, and compliance gap analyses. We conduct mock audits, provide detailed compliance reports, maintain audit trails, and offer ongoing compliance monitoring. We also work with third-party auditors and can support you through official regulatory audits."
    },
    {
      question: "Do you provide solutions for electronic signatures in a compliant manner?",
      answer: "Yes, we provide FDA 21 CFR Part 11 compliant electronic signature solutions that ensure authenticity, integrity, and non-repudiation. Our solutions include biometric authentication, digital certificates, timestamping, audit trails, and user verification. We support various signature methods including typed, drawn, and certificate-based signatures with full legal validity."
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
const MedicalComplianceFinalCTA = () => {
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
                <Shield className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Regulatory Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Your Unwavering Partner for{" "}
            <span className="text-accent">Medical Regulatory Excellence</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with WDI to leverage deep compliance expertise and robust technology, ensuring your medical operations are secure, efficient, and fully aligned with regulatory standards.
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
                <span>Book Your Expert Compliance Consultation</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Assessment • Design • Development • Testing • Validation • Support
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

// Main Medical Compliance Page
export const MedicalComplianceSolutions = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <MedicalComplianceHero />
      </section>
      
      {/* Challenge */}
      <section className="bg-background">
        <MedicalComplianceChallenge />
      </section>
      
      {/* Features */}
      <section className="bg-card">
        <MedicalComplianceFeatures />
      </section>
      
      {/* Advantage */}
      <section className="bg-background">
        <MedicalComplianceAdvantage />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <MedicalComplianceProcess />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <MedicalComplianceCaseStudies />
      </section>
      
      {/* Testimonials */}
      <section className="bg-card">
        <MedicalComplianceTestimonials />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <MedicalComplianceInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <MedicalComplianceFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <MedicalComplianceFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};