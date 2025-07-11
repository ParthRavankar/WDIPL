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
  BookOpen, Users, Shield, Accessibility, BarChart3, 
  MessageSquare, Calendar, CheckCircle, Star, ArrowRight,
  GraduationCap, Brain, Target, Zap, Award, Clock
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
            <span className="text-[#E5195E]">EdTech Platforms</span>
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
                  The education sector demands digital solutions that are not only engaging for diverse learners but also accessible, scalable, and compliant with student data privacy (FERPA, GDPR). Institutions often struggle with integrating new technologies into existing systems and ensuring effective learning outcomes.
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
                  Our EdTech Platform Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  WDI specializes in building cutting-edge EdTech platforms that enhance learning outcomes and optimize educational delivery. We create solutions for e-learning content delivery, student assessment, administrative management, and collaborative learning, focusing on user engagement, accessibility, and robust data security.
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
      icon: BookOpen,
      title: "Interactive E-learning Content Delivery",
      description: "Rich media support, interactive modules, quizzes, and simulations for engaging learning experiences."
    },
    {
      icon: Brain,
      title: "Personalized Learning Paths",
      description: "AI-driven adaptive learning modules and customized content recommendations based on student progress and needs."
    },
    {
      icon: BarChart3,
      title: "Student Assessment & Analytics",
      description: "Tools for quizzes, assignments, automated grading, and comprehensive analytics on student performance."
    },
    {
      icon: GraduationCap,
      title: "Course & Curriculum Management",
      description: "Intuitive interfaces for educators to create, organize, and deliver engaging courses and learning materials."
    },
    {
      icon: Users,
      title: "Student Information System (SIS) Integration",
      description: "Seamless connectivity with existing SIS for student records, enrollment, and administrative data."
    },
    {
      icon: MessageSquare,
      title: "Collaboration & Communication Tools",
      description: "Integrated forums, chat, and virtual group work features for enhanced peer and instructor interaction."
    },
    {
      icon: Accessibility,
      title: "Accessibility (WCAG) Compliance",
      description: "Ensuring platforms are usable by all learners, including those with disabilities, following Web Content Accessibility Guidelines."
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
            Powerful Features for Your EdTech Platforms
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools and capabilities to create engaging, effective, and accessible educational experiences.
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
      icon: GraduationCap,
      title: "Pedagogically Sound Design",
      description: "Our solutions are built with a deep understanding of learning theories and effective educational practices."
    },
    {
      icon: Shield,
      title: "Student Data Privacy Experts",
      description: "Strict adherence to FERPA, GDPR, and other student data protection regulations for secure platforms."
    },
    {
      icon: Zap,
      title: "Scalable for All Sizes",
      description: "Designing platforms that can effortlessly support a few dozen students or hundreds of thousands, from K-12 to enterprise training."
    },
    {
      icon: Accessibility,
      title: "Accessibility-First Approach",
      description: "Ensuring WCAG compliance and inclusive design from the outset, making learning truly accessible to everyone."
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
            Why Partner with WDI for EdTech Platform Development?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage our specialized expertise to create educational technology solutions that truly enhance learning outcomes.
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
      title: "Personalized K-12 Learning & Assessment Platform",
      problem: "A school district needed a comprehensive platform to deliver personalized learning content and track student progress effectively.",
      solution: "WDI developed an adaptive learning platform with AI-driven content recommendations, interactive assessments, and detailed analytics for teachers.",
      results: "Improved student engagement by 30% and demonstrated a 10% increase in average test scores in pilot schools.",
      metrics: ["30% ↑ Engagement", "10% ↑ Test Scores", "K-12 District"]
    },
    {
      title: "Global Professional Certification E-learning Platform",
      problem: "An international professional body needed a robust platform to deliver online certification courses to a global audience.",
      solution: "Built a scalable e-learning platform with multi-language support, secure assessment modules, and integrated certification management.",
      results: "Successfully managed 50,000+ active learners worldwide and increased certification enrollments by 25%.",
      metrics: ["50K+ Learners", "25% ↑ Enrollments", "Global Reach"]
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
            EdTech Platform Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from our EdTech platform implementations that transformed educational experiences.
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
const edtechFAQs = [
  {
    question: "How do you ensure student data privacy and FERPA/GDPR compliance in your EdTech solutions?",
    answer: "We implement comprehensive data protection measures including encryption at rest and in transit, role-based access controls, audit trails, and strict compliance frameworks. Our platforms are designed with privacy by design principles, ensuring FERPA, GDPR, and other relevant regulations are met from the ground up."
  },
  {
    question: "What is your experience with integrating with existing Student Information Systems (SIS)?",
    answer: "We have extensive experience integrating with major SIS platforms including PowerSchool, Infinite Campus, Skyward, and custom systems. Our integration approach ensures seamless data flow while maintaining data integrity and security standards."
  },
  {
    question: "Can you develop solutions for personalized or adaptive learning paths?",
    answer: "Yes, we specialize in building AI-driven adaptive learning systems that analyze student performance, learning styles, and progress to create personalized educational journeys. Our algorithms continuously adjust content difficulty and pacing to optimize learning outcomes."
  },
  {
    question: "How do you address accessibility (WCAG) requirements in EdTech platforms?",
    answer: "Accessibility is built into our design process from day one. We follow WCAG 2.1 AA guidelines, implementing features like screen reader compatibility, keyboard navigation, color contrast compliance, and alternative text for multimedia content to ensure inclusive learning experiences."
  },
  {
    question: "Do you offer post-launch support and maintenance for educational software?",
    answer: "Yes, we provide comprehensive post-launch support including regular security updates, feature enhancements, technical support, user training, and performance monitoring to ensure your EdTech platform continues to meet evolving educational needs."
  }
];

export const EdTechPlatforms = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <HeroBanner
        category="Learning & Education"
        title="EdTech Platforms"
        description="Transform learning experiences and streamline education management with innovative, engaging, and scalable EdTech platforms."
        primaryCTA={{
          text: "Get a Free Consultation",
          href: "/contact/schedule-a-discovery-call"
        }}
        secondaryCTA={{
          text: "View EdTech Case Studies",
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
          title="EdTech Platform FAQs"
          subtitle="Get answers to common questions about our EdTech platform development services."
          faqs={edtechFAQs}
        />
      </div>
      
      <div className="bg-black">
        <SplitCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};