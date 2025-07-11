import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Heart, Users, Target, Lightbulb, Globe, Award, Coffee, Gamepad2, BookOpen } from "lucide-react";

export const CultureValues = () => {
  const values = [
    {
      icon: Heart,
      title: "People First",
      description: "We put our team and clients at the heart of everything we do. Success is measured not just by results, but by the positive impact we have on people's lives.",
      examples: ["Flexible work arrangements", "Mental health support", "Personal development plans"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "We encourage creative thinking, experimentation, and learning from failure. Every challenge is an opportunity to find a better way.",
      examples: ["Innovation time (20% projects)", "Hackathons and idea sessions", "Failure celebration stories"]
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe diverse perspectives create better solutions. We foster an inclusive environment where everyone's voice matters.",
      examples: ["Cross-functional teams", "Open feedback culture", "Mentorship programs"]
    },
    {
      icon: Target,
      title: "Excellence Drive",
      description: "We're committed to delivering exceptional quality in everything we do, continuously raising the bar for ourselves and the industry.",
      examples: ["Code review standards", "Client satisfaction metrics", "Continuous learning culture"]
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We embrace cultural diversity and think globally while acting locally, bringing international best practices to every project.",
      examples: ["Remote-first culture", "Cultural awareness training", "Global project teams"]
    },
    {
      icon: Award,
      title: "Integrity Always",
      description: "We act with honesty, transparency, and ethical principles in all our interactions, building trust through consistent actions.",
      examples: ["Transparent communication", "Ethical business practices", "Fair hiring processes"]
    }
  ];

  const cultureHighlights = [
    {
      icon: Coffee,
      title: "Virtual Coffee Chats",
      description: "Regular informal meetings to connect team members across different time zones and projects."
    },
    {
      icon: BookOpen,
      title: "Learning Fridays",
      description: "Dedicated time every Friday for personal learning, skill development, and knowledge sharing."
    },
    {
      icon: Gamepad2,
      title: "Game Nights",
      description: "Monthly virtual game nights and team challenges to build relationships and have fun together."
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Structured mentoring relationships to support career growth and knowledge transfer."
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
              Our Culture
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Culture & Values That 
              <span className="bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent"> Drive Us Forward</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our culture is built on shared values that guide how we work, interact, and grow together as a global team committed to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that shape our decisions, interactions, and commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card/50 rounded-2xl p-8 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group">
                <value.icon className="w-8 h-8 text-[#E5195E] mb-6 group-hover:scale-110 transition-transform duration-300" />
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#E5195E] transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {value.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white/80 mb-3">In Action:</h4>
                  {value.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5195E]" />
                      <span className="text-sm text-muted-foreground">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Life at WDI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How we bring our values to life through daily practices and team traditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureHighlights.map((highlight, index) => (
              <div key={index} className="bg-background/50 rounded-2xl p-6 border border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 text-center">
                <highlight.icon className="w-8 h-8 text-[#E5195E] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Team Says
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our team members about their experience working at WDI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "WDI has given me the freedom to innovate and grow professionally while maintaining a perfect work-life balance. The team genuinely cares about each other's success.",
                author: "Sarah Kim",
                role: "Senior Frontend Developer",
                tenure: "2 years at WDI"
              },
              {
                quote: "The collaborative culture here is unlike anywhere I've worked before. Ideas flow freely, and everyone's input is valued regardless of their role or seniority.",
                author: "Michael Chen",
                role: "AI/ML Engineer",
                tenure: "1.5 years at WDI"
              },
              {
                quote: "I love how we're encouraged to take risks and learn from failures. The learning opportunities and mentorship have accelerated my career growth tremendously.",
                author: "Emma Rodriguez",
                role: "Product Designer",
                tenure: "3 years at WDI"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card/50 rounded-2xl p-8 border border-white/10">
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-[#E5195E] text-sm font-medium">{testimonial.role}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.tenure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Diversity & Inclusion
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe that diverse teams create better solutions. Our commitment to inclusion means creating an environment where everyone feels valued, respected, and empowered to contribute their best work.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E5195E]" />
                  <span className="text-white">50% of our leadership team identifies as underrepresented</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E5195E]" />
                  <span className="text-white">Team members from 15+ countries and cultures</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E5195E]" />
                  <span className="text-white">Regular D&I training and awareness programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E5195E]" />
                  <span className="text-white">Employee resource groups and support networks</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#E5195E]/20 to-[#FF6B9D]/20 border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-[#E5195E] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Global Team</h3>
                  <p className="text-muted-foreground">
                    United by shared values, enriched by diverse perspectives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work-Life Balance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Work-Life Integration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in sustainable success that doesn't come at the cost of personal well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Flexible Hours", description: "Work when you're most productive" },
              { title: "Remote First", description: "Work from anywhere in the world" },
              { title: "Unlimited PTO", description: "Take the time you need to recharge" },
              { title: "Wellness Support", description: "Mental health and fitness programs" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card/50 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#E5195E]/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-[#E5195E]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
              Ready to Be Part of Our Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join a culture that values growth, innovation, and the success of every team member.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Explore Careers
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};