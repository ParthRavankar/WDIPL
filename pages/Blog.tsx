import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Search, Calendar, User, Tag, ArrowRight, BookOpen } from "lucide-react";
import { navigateTo } from "../App";

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");

  const categories = [
    "All Categories",
    "Healthcare AI", 
    "Fintech",
    "Case Study",
    "Automation",
    "Tech Trends",
    "How-to Guides"
  ];

  const tags = [
    "All Tags",
    "Artificial Intelligence",
    "Healthcare",
    "Fintech",
    "Compliance",
    "System Architecture",
    "Business Automation",
    "Digital Transformation",
    "Performance Optimization"
  ];

  const featuredPosts = [
    {
      id: "future-of-ai-healthcare",
      title: "The Future of AI in Healthcare: Transforming Patient Care Through Technology",
      excerpt: "Discover how artificial intelligence is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans and administrative efficiency.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format",
      author: "Dr. Sarah Chen",
      date: "January 8, 2025",
      category: "Healthcare AI",
      tags: ["Artificial Intelligence", "Healthcare", "Digital Transformation"],
      readTime: "12 min read"
    },
    {
      id: "compliance-ready-systems-fintech",
      title: "Why Compliance-Ready Systems Are Crucial in Fintech Development",
      excerpt: "Exploring the critical importance of building compliance into fintech systems from day one, ensuring regulatory adherence while maintaining innovation and user experience.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format",
      author: "Michael Rodriguez",
      date: "January 5, 2025",
      category: "Fintech",
      tags: ["Fintech", "Compliance", "Financial Services"],
      readTime: "8 min read"
    },
    {
      id: "legacy-system-scaling",
      title: "How WDI Scaled a Legacy System for 1 Million+ Users",
      excerpt: "A detailed case study on modernizing and scaling legacy systems for massive user growth, overcoming technical debt while maintaining business continuity.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&auto=format",
      author: "Alex Thompson",
      date: "December 28, 2024",
      category: "Case Study",
      tags: ["System Architecture", "Performance Optimization", "DevOps"],
      readTime: "15 min read"
    }
  ];

  const blogPosts = [
    {
      id: "automation-reshaping-business",
      title: "5 Ways Automation is Reshaping Business Operations",
      excerpt: "Discover how intelligent automation is transforming modern business processes and operations, driving efficiency and creating new opportunities for growth.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&auto=format",
      author: "Rachel Kim",
      date: "January 3, 2025",
      category: "Automation",
      tags: ["Business Automation", "Digital Transformation"],
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Mobile-First Design: Creating Exceptional User Experiences",
      excerpt: "Why mobile-first design is crucial for modern applications and how to implement it effectively.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      author: "Emma Johnson",
      date: "December 8, 2024",
      category: "Tech Trends",
      tags: ["Mobile", "UI/UX", "Design"],
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Cybersecurity in the Age of Remote Work: Protecting Your Digital Assets",
      excerpt: "Essential cybersecurity practices for protecting your business in an increasingly remote world.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      author: "James Wilson",
      date: "December 5, 2024",
      category: "Tech Trends",
      tags: ["Cybersecurity", "Remote Work"],
      readTime: "7 min read"
    },
    {
      id: 7,
      title: "Complete Guide to Cloud Migration: Strategies, Challenges, and Solutions",
      excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal disruption.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      author: "David Kumar",
      date: "November 30, 2024",
      category: "How-to Guides",
      tags: ["Cloud", "Digital Transformation"],
      readTime: "10 min read"
    },
    {
      id: 8,
      title: "The Rise of Low-Code Development: Accelerating Digital Innovation",
      excerpt: "How low-code platforms are democratizing software development and accelerating digital transformation.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=600&q=80",
      author: "Lisa Thompson",
      date: "November 28, 2024",
      category: "Tech Trends",
      tags: ["Software Development", "Innovation"],
      readTime: "6 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesTag = selectedTag === "all" || post.tags.some(tag => tag === selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const handlePostClick = (post: any) => {
    if (typeof post.id === 'string') {
      // Navigate to dedicated article page
      navigateTo(`/articles/${post.id}`);
    } else {
      // For placeholder posts, navigate to generic article detail
      navigateTo('/articles/generic-article');
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
              <BookOpen className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                WDI Blog
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              WDI Blog: Insights, Innovation & Industry Trends
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Welcome to the WDI Blog, your go-to source for the latest insights, expert opinions, and thought leadership in software development and digital transformation. We cover a range of topics from cutting-edge technologies to industry best practices, designed to inform, inspire, and empower your digital journey.
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
                  placeholder="Search articles..."
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

              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger className="w-48 bg-background/50 border-white/10 text-white">
                  <SelectValue placeholder="Select Tag" className="text-white" />
                </SelectTrigger>
                <SelectContent>
                  {tags.map((tag) => (
                    <SelectItem key={tag} value={tag === "All Tags" ? "all" : tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Articles</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group cursor-pointer overflow-hidden"
                onClick={() => handlePostClick(post)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-none">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/20 text-white/70 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            <div className="text-sm text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="bg-background/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 group cursor-pointer overflow-hidden"
                onClick={() => handlePostClick(post)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-none">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#E5195E] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/20 text-white/70 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest blog posts and insights directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-card/50 border-white/10"
              />
              <Button className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Subscribe Now
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get insights from our experts and discover how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                onClick={() => navigateTo('/resources/blog')}
              >
                Explore All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigateTo('/contact')}
              >
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};