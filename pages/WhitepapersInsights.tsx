import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { FileCheck, Download, Search, Calendar, User, ArrowRight, BookOpen, FileText, TrendingUp, Brain, Shield, Cloud } from "lucide-react";
import { navigateTo } from "../App";

export const WhitepapersInsights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");

  const categories = [
    "All Categories",
    "Technology Trends",
    "Industry Analysis", 
    "Best Practices",
    "Case Studies",
    "Research Reports",
    "Strategy Guides"
  ];

  const topics = [
    "All Topics",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Digital Transformation",
    "Software Development",
    "Mobile Technology",
    "Blockchain",
    "IoT",
    "DevOps"
  ];

  const whitepapers = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Transforming Patient Care Through Technology",
      description: "A comprehensive analysis of how artificial intelligence is revolutionizing healthcare delivery, from diagnostic tools to personalized treatment plans. This whitepaper explores current applications, emerging trends, and future possibilities in AI-driven healthcare solutions.",
      author: "WDI Research Team",
      publishDate: "December 2024",
      category: "Technology Trends",
      topics: ["Artificial Intelligence", "Digital Transformation"],
      pages: 45,
      downloads: 2850,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
      featured: true,
      keyTakeaways: [
        "AI reduces diagnostic errors by up to 40%",
        "Predictive analytics can improve patient outcomes by 35%",
        "Implementation strategies for healthcare organizations",
        "ROI analysis and cost-benefit considerations"
      ]
    },
    {
      id: 2,
      title: "Cloud Migration Strategies: A Complete Guide for Modern Enterprises",
      description: "Navigate the complexities of cloud migration with this detailed guide covering strategies, challenges, and best practices. Learn how to successfully migrate your infrastructure to the cloud while minimizing disruption and maximizing benefits.",
      author: "Cloud Engineering Team",
      publishDate: "November 2024",
      category: "Best Practices",
      topics: ["Cloud Computing", "Digital Transformation"],
      pages: 38,
      downloads: 3420,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
      featured: true,
      keyTakeaways: [
        "6-phase migration methodology",
        "Cost optimization strategies",
        "Security and compliance considerations",
        "Performance monitoring and optimization"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of Remote Work: Protecting Your Digital Assets",
      description: "Essential cybersecurity practices and frameworks for protecting business assets in an increasingly remote and distributed work environment. This report covers threat landscapes, security strategies, and implementation guidelines.",
      author: "Security Research Division",
      publishDate: "October 2024",
      category: "Industry Analysis",
      topics: ["Cybersecurity", "Digital Transformation"],
      pages: 32,
      downloads: 2190,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
      featured: true,
      keyTakeaways: [
        "Zero-trust security model implementation",
        "Remote work security best practices",
        "Threat detection and response strategies",
        "Compliance and regulatory considerations"
      ]
    },
    {
      id: 4,
      title: "DevOps Transformation: Accelerating Software Delivery",
      description: "Learn how to implement DevOps practices that accelerate software delivery while maintaining quality and security. This guide covers tools, processes, and cultural changes needed for successful DevOps adoption.",
      author: "DevOps Excellence Team",
      publishDate: "September 2024",
      category: "Best Practices",
      topics: ["DevOps", "Software Development"],
      pages: 28,
      downloads: 1850,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=400&q=80",
      featured: false,
      keyTakeaways: [
        "CI/CD pipeline optimization",
        "Infrastructure as Code practices",
        "Monitoring and observability strategies",
        "Cultural transformation guidelines"
      ]
    },
    {
      id: 5,
      title: "Mobile-First Development: Building for the Future",
      description: "Comprehensive guide to mobile-first development strategies, covering design principles, performance optimization, and emerging technologies in mobile app development.",
      author: "Mobile Development Team",
      publishDate: "August 2024",
      category: "Technology Trends",
      topics: ["Mobile Technology", "Software Development"],
      pages: 35,
      downloads: 1650,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
      featured: false,
      keyTakeaways: [
        "Progressive Web App development",
        "Cross-platform optimization strategies",
        "Performance monitoring techniques",
        "User experience best practices"
      ]
    },
    {
      id: 6,
      title: "Blockchain for Supply Chain: Transparency and Traceability",
      description: "Explore how blockchain technology is revolutionizing supply chain management through enhanced transparency, traceability, and trust. Includes real-world case studies and implementation strategies.",
      author: "Blockchain Research Lab",
      publishDate: "July 2024",
      category: "Research Reports",
      topics: ["Blockchain", "Digital Transformation"],
      pages: 42,
      downloads: 1420,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80",
      featured: false,
      keyTakeaways: [
        "Smart contract implementation",
        "Supply chain transparency benefits",
        "Integration with existing systems",
        "ROI measurement frameworks"
      ]
    },
    {
      id: 7,
      title: "IoT in Manufacturing: Industry 4.0 Implementation Guide",
      description: "Detailed analysis of IoT applications in manufacturing, covering smart factory implementations, predictive maintenance, and operational efficiency improvements through connected devices.",
      author: "IoT Solutions Team",
      publishDate: "June 2024",
      category: "Strategy Guides",
      topics: ["IoT", "Digital Transformation"],
      pages: 40,
      downloads: 1280,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      featured: false,
      keyTakeaways: [
        "Predictive maintenance strategies",
        "Smart factory architecture",
        "Data analytics and insights",
        "Implementation roadmaps"
      ]
    },
    {
      id: 8,
      title: "Digital Transformation ROI: Measuring Success in the Digital Age",
      description: "Framework for measuring and maximizing return on investment in digital transformation initiatives. Includes metrics, KPIs, and evaluation methodologies for technology investments.",
      author: "Strategy & Analytics Team",
      publishDate: "May 2024",
      category: "Strategy Guides",
      topics: ["Digital Transformation", "Software Development"],
      pages: 30,
      downloads: 1950,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      featured: false,
      keyTakeaways: [
        "ROI measurement frameworks",
        "Key performance indicators",
        "Success metrics definition",
        "Value realization strategies"
      ]
    }
  ];

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || paper.category === selectedCategory;
    const matchesTopic = selectedTopic === "all" || paper.topics.includes(selectedTopic);
    
    return matchesSearch && matchesCategory && matchesTopic;
  });

  const featuredPapers = filteredWhitepapers.filter(paper => paper.featured);
  const regularPapers = filteredWhitepapers.filter(paper => !paper.featured);

  const getTopicIcon = (topic: string) => {
    const icons = {
      "Artificial Intelligence": Brain,
      "Cloud Computing": Cloud,
      "Cybersecurity": Shield,
      "Digital Transformation": TrendingUp,
      "Software Development": FileText,
      "Mobile Technology": FileText,
      "Blockchain": FileText,
      "IoT": FileText,
      "DevOps": FileText
    };
    return icons[topic as keyof typeof icons] || FileText;
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FileCheck className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                Research & Insights
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Whitepapers & Insights: Deep Dives into Industry Trends
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              For those seeking in-depth knowledge and strategic guidance, WDI offers a curated collection of Whitepapers & Insights. These resources delve into complex industry challenges, emerging technologies, and best practices, providing valuable intelligence to help you make informed decisions and stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-card/50 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search whitepapers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50 border-white/10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-background/50 border-white/10 text-white">
                  <SelectValue placeholder="Select Category" className="text-white" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category === "All Categories" ? "all" : category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger className="w-48 bg-background/50 border-white/10 text-white">
                  <SelectValue placeholder="Select Topic" className="text-white" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic} value={topic === "All Topics" ? "all" : topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">
              {filteredWhitepapers.length} resource{filteredWhitepapers.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </div>
      </section>

      {/* Featured Whitepapers */}
      {featuredPapers.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Research</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPapers.map((paper) => {
                const TopicIcon = getTopicIcon(paper.topics[0]);
                return (
                  <Card key={paper.id} className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group cursor-pointer overflow-hidden">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={paper.image} 
                        alt={paper.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#E5195E] text-white">Featured</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1">
                          <span className="text-xs text-white">{paper.pages} pages</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <TopicIcon className="w-4 h-4 text-[#E5195E]" />
                        <Badge variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-none">
                          {paper.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300 line-clamp-2">
                        {paper.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {paper.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-semibold text-white">Key Takeaways:</h4>
                        <ul className="space-y-1">
                          {paper.keyTakeaways.slice(0, 2).map((takeaway, index) => (
                            <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#E5195E] mt-2 flex-shrink-0" />
                              {takeaway}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="border-white/20 text-white/70 text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {paper.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {paper.publishDate}
                          </div>
                        </div>
                        <Button className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="mt-2 text-xs text-muted-foreground text-center">
                        {paper.downloads.toLocaleString()} downloads
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Whitepapers */}
      {regularPapers.length > 0 && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">More Research & Insights</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPapers.map((paper) => {
                const TopicIcon = getTopicIcon(paper.topics[0]);
                return (
                  <Card key={paper.id} className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group cursor-pointer overflow-hidden">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={paper.image} 
                        alt={paper.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1">
                          <span className="text-xs text-white">{paper.pages} pages</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <TopicIcon className="w-4 h-4 text-[#E5195E]" />
                        <Badge variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-none">
                          {paper.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300 line-clamp-2">
                        {paper.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                        {paper.description}
                      </p>
                      
                      <div className="space-y-1 mb-4">
                        {paper.keyTakeaways.slice(0, 2).map((takeaway, index) => (
                          <div key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#E5195E] mt-1.5 flex-shrink-0" />
                            {takeaway}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {paper.topics.slice(0, 2).map((topic) => (
                          <Badge key={topic} variant="outline" className="border-white/20 text-white/70 text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {paper.publishDate}
                          </div>
                          <div>{paper.downloads.toLocaleString()} downloads</div>
                        </div>
                        <Button size="sm" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredWhitepapers.length === 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">No whitepapers found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedTopic("all");
                }}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Research</h2>
            <p className="text-muted-foreground mb-8">
              Get notified when we publish new whitepapers and insights. Subscribe to receive the latest research directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-card/50 border-white/10"
              />
              <Button className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Custom Research or Consulting?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our research team can provide custom analysis and insights tailored to your specific business needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Download Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Access Our Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};