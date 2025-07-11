import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Calendar, MapPin, Users, Award, Rocket, Globe } from "lucide-react";

export const OurHistory = () => {
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "WDI was established with a vision to revolutionize digital development",
      icon: Rocket,
      achievements: ["First office in Silicon Valley", "Initial team of 5 developers", "First 10 clients"]
    },
    {
      year: "2017",
      title: "International Expansion",
      description: "Expanded operations to serve clients across multiple continents",
      icon: Globe,
      achievements: ["Opened offices in 3 countries", "Served 100+ clients", "Team grew to 25 experts"]
    },
    {
      year: "2019",
      title: "AI & ML Specialization",
      description: "Launched dedicated AI/ML division to meet growing market demand",
      icon: Users,
      achievements: ["AI/ML team formation", "200+ AI projects", "Industry recognition"]
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Received multiple awards for innovation and client satisfaction",
      icon: Award,
      achievements: ["Best Development Company", "Client Satisfaction Award", "Innovation Excellence"]
    },
    {
      year: "2023",
      title: "Global Leadership",
      description: "Established as a leading digital transformation partner worldwide",
      icon: MapPin,
      achievements: ["500+ projects delivered", "40+ countries served", "50+ expert team"]
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
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              A Journey of 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From a small startup to a global digital transformation leader, discover how WDI has evolved to become a trusted partner for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E5195E] to-[#FF6B9D]" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5195E] to-[#FF6B9D] flex items-center justify-center shadow-lg">
                        <milestone.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-12">
                      <div className="bg-card/50 rounded-2xl p-8 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className="bg-[#E5195E]/20 text-[#E5195E] border-[#E5195E]/30">
                            {milestone.year}
                          </Badge>
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {milestone.description}
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          {milestone.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#E5195E]" />
                              <span className="text-sm text-white">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Stats */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Growth Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that tell the story of our continuous evolution and success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { year: "2015", number: "5", label: "Team Members", color: "from-blue-400 to-blue-600" },
              { year: "2017", number: "25", label: "Expert Developers", color: "from-green-400 to-green-600" },
              { year: "2019", number: "35", label: "Specialists", color: "from-purple-400 to-purple-600" },
              { year: "2023", number: "50+", label: "Global Team", color: "from-[#E5195E] to-[#FF6B9D]" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-background/50 border border-white/10">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-[#E5195E]">{stat.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Future is Bright
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              As we continue to grow and evolve, we remain committed to pushing the boundaries of what's possible in digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Join Our Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Explore Careers
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};