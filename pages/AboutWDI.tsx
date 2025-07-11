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
import { GridPattern } from "../components/GridPattern";
import { navigateTo } from "../App";
import { 
  ArrowRight, Users, Globe, Award, Target, Heart, Lightbulb, 
  Rocket, TrendingUp, CheckCircle, Star, Coffee, Monitor, 
  Calendar, Eye, Building, FileText, Settings, Trophy,
  BookOpen, MessageSquare, Briefcase, Mail
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
            {/* About WDI Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">About WDI: Web Development Institute</span>
            </motion.div>

            {/* Main Heading - Left aligned, reduced font size */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-left">
                <span className="text-white">Innovating the Future of </span>
                <span className="text-[#E5195E]">Digital Solutions</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                WDI is a dynamic and forward-thinking company dedicated to transforming businesses through cutting-edge technology and exceptional service.
              </p>
            </div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4" onClick={() => navigateTo('/services')}>
                <div className="inline-flex items-center gap-2">
                  <Briefcase className="w-4 h-4 flex-shrink-0" />
                  <span>Explore Our Services</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/case-studies')}
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>View Our Portfolio</span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with company intro */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                With a strong foundation in technological innovation and customer satisfaction, we strive to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our commitment to excellence drives us to continuously push the boundaries of what's possible in digital transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Why Choose WDI Section
const WhyChooseWDISection = () => {
  const strengths = [
    {
      id: "innovation",
      title: "Innovation",
      description: "Pioneering cutting-edge technology solutions since 2018.",
      icon: Lightbulb
    },
    {
      id: "expertise", 
      title: "Expertise",
      description: "A team of seasoned professionals with deep industry knowledge.",
      icon: Award
    },
    {
      id: "client-focus",
      title: "Client Focus",
      description: "Committed to delivering tailored solutions and exceptional service.",
      icon: Heart
    },
    {
      id: "impact",
      title: "Impact",
      description: "Driving positive change in efficiency, sustainability, and connectivity.",
      icon: Target
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
            <span className="text-white">Why Choose </span>
            <span className="text-[#E5195E]">WDI?</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Our core strengths that set us apart in the industry
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;

            return (
              <motion.div
                key={strength.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700/50 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full overflow-hidden">
                  <CardContent className="p-8 h-full">
                    <div className="mb-6">
                      <IconComponent className="w-12 h-12 text-accent" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                      {strength.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {strength.description}
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

// Our Impact in Numbers Section
const ImpactNumbersSection = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "150+", label: "Expert Professionals" },
    { number: "50+", label: "Global Clients" },
    { number: "6+", label: "Years of Excellence" }
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
            <span className="text-white">Our Impact in </span>
            <span className="text-[#E5195E]">Numbers</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Measurable results that speak to our commitment and expertise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#E5195E] mb-4">
                {stat.number}
              </div>
              <div className="text-lg text-gray-300 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Learn More About WDI Section
const LearnMoreSection = () => {
  const sections = [
    {
      title: "Our History",
      description: "Discover our journey from founding to becoming industry leaders",
      icon: BookOpen,
      link: "/about-wdi/our-history"
    },
    {
      title: "Leadership Team",
      description: "Meet the visionary leaders guiding our company's success",
      icon: Users,
      link: "/about-wdi/leadership-team"
    },
    {
      title: "Awards & Certifications",
      description: "Recognition for our excellence and commitment to quality",
      icon: Trophy,
      link: "/about-wdi/awards-certifications"
    },
    {
      title: "Careers",
      description: "Join our innovative team and grow with us",
      icon: Briefcase,
      link: "/careers"
    },
    {
      title: "Culture & Values",
      description: "The core principles that define our company culture",
      icon: Heart,
      link: "/about-wdi/culture-values"
    },
    {
      title: "Press & Media",
      description: "Latest news, announcements, and media coverage",
      icon: FileText,
      link: "/about-wdi/press-media"
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
            Learn More About WDI
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            Explore different aspects of our company and what makes us unique
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
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {section.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-accent font-medium mt-auto">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
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

// Client Testimonial Section
const TestimonialSection = () => {
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
            <span className="text-white">What Our </span>
            <span className="text-[#E5195E]">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700/50 rounded-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current inline-block" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-2xl text-white leading-relaxed mb-8 italic">
                "WDI has been instrumental in transforming our digital infrastructure. Their innovative approach and technical expertise exceeded our expectations."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Sarah Johnson</div>
                  <div className="text-gray-400">CTO, TechForward Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Mission Section
const MissionSection = () => {
  const principles = [
    {
      title: "Innovate",
      description: "Continuously pushing the boundaries of technology",
      icon: Lightbulb
    },
    {
      title: "Collaborate",
      description: "Building strong partnerships with our clients",
      icon: Users
    },
    {
      title: "Deliver",
      description: "Ensuring exceptional results and lasting impact",
      icon: Target
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
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-8">
            <span className="text-white">Our </span>
            <span className="text-[#E5195E]">Mission</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-12">
            To empower businesses worldwide with innovative digital solutions that drive growth, enhance efficiency, and create lasting value. We believe in the transformative power of technology and are committed to making it accessible, reliable, and impactful for every client we serve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
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
            {/* Ready to Transform Badge */}
            <div className="inline-block">
              <div className="bg-gradient-to-r from-[#E5195E]/20 to-purple-500/20 border border-[#E5195E]/30 rounded-full px-6 py-3">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#E5195E]" />
                  <span className="text-[#E5195E] text-sm font-medium">Ready to Transform Your Business?</span>
                </div>
              </div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
              <span className="text-white">Join hundreds of successful companies who have chosen </span>
              <span className="text-[#E5195E]">WDI</span>
              <span className="text-white"> as their technology partner</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Let's build something amazing together.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/contact')}
              >
                <div className="inline-flex items-center gap-3">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <span>Contact Us Today</span>
                </div>
              </ShimmerButton>
              
              <Button
                variant="secondary"
                size="lg"
                className="text-xl px-10 py-5 rounded-2xl"
                onClick={() => navigateTo('/services')}
              >
                <Briefcase className="w-6 h-6 flex-shrink-0" />
                <span>Explore Our Services</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ data for About WDI
const aboutWDIFAQs = [
  {
    question: "When was WDI founded?",
    answer: "WDI was founded in 2018 with a mission to transform businesses through cutting-edge technology and exceptional service. Since then, we've grown to become industry leaders in digital solutions."
  },
  {
    question: "What makes WDI different from other development companies?",
    answer: "Our unique combination of technical expertise, innovative approach, and client-focused service sets us apart. We don't just deliver projects; we build lasting partnerships and drive real business value."
  },
  {
    question: "How many clients has WDI served?",
    answer: "We've had the privilege of serving over 50 global clients across various industries, delivering more than 500 successful projects with a 98% client satisfaction rate."
  },
  {
    question: "What industries does WDI specialize in?",
    answer: "We serve clients across multiple industries including fintech, healthcare, e-commerce, education, and enterprise solutions. Our diverse expertise allows us to adapt our solutions to any industry's specific needs."
  },
  {
    question: "Does WDI offer ongoing support after project completion?",
    answer: "Absolutely! We believe in long-term partnerships with our clients. We provide comprehensive post-launch support, maintenance, updates, and continuous optimization to ensure your solutions evolve with your business needs."
  }
];

export const AboutWDI = () => {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <WhyChooseWDISection />
      <ImpactNumbersSection />
      <LearnMoreSection />
      <TestimonialSection />
      <MissionSection />
      <ProcessSection />
      <InlineCTA />
      <FAQSection 
        title="About WDI Questions"
        subtitle="Get answers to common questions about our company and mission."
        faqs={aboutWDIFAQs}
      />
      <Footer />
    </div>
  );
};