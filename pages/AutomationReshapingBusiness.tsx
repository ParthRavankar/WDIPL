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
  id: "automation-reshaping-business",
  title: "5 Ways Automation is Reshaping Business Operations",
  excerpt: "Discover how intelligent automation is transforming modern business processes and operations, driving efficiency and creating new opportunities for growth.",
  content: `
    <p>Business automation has evolved far beyond simple rule-based tasks. Today's intelligent automation combines artificial intelligence, machine learning, and robotic process automation (RPA) to transform entire business operations. From customer service to supply chain management, automation is reshaping how companies operate, compete, and deliver value to customers.</p>
    
    <h2>1. Customer Service and Support Transformation</h2>
    <p>The customer service landscape has been revolutionized by automation technologies that provide 24/7 support while reducing costs and improving response times.</p>
    
    <h3>AI-Powered Chatbots and Virtual Assistants</h3>
    <p>Modern chatbots go far beyond simple FAQ responses. They now leverage natural language processing (NLP) and machine learning to:</p>
    <ul>
      <li><strong>Handle Complex Queries:</strong> Understand context and intent to provide accurate, personalized responses</li>
      <li><strong>Multi-language Support:</strong> Communicate with customers in their preferred language</li>
      <li><strong>Emotional Intelligence:</strong> Detect customer sentiment and escalate to human agents when needed</li>
      <li><strong>Learning Capabilities:</strong> Continuously improve responses based on customer interactions</li>
    </ul>
    
    <h3>Automated Ticket Routing and Prioritization</h3>
    <p>Intelligent systems now automatically categorize, prioritize, and route customer inquiries to the most appropriate agents based on:</p>
    <ul>
      <li>Issue complexity and type</li>
      <li>Agent expertise and availability</li>
      <li>Customer tier and history</li>
      <li>Urgency and business impact</li>
    </ul>
    
    <blockquote>
      "Companies implementing comprehensive customer service automation report 40% faster resolution times and 60% reduction in support costs while improving customer satisfaction scores."
    </blockquote>
    
    <h2>2. Financial Operations and Accounting Automation</h2>
    <p>Finance departments are experiencing dramatic efficiency gains through automation of traditionally manual, time-intensive processes.</p>
    
    <h3>Accounts Payable and Receivable</h3>
    <p>Automated financial systems are transforming how businesses handle money flows:</p>
    <ul>
      <li><strong>Invoice Processing:</strong> OCR technology extracts data from invoices and automatically matches them to purchase orders</li>
      <li><strong>Payment Processing:</strong> Automated approval workflows and payment scheduling based on predefined rules</li>
      <li><strong>Collections Management:</strong> AI-driven collections strategies that personalize outreach based on customer behavior</li>
      <li><strong>Expense Management:</strong> Automated expense categorization and policy compliance checking</li>
    </ul>
    
    <h3>Financial Reporting and Analytics</h3>
    <p>Real-time financial dashboards and automated reporting provide unprecedented visibility into business performance:</p>
    <ol>
      <li><strong>Automated Report Generation:</strong> Regular financial reports created and distributed automatically</li>
      <li><strong>Anomaly Detection:</strong> AI systems identify unusual patterns or potential fraud</li>
      <li><strong>Predictive Analytics:</strong> Forecasting cash flow, revenue, and financial risks</li>
      <li><strong>Compliance Monitoring:</strong> Automated compliance checks and regulatory reporting</li>
    </ol>
    
    <h2>3. Supply Chain and Inventory Management</h2>
    <p>Supply chain automation is enabling companies to respond more quickly to market changes while reducing costs and improving reliability.</p>
    
    <h3>Demand Forecasting and Planning</h3>
    <p>AI-powered demand forecasting considers multiple variables to predict future demand more accurately:</p>
    <ul>
      <li>Historical sales data and seasonal patterns</li>
      <li>Market trends and external economic factors</li>
      <li>Social media sentiment and consumer behavior</li>
      <li>Weather patterns and event calendars</li>
    </ul>
    
    <h3>Automated Procurement and Sourcing</h3>
    <p>Intelligent procurement systems optimize supplier relationships and purchasing decisions:</p>
    <ul>
      <li><strong>Supplier Performance Monitoring:</strong> Continuous assessment of supplier reliability and quality</li>
      <li><strong>Dynamic Pricing Optimization:</strong> Real-time price comparison and negotiation</li>
      <li><strong>Risk Assessment:</strong> Automated evaluation of supplier financial health and geopolitical risks</li>
      <li><strong>Contract Management:</strong> Automated contract renewals and compliance monitoring</li>
    </ul>
    
    <h3>Warehouse and Logistics Automation</h3>
    <p>Physical automation is transforming warehouse operations:</p>
    <ul>
      <li>Robotic picking and packing systems</li>
      <li>Automated guided vehicles (AGVs) for material transport</li>
      <li>Drone-based inventory counting and monitoring</li>
      <li>AI-optimized route planning for deliveries</li>
    </ul>
    
    <h2>4. Human Resources and Talent Management</h2>
    <p>HR departments are leveraging automation to focus on strategic initiatives while improving employee experience and operational efficiency.</p>
    
    <h3>Recruitment and Hiring Automation</h3>
    <p>AI-powered recruitment tools are transforming how companies find and hire talent:</p>
    <ul>
      <li><strong>Resume Screening:</strong> Automated parsing and ranking of applications based on job requirements</li>
      <li><strong>Candidate Sourcing:</strong> AI-driven search across multiple platforms to identify potential candidates</li>
      <li><strong>Interview Scheduling:</strong> Automated coordination of interview schedules across multiple stakeholders</li>
      <li><strong>Skills Assessment:</strong> Automated technical and cognitive assessments for objective evaluation</li>
    </ul>
    
    <h3>Employee Onboarding and Management</h3>
    <p>Streamlined HR processes improve employee satisfaction while reducing administrative burden:</p>
    <ol>
      <li><strong>Digital Onboarding:</strong> Automated paperwork, training schedules, and resource provisioning</li>
      <li><strong>Performance Management:</strong> Continuous feedback collection and performance analytics</li>
      <li><strong>Learning and Development:</strong> Personalized training recommendations based on career goals and skills gaps</li>
      <li><strong>Employee Engagement:</strong> Automated pulse surveys and sentiment analysis</li>
    </ol>
    
    <h3>Compliance and Policy Management</h3>
    <p>Automated systems ensure consistent application of HR policies and regulatory compliance:</p>
    <ul>
      <li>Automated time and attendance tracking</li>
      <li>Policy violation detection and reporting</li>
      <li>Benefits administration and enrollment</li>
      <li>Regulatory compliance monitoring</li>
    </ul>
    
    <h2>5. Marketing and Sales Automation</h2>
    <p>Marketing and sales teams are using automation to create more personalized customer experiences while scaling their efforts efficiently.</p>
    
    <h3>Lead Generation and Nurturing</h3>
    <p>Automated marketing systems create sophisticated customer journeys:</p>
    <ul>
      <li><strong>Lead Scoring:</strong> AI algorithms score leads based on behavior, demographics, and engagement</li>
      <li><strong>Email Marketing:</strong> Personalized email campaigns triggered by customer actions</li>
      <li><strong>Content Personalization:</strong> Dynamic website content based on visitor profiles and behavior</li>
      <li><strong>Social Media Management:</strong> Automated posting, engagement, and social listening</li>
    </ul>
    
    <h3>Sales Process Automation</h3>
    <p>CRM automation helps sales teams focus on high-value activities:</p>
    <ul>
      <li><strong>Pipeline Management:</strong> Automated lead progression and opportunity tracking</li>
      <li><strong>Sales Forecasting:</strong> AI-powered revenue predictions and deal probability analysis</li>
      <li><strong>Quote Generation:</strong> Automated proposal creation and pricing optimization</li>
      <li><strong>Follow-up Automation:</strong> Scheduled communications and reminder systems</li>
    </ul>
    
    <h3>Customer Analytics and Insights</h3>
    <p>Advanced analytics provide deep insights into customer behavior and preferences:</p>
    <ol>
      <li><strong>Customer Segmentation:</strong> AI-driven segmentation based on behavior patterns</li>
      <li><strong>Churn Prediction:</strong> Early identification of at-risk customers</li>
      <li><strong>Lifetime Value Analysis:</strong> Automated calculation of customer lifetime value</li>
      <li><strong>Campaign Optimization:</strong> A/B testing and performance optimization</li>
    </ol>
    
    <h2>The Impact on Business Operations</h2>
    
    <h3>Quantifiable Benefits</h3>
    <p>Organizations implementing comprehensive automation strategies report significant improvements:</p>
    <ul>
      <li><strong>Cost Reduction:</strong> 20-30% reduction in operational costs across automated processes</li>
      <li><strong>Efficiency Gains:</strong> 40-60% improvement in process completion times</li>
      <li><strong>Error Reduction:</strong> 80-95% decrease in manual errors and rework</li>
      <li><strong>Employee Satisfaction:</strong> Higher job satisfaction as employees focus on strategic work</li>
      <li><strong>Customer Experience:</strong> Improved customer satisfaction through faster, more consistent service</li>
    </ul>
    
    <h3>Strategic Advantages</h3>
    <p>Beyond operational improvements, automation provides strategic benefits:</p>
    <ul>
      <li><strong>Scalability:</strong> Ability to handle increased volume without proportional cost increases</li>
      <li><strong>Agility:</strong> Faster adaptation to market changes and customer demands</li>
      <li><strong>Innovation:</strong> Freed-up resources can be invested in innovation and growth initiatives</li>
      <li><strong>Competitive Advantage:</strong> Improved speed-to-market and operational excellence</li>
    </ul>
    
    <h2>Challenges and Considerations</h2>
    
    <h3>Implementation Challenges</h3>
    <p>While the benefits are clear, successful automation implementation requires careful planning:</p>
    <ul>
      <li><strong>Change Management:</strong> Employee resistance and the need for cultural transformation</li>
      <li><strong>Technical Integration:</strong> Connecting automation tools with existing systems and workflows</li>
      <li><strong>Data Quality:</strong> Ensuring data accuracy and consistency for AI-driven automation</li>
      <li><strong>Security and Compliance:</strong> Maintaining security and regulatory compliance in automated processes</li>
    </ul>
    
    <h3>Best Practices for Automation Success</h3>
    <ul>
      <li><strong>Start Small:</strong> Begin with pilot projects to demonstrate value and build confidence</li>
      <li><strong>Focus on ROI:</strong> Prioritize automation opportunities with clear business value</li>
      <li><strong>Involve Stakeholders:</strong> Engage employees in the automation planning and implementation process</li>
      <li><strong>Continuous Improvement:</strong> Regularly review and optimize automated processes</li>
      <li><strong>Training and Support:</strong> Provide comprehensive training for employees working with automated systems</li>
    </ul>
    
    <h2>The Future of Business Automation</h2>
    
    <h3>Emerging Technologies</h3>
    <p>Several emerging technologies will further enhance business automation capabilities:</p>
    <ul>
      <li><strong>Hyperautomation:</strong> End-to-end process automation using multiple technologies</li>
      <li><strong>Conversational AI:</strong> More sophisticated natural language interfaces</li>
      <li><strong>Edge Computing:</strong> Real-time automation capabilities at the point of action</li>
      <li><strong>Quantum Computing:</strong> Exponentially faster processing for complex optimization problems</li>
    </ul>
    
    <h3>Industry-Specific Applications</h3>
    <p>Different industries are developing specialized automation solutions:</p>
    <ul>
      <li><strong>Healthcare:</strong> Automated diagnosis, treatment planning, and patient monitoring</li>
      <li><strong>Manufacturing:</strong> Lights-out factories with minimal human intervention</li>
      <li><strong>Financial Services:</strong> Algorithmic trading and automated risk management</li>
      <li><strong>Retail:</strong> Automated inventory management and personalized shopping experiences</li>
    </ul>
    
    <h2>Getting Started with Business Automation</h2>
    
    <h3>Assessment and Planning</h3>
    <p>Before implementing automation, organizations should:</p>
    <ol>
      <li><strong>Process Audit:</strong> Identify and document current business processes</li>
      <li><strong>Automation Opportunities:</strong> Evaluate processes for automation potential</li>
      <li><strong>Technology Evaluation:</strong> Assess available automation technologies and vendors</li>
      <li><strong>ROI Analysis:</strong> Calculate expected returns and investment requirements</li>
      <li><strong>Implementation Roadmap:</strong> Develop a phased implementation plan</li>
    </ol>
    
    <h3>Key Success Factors</h3>
    <p>Successful automation initiatives share common characteristics:</p>
    <ul>
      <li>Strong executive sponsorship and organizational commitment</li>
      <li>Clear business objectives and success metrics</li>
      <li>Adequate budget and resources for implementation</li>
      <li>Experienced implementation partners and vendors</li>
      <li>Comprehensive change management and training programs</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Business automation is no longer a luxury—it's a necessity for organizations that want to remain competitive in today's fast-paced market. The five areas outlined—customer service, financial operations, supply chain management, human resources, and marketing/sales—represent the most significant opportunities for automation-driven transformation.</p>
    
    <p>The key to success lies in taking a strategic approach that balances technological capabilities with human expertise. Organizations that thoughtfully implement automation while investing in employee development and change management will emerge as leaders in their respective industries.</p>
    
    <p>As automation technologies continue to evolve, the companies that start their automation journey today will be best positioned to capitalize on future innovations and maintain sustainable competitive advantages.</p>
  `,
  author: {
    name: "Rachel Kim",
    title: "Business Process Automation Expert",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "Rachel Kim is a Business Process Automation Expert at WDI with over 14 years of experience helping organizations streamline operations through intelligent automation. She has led automation initiatives across various industries, from startups to Fortune 500 companies."
  },
  publishDate: "January 3, 2025",
  readTime: "10 min read",
  category: "Automation",
  tags: ["Business Automation", "Process Optimization", "Digital Transformation", "AI", "RPA"],
  bannerImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop&auto=format",
  relatedArticles: [
    {
      id: "legacy-system-scaling",
      title: "How WDI Scaled a Legacy System for 1 Million+ Users",
      excerpt: "A detailed case study on modernizing and scaling legacy systems for massive user growth.",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop&auto=format",
      category: "Case Study"
    },
    {
      id: "compliance-ready-systems-fintech",
      title: "Why Compliance-Ready Systems Are Crucial in Fintech Development",
      excerpt: "Exploring the critical importance of building compliance into fintech systems from day one.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format",
      category: "Fintech"
    },
    {
      id: "future-of-ai-healthcare",
      title: "The Future of AI in Healthcare: Transforming Patient Care Through Technology",
      excerpt: "Discover how artificial intelligence is revolutionizing healthcare delivery and patient outcomes.",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&auto=format",
      category: "Healthcare AI"
    }
  ]
};

export const AutomationReshapingBusiness = () => {
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
                Ready to automate your business operations and drive efficiency? Our team of experts is here to help you 
                implement intelligent automation solutions that transform your business processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                  onClick={() => navigateTo('/contact')}
                >
                  Start Your Automation Journey
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