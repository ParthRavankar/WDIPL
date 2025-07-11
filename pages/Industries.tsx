import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ProcessSection } from "../components/ProcessSection";
import { FAQSection } from "../components/FAQSection";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { navigateTo } from "../App";
import { 
  DollarSign, Stethoscope, GraduationCap, ShoppingCart, Monitor, 
  Truck, Factory, Users, Star, ArrowRight, ChevronRight, Clock, 
  TrendingUp, Building, Cpu, Calendar, Eye, Target, Zap,
  CheckCircle, Lightbulb, Award, Handshake, Heart
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
            {/* Industries Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Industries We Serve</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-left">
                <span className="text-white">Industry-Specific </span>
                <span className="text-[#E5195E]">Digital Solutions</span>
                <span className="text-white"> That Drive Results</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                From FinTech to HealthTech, we deliver specialized solutions tailored to the unique challenges and opportunities of your industry.
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
                  <span>Discuss Your Industry</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/case-studies')}
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>View Success Stories</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400 leading-tight">Industries Served</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">300+</div>
                <div className="text-sm text-gray-400 leading-tight">Industry Projects</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400 leading-tight">Client Success Rate</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-400 leading-tight">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Industry Categories Grid
const IndustryGrid = () => {
  const industries = [
    {
      title: "Financial Services",
      icon: DollarSign,
      description: "FinTech, Banking, WealthTech, and Real Estate solutions",
      link: "/industries/fintech-banking-apps",
      features: ["Payment Systems", "Trading Platforms", "Digital Banking", "Compliance"],
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Healthcare & Wellness", 
      icon: Stethoscope,
      description: "HealthTech applications and medical compliance solutions",
      link: "/industries/healthcare/healthtech-applications",
      features: ["HIPAA Compliance", "Telemedicine", "Health Records", "Fitness Apps"],
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "Learning & Education",
      icon: GraduationCap,
      description: "EdTech platforms and virtual learning management systems",
      link: "/industries/education/edtech-platforms",
      features: ["LMS Platforms", "Virtual Classrooms", "E-Learning", "Assessment Tools"],
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Commerce & Consumer",
      icon: ShoppingCart,
      description: "E-commerce, food delivery, and travel booking systems",
      link: "/industries/commerce/ecommerce-marketplaces",
      features: ["Marketplaces", "Food Delivery", "Travel Booking", "Event Ticketing"],
      color: "text-orange-400",
      bgGradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "Media & Community",
      icon: Monitor,
      description: "OTT streaming, social platforms, and fan engagement",
      link: "/industries/media/ott-streaming-apps",
      features: ["Streaming Apps", "Social Networks", "Content Management", "Fan Engagement"],
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      title: "Mobility & Logistics",
      icon: Truck,
      description: "Transportation apps and supply chain management",
      link: "/industries/mobility/transportation-apps",
      features: ["Fleet Management", "Route Optimization", "On-Demand Services", "Tracking"],
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-amber-500/20"
    },
    {
      title: "Industrial & Manufacturing",
      icon: Factory,
      description: "Manufacturing automation and AgriTech platforms",
      link: "/industries/industrial/manufacturing-automation",
      features: ["IoT Solutions", "Automation", "Monitoring Systems", "AgriTech"],
      color: "text-gray-400",
      bgGradient: "from-gray-500/20 to-slate-500/20"
    },
    {
      title: "Emerging Technologies",
      icon: Cpu,
      description: "AI, Blockchain, and next-generation technology solutions",
      link: "/industries/industrial/oil-gas-monitoring-systems",
      features: ["AI Integration", "Blockchain", "IoT", "Smart Systems"],
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/20 to-teal-500/20"
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
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Industries We Transform
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Deep industry expertise combined with cutting-edge technology to deliver solutions that drive real business impact.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => navigateTo(industry.link)}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl h-full overflow-hidden">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Header */}
                    <div className="p-8 pb-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <IconComponent className={`w-6 h-6 ${industry.color}`} />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                        {industry.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="px-8 pb-6 flex-1">
                      <div className="space-y-2">
                        {industry.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-xs text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="p-8 pt-0 mt-auto">
                      <div className="flex items-center gap-2 text-accent font-medium text-sm">
                        <span>Explore Solutions</span>
                        <ChevronRight className="w-4 h-4" />
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

// Why Choose WDI for Industry Solutions
const WhyChooseWDI = () => {
  const advantages = [
    {
      id: "expertise",
      title: "Industry Expertise",
      icon: Award
    },
    {
      id: "compliance", 
      title: "Compliance Ready",
      icon: CheckCircle
    },
    {
      id: "scalability",
      title: "Scalable Solutions",
      icon: TrendingUp
    },
    {
      id: "innovation",
      title: "Innovation-First",
      icon: Lightbulb
    },
    {
      id: "partnership",
      title: "Strategic Partnership",
      icon: Handshake
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
            Why Industry Leaders Choose WDI
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Deep domain knowledge meets cutting-edge technology.
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

// Updated CTA Section
const InlineCTA = () => {
  return (
    <section className="py-20 bg-gray-950/50 relative overflow-hidden">
      {/* Add subtle decorative elements matching site theme */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/3 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
            {/* Badge */}
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Industry-Specific Solutions</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Transform Your{" "}
              <span className="text-accent">Industry</span>?
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our industry expertise can accelerate your digital transformation.
            </p>
            
            {/* CTA Button */}
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl" onClick={() => navigateTo('/contact/schedule-a-discovery-call')}>
              <div className="inline-flex items-center gap-3">
                <Calendar className="w-6 h-6 flex-shrink-0" />
                <span>Schedule Industry Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ data for Industries
const industriesFAQs = [
  {
    question: "What industries does WDI specialize in?",
    answer: "We specialize in 15+ industries including FinTech, HealthTech, EdTech, E-commerce, Media & Entertainment, Logistics, Manufacturing, and emerging technologies. Our team has deep domain expertise in each vertical."
  },
  {
    question: "How do you ensure compliance with industry regulations?",
    answer: "We have extensive experience with industry-specific regulations like HIPAA for healthcare, PCI DSS for payments, GDPR for data protection, and SOX for financial services. Our solutions are built with compliance in mind from the ground up."
  },
  {
    question: "Can you work with our existing industry-specific systems?",
    answer: "Absolutely! We have experience integrating with various industry-specific platforms, legacy systems, and third-party services. We ensure seamless data flow and maintain existing business processes while modernizing your technology stack."
  },
  {
    question: "Do you provide ongoing support for industry-specific solutions?",
    answer: "Yes, we offer comprehensive post-launch support including regulatory updates, security patches, performance optimization, and feature enhancements. We understand that industry requirements evolve and ensure your solutions stay current."
  },
  {
    question: "How do you stay updated with industry trends and regulations?",
    answer: "Our team continuously monitors industry trends, regulatory changes, and emerging technologies. We participate in industry conferences, maintain partnerships with technology vendors, and have dedicated research teams for each vertical we serve."
  }
];

export function Industries() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <IndustryGrid />
      <WhyChooseWDI />
      <ProcessSection />
      <InlineCTA />
      <FAQSection 
        title="Industry Solutions Questions"
        subtitle="Get answers to common questions about our industry-specific solutions and expertise."
        faqs={industriesFAQs}
      />
      <Footer />
    </div>
  );
}