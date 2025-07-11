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
  id: "legacy-system-scaling",
  title: "How WDI Scaled a Legacy System for 1 Million+ Users",
  excerpt: "A detailed case study on modernizing and scaling legacy systems for massive user growth, overcoming technical debt while maintaining business continuity.",
  content: `
    <p>When our client, a rapidly growing fintech company, came to us in 2023, they were facing a critical challenge: their legacy system, built five years earlier to support 10,000 users, was buckling under the load of 800,000 active users and growing by 15% monthly. The system needed to scale to support over 1 million users without compromising performance or security.</p>
    
    <h2>The Challenge: Technical Debt Meets Explosive Growth</h2>
    <p>The client's platform had evolved organically over five years, accumulating significant technical debt along the way. What started as a simple MVP had grown into a complex system serving hundreds of thousands of users across multiple markets.</p>
    
    <h3>Key Issues Identified</h3>
    <ul>
      <li><strong>Monolithic Architecture:</strong> A single, tightly-coupled codebase that was difficult to scale and maintain</li>
      <li><strong>Database Bottlenecks:</strong> A single PostgreSQL instance handling all read and write operations</li>
      <li><strong>Inefficient Caching:</strong> Limited caching strategy leading to repeated expensive database queries</li>
      <li><strong>Legacy Frontend:</strong> jQuery-based frontend struggling with modern user expectations</li>
      <li><strong>Manual Deployment:</strong> Time-consuming manual deployment process prone to errors</li>
      <li><strong>Limited Monitoring:</strong> Insufficient observability into system performance and user behavior</li>
    </ul>
    
    <blockquote>
      "The biggest challenge wasn't just handling the current load—it was preparing for 10x growth while the business continued operating 24/7."
    </blockquote>
    
    <h2>Our Approach: Incremental Modernization</h2>
    <p>Rather than attempting a complete system rewrite (which would have been risky and disruptive), we chose an incremental modernization approach that allowed the business to continue operating while we systematically upgraded each component.</p>
    
    <h3>Phase 1: Infrastructure and Database Optimization (Months 1-2)</h3>
    <p>We started with the foundation—optimizing the infrastructure and database layer to provide immediate performance improvements.</p>
    
    <h4>Database Scaling Strategy</h4>
    <ul>
      <li><strong>Read Replicas:</strong> Implemented multiple read replicas to distribute query load</li>
      <li><strong>Connection Pooling:</strong> Deployed PgBouncer to manage database connections efficiently</li>
      <li><strong>Query Optimization:</strong> Identified and optimized the top 20 slowest queries</li>
      <li><strong>Indexing Strategy:</strong> Added strategic indexes to improve query performance by up to 90%</li>
    </ul>
    
    <h4>Caching Implementation</h4>
    <ul>
      <li><strong>Redis Cluster:</strong> Deployed a Redis cluster for session management and frequently accessed data</li>
      <li><strong>Application-Level Caching:</strong> Implemented intelligent caching for expensive operations</li>
      <li><strong>CDN Integration:</strong> Set up CloudFront CDN for static asset delivery</li>
    </ul>
    
    <h3>Phase 2: API Gateway and Service Decomposition (Months 3-4)</h3>
    <p>With the infrastructure stabilized, we began the gradual transition from monolith to microservices.</p>
    
    <h4>API Gateway Implementation</h4>
    <ul>
      <li><strong>Rate Limiting:</strong> Implemented intelligent rate limiting to prevent abuse</li>
      <li><strong>Authentication:</strong> Centralized authentication and authorization</li>
      <li><strong>Request Routing:</strong> Smart routing between legacy monolith and new services</li>
      <li><strong>Analytics:</strong> Comprehensive API usage analytics and monitoring</li>
    </ul>
    
    <h4>Service Extraction Strategy</h4>
    <p>We identified high-traffic, well-bounded contexts for initial service extraction:</p>
    <ol>
      <li><strong>User Service:</strong> Authentication, authorization, and user management</li>
      <li><strong>Notification Service:</strong> Email, SMS, and push notifications</li>
      <li><strong>Payment Service:</strong> Payment processing and transaction management</li>
      <li><strong>Analytics Service:</strong> User behavior tracking and reporting</li>
    </ol>
    
    <h3>Phase 3: Frontend Modernization (Months 5-6)</h3>
    <p>With the backend services stabilized, we turned our attention to the user-facing application.</p>
    
    <h4>Progressive Migration Approach</h4>
    <ul>
      <li><strong>Micro-frontends:</strong> Implemented a micro-frontend architecture for gradual migration</li>
      <li><strong>React Components:</strong> Built reusable React components within the existing jQuery application</li>
      <li><strong>Performance Optimization:</strong> Implemented code splitting and lazy loading</li>
      <li><strong>Mobile Responsiveness:</strong> Enhanced mobile experience for 60% of user base</li>
    </ul>
    
    <h2>Key Technical Decisions and Trade-offs</h2>
    
    <h3>Technology Stack Choices</h3>
    <p>We made strategic technology choices to balance performance, maintainability, and team expertise:</p>
    <ul>
      <li><strong>Node.js with TypeScript:</strong> For new microservices to ensure type safety and performance</li>
      <li><strong>React with Next.js:</strong> For frontend components and new pages</li>
      <li><strong>PostgreSQL with Redis:</strong> Maintained existing database while adding caching layer</li>
      <li><strong>Docker and Kubernetes:</strong> For containerization and orchestration</li>
      <li><strong>AWS Services:</strong> Leveraged managed services for reliability and scalability</li>
    </ul>
    
    <h3>Data Migration Strategy</h3>
    <p>One of the most complex aspects was migrating data while maintaining zero downtime:</p>
    <ol>
      <li><strong>Dual Writing:</strong> Implemented dual writing to both old and new systems during transition</li>
      <li><strong>Data Validation:</strong> Continuous validation to ensure data consistency</li>
      <li><strong>Feature Flags:</strong> Used feature flags to gradually route traffic to new services</li>
      <li><strong>Rollback Planning:</strong> Comprehensive rollback procedures for each migration step</li>
    </ol>
    
    <h2>Results: Performance Improvements</h2>
    
    <h3>Quantitative Improvements</h3>
    <p>The modernization delivered significant measurable improvements:</p>
    <ul>
      <li><strong>Response Time:</strong> Average API response time reduced from 2.3s to 180ms (92% improvement)</li>
      <li><strong>Throughput:</strong> System throughput increased from 500 to 5,000 concurrent users</li>
      <li><strong>Page Load Time:</strong> Frontend load time improved from 8.2s to 1.4s (83% improvement)</li>
      <li><strong>Error Rate:</strong> System error rate decreased from 3.2% to 0.1%</li>
      <li><strong>Deployment Time:</strong> Deployment time reduced from 45 minutes to 3 minutes</li>
    </ul>
    
    <h3>Business Impact</h3>
    <p>The technical improvements translated directly into business value:</p>
    <ul>
      <li><strong>User Growth:</strong> Platform successfully scaled to 1.2 million users without performance degradation</li>
      <li><strong>User Satisfaction:</strong> Customer satisfaction scores increased by 40%</li>
      <li><strong>Developer Productivity:</strong> Development team velocity increased by 60%</li>
      <li><strong>Operational Costs:</strong> Infrastructure costs reduced by 30% despite 5x traffic increase</li>
      <li><strong>Market Expansion:</strong> Enabled expansion into three new geographical markets</li>
    </ul>
    
    <h2>Monitoring and Observability</h2>
    
    <h3>Comprehensive Monitoring Stack</h3>
    <p>We implemented a robust monitoring solution to provide visibility into system performance:</p>
    <ul>
      <li><strong>Application Monitoring:</strong> New Relic for application performance monitoring</li>
      <li><strong>Infrastructure Monitoring:</strong> Datadog for infrastructure and container monitoring</li>
      <li><strong>Log Management:</strong> ELK stack (Elasticsearch, Logstash, Kibana) for centralized logging</li>
      <li><strong>Alerting:</strong> PagerDuty integration for intelligent alerting and incident management</li>
    </ul>
    
    <h3>Key Metrics Dashboard</h3>
    <p>We established comprehensive dashboards tracking:</p>
    <ul>
      <li>Response times and error rates for all services</li>
      <li>Database performance and query patterns</li>
      <li>User flow and conversion metrics</li>
      <li>Infrastructure utilization and costs</li>
      <li>Security events and compliance metrics</li>
    </ul>
    
    <h2>Lessons Learned</h2>
    
    <h3>What Worked Well</h3>
    <ul>
      <li><strong>Incremental Approach:</strong> Gradual migration reduced risk and maintained business continuity</li>
      <li><strong>Feature Flags:</strong> Enabled safe deployment and quick rollbacks when needed</li>
      <li><strong>Team Collaboration:</strong> Close collaboration with client's team ensured smooth knowledge transfer</li>
      <li><strong>Automated Testing:</strong> Comprehensive test coverage prevented regressions during migration</li>
    </ul>
    
    <h3>Challenges Faced</h3>
    <ul>
      <li><strong>Data Consistency:</strong> Ensuring data consistency during dual-writing phase required careful orchestration</li>
      <li><strong>Legacy Dependencies:</strong> Some legacy dependencies required custom solutions and workarounds</li>
      <li><strong>User Training:</strong> New features required user education and support documentation</li>
      <li><strong>Performance Testing:</strong> Load testing at scale required sophisticated testing infrastructure</li>
    </ul>
    
    <h2>Future-Proofing Strategies</h2>
    
    <h3>Scalability Planning</h3>
    <p>We implemented several strategies to ensure the system could continue scaling beyond 1 million users:</p>
    <ul>
      <li><strong>Auto-scaling:</strong> Kubernetes auto-scaling based on CPU and memory usage</li>
      <li><strong>Database Sharding:</strong> Prepared database sharding strategy for future growth</li>
      <li><strong>CDN Strategy:</strong> Global CDN deployment for international expansion</li>
      <li><strong>Performance Budgets:</strong> Established performance budgets for ongoing development</li>
    </ul>
    
    <h3>Operational Excellence</h3>
    <p>We established processes and practices for long-term success:</p>
    <ul>
      <li><strong>CI/CD Pipeline:</strong> Fully automated deployment pipeline with safety checks</li>
      <li><strong>Documentation:</strong> Comprehensive technical documentation and runbooks</li>
      <li><strong>Training Program:</strong> Training program for client's development team</li>
      <li><strong>Regular Reviews:</strong> Monthly architecture and performance review processes</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>This project demonstrated that legacy system modernization doesn't have to be an all-or-nothing proposition. By taking an incremental approach, focusing on high-impact improvements first, and maintaining close collaboration with the client's team, we successfully scaled a legacy system to handle 10x growth while improving performance, reliability, and developer experience.</p>
    
    <p>The key to success was balancing technical excellence with business pragmatism—delivering value quickly while building a foundation for long-term growth. Six months after completion, the system continues to perform excellently, supporting the client's expansion into new markets and feature development.</p>
  `,
  author: {
    name: "Alex Thompson",
    title: "Lead Systems Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "Alex Thompson is a Lead Systems Architect at WDI with over 18 years of experience in large-scale system design and legacy modernization. He has led successful scaling projects for companies ranging from startups to Fortune 500 enterprises."
  },
  publishDate: "December 28, 2024",
  readTime: "15 min read",
  category: "Case Study",
  tags: ["System Architecture", "Legacy Modernization", "Scalability", "Performance Optimization", "DevOps"],
  bannerImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop&auto=format",
  relatedArticles: [
    {
      id: "automation-reshaping-business",
      title: "5 Ways Automation is Reshaping Business Operations",
      excerpt: "Discover how intelligent automation is transforming modern business processes and operations.",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&auto=format",
      category: "Automation"
    },
    {
      id: "future-of-ai-healthcare",
      title: "The Future of AI in Healthcare: Transforming Patient Care Through Technology",
      excerpt: "Discover how artificial intelligence is revolutionizing healthcare delivery and patient outcomes.",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&auto=format",
      category: "Healthcare AI"
    },
    {
      id: "compliance-ready-systems-fintech",
      title: "Why Compliance-Ready Systems Are Crucial in Fintech Development",
      excerpt: "Exploring the critical importance of building compliance into fintech systems from day one.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format",
      category: "Fintech"
    }
  ]
};

export const LegacySystemScaling = () => {
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
                Blog
              </button>
              <span>/</span>
              <span className="text-white">{articleData.title}</span>
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
                      prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
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
                        onClick={() => navigateTo(`/articles/${article.id}`)}
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
                    View All Articles
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
                Enjoyed this article? Let's talk.
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to scale your legacy system or modernize your infrastructure? Our team of experts is here to help you 
                build scalable, high-performance systems that grow with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                  onClick={() => navigateTo('/contact')}
                >
                  Start Your Modernization Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => navigateTo('/resources/blog')}
                >
                  Read More Articles
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