import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Code, Database, Cloud, Globe, Users, Zap, DollarSign, Target, CheckCircle, Star } from "lucide-react";

export const HireFullStackDevelopers = () => {
  const expertise = [
    {
      category: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue.js"]
    },
    {
      category: "Backend Technologies", 
      skills: ["Node.js", "Python (Django, Flask)", "Ruby on Rails", "PHP (Laravel)", "Java (Spring Boot)"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Cassandra", "Redis"]
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud Platform", "Heroku"]
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      category: "APIs",
      skills: ["RESTful APIs", "GraphQL", "WebSocket", "Microservices"]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Single Point of Contact",
      description: "One developer managing both frontend and backend, ensuring seamless integration."
    },
    {
      icon: Zap,
      title: "Faster Development Cycles",
      description: "Reduced communication overhead and quicker problem-solving."
    },
    {
      icon: DollarSign,
      title: "Cost-Efficiency",
      description: "Often more economical than hiring separate frontend and backend specialists for smaller teams."
    },
    {
      icon: Target,
      title: "Versatility",
      description: "Adaptable to various project requirements and technology stacks."
    },
    {
      icon: Globe,
      title: "Holistic Project Understanding",
      description: "A complete view of the application architecture."
    }
  ];

  const solutionTypes = [
    "Complex Web Applications (SAAS, CRM, ERP)",
    "E-commerce Platforms with Custom Features",
    "Social Networking Sites",
    "Data-Intensive Dashboards",
    "Real-Time Applications"
  ];

  const techStacks = [
    {
      name: "MERN Stack",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      description: "Modern JavaScript-based full-stack development"
    },
    {
      name: "MEAN Stack",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
      description: "Enterprise-grade Angular frontend with Node.js backend"
    },
    {
      name: "Django + React",
      technologies: ["Python", "Django", "React", "PostgreSQL"],
      description: "Robust Python backend with dynamic React frontend"
    },
    {
      name: "Laravel + Vue.js",
      technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
      description: "Elegant PHP framework with progressive Vue.js frontend"
    }
  ];

  const testimonials = [
    {
      quote: "Our full-stack developer from WDI single-handedly built our entire SaaS platform. The seamless integration between frontend and backend was impressive.",
      author: "David Rodriguez",
      role: "Founder, CloudTech Solutions",
      rating: 5
    },
    {
      quote: "The full-stack expertise saved us months of development time. Having one developer understand the complete architecture made all the difference.",
      author: "Emma Thompson",
      role: "CTO, DataFlow Inc.",
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
              End-to-End Development Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Hire Full Stack Developers: Comprehensive Solutions from 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Front to Back</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              For end-to-end project execution and a streamlined development process, full stack developers are invaluable. WDI provides highly skilled full stack professionals capable of handling every aspect of your web application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Find Your Full Stack Expert
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Get a Quote for Full Stack Development
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
              From intuitive user interfaces to robust server-side logic and database management, our full stack developers bring comprehensive expertise to every project. They ensure seamless integration across all layers of your application architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stacks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Popular Technology Stacks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our developers are proficient in the most sought-after technology combinations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {techStacks.map((stack, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                    {stack.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {stack.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-white/20 text-white text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Stack Expertise */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Full Stack Expertise Includes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical skills across the entire development stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#E5195E] transition-colors duration-300">
                    {area.category}
                  </h3>
                  
                  <div className="space-y-2">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#E5195E]" />
                        <span className="text-muted-foreground text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Benefits of Hiring WDI Full Stack Developers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Why full stack developers are the smart choice for your project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-8 h-8 text-[#E5195E] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Full Stack Solutions For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complex applications that benefit from end-to-end expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {solutionTypes.map((solution, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-[#E5195E] flex-shrink-0" />
                <span className="text-white">{solution}</span>
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
              Ready to Streamline Your Development Process?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our full stack developers and experience the efficiency of end-to-end expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};