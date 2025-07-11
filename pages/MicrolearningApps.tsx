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
  Smartphone, Gamepad2, Brain, Download, BarChart3, 
  Bell, FileText, Target, CheckCircle, Star, 
  Zap, Layers, Users, Award, Clock
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
            <span className="text-[#E5195E]">Microlearning Apps</span>
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
                  In today's fast-paced world, learners often lack time for lengthy courses. The challenge is to deliver impactful knowledge in short bursts, maintain engagement, and ensure retention on mobile devices. Organizations also need to effectively manage and deliver a vast library of small learning units.
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
                  Our Microlearning App Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in building dynamic microlearning applications that make learning accessible, engaging, and efficient. We create mobile-first solutions for quick skill acquisition, knowledge reinforcement, and on-demand information delivery, leveraging gamification and intuitive design to maximize learner engagement and retention.
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
      icon: FileText,
      title: "Bite-Sized Content Delivery",
      description: "Short videos, interactive quizzes, flashcards, infographics, and quick reads for on-the-go learning."
    },
    {
      icon: Gamepad2,
      title: "Gamification & Rewards",
      description: "Points, badges, leaderboards, streaks, and challenges to motivate learners and encourage daily engagement."
    },
    {
      icon: Brain,
      title: "Personalized Learning Paths",
      description: "Adaptive content recommendations based on user performance, learning goals, and knowledge gaps."
    },
    {
      icon: Download,
      title: "Offline Access",
      description: "Ability to download and access content without an internet connection, ideal for remote learners."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking & Analytics",
      description: "Intuitive dashboards for users to monitor their learning progress and for administrators to track engagement and mastery."
    },
    {
      icon: Bell,
      title: "Push Notifications & Reminders",
      description: "Timely alerts to encourage consistent engagement and learning habits."
    },
    {
      icon: Smartphone,
      title: "Multi-Format Content Support",
      description: "Support for various media types including text, images, video, audio, and interactive elements."
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
            Powerful Features for Your Microlearning Apps
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Essential features to create engaging, efficient, and addictive microlearning experiences.
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
      title: "Engagement-First Design",
      description: "Expertise in creating addictive and motivating learning experiences through gamification and intuitive UI."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Optimization",
      description: "Apps are meticulously designed for optimal performance and user experience on smartphones and tablets."
    },
    {
      icon: Brain,
      title: "Content Strategy Integration",
      description: "Support for structuring and delivering your learning content effectively in a microlearning format."
    },
    {
      icon: Layers,
      title: "Scalable Content Management",
      description: "Building robust backend systems to easily manage, update, and deploy thousands of microlearning modules."
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
            Why Partner with WDI for Microlearning App Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise in mobile learning to create apps that truly engage and educate.
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
      title: "Sales Training Microlearning App for Enterprise",
      problem: "A large sales organization struggled with engaging its dispersed sales force in ongoing product training.",
      solution: "WDI developed a microlearning app delivering daily bite-sized sales tips, product updates, and interactive quizzes.",
      results: "Increased sales team engagement by 45% and improved product knowledge retention by 20%.",
      metrics: ["45% ↑ Engagement", "20% ↑ Retention", "Enterprise Scale"]
    },
    {
      title: "Language Learning Flashcard & Quiz App",
      problem: "A language learning company wanted a mobile app for quick, effective vocabulary and grammar practice.",
      solution: "Built a gamified microlearning app with adaptive flashcards, short quizzes, and daily challenges.",
      results: "Achieved over 100,000 downloads in its first year and a 90% positive rating for its effectiveness.",
      metrics: ["100K+ Downloads", "90% Rating", "Language Learning"]
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
            Microlearning App Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our microlearning app implementations that transformed how people learn.
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
const microlearningFAQs = [
  {
    question: "What are the optimal content formats for microlearning apps?",
    answer: "Optimal formats include short videos (2-5 minutes), interactive quizzes, flashcards, infographics, animated explanations, audio snippets, and quick-read articles. We focus on bite-sized content that can be consumed in 5-10 minute sessions for maximum retention and engagement."
  },
  {
    question: "How do you ensure learner engagement and retention in microlearning?",
    answer: "We implement gamification elements like streaks, points, badges, and leaderboards. Push notifications remind users to maintain learning habits, while adaptive algorithms personalize content based on performance. We also use spaced repetition techniques to enhance long-term retention."
  },
  {
    question: "Can your microlearning apps integrate with existing LMS platforms?",
    answer: "Yes, we provide seamless integration with major LMS platforms through APIs and standard protocols like SCORM and xAPI (Tin Can). This enables progress tracking, grade passback, and unified reporting across your learning ecosystem."
  },
  {
    question: "What gamification features do you typically include?",
    answer: "Our apps include points systems, achievement badges, learning streaks, leaderboards, daily challenges, progress bars, unlockable content, social sharing of achievements, and reward systems. These features are designed to create habit-forming learning experiences."
  },
  {
    question: "How do you handle offline access for content in microlearning apps?",
    answer: "We implement smart content caching and offline sync capabilities. Users can download learning modules for offline access, with progress syncing when connectivity returns. This ensures continuous learning regardless of internet availability."
  }
];

export const MicrolearningApps = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Learning & Education"
        title="Microlearning Apps"
        description="Deliver bite-sized, engaging, and highly effective learning content on-the-go with custom microlearning mobile applications."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View Microlearning Case Studies",
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
          title="Microlearning App FAQs"
          subtitle="Get answers to common questions about our microlearning app development services."
          faqs={microlearningFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};