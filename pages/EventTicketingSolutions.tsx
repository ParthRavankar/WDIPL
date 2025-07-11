import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { HeroBanner } from "../components/HeroBanner";
import { ProcessSection } from "../components/ProcessSection";
import { WhyChooseWDI } from "../components/WhyChooseWDI";
import { FAQSection } from "../components/FAQSection";
import { SplitCallToAction } from "../components/SplitCallToAction";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { 
  Search, MapPin, CreditCard, Users, Calendar, 
  QrCode, BarChart3, Target, CheckCircle, Star, 
  Zap, Shield, Globe, Award, Bell
} from "lucide-react";

// Problem Solution Block Component
const ProblemSolutionBlock = () => {
  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16">
            <span className="text-white">Addressing the Core Challenges of </span>
            <span className="text-[#E5195E]">Event & Ticketing Solutions</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-red-400" />
                  </div>
                  The Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Managing events and selling tickets efficiently requires platforms that can handle high transaction volumes, provide secure ticketing and access control, and offer intuitive experiences for both organizers and attendees. Challenges include fraud prevention, real-time inventory management, and engaging audiences before, during, and after events.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  Our Event & Ticketing Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in building comprehensive event and ticketing platforms. We create solutions for event discovery, secure online ticket sales, attendee registration, and venue management, focusing on user experience, scalability, robust security, and powerful analytics to ensure successful events and satisfied attendees.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Grid Component
const IconWithDescriptionGrid = () => {
  const features = [
    {
      icon: Search,
      title: "Event Listing & Discovery",
      description: "Intuitive search, filtering, and categorization for users to find events by genre, date, location, and popularity."
    },
    {
      icon: CreditCard,
      title: "Secure Online Ticketing & Sales",
      description: "Seamless ticket purchase workflows, secure payment gateway integrations, and support for various ticket types (e.g., VIP, early bird)."
    },
    {
      icon: Users,
      title: "Attendee Registration & Management",
      description: "Tools for collecting attendee information, sending confirmations, and managing attendee lists."
    },
    {
      icon: MapPin,
      title: "Venue Management & Seating Maps",
      description: "Interactive seating charts, capacity management, and booking for specific areas within a venue."
    },
    {
      icon: QrCode,
      title: "Ticket Validation & Access Control",
      description: "Mobile scanning solutions (QR/barcode), digital check-in, and fraud prevention mechanisms at entry points."
    },
    {
      icon: Bell,
      title: "Event Promotion & Marketing Tools",
      description: "Integrated features for email campaigns, social media sharing, and tracking marketing effectiveness."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics & Reporting",
      description: "Dashboards for event organizers to monitor ticket sales, attendance rates, and revenue in real time."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Powerful Features for Your Event & Ticketing Solutions
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create seamless event experiences that maximize attendance and engagement.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-[#E5195E]/30 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-[#E5195E]/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-[#E5195E]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Three Column Feature Block Component
const ThreeColumnFeatureBlock = () => {
  const advantages = [
    {
      icon: Zap,
      title: "High-Volume Transaction Handling",
      description: "Building robust systems designed to manage sudden surges in ticket sales without outages."
    },
    {
      icon: Shield,
      title: "Advanced Security & Fraud Prevention",
      description: "Implementing sophisticated measures to protect against ticket fraud and secure payment data."
    },
    {
      icon: Users,
      title: "Seamless Attendee Experience",
      description: "Focusing on intuitive booking flows, easy digital ticket access, and smooth check-in processes."
    },
    {
      icon: Globe,
      title: "Customization & Integration",
      description: "Tailoring platforms to unique event needs and integrating with CRM, marketing, or venue management systems."
    }
  ];

  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Why Partner with WDI for Event & Ticketing Solution Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create event platforms that truly serve organizers and delight attendees.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#E5195E]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#E5195E]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Case Study Component
const CaseStudyHighlightGrid = () => {
  const caseStudies = [
    {
      title: "Large-Scale Music Festival Ticketing Platform",
      problem: "An event organizer needed a secure and scalable platform to handle millions of ticket sales for a major music festival.",
      solution: "WDI developed a custom ticketing platform with advanced fraud detection, queue management during peak sales, and mobile check-in.",
      results: "Successfully managed over 2 million ticket sales with zero security breaches and a smooth check-in process for attendees.",
      metrics: ["2M+ Tickets", "Zero Breaches", "Music Festival"]
    },
    {
      title: "Corporate Event Management & Registration System",
      problem: "A professional events company struggled with manual registration and attendee management for its numerous corporate conferences.",
      solution: "Built an integrated event management system featuring online registration, personalized agendas, networking tools, and post-event analytics.",
      results: "Reduced registration time by 50% and improved attendee engagement by 20% through in-app features.",
      metrics: ["50% ↓ Registration Time", "20% ↑ Engagement", "Corporate Events"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Event & Ticketing Solution Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our event platform implementations that transformed event management.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-[#E5195E]/30 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-4">
                    {study.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-[#E5195E]/30">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {study.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-300 mb-2">Problem:</h4>
                      <p className="text-gray-400 text-sm">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300 mb-2">Solution:</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300 mb-2">Results:</h4>
                      <p className="text-gray-400 text-sm">{study.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Data
const eventTicketingFAQs = [
  {
    question: "How do you ensure scalability for high-volume ticket sales for popular events?",
    answer: "We implement cloud-native architectures with auto-scaling, load balancing, queue management systems, and CDN integration. Our platforms are designed to handle millions of concurrent users during peak sales periods without performance degradation."
  },
  {
    question: "What security measures do you implement to prevent ticket fraud and protect payment data?",
    answer: "We implement advanced fraud detection algorithms, blockchain-based ticket authentication, PCI DSS compliant payment processing, encrypted QR/barcode generation, and real-time monitoring systems to prevent fraudulent activities."
  },
  {
    question: "Can you integrate with venue management systems or access control hardware?",
    answer: "Yes, we have extensive experience integrating with venue management systems, turnstile hardware, barcode scanners, RFID readers, and mobile check-in devices. We ensure seamless data flow between platforms and physical access control systems."
  },
  {
    question: "Do you offer solutions for virtual or hybrid events in addition to in-person?",
    answer: "Absolutely! We develop comprehensive solutions for virtual events, hybrid experiences, and live streaming integration. Our platforms support virtual networking, online presentations, interactive Q&A, and digital attendance tracking."
  },
  {
    question: "What kind of analytics and reporting do you provide for event organizers?",
    answer: "Our platforms provide real-time dashboards with ticket sales analytics, attendance tracking, revenue reporting, demographic insights, marketing campaign effectiveness, and post-event surveys. All data is presented in intuitive, actionable formats."
  }
];

export const EventTicketingSolutions = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Commerce & Consumer"
        title="Event & Ticketing Solutions"
        description="Create seamless experiences for event discovery, ticket sales, and attendee management with robust and scalable event and ticketing platforms."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View EventTech Case Studies",
          href: "/case-studies"
        }}
      />

      <ProblemSolutionBlock />
      
      <IconWithDescriptionGrid />
      
      <ThreeColumnFeatureBlock />
      
      <div className="bg-[#0E0E0E]">
        <ProcessSection />
      </div>
      
      <CaseStudyHighlightGrid />
      
      <div className="bg-[#0E0E0E]">
        <FAQSection 
          title="Event & Ticketing Solution FAQs"
          subtitle="Get answers to common questions about our event and ticketing platform development services."
          faqs={eventTicketingFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};