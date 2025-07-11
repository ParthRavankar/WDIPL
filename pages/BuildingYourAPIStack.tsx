import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import { Calendar, Clock, User, ArrowRight, Share2, Linkedin, Twitter, ExternalLink, Tag } from "lucide-react";
import { navigateTo } from "../App";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const articleData = {
  id: "building-your-api-stack",
  title: "Building Your API Stack: Best Practices for Modern Development",
  excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them. Here are the best practices for API development.",
  content: `
    <p>APIs are the backbone of modern software architecture. Whether you're building a mobile app, web application, or integrating with third-party services, a well-designed API stack is crucial for success. This guide covers everything you need to know about building robust, scalable APIs.</p>
    
    <h2>Understanding the Modern API Landscape</h2>
    <p>The API ecosystem has evolved dramatically over the past decade. What started with simple REST endpoints has grown into a complex landscape of GraphQL, webhooks, real-time APIs, and microservices architectures.</p>
    
    <blockquote>
      "A well-architected API is like a good contract – it's clear, reliable, and makes both parties happy."
    </blockquote>
    
    <h3>Choosing the Right API Architecture</h3>
    <p>Before diving into implementation, you need to choose the right architectural approach:</p>
    <ul>
      <li><strong>REST:</strong> Perfect for standard CRUD operations and simple integrations</li>
      <li><strong>GraphQL:</strong> Ideal when clients need flexible data queries and efficient data fetching</li>
      <li><strong>gRPC:</strong> Excellent for high-performance, low-latency communication between services</li>
      <li><strong>WebSocket:</strong> Essential for real-time features like chat or live updates</li>
      <li><strong>Webhooks:</strong> Great for event-driven architectures and third-party integrations</li>
    </ul>
    
    <h2>Essential Components of Your API Stack</h2>
    <p>A robust API stack consists of several key components working together seamlessly:</p>
    
    <h3>1. API Gateway</h3>
    <p>Your API gateway serves as the single entry point for all client requests. It handles:</p>
    <ul>
      <li>Request routing and load balancing</li>
      <li>Authentication and authorization</li>
      <li>Rate limiting and throttling</li>
      <li>Request/response transformation</li>
      <li>Monitoring and analytics</li>
    </ul>
    
    <h3>2. Authentication & Authorization</h3>
    <p>Security should be built into your API from day one. Consider these approaches:</p>
    <ol>
      <li><strong>OAuth 2.0:</strong> Industry standard for secure API access</li>
      <li><strong>JWT Tokens:</strong> Stateless authentication with embedded claims</li>
      <li><strong>API Keys:</strong> Simple but effective for service-to-service communication</li>
      <li><strong>mTLS:</strong> Mutual TLS for high-security environments</li>
    </ol>
    
    <h3>3. Documentation and Developer Experience</h3>
    <p>Great APIs are only as good as their documentation. Your documentation should include:</p>
    <ul>
      <li>Clear endpoint descriptions with examples</li>
      <li>Interactive API explorers (Swagger/OpenAPI)</li>
      <li>SDKs and code samples in popular languages</li>
      <li>Tutorials and getting started guides</li>
      <li>Changelog and versioning information</li>
    </ul>
    
    <h2>API Design Best Practices</h2>
    <p>Following established conventions makes your API intuitive and easy to adopt:</p>
    
    <h3>RESTful Design Principles</h3>
    <ul>
      <li>Use nouns for resource names, not verbs</li>
      <li>Implement proper HTTP status codes</li>
      <li>Support filtering, sorting, and pagination</li>
      <li>Use consistent naming conventions</li>
      <li>Implement proper error handling with meaningful messages</li>
    </ul>
    
    <h3>Performance Optimization</h3>
    <p>Performance can make or break user experience:</p>
    <ol>
      <li><strong>Caching:</strong> Implement multi-layer caching strategies</li>
      <li><strong>Compression:</strong> Use gzip compression for text responses</li>
      <li><strong>CDN:</strong> Distribute API responses globally</li>
      <li><strong>Database Optimization:</strong> Optimize queries and use proper indexing</li>
      <li><strong>Async Processing:</strong> Use queues for heavy operations</li>
    </ol>
    
    <h2>Testing and Quality Assurance</h2>
    <p>A comprehensive testing strategy ensures your API remains reliable as it evolves:</p>
    
    <h3>Testing Pyramid for APIs</h3>
    <ul>
      <li><strong>Unit Tests:</strong> Test individual functions and business logic</li>
      <li><strong>Integration Tests:</strong> Verify API endpoints work correctly</li>
      <li><strong>Contract Tests:</strong> Ensure API contracts remain stable</li>
      <li><strong>Load Tests:</strong> Validate performance under stress</li>
      <li><strong>Security Tests:</strong> Check for vulnerabilities and exploits</li>
    </ul>
    
    <h2>Monitoring and Observability</h2>
    <p>You can't improve what you don't measure. Implement comprehensive monitoring:</p>
    
    <h3>Key Metrics to Track</h3>
    <ul>
      <li><strong>Response Times:</strong> Track latency percentiles (p50, p95, p99)</li>
      <li><strong>Error Rates:</strong> Monitor 4xx and 5xx response rates</li>
      <li><strong>Throughput:</strong> Requests per second and concurrent users</li>
      <li><strong>Resource Usage:</strong> CPU, memory, and database performance</li>
      <li><strong>Business Metrics:</strong> API adoption and usage patterns</li>
    </ul>
    
    <h3>Alerting and Incident Response</h3>
    <p>Set up intelligent alerting that notifies you of issues before they impact users:</p>
    <ol>
      <li>Define SLAs and error budgets</li>
      <li>Create runbooks for common issues</li>
      <li>Implement automated rollback procedures</li>
      <li>Establish clear escalation procedures</li>
    </ol>
    
    <h2>Scaling Your API</h2>
    <p>As your API grows, you'll need to consider scaling strategies:</p>
    
    <h3>Horizontal vs Vertical Scaling</h3>
    <p>Most successful APIs use a combination of both:</p>
    <ul>
      <li><strong>Horizontal:</strong> Add more servers to handle increased load</li>
      <li><strong>Vertical:</strong> Increase server capacity (CPU, RAM, storage)</li>
      <li><strong>Database Scaling:</strong> Read replicas, sharding, and caching</li>
      <li><strong>Microservices:</strong> Break large APIs into smaller, focused services</li>
    </ul>
    
    <h2>Future-Proofing Your API</h2>
    <p>Build APIs that can evolve without breaking existing integrations:</p>
    
    <ul>
      <li>Implement proper versioning strategies</li>
      <li>Use feature flags for gradual rollouts</li>
      <li>Design extensible data models</li>
      <li>Plan for backward compatibility</li>
      <li>Document deprecation timelines</li>
    </ul>
    
    <p>Building a great API stack is an iterative process. Start with solid foundations, implement good practices from the beginning, and continuously improve based on user feedback and monitoring data. Remember, the best API is one that developers love to use and can rely on.</p>
  `,
  author: {
    name: "Lana Steiner",
    title: "Lead Backend Engineer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "Lana is a Lead Backend Engineer at WDI specializing in API architecture and distributed systems. She has designed and scaled APIs serving millions of requests per day for enterprise clients."
  },
  publishDate: "December 5, 2024",
  readTime: "12 min read",
  category: "Software Engineering",
  tags: ["API Development", "Backend Engineering", "System Architecture", "REST", "GraphQL"],
  bannerImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop&auto=format",
  relatedArticles: [
    {
      id: "ux-review-presentations",
      title: "UX Review Presentations",
      excerpt: "How do you create compelling presentations that wow clients, and actually close projects and deals?",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=250&fit=crop&auto=format",
      category: "Design"
    },
    {
      id: "migrating-to-linear-101",
      title: "Migrating to Linear 101",
      excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format",
      category: "Software Engineering"
    },
    {
      id: "microservices-architecture",
      title: "Microservices Architecture Guide",
      excerpt: "Learn how to design and implement microservices that scale with your business needs.",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
      category: "Software Engineering"
    }
  ]
};

export const BuildingYourAPIStack = () => {
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(articleData.title);
    
    let shareUrl = '';
    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${title} ${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <button onClick={() => navigateTo('/')} className="hover:text-white transition-colors">
                Home
              </button>
              <span>/</span>
              <button onClick={() => navigateTo('/resources/blog')} className="hover:text-white transition-colors">
                Insights
              </button>
              <span>/</span>
              <span className="text-white">Building Your API Stack</span>
            </div>

            {/* Article Meta */}
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] border-none">
                {articleData.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {articleData.publishDate}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {articleData.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {articleData.author.name}
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {articleData.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {articleData.excerpt}
            </p>

            {/* Banner Image */}
            {articleData.bannerImage && (
              <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
                <ImageWithFallback
                  src={articleData.bannerImage}
                  alt={articleData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-10 gap-12 max-w-7xl mx-auto">
            
            {/* Article Content - 70% */}
            <article className="lg:col-span-7">
              <Card className="bg-background/50 border-white/10">
                <CardContent className="p-8 lg:p-12">
                  {/* Article Body */}
                  <div 
                    className="prose prose-invert prose-lg max-w-none
                      prose-headings:text-white prose-headings:font-semibold
                      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                      prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                      prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                      prose-strong:text-white prose-strong:font-semibold
                      prose-ul:text-muted-foreground prose-ul:space-y-2
                      prose-ol:text-muted-foreground prose-ol:space-y-2
                      prose-li:leading-relaxed
                      prose-blockquote:border-l-4 prose-blockquote:border-[#E5195E] 
                      prose-blockquote:bg-card/50 prose-blockquote:rounded-r-lg
                      prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8
                      prose-blockquote:text-white prose-blockquote:font-medium prose-blockquote:italic
                      prose-blockquote:text-xl prose-blockquote:not-italic"
                    dangerouslySetInnerHTML={{ __html: articleData.content }}
                  />

                  {/* Article Footer */}
                  <div className="mt-16 pt-8 border-t border-white/10">
                    {/* Tags */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {articleData.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-white/20 text-white/70">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Share */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share this article
                      </h4>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('linkedin')}
                          className="border-white/20 text-white hover:bg-blue-600/20"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('twitter')}
                          className="border-white/20 text-white hover:bg-blue-400/20"
                        >
                          <Twitter className="w-4 h-4 mr-2" />
                          Twitter
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('whatsapp')}
                          className="border-white/20 text-white hover:bg-green-600/20"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>

                    {/* Author Bio */}
                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={articleData.author.avatar} alt={articleData.author.name} />
                            <AvatarFallback>{articleData.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1">{articleData.author.name}</h4>
                            <p className="text-[#E5195E] text-sm mb-3">{articleData.author.title}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">{articleData.author.bio}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Sidebar - 30% */}
            <aside className="lg:col-span-3 space-y-8">
              
              {/* Related Articles */}
              <Card className="bg-background/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">You Might Also Like</h3>
                  <div className="space-y-6">
                    {articleData.relatedArticles.map((article) => (
                      <div 
                        key={article.id} 
                        className="group cursor-pointer"
                        onClick={() => navigateTo(`/insights/${article.id}`)}
                      >
                        <div className="aspect-[16/10] overflow-hidden rounded-lg mb-3">
                          <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <Badge variant="secondary" className="bg-[#E5195E]/20 text-[#E5195E] text-xs mb-2">
                          {article.category}
                        </Badge>
                        <h4 className="text-white font-medium leading-tight mb-2 group-hover:text-[#E5195E] transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{article.excerpt}</p>
                        <span className="text-muted-foreground text-xs">{article.readTime}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => navigateTo('/resources/blog')}
                  >
                    View All Insights
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card className="bg-background/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">About WDI</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Web Development Institute helps startups and enterprises build scalable, secure digital products. 
                    With 25+ years of experience, we've delivered 200+ successful projects across 15+ countries.
                  </p>
                  <Button 
                    className="w-full bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                    onClick={() => navigateTo('/contact')}
                  >
                    Get In Touch
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-card/50 border-white/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Enjoyed this insight? Let's talk.
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your ideas into reality? Our team of experts is here to help you build 
                exceptional digital products that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                  onClick={() => navigateTo('/contact')}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => navigateTo('/resources/blog')}
                >
                  Read More Insights
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};