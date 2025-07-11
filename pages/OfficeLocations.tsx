import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Phone, Mail, Clock, Navigation2, Globe, Users, ArrowRight } from "lucide-react";
import { navigateTo } from "../App";

export const OfficeLocations = () => {
  const offices = [
    {
      id: 1,
      name: "WDI Headquarters - Mumbai, India",
      type: "Headquarters",
      address: {
        street: "123 Innovation Drive, Bandra Kurla Complex",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400051",
        country: "India"
      },
      contact: {
        phone: "+91 22 4567 8900",
        email: "mumbai@wdi.com",
        generalEmail: "india@wdi.com"
      },
      workingHours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      description: "Our Mumbai headquarters serves as the primary hub for operations across India and Southeast Asia. This state-of-the-art facility houses our main development teams, executive leadership, and client services.",
      employees: "150+",
      established: "2018",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
      mapEmbed: "https://maps.google.com/maps?q=mumbai+bandra+kurla+complex&output=embed",
      features: [
        "24/7 Development Center",
        "Client Meeting Rooms",
        "Innovation Lab",
        "Executive Offices"
      ]
    },
    {
      id: 2,
      name: "WDI Americas - New York, USA",
      type: "Regional Office",
      address: {
        street: "456 Broadway, Suite 2000",
        city: "New York",
        state: "NY",
        zip: "10013",
        country: "United States"
      },
      contact: {
        phone: "+1 (555) 123-4567",
        email: "newyork@wdi.com",
        generalEmail: "americas@wdi.com"
      },
      workingHours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      description: "Our New York office serves as the strategic hub for North and South American markets, focusing on client relationships, business development, and project management.",
      employees: "45+",
      established: "2020",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      mapEmbed: "https://maps.google.com/maps?q=new+york+broadway&output=embed",
      features: [
        "Client Services Center",
        "Business Development Hub",
        "Conference Facilities",
        "Co-working Spaces"
      ]
    },
    {
      id: 3,
      name: "WDI Europe - London, UK",
      type: "Regional Office",
      address: {
        street: "789 Canary Wharf, Level 15",
        city: "London",
        state: "England",
        zip: "E14 5AB",
        country: "United Kingdom"
      },
      contact: {
        phone: "+44 20 7946 0958",
        email: "london@wdi.com",
        generalEmail: "europe@wdi.com"
      },
      workingHours: "Mon-Fri: 9:00 AM - 5:30 PM GMT",
      description: "Our London office coordinates operations across Europe, Middle East, and Africa (EMEA), providing localized support and ensuring compliance with regional regulations.",
      employees: "35+",
      established: "2021",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      mapEmbed: "https://maps.google.com/maps?q=london+canary+wharf&output=embed",
      features: [
        "EMEA Operations Center",
        "Compliance Office",
        "Client Success Team",
        "Partnership Hub"
      ]
    },
    {
      id: 4,
      name: "WDI Development Center - Bangalore, India",
      type: "Development Center",
      address: {
        street: "321 Electronic City Phase 2",
        city: "Bangalore",
        state: "Karnataka",
        zip: "560100",
        country: "India"
      },
      contact: {
        phone: "+91 80 4567 8900",
        email: "bangalore@wdi.com",
        generalEmail: "development@wdi.com"
      },
      workingHours: "Mon-Fri: 9:30 AM - 6:30 PM IST",
      description: "Our Bangalore development center focuses on cutting-edge software development, AI/ML research, and technical innovation. This facility serves as our primary R&D hub.",
      employees: "200+",
      established: "2019",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      mapEmbed: "https://maps.google.com/maps?q=bangalore+electronic+city&output=embed",
      features: [
        "AI/ML Research Lab",
        "24/7 Development Teams",
        "Testing & QA Center",
        "Technical Training Facility"
      ]
    },
    {
      id: 5,
      name: "WDI Asia Pacific - Singapore",
      type: "Regional Office",
      address: {
        street: "159 Marina Bay Financial Centre",
        city: "Singapore",
        state: "Central Region",
        zip: "018963",
        country: "Singapore"
      },
      contact: {
        phone: "+65 6789 0123",
        email: "singapore@wdi.com",
        generalEmail: "apac@wdi.com"
      },
      workingHours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      description: "Our Singapore office manages operations across the Asia-Pacific region, serving as a gateway for businesses expanding into Asian markets.",
      employees: "25+",
      established: "2022",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
      mapEmbed: "https://maps.google.com/maps?q=singapore+marina+bay&output=embed",
      features: [
        "APAC Business Hub",
        "Regional Sales Office",
        "Client Meeting Center",
        "Market Research Unit"
      ]
    }
  ];

  const globalStats = [
    { number: "5", label: "Global Offices" },
    { number: "450+", label: "Team Members" },
    { number: "25+", label: "Countries Served" },
    { number: "24/7", label: "Development Support" }
  ];

  const getOfficeTypeColor = (type: string) => {
    switch (type) {
      case "Headquarters": return "bg-[#E5195E] text-white";
      case "Regional Office": return "bg-blue-500/20 text-blue-400";
      case "Development Center": return "bg-green-500/20 text-green-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                Global Presence
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Our Office Locations: Connecting Globally, Serving Locally
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              WDI operates globally with strategic office locations and development centers designed to serve our clients efficiently and provide a dynamic work environment for our teams. Find the nearest WDI office below.
            </p>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {globalStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Visual */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Global Network
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategically located offices ensure we're always close to our clients and can provide local support with global expertise.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-video bg-card/50 rounded-lg border border-white/10 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#E5195E]/10 via-background to-background relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30" />
                
                {/* Location Pins */}
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-[#E5195E] rounded-full animate-pulse shadow-lg shadow-[#E5195E]/50" />
                  <div className="text-xs text-white mt-1 font-medium">NYC</div>
                </div>
                
                <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-[#E5195E] rounded-full animate-pulse shadow-lg shadow-[#E5195E]/50" />
                  <div className="text-xs text-white mt-1 font-medium">London</div>
                </div>
                
                <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
                  <div className="w-6 h-6 bg-[#E5195E] rounded-full animate-pulse shadow-lg shadow-[#E5195E]/50 ring-4 ring-[#E5195E]/20" />
                  <div className="text-xs text-white mt-1 font-medium">Mumbai HQ</div>
                </div>
                
                <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                  <div className="text-xs text-white mt-1 font-medium">Bangalore</div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/6 transform translate-x-1/2 translate-y-1/2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" />
                  <div className="text-xs text-white mt-1 font-medium">Singapore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Office Locations</h2>
          
          <div className="space-y-12">
            {offices.map((office) => (
              <Card key={office.id} className="bg-background/50 border-white/10 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img 
                      src={office.image} 
                      alt={office.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{office.name}</h3>
                          <Badge className={`text-xs ${getOfficeTypeColor(office.type)}`}>
                            {office.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{office.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#E5195E] mt-0.5" />
                          <div>
                            <p className="text-white font-medium mb-1">Address</p>
                            <p className="text-muted-foreground text-sm">
                              {office.address.street}<br />
                              {office.address.city}, {office.address.state} {office.address.zip}<br />
                              {office.address.country}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-[#E5195E] mt-0.5" />
                          <div>
                            <p className="text-white font-medium mb-1">Phone</p>
                            <p className="text-muted-foreground text-sm">{office.contact.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-[#E5195E] mt-0.5" />
                          <div>
                            <p className="text-white font-medium mb-1">Email</p>
                            <p className="text-muted-foreground text-sm">{office.contact.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-[#E5195E] mt-0.5" />
                          <div>
                            <p className="text-white font-medium mb-1">Working Hours</p>
                            <p className="text-muted-foreground text-sm">{office.workingHours}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-[#E5195E] mt-0.5" />
                          <div>
                            <p className="text-white font-medium mb-1">Team Size</p>
                            <p className="text-muted-foreground text-sm">{office.employees} employees</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Globe className="w-5 h-5 text-[#E5195E] mt-0.5" />
                          <div>
                            <p className="text-white font-medium mb-1">Established</p>
                            <p className="text-muted-foreground text-sm">{office.established}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-white font-medium mb-3">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {office.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="border-white/20 text-white/70">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                        <Navigation2 className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Contact Office
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                General Inquiries
              </h2>
              <p className="text-muted-foreground">
                For general inquiries, please use our main contact form or reach out to our global team.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-[#E5195E] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Global Email</h3>
                  <p className="text-muted-foreground mb-4">info@wdi.com</p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-[#E5195E] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Global Phone</h3>
                  <p className="text-muted-foreground mb-4">+1 (555) 123-4567</p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Visit Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a meeting at any of our offices or connect with us virtually to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white" onClick={() => navigateTo('/contact')}>
                Visit Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigateTo('/contact/schedule-a-discovery-call')}>
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};