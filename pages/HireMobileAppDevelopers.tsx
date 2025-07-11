import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Smartphone, Apple, Code, Zap, Shield, Target, Users, CheckCircle, Star } from "lucide-react";

export const HireMobileAppDevelopers = () => {
  const expertise = [
    {
      icon: Apple,
      title: "iOS Developers",
      description: "Proficient in Swift and Objective-C for crafting robust and elegant applications for iPhone and iPad.",
      skills: ["Swift", "Objective-C", "Xcode", "Core Data", "SwiftUI"]
    },
    {
      icon: Code,
      title: "Android Developers",
      description: "Skilled in Kotlin and Java to build feature-rich and scalable apps for the vast Android ecosystem.",
      skills: ["Kotlin", "Java", "Android Studio", "Room Database", "Jetpack Compose"]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Developers",
      description: "Experts in frameworks like React Native and Flutter for efficient development across multiple platforms with a single codebase.",
      skills: ["React Native", "Flutter", "Dart", "Expo", "Xamarin"]
    },
    {
      icon: Code,
      title: "Hybrid App Developers",
      description: "Experience with technologies like Ionic and Xamarin for web-based mobile applications.",
      skills: ["Ionic", "Cordova", "PhoneGap", "Progressive Web Apps"]
    }
  ];

  const deliverables = [
    {
      icon: Target,
      title: "Intuitive UI/UX",
      description: "Ensuring a seamless and engaging user experience."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized apps for speed, responsiveness, and stability."
    },
    {
      icon: Shield,
      title: "Robust Security",
      description: "Implementing best practices for data protection and user privacy."
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Connecting with backend services and third-party APIs seamlessly."
    },
    {
      icon: Users,
      title: "Scalability",
      description: "Building apps that can grow with your user base and feature set."
    },
    {
      icon: CheckCircle,
      title: "Post-Launch Support",
      description: "Assistance with updates, maintenance, and performance monitoring."
    }
  ];

  const projectTypes = [
    "E-commerce & Retail Apps",
    "On-Demand Services & Delivery Apps",
    "Social Networking Platforms",
    "Enterprise & Business Productivity Tools",
    "Health & Fitness Trackers",
    "Educational Apps & E-learning Platforms"
  ];

  const testimonials = [
    {
      quote: "The mobile app developers from WDI delivered an exceptional iOS app that exceeded our expectations. Their expertise in Swift and attention to detail was outstanding.",
      author: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "Our React Native app was completed ahead of schedule and performs flawlessly across both platforms. The team's cross-platform expertise saved us significant time and cost.",
      author: "Michael Chen",
      role: "Product Manager, InnovateNow",
      rating: 5
    }
  ];

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5195E]/10 via-background to-background" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-[#E5195E]/20 text-[#E5195E]">
              iOS & Android Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Hire Mobile App Developers: Bring Your Ideas to Life on 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Any Device</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Need a captivating and high-performing mobile application? WDI connects you with expert mobile app developers proficient in creating native iOS and Android experiences, as well as efficient cross-platform solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Get a Free Consultation for Mobile Developers
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Developer Profiles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our developers are adept at building intuitive, secure, and scalable mobile applications that engage users and drive business growth. From native iOS and Android apps to cross-platform solutions, we have the expertise to bring your mobile vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Development Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Mobile App Development Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mobile development skills across all major platforms and frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <area.icon className="w-12 h-12 text-[#E5195E] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#E5195E] transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="border-white/20 text-white text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Developers Deliver */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Mobile Developers Deliver
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mobile solutions that exceed expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <Card key={index} className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 text-[#E5195E] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Projects */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ideal for Projects Like
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our mobile developers excel across various industry verticals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {projectTypes.map((project, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-[#E5195E] flex-shrink-0" />
                <span className="text-white">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Success stories from satisfied clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/50 border-white/10">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-[#E5195E] text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our expert mobile app developers and turn your vision into a powerful mobile experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};