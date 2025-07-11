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
  id: "future-of-ai-healthcare",
  title: "The Future of AI in Healthcare: Transforming Patient Care Through Technology",
  excerpt: "Discover how artificial intelligence is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans and administrative efficiency.",
  content: `
    <p>The healthcare industry stands on the brink of a technological revolution. Artificial Intelligence (AI) is not just a futuristic concept—it's actively transforming how we deliver patient care, conduct medical research, and manage healthcare systems today.</p>
    
    <h2>AI-Powered Diagnostics: Precision at Scale</h2>
    <p>One of the most promising applications of AI in healthcare is medical imaging and diagnostics. Machine learning algorithms can now analyze medical images with accuracy that rivals or exceeds human specialists.</p>
    
    <h3>Radiology and Medical Imaging</h3>
    <p>AI systems are being deployed to:</p>
    <ul>
      <li><strong>Detect cancer earlier:</strong> AI can identify subtle patterns in mammograms, CT scans, and MRIs that might be missed by human eyes</li>
      <li><strong>Analyze retinal images:</strong> Early detection of diabetic retinopathy and age-related macular degeneration</li>
      <li><strong>Interpret chest X-rays:</strong> Rapid identification of pneumonia, tuberculosis, and other lung conditions</li>
      <li><strong>Cardiac imaging:</strong> Assessment of heart function and detection of cardiovascular diseases</li>
    </ul>
    
    <blockquote>
      "AI doesn't replace doctors—it empowers them with superhuman capabilities to see patterns and make connections that would otherwise be impossible."
    </blockquote>
    
    <h2>Personalized Treatment and Drug Discovery</h2>
    <p>AI is enabling a new era of personalized medicine, where treatments are tailored to individual patients based on their genetic makeup, medical history, and lifestyle factors.</p>
    
    <h3>Precision Medicine Applications</h3>
    <ol>
      <li><strong>Genomic Analysis:</strong> AI algorithms can analyze vast amounts of genetic data to predict disease susceptibility and treatment responses</li>
      <li><strong>Drug Interactions:</strong> Machine learning models can predict how patients will respond to specific medications</li>
      <li><strong>Treatment Optimization:</strong> AI can recommend the most effective treatment protocols based on patient characteristics</li>
      <li><strong>Clinical Trial Matching:</strong> Automated systems can match patients with relevant clinical trials</li>
    </ol>
    
    <h2>Administrative Efficiency and Cost Reduction</h2>
    <p>Beyond clinical applications, AI is streamlining healthcare operations and reducing administrative burden on medical staff.</p>
    
    <h3>Key Areas of Impact</h3>
    <p>Healthcare AI is making significant improvements in:</p>
    <ul>
      <li>Automated medical coding and billing</li>
      <li>Intelligent scheduling and resource allocation</li>
      <li>Predictive analytics for hospital capacity planning</li>
      <li>Natural language processing for clinical documentation</li>
      <li>Fraud detection and compliance monitoring</li>
    </ul>
    
    <h2>Remote Monitoring and Telemedicine</h2>
    <p>The COVID-19 pandemic accelerated the adoption of telemedicine, and AI is making remote healthcare delivery more sophisticated and effective.</p>
    
    <h3>Wearable Technology Integration</h3>
    <p>AI-powered wearables and mobile health apps can:</p>
    <ul>
      <li>Monitor vital signs continuously</li>
      <li>Detect irregular heart rhythms</li>
      <li>Track medication adherence</li>
      <li>Predict health events before they occur</li>
      <li>Provide real-time health coaching</li>
    </ul>
    
    <h2>Challenges and Ethical Considerations</h2>
    <p>While the potential of AI in healthcare is enormous, several challenges must be addressed:</p>
    
    <h3>Data Privacy and Security</h3>
    <p>Healthcare data is highly sensitive, and AI systems must comply with strict regulations like HIPAA while maintaining robust security measures.</p>
    
    <h3>Algorithm Bias and Fairness</h3>
    <p>AI models must be trained on diverse datasets to ensure they work effectively across different populations and don't perpetuate existing healthcare disparities.</p>
    
    <h3>Regulatory Approval</h3>
    <p>AI medical devices require rigorous testing and regulatory approval before they can be deployed in clinical settings.</p>
    
    <h2>The Road Ahead</h2>
    <p>The future of AI in healthcare is bright, with emerging technologies like quantum computing, advanced neural networks, and federated learning promising even greater breakthroughs.</p>
    
    <p>As we move forward, the key to success will be maintaining a human-centered approach—using AI to augment human capabilities rather than replace human judgment. The goal is not to automate healthcare but to make it more precise, accessible, and effective for patients worldwide.</p>
    
    <h3>What Healthcare Organizations Need to Know</h3>
    <p>To successfully implement AI in healthcare settings, organizations should:</p>
    <ol>
      <li>Invest in data infrastructure and governance</li>
      <li>Train staff on AI technologies and their applications</li>
      <li>Establish clear protocols for AI-assisted decision making</li>
      <li>Ensure compliance with healthcare regulations</li>
      <li>Partner with experienced AI development teams</li>
    </ol>
    
    <p>The transformation of healthcare through AI is not a distant possibility—it's happening now. Organizations that embrace these technologies today will be best positioned to deliver superior patient outcomes tomorrow.</p>
  `,
  author: {
    name: "Dr. Sarah Chen",
    title: "Healthcare AI Specialist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "Dr. Sarah Chen is a Healthcare AI Specialist at WDI with over 12 years of experience in medical technology and artificial intelligence. She holds an MD from Stanford University and has led AI implementation projects for major healthcare systems."
  },
  publishDate: "January 8, 2025",
  readTime: "12 min read",
  category: "Healthcare AI",
  tags: ["Artificial Intelligence", "Healthcare", "Medical Technology", "Digital Health", "Machine Learning"],
  bannerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&auto=format",
  relatedArticles: [
    {
      id: "compliance-ready-systems-fintech",
      title: "Why Compliance-Ready Systems Are Crucial in Fintech Development",
      excerpt: "Exploring the critical importance of building compliance into fintech systems from day one.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format",
      category: "Fintech"
    },
    {
      id: "automation-reshaping-business",
      title: "5 Ways Automation is Reshaping Business Operations",
      excerpt: "Discover how intelligent automation is transforming modern business processes and operations.",
      readTime: "10 min read", 
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&auto=format",
      category: "Automation"
    },
    {
      id: "legacy-system-scaling",
      title: "How WDI Scaled a Legacy System for 1 Million+ Users",
      excerpt: "A detailed case study on modernizing and scaling legacy systems for massive user growth.",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop&auto=format",
      category: "Case Study"
    }
  ]
};

export const FutureOfAIHealthcare = () => {
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
                Ready to transform your healthcare technology with AI? Our team of experts is here to help you build 
                innovative solutions that improve patient outcomes and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white"
                  onClick={() => navigateTo('/contact')}
                >
                  Start Your AI Project
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