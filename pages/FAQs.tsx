import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { HelpCircle, Search, ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";
import { navigateTo } from "../App";

export const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      faqs: [
        {
          question: "What industries does WDI serve?",
          answer: "WDI serves a diverse range of industries including Healthcare, FinTech, E-commerce, Education, Manufacturing, Real Estate, Logistics, and many more. Our expertise spans across various sectors, allowing us to understand unique industry challenges and deliver tailored solutions that meet specific regulatory requirements and business needs."
        },
        {
          question: "What makes WDI different from other tech partners?",
          answer: "We differentiate ourselves through our comprehensive approach that combines technical excellence with deep industry knowledge. Our unique strengths include: 1) End-to-end solution delivery from concept to deployment, 2) Agile methodology with transparent communication, 3) Proven track record with 500+ successful projects, 4) Expert team of 150+ professionals, 5) Focus on long-term partnerships rather than just project completion, and 6) Cutting-edge technology adoption including AI/ML, cloud solutions, and modern development frameworks."
        },
        {
          question: "How long has WDI been in business?",
          answer: "WDI has been pioneering digital transformation solutions for over 6 years. Since our founding, we have successfully delivered 500+ projects, built a team of 150+ expert professionals, and established ourselves as a trusted technology partner for businesses ranging from startups to enterprise organizations."
        },
        {
          question: "What is WDI's approach to project management?",
          answer: "We follow Agile project management methodologies, primarily Scrum and Kanban, but we adapt our approach based on client preferences and project requirements. Our process includes regular sprint planning, daily standups, sprint reviews, and retrospectives. We maintain transparent communication through dedicated project managers, regular status updates, and collaborative tools that keep clients informed throughout the development process."
        }
      ]
    },
    {
      category: "Services & Solutions",
      icon: MessageSquare,
      faqs: [
        {
          question: "What development methodologies does WDI follow?",
          answer: "We primarily follow Agile methodologies including Scrum and Kanban, but we can adapt to client preferences such as Waterfall or hybrid approaches. Our Agile process includes sprint planning, daily standups, sprint reviews, and retrospectives. We use modern development practices like continuous integration/continuous deployment (CI/CD), test-driven development (TDD), and code reviews to ensure high-quality deliverables."
        },
        {
          question: "Do you offer post-development support and maintenance?",
          answer: "Yes, we provide comprehensive post-launch support and maintenance packages that include: 1) 24/7 technical support, 2) Bug fixes and security patches, 3) Performance monitoring and optimization, 4) Feature enhancements and updates, 5) Infrastructure management and scaling, 6) Regular health checks and reporting. Our support packages are customizable based on your specific needs and can include different SLA levels."
        },
        {
          question: "Can WDI integrate with our existing systems?",
          answer: "Absolutely! We specialize in third-party integrations and can seamlessly connect new solutions with your existing systems, databases, and applications. Our integration expertise includes APIs, webhooks, middleware solutions, ETL processes, and cloud-to-cloud integrations. We ensure data consistency, security, and minimal disruption to your current operations during the integration process."
        },
        {
          question: "What is your approach to UI/UX design?",
          answer: "Our UI/UX design process follows a user-centered design approach that includes: 1) User research and persona development, 2) Information architecture and wireframing, 3) Interactive prototyping and user testing, 4) Visual design and style guide creation, 5) Accessibility compliance (WCAG guidelines), 6) Responsive design for all devices, and 7) Continuous iteration based on user feedback. We use design thinking workshops to align stakeholders and ensure optimal user experiences."
        }
      ]
    },
    {
      category: "Hiring & Engagement",
      icon: Phone,
      faqs: [
        {
          question: "How does WDI vet its talent?",
          answer: "Our rigorous vetting process includes: 1) Technical assessments and coding challenges, 2) Multiple rounds of technical interviews, 3) Portfolio and project reviews, 4) Behavioral and cultural fit evaluations, 5) Reference checks from previous employers, 6) Continuous skill assessment and certification programs. We maintain a 95% client satisfaction rate with our talent, and all our professionals undergo regular training to stay updated with the latest technologies and best practices."
        },
        {
          question: "What are your typical engagement models?",
          answer: "We offer three primary engagement models: 1) Fixed Price - Best for well-defined projects with clear scope and requirements, 2) Time & Material - Ideal for projects with evolving requirements or ongoing development needs, 3) Dedicated Team - Perfect for long-term partnerships where you need a committed team working exclusively on your projects. We can also create hybrid models that combine elements from different approaches based on your specific needs."
        },
        {
          question: "Can we hire dedicated developers from WDI?",
          answer: "Yes, we offer dedicated development teams and individual developer hiring options. Our dedicated resources work exclusively on your projects and can be scaled up or down based on your needs. This model provides you with direct access to our talent pool while we handle all HR, administrative, and infrastructure aspects. The dedicated team integrates with your existing processes and becomes an extension of your in-house team."
        },
        {
          question: "What is the typical timeline for team augmentation?",
          answer: "Team augmentation timelines depend on the specific skills required and team size. Generally: 1) Standard skill sets: 1-2 weeks, 2) Specialized skills: 2-4 weeks, 3) Large teams (10+ members): 4-6 weeks. Our process includes requirement analysis, talent matching, interviews, onboarding, and integration. We maintain a bench of pre-vetted professionals to accelerate the process for common technology stacks."
        }
      ]
    },
    {
      category: "Technical Questions",
      icon: MessageSquare,
      faqs: [
        {
          question: "Which programming languages and frameworks do you specialize in?",
          answer: "We specialize in a wide range of modern technologies including: Frontend - React, Angular, Vue.js, Next.js, TypeScript; Backend - Node.js, Python, Java, .NET, PHP; Mobile - React Native, Flutter, iOS (Swift), Android (Kotlin); Cloud - AWS, Azure, Google Cloud; Databases - PostgreSQL, MongoDB, MySQL, Redis; AI/ML - TensorFlow, PyTorch, scikit-learn; DevOps - Docker, Kubernetes, Jenkins, Terraform. We continuously evaluate and adopt emerging technologies to provide cutting-edge solutions."
        },
        {
          question: "How do you ensure data security and privacy?",
          answer: "We adhere to industry-leading security standards and protocols including: 1) ISO 27001 and SOC 2 compliance, 2) GDPR and other data privacy regulations, 3) End-to-end encryption for data in transit and at rest, 4) Multi-factor authentication and access controls, 5) Regular security audits and penetration testing, 6) Secure coding practices and code reviews, 7) Infrastructure security with VPNs and firewalls, 8) Employee training on security best practices, and 9) Incident response and disaster recovery plans."
        },
        {
          question: "What cloud platforms do you work with?",
          answer: "We are certified partners with major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our cloud services include: 1) Cloud migration and modernization, 2) Infrastructure as Code (IaC), 3) Serverless architecture implementation, 4) Containerization with Docker and Kubernetes, 5) CI/CD pipeline setup, 6) Cloud security implementation, 7) Cost optimization strategies, and 8) 24/7 monitoring and support."
        },
        {
          question: "Do you provide AI and Machine Learning solutions?",
          answer: "Yes, we offer comprehensive AI/ML solutions including: 1) AI strategy and consulting, 2) Custom ML model development, 3) Computer vision applications, 4) Natural language processing, 5) Predictive analytics and forecasting, 6) AI chatbots and virtual assistants, 7) Recommendation engines, 8) AI model deployment and MLOps, 9) AI integration into existing applications, and 10) Generative AI solutions. Our AI experts work with frameworks like TensorFlow, PyTorch, and cloud-based AI services."
        }
      ]
    },
    {
      category: "Billing & Contracts",
      icon: Mail,
      faqs: [
        {
          question: "What are your payment terms?",
          answer: "Our standard payment terms are: 1) Fixed Price projects: 30% advance, 40% at milestone completion, 30% at project delivery, 2) Time & Material: Monthly billing with NET 15-30 payment terms, 3) Dedicated Team: Monthly advance payment for team costs. We accept payments via wire transfer, ACH, or other agreed methods. For long-term partnerships, we can discuss customized payment structures that align with your business cycles and budget planning."
        },
        {
          question: "Can we sign an NDA?",
          answer: "Absolutely! Confidentiality is paramount to us, and we are happy to sign Non-Disclosure Agreements (NDAs) before any project discussions begin. We have standard mutual NDAs ready, or we can review and sign your NDA format. We maintain strict confidentiality protocols throughout our organization and ensure that all team members working on your project sign appropriate confidentiality agreements."
        },
        {
          question: "What is included in your project estimates?",
          answer: "Our project estimates include: 1) Detailed scope of work and deliverables, 2) Development hours breakdown by task/feature, 3) Team composition and hourly rates, 4) Project timeline with milestones, 5) Third-party service costs (if applicable), 6) Testing and quality assurance, 7) Project management overhead, 8) Documentation and knowledge transfer. We provide transparent pricing with no hidden costs and clearly outline any assumptions or exclusions."
        },
        {
          question: "Do you offer different pricing models?",
          answer: "Yes, we offer flexible pricing models to suit different needs: 1) Fixed Price - Best for projects with well-defined scope, 2) Time & Material - Ideal for evolving requirements, 3) Dedicated Team - Monthly fixed cost for dedicated resources, 4) Outcome-based - Performance-linked pricing for specific results, 5) Hybrid models - Combination of the above based on project phases. We work with you to determine the most cost-effective and suitable pricing structure for your specific situation."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({
      ...faq,
      category: category.category,
      icon: category.icon
    }))
  );

  const filteredFaqs = allFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <HelpCircle className="w-6 h-6 text-[#E5195E]" />
              <Badge variant="outline" className="border-[#E5195E]/20 text-[#E5195E]">
                Frequently Asked Questions
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              FAQs: Your Questions, Our Answers
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have questions about our services, processes, or how we work? Our Frequently Asked Questions (FAQs) section provides quick and comprehensive answers to common inquiries, helping you find the information you need efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-card/50 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-background/50 border-white/10 text-lg"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-sm text-muted-foreground">
                {searchTerm ? `${filteredFaqs.length} result${filteredFaqs.length !== 1 ? 's' : ''} found` : `${allFaqs.length} questions available`}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {filteredCategories.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-12">
              {filteredCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div key={category.category}>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-[#E5195E]/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#E5195E]" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                    </div>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem
                          key={`${categoryIndex}-${faqIndex}`}
                          value={`item-${categoryIndex}-${faqIndex}`}
                          className="border border-white/10 rounded-lg bg-card/30 hover:bg-card/50 transition-colors duration-200"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                            <span className="text-white font-medium pr-4">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No FAQs Found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any questions matching your search. Try different keywords or browse all categories.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm("")}
                className="border-white/20 text-white hover:bg-white/10"
              >
                View All Questions
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                {allFaqs.length}+
              </div>
              <div className="text-muted-foreground">Questions Answered</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                &lt;1hr
              </div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#E5195E] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Issue Resolution Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground">
                Can't find the answer you're looking for? Our team is here to help you with any questions or concerns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#E5195E]/20 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6 text-[#E5195E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Get instant answers from our support team
                  </p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#E5195E]/20 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-[#E5195E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Send us your questions via email
                  </p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10 hover:border-[#E5195E]/30 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#E5195E]/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-[#E5195E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Call us for immediate assistance
                  </p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have all your questions answered? Let's discuss your project and explore how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white">
                Couldn't find your answer? Contact us directly
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};