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
  Trophy, Users, Play, BarChart3, MessageSquare, 
  Ticket, Star, Target, CheckCircle, Zap, 
  Globe, Clock, Award, Camera, Bell
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
            <span className="text-[#E5195E]">Sports & Fan Engagement</span>
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
                  Sports organizations need to engage fans across multiple touchpoints - from live games to digital platforms. Challenges include creating immersive viewing experiences, managing ticketing and merchandise, providing real-time statistics, building fan communities, and monetizing content while competing with major streaming platforms and social networks.
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
                  Our Sports & Fan Engagement Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing comprehensive sports and fan engagement platforms. We create solutions for live streaming, interactive viewing experiences, fantasy sports, fan communities, ticketing, and merchandise, focusing on real-time data integration, social features, and immersive content delivery to maximize fan loyalty and revenue opportunities.
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
      icon: Play,
      title: "Live Streaming & Broadcasting",
      description: "High-quality live sports streaming with multi-camera angles, instant replay, and interactive viewing features."
    },
    {
      icon: BarChart3,
      title: "Real-time Statistics & Analytics",
      description: "Live game statistics, player performance metrics, team analytics, and predictive insights for enhanced viewing."
    },
    {
      icon: Users,
      title: "Fantasy Sports & Gaming",
      description: "Fantasy league management, draft tools, scoring systems, and social competition features for fan engagement."
    },
    {
      icon: MessageSquare,
      title: "Fan Communities & Social Features",
      description: "Team-specific forums, fan chat rooms, social sharing, and user-generated content platforms."
    },
    {
      icon: Ticket,
      title: "Ticketing & Event Management",
      description: "Season tickets, single game sales, seating selection, mobile tickets, and event check-in systems."
    },
    {
      icon: Star,
      title: "Fan Loyalty & Rewards Programs",
      description: "Points systems, exclusive content access, merchandise discounts, and VIP experience rewards."
    },
    {
      icon: Camera,
      title: "Interactive Content & AR/VR",
      description: "360-degree viewing, augmented reality features, virtual stadium tours, and immersive fan experiences."
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
            Powerful Features for Your Sports & Fan Engagement
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create immersive sports experiences that engage fans and drive loyalty.
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
      title: "Real-time Sports Data Integration",
      description: "Expertise in integrating with sports data providers for live scores, statistics, and performance metrics."
    },
    {
      icon: Users,
      title: "Fan Community Building",
      description: "Creating platforms that foster passionate fan communities and meaningful interactions around shared team loyalty."
    },
    {
      icon: Trophy,
      title: "Multi-Sport Platform Expertise",
      description: "Experience across various sports verticals from professional leagues to amateur competitions and fantasy sports."
    },
    {
      icon: Globe,
      title: "Scalable Event Management",
      description: "Building systems that handle everything from local games to major sporting events with millions of viewers."
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
            Why Partner with WDI for Sports & Fan Engagement Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create sports platforms that truly engage fans and drive revenue.
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
      title: "Professional Basketball League Fan App",
      problem: "A basketball league needed a comprehensive fan engagement platform with live streaming, statistics, and social features.",
      solution: "WDI developed a multi-platform app with live game streaming, real-time statistics, fantasy league integration, and fan community features.",
      results: "Increased fan engagement by 40% and generated $2M+ in additional revenue through premium subscriptions and merchandise.",
      metrics: ["40% ↑ Engagement", "$2M+ Revenue", "Basketball League"]
    },
    {
      title: "Youth Sports Tournament Management Platform",
      problem: "A sports organization needed to streamline tournament management, team registration, and parent communication for youth leagues.",
      solution: "Built a comprehensive platform with tournament brackets, team management, live scoring, and parent notification systems.",
      results: "Managed 500+ tournaments annually with 95% user satisfaction and reduced administrative workload by 60%.",
      metrics: ["500+ Tournaments", "95% Satisfaction", "Youth Sports"]
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
            Sports & Fan Engagement Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our sports platform implementations that transformed fan experiences.
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
const sportsFanEngagementFAQs = [
  {
    question: "How do you integrate real-time sports data and statistics into platforms?",
    answer: "We integrate with major sports data providers like Stats Perform, ESPN APIs, and league-specific data feeds. Our platforms handle real-time score updates, player statistics, and game events with minimal latency using optimized data pipelines and caching strategies."
  },
  {
    question: "What features do you implement for fantasy sports and gaming platforms?",
    answer: "We build comprehensive fantasy sports platforms with draft systems, automated scoring, trade management, league administration, social features, and compliance with relevant gaming regulations. We also integrate with sports betting APIs where legally permitted."
  },
  {
    question: "Can you develop live streaming solutions for sports events?",
    answer: "Yes, we develop scalable live streaming platforms with adaptive bitrate streaming, multi-camera angles, instant replay, commentary integration, and interactive features like live polls and chat. We ensure compliance with broadcasting rights and geo-restrictions."
  },
  {
    question: "How do you handle ticketing and event management for sports venues?",
    answer: "We create comprehensive ticketing solutions with dynamic pricing, seat selection, season ticket management, mobile ticketing, access control integration, and secondary market features. Our platforms integrate with venue management and CRM systems."
  },
  {
    question: "What fan engagement and loyalty features do you typically implement?",
    answer: "We implement points-based loyalty programs, exclusive content access, merchandise integration, social sharing rewards, gamification elements, VIP experiences, and personalized fan journeys based on team preferences and engagement history."
  }
];

export const SportsFanEngagement = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Media & Community"
        title="Sports & Fan Engagement"
        description="Create immersive sports experiences and build passionate fan communities with comprehensive platforms for live streaming, fantasy sports, and fan interaction."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View Sports Platform Case Studies",
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
          title="Sports & Fan Engagement FAQs"
          subtitle="Get answers to common questions about our sports platform development services."
          faqs={sportsFanEngagementFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};