import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Zap, Target, DollarSign, Users, Shield, Cog, CheckCircle, Star, Smartphone, Code, Monitor, Database, Palette, TestTube, Settings } from "lucide-react";

export const TeamAugmentationServices = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Rapid Scaling",
      description: "Quickly onboard specialized talent to meet urgent project needs or seasonal demands."
    },
    {
      icon: Target,
      title: "Fill Skill Gaps",
      description: "Access experts in niche technologies or specific domains your in-house team might lack."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Hiring",
      description: "Avoid the lengthy and expensive process of recruiting permanent employees."
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Our professionals adapt quickly to your company culture, workflows, and communication tools."
    },
    {
      icon: Shield,
      title: "Flexibility",
      description: "Hire individuals or small groups for short-term projects or ongoing support, scaling up or down as required."
    },
    {
      icon: Cog,
      title: "Focus on Core Business",
      description: "Free up your internal resources to concentrate on strategic initiatives while we handle specialized tasks."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Identify Your Needs",
      description: "You specify the roles, skill sets, experience levels, and duration required."
    },
    {
      step: "02",
      title: "Candidate Selection",
      description: "We present you with pre-vetted candidates who perfectly match your requirements."
    },
    {
      step: "03",
      title: "Integration",
      description: "The chosen WDI professionals integrate directly into your team, reporting to your project managers and adhering to your processes."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "WDI provides administrative support, ensuring the augmented talent remains productive and aligned with your goals."
    }
  ];

  const roles = [
    {
      icon: Smartphone,
      title: "Mobile App Developers",
      subtitle: "(iOS, Android, Cross-platform)",
      skills: ["Swift", "Kotlin", "React Native", "Flutter", "Xamarin"]
    },
    {
      icon: Monitor,
      title: "Frontend Developers",
      subtitle: "(React, Angular, Vue.js)",
      skills: ["React.js", "Angular", "Vue.js", "TypeScript", "CSS3"]
    },
    {
      icon: Database,
      title: "Backend Developers",
      subtitle: "(Node.js, Python, Java, PHP)",
      skills: ["Node.js", "Python", "Java", "PHP", "PostgreSQL"]
    },
    {
      icon: Code,
      title: "Full Stack Developers",
      subtitle: "",
      skills: ["MERN", "MEAN", "Django", "Laravel", "Spring Boot"]
    },
    {
      icon: Palette,
      title: "UI/UX Designers",
      subtitle: "",
      skills: ["Figma", "Sketch", "User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: TestTube,
      title: "QA Engineers",
      subtitle: "(Manual, Automation)",
      skills: ["Selenium", "Cypress", "Jest", "API Testing", "Performance Testing"]
    },
    {
      icon: Settings,
      title: "DevOps Engineers",
      subtitle: "",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      icon: Users,
      title: "Project Managers / Scrum Masters",
      subtitle: "",
      skills: ["Agile", "Scrum", "Kanban", "Jira", "Risk Management"]
    }
  ];

  const idealFor = [
    "Accelerating project timelines",
    "Bringing in specialized expertise for specific project phases",
    "Managing fluctuating workloads",
    "Reducing recruitment overheads",
    "Covering temporary leaves or increased demands"
  ];

  const testimonials = [
    {
      quote: "Team augmentation with WDI was a game-changer. We quickly added React specialists to our team and delivered our project 3 weeks ahead of schedule.",
      author: "Alexandra Wang",
      role: "Engineering Manager, FastTrack Solutions",
      rating: 5
    },
    {
      quote: "The DevOps engineer we got through team augmentation seamlessly integrated with our existing processes and dramatically improved our deployment pipeline.",
      author: "Carlos Lopez",
      role: "CTO, CloudScale Inc.",
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
              Scale Your Development Capacity
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Team Augmentation Services: Seamlessly Scale Your 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Development Capacity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Instantly Boost Your Team's Expertise and Accelerate Project Delivery. Facing skill gaps, fluctuating project demands, or tight deadlines? WDI's Team Augmentation Services provide the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Augment Your Team Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Find the Right Talent for Your Project
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
              We integrate highly skilled developers, designers, and QA engineers directly into your existing team, empowering you to scale your capabilities quickly, efficiently, and without the complexities of traditional hiring.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose WDI for Team Augmentation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose WDI for Team Augmentation?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of professional team augmentation services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* How Team Augmentation Works */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How Team Augmentation Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple 4-step process to integrate skilled professionals into your team
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5195E] to-[#FF6B9D] flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#E5195E]/50 to-transparent" />
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Can Augment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Roles We Can Augment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert professionals across all major technology domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <role.icon className="w-8 h-8 text-[#E5195E] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#E5195E] transition-colors duration-300">
                    {role.title}
                  </h3>
                  
                  {role.subtitle && (
                    <p className="text-muted-foreground text-sm mb-4">{role.subtitle}</p>
                  )}
                  
                  <div className="space-y-1">
                    {role.skills.slice(0, 3).map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E5195E]" />
                        <span className="text-muted-foreground text-xs">{skill}</span>
                      </div>
                    ))}
                    {role.skills.length > 3 && (
                      <div className="text-muted-foreground text-xs">
                        +{role.skills.length - 3} more...
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ideal For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Perfect solutions for various business scenarios and challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {idealFor.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-[#E5195E] flex-shrink-0" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Team Augmentation vs Traditional Hiring
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See why team augmentation is the smarter choice for scaling your team
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5195E] to-[#FF6B9D] flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Team Augmentation</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Quick onboarding (1-2 weeks)",
                      "No recruitment costs",
                      "Flexible duration",
                      "Pre-vetted professionals",
                      "Immediate productivity",
                      "No long-term commitments"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[#E5195E] flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-white/10 opacity-75">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Traditional Hiring</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Long hiring process (8-12 weeks)",
                      "High recruitment costs",
                      "Long-term commitment",
                      "Uncertain candidate quality",
                      "Extended onboarding period",
                      "Employment obligations"
                    ].map((drawback, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{drawback}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Client Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from teams that chose augmentation
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
              Ready to Scale Your Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the skilled professionals you need to accelerate your projects and fill critical skill gaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Team Augmentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Discuss Your Needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};