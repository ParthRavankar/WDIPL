import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";

export const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Sarah Chen",
      position: "Chief Executive Officer",
      bio: "With 15+ years in tech leadership, Sarah drives WDI's vision for digital innovation and global expansion.",
      experience: "Former VP at Microsoft, Stanford MBA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@wdi.com"
      }
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Technology Officer",
      bio: "Michael leads our technical strategy and ensures we stay at the forefront of emerging technologies.",
      experience: "Former Lead Engineer at Google, MIT Computer Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@wdi.com"
      }
    },
    {
      name: "Emily Watson",
      position: "Chief Operating Officer",
      bio: "Emily oversees global operations and ensures seamless delivery across all our international projects.",
      experience: "Former Operations Director at Amazon, Harvard Business School",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@wdi.com"
      }
    },
    {
      name: "David Kumar",
      position: "Head of AI & Machine Learning",
      bio: "David leads our AI initiatives and ensures we deliver cutting-edge machine learning solutions.",
      experience: "Former AI Research Scientist at Tesla, PhD in Computer Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@wdi.com"
      }
    },
    {
      name: "Lisa Thompson",
      position: "VP of Design & User Experience",
      bio: "Lisa ensures our solutions are not just functional but also provide exceptional user experiences.",
      experience: "Former Design Lead at Apple, RISD Design Graduate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@wdi.com"
      }
    },
    {
      name: "James Park",
      position: "VP of Business Development",
      bio: "James drives our global partnerships and expansion into new markets and industries.",
      experience: "Former BD Director at Salesforce, Wharton MBA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@wdi.com"
      }
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
              Leadership Team
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Meet the Visionaries Behind 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> WDI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our leadership team combines decades of experience from top tech companies with a shared passion for digital innovation and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-card/50 rounded-2xl p-8 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#E5195E]/20 to-[#FF6B9D]/20">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-[#E5195E] font-medium mb-3">
                        {leader.position}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                    
                    <div className="pt-2 border-t border-white/10">
                      <p className="text-xs text-muted-foreground mb-3">
                        {leader.experience}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex gap-3">
                        <a 
                          href={leader.social.linkedin}
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E5195E]/20 flex items-center justify-center transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                        <a 
                          href={leader.social.twitter}
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E5195E]/20 flex items-center justify-center transition-colors duration-200"
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                        <a 
                          href={`mailto:${leader.social.email}`}
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E5195E]/20 flex items-center justify-center transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Advisory Board
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry experts who guide our strategic direction and innovation initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Alan Foster",
                title: "Former CTO, Meta",
                expertise: "AI & Emerging Technologies"
              },
              {
                name: "Maria Santos",
                title: "Former VP, Netflix",
                expertise: "Product Strategy & Growth"
              },
              {
                name: "Robert Kim",
                title: "Former Director, Amazon",
                expertise: "Cloud Infrastructure & Scalability"
              }
            ].map((advisor, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-background/50 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5195E]/20 to-[#FF6B9D]/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#E5195E]">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{advisor.name}</h3>
                <p className="text-sm text-[#E5195E] mb-2">{advisor.title}</p>
                <p className="text-xs text-muted-foreground">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Want to Work with Our Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing team of innovators or partner with us to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Explore Careers
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};