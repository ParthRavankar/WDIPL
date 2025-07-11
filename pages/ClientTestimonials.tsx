import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Star, Quote, Play, ArrowRight, Building2, Heart, ShoppingCart, GraduationCap, Users, Award } from "lucide-react";
import { navigateTo } from "../App";

export const ClientTestimonials = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedService, setSelectedService] = useState("all");

  const industries = [
    "All Industries",
    "Healthcare",
    "FinTech",
    "E-commerce", 
    "Education",
    "Manufacturing",
    "Real Estate",
    "Logistics"
  ];

  const services = [
    "All Services",
    "Web Development",
    "Mobile Development",
    "AI/ML",
    "Cloud Solutions",
    "UI/UX Design",
    "DevOps",
    "Consulting"
  ];

  const featuredTestimonials = [
    {
      id: 1,
      quote: "WDI brought SimpliTend to life with precision. A complex MVP, flawlessly executed and beautifully designed.",
      client: "Sayeed Saachi",
      title: "Founder",
      company: "Simply Tend",
      industry: "FinTech",
      service: "Web Development",
      rating: 5,
      projectType: "SimpliTend",
      hasVideo: false
    },
    {
      id: 2,
      quote: "WDI turned a complex, multi-layered vision into a streamlined digital product. A highly capable and responsive team.",
      client: "Aimee Zoho",
      title: "Founder",
      company: "Aimee Zhao",
      industry: "Education",
      service: "Web Development",
      rating: 5,
      projectType: "Lean In World",
      hasVideo: false
    },
    {
      id: 3,
      quote: "WDI guided us from hybrid frustration to native transformation. Rock-solid delivery, scalable systems, and impressive uptime.",
      client: "Akarsh K Hebbar",
      title: "Founder",
      company: "WOKA Creations Pvt. Ltd",
      industry: "E-commerce",
      service: "Mobile Development",
      rating: 5,
      projectType: "WOKA",
      hasVideo: false
    },
    {
      id: 4,
      quote: "WDI executed our vision perfectly. The design, user flow, and admin controls are just what we needed.",
      client: "Al Yusuf-Humaira",
      title: "Founder",
      company: "Safwan Yusuf Shaikh",
      industry: "Healthcare",
      service: "Web Development",
      rating: 5,
      projectType: "SSA",
      hasVideo: false
    },
    {
      id: 5,
      quote: "WDI delivered exactly what we needed—a scalable, secure, and smart RFQ engine.",
      client: "Amol Kasar",
      title: "Manager",
      company: "Dorf Ketal",
      industry: "Manufacturing",
      service: "Web Development",
      rating: 5,
      projectType: "Dorf Ketal",
      hasVideo: false
    },
    {
      id: 6,
      quote: "WDI helped us modernize our digital presence quickly—professional, responsive, and pixel-perfect.",
      client: "Anesh Kavle",
      title: "Founder",
      company: "Dayal Tours & Travel",
      industry: "Real Estate",
      service: "Web Development",
      rating: 5,
      projectType: "Dayal Tours & Travel",
      hasVideo: false
    },
    {
      id: 7,
      quote: "WDI delivered beyond expectations. Their speed, structure, and collaborative energy made this complex platform a reality.",
      client: "Edward",
      title: "Founder",
      company: "ReGroup Application Development",
      industry: "E-commerce",
      service: "Web Development",
      rating: 5,
      projectType: "ReGroup",
      hasVideo: false
    },
    {
      id: 8,
      quote: "WDI translated a complex financial vision into a user-friendly app. Their execution was on point.",
      client: "Faisal",
      title: "Founder",
      company: "Tanami Capital",
      industry: "FinTech",
      service: "Mobile Development",
      rating: 5,
      projectType: "Tanami Capital",
      hasVideo: false
    }
  ];

  const testimonials = [
    {
      id: 9,
      quote: "WDI's CRM gave us an exhibition edge—OCR scanning changed the game.",
      client: "Hiten Dedhia",
      title: "Director",
      company: "Trixie Impex Pvt Ltd",
      industry: "Manufacturing",
      service: "Web Development",
      rating: 5,
      projectType: "Exhibition CRM System",
      hasVideo: false
    },
    {
      id: 10,
      quote: "WDI made fintech frictionless. From onboarding to investment, it flows like a smart conversation.",
      client: "Rakesh Bunathar",
      title: "Founder",
      company: "SuperMoney Advisor Pvt Ltd",
      industry: "FinTech",
      service: "Mobile Development",
      rating: 5,
      projectType: "SuperMoney Advisor App",
      hasVideo: false
    },
    {
      id: 11,
      quote: "WDI helped us turn complex property cycles into an intuitive digital experience.",
      client: "Team Prosperty",
      title: "Team",
      company: "Prosperty Infra & Reality Pvt. Ltd",
      industry: "Real Estate",
      service: "Web Development",
      rating: 5,
      projectType: "Prosperty Platform",
      hasVideo: false
    },
    {
      id: 12,
      quote: "WDI executed my multi-phase platform with confidence and clarity. They turned ideas into an integrated system faster than expected.",
      client: "Mr. Oja Paul",
      title: "Founder",
      company: "Ojo Paul Enterprises",
      industry: "E-commerce",
      service: "Web Development",
      rating: 5,
      projectType: "Angel-Driven Marketplace Platform",
      hasVideo: false
    },
    {
      id: 13,
      quote: "WDI helped bring Moving Cargo to life—from vision to delivery, the process was smooth and professional.",
      client: "Mr Nicholas Shaak",
      title: "Founder",
      company: "Moving Cargo",
      industry: "Logistics",
      service: "Web Development",
      rating: 5,
      projectType: "Moving Cargo",
      hasVideo: false
    },
    {
      id: 14,
      quote: "WDI transformed our leadership vision into a smart, scalable platform our teams love.",
      client: "KLC",
      title: "Team",
      company: "KLC",
      industry: "Education",
      service: "Web Development",
      rating: 5,
      projectType: "KLC Learning and Content Management Platform",
      hasVideo: false
    },
    {
      id: 15,
      quote: "WDI delivered a full-stack health-tech solution with precision and transparency.",
      client: "Priyank Mehta",
      title: "Founder",
      company: "Get Set Fit",
      industry: "Healthcare",
      service: "Mobile Development",
      rating: 5,
      projectType: "GSF Mobie App",
      hasVideo: false
    },
    {
      id: 16,
      quote: "WDI built more than an app—they engineered a habit-forming digital solution with beautiful UX and great scalability.",
      client: "Rishabh Jain",
      title: "Founder",
      company: "RanOutOf",
      industry: "E-commerce",
      service: "Mobile Development",
      rating: 5,
      projectType: "Grocery List Mobile Application",
      hasVideo: false
    },
    {
      id: 17,
      quote: "WDI built more than an app—they digitized our entire feed ecosystem.",
      client: "Kevin",
      title: "Founder",
      company: "Farm Feeder",
      industry: "Manufacturing",
      service: "Mobile Development",
      rating: 5,
      projectType: "Farm Feeder App",
      hasVideo: false
    },
    {
      id: 18,
      quote: "WDI didn't just deliver code—they delivered a digital transformation. Scalable, stable, and beautifully engineered.",
      client: "Jay Ruparel",
      title: "Founder",
      company: "CityCards Global Pvt. Ltd",
      industry: "E-commerce",
      service: "Web Development",
      rating: 5,
      projectType: "Melbourne City Card",
      hasVideo: false,
      featured: false
    },
    {
      id: 19,
      quote: "WDI turned our idea into a highly usable mobile platform—sleek, stable, and scalable.",
      client: "Shannon",
      title: "Founder",
      company: "Cheers to the Season LLC",
      industry: "E-commerce",
      service: "Mobile Development",
      rating: 5,
      projectType: "Cheers to the Season Mobile App Redesign",
      hasVideo: false,
      featured: false
    },
    {
      id: 20,
      quote: "WDI gave us a high-performance platform to blend financial learning with fun. Seamless and smart.",
      client: "Ravi Sharma",
      title: "Founder",
      company: "Bulls Bears Edusys Pvt. Ltd",
      industry: "FinTech",
      service: "Mobile Development",
      rating: 5,
      projectType: "Nifty Eleven Fantasy Trading App",
      hasVideo: false,
      featured: false
    },
    {
      id: 21,
      quote: "The new Amble App makes heritage immersive, intuitive, and scalable—exactly what we envisioned.",
      client: "RPG Foundation",
      title: "Team",
      company: "RPG Foundation",
      industry: "Education",
      service: "Mobile Development",
      rating: 5,
      projectType: "Amble App - New Version",
      hasVideo: false,
      featured: false
    },
    {
      id: 22,
      quote: "WDI delivered a deeply integrated, future-ready system that cut our admin overheads drastically.",
      client: "Ravi Bajaj",
      title: "Manager",
      company: "Cnergyis Infotech India Pvt. Ltd. (ZingHR) - Ravi Bajaj",
      industry: "Manufacturing",
      service: "Web Development",
      rating: 5,
      projectType: "Travel Portal",
      hasVideo: false,
      featured: false
    },
    {
      id: 23,
      quote: "WDI executed my multi-phase platform with confidence and clarity. They turned ideas into an integrated system faster than expected.",
      client: "Matt Weightman",
      title: "Founder",
      company: "MOT & Vehicle Management Portal",
      industry: "Logistics",
      service: "Web Development",
      rating: 5,
      projectType: "MOT & Vehicle Management Portal",
      hasVideo: false,
      featured: false
    }
  ];

  const allTestimonials = [...featuredTestimonials, ...testimonials];

  const filteredTestimonials = allTestimonials.filter(testimonial => {
    const matchesIndustry = selectedIndustry === "all" || testimonial.industry === selectedIndustry;
    const matchesService = selectedService === "all" || testimonial.service === selectedService;
    
    return matchesIndustry && matchesService;
  });

  const getIndustryIcon = (industry: string) => {
    const icons = {
      "Healthcare": Heart,
      "FinTech": Building2,
      "E-commerce": ShoppingCart,
      "Education": GraduationCap,
      "Manufacturing": Building2,
      "Real Estate": Building2,
      "Logistics": Building2
    };
    return icons[industry as keyof typeof icons] || Building2;
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                Client Testimonials
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Client Testimonials: Our Clients' Success, Our Greatest Reward
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nothing speaks louder than the words of our satisfied clients. At WDI, we're dedicated to building strong partnerships and delivering exceptional results. Read what our clients have to say about their experiences working with our dedicated teams and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-muted-foreground">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-48 bg-card/50 border-white/10 text-white">
                <SelectValue placeholder="Industry" className="text-white" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry === "All Industries" ? "all" : industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="w-48 bg-card/50 border-white/10 text-white">
                <SelectValue placeholder="Service" className="text-white" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service === "All Services" ? "all" : service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">
              {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featuredTestimonials.some(t => filteredTestimonials.includes(t)) && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Client Stories</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredTestimonials.filter(t => filteredTestimonials.includes(t)).map((testimonial) => {
                const IndustryIcon = getIndustryIcon(testimonial.industry);
                return (
                  <Card key={testimonial.id} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <div className="relative mb-6">
                        <Quote className="w-8 h-8 text-[#E5195E] absolute -top-2 -left-2" />
                        <blockquote className="text-muted-foreground leading-relaxed italic pl-6">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      
                      <div className="mb-4 pt-4 border-t border-white/10">
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold">{testimonial.client}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          <p className="text-sm text-[#E5195E] font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2">
                          <IndustryIcon className="w-4 h-4 text-[#E5195E]" />
                          <span className="text-sm text-muted-foreground font-medium">{testimonial.projectType}</span>
                        </div>
                        {testimonial.hasVideo && (
                          <Button variant="ghost" size="sm" className="text-[#E5195E] hover:bg-[#E5195E]/10">
                            <Play className="w-4 h-4 mr-1" />
                            Watch Video
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Testimonials */}
      {testimonials.some(t => filteredTestimonials.includes(t)) && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">More Client Feedback</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.filter(t => filteredTestimonials.includes(t)).map((testimonial) => {
                const IndustryIcon = getIndustryIcon(testimonial.industry);
                return (
                  <Card key={testimonial.id} className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <div className="relative mb-4">
                        <Quote className="w-6 h-6 text-[#E5195E] absolute -top-1 -left-1" />
                        <blockquote className="text-muted-foreground text-sm leading-relaxed italic pl-4">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      
                      <div className="mb-3 pt-3 border-t border-white/10">
                        <div className="space-y-1">
                          <h4 className="text-white font-semibold text-sm">{testimonial.client}</h4>
                          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                          <p className="text-xs text-[#E5195E] font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center gap-2">
                          <IndustryIcon className="w-3 h-3 text-[#E5195E]" />
                          <span className="text-xs text-muted-foreground font-medium">{testimonial.projectType}</span>
                        </div>
                        {testimonial.hasVideo && (
                          <Button variant="ghost" size="sm" className="text-[#E5195E] hover:bg-[#E5195E]/10 p-1">
                            <Play className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredTestimonials.length === 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">No testimonials found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedIndustry("all");
                  setSelectedService("all");
                }}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Become our next success story. Let's discuss how we can help you achieve exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Become Our Next Success Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Request a Reference
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};