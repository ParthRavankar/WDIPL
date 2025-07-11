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
  Users, MessageSquare, Heart, Share2, Bell, 
  Shield, Zap, Target, CheckCircle, Star, 
  Globe, Camera, Clock, Award, Brain
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
            <span className="text-[#E5195E]">Social Platforms & Networks</span>
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
                  Building successful social platforms requires managing massive user bases, handling real-time interactions, ensuring content moderation at scale, and maintaining user engagement. Challenges include data privacy compliance, preventing misinformation, managing viral content loads, and creating meaningful connections in digital spaces.
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
                  Our Social Platform & Network Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in developing dynamic and engaging social platforms and networks. We create solutions for community building, content sharing, real-time messaging, and social commerce, focusing on user engagement, scalable architecture, robust moderation tools, and comprehensive privacy controls to foster meaningful digital communities.
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
      icon: Users,
      title: "User Profiles & Social Graphs",
      description: "Comprehensive user profiles, friend/follower systems, and sophisticated relationship mapping for meaningful connections."
    },
    {
      icon: MessageSquare,
      title: "Real-time Messaging & Communication",
      description: "Instant messaging, group chats, voice/video calls, and threaded discussions with end-to-end encryption."
    },
    {
      icon: Camera,
      title: "Content Creation & Sharing Tools",
      description: "Rich media posting, story features, live streaming capabilities, and collaborative content creation tools."
    },
    {
      icon: Heart,
      title: "Engagement & Interaction Features",
      description: "Likes, comments, shares, reactions, polls, and gamification elements to boost user participation."
    },
    {
      icon: Bell,
      title: "Advanced Notification Systems",
      description: "Smart, personalized notifications across web and mobile with granular user control and preference settings."
    },
    {
      icon: Shield,
      title: "Content Moderation & Safety",
      description: "AI-powered content filtering, community guidelines enforcement, reporting systems, and user safety tools."
    },
    {
      icon: Brain,
      title: "AI-Powered Feed & Discovery",
      description: "Intelligent content curation, personalized recommendations, and advanced discovery algorithms."
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
            Powerful Features for Your Social Platforms & Networks
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create engaging social experiences that connect people and build thriving communities.
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
      title: "Scalable Real-time Architecture",
      description: "Building systems that handle millions of concurrent users with real-time interactions and instant content delivery."
    },
    {
      icon: Shield,
      title: "Privacy & Safety First",
      description: "Implementing comprehensive data protection, content moderation, and user safety measures from the ground up."
    },
    {
      icon: Brain,
      title: "Engagement & Growth Optimization",
      description: "Leveraging AI and behavioral analytics to maximize user engagement, retention, and organic growth."
    },
    {
      icon: Globe,
      title: "Community-Centric Design",
      description: "Designing platforms that foster meaningful connections and build thriving, engaged digital communities."
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
            Why Partner with WDI for Social Platform Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create social platforms that truly connect people and build lasting communities.
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
      title: "Professional Networking Platform for Industry Experts",
      problem: "A client wanted to create a LinkedIn-style platform focused on a specific industry vertical with enhanced collaboration features.",
      solution: "WDI built a comprehensive social platform with professional profiles, industry-specific groups, knowledge sharing, and networking tools.",
      results: "Achieved 100,000+ active professionals in the first year with high engagement rates and successful monetization through premium features.",
      metrics: ["100K+ Users", "High Engagement", "Professional Network"]
    },
    {
      title: "Community-Driven Content Sharing Platform",
      problem: "A startup needed a Reddit-style platform with improved content discovery and community moderation for niche interests.",
      solution: "Developed a scalable social platform with AI-powered content curation, advanced moderation tools, and community-driven governance.",
      results: "Grew to 50,000+ active communities with 95% user satisfaction and successful integration of creator monetization features.",
      metrics: ["50K+ Communities", "95% Satisfaction", "Creator Economy"]
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
            Social Platform & Network Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our social platform implementations that built thriving digital communities.
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
const socialPlatformFAQs = [
  {
    question: "How do you ensure scalability for platforms with millions of users and real-time interactions?",
    answer: "We implement microservices architecture, real-time messaging systems (WebSocket, Server-Sent Events), distributed databases, CDN integration, and auto-scaling infrastructure. Our platforms are designed to handle millions of concurrent users with minimal latency."
  },
  {
    question: "What content moderation and safety features do you implement?",
    answer: "We build comprehensive moderation systems including AI-powered content filtering, automated spam detection, community reporting tools, human moderator dashboards, and customizable community guidelines enforcement with appeals processes."
  },
  {
    question: "How do you handle data privacy and compliance (GDPR, CCPA) for social platforms?",
    answer: "We implement privacy-by-design principles with granular user controls, data anonymization, consent management, right-to-deletion features, and comprehensive audit trails. All platforms are built with GDPR and CCPA compliance from the ground up."
  },
  {
    question: "Can you integrate recommendation engines and personalization features?",
    answer: "Yes, we develop sophisticated AI-powered recommendation systems using machine learning algorithms that analyze user behavior, social graphs, and content preferences to deliver personalized feeds and discovery experiences."
  },
  {
    question: "What monetization features can you implement for social platforms?",
    answer: "We support various monetization models including subscription tiers, creator funds, in-app purchases, advertising integration, sponsored content, premium features, virtual gifts, and marketplace functionality for social commerce."
  }
];

export const SocialPlatformsNetworks = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Media & Community"
        title="Social Platforms & Networks"
        description="Build engaging, scalable, and safe social platforms that connect people, foster communities, and drive meaningful interactions across digital spaces."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View Social Platform Case Studies",
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
          title="Social Platform & Network FAQs"
          subtitle="Get answers to common questions about our social platform development services."
          faqs={socialPlatformFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};