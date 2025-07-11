import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Headphones, Send, AlertCircle, Clock, CheckCircle, Phone, Mail, MessageSquare, 
  FileText, Search, ArrowRight, User, Building2, Bug, Zap, Shield, HelpCircle,
  ExternalLink, Download, Book, Users, Settings, Globe
} from "lucide-react";
import { navigateTo } from "../App";

export const ClientSupport = () => {
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    priority: "",
    category: "",
    description: "",
    projectId: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const supportChannels = [
    {
      icon: User,
      title: "Direct Contact",
      description: "Reach out to your assigned Project Manager or Account Manager",
      action: "Contact Your PM",
      highlight: true
    },
    {
      icon: MessageSquare,
      title: "Support Ticket System",
      description: "Submit technical issues, bug reports, or service requests",
      action: "Create Ticket",
      monitored: "24/5 monitoring"
    },
    {
      icon: Mail,
      title: "Support Email",
      description: "support@wdi.com",
      action: "Send Email",
      response: "< 4 hours"
    },
    {
      icon: Phone,
      title: "Support Phone",
      description: "+1 (555) 123-HELP",
      action: "Call Now",
      availability: "Mon-Fri, 9 AM - 6 PM EST"
    }
  ];

  const severityLevels = [
    {
      level: "Critical",
      icon: AlertCircle,
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      description: "System down, business-critical functionality unavailable",
      sla: "< 1 hour response"
    },
    {
      level: "High",
      icon: Zap,
      color: "text-orange-400", 
      bgColor: "bg-orange-500/20",
      description: "Major functionality impaired, significant business impact",
      sla: "< 4 hours response"
    },
    {
      level: "Medium",
      icon: Clock,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20", 
      description: "Minor functionality issues, workaround available",
      sla: "< 24 hours response"
    },
    {
      level: "Low",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      description: "Feature requests, documentation, general questions",
      sla: "< 48 hours response"
    }
  ];

  const selfHelpResources = [
    {
      icon: Book,
      title: "Knowledge Base",
      description: "Self-help articles and troubleshooting guides",
      items: "200+ articles",
      action: "Browse Articles"
    },
    {
      icon: FileText,
      title: "Documentation Portal",
      description: "Project-specific documentation and API references",
      items: "Project docs",
      action: "Access Portal",
      protected: true
    },
    {
      icon: HelpCircle,
      title: "FAQ Section",
      description: "Frequently asked questions and common solutions",
      items: "50+ FAQs",
      action: "View FAQs"
    },
    {
      icon: Download,
      title: "Downloads Center",
      description: "Software updates, patches, and resources",
      items: "Latest releases",
      action: "Download Center"
    }
  ];

  const recentTickets = [
    {
      id: "WDI-2024-001",
      subject: "API rate limiting issue on production",
      status: "In Progress",
      priority: "High",
      created: "2 hours ago",
      assignee: "Technical Team"
    },
    {
      id: "WDI-2024-002", 
      subject: "User authentication module enhancement",
      status: "Resolved",
      priority: "Medium", 
      created: "1 day ago",
      assignee: "Development Team"
    },
    {
      id: "WDI-2024-003",
      subject: "Database performance optimization",
      status: "Under Review",
      priority: "Medium",
      created: "3 days ago", 
      assignee: "DevOps Team"
    }
  ];

  const supportStats = [
    { number: "< 1hr", label: "Average Response Time" },
    { number: "98%", label: "First Contact Resolution" },
    { number: "24/5", label: "Support Coverage" },
    { number: "99.9%", label: "Client Satisfaction" }
  ];

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate ticket submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const ticketId = `WDI-2024-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    alert(`Support ticket ${ticketId} has been created successfully. You'll receive updates via email.`);
    
    // Reset form
    setTicketForm({
      subject: "", priority: "", category: "", description: "", projectId: ""
    });
    setIsSubmitting(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved": return "text-green-400 bg-green-500/20";
      case "In Progress": return "text-blue-400 bg-blue-500/20";
      case "Under Review": return "text-yellow-400 bg-yellow-500/20";
      default: return "text-gray-400 bg-gray-500/20";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "text-red-400";
      case "High": return "text-orange-400";
      case "Medium": return "text-yellow-400";
      case "Low": return "text-green-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Headphones className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                Client Support
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Client Support: Dedicated Assistance for Our Valued Partners
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              At WDI, our commitment to your success extends far beyond project delivery. Our dedicated Client Support team is here to provide prompt assistance, answer your questions, and ensure the ongoing performance and smooth operation of your solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {supportStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <Tabs defaultValue="support-channels" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-card/50 border border-white/10">
              <TabsTrigger value="support-channels" className="data-[state=active]:bg-[#E5195E] data-[state=active]:text-white">
                Support Channels
              </TabsTrigger>
              <TabsTrigger value="create-ticket" className="data-[state=active]:bg-[#E5195E] data-[state=active]:text-white">
                Create Ticket
              </TabsTrigger>
              <TabsTrigger value="my-tickets" className="data-[state=active]:bg-[#E5195E] data-[state=active]:text-white">
                My Tickets
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-[#E5195E] data-[state=active]:text-white">
                Resources
              </TabsTrigger>
            </TabsList>

            {/* Support Channels Tab */}
            <TabsContent value="support-channels" className="mt-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">How to Get Support</h2>
                  <p className="text-muted-foreground">Multiple ways to reach our support team based on your needs</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {supportChannels.map((channel, index) => {
                    const Icon = channel.icon;
                    return (
                      <Card key={index} className={`border-white/10 ${channel.highlight ? 'bg-[#E5195E]/10 border-[#E5195E]/30' : 'bg-card/50'} hover:border-[#E5195E]/30 transition-all duration-300`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl ${channel.highlight ? 'bg-[#E5195E]' : 'bg-[#E5195E]/20'} flex items-center justify-center`}>
                              <Icon className={`w-6 h-6 ${channel.highlight ? 'text-white' : 'text-[#E5195E]'}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                              <p className="text-muted-foreground mb-3">{channel.description}</p>
                              
                              {channel.monitored && (
                                <div className="flex items-center gap-2 mb-3">
                                  <Clock className="w-4 h-4 text-green-400" />
                                  <span className="text-sm text-green-400">{channel.monitored}</span>
                                </div>
                              )}
                              
                              {channel.response && (
                                <div className="flex items-center gap-2 mb-3">
                                  <CheckCircle className="w-4 h-4 text-blue-400" />
                                  <span className="text-sm text-blue-400">Response time: {channel.response}</span>
                                </div>
                              )}
                              
                              {channel.availability && (
                                <div className="flex items-center gap-2 mb-3">
                                  <Globe className="w-4 h-4 text-yellow-400" />
                                  <span className="text-sm text-yellow-400">{channel.availability}</span>
                                </div>
                              )}
                              
                              <Button className={`${channel.highlight ? 'bg-[#E5195E] hover:bg-[#E5195E]/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                {channel.action}
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Severity Levels */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">Support Priority Levels</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {severityLevels.map((level, index) => {
                      const Icon = level.icon;
                      return (
                        <Card key={index} className="bg-card/50 border-white/10">
                          <CardContent className="p-4 text-center">
                            <div className={`w-12 h-12 rounded-xl ${level.bgColor} flex items-center justify-center mx-auto mb-3`}>
                              <Icon className={`w-6 h-6 ${level.color}`} />
                            </div>
                            <h4 className={`font-semibold mb-2 ${level.color}`}>{level.level}</h4>
                            <p className="text-muted-foreground text-sm mb-2">{level.description}</p>
                            <div className="text-xs text-white/70">{level.sla}</div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Create Ticket Tab */}
            <TabsContent value="create-ticket" className="mt-8">
              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Submit a Support Ticket</h2>
                  
                  <form onSubmit={handleTicketSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Subject *</label>
                        <Input
                          required
                          value={ticketForm.subject}
                          onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                          placeholder="Brief description of the issue"
                          className="bg-background/50 border-white/10"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Priority *</label>
                        <Select value={ticketForm.priority} onValueChange={(value) => setTicketForm(prev => ({ ...prev, priority: value }))}>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Select priority level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="critical">Critical - System Down</SelectItem>
                            <SelectItem value="high">High - Major Functionality Impaired</SelectItem>
                            <SelectItem value="medium">Medium - Minor Issues</SelectItem>
                            <SelectItem value="low">Low - Questions/Requests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Category *</label>
                        <Select value={ticketForm.category} onValueChange={(value) => setTicketForm(prev => ({ ...prev, category: value }))}>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bug">Bug Report</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="performance">Performance Issue</SelectItem>
                            <SelectItem value="security">Security Concern</SelectItem>
                            <SelectItem value="integration">Integration Support</SelectItem>
                            <SelectItem value="maintenance">Maintenance Request</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Project ID</label>
                        <Input
                          value={ticketForm.projectId}
                          onChange={(e) => setTicketForm(prev => ({ ...prev, projectId: e.target.value }))}
                          placeholder="e.g., WDI-PROJ-001"
                          className="bg-background/50 border-white/10"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Description *</label>
                      <Textarea
                        required
                        value={ticketForm.description}
                        onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Please provide detailed information about the issue, including steps to reproduce, expected vs actual behavior, and any error messages..."
                        rows={6}
                        className="bg-background/50 border-white/10"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                    >
                      {isSubmitting ? "Creating Ticket..." : (
                        <>
                          Submit Support Ticket
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* My Tickets Tab */}
            <TabsContent value="my-tickets" className="mt-8">
              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">My Support Tickets</h2>
                    <Button className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                      View All Tickets
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {recentTickets.map((ticket, index) => (
                      <Card key={index} className="bg-background/30 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-white font-medium">{ticket.subject}</h3>
                                <Badge className={`text-xs ${getStatusColor(ticket.status)}`}>
                                  {ticket.status}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>ID: {ticket.id}</span>
                                <span className={getPriorityColor(ticket.priority)}>
                                  Priority: {ticket.priority}
                                </span>
                                <span>Created: {ticket.created}</span>
                                <span>Assigned to: {ticket.assignee}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="mt-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Self-Help Resources</h2>
                  <p className="text-muted-foreground">Find answers and resources to help resolve common issues</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {selfHelpResources.map((resource, index) => {
                    const Icon = resource.icon;
                    return (
                      <Card key={index} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#E5195E]/20 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-[#E5195E]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                                {resource.protected && (
                                  <Shield className="w-4 h-4 text-yellow-400" title="Protected Content" />
                                )}
                              </div>
                              <p className="text-muted-foreground mb-3">{resource.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-[#E5195E]">{resource.items}</span>
                                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                                  {resource.action}
                                  <ArrowRight className="ml-2 w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Quick Search */}
                <Card className="bg-card/50 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Search</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        placeholder="Search documentation, FAQs, and knowledge base..."
                        className="pl-12 bg-background/50 border-white/10"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is standing by to help you resolve any issues and ensure your systems run smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Access Support Portal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Contact Your Project Manager
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};