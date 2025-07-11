import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { FileText, ArrowRight, TrendingUp, Users, Clock, Star, Building2, Smartphone, Globe, Heart, ShoppingCart, GraduationCap } from "lucide-react";
import { navigateTo } from "../App";
import ranOutOfImage from "figma:asset/a27e320bb5458bd3eaa3fd6b8ba449e3d5998e26.png";
import seezunImage from "figma:asset/06e3cfb0c62c4da1116eaa2ecf65c8d2c54cf50a.png";
import wokaImage from "figma:asset/6e0cd179a2535c0a97f7dcdbcfedaa90806426b6.png";
import tradersCircuitImage from "figma:asset/bb73f20331b77dec7c6828cb2956b69f4b341b07.png";
import goodTimesImage from "figma:asset/23f5c8ed5a4ac8465485463b7980ce92ae7705f3.png";
import prospertyImage from "figma:asset/87119d910fd0358aab69df72cff53c0123554d13.png";

export const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedService, setSelectedService] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState("all");

  const industries = [
    "All Industries",
    "Healthcare",
    "E-commerce",
    "Education",
    "Technology",
    "FinTech",
    "Real Estate"
  ];

  const services = [
    "All Services",
    "Mobile App",
    "Web Development", 
    "Grocery Planning",
    "Barcode Scanning",
    "Voice Commands",
    "Admin CMS",
    "Marketplace",
    "P2P",
    "Native App",
    "Streaming",
    "Analytics",
    "Fintech",
    "Investment",
    "Events",
    "Booking",
    "Real Estate",
    "Platform"
  ];

  const technologies = [
    "All Technologies",
    "React",
    "React Native",
    "Node.js",
    "AWS",
    "Voice Recognition",
    "WebSocket",
    "MongoDB",
    "Swift",
    "Kotlin",
    "Analytics SDK",
    "Trading APIs",
    "Payment APIs"
  ];

  const caseStudies = [
    {
      id: 1,
      title: "RanOutOf",
      client: "Rishabh Jain",
      subtitle: "Smart Grocery Planning Application",
      industry: "Technology",
      services: ["Grocery Planning", "Barcode Scanning", "Voice Commands", "Admin CMS"],
      technologies: ["React Native", "Node.js", "AWS", "Voice Recognition"],
      image: ranOutOfImage,
      results: [
        "Smart grocery list management",
        "Barcode scanning integration",
        "Voice command functionality",
        "Web-based admin CMS"
      ],
      description: "WDI developed a smart grocery planning app featuring barcode scanning, voice commands, reminders, and a web-based admin CMS for Global Ease Solutions.",
      duration: "6 months",
      teamSize: "8 experts",
      featured: true
    },
    {
      id: 2,
      title: "Seezun",
      client: "Seezun",
      subtitle: "P2P Fashion Marketplace Platform",
      industry: "E-commerce",
      services: ["Marketplace", "Fashion", "P2P", "Mobile & Web"],
      technologies: ["React", "React Native", "Node.js", "MongoDB"],
      image: seezunImage,
      results: [
        "85% brand recognition increase",
        "P2P marketplace success",
        "Mobile & web platforms",
        "South Asian ethnicwear focus"
      ],
      description: "Seezun is a trend-driven P2P fashion marketplace enabling users to rent, buy, sell, or lend South Asian ethnicwear via mobile and web platforms.",
      duration: "6 months",
      teamSize: "10 experts",
      featured: true
    },
    {
      id: 3,
      title: "WOKA",
      client: "WOKA Creations Pvt. Ltd",
      subtitle: "High-Performance Native App Platform",
      industry: "Education",
      services: ["Native App", "Streaming", "Analytics", "Android & iOS"],
      technologies: ["Swift", "Kotlin", "AWS", "Analytics SDK"],
      image: wokaImage,
      results: [
        "300% user retention improvement",
        "Native iOS & Android apps",
        "Deep analytics integration",
        "120-hour monthly support"
      ],
      description: "WDI transformed WOKA's hybrid app into a high-performance native Android and iOS platform featuring seamless streaming, deep analytics, and robust 120-hour monthly support.",
      duration: "10 months",
      teamSize: "15 experts",
      featured: true
    },
    {
      id: 4,
      title: "TradersCircuit",
      client: "TradersCircuit",
      subtitle: "Investment Platform for Indian Market",
      industry: "FinTech",
      services: ["Fintech", "Investment", "Indian Market"],
      technologies: ["React", "Node.js", "AWS", "Trading APIs"],
      image: tradersCircuitImage,
      results: [
        "Handcrafted investment decisions",
        "Indian market focus",
        "Personalized financial planning",
        "Secure trading platform"
      ],
      description: "Unlock a new dimension of investment decisions in the booming Indian market. With every move handcrafted for your unique needs, Trader Circuit ensures every step is nailed to your financial future.",
      duration: "12 months",
      teamSize: "18 experts",
      featured: false
    },
    {
      id: 5,
      title: "GoodTimes",
      client: "GoodTimes Ltd",
      subtitle: "Event Booking & Lifestyle Platform",
      industry: "Technology",
      services: ["Events", "Booking", "Lifestyle"],
      technologies: ["React", "React Native", "Node.js", "Payment APIs"],
      image: goodTimesImage,
      results: [
        "Seamless event discovery",
        "Easy booking system",
        "Never miss celebrations",
        "Enhanced user experience"
      ],
      description: "From casual hangouts to special celebrations, Good Times makes browsing and booking a breeze, so you never miss out.",
      duration: "5 months",
      teamSize: "9 experts",
      featured: false
    },
    {
      id: 6,
      title: "Prosperty",
      client: "Prosperty",
      subtitle: "Digital Real Estate Platform",
      industry: "Real Estate",
      services: ["Real Estate", "Platform", "Web & Mobile", "Investments"],
      technologies: ["React", "React Native", "Node.js", "AWS"],
      image: prospertyImage,
      results: [
        "Multi-phase rollout success",
        "Seamless property listings",
        "Investment opportunities",
        "Post-sale services integration"
      ],
      description: "WDI developed a digital real estate platform for Prosperty Infra, enabling seamless property listings, investments, and post-sale services through a multi-phase web and mobile rollout.",
      duration: "14 months",
      teamSize: "20 experts",
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "all" || study.industry === selectedIndustry;
    const matchesService = selectedService === "all" || study.services.includes(selectedService);
    const matchesTechnology = selectedTechnology === "all" || study.technologies.includes(selectedTechnology);
    
    return matchesIndustry && matchesService && matchesTechnology;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  const getIndustryIcon = (industry: string) => {
    const icons = {
      "Healthcare": Heart,
      "E-commerce": ShoppingCart,
      "Education": GraduationCap,
      "Technology": Smartphone,
      "FinTech": Building2,
      "Real Estate": Building2
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
              <FileText className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                Case Studies
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Case Studies: Real Solutions, Real Results
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              At WDI, we pride ourselves on turning challenges into success stories. Our Case Studies showcase how we've partnered with clients across various industries to deliver innovative, tailored solutions that drive tangible business outcomes. Explore our projects to see the impact of our expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card/50 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-48 bg-background/50 border-white/10 text-white">
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
              <SelectTrigger className="w-48 bg-background/50 border-white/10 text-white">
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

            <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
              <SelectTrigger className="w-48 bg-background/50 border-white/10 text-white">
                <SelectValue placeholder="Technology" className="text-white" />
              </SelectTrigger>
              <SelectContent>
                {technologies.map((technology) => (
                  <SelectItem 
                    key={technology} 
                    value={technology === "All Technologies" ? "all" : technology}
                    className={technology === "All Technologies" ? "text-white" : ""}
                  >
                    {technology}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">
              {filteredCaseStudies.length} case stud{filteredCaseStudies.length !== 1 ? 'ies' : 'y'} found
            </span>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Success Stories</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study) => {
                const IndustryIcon = getIndustryIcon(study.industry);
                return (
                  <Card 
                    key={study.id} 
                    className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group cursor-pointer overflow-hidden"
                    onClick={() => {
                      if (study.title === 'Seezun') {
                        navigateTo('/projects/seezun');
                      } else if (study.title === 'WOKA') {
                        navigateTo('/projects/woka');
                      } else if (study.title === 'RanOutOf') {
                        navigateTo('/projects/ranoutof');
                      } else {
                        navigateTo('/case-studies');
                      }
                    }}
                  >
                    <div className="aspect-video overflow-hidden relative bg-background/20">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <IndustryIcon className="w-4 h-4 text-[#E5195E]" />
                        <Badge variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-none">
                          {study.industry}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#E5195E] transition-colors duration-300">
                        {study.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">{study.client}</p>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{study.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex flex-wrap gap-1">
                          {study.services.map((service) => (
                            <Badge key={service} variant="outline" className="border-white/20 text-white/70 text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-background/30 rounded-lg">
                        {study.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="text-center">
                            <TrendingUp className="w-4 h-4 text-[#E5195E] mx-auto mb-1" />
                            <p className="text-xs text-muted-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {study.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {study.teamSize}
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-[#E5195E] hover:bg-[#E5195E]/10 p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (study.title === 'Seezun') {
                              navigateTo('/projects/seezun');
                            } else if (study.title === 'WOKA') {
                              navigateTo('/projects/woka');
                            } else if (study.title === 'RanOutOf') {
                              navigateTo('/projects/ranoutof');
                            } else {
                              navigateTo('/case-studies');
                            }
                          }}
                        >
                          View Details
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Case Studies */}
      {regularCaseStudies.length > 0 && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">More Success Stories</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((study) => {
                const IndustryIcon = getIndustryIcon(study.industry);
                return (
                  <Card 
                    key={study.id} 
                    className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group cursor-pointer overflow-hidden"
                    onClick={() => {
                      if (study.title === 'TradersCircuit') {
                        navigateTo('/projects/traderscircuit');
                      } else if (study.title === 'GoodTimes') {
                        navigateTo('/projects/goodtimes');
                      } else if (study.title === 'Prosperty') {
                        navigateTo('/projects/prosperty');
                      } else if (study.title === 'RanOutOf') {
                        navigateTo('/projects/ranoutof');
                      } else if (study.title === 'Seezun') {
                        navigateTo('/projects/seezun');
                      } else if (study.title === 'WOKA') {
                        navigateTo('/projects/woka');
                      } else {
                        navigateTo('/case-studies');
                      }
                    }}
                  >
                    <div className="aspect-video overflow-hidden bg-background/20">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <IndustryIcon className="w-4 h-4 text-[#E5195E]" />
                        <Badge variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-none">
                          {study.industry}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#E5195E] transition-colors duration-300 line-clamp-2">
                        {study.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">{study.client}</p>
                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{study.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-wrap gap-1">
                          {study.services.slice(0, 3).map((service) => (
                            <Badge key={service} variant="outline" className="border-white/20 text-white/70 text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {study.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 text-[#E5195E] flex-shrink-0" />
                            <p className="text-xs text-muted-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {study.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {study.teamSize}
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-[#E5195E] hover:bg-[#E5195E]/10 p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (study.title === 'TradersCircuit') {
                              navigateTo('/projects/traderscircuit');
                            } else if (study.title === 'GoodTimes') {
                              navigateTo('/projects/goodtimes');
                            } else if (study.title === 'Prosperty') {
                              navigateTo('/projects/prosperty');
                            } else if (study.title === 'RanOutOf') {
                              navigateTo('/projects/ranoutof');
                            } else if (study.title === 'Seezun') {
                              navigateTo('/projects/seezun');
                            } else if (study.title === 'WOKA') {
                              navigateTo('/projects/woka');
                            } else {
                              navigateTo('/case-studies');
                            }
                          }}
                        >
                          View Details
                        </Button>
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
      {filteredCaseStudies.length === 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">No case studies found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedIndustry("all");
                  setSelectedService("all");
                  setSelectedTechnology("all");
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how we can help your business achieve similar results. Let's discuss your project and explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                onClick={() => navigateTo('/start-a-project')}
              >
                See How We Can Help Your Business
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigateTo('/contact/request-a-proposal')}
              >
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};