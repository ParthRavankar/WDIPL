import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Users, Eye, DollarSign, Zap, Target, Globe, Clock, Shield, CheckCircle, Star } from "lucide-react";

export const DedicatedDevelopmentTeams = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Full Control & Transparency",
      description: "Maintain complete oversight of your team, processes, and project progress with direct communication channels."
    },
    {
      icon: Target,
      title: "Unwavering Focus",
      description: "Your dedicated team works exclusively on your project, ensuring maximum commitment and deep understanding of your business goals."
    },
    {
      icon: DollarSign,
      title: "Cost-Effectiveness",
      description: "Access top-tier talent without the overheads of in-house recruitment, infrastructure, and benefits."
    },
    {
      icon: Zap,
      title: "Scalability & Flexibility",
      description: "Easily scale your team up or down based on project demands, adapting quickly to market changes."
    },
    {
      icon: Globe,
      title: "Access to Diverse Expertise",
      description: "Leverage a wide pool of specialists in various technologies, frameworks, and methodologies."
    },
    {
      icon: Clock,
      title: "Reduced Time-to-Market",
      description: "Accelerate development cycles with a cohesive and experienced team."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Define Your Needs",
      description: "We'll work closely with you to understand your project scope, technical requirements, desired team size, and skill sets."
    },
    {
      step: "02",
      title: "Team Assembly",
      description: "WDI recruits and assembles a bespoke team of developers, designers, and QA specialists tailored to your specific needs."
    },
    {
      step: "03",
      title: "Seamless Integration",
      description: "The dedicated team integrates with your existing workflows, communication tools, and project management systems."
    },
    {
      step: "04",
      title: "Ongoing Collaboration",
      description: "Enjoy direct communication, regular updates, and continuous feedback loops with your team members."
    },
    {
      step: "05",
      title: "Infrastructure & Support",
      description: "We provide all necessary infrastructure, tools, and administrative support, allowing your team to focus purely on development."
    }
  ];

  const idealFor = [
    "Long-term projects with evolving requirements",
    "Companies seeking to expand their R&D capabilities",
    "Startups needing to build an entire product from scratch",
    "Businesses looking for a stable, high-performance outsourced tech department"
  ];

  const testimonials = [
    {
      quote: "Our dedicated team from WDI has been instrumental in scaling our platform. They feel like true extensions of our in-house team and understand our vision completely.",
      author: "Jennifer Park",
      role: "CTO, TechFlow Solutions",
      rating: 5
    },
    {
      quote: "The transparency and control we have with our dedicated team is unmatched. We can adapt quickly to market changes while maintaining consistent quality.",
      author: "Marcus Chen",
      role: "Head of Product, InnovateCorp",
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
              Build Your Remote Tech Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Dedicated Development Teams: Your Extended 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Tech Arm</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Build Your Innovation Hub with a Seamlessly Integrated Dedicated Team. In today's competitive landscape, scaling your tech capabilities rapidly and efficiently is paramount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Build Your Dedicated Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Request a Custom Team Proposal
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
              WDI offers Dedicated Development Teams that act as a direct extension of your in-house operations. You gain full control, transparent communication, and a highly skilled team committed solely to your vision, ensuring project success and accelerated growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose WDI Dedicated Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose a WDI Dedicated Team?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of having a fully committed team working exclusively on your projects
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

      {/* How Our Dedicated Teams Work */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How Our Dedicated Teams Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined process to get your dedicated team up and running
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5195E] to-[#FF6B9D] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Card className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ideal For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Perfect solutions for various business scenarios
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {idealFor.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-[#E5195E] flex-shrink-0" />
                <span className="text-white">{item}</span>
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
              Client Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from satisfied clients
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
              Ready to Build Your Innovation Hub?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a dedicated team that works exclusively for you with full transparency and control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Building Your Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};