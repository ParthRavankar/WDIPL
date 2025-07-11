import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Database, Server, Cloud, Shield, Zap, Target, CheckCircle, Star, Code } from "lucide-react";

export const HireBackendDevelopers = () => {
  const expertise = [
    {
      category: "Languages & Frameworks",
      description: "Node.js (Express, NestJS), Python (Django, Flask), Java (Spring Boot), PHP (Laravel, Symfony), Ruby on Rails, Go",
      skills: ["Node.js", "Python", "Java", "PHP", "Ruby", "Go", "C#", ".NET Core"]
    },
    {
      category: "Database Management",
      description: "Designing, optimizing, and managing SQL (MySQL, PostgreSQL, MS SQL Server) and NoSQL (MongoDB, Cassandra, Redis) databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Elasticsearch"]
    },
    {
      category: "API Development",
      description: "Building secure and efficient RESTful APIs and GraphQL endpoints for seamless frontend communication",
      skills: ["REST APIs", "GraphQL", "WebSocket", "gRPC", "API Gateway", "OAuth"]
    },
    {
      category: "Cloud Services",
      description: "Leveraging AWS, Azure, Google Cloud Platform for scalable deployments",
      skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Serverless"]
    },
    {
      category: "Security",
      description: "Implementing authentication, authorization, data encryption, and vulnerability management",
      skills: ["JWT", "OAuth2", "SSL/TLS", "Encryption", "Security Audits", "OWASP"]
    },
    {
      category: "Scalability & Performance",
      description: "Designing architectures for high traffic and future growth",
      skills: ["Microservices", "Load Balancing", "Caching", "CDN", "Performance Optimization"]
    }
  ];

  const deliverables = [
    {
      icon: Server,
      title: "Server-Side Logic",
      description: "Developing the core business logic and functionalities."
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "Efficient data storage, retrieval, and manipulation."
    },
    {
      icon: Code,
      title: "API Development",
      description: "Creating robust and secure interfaces for other services to interact with."
    },
    {
      icon: Target,
      title: "System Architecture",
      description: "Designing scalable and resilient backend systems."
    },
    {
      icon: Cloud,
      title: "Integrations",
      description: "Connecting with third-party services, payment gateways, and external systems."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring rapid response times and efficient resource utilization."
    }
  ];

  const projectTypes = [
    "Complex Business Logic & Data Processing",
    "High-Traffic Web Services",
    "API Development for Mobile & Web Apps",
    "Real-Time Data Streaming",
    "Microservices Architecture",
    "Enterprise-Grade Applications"
  ];

  const techStacks = [
    {
      name: "Node.js Ecosystem",
      technologies: ["Express.js", "NestJS", "TypeScript", "MongoDB", "Redis"],
      description: "JavaScript-based backend for fast, scalable applications"
    },
    {
      name: "Python Stack",
      technologies: ["Django", "Flask", "FastAPI", "PostgreSQL", "Celery"],
      description: "Robust Python frameworks for data-intensive applications"
    },
    {
      name: "Java Enterprise",
      technologies: ["Spring Boot", "Spring Security", "JPA", "MySQL", "Apache Kafka"],
      description: "Enterprise-grade Java solutions for large-scale systems"
    },
    {
      name: "PHP Modern",
      technologies: ["Laravel", "Symfony", "PHP 8+", "MySQL", "Redis"],
      description: "Modern PHP development with elegant frameworks"
    }
  ];

  const testimonials = [
    {
      quote: "Our backend developer from WDI built a robust API that handles millions of requests daily without any performance issues. The architecture is solid and scalable.",
      author: "Robert Chen",
      role: "CTO, ScaleUp Technologies",
      rating: 5
    },
    {
      quote: "The microservices architecture they designed transformed our monolithic application. We can now deploy features independently and scale efficiently.",
      author: "Amanda Foster",
      role: "Engineering Manager, CloudFirst",
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
              Building Robust Server-Side Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Hire Backend Developers: Powering Your Applications with 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Robust Foundations</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The true power of any digital product lies in its robust and scalable backend. WDI provides expert backend developers who specialize in building the secure, efficient, and reliable server-side infrastructure that underpins your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Connect with Backend Experts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Request a Technical Assessment
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
              From database management to API development, our talent ensures your system performs flawlessly under any load. We build the invisible foundation that makes everything else possible.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stacks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Popular Backend Technology Stacks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our developers are proficient in the most powerful backend technologies
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

      {/* Backend Development Expertise */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Backend Development Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive backend skills for enterprise-grade applications
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

      {/* What Our Developers Offer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Backend Developers Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive backend solutions that power your applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Backend expertise for complex and demanding applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              Ready to Build a Solid Foundation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our backend specialists and create the robust infrastructure your application needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};