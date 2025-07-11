import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Lightbulb, Users2, Target, TrendingUp, Clock, Award, Briefcase, Heart, Newspaper, Star } from "lucide-react";
import { navigateTo } from "../App";

export const AboutWDIMain = () => {
  const keyHighlights = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering cutting-edge technology solutions since 2018."
    },
    {
      icon: Users2,
      title: "Expertise",
      description: "A team of seasoned professionals with deep industry knowledge."
    },
    {
      icon: Target,
      title: "Client Focus",
      description: "Committed to delivering tailored solutions and exceptional service."
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "Driving positive change in efficiency, sustainability, and connectivity."
    }
  ];

  const subPages = [
    {
      icon: Clock,
      title: "Our History",
      description: "Discover our journey from founding to becoming industry leaders",
      href: "/company/our-history"
    },
    {
      icon: Users2,
      title: "Leadership Team",
      description: "Meet the visionary leaders guiding our company's success",
      href: "/company/leadership-team"
    },
    {
      icon: Award,
      title: "Awards & Certifications",
      description: "Recognition for our excellence and commitment to quality",
      href: "/company/awards-certifications"
    },
    {
      icon: Briefcase,
      title: "Careers",
      description: "Join our innovative team and grow with us",
      href: "/company/careers"
    },
    {
      icon: Heart,
      title: "Culture & Values",
      description: "The core principles that define our company culture",
      href: "/company/culture-values"
    },
    {
      icon: Newspaper,
      title: "Press & Media",
      description: "Latest news, announcements, and media coverage",
      href: "/company/press-media"
    }
  ];

  const testimonial = {
    quote: "WDI has been instrumental in transforming our digital infrastructure. Their innovative approach and technical expertise exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO, TechForward Solutions",
    rating: 5
  };

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "150+", label: "Expert Professionals" },
    { number: "50+", label: "Global Clients" },
    { number: "6+", label: "Years of Excellence" }
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
              Web Development Institute
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              About WDI: 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Web Development Institute</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Innovating the Future of Digital Solutions. WDI is a dynamic and forward-thinking company dedicated to transforming businesses through cutting-edge technology and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Our Portfolio
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
              With a strong foundation in technological innovation and customer satisfaction, we strive to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities. Our commitment to excellence drives us to continuously push the boundaries of what's possible in digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose WDI?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core strengths that set us apart in the industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyHighlights.map((highlight, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="w-8 h-8 text-[#E5195E] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable results that speak to our commitment and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Internal Navigation - Sub Pages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Learn More About WDI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore different aspects of our company and what makes us unique
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subPages.map((page, index) => (
              <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group cursor-pointer" onClick={() => navigateTo(page.href)}>
                <CardContent className="p-6">
                  <page.icon className="w-8 h-8 text-[#E5195E] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                    {page.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {page.description}
                  </p>
                  <Button variant="ghost" className="text-[#E5195E] hover:bg-[#E5195E]/10 p-0">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/50 border-white/10">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-muted-foreground mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-semibold text-lg">{testimonial.author}</h4>
                  <p className="text-[#E5195E]">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              To empower businesses worldwide with innovative digital solutions that drive growth, enhance efficiency, and create lasting value. We believe in the transformative power of technology and are committed to making it accessible, reliable, and impactful for every client we serve.
            </p>
            
            <Card className="bg-card/50 border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5195E] to-[#FF6B9D] flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Innovate</h3>
                    <p className="text-muted-foreground text-sm">Continuously pushing the boundaries of technology</p>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <Users2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Collaborate</h3>
                    <p className="text-muted-foreground text-sm">Building strong partnerships with our clients</p>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Deliver</h3>
                    <p className="text-muted-foreground text-sm">Ensuring exceptional results and lasting impact</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful companies who have chosen WDI as their technology partner. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Contact Us Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};