import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageSquare, FileCheck, Calendar, Headphones, UserPlus } from "lucide-react";
import { navigateTo } from "../App";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    interest: "",
    message: "",
    source: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    "Healthcare", "FinTech & Banking", "E-commerce & Retail", "Education", "Manufacturing", "Real Estate", "Logistics & Transportation", "Media & Entertainment", "Government", "Non-Profit", "Other"
  ];

  const interests = [
    "Software Development", "Mobile App Development", "Web Development", "AI & Machine Learning", "Cloud Solutions", "UI/UX Design", "DevOps & Infrastructure", "Hire Talent", "Partnership", "Career Opportunities", "Other"
  ];

  const sources = [
    "Google Search", "Social Media", "Referral", "Industry Event", "Blog/Content", "Partner/Agency", "Previous Client", "Other"
  ];

  const contactMethods = [
    { icon: Mail, title: "Email", value: "info@wdi.com", description: "Send us an email and we'll respond within 24 hours" },
    { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", description: "Call us during business hours for immediate assistance" },
    { icon: MapPin, title: "Address", value: "123 Innovation Drive, Tech City, TC 12345", description: "Visit our headquarters for in-person meetings" },
    { icon: Clock, title: "Business Hours", value: "Mon-Fri: 9:00 AM - 6:00 PM EST", description: "We're available to help during business hours" }
  ];

  const contactPages = [
    { icon: FileCheck, title: "Request a Proposal", description: "Get a detailed, tailored proposal for your project", href: "/contact/request-a-proposal" },
    { icon: Calendar, title: "Schedule a Discovery Call", description: "Book a free consultation with our experts", href: "/contact/schedule-a-discovery-call" },
    { icon: MapPin, title: "Office Locations", description: "Find our global offices and development centers", href: "/contact/office-locations" },
    { icon: Headphones, title: "Client Support", description: "Access dedicated support for existing clients", href: "/contact/client-support" },
    { icon: UserPlus, title: "Send your CV to HR", description: "Submit your resume for career opportunities", href: "/contact/send-your-cv" }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.fullName.trim()) {
      alert('Please enter your full name.');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email address.');
      return;
    }
    
    if (!formData.company.trim()) {
      alert('Please enter your company name.');
      return;
    }
    
    if (!formData.interest) {
      alert('Please select what you are interested in.');
      return;
    }
    
    if (!formData.message.trim()) {
      alert('Please enter your message.');
      return;
    }
    
    if (!formData.consent) {
      alert('Please agree to the privacy policy and consent to data processing.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ 
      fullName: "", 
      email: "", 
      phone: "", 
      company: "", 
      industry: "", 
      interest: "", 
      message: "", 
      source: "", 
      consent: false 
    });
    
    setIsSubmitting(false);
    
    // Redirect to Thank You page
    navigateTo('/thank-you');
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MessageSquare className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">Contact Us</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Contact Us Now: Let's Build Something Great Together
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have a project in mind, a question about our services, or looking to join our team? We'd love to hear from you. Fill out the form below, and a WDI expert will get in touch within 24-48 business hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="bg-background/50 border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                        <Input required value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} placeholder="Your full name" className="bg-card/50 border-white/10" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                        <Input type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="your.email@example.com" className="bg-card/50 border-white/10" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                        <Input type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="+1 (555) 123-4567" className="bg-card/50 border-white/10" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Company Name *</label>
                        <Input required value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} placeholder="Your company name" className="bg-card/50 border-white/10" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Industry</label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                          <SelectTrigger className="bg-card/50 border-white/10">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">What are you interested in? *</label>
                        <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                          <SelectTrigger className="bg-card/50 border-white/10">
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                          <SelectContent>
                            {interests.map((interest) => (
                              <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Your Message *</label>
                      <Textarea required value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Tell us about your project, requirements, or questions..." rows={5} className="bg-card/50 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">How did you hear about us?</label>
                      <Select value={formData.source} onValueChange={(value) => handleInputChange("source", value)}>
                        <SelectTrigger className="bg-card/50 border-white/10">
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          {sources.map((source) => (
                            <SelectItem key={source} value={source}>{source}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="consent" checked={formData.consent} onCheckedChange={(checked) => handleInputChange("consent", checked === true)} className="mt-1" />
                      <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                        I agree to WDI's Privacy Policy and consent to the processing of my personal data for the purpose of responding to my inquiry. *
                      </label>
                    </div>
                    <Button type="submit" disabled={!formData.consent || isSubmitting} className="w-full bg-[#E5195E] hover:bg-[#E5195E]/90 text-white disabled:opacity-50">
                      {isSubmitting ? "Sending Message..." : (<>Send Message<Send className="ml-2 w-4 h-4" /></>)}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Alternative Contact Methods</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <Card key={index} className="bg-background/50 border-white/10">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#E5195E]/20 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-[#E5195E]" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                              <p className="text-[#E5195E] font-medium mb-1">{method.value}</p>
                              <p className="text-muted-foreground text-sm">{method.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6">Other Ways to Connect</h3>
                <div className="space-y-3">
                  {contactPages.map((page, index) => {
                    const Icon = page.icon;
                    return (
                      <Card key={index} className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 cursor-pointer" onClick={() => navigateTo(page.href)}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-[#E5195E]" />
                            <div className="flex-1">
                              <h4 className="text-white font-medium">{page.title}</h4>
                              <p className="text-muted-foreground text-sm">{page.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Privacy Statement:</strong> Your information is secure with us. We respect your privacy and will only use your data to respond to your inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigateTo('/services')}>
                Explore our services
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigateTo('/resources/client-testimonials')}>
                Read our testimonials
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};