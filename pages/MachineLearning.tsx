import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ProcessSection } from "../components/ProcessSection";
import { FAQSection } from "../components/FAQSection";
import { AnimatedGradientText } from "../components/AnimatedGradientText";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { GridPattern } from "../components/GridPattern";
import { navigateTo } from "../App";
import { 
  Brain, Target, BarChart3, Eye, MessageSquare, Zap, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Code, Layers, 
  Layout, Rocket, Monitor, Lock, RefreshCcw, ShieldCheck,
  Heart, CheckCircle, Lightbulb, Coffee, 
  Download, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, 
  Github, Slack, Figma, Chrome, Zap as ZapIcon, Video,
  Cog, Settings, Sparkles, Handshake, Award, UserPlus, Cpu, Database, Server, Users
} from "lucide-react";

// Enhanced Hero Section
const HeroWithCTA = () => {
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
            {/* Machine Learning Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Machine Learning</span>
            </motion.div>

            {/* Main Heading - Left aligned, reduced font size */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-left">
                <span className="text-white">Advanced </span>
                <span className="text-[#E5195E]">Machine Learning</span>
                <span className="text-white"> Solutions</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Harness the power of machine learning to predict outcomes, automate decisions, and unlock valuable insights from your data.
              </p>
            </div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4" onClick={() => navigateTo('/contact/schedule-a-discovery-call')}>
                <div className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span>ML Strategy Session</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/case-studies')}
              >
                <BarChart3 className="w-4 h-4 flex-shrink-0" />
                <span>View ML Case Studies</span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-8 text-center"
            >
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-400 leading-tight">ML Models Built</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400 leading-tight">Accuracy Rate</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">50%</div>
                <div className="text-sm text-gray-400 leading-tight">Faster Predictions</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400 leading-tight">Model Monitoring</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with ML Techniques
const HorizontalTagScroller = () => {
  const techniques = [
    { name: "Deep Learning", icon: Brain, color: "text-blue-400" },
    { name: "Predictive Analytics", icon: TrendingUp, color: "text-green-400" },
    { name: "Computer Vision", icon: Eye, color: "text-purple-400" },
    { name: "Natural Language Processing", icon: MessageSquare, color: "text-cyan-400" },
    { name: "Recommendation Systems", icon: Target, color: "text-orange-400" },
    { name: "Time Series Forecasting", icon: BarChart3, color: "text-yellow-400" }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            <span className="text-white">Advanced </span>
            <span className="text-[#E5195E]">ML Techniques</span>
            <span className="text-white"> We Master</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Cutting-edge machine learning methodologies that deliver accurate predictions and intelligent automation.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee hover:animate-marquee-paused">
            {/* First set */}
            {techniques.map((technique, index) => {
              const IconComponent = technique.icon;
              return (
                <motion.div
                  key={`first-${technique.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${technique.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {technique.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Second and third sets for seamless loop */}
            {[...techniques, ...techniques].map((technique, index) => {
              const IconComponent = technique.icon;
              return (
                <motion.div
                  key={`loop-${technique.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + techniques.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${technique.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {technique.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Why Choose WDI Section
const SideBySideContentWithIcons = () => {
  const advantages = [
    {
      id: "accuracy",
      title: "High Accuracy Models",
      icon: Target
    },
    {
      id: "scalable", 
      title: "Scalable Solutions",
      icon: TrendingUp
    },
    {
      id: "realtime",
      title: "Real-time Processing",
      icon: Zap
    },
    {
      id: "expertise",
      title: "ML Expertise",
      icon: Brain
    },
    {
      id: "deployment",
      title: "Production-Ready",
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
          className="text-left mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-6">
            <span className="text-white">Why Choose </span>
            <span className="text-[#E5195E]">WDI</span>
            <span className="text-white"> for Machine Learning</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Advanced ML capabilities with proven results and enterprise-grade deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;

            return (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700/50 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full overflow-hidden">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center min-h-[180px]">
                    <div className="mb-6">
                      <IconComponent className="w-10 h-10 text-accent mx-auto" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {advantage.title}
                    </h3>
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

// Service Categories Grid
const TabbedServiceDisplay = () => {
  const services = [
    {
      title: "Custom ML Model Development",
      icon: Brain,
      description: "Tailored machine learning models designed for your specific business challenges.",
      link: "/services/custom-ml-model-development"
    },
    {
      title: "Predictive Analytics & Forecasting", 
      icon: TrendingUp,
      description: "Advanced analytics to predict trends and forecast business outcomes.",
      link: "/services/predictive-analytics-forecasting"
    },
    {
      title: "Computer Vision Applications",
      icon: Eye,
      description: "Visual recognition and analysis solutions for images and video content.",
      link: "/services/computer-vision-applications"
    },
    {
      title: "NLP & Text Analytics",
      icon: MessageSquare,
      description: "Natural language processing for text analysis and understanding.",
      link: "/services/nlp-text-analytics"
    },
    {
      title: "Recommendation Engines",
      icon: Target,
      description: "Intelligent recommendation systems for personalized user experiences.",
      link: "/services/recommendation-engines"
    },
    {
      title: "Time Series Analysis",
      icon: BarChart3,
      description: "Advanced time-based data analysis for trend prediction and forecasting.",
      link: "/services/predictive-analytics-forecasting"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Machine Learning Services
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            Comprehensive machine learning solutions that turn your data into competitive advantage.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group cursor-pointer"
                onClick={() => navigateTo(service.link)}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                  <div className="flex flex-col items-start space-y-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Updated CTA Section with new design
const InlineCTA = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Ready to Launch Badge */}
            <div className="inline-block">
              <div className="bg-gradient-to-r from-[#E5195E]/20 to-purple-500/20 border border-[#E5195E]/30 rounded-full px-6 py-3">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#E5195E]" />
                  <span className="text-[#E5195E] text-sm font-medium">Ready to Launch?</span>
                </div>
              </div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
              <span className="text-white">Unlock Data Insights with </span>
              <span className="text-[#E5195E]">Advanced Machine Learning</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Transform your data into predictive intelligence that drives smarter business decisions and competitive advantage.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-start gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
              >
                <div className="inline-flex items-center gap-3">
                  <Brain className="w-6 h-6 flex-shrink-0" />
                  <span>Start Your ML Project</span>
                </div>
              </ShimmerButton>
              
              {/* Small benefit text */}
              <p className="text-sm text-gray-400">
                Data assessment • Model prototyping • Performance optimization
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ML Specialists Section
const HireDevelopersSection = () => {
  const specialists = [
    {
      title: "ML Engineers",
      icon: Brain,
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      link: "/hire-talent/full-stack-developers"
    },
    {
      title: "Data Scientists", 
      icon: BarChart3,
      skills: ["Statistics", "R", "Python", "Data Visualization"],
      iconBg: "bg-green-500",
      iconColor: "text-white",
      link: "/hire-talent/full-stack-developers"
    },
    {
      title: "AI Researchers",
      icon: Lightbulb,
      skills: ["Deep Learning", "Research", "Algorithm Design"],
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      link: "/hire-talent/full-stack-developers"
    },
    {
      title: "MLOps Engineers",
      icon: Settings,
      skills: ["Model Deployment", "Monitoring", "CI/CD", "Docker"],
      iconBg: "bg-orange-500",
      iconColor: "text-white",
      link: "/hire-talent/full-stack-developers"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            <span className="text-white">Hire Our </span>
            <span className="text-[#E5195E]">ML Specialists</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Get access to expert machine learning professionals who build predictive models that drive business value.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {specialists.map((specialist, index) => {
            const IconComponent = specialist.icon;
            return (
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
                    {/* Header */}
                    <div className="p-8 pb-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-12 h-12 ${specialist.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                          <IconComponent className={`w-6 h-6 ${specialist.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                            Machine Learning
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                        {specialist.title}
                      </h3>
                    </div>
                    
                    {/* Skills */}
                    <div className="px-8 pb-6 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {specialist.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-white/10 text-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="p-8 pt-0 mt-auto space-y-3">
                      <ShimmerButton 
                        className="w-full py-3 text-sm rounded-xl shadow-lg hover:shadow-xl"
                        onClick={() => navigateTo(specialist.link)}
                      >
                        <div className="inline-flex items-center justify-center gap-2">
                          <UserPlus className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium">Hire Now</span>
                        </div>
                      </ShimmerButton>
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

// FAQ data for Machine Learning
const machineLearningFAQs = [
  {
    question: "What types of machine learning models can you develop?",
    answer: "We develop various ML models including supervised learning (classification, regression), unsupervised learning (clustering, dimensionality reduction), reinforcement learning, and deep learning models using frameworks like TensorFlow and PyTorch."
  },
  {
    question: "How do you ensure the accuracy of machine learning models?",
    answer: "We use rigorous validation techniques including cross-validation, train-test-validation splits, A/B testing, and continuous monitoring. We also implement feature engineering, hyperparameter tuning, and ensemble methods to maximize accuracy."
  },
  {
    question: "Can you integrate ML models into our existing systems?",
    answer: "Yes, we specialize in ML model deployment and integration. We can deploy models as REST APIs, batch processing systems, real-time streaming solutions, or embed them directly into your applications using various deployment strategies."
  },
  {
    question: "How do you handle data quality and preprocessing?",
    answer: "We implement comprehensive data pipelines that include data cleaning, normalization, feature engineering, handling missing values, outlier detection, and data validation to ensure your ML models work with high-quality, reliable data."
  },
  {
    question: "What is your approach to MLOps and model maintenance?",
    answer: "We follow MLOps best practices including version control for models and data, automated testing, continuous integration/deployment, model monitoring, performance tracking, and automated retraining to ensure models remain accurate over time."
  }
];

export function MachineLearning() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <HorizontalTagScroller />
      <SideBySideContentWithIcons />
      <TabbedServiceDisplay />
      <ProcessSection />
      <InlineCTA />
      <HireDevelopersSection />
      <FAQSection 
        title="Machine Learning Questions"
        subtitle="Get answers to common questions about our machine learning services."
        faqs={machineLearningFAQs}
      />
      <Footer />
    </div>
  );
}