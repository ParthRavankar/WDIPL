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
  id: "compliance-ready-systems-fintech",
  title: "Why Compliance-Ready Systems Are Crucial in Fintech Development",
  excerpt: "Exploring the critical importance of building compliance into fintech systems from day one, ensuring regulatory adherence while maintaining innovation and user experience.",
  content: `
    <p>The fintech industry operates in one of the most heavily regulated environments in the business world. From anti-money laundering (AML) requirements to data protection regulations, financial technology companies must navigate a complex landscape of compliance requirements while still delivering innovative solutions.</p>
    
    <h2>The Regulatory Landscape in Fintech</h2>
    <p>Financial technology companies must comply with a multitude of regulations that vary by jurisdiction, service type, and customer base. Understanding this landscape is crucial for any fintech venture.</p>
    
    <h3>Key Regulatory Frameworks</h3>
    <ul>
      <li><strong>PCI DSS:</strong> Payment Card Industry Data Security Standard for handling cardholder data</li>
      <li><strong>GDPR:</strong> General Data Protection Regulation for European user data protection</li>
      <li><strong>PSD2:</strong> Payment Services Directive for payment services in the EU</li>
      <li><strong>SOX:</strong> Sarbanes-Oxley Act for financial reporting and corporate governance</li>
      <li><strong>Basel III:</strong> International banking regulations for capital adequacy and risk management</li>
      <li><strong>KYC/AML:</strong> Know Your Customer and Anti-Money Laundering requirements</li>
    </ul>
    
    <blockquote>
      "Compliance isn't a feature you add later—it's the foundation upon which trust in financial services is built."
    </blockquote>
    
    <h2>The Cost of Non-Compliance</h2>
    <p>The consequences of failing to meet regulatory requirements in fintech can be severe, ranging from financial penalties to complete business shutdown.</p>
    
    <h3>Financial Impact</h3>
    <p>Recent regulatory fines in the financial sector highlight the serious financial consequences:</p>
    <ul>
      <li>GDPR violations can result in fines up to 4% of annual global turnover</li>
      <li>PCI DSS non-compliance can lead to fines ranging from $5,000 to $100,000 per month</li>
      <li>AML violations have resulted in billion-dollar penalties for major financial institutions</li>
      <li>Data breaches can cost an average of $4.45 million per incident in the financial sector</li>
    </ul>
    
    <h3>Beyond Financial Penalties</h3>
    <p>The impact of non-compliance extends far beyond monetary fines:</p>
    <ol>
      <li><strong>Loss of Operating Licenses:</strong> Regulatory bodies can revoke licenses, effectively shutting down operations</li>
      <li><strong>Reputational Damage:</strong> Public disclosure of compliance failures can irreparably damage brand trust</li>
      <li><strong>Customer Churn:</strong> Users lose confidence in non-compliant platforms</li>
      <li><strong>Investor Withdrawal:</strong> VCs and investors avoid companies with compliance issues</li>
    </ol>
    
    <h2>Building Compliance from the Ground Up</h2>
    <p>The most effective approach to fintech compliance is to embed it into the system architecture and development process from the very beginning.</p>
    
    <h3>Privacy by Design</h3>
    <p>Implementing privacy and compliance considerations at the architectural level ensures that:</p>
    <ul>
      <li>Data minimization principles are built into data collection processes</li>
      <li>Encryption and security measures are integral to the system design</li>
      <li>User consent mechanisms are seamlessly integrated into user flows</li>
      <li>Data retention and deletion policies are automatically enforced</li>
    </ul>
    
    <h3>Secure Development Lifecycle</h3>
    <p>A compliance-focused development approach includes:</p>
    <ol>
      <li><strong>Threat Modeling:</strong> Identifying potential security and compliance risks early</li>
      <li><strong>Secure Coding Practices:</strong> Following established guidelines for secure software development</li>
      <li><strong>Regular Security Testing:</strong> Conducting penetration testing and vulnerability assessments</li>
      <li><strong>Code Reviews:</strong> Implementing mandatory security-focused code reviews</li>
      <li><strong>Automated Compliance Checks:</strong> Using tools to automatically verify compliance requirements</li>
    </ol>
    
    <h2>Key Areas of Focus for Fintech Compliance</h2>
    
    <h3>Data Protection and Privacy</h3>
    <p>Financial applications handle highly sensitive personal and financial data, making data protection paramount:</p>
    <ul>
      <li>Encryption of data at rest and in transit</li>
      <li>Secure authentication and authorization mechanisms</li>
      <li>Regular security audits and penetration testing</li>
      <li>Incident response and breach notification procedures</li>
    </ul>
    
    <h3>Transaction Monitoring and Reporting</h3>
    <p>Fintech platforms must implement robust systems for monitoring and reporting suspicious activities:</p>
    <ul>
      <li>Real-time transaction monitoring for unusual patterns</li>
      <li>Automated suspicious activity reporting (SAR)</li>
      <li>Currency transaction reporting (CTR) for large transactions</li>
      <li>Comprehensive audit trails for all financial activities</li>
    </ul>
    
    <h3>Identity Verification and KYC</h3>
    <p>Know Your Customer requirements are fundamental to fintech compliance:</p>
    <ul>
      <li>Multi-factor identity verification processes</li>
      <li>Document verification using AI and machine learning</li>
      <li>Ongoing customer due diligence monitoring</li>
      <li>Enhanced due diligence for high-risk customers</li>
    </ul>
    
    <h2>Technology Solutions for Compliance</h2>
    
    <h3>RegTech Integration</h3>
    <p>Regulatory Technology (RegTech) solutions can help automate many compliance processes:</p>
    <ul>
      <li><strong>Automated Reporting:</strong> Generate regulatory reports automatically</li>
      <li><strong>Risk Assessment:</strong> AI-powered risk scoring for customers and transactions</li>
      <li><strong>Compliance Monitoring:</strong> Real-time monitoring of regulatory changes</li>
      <li><strong>Document Management:</strong> Automated collection and verification of compliance documents</li>
    </ul>
    
    <h3>Cloud Security and Compliance</h3>
    <p>Modern fintech companies often rely on cloud infrastructure, which requires special attention to compliance:</p>
    <ul>
      <li>Choosing cloud providers with relevant certifications (SOC 2, ISO 27001)</li>
      <li>Implementing proper data residency controls</li>
      <li>Ensuring encryption and access controls are properly configured</li>
      <li>Regular compliance audits of cloud infrastructure</li>
    </ul>
    
    <h2>Best Practices for Compliance Implementation</h2>
    
    <h3>Cross-Functional Collaboration</h3>
    <p>Successful compliance implementation requires collaboration across teams:</p>
    <ol>
      <li><strong>Legal and Compliance Team:</strong> Interpret regulations and provide guidance</li>
      <li><strong>Engineering Team:</strong> Implement technical controls and security measures</li>
      <li><strong>Product Team:</strong> Ensure compliance requirements are integrated into user experience</li>
      <li><strong>Operations Team:</strong> Monitor and maintain compliance systems</li>
    </ol>
    
    <h3>Continuous Monitoring and Improvement</h3>
    <p>Compliance is not a one-time implementation but an ongoing process:</p>
    <ul>
      <li>Regular compliance audits and assessments</li>
      <li>Monitoring regulatory changes and updates</li>
      <li>Training staff on new compliance requirements</li>
      <li>Updating systems and processes as regulations evolve</li>
    </ul>
    
    <h2>The Business Case for Compliance-First Development</h2>
    
    <h3>Competitive Advantage</h3>
    <p>Companies with robust compliance frameworks often gain competitive advantages:</p>
    <ul>
      <li>Faster time-to-market in regulated jurisdictions</li>
      <li>Easier partnership agreements with traditional financial institutions</li>
      <li>Enhanced customer trust and confidence</li>
      <li>Simplified expansion into new markets</li>
    </ul>
    
    <h3>Long-term Cost Savings</h3>
    <p>While implementing compliance systems requires upfront investment, it provides significant long-term benefits:</p>
    <ul>
      <li>Reduced risk of costly regulatory fines</li>
      <li>Lower insurance premiums due to better risk profile</li>
      <li>Faster regulatory approval processes</li>
      <li>Reduced need for costly compliance retrofitting</li>
    </ul>
    
    <h2>Working with Compliance-Focused Development Partners</h2>
    <p>For fintech companies, choosing the right development partner is crucial for building compliance-ready systems. The ideal partner should have:</p>
    
    <ul>
      <li>Deep experience with financial services regulations</li>
      <li>Proven track record of building compliant fintech applications</li>
      <li>Understanding of both technical implementation and regulatory requirements</li>
      <li>Ability to stay current with evolving regulatory landscape</li>
      <li>Experience with relevant security frameworks and certifications</li>
    </ul>
    
    <p>The future of fintech depends on companies that can balance innovation with compliance. By building compliance-ready systems from the ground up, fintech companies can create sustainable, trustworthy platforms that serve customers while meeting all regulatory requirements.</p>
  `,
  author: {
    name: "Michael Rodriguez",
    title: "Fintech Compliance Expert",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "Michael Rodriguez is a Fintech Compliance Expert at WDI with over 15 years of experience in financial services regulation and technology. He has helped dozens of fintech startups navigate complex compliance requirements while scaling their platforms."
  },
  publishDate: "January 5, 2025",
  readTime: "8 min read",
  category: "Fintech",
  tags: ["Fintech", "Compliance", "Regulatory Technology", "Financial Services", "Data Security"],
  bannerImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&auto=format",
  relatedArticles: [
    {
      id: "future-of-ai-healthcare",
      title: "The Future of AI in Healthcare: Transforming Patient Care Through Technology",
      excerpt: "Discover how artificial intelligence is revolutionizing healthcare delivery and patient outcomes.",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&auto=format",
      category: "Healthcare AI"
    },
    {
      id: "legacy-system-scaling",
      title: "How WDI Scaled a Legacy System for 1 Million+ Users",
      excerpt: "A detailed case study on modernizing and scaling legacy systems for massive user growth.",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop&auto=format",
      category: "Case Study"
    },
    {
      id: "automation-reshaping-business",
      title: "5 Ways Automation is Reshaping Business Operations",
      excerpt: "Discover how intelligent automation is transforming modern business processes and operations.",
      readTime: "10 min read", 
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&auto=format",
      category: "Automation"
    }
  ]
};

export const ComplianceReadyFintech = () => {
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
                Ready to build a compliance-ready fintech platform? Our team of experts is here to help you navigate 
                regulatory requirements while delivering innovative financial technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                  onClick={() => navigateTo('/contact')}
                >
                  Start Your Fintech Project
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