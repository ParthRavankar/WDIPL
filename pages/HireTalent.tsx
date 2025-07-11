import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Users, Clock, Target, DollarSign, Shield, Zap, CheckCircle, Smartphone, Code, Monitor, Database, Palette, TestTube } from "lucide-react";
import { navigateTo } from "../App";

export const HireTalent = () => {
  const talentCategories = [
    {
      title: "Mobile App Developers",
      icon: Smartphone,
      description: "iOS, Android, and cross-platform experts who bring your mobile vision to life",
      href: "/hire-talent/mobile-app-developers",
      skills: ["Swift", "Kotlin", "React Native", "Flutter"]
    },
    {
      title: "Full Stack Developers",
      icon: Code,
      description: "End-to-end development experts handling both frontend and backend seamlessly",
      href: "/hire-talent/full-stack-developers",
      skills: ["React", "Node.js", "Python", "AWS"]
    },
    {
      title: "Frontend Developers",
      icon: Monitor,
      description: "UI specialists creating engaging and responsive user experiences",
      href: "/hire-talent/frontend-developers",
      skills: ["React", "Vue.js", "TypeScript", "CSS3"]
    },
    {
      title: "Backend Developers",
      icon: Database,
      description: "Server-side experts building robust and scalable infrastructure",
      href: "/hire-talent/backend-developers",
      skills: ["Node.js", "Python", "Java", "PostgreSQL"]
    },
    {
      title: "UI/UX Designers",
      icon: Palette,
      description: "Design experts crafting intuitive and beautiful digital experiences",
      href: "/hire-talent/ui-ux-designers",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "QA Engineers",
      icon: TestTube,
      description: "Quality assurance specialists ensuring flawless software performance",
      href: "/hire-talent/qa-engineers",
      skills: ["Automation", "Selenium", "Performance Testing", "API Testing"]
    }
  ];

  const whyChooseWDI = [
    {
      icon: Shield,
      title: "Vetted Professionals",
      description: "Rigorous screening process ensures you get only the best talent"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quickly scale your team with pre-qualified candidates"
    },
    {
      icon: Target,
      title: "Flexible Engagement Models",
      description: "Hire dedicated teams, project-based talent, or individual experts"
    },
    {
      icon: Users,
      title: "Domain Expertise",
      description: "Specialized in diverse tech stacks and industry verticals"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description: "Access global talent pools without the overheads"
    }
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Define Your Needs",
      description: "Share your project requirements and desired skill sets"
    },
    {
      step: "02",
      title: "Candidate Matching",
      description: "We present you with thoroughly vetted profiles tailored to your specifications"
    },
    {
      step: "03",
      title: "Interview & Select",
      description: "Interview our candidates and make your final selection"
    },
    {
      step: "04",
      title: "Onboard & Succeed",
      description: "Seamlessly integrate your new talent and watch your projects thrive"
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
              Your Trusted Staffing Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Hire Top Tech Talent: Build Your 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Dream Team</span> with WDI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Connecting You with Exceptional Tech Professionals, Effortlessly. In today's fast-paced digital landscape, access to top-tier technical talent is crucial for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Tell Us Your Hiring Needs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Request a Free Consultation
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
              WDI simplifies your hiring process, connecting you with highly skilled and vetted professionals across various domains. Whether you need a single expert or an entire dedicated team, we're your partner in building the workforce that drives innovation and achieves your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose WDI */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose WDI for Talent Acquisition?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide more than just talent - we deliver complete hiring solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseWDI.map((benefit, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <benefit.icon className="w-8 h-8 text-[#E5195E] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Explore Our Talent Pool
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect expertise for your project needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talentCategories.map((category, index) => (
              <Card key={index} className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group cursor-pointer" onClick={() => navigateTo(category.href)}>
                <CardContent className="p-8">
                  <category.icon className="w-12 h-12 text-[#E5195E] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="border-white/20 text-white text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="text-[#E5195E] hover:bg-[#E5195E]/10 p-0">
                    Explore Talent
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Hiring Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simplified 4-step process to get you the right talent quickly
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hiringProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5195E] to-[#FF6B9D] flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                    {index < hiringProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#E5195E]/50 to-transparent" />
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {process.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Trusted by Leading Companies
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Placements" },
              { number: "150+", label: "Expert Developers" },
              { number: "40+", label: "Countries Covered" },
              { number: "95%", label: "Client Retention Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your hiring needs and find the perfect talent to drive your projects forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Hiring Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Explore Our Talent Pool
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};