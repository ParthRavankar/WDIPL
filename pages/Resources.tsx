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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { GridPattern } from "../components/GridPattern";
import { navigateTo } from "../App";
import { 
  BookOpen, FileText, Star, FileCheck, HelpCircle, ArrowRight, Download, 
  Calendar, Users, TrendingUp, MessageSquare, Brain, Award, Target, Globe,
  Heart, Shield, Eye, CheckCircle, Lightbulb, Coffee, Monitor, Smartphone, Rocket
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
            {/* Resources Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Knowledge Hub</span>
            </motion.div>

            {/* Main Heading - Left aligned, reduced font size */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-left">
                <span className="text-white">Insights, Knowledge & </span>
                <span className="text-[#E5195E]">Success Stories</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Empower your decisions with WDI's comprehensive library of articles, case studies, client testimonials, and industry whitepapers.
              </p>
            </div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4" onClick={() => navigateTo('/resources/blog')}>
                <div className="inline-flex items-center gap-2">
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                  <span>Explore Our Blog</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/case-studies')}
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>View Case Studies</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-400 leading-tight">Blog Articles</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400 leading-tight">Case Studies</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-400 leading-tight">Whitepapers</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400 leading-tight">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with Resource Categories
const HorizontalTagScroller = () => {
  const resources = [
    { name: "Blog Articles", icon: BookOpen, color: "text-blue-400" },
    { name: "Case Studies", icon: FileText, color: "text-green-400" },
    { name: "Client Testimonials", icon: Star, color: "text-yellow-400" },
    { name: "Whitepapers", icon: FileCheck, color: "text-purple-400" },
    { name: "Industry Insights", icon: TrendingUp, color: "text-orange-400" },
    { name: "FAQs", icon: HelpCircle, color: "text-cyan-400" }
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
            <span className="text-white">Navigate Our </span>
            <span className="text-[#E5195E]">Knowledge Hub</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Everything you need to understand our capabilities and the digital landscape.
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
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={`first-${resource.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${resource.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {resource.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Second and third sets for seamless loop */}
            {[...resources, ...resources].map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={`loop-${resource.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + resources.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${resource.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {resource.name}
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

// Why Choose WDI for Resources Section
const SideBySideContentWithIcons = () => {
  const advantages = [
    {
      id: "expertise",
      title: "Expert Insights",
      icon: Lightbulb
    },
    {
      id: "practical", 
      title: "Practical Knowledge",
      icon: Target
    },
    {
      id: "trends",
      title: "Industry Trends",
      icon: TrendingUp
    },
    {
      id: "proven",
      title: "Proven Results",
      icon: Award
    },
    {
      id: "transparent",
      title: "Transparent Sharing",
      icon: Eye
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
            <span className="text-white">Knowledge That Drives </span>
            <span className="text-[#E5195E]">Growth</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Learn from our experience and industry expertise.
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

// Resource Categories Grid
const TabbedServiceDisplay = () => {
  const resources = [
    {
      title: "Blog",
      icon: BookOpen,
      description: "Latest articles, tech trends, and expert opinions.",
      link: "/resources/blog"
    },
    {
      title: "Case Studies", 
      icon: FileText,
      description: "Real-world examples of our impactful solutions.",
      link: "/case-studies"
    },
    {
      title: "Client Testimonials",
      icon: Star,
      description: "Hear directly from our satisfied partners.",
      link: "/resources/client-testimonials"
    },
    {
      title: "Whitepapers & Insights",
      icon: FileCheck,
      description: "In-depth research and thought leadership.",
      link: "/resources/whitepapers-insights"
    },
    {
      title: "FAQs",
      icon: HelpCircle,
      description: "Quick answers to common questions about WDI.",
      link: "/resources/faqs"
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
            Explore Our Resource Categories
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            Comprehensive knowledge base designed to empower your digital transformation journey.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => navigateTo(resource.link)}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                  <div className="flex flex-col items-start space-y-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {resource.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {resource.description}
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
              <span className="text-white">Unlock Deeper Insights with </span>
              <span className="text-[#E5195E]">WDI's Knowledge</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Get exclusive access to our expert research, industry insights, and proven methodologies.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-start gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/resources/whitepapers-insights')}
              >
                <div className="inline-flex items-center gap-3">
                  <Download className="w-6 h-6 flex-shrink-0" />
                  <span>Download Our Latest Whitepaper</span>
                </div>
              </ShimmerButton>
              
              {/* Small benefit text */}
              <p className="text-sm text-gray-400">
                Free downloads • Expert insights • Industry analysis
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Featured Content Section
const FeaturedContentSection = () => {
  const featured = [
    {
      title: "The Future of Mobile App Development",
      type: "Blog Article",
      icon: Smartphone,
      date: "Dec 2024",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      link: "/resources/blog"
    },
    {
      title: "AI Integration Success Stories", 
      type: "Case Study",
      icon: Brain,
      date: "Nov 2024",
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      link: "/case-studies"
    },
    {
      title: "Digital Transformation Trends 2025",
      type: "Whitepaper",
      icon: TrendingUp,
      date: "Oct 2024",
      iconBg: "bg-green-500",
      iconColor: "text-white",
      link: "/resources/whitepapers-insights"
    },
    {
      title: "Client Success Testimonials",
      type: "Testimonial",
      icon: Heart,
      date: "Ongoing",
      iconBg: "bg-red-500",
      iconColor: "text-white",
      link: "/resources/client-testimonials"
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
            <span className="text-white">Featured Content & </span>
            <span className="text-[#E5195E]">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Stay updated with our latest insights, success stories, and industry expertise.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {featured.map((item, index) => {
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
                            {item.date}
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
                          <span className="font-medium">Read More</span>
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

// FAQ data for Resources
const resourcesFAQs = [
  {
    question: "What types of content do you publish?",
    answer: "We publish a wide range of content including technical articles, industry insights, case studies, whitepapers, client testimonials, and practical guides to help businesses with their digital transformation journey."
  },
  {
    question: "How often do you update your resources?",
    answer: "We regularly update our content with new blog articles published weekly, case studies monthly, and comprehensive whitepapers quarterly. Our FAQ section and testimonials are updated as needed."
  },
  {
    question: "Can I download whitepapers for free?",
    answer: "Yes, most of our whitepapers and insights are available for free download. Some premium content may require registration with your business email to access."
  },
  {
    question: "How can I stay updated with new content?",
    answer: "You can subscribe to our newsletter, follow our blog, or connect with us on social media platforms. We also offer RSS feeds for easy content syndication."
  },
  {
    question: "Do you accept guest contributions?",
    answer: "We welcome high-quality guest contributions from industry experts. Please contact our content team with your proposal and we'll review it based on our editorial guidelines."
  }
];

export function Resources() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <HorizontalTagScroller />
      <SideBySideContentWithIcons />
      <TabbedServiceDisplay />
      <ProcessSection />
      <InlineCTA />
      <FeaturedContentSection />
      <FAQSection 
        title="Resources Questions"
        subtitle="Get answers to common questions about our resource library and content."
        faqs={resourcesFAQs}
      />
      <Footer />
    </div>
  );
}