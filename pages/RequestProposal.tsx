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
import { FileCheck, Send, Upload, ArrowRight } from "lucide-react";

export const RequestProposal = () => {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", company: "", jobTitle: "", projectTitle: "", projectType: "", industry: "",
    projectDescription: "", keyFeatures: "", preferredTech: "", existingSystems: "", startDate: "", launchDate: "",
    budgetRange: "", source: "", consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = ["Web App", "Mobile App", "Custom Software", "Staff Augmentation", "UI/UX Design", "Consulting", "Other"];
  const industries = ["Healthcare", "FinTech", "E-commerce", "Education", "Manufacturing", "Real Estate", "Logistics", "Other"];
  const budgetRanges = ["< $10k", "$10k-$50k", "$50k-$100k", "$100k-$250k", "$250k-$500k", "> $500k", "Let's discuss"];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Thank you! Our team will review your requirements and prepare a tailored proposal for you.");
    setIsSubmitting(false);
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FileCheck className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">Request Proposal</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Request a Proposal: Let's Formalize Your Project Vision
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ready to take the next step? Submit your project details, and our expert team will craft a customized proposal outlining our recommended approach, timeline, and estimated costs. The more information you provide, the more accurate and comprehensive our proposal will be.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-background/50 border-white/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                      <Input required value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} placeholder="Your full name" className="bg-card/50 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                      <Input type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="your.email@example.com" className="bg-card/50 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Phone Number *</label>
                      <Input type="tel" required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="+1 (555) 123-4567" className="bg-card/50 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Company Name *</label>
                      <Input required value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} placeholder="Your company name" className="bg-card/50 border-white/10" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white mb-2">Job Title</label>
                      <Input value={formData.jobTitle} onChange={(e) => handleInputChange("jobTitle", e.target.value)} placeholder="Your job title" className="bg-card/50 border-white/10" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Project Title/Name *</label>
                      <Input required value={formData.projectTitle} onChange={(e) => handleInputChange("projectTitle", e.target.value)} placeholder="Give your project a name" className="bg-card/50 border-white/10" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Type of Project *</label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger className="bg-card/50 border-white/10 text-white">
                            <SelectValue placeholder="Select project type" className="text-white" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Industry</label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                          <SelectTrigger className="bg-card/50 border-white/10 text-white">
                            <SelectValue placeholder="Select industry" className="text-white" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Brief Project Description *</label>
                      <Textarea required value={formData.projectDescription} onChange={(e) => handleInputChange("projectDescription", e.target.value)} placeholder="What problem are you solving? What is your core idea?" rows={4} className="bg-card/50 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Key Features/Functionalities Required</label>
                      <Textarea value={formData.keyFeatures} onChange={(e) => handleInputChange("keyFeatures", e.target.value)} placeholder="List the main features you need..." rows={4} className="bg-card/50 border-white/10" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Technical Details</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Preferred Technologies/Stack</label>
                      <Input value={formData.preferredTech} onChange={(e) => handleInputChange("preferredTech", e.target.value)} placeholder="e.g., React, Node.js, AWS, or 'Open to recommendations'" className="bg-card/50 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Any existing systems to integrate with?</label>
                      <Textarea value={formData.existingSystems} onChange={(e) => handleInputChange("existingSystems", e.target.value)} placeholder="Describe any existing systems, APIs, or databases..." rows={3} className="bg-card/50 border-white/10" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Timeline & Budget</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Desired Start Date</label>
                      <Input type="date" value={formData.startDate} onChange={(e) => handleInputChange("startDate", e.target.value)} className="bg-card/50 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Target Launch Date</label>
                      <Input type="date" value={formData.launchDate} onChange={(e) => handleInputChange("launchDate", e.target.value)} className="bg-card/50 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Estimated Budget Range</label>
                      <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange("budgetRange", value)}>
                        <SelectTrigger className="bg-card/50 border-white/10 text-white">
                          <SelectValue placeholder="Select budget range" className="text-white" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Supporting Documents (Optional)</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center bg-card/30">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground mb-2">Upload wireframes, PRDs, mockups, or existing codebases</p>
                    <p className="text-sm text-muted-foreground">Supported formats: PDF, DOCX, ZIP (max 10MB)</p>
                    <Button variant="outline" className="mt-3 border-white/20 text-white hover:bg-white/10">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="consent" checked={formData.consent} onCheckedChange={(checked) => handleInputChange("consent", checked === true)} className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to WDI's Privacy Policy and consent to the processing of my personal data. *
                  </label>
                </div>

                <Button type="submit" disabled={!formData.consent || isSubmitting} className="w-full bg-[#E5195E] hover:bg-[#E5195E]/90 text-white disabled:opacity-50">
                  {isSubmitting ? "Submitting Request..." : (<>Get My Proposal<Send className="ml-2 w-4 h-4" /></>)}
                </Button>

                <div className="bg-card/30 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>What Happens Next:</strong> After submission, our team will review your requirements and may reach out for a brief discovery call to clarify details before preparing your tailored proposal.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};