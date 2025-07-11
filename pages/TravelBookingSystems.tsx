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
  Globe, Shield, Target, CheckCircle, Star, 
  Zap, Database, Clock, Award
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
            <span className="text-[#E5195E]">Travel & Booking Systems</span>
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
                  The travel industry demands complex systems that can manage vast inventories (flights, hotels, activities), offer real-time availability, handle secure payments, and provide a seamless, personalized booking experience. Challenges include integrating with diverse global distribution systems (GDS), ensuring data accuracy, and managing fluctuating demand.
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
                  Our Travel & Booking System Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing robust and user-centric travel and booking platforms. We create solutions for flight, hotel, and tour reservations, car rentals, and package holiday bookings, focusing on powerful search capabilities, secure payment processing, seamless integrations, and intuitive user experiences to maximize conversions and operational efficiency.
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
      title: "Comprehensive Search & Filtering",
      description: "Advanced search engines for flights, hotels, tours, and more, with granular filtering options."
    },
    {
      icon: Clock,
      title: "Real-time Availability & Pricing",
      description: "Live updates on inventory and dynamic pricing from various suppliers and GDSs."
    },
    {
      icon: CreditCard,
      title: "Secure Booking & Payment Gateway",
      description: "Seamless and secure checkout processes with integration of diverse payment methods (credit cards, digital wallets)."
    },
    {
      icon: Users,
      title: "User Accounts & Booking Management",
      description: "Personalized dashboards for users to view, manage, and modify their bookings."
    },
    {
      icon: Star,
      title: "Personalized Recommendations",
      description: "AI-driven suggestions for destinations, hotels, and activities based on user preferences and past travel."
    },
    {
      icon: Globe,
      title: "Multi-Currency & Multi-Language Support",
      description: "Global readiness with support for various currencies and languages to cater to diverse users."
    },
    {
      icon: Database,
      title: "Integrations with GDS/APIs",
      description: "Seamless connectivity with Global Distribution Systems (Amadeus, Sabre), hotel APIs, and other travel service providers."
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
            Powerful Features for Your Travel & Booking Systems
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create seamless travel booking experiences that maximize conversions and customer satisfaction.
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
      icon: Globe,
      title: "Deep TravelTech Expertise",
      description: "Years of experience navigating the complexities of GDS, APIs, and the unique demands of the travel sector."
    },
    {
      icon: Zap,
      title: "Performance & Scalability",
      description: "Building highly optimized systems that can handle millions of searches and bookings without compromising speed."
    },
    {
      icon: Shield,
      title: "Robust Security for Payments",
      description: "Ensuring PCI DSS compliance and advanced fraud detection for all financial transactions."
    },
    {
      icon: Users,
      title: "Intuitive User Experience",
      description: "Designing user-friendly interfaces that simplify complex booking processes, enhancing customer satisfaction and loyalty."
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
            Why Partner with WDI for Travel & Booking System Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create travel platforms that truly serve modern travelers' needs.
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
      title: "Flight & Hotel Booking Aggregator Platform",
      problem: "A travel startup aimed to create a comprehensive platform aggregating flights and hotels from multiple providers with competitive pricing.",
      solution: "WDI developed a robust booking engine with advanced search, real-time comparison, and seamless GDS integrations.",
      results: "Processed over 1 million bookings in its first year, establishing the client as a competitive online travel agency.",
      metrics: ["1M+ Bookings", "GDS Integration", "Multi-Provider"]
    },
    {
      title: "Custom Tour & Activity Booking System",
      problem: "A tour operator needed an intuitive online system for customers to browse, book, and manage adventure tours and activities.",
      solution: "Built a custom booking platform with interactive itinerary builders, dynamic pricing, and secure payment processing.",
      results: "Increased direct bookings by 30% and reduced manual booking effort by 25%.",
      metrics: ["30% ↑ Bookings", "25% ↓ Manual Work", "Tour Operator"]
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
            Travel & Booking System Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our travel booking platform implementations that transformed travel businesses.
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
const travelBookingFAQs = [
  {
    question: "What are your capabilities for integrating with GDS (Global Distribution Systems) like Amadeus or Sabre?",
    answer: "We have extensive experience integrating with major GDS platforms including Amadeus, Sabre, and Travelport. Our team handles complex API integrations, real-time inventory management, and seamless data synchronization to ensure accurate availability and pricing information."
  },
  {
    question: "How do you ensure real-time availability and dynamic pricing for bookings?",
    answer: "We implement robust caching strategies, real-time API connections with suppliers, and intelligent data management systems. Our platforms handle millions of price and availability checks while maintaining sub-second response times through optimized database queries and CDN integration."
  },
  {
    question: "What security measures do you implement for online payments and sensitive customer data?",
    answer: "We ensure full PCI DSS compliance with end-to-end encryption, tokenization, secure API communications, and regular security audits. All customer data is protected with industry-standard security protocols and compliance frameworks."
  },
  {
    question: "Can you develop solutions for specific travel niches (e.g., corporate travel, adventure tours, cruises)?",
    answer: "Absolutely! We specialize in creating tailored solutions for various travel verticals including corporate travel management, adventure tourism, cruise bookings, luxury travel, and group travel. Each solution is customized to meet specific industry requirements and user behaviors."
  },
  {
    question: "Do you offer post-booking management features like itinerary changes and cancellations?",
    answer: "Yes, our platforms include comprehensive post-booking management with features for itinerary modifications, cancellations, refund processing, travel insurance integration, and automated customer communications. We also provide mobile-friendly booking management interfaces."
  }
];

export const TravelBookingSystems = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Commerce & Consumer"
        title="Travel & Booking Systems"
        description="Revolutionize travel experiences and streamline reservations with intuitive, secure, and highly efficient booking platforms for flights, hotels, tours, and more."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View TravelTech Case Studies",
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
          title="Travel & Booking System FAQs"
          subtitle="Get answers to common questions about our travel booking platform development services."
          faqs={travelBookingFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};