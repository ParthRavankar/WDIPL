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
import { UserPlus, Upload, Send, ArrowRight, Users, Briefcase, Target, Award, CheckCircle, FileText } from "lucide-react";
import { navigateTo } from "../App";

export const SendYourCV = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    desiredRole: "",
    experience: "",
    coverLetter: "",
    consent: false
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const desiredRoles = [
    "Software Development",
    "Frontend Development", 
    "Backend Development",
    "Full Stack Development",
    "Mobile App Development",
    "UI/UX Design",
    "DevOps Engineering",
    "QA Engineering",
    "Data Science",
    "AI/ML Engineering",
    "Product Management",
    "Project Management",
    "Business Analysis",
    "Sales & Marketing",
    "Human Resources",
    "Open to Opportunities",
    "Other"
  ];

  const experienceLevels = [
    "Fresh Graduate (0-1 years)",
    "Junior (1-3 years)",
    "Mid-level (3-5 years)", 
    "Senior (5-8 years)",
    "Lead (8-12 years)",
    "Principal/Architect (12+ years)"
  ];

  const whyJoinWDI = [
    {
      icon: Target,
      title: "Innovative Projects",
      description: "Work on cutting-edge technology projects with global impact"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Be part of a supportive team that values diversity and inclusion"
    },
    {
      icon: Award,
      title: "Growth Opportunities",
      description: "Continuous learning, training, and career advancement opportunities"
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive benefits"
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Comprehensive health insurance",
    "Flexible working hours",
    "Remote work options",
    "Professional development budget",
    "Annual performance bonuses",
    "Paid time off and holidays",
    "Modern office facilities",
    "Team building activities",
    "Mentorship programs"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Thank you for your interest in WDI! Your CV has been submitted successfully. We'll reach out if a suitable position becomes available.");
    
    // Reset form
    setFormData({
      fullName: "", email: "", phone: "", linkedIn: "", desiredRole: "", experience: "", coverLetter: "", consent: false
    });
    setUploadedFile(null);
    setIsSubmitting(false);
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <UserPlus className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                Career Opportunities
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Send Your CV to HR: Explore Future Career Opportunities with WDI
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              While we list our specific job openings on our Careers page, we are always on the lookout for exceptional talent. If you don't see a role that perfectly matches your skills and experience right now, but you're passionate about technology and believe you can contribute to WDI's success, we encourage you to submit your CV directly to our Human Resources team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join WDI */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Join WDI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what makes WDI a great place to build your career and grow professionally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyJoinWDI.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-background/50 border-white/10 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-[#E5195E]/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#E5195E]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/50 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">Benefits & Perks</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#E5195E] flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CV Submission Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Submit Your CV</h2>
              <p className="text-muted-foreground">
                Tell us about yourself and how you'd like to contribute to WDI's success.
              </p>
            </div>

            <Card className="bg-card/50 border-white/10">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Your full name"
                          className="bg-background/50 border-white/10"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          className="bg-background/50 border-white/10"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="bg-background/50 border-white/10"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">LinkedIn Profile URL</label>
                        <Input
                          type="url"
                          value={formData.linkedIn}
                          onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="bg-background/50 border-white/10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Professional Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Desired Role/Area of Interest *</label>
                        <Select value={formData.desiredRole} onValueChange={(value) => handleInputChange("desiredRole", value)}>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Select your area of interest" />
                          </SelectTrigger>
                          <SelectContent>
                            {desiredRoles.map((role) => (
                              <SelectItem key={role} value={role}>{role}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Years of Experience *</label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level} value={level}>{level}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Upload CV/Resume *</label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center bg-background/30">
                      {uploadedFile ? (
                        <div className="space-y-4">
                          <FileText className="w-12 h-12 text-[#E5195E] mx-auto" />
                          <div>
                            <p className="text-white font-medium">{uploadedFile.name}</p>
                            <p className="text-muted-foreground text-sm">
                              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <Button 
                            type="button"
                            variant="outline" 
                            onClick={() => setUploadedFile(null)}
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            Remove File
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                          <div>
                            <p className="text-white mb-2">Upload your CV/Resume</p>
                            <p className="text-muted-foreground text-sm mb-4">
                              Supported formats: PDF, DOCX (Max size: 5MB)
                            </p>
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileUpload}
                              className="hidden"
                              id="cv-upload"
                            />
                            <label htmlFor="cv-upload">
                              <Button type="button" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                Choose File
                              </Button>
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Cover Letter (Optional)</label>
                    <Textarea
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Briefly tell us why you're interested in WDI and what makes you a great fit for our team..."
                      rows={5}
                      className="bg-background/50 border-white/10"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked === true)}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to WDI's Privacy Policy and consent to the processing of my personal data for recruitment purposes. I understand that my CV will be kept on file for future opportunities. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!formData.consent || !uploadedFile || isSubmitting}
                    className="w-full bg-[#E5195E] hover:bg-[#E5195E]/90 text-white disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Submitting CV..."
                    ) : (
                      <>
                        Submit My CV
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="mt-8 bg-background/50 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">What Happens Next?</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E5195E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[#E5195E] font-medium">1</span>
                    </div>
                    <p>Your CV will be reviewed by our HR team and stored in our talent database</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E5195E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[#E5195E] font-medium">2</span>
                    </div>
                    <p>We'll match your profile with suitable opportunities as they become available</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E5195E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[#E5195E] font-medium">3</span>
                    </div>
                    <p>Our recruitment team will contact you if a relevant position opens up</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-card/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Important Note:</strong> Please note that submitting your CV here does not guarantee a direct response unless a relevant opening arises. For specific job applications, please refer to our Careers Page.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Explore More Career Opportunities
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to see our current openings or learn more about our company culture? Check out our careers section.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white" onClick={() => navigateTo('/company/careers')}>
                View Current Job Openings
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigateTo('/company/culture-values')}>
                Learn More About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};