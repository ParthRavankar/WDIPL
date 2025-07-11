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
  Video, Users, BookOpen, ClipboardCheck, MessageSquare, 
  FolderOpen, BarChart3, Target, CheckCircle, Star, 
  Monitor, Layers, Zap, Globe, Award, Clock
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
            <span className="text-[#E5195E]">Virtual Classrooms & LMS</span>
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
                  Effective online learning requires more than just video calls; it demands interactive virtual environments, robust course management, and reliable infrastructure to support large numbers of users. Institutions often struggle with ensuring engagement in remote settings, managing diverse learning content, and providing seamless administrative functionalities.
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
                  Our Virtual Classrooms & LMS Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in building comprehensive Virtual Classroom and Learning Management Systems (LMS) that replicate and enhance the in-person learning experience. We create platforms for live interactive sessions, course delivery, student tracking, and administrative tasks, ensuring a fluid, engaging, and efficient educational environment.
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
      icon: Video,
      title: "Live Interactive Virtual Classrooms",
      description: "High-definition video conferencing, interactive whiteboards, screen sharing, and real-time polling."
    },
    {
      icon: BookOpen,
      title: "Course Creation & Management",
      description: "Intuitive tools for educators to build, organize, and deliver engaging courses with multimedia content."
    },
    {
      icon: Users,
      title: "Student Enrollment & Progress Tracking",
      description: "Automated enrollment processes, attendance tracking, and detailed progress reports for students and instructors."
    },
    {
      icon: ClipboardCheck,
      title: "Assignment & Assessment Tools",
      description: "Integrated modules for submitting assignments, online quizzes, automated grading, and feedback loops."
    },
    {
      icon: MessageSquare,
      title: "Discussion Forums & Collaboration",
      description: "Dedicated spaces for student-to-student and student-to-instructor communication and group projects."
    },
    {
      icon: FolderOpen,
      title: "Content Library & Resource Management",
      description: "Centralized repository for learning materials, documents, videos, and external links."
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics for Administrators",
      description: "Comprehensive dashboards for monitoring platform usage, course effectiveness, and student performance trends."
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
            Powerful Features for Your Virtual Classrooms & LMS
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to create immersive virtual learning environments that engage students and empower educators.
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
      icon: Monitor,
      title: "Deep E-learning Platform Expertise",
      description: "Years of experience in building and scaling robust platforms for online education and training."
    },
    {
      icon: Layers,
      title: "Seamless Interactivity",
      description: "Focusing on features that maximize student engagement in a virtual setting, from live polls to breakout rooms."
    },
    {
      icon: Zap,
      title: "Scalability for High Concurrency",
      description: "Designing systems to handle a large number of simultaneous users, ensuring stable performance during peak times."
    },
    {
      icon: Globe,
      title: "Customization & Integration",
      description: "Tailoring the LMS to your specific pedagogical needs and integrating with existing SIS or HR systems."
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
            Why Partner with WDI for Virtual Classrooms & LMS Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our expertise to create virtual learning environments that truly engage and educate.
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
      title: "Scalable Corporate Training LMS",
      problem: "A multinational corporation needed a centralized, scalable LMS to deliver mandatory training and track employee certifications globally.",
      solution: "WDI developed a custom LMS with integrated virtual classroom features, automated course assignments, and comprehensive reporting.",
      results: "Reduced training costs by 30% and improved employee compliance tracking by 95% across all branches.",
      metrics: ["30% ↓ Costs", "95% ↑ Compliance", "Global Scale"]
    },
    {
      title: "Interactive University Virtual Learning Environment",
      problem: "A university sought to enhance its online degree programs with more interactive virtual classroom experiences and better student support.",
      solution: "Built a bespoke virtual learning environment with advanced interactive whiteboards, breakout rooms, and AI-powered discussion moderation.",
      results: "Increased student engagement in online courses by 20% and received excellent feedback on the interactive features.",
      metrics: ["20% ↑ Engagement", "University Scale", "AI-Powered"]
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
            Virtual Classrooms & LMS Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our virtual learning platform implementations.
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
const virtualClassroomFAQs = [
  {
    question: "What are the key features of your virtual classroom solutions for interactivity?",
    answer: "Our virtual classrooms include HD video conferencing, interactive whiteboards, screen sharing, real-time polls, breakout rooms, hand-raising features, chat functionality, and collaborative document editing to maximize student engagement and participation."
  },
  {
    question: "How do you ensure scalability for a large number of concurrent users in an LMS?",
    answer: "We design our LMS platforms with cloud-native architecture, load balancing, auto-scaling capabilities, and optimized databases. Our systems can handle thousands of concurrent users with CDN integration for global content delivery and minimal latency."
  },
  {
    question: "Can your LMS integrate with existing student information systems (SIS)?",
    answer: "Yes, we provide seamless integration with major SIS platforms through APIs and standard protocols. This enables automatic enrollment, grade passback, single sign-on (SSO), and synchronized student data across systems."
  },
  {
    question: "What are your strategies for secure content delivery and user data privacy in LMS platforms?",
    answer: "We implement end-to-end encryption, secure video streaming protocols, role-based access controls, FERPA/GDPR compliance measures, and regular security audits. All content delivery uses secure CDNs with access controls and authentication."
  },
  {
    question: "Do you offer solutions for gamification and personalized learning paths within an LMS?",
    answer: "Yes, we integrate gamification elements like badges, points, leaderboards, and achievement systems. Our AI-driven personalization engines create adaptive learning paths based on student performance, preferences, and learning objectives."
  }
];

export const VirtualClassroomsLMS = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Learning & Education"
        title="Virtual Classrooms & LMS"
        description="Deliver engaging online learning and streamline educational management with robust, interactive, and scalable Virtual Classrooms and Learning Management Systems."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View LMS Case Studies",
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
          title="Virtual Classrooms & LMS FAQs"
          subtitle="Get answers to common questions about our virtual learning platform development services."
          faqs={virtualClassroomFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};