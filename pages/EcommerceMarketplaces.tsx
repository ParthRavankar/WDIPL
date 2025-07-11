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
  ShoppingCart, CreditCard, Package, Search, 
  Heart, Users, BarChart3, Target, CheckCircle, 
  Star, Zap, Shield, Globe, Award, Clock
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
            <span className="text-[#E5195E]">eCommerce & Marketplaces</span>
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
                  In a highly competitive digital retail landscape, businesses need more than just an online store; they require platforms that offer seamless user experiences, handle high traffic volumes, integrate complex logistics, and provide robust security for transactions (PCI DSS). Building and scaling multi-vendor marketplaces adds further complexity in managing diverse sellers and customer expectations.
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
                  Our eCommerce & Marketplace Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing custom eCommerce platforms and dynamic online marketplaces. We create solutions that prioritize user experience, robust backend operations, secure payment processing, and scalable architecture, designed to maximize sales, enhance customer loyalty, and efficiently manage diverse product catalogs and vendors.
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
      icon: ShoppingCart,
      title: "Custom Online Storefronts",
      description: "Tailored design and functionality for unique brand experiences, optimizing product discovery and conversion."
    },
    {
      icon: Users,
      title: "Multi-Vendor Marketplace Functionality",
      description: "Comprehensive features for vendor onboarding, individual storefronts, commission management, and order splitting."
    },
    {
      icon: CreditCard,
      title: "Secure Payment Gateways",
      description: "Integration with leading payment providers (e.g., Stripe, PayPal, Razorpay) ensuring PCI DSS compliance and diverse payment options."
    },
    {
      icon: Package,
      title: "Inventory & Order Management",
      description: "Real-time stock tracking, automated order processing, fulfillment, and returns management."
    },
    {
      icon: Heart,
      title: "Customer Personalization & Recommendations",
      description: "AI-driven product recommendations, personalized content, and dynamic pricing based on user behavior."
    },
    {
      icon: Search,
      title: "Search & Filtering Capabilities",
      description: "Advanced search, faceted navigation, and intelligent filtering to help users find products quickly."
    },
    {
      icon: BarChart3,
      title: "CRM & Loyalty Program Integration",
      description: "Seamless connectivity with customer relationship management systems and tools for loyalty programs to boost retention."
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
            Powerful Features for Your eCommerce & Marketplaces
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create compelling online shopping experiences that drive sales and customer loyalty.
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
      icon: Target,
      title: "Conversion-Driven Design",
      description: "Our focus is on optimizing user journeys to maximize sales and minimize abandoned carts."
    },
    {
      icon: Zap,
      title: "Scalable Architecture",
      description: "Building platforms ready for massive traffic spikes (e.g., festive sales) and limitless product catalogs."
    },
    {
      icon: Shield,
      title: "PCI DSS & Security Expertise",
      description: "Ensuring all payment processing and customer data handling adhere to the highest security standards."
    },
    {
      icon: Globe,
      title: "Complex Integrations",
      description: "Seamlessly connecting with ERP, CRM, inventory, shipping, and marketing automation systems."
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
            Why Partner with WDI for eCommerce & Marketplace Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create online commerce platforms that truly drive business success.
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
      title: "Custom Fashion eCommerce Platform with Virtual Try-On",
      problem: "A fashion brand needed a unique online store that offered advanced product visualization and personalization.",
      solution: "WDI built a bespoke eCommerce platform integrated with AR virtual try-on features and an AI-powered styling assistant.",
      results: "Increased online sales by 50% within six months and reduced product returns by 15%.",
      metrics: ["50% ↑ Sales", "15% ↓ Returns", "AR Integration"]
    },
    {
      title: "B2B Construction Materials Marketplace",
      problem: "A client sought to create a specialized online marketplace connecting construction material suppliers with contractors.",
      solution: "Developed a multi-vendor B2B marketplace with advanced search, bulk ordering, quoting features, and integrated logistics.",
      results: "Facilitated transactions totaling $5M+ in its first year, significantly streamlining procurement for contractors.",
      metrics: ["$5M+ Volume", "B2B Focused", "Multi-Vendor"]
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
            eCommerce & Marketplace Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our eCommerce platform implementations that transformed businesses.
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
const ecommerceFAQs = [
  {
    question: "What eCommerce platforms (e.g., Shopify, Magento, custom builds) do you specialize in?",
    answer: "We work with all major platforms including Shopify, Magento, WooCommerce, and BigCommerce, but we specialize in custom-built solutions using modern technologies like React, Node.js, and cloud-native architectures for maximum flexibility and performance."
  },
  {
    question: "How do you ensure scalability for high traffic volumes and large product catalogs?",
    answer: "We implement cloud-native architectures with auto-scaling, CDN integration, database optimization, caching strategies, and microservices architecture. Our platforms are designed to handle millions of products and thousands of concurrent users without performance degradation."
  },
  {
    question: "What security measures do you implement for payment processing (PCI DSS) and customer data?",
    answer: "We ensure full PCI DSS compliance with tokenization, encryption at rest and in transit, secure payment gateway integrations, regular security audits, and implementation of security best practices throughout the development lifecycle."
  },
  {
    question: "Can you integrate with third-party logistics (3PL) providers and ERP systems?",
    answer: "Yes, we have extensive experience integrating with major 3PL providers (FedEx, UPS, DHL), warehouse management systems, and ERP platforms (SAP, Oracle, NetSuite) to create seamless order fulfillment workflows."
  },
  {
    question: "Do you offer solutions for customer personalization and loyalty programs?",
    answer: "Absolutely! We implement AI-driven recommendation engines, personalized shopping experiences, dynamic pricing, and comprehensive loyalty program features including points systems, tier-based rewards, and targeted promotions."
  }
];

export const EcommerceMarketplaces = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Commerce & Consumer"
        title="eCommerce & Marketplaces"
        description="Build high-performing, scalable, and conversion-optimized eCommerce websites and multi-vendor marketplaces that drive sales and foster growth."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View eCommerce Case Studies",
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
          title="eCommerce & Marketplace FAQs"
          subtitle="Get answers to common questions about our eCommerce and marketplace development services."
          faqs={ecommerceFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};