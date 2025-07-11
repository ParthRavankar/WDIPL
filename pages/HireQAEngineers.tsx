import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, TestTube, Shield, Zap, Target, Users, CheckCircle, Star, Bug, Activity, Search } from "lucide-react";

export const HireQAEngineers = () => {
  const expertise = [
    {
      category: "Manual Testing",
      description: "Comprehensive functional, usability, and exploratory testing to uncover subtle issues",
      skills: ["Functional Testing", "Usability Testing", "Exploratory Testing", "Regression Testing", "User Acceptance Testing"]
    },
    {
      category: "Automated Testing",
      description: "Developing and maintaining automated test scripts for faster, repeatable testing",
      skills: ["Selenium", "Cypress", "Playwright", "Jest", "TestNG", "JUnit", "Puppeteer"]
    },
    {
      category: "Performance Testing",
      description: "Evaluating application speed, responsiveness, and stability under various load conditions",
      skills: ["Load Testing", "Stress Testing", "Volume Testing", "JMeter", "LoadRunner", "K6"]
    },
    {
      category: "Security Testing",
      description: "Identifying vulnerabilities and ensuring data protection measures are robust",
      skills: ["Vulnerability Assessment", "Penetration Testing", "OWASP Testing", "Security Audits"]
    },
    {
      category: "API Testing",
      description: "Validating the functionality, reliability, and performance of APIs",
      skills: ["REST API Testing", "GraphQL Testing", "Postman", "Newman", "SoapUI", "Insomnia"]
    },
    {
      category: "Mobile App Testing",
      description: "Testing across diverse devices, operating systems, and network conditions",
      skills: ["iOS Testing", "Android Testing", "Cross-Platform Testing", "Device Testing", "Network Testing"]
    }
  ];

  const deliverables = [
    {
      icon: Bug,
      title: "Defect Prevention & Detection",
      description: "Minimizing bugs and ensuring a stable product release."
    },
    {
      icon: Users,
      title: "Enhanced User Satisfaction",
      description: "A bug-free experience leads to happier users."
    },
    {
      icon: Target,
      title: "Reduced Development Costs",
      description: "Catching issues early saves significant time and resources."
    },
    {
      icon: Shield,
      title: "Improved Brand Reputation",
      description: "Delivering a reliable product builds trust and credibility."
    },
    {
      icon: CheckCircle,
      title: "Compliance & Standards Adherence",
      description: "Ensuring your software meets industry and regulatory requirements."
    }
  ];

  const projectTypes = [
    "High-Reliability Software",
    "Complex Applications with Intricate Workflows",
    "E-commerce Platforms (Payment Gateways, Inventory)",
    "Applications with Strict Performance Requirements",
    "Regulated Industry Software (Healthcare, Finance)"
  ];

  const testingTools = [
    {
      category: "Automation Tools",
      tools: ["Selenium WebDriver", "Cypress", "Playwright", "TestComplete", "Ranorex"]
    },
    {
      category: "Performance Tools",
      tools: ["Apache JMeter", "LoadRunner", "K6", "Gatling", "BlazeMeter"]
    },
    {
      category: "API Testing",
      tools: ["Postman", "SoapUI", "Insomnia", "REST Assured", "Karate"]
    },
    {
      category: "Bug Tracking",
      tools: ["Jira", "Azure DevOps", "Bugzilla", "TestRail", "Zephyr"]
    },
    {
      category: "Mobile Testing",
      tools: ["Appium", "Espresso", "XCTest", "Firebase Test Lab", "BrowserStack"]
    },
    {
      category: "CI/CD Integration",
      tools: ["Jenkins", "GitLab CI", "Azure Pipelines", "CircleCI", "GitHub Actions"]
    }
  ];

  const testimonials = [
    {
      quote: "Our QA engineer from WDI caught critical issues that could have cost us thousands in production. Their thorough testing approach saved our product launch.",
      author: "Kevin Martinez",
      role: "Product Owner, SecureApp Solutions",
      rating: 5
    },
    {
      quote: "The automated testing framework they set up reduced our testing time by 80% while increasing coverage. Our releases are now faster and more reliable.",
      author: "Sophie Turner",
      role: "Development Manager, AgileWorks",
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
              Ensuring Software Quality & Reliability
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Hire QA Engineers: Ensuring Flawless 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Performance and Reliability</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Quality Assurance (QA) is critical for delivering reliable, high-performing software. WDI provides highly skilled QA engineers who are meticulous in identifying and resolving defects, ensuring your product meets the highest standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Strengthen Your Software Quality
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Discuss Your Testing Needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Tools & Technologies */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Testing Tools & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our QA engineers are proficient in the latest testing tools and methodologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingTools.map((category, index) => (
              <Card key={index} className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
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

      {/* What Our QA Engineers Deliver */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our QA Engineers Deliver
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quality assurance solutions that ensure reliable software delivery
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

      {/* Testimonials */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Client Success Stories
            </h2>
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
              Ready to Ensure Quality Excellence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our QA specialists and deliver software that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Quality Assurance
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Testing Strategy Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};