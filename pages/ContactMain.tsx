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
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { GridPattern } from "../components/GridPattern";
import { navigateTo } from "../App";
import { 
  Mail, FileCheck, Phone, UserPlus, Headphones, MapPin, MessageSquare, 
  Calendar, ArrowRight, Globe, Clock, Users, Target, Send, 
  Coffee, Monitor, Shield, Award, Rocket
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
            {/* Contact Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Contact WDI</span>
            </motion.div>

            {/* Main Heading - Left aligned, reduced font size */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-left">
                <span className="text-white">Connect with </span>
                <span className="text-[#E5195E]">WDI</span>
                <span className="text-white">: Your Digital Partner </span>
                <span className="text-[#E5195E]">Awaits</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Let's discuss your project, answer your questions, or explore collaboration opportunities.
              </p>
            </div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4" onClick={() => navigateTo('#contact-form')}>
                <div className="inline-flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>Send a Message</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Schedule a Call</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400 leading-tight">Support Available</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">&lt;24h</div>
                <div className="text-sm text-gray-400 leading-tight">Response Time</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400 leading-tight">Global Offices</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400 leading-tight">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with Contact Options
const HorizontalTagScroller = () => {
  const contactOptions = [
    { name: "General Inquiry", icon: Mail, color: "text-blue-400" },
    { name: "Request Proposal", icon: FileCheck, color: "text-green-400" },
    { name: "Schedule Call", icon: Phone, color: "text-purple-400" },
    { name: "Career Opportunities", icon: UserPlus, color: "text-orange-400" },
    { name: "Client Support", icon: Headphones, color: "text-cyan-400" },
    { name: "Office Locations", icon: MapPin, color: "text-yellow-400" }
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
            <span className="text-white">Choose Your Best Way to </span>
            <span className="text-[#E5195E]">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            We're here to provide the answers and support you need.
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
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={`first-${option.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${option.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {option.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Second and third sets for seamless loop */}
            {[...contactOptions, ...contactOptions].map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={`loop-${option.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + contactOptions.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${option.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {option.name}
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

// Why Choose WDI for Contact Section
const SideBySideContentWithIcons = () => {
  const advantages = [
    {
      id: "response",
      title: "Fast Response Time",
      icon: Clock
    },
    {
      id: "expert", 
      title: "Expert Consultation",
      icon: Target
    },
    {
      id: "global",
      title: "Global Support",
      icon: Globe
    },
    {
      id: "dedicated",
      title: "Dedicated Account Management",
      icon: Users
    },
    {
      id: "transparent",
      title: "Transparent Communication",
      icon: Shield
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
            <span className="text-white">Responsive & </span>
            <span className="text-[#E5195E]">Professional Support</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Connect with confidence knowing our team is ready to help.
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

// Contact Form Section
const ContactFormSection = () => {
  return (
    <section id="contact-form" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            We aim to respond to all inquiries within 24-48 business hours.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700/50 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Full Name *</label>
                    <Input placeholder="Your full name" className="bg-gray-800/50 border-gray-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email Address *</label>
                    <Input type="email" placeholder="your.email@company.com" className="bg-gray-800/50 border-gray-600 text-white" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Phone Number</label>
                    <Input placeholder="+1 (555) 123-4567" className="bg-gray-800/50 border-gray-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Company Name *</label>
                    <Input placeholder="Your company name" className="bg-gray-800/50 border-gray-600 text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">I'm interested in... *</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-development">Software Development</SelectItem>
                      <SelectItem value="talent-hire">Talent Hire</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="career">Career</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Your Message *</label>
                  <Textarea 
                    placeholder="Tell us about your project, requirements, or questions..."
                    rows={5}
                    className="bg-gray-800/50 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">How did you hear about us?</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="event">Event/Conference</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy" />
                  <label htmlFor="privacy" className="text-sm text-gray-300">
                    I agree to WDI's Privacy Policy and consent to being contacted about my inquiry. *
                  </label>
                </div>

                <ShimmerButton className="w-full py-4 text-lg rounded-xl shadow-lg hover:shadow-xl">
                  <div className="inline-flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 flex-shrink-0" />
                    <span>Submit Message</span>
                  </div>
                </ShimmerButton>
              </form>
            </CardContent>
          </Card>
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
              <span className="text-white">Book Your Free Discovery Call with </span>
              <span className="text-[#E5195E]">WDI Experts</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Get expert advice, project estimates, and strategic guidance without any commitment.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-start gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
              >
                <div className="inline-flex items-center gap-3">
                  <Calendar className="w-6 h-6 flex-shrink-0" />
                  <span>Schedule a Discovery Call</span>
                </div>
              </ShimmerButton>
              
              {/* Small benefit text */}
              <p className="text-sm text-gray-400">
                Free consultation • Expert guidance • Rapid response
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Office Locations Section
const OfficeLocationsSection = () => {
  const offices = [
    {
      title: "New York, USA",
      icon: MapPin,
      address: "123 Tech Avenue, Suite 500",
      phone: "+1 (555) 123-4567",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      link: "/contact/office-locations"
    },
    {
      title: "Mumbai, India", 
      icon: MapPin,
      address: "456 Innovation Park, BKC",
      phone: "+91 22 1234 5678",
      iconBg: "bg-orange-500",
      iconColor: "text-white",
      link: "/contact/office-locations"
    },
    {
      title: "London, UK",
      icon: MapPin,
      address: "789 Digital District, Canary Wharf",
      phone: "+44 20 1234 5678",
      iconBg: "bg-green-500",
      iconColor: "text-white",
      link: "/contact/office-locations"
    },
    {
      title: "Sydney, Australia",
      icon: MapPin,
      address: "321 Tech Tower, CBD",
      phone: "+61 2 1234 5678",
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      link: "/contact/office-locations"
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
            <span className="text-white">Our </span>
            <span className="text-[#E5195E]">Global Presence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Connect with us at any of our worldwide locations.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {offices.map((office, index) => {
            const IconComponent = office.icon;
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
                        <div className={`w-12 h-12 ${office.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                          <IconComponent className={`w-6 h-6 ${office.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                            Office Location
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                        {office.title}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>{office.address}</p>
                        <p>{office.phone}</p>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="p-8 pt-0 mt-auto space-y-3">
                      <ShimmerButton 
                        className="w-full py-3 text-sm rounded-xl shadow-lg hover:shadow-xl"
                        onClick={() => navigateTo(office.link)}
                      >
                        <div className="inline-flex items-center justify-center gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium">Get Directions</span>
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

// FAQ data for Contact
const contactFAQs = [
  {
    question: "What happens after I submit a contact form?",
    answer: "We typically respond within 24-48 business hours. Our team will review your inquiry and connect you with the most appropriate specialist to discuss your needs in detail."
  },
  {
    question: "How long does it take to get a proposal?",
    answer: "For most projects, we provide initial proposals within 3-5 business days after our discovery call. Complex enterprise projects may require additional time for detailed analysis and estimation."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer complimentary discovery calls to understand your project requirements and provide initial guidance. This helps us create more accurate proposals and recommendations."
  },
  {
    question: "Can I visit your offices?",
    answer: "Absolutely! We welcome office visits by appointment. Please contact us in advance to schedule a meeting with our team at any of our global locations."
  },
  {
    question: "What time zone are you in?",
    answer: "We operate across multiple time zones with offices in the US (EST) and India (IST). Our global presence allows us to provide support and communication that fits your business hours."
  }
];

export function ContactMain() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <HorizontalTagScroller />
      <SideBySideContentWithIcons />
      <ContactFormSection />
      <InlineCTA />
      <OfficeLocationsSection />
      <FAQSection 
        title="Contact Questions"
        subtitle="Get answers to common questions about reaching out to WDI."
        faqs={contactFAQs}
      />
      <Footer />
    </div>
  );
}