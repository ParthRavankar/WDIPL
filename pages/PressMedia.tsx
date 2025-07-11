import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Calendar, ExternalLink, Download, Newspaper, Mic, Video, Image } from "lucide-react";

export const PressMedia = () => {
  const pressReleases = [
    {
      date: "December 15, 2023",
      title: "WDI Announces $10M Series A Funding for Global Expansion",
      excerpt: "Web Development Institute secures Series A funding to accelerate international growth and enhance AI capabilities.",
      category: "Funding",
      link: "#"
    },
    {
      date: "November 8, 2023",
      title: "WDI Wins 'Best Digital Transformation Company' at Global Tech Awards",
      excerpt: "Recognition for outstanding contributions to digital innovation across multiple industries.",
      category: "Awards",
      link: "#"
    },
    {
      date: "October 22, 2023",
      title: "WDI Launches New AI-Powered Development Platform",
      excerpt: "Revolutionary platform combines machine learning with traditional development to accelerate project delivery.",
      category: "Product Launch",
      link: "#"
    },
    {
      date: "September 5, 2023",
      title: "WDI Opens New Development Center in Singapore",
      excerpt: "Strategic expansion into Southeast Asian market with focus on fintech and e-commerce solutions.",
      category: "Expansion",
      link: "#"
    }
  ];

  const mediaKits = [
    {
      title: "Company Overview",
      description: "Complete company background, mission, and key statistics",
      type: "PDF",
      size: "2.1 MB",
      icon: Newspaper
    },
    {
      title: "Leadership Bios",
      description: "Executive team biographies and high-resolution photos",
      type: "ZIP",
      size: "15.3 MB",
      icon: Image
    },
    {
      title: "Logo Package",
      description: "Brand logos in various formats and color variations",
      type: "ZIP",
      size: "8.7 MB",
      icon: Image
    },
    {
      title: "Product Screenshots",
      description: "High-resolution screenshots of our digital solutions",
      type: "ZIP",
      size: "25.4 MB",
      icon: Image
    }
  ];

  const mediaAppearances = [
    {
      date: "December 10, 2023",
      title: "The Future of AI in Business Development",
      outlet: "TechCrunch Podcast",
      type: "Podcast",
      guest: "Sarah Chen, CEO",
      icon: Mic
    },
    {
      date: "November 25, 2023",
      title: "Digital Transformation Trends 2024",
      outlet: "Forbes",
      type: "Article",
      guest: "Michael Rodriguez, CTO",
      icon: Newspaper
    },
    {
      date: "November 15, 2023",
      title: "Building Global Remote Teams",
      outlet: "Web Summit 2023",
      type: "Speaking",
      guest: "Emily Watson, COO",
      icon: Video
    },
    {
      date: "October 30, 2023",
      title: "The Rise of No-Code Development",
      outlet: "Wired Magazine",
      type: "Interview",
      guest: "David Kumar, Head of AI",
      icon: Newspaper
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
              Press & Media
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Latest News & 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Media Coverage</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with WDI's latest announcements, media appearances, and industry insights. Access our media kit and press resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Download Media Kit
                <Download className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Contact PR Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Latest Press Releases
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed about WDI's major announcements and company updates
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-card/50 rounded-2xl p-8 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-[#E5195E]/20 text-[#E5195E] border-[#E5195E]/30">
                        {release.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300">
                      {release.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {release.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Read More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Media Kit & Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for media coverage, including logos, bios, and company information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKits.map((kit, index) => (
              <div key={index} className="bg-background/50 rounded-2xl p-6 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <kit.icon className="w-8 h-8 text-[#E5195E] mb-4 group-hover:scale-110 transition-transform duration-300" />
                
                <h3 className="text-lg font-semibold text-white mb-2">{kit.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{kit.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    {kit.type} • {kit.size}
                  </div>
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Recent Media Appearances
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team's insights featured across top industry publications and events
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mediaAppearances.map((appearance, index) => (
              <div key={index} className="bg-card/50 rounded-2xl p-6 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E5195E]/20 flex items-center justify-center flex-shrink-0">
                    <appearance.icon className="w-6 h-6 text-[#E5195E]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="border-white/20 text-white text-xs">
                        {appearance.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{appearance.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#E5195E] transition-colors duration-300">
                      {appearance.title}
                    </h3>
                    
                    <p className="text-[#E5195E] text-sm font-medium mb-1">{appearance.outlet}</p>
                    <p className="text-muted-foreground text-sm">{appearance.guest}</p>
                  </div>
                  
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Media Inquiries
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For press inquiries, interview requests, or additional information, please contact our media team
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background/50 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Press Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#E5195E] font-medium">Sarah Martinez</p>
                    <p className="text-muted-foreground text-sm">Head of Communications</p>
                  </div>
                  <div>
                    <p className="text-white text-sm">press@wdi.com</p>
                    <p className="text-white text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Partnership Inquiries</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#E5195E] font-medium">James Park</p>
                    <p className="text-muted-foreground text-sm">VP of Business Development</p>
                  </div>
                  <div>
                    <p className="text-white text-sm">partnerships@wdi.com</p>
                    <p className="text-white text-sm">+1 (555) 123-4568</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow our journey and get the latest updates on our innovations and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Subscribe to Updates
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Follow Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};