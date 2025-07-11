import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { GridPattern } from "../components/GridPattern";
import CustomReCaptcha, { ReCaptchaRef } from "../components/CustomReCaptcha";
import { navigateTo } from "../App";
import { 
  Rocket, Users, Target, Heart, Mail, Phone, Calendar, 
  Upload, FileText, CheckCircle, ArrowRight, Briefcase,
  Settings, Eye, Trophy, Star, Lightbulb, Monitor, Building,
  Globe, MapPin, Clock, Headphones, Shield
} from "lucide-react";

// Enhanced Hero Section - Centered
const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Project Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E] mb-6">
              Start Your Project
            </Badge>
          </motion.div>

          {/* Main Heading - Centered */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              <span className="text-white">Turn Your Next Big Idea into </span>
              <span className="text-[#E5195E]">Reality</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Connect with Mobile App and AI Development Experts Today.
            </p>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book Appointment</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Project Form Section - Separate with better spacing
const ProjectFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    services: '',
    budget: '',
    projectDescription: '',
    developmentStage: '',
    timeline: '',
    ndaRequired: false,
    agreeTerms: false
  });

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCaptchaRef>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const validFiles = Array.from(files).filter(file => file.size <= 10 * 1024 * 1024); // 10MB limit
      setAttachedFiles(prev => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token);
    setIsRecaptchaVerified(true);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken('');
    setIsRecaptchaVerified(false);
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken('');
    setIsRecaptchaVerified(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks
    if (!formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email address.');
      return;
    }
    
    if (!formData.country) {
      alert('Please select your country.');
      return;
    }
    
    if (!formData.phone.trim()) {
      alert('Please enter your contact number.');
      return;
    }
    
    if (!formData.services) {
      alert('Please select a service.');
      return;
    }
    
    if (!formData.budget) {
      alert('Please select a budget range.');
      return;
    }
    
    if (!formData.projectDescription.trim()) {
      alert('Please describe your project.');
      return;
    }
    
    if (!formData.developmentStage) {
      alert('Please select your current development stage.');
      return;
    }
    
    if (!formData.timeline) {
      alert('Please select your expected timeline.');
      return;
    }
    
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions.');
      return;
    }
    
    if (!isRecaptchaVerified) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    // Handle successful form submission
    console.log('Form submitted:', formData, attachedFiles, recaptchaToken);
    
    // Reset reCAPTCHA after successful submission
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setIsRecaptchaVerified(false);
    setRecaptchaToken('');
    
    // Reset form data
    setFormData({
      name: '',
      email: '',
      country: '',
      phone: '',
      services: '',
      budget: '',
      projectDescription: '',
      developmentStage: '',
      timeline: '',
      ndaRequired: false,
      agreeTerms: false
    });
    setAttachedFiles([]);
    
    // Redirect to Thank You page
    navigateTo('/thank-you');
  };

  return (
    <section className="py-32 bg-wdi-grey">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-6">
            <span className="text-white">Tell Us About Your </span>
            <span className="text-[#E5195E]">Project</span>
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and our experts will get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/30 backdrop-blur-md border-gray-700/30 rounded-3xl overflow-hidden shadow-2xl">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Personal Information Section */}
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-4">
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-white">Your Name *</label>
                      <Input 
                        placeholder="Enter your full name" 
                        className="bg-gray-800/30 border-gray-600/50 text-white h-12 text-base" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-white">Email Address *</label>
                      <Input 
                        type="email" 
                        placeholder="your.email@company.com" 
                        className="bg-gray-800/30 border-gray-600/50 text-white h-12 text-base" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-white">Country *</label>
                      <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                        <SelectTrigger className="bg-gray-800/30 border-gray-600/50 text-white h-12">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-white">Contact Number *</label>
                      <Input 
                        placeholder="+1 (555) 123-4567" 
                        className="bg-gray-800/30 border-gray-600/50 text-white h-12 text-base" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information Section */}
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-4">
                    Project Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-white">Select Services *</label>
                      <Select value={formData.services} onValueChange={(value) => setFormData({...formData, services: value})}>
                        <SelectTrigger className="bg-gray-800/30 border-gray-600/50 text-white h-12">
                          <SelectValue placeholder="Choose primary service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-white">Budget Range *</label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger className="bg-gray-800/30 border-gray-600/50 text-white h-12">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-25k">Under $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                          <SelectItem value="500k-plus">$500,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-white">Project Description *</label>
                    <Textarea 
                      placeholder="Tell us about your project vision, goals, and key requirements..."
                      rows={6}
                      className="bg-gray-800/30 border-gray-600/50 text-white text-base resize-none"
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-white">Current Development Stage *</label>
                    <RadioGroup 
                      value={formData.developmentStage} 
                      onValueChange={(value) => setFormData({...formData, developmentStage: value})}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="idea" id="idea" className="border-gray-600" />
                        <Label htmlFor="idea" className="text-white cursor-pointer">Idea</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="designed" id="designed" className="border-gray-600" />
                        <Label htmlFor="designed" className="text-white cursor-pointer">Designed Solution</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="prototype" id="prototype" className="border-gray-600" />
                        <Label htmlFor="prototype" className="text-white cursor-pointer">Prototype/Spec</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="mvp" id="mvp" className="border-gray-600" />
                        <Label htmlFor="mvp" className="text-white cursor-pointer">MVP</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Additional Details Section */}
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-4">
                    Additional Details
                  </h3>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-white">Project Attachments</label>
                    <div className="border-2 border-dashed border-gray-600/50 rounded-xl p-8 text-center bg-gray-800/10">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-2 font-medium">Upload Additional Files</p>
                      <p className="text-sm text-gray-500 mb-6">Attach wireframes, designs, or requirements. Max file size: 10MB</p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.fig"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => document.getElementById('file-upload')?.click()}
                        className="border-gray-600 text-white hover:bg-gray-800 h-12"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Files
                      </Button>
                    </div>
                    
                    {attachedFiles.length > 0 && (
                      <div className="space-y-3">
                        {attachedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-800/30 p-4 rounded-lg border border-gray-700/30">
                            <div className="flex items-center space-x-3">
                              <FileText className="w-5 h-5 text-[#E5195E]" />
                              <span className="text-white font-medium">{file.name}</span>
                              <span className="text-gray-400 text-sm">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                            </div>
                            <Button 
                              type="button" 
                              variant="ghost" 
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                            >
                              Remove
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-white">Expected Start Timeline *</label>
                    <RadioGroup 
                      value={formData.timeline} 
                      onValueChange={(value) => setFormData({...formData, timeline: value})}
                      className="grid grid-cols-2 md:grid-cols-5 gap-4"
                    >
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="1-month" id="1-month" className="border-gray-600" />
                        <Label htmlFor="1-month" className="text-white cursor-pointer">1 Month</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="6-month" id="6-month" className="border-gray-600" />
                        <Label htmlFor="6-month" className="text-white cursor-pointer">6 Months</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="1-year" id="1-year" className="border-gray-600" />
                        <Label htmlFor="1-year" className="text-white cursor-pointer">1 Year</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="1.5-year" id="1.5-year" className="border-gray-600" />
                        <Label htmlFor="1.5-year" className="text-white cursor-pointer">1.5 Years</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                        <RadioGroupItem value="2-plus-year" id="2-plus-year" className="border-gray-600" />
                        <Label htmlFor="2-plus-year" className="text-white cursor-pointer">2+ Years</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Legal & Agreements */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                    <Checkbox 
                      id="nda" 
                      checked={formData.ndaRequired}
                      onCheckedChange={(checked) => setFormData({...formData, ndaRequired: checked as boolean})}
                      className="mt-1"
                    />
                    <label htmlFor="nda" className="text-gray-300 leading-relaxed cursor-pointer">
                      I want to protect my data by signing an NDA (Non-Disclosure Agreement)
                    </label>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-gray-300 leading-relaxed cursor-pointer">
                      I agree to the <span className="text-[#E5195E] underline">terms & conditions</span> and <span className="text-[#E5195E] underline">privacy policy</span> *
                    </label>
                  </div>
                </div>

                {/* Security Verification Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-4 flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#E5195E]" />
                    Security Verification
                  </h3>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-white text-center">
                      Please verify that you're not a robot *
                    </label>
                    
                    <CustomReCaptcha
                      ref={recaptchaRef}
                      siteKey="6LclEX4rAAAAAIl_-31fPrO1boXwlTEPo3_6pmB5"
                      onVerify={handleRecaptchaVerify}
                      onExpired={handleRecaptchaExpired}
                      onError={handleRecaptchaError}
                      className="w-full"
                    />
                    
                    {isRecaptchaVerified && (
                      <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Verification successful</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <ShimmerButton 
                    type="submit" 
                    className="w-full py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl"
                    disabled={!formData.agreeTerms || !isRecaptchaVerified}
                  >
                    <div className="inline-flex items-center justify-center gap-3">
                      <Rocket className="w-6 h-6 flex-shrink-0" />
                      <span>Submit Project Request</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </ShimmerButton>
                  
                  {(!formData.agreeTerms || !isRecaptchaVerified) && (
                    <p className="text-center text-sm text-gray-400 mt-3">
                      {!formData.agreeTerms && !isRecaptchaVerified ? 
                        "Please agree to terms and complete verification to submit" :
                        !formData.agreeTerms ? 
                        "Please agree to terms and conditions to submit" :
                        "Please complete the security verification to submit"
                      }
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Make Your Vision Come to Life Section
const VisionSection = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-8">
            <span className="text-white">Make Your Vision Come to Life with </span>
            <span className="text-[#E5195E]">Best-in-Class App Development</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            Have a big idea and are looking for customised solutions? From bespoke app development to AI-enabled platforms, and scalable system upgrades, our experts can turn ideas into premium digital products. Let's connect and create scalable and thriving solutions.
          </p>

          <Button
            size="lg"
            className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white text-lg px-8 py-4"
            onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Appointment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// We'd love to talk to you Section
const ProcessStepsSection = () => {
  const steps = [
    {
      step: "1",
      title: "Enter Details",
      description: "Fill in the required information correctly to initiate the process. This will ensure that your request is handled efficiently and smoothly.",
      icon: FileText
    },
    {
      step: "2", 
      title: "Submit Details",
      description: "Carefully review your entries and submit them to ensure smooth processing. It is a simple step for confirmation of your request.",
      icon: CheckCircle
    },
    {
      step: "3",
      title: "Book Appointment", 
      description: "Select your convenient time slot, so that planning is made easier and on-time support can be received from our consultancy expertise.",
      icon: Calendar
    }
  ];

  return (
    <section className="py-32 bg-wdi-grey">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-8">
            <span className="text-white">We'd love to </span>
            <span className="text-[#E5195E]">talk to you</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Need guidance or a development partner for next-generation application development? WDI will be your trusted partner for secure, scalable, cutting-edge solutions. Start here and fill out the following form to begin bringing your vision to life into something truly remarkable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <IconComponent className="w-8 h-8 text-accent" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E5195E] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white text-lg px-8 py-4"
            onClick={() => navigateTo('/contact')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Tell Us More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Join WDI Section
const JoinWDISection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Innovative Projects",
      description: "Work on cutting-edge technology projects with global impact"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Be part of a supportive team that values diversity and inclusion"
    },
    {
      icon: Target,
      title: "Growth Opportunities",
      description: "Continuous learning, training, and career advancement opportunities"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive benefits"
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-8">
            <span className="text-white">Join the WDI Family & Shape the Future of </span>
            <span className="text-[#E5195E]">Technology</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            We're always looking for passionate, talented individuals to join our growing team. If you're ready to work on innovative projects and make a real impact, we'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#E5195E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#E5195E]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white text-lg px-8 py-4"
              onClick={() => navigateTo('/careers')}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4"
              onClick={() => navigateTo('/careers/send-your-cv')}
            >
              <Upload className="w-5 h-5 mr-2" />
              Send Your CV
            </Button>
          </div>
          
          <p className="text-gray-400 text-sm">
            Ready to build the future with us? Let's create something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Why Partner with WDI Section  
const WhyPartnerSection = () => {
  const features = [
    {
      icon: Trophy,
      title: "Award-Winning Team",
      description: "Recognized expertise in mobile app development and AI solutions"
    },
    {
      icon: Star,
      title: "5-Star Client Satisfaction",
      description: "Consistently rated 4.9/5 on Clutch with 47+ verified reviews"
    },
    {
      icon: Lightbulb,
      title: "Innovation-First Approach",
      description: "Cutting-edge solutions using the latest technologies and methodologies"
    },
    {
      icon: Monitor,
      title: "End-to-End Solutions",
      description: "From concept to deployment, we handle every aspect of your project"
    },
    {
      icon: Building,
      title: "Enterprise-Grade Security",
      description: "Robust security measures and compliance with industry standards"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and communication"
    }
  ];

  return (
    <section className="py-32 bg-wdi-grey">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-8">
            <span className="text-white">Why Partner with </span>
            <span className="text-[#E5195E]">WDI?</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Choose WDI for your next project and experience the difference of working with a team that's committed to your success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center hover:border-[#E5195E]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#E5195E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#E5195E]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Information Section
const ContactInfoSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@webdevelopmentinstitute.com",
      action: "mailto:hello@webdevelopmentinstitute.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office locations",
      contact: "Multiple Global Locations",
      action: () => navigateTo('/company/office-locations')
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're available",
      contact: "Mon-Fri 9AM-6PM",
      action: () => navigateTo('/contact/schedule-a-discovery-call')
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-8">
            <span className="text-white">Get in Touch with </span>
            <span className="text-[#E5195E]">Our Experts</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Ready to discuss your project? Our team is here to help you every step of the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center hover:border-[#E5195E]/30 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  if (typeof method.action === 'string') {
                    window.open(method.action, '_blank');
                  } else {
                    method.action();
                  }
                }}
              >
                <div className="w-16 h-16 bg-[#E5195E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#E5195E]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {method.description}
                </p>
                <p className="text-[#E5195E] font-medium">
                  {method.contact}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white text-lg px-8 py-4"
            onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
          >
            <Headphones className="w-5 h-5 mr-2" />
            Schedule a Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Main component
export const StartAProject = () => {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectFormSection />
      <VisionSection />
      <ProcessStepsSection />
      <WhyPartnerSection />
      <JoinWDISection />
      <ContactInfoSection />
      <Footer />
    </div>
  );
};