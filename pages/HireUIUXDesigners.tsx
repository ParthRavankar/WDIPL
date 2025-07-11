import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Palette, Users, Target, Eye, Smartphone, CheckCircle, Star, MousePointer2, TestTube } from "lucide-react";

export const HireUIUXDesigners = () => {
  const expertise = [
    {
      category: "User Research & Analysis",
      description: "Conducting usability testing, user interviews, and competitive analysis to understand user needs",
      skills: ["User Interviews", "Usability Testing", "Surveys", "Competitive Analysis", "Persona Development"]
    },
    {
      category: "Information Architecture",
      description: "Structuring content and navigation for clarity and ease of use",
      skills: ["Site Mapping", "User Flows", "Content Strategy", "Navigation Design", "Information Hierarchy"]
    },
    {
      category: "Wireframing & Prototyping",
      description: "Creating low-fidelity wireframes and interactive prototypes to visualize user flows",
      skills: ["Wireframing", "Interactive Prototypes", "Paper Prototyping", "Digital Mockups", "Flow Diagrams"]
    },
    {
      category: "User Interface (UI) Design",
      description: "Designing aesthetic and consistent visual elements, including typography, color palettes, iconography, and layouts",
      skills: ["Visual Design", "Typography", "Color Theory", "Iconography", "Layout Design", "Brand Consistency"]
    },
    {
      category: "User Experience (UX) Design",
      description: "Focusing on the entire user journey, ensuring efficiency, satisfaction, and accessibility",
      skills: ["Journey Mapping", "Interaction Design", "Accessibility (WCAG)", "User Psychology", "Experience Strategy"]
    },
    {
      category: "Design Systems",
      description: "Developing scalable design systems for consistency across products",
      skills: ["Component Libraries", "Style Guides", "Design Tokens", "Pattern Libraries", "Brand Guidelines"]
    }
  ];

  const deliverables = [
    {
      icon: Users,
      title: "User-Centric Designs",
      description: "Solutions tailored to your target audience's needs and behaviors."
    },
    {
      icon: Target,
      title: "Enhanced User Satisfaction",
      description: "Intuitive interfaces that make products easy and enjoyable to use."
    },
    {
      icon: Eye,
      title: "Increased Engagement & Conversion",
      description: "Designs optimized to achieve your business goals."
    },
    {
      icon: Palette,
      title: "Brand Consistency",
      description: "Visuals that align with your brand identity."
    },
    {
      icon: CheckCircle,
      title: "Accessibility Compliance",
      description: "Designs that are inclusive and usable by individuals with diverse abilities."
    }
  ];

  const projectTypes = [
    "New Product Design & Development",
    "Website & Mobile App Redesigns",
    "SaaS Platforms & Enterprise Solutions",
    "Interactive Dashboards",
    "E-commerce User Journeys"
  ];

  const designTools = [
    {
      category: "Design Tools",
      tools: ["Figma", "Sketch", "Adobe XD", "Adobe Creative Suite", "InVision"]
    },
    {
      category: "Prototyping",
      tools: ["Principle", "Framer", "ProtoPie", "Marvel", "Axure RP"]
    },
    {
      category: "Research Tools",
      tools: ["Miro", "Hotjar", "UserTesting", "Optimal Workshop", "Maze"]
    },
    {
      category: "Collaboration",
      tools: ["Slack", "Notion", "Confluence", "Zeplin", "Abstract"]
    }
  ];

  const testimonials = [
    {
      quote: "Our UI/UX designer from WDI completely transformed our user experience. User engagement increased by 150% and our conversion rates doubled after the redesign.",
      author: "Rachel Green",
      role: "Product Manager, InnovateTech",
      rating: 5
    },
    {
      quote: "The design system they created streamlined our entire design process. Now our whole team can work efficiently with consistent, beautiful designs.",
      author: "Mark Davis",
      role: "Design Director, CreativeFlow",
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
              Creating Intuitive & Beautiful Digital Experiences
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Hire UI/UX Designers: Crafting Intuitive & Beautiful 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Digital Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Exceptional user experience (UX) and captivating user interface (UI) are the cornerstones of successful digital products. WDI connects you with talented UI/UX designers who blend creativity with user psychology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Transform Your User Experience
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Design Portfolios
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
              Our designers deliver interfaces that are not only visually stunning but also highly intuitive, accessible, and enjoyable to use. We create experiences that users love and that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Design Tools & Technologies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Design Tools & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our designers are proficient in the latest design tools and methodologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designTools.map((category, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#E5195E] transition-colors duration-300">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#E5195E]" />
                        <span className="text-muted-foreground text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Design Expertise */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our UI/UX Design Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design skills for creating exceptional user experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                    {area.category}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-1">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E5195E]" />
                        <span className="text-muted-foreground text-xs">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Designers Deliver */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our UI/UX Designers Deliver
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Design solutions that drive engagement and business success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deliverables.map((item, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
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
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ideal for Projects Requiring
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Design expertise that transforms user experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {projectTypes.map((project, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-[#E5195E] flex-shrink-0" />
                <span className="text-white">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
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
              <Card key={index} className="bg-card/50 border-white/10">
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
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Create Exceptional User Experiences?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our UI/UX designers and transform your digital products into engaging user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Your Design Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Portfolio Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};