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
  id: "migrating-to-linear-101",
  title: "Migrating to Linear 101: Streamline Your Software Projects",
  excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started and make the most of it.",
  content: `
    <p>Linear has rapidly become the go-to project management tool for high-performance engineering teams. With its clean interface, powerful features, and focus on speed, it's no wonder that companies like Coinbase, Replicate, and Vercel have made the switch.</p>
    
    <h2>Why Teams Are Moving to Linear</h2>
    <p>Traditional project management tools like Jira often feel clunky and over-engineered. Linear takes a different approach – it's designed specifically for modern software development teams who value simplicity and speed over endless customization options.</p>
    
    <blockquote>
      "Linear feels like what project management should have been all along – fast, intuitive, and focused on what matters."
    </blockquote>
    
    <h3>Key Benefits of Linear</h3>
    <ul>
      <li><strong>Speed:</strong> Lightning-fast interface with keyboard shortcuts for everything</li>
      <li><strong>Focus:</strong> Clean, distraction-free design that keeps teams focused</li>
      <li><strong>Integration:</strong> Seamless connection with GitHub, Slack, and other dev tools</li>
      <li><strong>Automation:</strong> Smart workflows that reduce manual busywork</li>
      <li><strong>Insights:</strong> Built-in analytics to track team performance and delivery</li>
    </ul>
    
    <h2>Planning Your Migration</h2>
    <p>Switching project management tools is never trivial, but proper planning can make the transition smooth. Here's a step-by-step approach to migrating from your current tool to Linear.</p>
    
    <h3>Phase 1: Preparation (Week 1)</h3>
    <ol>
      <li><strong>Audit your current setup:</strong> Document all projects, workflows, and integrations</li>
      <li><strong>Clean up existing data:</strong> Archive old projects and close stale issues</li>
      <li><strong>Identify stakeholders:</strong> Get buy-in from team leads and key contributors</li>
      <li><strong>Plan training:</strong> Schedule onboarding sessions for your team</li>
    </ol>
    
    <h3>Phase 2: Setup and Configuration (Week 2)</h3>
    <p>Linear's setup is refreshingly straightforward. Start by creating your workspace and configuring basic settings:</p>
    
    <ul>
      <li>Set up teams that match your organizational structure</li>
      <li>Configure project workflows and issue templates</li>
      <li>Import existing issues (Linear provides tools for Jira, GitHub, etc.)</li>
      <li>Connect integrations with Slack, GitHub, and other tools</li>
    </ul>
    
    <h2>Best Practices for Linear Success</h2>
    <p>To get the most out of Linear, follow these proven practices from successful teams:</p>
    
    <h3>Issue Organization</h3>
    <p>Linear's strength lies in its simplicity. Don't over-complicate your setup:</p>
    <ul>
      <li>Use clear, descriptive issue titles</li>
      <li>Apply labels consistently for easy filtering</li>
      <li>Set realistic estimates and priorities</li>
      <li>Link related issues to show dependencies</li>
    </ul>
    
    <h3>Workflow Optimization</h3>
    <p>Take advantage of Linear's automation features:</p>
    <ol>
      <li>Set up automatic issue transitions based on Git activity</li>
      <li>Configure Slack notifications for important updates</li>
      <li>Use issue templates for common request types</li>
      <li>Enable automatic project updates from code commits</li>
    </ol>
    
    <h2>Common Migration Challenges</h2>
    <p>Every migration comes with challenges. Here are the most common issues teams face and how to address them:</p>
    
    <h3>Data Import Issues</h3>
    <p>Not all data translates perfectly between tools. Focus on importing:</p>
    <ul>
      <li>Active issues and their current status</li>
      <li>Key project milestones and deadlines</li>
      <li>Essential metadata like assignees and priorities</li>
    </ul>
    
    <h3>User Adoption</h3>
    <p>Some team members may resist change. Combat this with:</p>
    <ul>
      <li>Hands-on training sessions</li>
      <li>Clear documentation of new processes</li>
      <li>Regular check-ins to address concerns</li>
      <li>Highlighting quick wins and improvements</li>
    </ul>
    
    <h2>Measuring Success</h2>
    <p>Linear's built-in analytics make it easy to track the impact of your migration. Key metrics to monitor include:</p>
    
    <ul>
      <li>Average time to close issues</li>
      <li>Team velocity and sprint completion rates</li>
      <li>Number of issues created vs. resolved</li>
      <li>Team satisfaction with the new workflow</li>
    </ul>
    
    <p>Most teams see immediate improvements in productivity and team satisfaction within the first month of using Linear. The combination of speed, simplicity, and powerful features makes it an ideal choice for modern development teams.</p>
  `,
  author: {
    name: "Phoenix Baker",
    title: "Senior Software Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "Phoenix is a Senior Software Engineer at WDI with expertise in development tools and team productivity. He has helped dozens of engineering teams optimize their workflows and delivery processes."
  },
  publishDate: "December 10, 2024",
  readTime: "6 min read",
  category: "Software Engineering",
  tags: ["Project Management", "Linear", "Team Productivity", "Migration", "Development Tools"],
  bannerImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&auto=format",
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
      id: "building-your-api-stack",
      title: "Building Your API Stack",
      excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      readTime: "12 min read", 
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop&auto=format",
      category: "Software Engineering"
    },
    {
      id: "agile-methodology",
      title: "Agile Development Best Practices",
      excerpt: "Learn how to implement agile methodologies that actually work for modern development teams.",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&auto=format",
      category: "Software Engineering"
    }
  ]
};

export const MigratingToLinear101 = () => {
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
              <span className="text-white">Migrating to Linear 101</span>
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