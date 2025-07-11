import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, DollarSign, Clock, Users, Target, Zap, Shield, CheckCircle, Star } from "lucide-react";

export const EngagementModels = () => {
  const models = [
    {
      icon: DollarSign,
      title: "Fixed Price Model",
      description: "Ideal for projects with well-defined requirements, scope, and deliverables. We agree on a fixed price and timeline upfront, ensuring budget predictability.",
      bestFor: ["MVPs", "Specific feature development", "Clear scope projects", "Smaller applications"],
      benefits: ["Predictable costs", "Clearly defined deliverables", "Minimal financial risk"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Clock,
      title: "Time & Material (T&M) Model",
      description: "Perfect for projects with evolving requirements, dynamic scope, or long-term development. You pay for the actual time and resources spent, offering maximum flexibility.",
      bestFor: ["Complex projects", "Agile development", "Ongoing support", "R&D initiatives"],
      benefits: ["High flexibility for changes", "Transparent billing", "Adaptability to market shifts", "Continuous refinement"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Users,
      title: "Dedicated Team Model",
      description: "Gain a fully integrated team of WDI professionals working exclusively on your project. You have direct control over the team, processes, and project direction, similar to an in-house extension.",
      bestFor: ["Long-term projects", "Ongoing product development", "Scaling existing teams", "Building robust, complex solutions"],
      benefits: ["Full control", "Seamless integration", "Undivided attention", "Access to diverse skill sets", "Cost-efficiency"],
      color: "from-[#E5195E] to-[#FF6B9D]"
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Budget Predictability",
      fixedPrice: "High",
      timeAndMaterial: "Medium",
      dedicatedTeam: "Medium-High"
    },
    {
      feature: "Flexibility for Changes",
      fixedPrice: "Low",
      timeAndMaterial: "High",
      dedicatedTeam: "High"
    },
    {
      feature: "Direct Team Control",
      fixedPrice: "Low",
      timeAndMaterial: "Medium",
      dedicatedTeam: "High"
    },
    {
      feature: "Best for Long-term Projects",
      fixedPrice: "Low",
      timeAndMaterial: "Medium",
      dedicatedTeam: "High"
    },
    {
      feature: "Quick Start",
      fixedPrice: "High",
      timeAndMaterial: "Medium",
      dedicatedTeam: "Medium"
    }
  ];

  const testimonials = [
    {
      quote: "The Time & Material model was perfect for our evolving startup needs. We could adapt quickly while maintaining transparent costs throughout the development process.",
      author: "Sarah Kim",
      role: "Founder, StartupFlow",
      rating: 5
    },
    {
      quote: "Fixed Price model gave us exactly what we needed - predictable costs and clear deliverables for our MVP launch. WDI delivered on time and within budget.",
      author: "Michael Rodriguez",
      role: "Product Manager, TechVision",
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
              Tailored Solutions for Your Business
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Engagement Models: Tailored Solutions for Your 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Project Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the Model That Fits Your Project, Budget, and Goals Perfectly. At WDI, we understand that every project is unique, with distinct requirements and budgetary considerations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Let's Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Get a Personalized Proposal
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
              That's why we offer a range of flexible engagement models designed to provide optimal value, transparency, and control. Whether you have a clearly defined scope or need an agile approach, we have a model to suit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Engagement Models */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Engagement Models
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible approaches designed to meet your specific project needs and goals
            </p>
          </div>
          
          <div className="space-y-8">
            {models.map((model, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Model Overview */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center`}>
                          <model.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#E5195E] transition-colors duration-300">
                          {model.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {model.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Best For:</h4>
                          <ul className="space-y-2">
                            {model.bestFor.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#E5195E] flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {model.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center gap-2">
                                <Target className="w-4 h-4 text-[#E5195E] flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex justify-center lg:justify-end">
                      <Button className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Model Comparison
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare our engagement models to find the perfect fit for your project
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/50 border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-6 text-white font-semibold">Feature</th>
                        <th className="text-center p-6 text-white font-semibold">Fixed Price</th>
                        <th className="text-center p-6 text-white font-semibold">Time & Material</th>
                        <th className="text-center p-6 text-white font-semibold">Dedicated Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((feature, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                          <td className="p-6 text-muted-foreground">{feature.feature}</td>
                          <td className="p-6 text-center">
                            <Badge variant="outline" className={`border-blue-500/30 text-blue-400 ${feature.fixedPrice === 'High' ? 'bg-blue-500/10' : feature.fixedPrice === 'Medium' ? 'bg-yellow-500/10' : 'bg-red-500/10'}`}>
                              {feature.fixedPrice}
                            </Badge>
                          </td>
                          <td className="p-6 text-center">
                            <Badge variant="outline" className={`border-green-500/30 text-green-400 ${feature.timeAndMaterial === 'High' ? 'bg-green-500/10' : feature.timeAndMaterial === 'Medium' ? 'bg-yellow-500/10' : 'bg-red-500/10'}`}>
                              {feature.timeAndMaterial}
                            </Badge>
                          </td>
                          <td className="p-6 text-center">
                            <Badge variant="outline" className={`border-[#E5195E]/30 text-[#E5195E] ${feature.dedicatedTeam === 'High' ? 'bg-[#E5195E]/10' : feature.dedicatedTeam.includes('Medium') ? 'bg-yellow-500/10' : 'bg-red-500/10'}`}>
                              {feature.dedicatedTeam}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Choosing the Right Model */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Choosing the Right Model
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our experts will consult with you to analyze your project's specific needs, objectives, budget, and desired level of control to recommend the most suitable engagement model for optimal success.
            </p>
            
            <Card className="bg-card/50 border-white/10 text-left">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Project Analysis</h3>
                    <p className="text-muted-foreground text-sm">We assess your requirements, scope, and timeline</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Expert Consultation</h3>
                    <p className="text-muted-foreground text-sm">Our team provides personalized recommendations</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5195E] to-[#FF6B9D] flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Optimal Success</h3>
                    <p className="text-muted-foreground text-sm">Achieve your goals with the perfect model</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              Real results from clients who chose the right engagement model
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
              Ready to Find Your Perfect Model?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the engagement model that best fits your project needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Your Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Compare Models
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};