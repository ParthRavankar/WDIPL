import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ProcessSection } from "../components/ProcessSection";
import { AnimatedGradientText } from "../components/AnimatedGradientText";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { GridPattern } from "../components/GridPattern";
import { navigateTo } from "../App";
import { 
  Users, Heart, Shield, Target, Lightbulb, Award, TrendingUp, Clock, 
  Newspaper, ArrowRight, Building, Globe, CheckCircle, Coffee, 
  Eye, Star, Calendar, MessageSquare, Briefcase, Rocket,
  ChevronRight
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
            {/* Company Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">About WDI</span>
            </motion.div>

            {/* Main Heading - Left aligned, reduced font size */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-left">
                <span className="text-[#E5195E]">WDI</span>
                <span className="text-white">: Innovating for a Better </span>
                <span className="text-[#E5195E]">Digital Future</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Discover our mission, values, and the people behind our commitment to excellence in technology and partnership.
              </p>
            </div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4" onClick={() => navigateTo('/company/our-history')}>
                <div className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>Our Story</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/company/leadership-team')}
              >
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>Meet Our Leaders</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-white">6+</div>
                <div className="text-sm text-gray-400 leading-tight">Years Experience</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400 leading-tight">Happy Clients</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400 leading-tight">Team Members</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">20+</div>
                <div className="text-sm text-gray-400 leading-tight">Countries Served</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// About WDI Section - Integrated from standalone page
const AboutWDISection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white text-left">
              Our Mission & Vision
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card/50 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-[#E5195E]" />
                  <h3 className="text-xl font-medium text-white">Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses worldwide with cutting-edge digital solutions that drive innovation, 
                  efficiency, and sustainable growth in an ever-evolving technological landscape.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-[#E5195E]" />
                  <h3 className="text-xl font-medium text-white">Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To be the global leader in digital transformation, setting new standards for innovation, 
                  quality, and client success across all industries we serve.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#E5195E]/20 to-[#FF6B9D]/20 border border-white/10 flex items-center justify-center">
              <div className="text-center p-8">
                <Globe className="w-16 h-16 text-[#E5195E] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Global Impact</h3>
                <p className="text-gray-300">
                  Serving clients across 40+ countries with innovative digital solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-gray-300 max-w-2xl">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Client-Centric",
                description: "Your success is our success. We put our clients at the heart of everything we do."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards of quality in every project we undertake."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of teamwork and transparent communication."
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "We focus on delivering measurable outcomes that drive real business value."
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "We bring international expertise with local market understanding."
              }
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card/50 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <value.icon className="w-8 h-8 text-[#E5195E] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 p-8 rounded-2xl bg-card/50 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Expert Developers" },
              { number: "40+", label: "Countries Served" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#E5195E] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with Company Values
const HorizontalTagScroller = () => {
  const values = [
    { name: "Innovation", icon: Lightbulb, color: "text-yellow-400" },
    { name: "Integrity", icon: Shield, color: "text-blue-400" },
    { name: "Client Success", icon: Target, color: "text-green-400" },
    { name: "Excellence", icon: CheckCircle, color: "text-purple-400" },
    { name: "Collaboration", icon: Users, color: "text-orange-400" },
    { name: "Growth", icon: TrendingUp, color: "text-cyan-400" }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            <span className="text-white">What Drives Us: Our </span>
            <span className="text-[#E5195E]">Core Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            These values define our culture and guide every decision we make.
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
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={`first-${value.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${value.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {value.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Second and third sets for seamless loop */}
            {[...values, ...values].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={`loop-${value.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + values.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${value.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {value.name}
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
      id: "experience",
      title: "6+ Years of Innovation",
      icon: Clock
    },
    {
      id: "trust", 
      title: "500+ Trusted Clients",
      icon: Heart
    },
    {
      id: "global",
      title: "Global Reach",
      icon: Globe
    },
    {
      id: "team",
      title: "Expert Team",
      icon: Users
    },
    {
      id: "excellence",
      title: "Award-Winning Excellence",
      icon: Award
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
          className="text-left mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-6">
            <span className="text-white">A Legacy of </span>
            <span className="text-[#E5195E]">Innovation</span>
            <span className="text-white"> and </span>
            <span className="text-[#E5195E]">Trust</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Building the future through technology and partnership.
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

// Company Sections Grid - Updated to remove About WDI card
const TabbedServiceDisplay = () => {
  const sections = [
    {
      title: "Our History", 
      icon: Clock,
      description: "Discover our journey and key milestones.",
      link: "/company/our-history"
    },
    {
      title: "Leadership Team",
      icon: Users,
      description: "Meet the visionaries leading our organization.",
      link: "/company/leadership-team"
    },
    {
      title: "Awards & Certifications",
      icon: Award,
      description: "Recognition and industry certifications.",
      link: "/company/awards-certifications"
    },
    {
      title: "Careers",
      icon: Briefcase,
      description: "Join our team and grow your career with us.",
      link: "/company/careers"
    },
    {
      title: "Culture & Values",
      icon: Heart,
      description: "Explore our company culture and core values.",
      link: "/company/culture-values"
    },
    {
      title: "Press & Media",
      icon: Newspaper,
      description: "Latest news, press releases, and media coverage.",
      link: "/company/press-media"
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
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Discover More About WDI
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            Explore different aspects of our company, from our founding story to our future vision.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => navigateTo(section.link)}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                  <div className="flex flex-col items-start space-y-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {section.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
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
    <section className="py-20 bg-background">
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
              <span className="text-white">Want to Join a Team with </span>
              <span className="text-[#E5195E]">WDI's Vision</span>
              <span className="text-white">?</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Discover our vibrant culture, exciting opportunities, and become part of our innovation journey.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-start gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/company/careers')}
              >
                <div className="inline-flex items-center gap-3">
                  <Briefcase className="w-6 h-6 flex-shrink-0" />
                  <span>Explore Careers at WDI</span>
                </div>
              </ShimmerButton>
              
              {/* Small benefit text */}
              <p className="text-sm text-gray-400">
                Remote opportunities • Growth culture • Innovation focus
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Press and Recognition Section
const PressRecognitionSection = () => {
  const press = [
    {
      title: "Innovation Leader 2024",
      type: "Award",
      icon: Award,
      source: "Tech Excellence Awards",
      iconBg: "bg-yellow-500",
      iconColor: "text-white",
      link: "/company/awards-certifications"
    },
    {
      title: "Best Employer in Tech", 
      type: "Recognition",
      icon: Heart,
      source: "HR Today Magazine",
      iconBg: "bg-red-500",
      iconColor: "text-white",
      link: "/company/culture-values"
    },
    {
      title: "Digital Transformation Partner",
      type: "Certification",
      icon: Shield,
      source: "Industry Certification Board",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      link: "/company/awards-certifications"
    },
    {
      title: "Recent Press Coverage",
      type: "Media",
      icon: Newspaper,
      source: "Various Publications",
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      link: "/company/press-media"
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
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            <span className="text-white">Recognition & </span>
            <span className="text-[#E5195E]">Media Presence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Our achievements and industry recognition speak to our commitment to excellence.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {press.map((item, index) => {
            const IconComponent = item.icon;
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
                        <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                          <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                            {item.type}
                          </div>
                          <div className="text-xs text-accent">
                            {item.source}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* CTA */}
                    <div className="p-8 pt-0 mt-auto space-y-3">
                      <ShimmerButton 
                        className="w-full py-3 text-sm rounded-xl shadow-lg hover:shadow-xl"
                        onClick={() => navigateTo(item.link)}
                      >
                        <div className="inline-flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium">Learn More</span>
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

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "When was WDI founded?",
      answer: "WDI was founded in 2018 with a vision to democratize access to enterprise-grade technology solutions for businesses of all sizes."
    },
    {
      question: "Where is WDI headquartered?",
      answer: "WDI has offices in multiple locations globally, with key operations in the United States and India to serve clients across different time zones."
    },
    {
      question: "What industries does WDI serve?",
      answer: "We serve a wide range of industries including FinTech, HealthTech, EdTech, E-commerce, Manufacturing, and many others, adapting our solutions to meet specific industry needs."
    },
    {
      question: "How many employees does WDI have?",
      answer: "WDI has grown to over 150 team members worldwide, including developers, designers, project managers, and business analysts across various specializations."
    },
    {
      question: "What makes WDI different from other agencies?",
      answer: "Our combination of technical expertise, industry experience, agile methodologies, and commitment to long-term client partnerships sets us apart in the market."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-800/40 rounded-lg mb-4 border border-slate-700/50">
                <AccordionTrigger className="text-left text-white px-6 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-6 pb-4">
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

export function Company() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <AboutWDISection />
      <HorizontalTagScroller />
      <SideBySideContentWithIcons />
      <TabbedServiceDisplay />
      <InlineCTA />
      <PressRecognitionSection />
      <FAQSection />
      <Footer />
    </div>
  );
}