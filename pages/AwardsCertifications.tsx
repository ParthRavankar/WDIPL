import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Award, Calendar, Users, Star, Trophy, Shield } from "lucide-react";

export const AwardsCertifications = () => {
  const awards = [
    {
      year: "2023",
      title: "Best Digital Transformation Company",
      organization: "Global Tech Awards",
      category: "Innovation Excellence",
      description: "Recognized for outstanding contributions to digital transformation across multiple industries.",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      year: "2023",
      title: "Client Satisfaction Excellence",
      organization: "Business Excellence Institute",
      category: "Customer Experience",
      description: "Achieved 98% client satisfaction rating based on independent third-party assessment.",
      icon: Star,
      color: "from-blue-400 to-blue-600"
    },
    {
      year: "2022",
      title: "AI Innovation Leader",
      organization: "AI & ML Conference",
      category: "Artificial Intelligence",
      description: "Leading innovation in AI-powered business solutions and machine learning implementations.",
      icon: Award,
      color: "from-purple-400 to-purple-600"
    },
    {
      year: "2022",
      title: "Top Mobile App Development Company",
      organization: "Mobile Excellence Awards",
      category: "Mobile Development",
      description: "Recognized for delivering exceptional mobile applications across iOS and Android platforms.",
      icon: Shield,
      color: "from-green-400 to-green-600"
    },
    {
      year: "2021",
      title: "Fast-Growing Tech Company",
      organization: "Tech Growth Awards",
      category: "Business Growth",
      description: "Fastest growing development company in the digital transformation sector.",
      icon: Trophy,
      color: "from-[#E5195E] to-[#FF6B9D]"
    },
    {
      year: "2021",
      title: "Best Workplace Culture",
      organization: "Great Place to Work",
      category: "Employee Experience",
      description: "Creating an exceptional work environment that fosters innovation and collaboration.",
      icon: Users,
      color: "from-orange-400 to-orange-600"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      category: "Quality Management",
      description: "International standard for quality management systems ensuring consistent service delivery.",
      icon: Shield,
      validUntil: "2025"
    },
    {
      name: "ISO 27001:2013",
      category: "Information Security",
      description: "International standard for information security management systems protecting client data.",
      icon: Shield,
      validUntil: "2025"
    },
    {
      name: "AWS Partner",
      category: "Cloud Computing",
      description: "Amazon Web Services certified partner with expertise in cloud solutions and architecture.",
      icon: Award,
      validUntil: "2024"
    },
    {
      name: "Microsoft Gold Partner",
      category: "Enterprise Solutions",
      description: "Microsoft's highest level of partnership demonstrating technical expertise and customer commitment.",
      icon: Award,
      validUntil: "2024"
    },
    {
      name: "Google Cloud Partner",
      category: "Cloud & AI",
      description: "Google Cloud certified partner specializing in AI/ML and cloud infrastructure solutions.",
      icon: Award,
      validUntil: "2024"
    },
    {
      name: "Agile & Scrum Certified",
      category: "Project Management",
      description: "Team certified in Agile methodologies and Scrum framework for efficient project delivery.",
      icon: Users,
      validUntil: "2024"
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
              Recognition & Trust
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Awards & 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Certifications</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is recognized by industry leaders and validated through prestigious certifications that ensure the highest standards of quality and security.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Industry Awards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition from leading organizations for our innovation, quality, and client satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="group">
                <div className="bg-card/50 rounded-2xl p-8 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  {/* Award Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-4`}>
                      <award.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-[#E5195E]/20 text-[#E5195E] border-[#E5195E]/30 text-xs">
                      {award.year}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E5195E] transition-colors duration-300">
                        {award.title}
                      </h3>
                      <p className="text-[#E5195E] font-medium text-sm mb-1">
                        {award.organization}
                      </p>
                      <p className="text-muted-foreground text-xs mb-3">
                        {award.category}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Certifications & Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Validated expertise and compliance with international standards ensuring quality and security
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-background/50 rounded-2xl p-6 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E5195E]/20 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-6 h-6 text-[#E5195E]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {cert.name}
                      </h3>
                      <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                        Valid until {cert.validUntil}
                      </Badge>
                    </div>
                    
                    <p className="text-[#E5195E] text-sm font-medium mb-2">
                      {cert.category}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Recognition by Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Industry Awards", color: "from-yellow-400 to-yellow-600" },
              { number: "10+", label: "Certifications", color: "from-blue-400 to-blue-600" },
              { number: "98%", label: "Client Satisfaction", color: "from-green-400 to-green-600" },
              { number: "5+", label: "Years of Excellence", color: "from-[#E5195E] to-[#FF6B9D]" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Experience Award-Winning Service
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with a recognized leader in digital transformation and experience the difference that excellence makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};