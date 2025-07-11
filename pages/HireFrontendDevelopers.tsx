import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Monitor, Code, Smartphone, Zap, Target, Users, CheckCircle, Star, Palette } from "lucide-react";

export const HireFrontendDevelopers = () => {
  const expertise = [
    {
      category: "JavaScript Frameworks",
      description: "React.js, Angular, Vue.js for dynamic and single-page applications",
      skills: ["React.js", "Angular", "Vue.js", "Next.js", "Svelte"]
    },
    {
      category: "Core Technologies",
      description: "HTML5, CSS3 (Sass, Less), JavaScript (ES6+)",
      skills: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "Sass/Less"]
    },
    {
      category: "Responsive Design",
      description: "Building interfaces that adapt flawlessly across all devices and screen sizes",
      skills: ["CSS Grid", "Flexbox", "Media Queries", "Mobile-First Design"]
    },
    {
      category: "UI Libraries & Frameworks",
      description: "Bootstrap, Material-UI, Tailwind CSS",
      skills: ["Bootstrap", "Material-UI", "Tailwind CSS", "Ant Design", "Chakra UI"]
    },
    {
      category: "Performance Optimization",
      description: "Ensuring fast loading times and smooth interactions",
      skills: ["Webpack", "Vite", "Code Splitting", "Lazy Loading", "Performance Auditing"]
    },
    {
      category: "Cross-Browser Compatibility",
      description: "Developing solutions that work consistently across all major browsers",
      skills: ["Browser Testing", "Polyfills", "Progressive Enhancement", "Feature Detection"]
    }
  ];

  const deliverables = [
    {
      icon: Target,
      title: "Pixel-Perfect Implementation",
      description: "Translating UI/UX designs into precise code."
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description: "Writing efficient code for speed and responsiveness."
    },
    {
      icon: Smartphone,
      title: "Interactive & Dynamic UIs",
      description: "Creating engaging user experiences with animations and interactive elements."
    },
    {
      icon: Users,
      title: "Accessibility Standards",
      description: "Ensuring applications are usable for everyone."
    },
    {
      icon: Code,
      title: "Collaboration with Backend Teams",
      description: "Seamless integration with APIs and server-side logic."
    }
  ];

  const projectTypes = [
    "Rich Web Applications",
    "Interactive Dashboards & Admin Panels",
    "E-commerce Frontends",
    "Marketing Websites with Complex Animations",
    "Progressive Web Apps (PWAs)"
  ];

  const testimonials = [
    {
      quote: "The frontend developer from WDI transformed our outdated interface into a modern, responsive design that our users love. The attention to detail was exceptional.",
      author: "Lisa Anderson",
      role: "Product Manager, DesignCorp",
      rating: 5
    },
    {
      quote: "Our React-based dashboard is now lightning fast and incredibly user-friendly. The developer's expertise in performance optimization made all the difference.",
      author: "James Wilson",
      role: "Tech Lead, Analytics Pro",
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
              Crafting Engaging User Experiences
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Hire Frontend Developers: Crafting Intuitive and 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Engaging User Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The user interface is the face of your digital product. WDI offers highly skilled frontend developers who excel at transforming designs into interactive, responsive, and aesthetically pleasing web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Find Your Frontend Specialist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Discuss Your UI Needs
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
              Our experts ensure your users enjoy seamless navigation and a visually compelling journey. From responsive layouts to complex interactions, we bring your frontend vision to life with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Frontend Development Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Frontend Development Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive frontend skills for modern web development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
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

      {/* What Our Developers Bring */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Frontend Developers Bring
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exceptional frontend solutions that enhance user engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              Ideal for Projects Requiring
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Frontend expertise that makes a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
              Ready to Transform Your User Interface?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our frontend specialists and create user experiences that engage and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};