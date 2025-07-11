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
  Smartphone, Truck, MapPin, CreditCard, Star, 
  Bell, BarChart3, Target, CheckCircle, 
  Users, Clock, Zap, Globe, Award
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
            <span className="text-[#E5195E]">Food Ordering & Delivery</span>
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
                  The food ordering and delivery landscape is highly competitive and demands real-time order management, efficient logistics, and intuitive user experiences for both customers and restaurants. Businesses face hurdles with scalability during peak hours, managing diverse menus, and integrating with payment and delivery systems.
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
                  Our Food Ordering & Delivery Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in building end-to-end food ordering and delivery platforms. We create solutions that encompass customer-facing apps, restaurant management systems, and driver logistics tools, all designed for seamless order flow, real-time tracking, and optimal operational efficiency.
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
      icon: Smartphone,
      title: "Customer Ordering Apps (Web & Mobile)",
      description: "Intuitive menu browsing, customizable orders, secure payment options, and real-time order tracking."
    },
    {
      icon: BarChart3,
      title: "Restaurant Management Dashboards",
      description: "Tools for menu updates, order acceptance/rejection, kitchen display systems (KDS), and performance analytics."
    },
    {
      icon: Truck,
      title: "Driver/Delivery Partner Apps",
      description: "Route optimization, real-time pick-up/delivery notifications, earning tracking, and customer communication features."
    },
    {
      icon: MapPin,
      title: "Real-time GPS Tracking",
      description: "Live tracking of orders from preparation to delivery, enhancing customer satisfaction and transparency."
    },
    {
      icon: CreditCard,
      title: "Secure Payment Integrations",
      description: "Support for various payment methods including credit cards, digital wallets, and loyalty points."
    },
    {
      icon: Star,
      title: "Personalized Recommendations",
      description: "AI-driven suggestions for dishes, restaurants, and promotions based on user preferences and order history."
    },
    {
      icon: Bell,
      title: "Loyalty Programs & Promotions",
      description: "Built-in features for discounts, coupon codes, and loyalty points to drive repeat business."
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
            Powerful Features for Your Food Ordering & Delivery Platforms
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create seamless food delivery experiences that satisfy customers and optimize operations.
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
      icon: Users,
      title: "End-to-End Ecosystem Expertise",
      description: "Developing seamless solutions for customers, restaurants, and delivery fleets from a single partner."
    },
    {
      icon: Zap,
      title: "Scalability for Peak Demand",
      description: "Building platforms designed to handle massive order volumes during lunch rushes or dinner times without issues."
    },
    {
      icon: MapPin,
      title: "Real-time Location Intelligence",
      description: "Expert integration of mapping, GPS, and routing algorithms for efficient delivery."
    },
    {
      icon: Smartphone,
      title: "Intuitive UX for All Users",
      description: "Creating user-friendly interfaces for diverse user groups, from busy restaurant staff to hungry customers."
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
            Why Partner with WDI for Food Ordering & Delivery Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create food delivery platforms that truly satisfy all stakeholders.
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
      title: "Hyperlocal Multi-Restaurant Delivery Platform",
      problem: "A startup aimed to launch a fast, reliable hyperlocal food delivery service connecting multiple restaurants with customers.",
      solution: "WDI built a comprehensive platform comprising customer, restaurant, and driver apps with real-time tracking, dynamic pricing, and diverse payment options.",
      results: "Facilitated over 5,000 orders per day within the first year of operation, achieving a 98% on-time delivery rate.",
      metrics: ["5K+ Orders/Day", "98% On-Time", "Multi-Restaurant"]
    },
    {
      title: "Restaurant Chain's Custom Online Ordering System",
      problem: "A large restaurant chain needed to reduce reliance on third-party aggregators and build its own branded online ordering system.",
      solution: "Developed a custom web and mobile ordering system integrated directly with their kitchen display systems and loyalty program.",
      results: "Increased direct online orders by 40% and reduced commission fees by 20%, boosting profitability.",
      metrics: ["40% ↑ Orders", "20% ↓ Fees", "Direct Sales"]
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
            Food Ordering & Delivery Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our food delivery platform implementations that transformed businesses.
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
const foodDeliveryFAQs = [
  {
    question: "How do you ensure real-time order tracking and delivery updates?",
    answer: "We implement GPS-based tracking systems with real-time updates sent via push notifications and SMS. Our platforms integrate with mapping services to provide accurate delivery estimates and live location sharing between customers, restaurants, and delivery partners."
  },
  {
    question: "What are your strategies for scalability during peak hours (e.g., lunch, dinner)?",
    answer: "We design cloud-native architectures with auto-scaling capabilities, implement load balancing, use CDNs for faster content delivery, and optimize database queries. Our systems can handle 10x traffic spikes without performance degradation."
  },
  {
    question: "Can you integrate with existing POS (Point of Sale) systems and kitchen displays?",
    answer: "Yes, we have extensive experience integrating with major POS systems like Square, Toast, Clover, and custom solutions. We also support kitchen display system (KDS) integrations for seamless order management workflows."
  },
  {
    question: "What payment gateway integrations do you offer for food ordering apps?",
    answer: "We integrate with all major payment gateways including Stripe, PayPal, Razorpay, Square, and local payment providers. We also support digital wallets, loyalty points, and split payment options for enhanced user convenience."
  },
  {
    question: "Do you develop solutions for multi-restaurant aggregators or single-restaurant chains?",
    answer: "We develop both! Our flexible platform architecture supports single-restaurant branded apps with custom features, as well as multi-vendor marketplace platforms with vendor management, commission tracking, and order routing capabilities."
  }
];

export const FoodOrderingDelivery = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Commerce & Consumer"
        title="Food Ordering & Delivery"
        description="Launch or optimize your food business with seamless, intuitive, and efficient online ordering and delivery platforms for restaurants, aggregators, and dark kitchens."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View FoodTech Case Studies",
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
          title="Food Ordering & Delivery FAQs"
          subtitle="Get answers to common questions about our food delivery platform development services."
          faqs={foodDeliveryFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};