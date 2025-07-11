import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar, Clock, Video, Phone, MessageSquare, ArrowRight, CheckCircle, User, Mail, Building2, Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { navigateTo } from "../App";

export const ScheduleDiscoveryCall = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedExpert, setSelectedExpert] = useState("any");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    callPurpose: "",
    meetingType: "video"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const experts = [
    {
      id: "john-smith",
      name: "John Smith",
      title: "Senior Solutions Architect",
      specialties: ["Enterprise Software", "Cloud Solutions", "System Architecture"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      experience: "12+ years"
    },
    {
      id: "sarah-chen",
      name: "Sarah Chen",
      title: "AI/ML Solutions Expert",
      specialties: ["Artificial Intelligence", "Machine Learning", "Data Science"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80",
      experience: "8+ years"
    },
    {
      id: "michael-rodriguez",
      name: "Michael Rodriguez",
      title: "Mobile App Development Lead",
      specialties: ["iOS Development", "Android Development", "Cross-Platform"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      experience: "10+ years"
    },
    {
      id: "emma-johnson",
      name: "Emma Johnson",
      title: "UI/UX Design Director",
      specialties: ["User Experience", "Design Strategy", "Prototyping"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      experience: "9+ years"
    }
  ];

  const callExpectations = [
    {
      icon: MessageSquare,
      title: "A friendly chat, not a sales pitch",
      description: "Our experts focus on understanding your needs and providing valuable insights"
    },
    {
      icon: Target,
      title: "Discussion about your project ideas, challenges, and goals",
      description: "We'll explore your vision and identify potential solutions together"
    },
    {
      icon: Lightbulb,
      title: "Expert insights and potential solutions",
      description: "Get professional recommendations based on our industry experience"
    },
    {
      icon: CheckCircle,
      title: "No obligation to proceed",
      description: "This is a consultation to help you make informed decisions"
    }
  ];

  const availableDates = [
    "2024-01-15", "2024-01-16", "2024-01-17", "2024-01-18", "2024-01-19",
    "2024-01-22", "2024-01-23", "2024-01-24", "2024-01-25", "2024-01-26",
    "2024-01-29", "2024-01-30", "2024-01-31", "2024-02-01", "2024-02-02"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`Great! Your discovery call has been scheduled for ${selectedDate} at ${selectedTime}. You'll receive a confirmation email shortly with meeting details.`);
    
    // Reset form
    setFormData({
      name: "", email: "", company: "", phone: "", callPurpose: "", meetingType: "video"
    });
    setSelectedDate("");
    setSelectedTime("");
    setSelectedExpert("any");
    setIsSubmitting(false);
  };

  const selectedExpertData = selectedExpert && selectedExpert !== "any" ? experts.find(expert => expert.id === selectedExpert) : null;

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                Free Consultation
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Schedule a Discovery Call: Let's Connect & Explore Your Vision
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ready to explore possibilities and discuss your project in detail? Book a free, no-obligation Discovery Call with one of WDI's expert consultants. We'll listen to your needs, answer your questions, and identify how our services can best align with your business objectives.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>30-45 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>Video or Phone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="bg-background/50 border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Book Your Discovery Call</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Name *</label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                            className="bg-card/50 border-white/10"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Email *</label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                            className="bg-card/50 border-white/10"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Company Name *</label>
                          <Input
                            required
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            placeholder="Your company name"
                            className="bg-card/50 border-white/10"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+1 (555) 123-4567"
                            className="bg-card/50 border-white/10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Meeting Preferences */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Meeting Preferences</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Preferred Meeting Type *</label>
                          <Select value={formData.meetingType} onValueChange={(value) => handleInputChange("meetingType", value)}>
                            <SelectTrigger className="bg-card/50 border-white/10 text-white">
                              <SelectValue placeholder="Select meeting type" className="text-white" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="video">Video Call (Preferred)</SelectItem>
                              <SelectItem value="phone">Phone Call</SelectItem>
                              <SelectItem value="in-person">In-Person (if local)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Preferred Expert</label>
                          <Select value={selectedExpert} onValueChange={setSelectedExpert}>
                            <SelectTrigger className="bg-card/50 border-white/10 text-white">
                              <SelectValue placeholder="Any available expert" className="text-white" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any available expert</SelectItem>
                              {experts.map((expert) => (
                                <SelectItem key={expert.id} value={expert.id}>
                                  {expert.name} - {expert.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Brief purpose of the call *</label>
                        <Textarea
                          required
                          value={formData.callPurpose}
                          onChange={(e) => handleInputChange("callPurpose", e.target.value)}
                          placeholder="Tell us about your project, challenges, or what you'd like to discuss..."
                          rows={3}
                          className="bg-card/50 border-white/10"
                        />
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Select Date & Time</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Preferred Date *</label>
                          <Select value={selectedDate} onValueChange={setSelectedDate}>
                            <SelectTrigger className="bg-card/50 border-white/10 text-white">
                              <SelectValue placeholder="Select a date" className="text-white" />
                            </SelectTrigger>
                            <SelectContent>
                              {availableDates.map((date) => (
                                <SelectItem key={date} value={date}>
                                  {new Date(date).toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                  })}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">Preferred Time (EST) *</label>
                          <Select value={selectedTime} onValueChange={setSelectedTime}>
                            <SelectTrigger className="bg-card/50 border-white/10 text-white">
                              <SelectValue placeholder="Select a time" className="text-white" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={!selectedDate || !selectedTime || isSubmitting}
                      className="w-full bg-[#E5195E] hover:bg-[#E5195E]/90 text-white disabled:opacity-50"
                    >
                      {isSubmitting ? "Booking Your Call..." : "Book Your Free Consultation Now"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              
              {/* Selected Expert Info */}
              {selectedExpertData && (
                <Card className="bg-background/50 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Your Expert Consultant</h3>
                    <div className="flex items-start gap-4">
                      <img 
                        src={selectedExpertData.image} 
                        alt={selectedExpertData.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{selectedExpertData.name}</h4>
                        <p className="text-[#E5195E] text-sm mb-2">{selectedExpertData.title}</p>
                        <p className="text-muted-foreground text-sm mb-2">{selectedExpertData.experience} experience</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedExpertData.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="border-white/20 text-white/70 text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* What to Expect */}
              <Card className="bg-background/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">What to Expect from Your Call</h3>
                  <div className="space-y-4">
                    {callExpectations.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#E5195E]/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-[#E5195E]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                            <p className="text-muted-foreground text-xs">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Contact */}
              <Card className="bg-background/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Prefer Email?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    If scheduling isn't convenient, you can reach us directly via email.
                  </p>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email to info@wdi.com
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Expert Consultants</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced consultants are ready to discuss your project and provide valuable insights based on years of industry experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert) => (
              <Card key={expert.id} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-white font-semibold mb-1">{expert.name}</h3>
                  <p className="text-[#E5195E] text-sm mb-2">{expert.title}</p>
                  <p className="text-muted-foreground text-xs mb-3">{expert.experience} experience</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {expert.specialties.slice(0, 2).map((specialty, index) => (
                      <Badge key={index} variant="outline" className="border-white/20 text-white/70 text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-muted-foreground">Simple steps to get started with your discovery call</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Book Your Call", description: "Choose your preferred date, time, and expert" },
              { step: 2, title: "Receive Confirmation", description: "Get meeting details and calendar invite via email" },
              { step: 3, title: "Join the Call", description: "Connect with our expert at the scheduled time" },
              { step: 4, title: "Explore Solutions", description: "Discuss your needs and potential next steps" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#E5195E] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't wait! Book your free discovery call today and take the first step toward bringing your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Book Your Free Consultation Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                See Our Available Times
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};