import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  Brain, 
  Users, 
  Building2,
  Monitor,
  ShoppingCart,
  Server,
  Wrench,
  Lightbulb,
  Database,
  Eye,
  MessageSquare,
  Target,
  BarChart3,
  Zap,
  Rocket,
  Shield,
  Cog,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Truck,
  Gamepad2,
  Factory,
  DollarSign,
  Home,
  BookOpen,
  Users2,
  Code2,
  Laptop,
  Paintbrush,
  Bot,
  RefreshCw,
  Info,
  Clock,
  Award,
  Briefcase,
  Heart,
  Newspaper,
  FileText,
  Star,
  HelpCircle,
  Mail,
  FileCheck,
  Phone,
  MapPin,
  Headphones,
  UserPlus,
  Apple,
  GitMerge,
  Gauge,
  Chrome,
  Watch,
  Cloud,
  CloudCog,
  Link,
  PenTool,
  MousePointer2,
  TestTube,
  PlayCircle,
  Search,
  Workflow,
  Sparkles,
  Wand2,
  Activity,
  TrendingUp,
  Settings,
  ArrowRight,
  Calculator,
  Calendar,
  FileEdit
} from "lucide-react";
import { Button } from "./ui/button";
import BlackLogo14 from "../imports/BlackLogo14";
import { navigateTo } from "../App";

const navigationData = {
  main_navigation: [
    "Services", 
    "AI & ML",
    "Solutions",
    "Industries", 
    "Hire Talent",
    "Company",
    "Resources"
  ],
  services: [
    {
      category: "Mobile App Development",
      icon: Smartphone,
      href: "/services/mobile-app-development",
      sub_services: [
        { name: "iOS App Development", href: "/services/ios-app-development" },
        { name: "Android App Development", href: "/services/android-app-development" },
        { name: "Cross-Platform App Development", href: "/services/cross-platform-app-development" },
        { name: "Native App Development", href: "/services/native-app-development" }, 
        { name: "Progressive Web Apps (PWAs)", href: "/services/pwa-development" },
        { name: "App Development for Wearables & Devices", href: "/services/wearable-device-development" }
      ]
    },
    {
      category: "Web & Cloud Solutions",
      icon: Globe,
      href: "/web-cloud",
      sub_services: [
        { name: "Custom Web Application Development", href: "/services/custom-web-app-development" },
        { name: "SaaS Product Engineering", href: "/services/saas-product-engineering" }, 
        { name: "eCommerce Platforms", href: "/services/ecommerce-platforms" },
        { name: "Admin Panels & Dashboards", href: "/services/admin-panels-dashboards" },
        { name: "API & Backend Development", href: "/services/api-backend-development" }
      ]
    },
    {
      category: "Software Engineering", 
      icon: Code2,
      href: "/software-engineering",
      sub_services: [
        { name: "Enterprise Software Solutions", href: "/services/enterprise-software-solutions" },
        { name: "System Architecture & DevOps", href: "/services/system-architecture-devops" },
        { name: "Third-Party Integrations", href: "/services/third-party-integrations" },
        { name: "Product Modernization", href: "/services/product-modernization" }
      ]
    },
    {
      category: "Design & Experience",
      icon: Paintbrush,
      href: "/design-experience",
      sub_services: [
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "Clickable Prototypes", href: "/services/clickable-prototypes" }, 
        { name: "Design Thinking Workshops", href: "/services/design-thinking-workshops" },
        { name: "User Research & Testing", href: "/services/user-research-testing" }
      ]
    }
  ],
  ai_data_intelligence: [
    {
      category: "Artificial Intelligence Services",
      icon: Bot,
      href: "/artificial-intelligence",
      sub_services: [
        { name: "AI Strategy & Consulting", href: "/services/ai-strategy-consulting" },
        { name: "AI-Powered Automation & Workflows", href: "/services/ai-automation-workflows" },
        { name: "AI Integration into Digital Products", href: "/services/ai-integration-digital-products" }, 
        { name: "Gen AI Integration into Digital Products", href: "/services/gen-ai-integration-digital-products" },
        { name: "AI Chatbots & Virtual Assistants", href: "/services/ai-chatbots-virtual-assistants" },
        { name: "AI Model Deployment & Maintenance", href: "/services/ai-model-deployment-mlops" }
      ]
    },
    {
      category: "Machine Learning Solutions", 
      icon: Brain,
      href: "/machine-learning",
      sub_services: [
        { name: "Custom ML Model Development", href: "/services/custom-ml-model-development" },
        { name: "Predictive Analytics & Forecasting", href: "/services/predictive-analytics-forecasting" },
        { name: "Computer Vision Applications", href: "/services/computer-vision-applications" },
        { name: "NLP & Text Analytics", href: "/services/nlp-text-analytics" }, 
        { name: "Recommendation Engines", href: "/services/recommendation-engines" }
      ]
    }
  ],
  solutions: [
    { text: "Digital Product Development", icon: Rocket, href: "/solutions/digital-product-development" },
    { text: "MVP & Startup Launch Packages", icon: Zap, href: "/solutions/mvp-startup-launch-packages" },
    { text: "Legacy System Rebuilds", icon: RefreshCw, href: "/solutions/legacy-system-rebuilds" },
    { text: "Dedicated Offshore Development Centers (ODC)", icon: Building2, href: "/solutions/dedicated-offshore-odc" },
    { text: "Business Process Automation", icon: Cog, href: "/solutions/business-process-automation" },
    { text: "Compliance-Ready Systems (HIPAA, GDPR, etc.)", icon: Shield, href: "/solutions/compliance-ready-systems" }
  ],
  industries: [
    {
      group: "Financial Services",
      icon: DollarSign,
      items: [
        { name: "FinTech & Banking Apps", href: "/industries/fintech-banking-apps" },
        { name: "WealthTech Platforms", href: "/industries/financial-services/wealthtech-platforms" }, 
        { name: "Real Estate Tech", href: "/industries/financial-services/real-estate-tech" }
      ]
    },
    {
      group: "Healthcare & Wellness",
      icon: Stethoscope,
      items: [
        { name: "HealthTech Applications", href: "/industries/healthcare/healthtech-applications" },
        { name: "Medical Compliance Solutions", href: "/industries/healthcare/medical-compliance-solutions" },
        { name: "Fitness & Wellness Platforms", href: "/industries/healthcare/fitness-wellness-platforms" }
      ]
    },
    {
      group: "Learning & Education", 
      icon: GraduationCap,
      items: [
        { name: "EdTech Platforms", href: "/industries/education/edtech-platforms" },
        { name: "Virtual Classrooms & LMS", href: "/industries/education/virtual-classrooms-lms" },
        { name: "Microlearning Apps", href: "/industries/education/microlearning-apps" }
      ]
    },
    {
      group: "Commerce & Consumer",
      icon: ShoppingBag,
      items: [
        { name: "eCommerce & Marketplaces", href: "/industries/commerce/ecommerce-marketplaces" },
        { name: "Food Ordering & Delivery", href: "/industries/commerce/food-ordering-delivery" },
        { name: "Travel & Booking Systems", href: "/industries/commerce/travel-booking-systems" },
        { name: "Event & Ticketing Solutions", href: "/industries/commerce/event-ticketing-solutions" }
      ]
    },
    {
      group: "Media & Community",
      icon: Gamepad2,
      items: [
        { name: "OTT & Streaming Apps", href: "/industries/media/ott-streaming-apps" }, 
        { name: "Social Platforms & Networks", href: "/industries/media/social-platforms-networks" },
        { name: "Sports & Fan Engagement", href: "/industries/media/sports-fan-engagement" }
      ]
    },
    {
      group: "Mobility & Logistics",
      icon: Truck,
      items: [
        { name: "Transportation Apps", href: "/industries/mobility/transportation-apps" },
        { name: "On-Demand Services", href: "/industries/mobility/on-demand-services" },
        { name: "Supply Chain & Fleet Management", href: "/industries/mobility/supply-chain-fleet-management" }
      ]
    },
    {
      group: "Industrial & Emerging Tech",
      icon: Factory,
      items: [
        { name: "Manufacturing Automation", href: "/industries/industrial/manufacturing-automation" },
        { name: "AgriTech Platforms", href: "/industries/industrial/agritech-platforms" },
        { name: "Oil & Gas Monitoring Systems", href: "/industries/industrial/oil-gas-monitoring-systems" }
      ]
    }
  ],
  hire_talent: [
    { text: "Hire Mobile App Developers", icon: Smartphone, href: "/hire-talent/mobile-app-developers" },
    { text: "Hire Full Stack Developers", icon: Code, href: "/hire-talent/full-stack-developers" },
    { text: "Hire Frontend Developers", icon: Monitor, href: "/hire-talent/frontend-developers" },
    { text: "Hire Backend Developers", icon: Database, href: "/hire-talent/backend-developers" },
    { text: "Hire UI/UX Designers", icon: Palette, href: "/hire-talent/ui-ux-designers" },
    { text: "Hire QA Engineers", icon: TestTube, href: "/hire-talent/qa-engineers" },
    { text: "Dedicated Development Teams", icon: Users, href: "/dedicated-development-teams" },
    { text: "Engagement Models", icon: Settings, href: "/engagement-models" },
    { text: "Team Augmentation Services", icon: Zap, href: "/team-augmentation-services" }
  ],
  company: [
    { text: "About WDI", icon: Info, href: "/company/about-wdi" },
    { text: "Our History", icon: Clock, href: "/company/our-history" },
    { text: "Leadership Team", icon: Users2, href: "/company/leadership-team" },
    { text: "Awards & Certifications", icon: Award, href: "/company/awards-certifications" },
    { text: "Careers", icon: Briefcase, href: "/company/careers" },
    { text: "Culture & Values", icon: Heart, href: "/company/culture-values" },
    { text: "Press & Media", icon: Newspaper, href: "/company/press-media" }
  ],
  resources: [
    { text: "Articles", icon: BookOpen, href: "/resources/blog" },
    { text: "Case Studies", icon: FileText, href: "/case-studies" },
    { text: "Client Testimonials", icon: Star, href: "/resources/client-testimonials" },
    { text: "Whitepapers & Insights", icon: FileCheck, href: "/resources/whitepapers-insights" },
    { text: "FAQs", icon: HelpCircle, href: "/resources/faqs" }
  ],
  contact: [
    { text: "Contact Form", icon: Mail, href: "/contact" },
    { text: "Request a Proposal", icon: FileCheck, href: "/contact/request-a-proposal" },
    { text: "Schedule a Discovery Call", icon: Phone, href: "/contact/schedule-a-discovery-call" },
    { text: "Office Locations", icon: MapPin, href: "/contact/office-locations" },
    { text: "Client Support", icon: Headphones, href: "/contact/client-support" },
    { text: "Send your CV to HR", icon: UserPlus, href: "/contact/send-your-cv" }
  ]
};

// CTA configurations for each mega menu type - UPDATED ALL TO LINK TO START A PROJECT PAGE
const megaMenuCTAs = {
  Services: {
    title: "Development Quote",
    subtitle: "Get a custom quote for your project",
    buttonText: "Get Started",
    href: "/start-a-project",
    icon: Calculator
  },
  "AI & ML": {
    title: "AI Strategy Session",
    subtitle: "Discover AI opportunities for your business",
    buttonText: "Book Session",
    href: "/start-a-project",
    icon: Bot
  },
  Solutions: {
    title: "Solution Consultation",
    subtitle: "Find the perfect solution for your business",
    buttonText: "Consult Now",
    href: "/start-a-project",
    icon: Lightbulb
  },
  Industries: {
    title: "Industry Expertise",
    subtitle: "Learn how we transform your industry",
    buttonText: "Explore",
    href: "/start-a-project",
    icon: Building2
  },
  "Hire Talent": {
    title: "Team Assessment",
    subtitle: "Get matched with the right talent",
    buttonText: "Start Hiring",
    href: "/start-a-project",
    icon: Users
  },
  Company: {
    title: "Schedule a Call",
    subtitle: "Let's discuss your project requirements",
    buttonText: "Book Call",
    href: "/start-a-project",
    icon: Calendar
  },
  Resources: {
    title: "Free Consultation",
    subtitle: "Get expert insights for your project",
    buttonText: "Get Started",
    href: "/start-a-project",
    icon: FileEdit
  },
  Contact: {
    title: "Start Your Project",
    subtitle: "Ready to bring your idea to life?",
    buttonText: "Get Started",
    href: "/start-a-project",
    icon: Rocket
  }
};

// Horizontal CTA Component matching reference design
const MegaMenuCTA = ({ type }: { type: string }) => {
  const cta = megaMenuCTAs[type as keyof typeof megaMenuCTAs];
  if (!cta) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="mt-8 p-6 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/30 rounded-2xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-1">{cta.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{cta.subtitle}</p>
        </div>
        <div className="ml-6">
          <Button
            className="bg-gradient-to-r from-[#E5195E] to-[#C41653] hover:from-[#C41653] hover:to-[#A31348] text-white font-medium text-sm px-6 py-3 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
            onClick={() => navigateTo(cta.href)}
          >
            {cta.buttonText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onCancelClose: () => void;
  type: string;
  timeoutRef?: React.MutableRefObject<NodeJS.Timeout | undefined>;
}

const MegaMenu = ({ isOpen, onClose, onCancelClose, type, timeoutRef }: MegaMenuProps) => {
  if (!isOpen) return null;

  const navigate = (path: string) => {
    navigateTo(path);
    onClose();
  };

  const renderServicesMenu = () => (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {navigationData.services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={service.category} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E5195E]/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#E5195E]" />
                </div>
                <h4 
                  className="font-semibold text-white text-sm cursor-pointer hover:text-[#E5195E] transition-colors"
                  onClick={() => service.href && navigate(service.href)}
                >
                  {service.category}
                </h4>
              </div>
              <ul className="space-y-3">
                {service.sub_services.map((subService) => (
                  <li key={subService.name}>
                    <a 
                      href="#" 
                      className="text-[#CCCCCC] hover:text-white text-sm transition-colors duration-200 block py-1 hover:translate-x-1 transform"
                      onClick={(e) => {
                        e.preventDefault();
                        if (subService.href) {
                          navigate(subService.href);
                        }
                      }}
                    >
                      {subService.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <MegaMenuCTA type="Services" />
    </div>
  );

  const renderAIMenu = () => (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {navigationData.ai_data_intelligence.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.category} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E5195E]/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#E5195E]" />
                </div>
                <h4 
                  className="font-semibold text-white text-lg cursor-pointer hover:text-[#E5195E] transition-colors"
                  onClick={() => category.href && navigate(category.href)}
                >
                  {category.category}
                </h4>
              </div>
              <ul className="space-y-3">
                {category.sub_services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href="#" 
                      className="text-[#CCCCCC] hover:text-white text-sm transition-colors duration-200 block py-1 hover:translate-x-1 transform"
                      onClick={(e) => {
                        e.preventDefault();
                        if (service.href) {
                          navigate(service.href);
                        }
                      }}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <MegaMenuCTA type="AI & ML" />
    </div>
  );

  const renderSolutionsMenu = () => (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {navigationData.solutions.map((solution) => {
          const Icon = solution.icon;
          return (
            <a 
              key={solution.text}
              href="#" 
              className="flex items-center gap-4 text-[#CCCCCC] hover:text-white transition-all duration-200 p-4 rounded-lg hover:bg-white/5 group"
              onClick={(e) => {
                e.preventDefault();
                if (solution.href) {
                  navigate(solution.href);
                }
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-[#E5195E]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4 text-[#E5195E]" />
              </div>
              <span className="font-medium">{solution.text}</span>
            </a>
          );
        })}
      </div>
      <MegaMenuCTA type="Solutions" />
    </div>
  );

  const renderIndustriesMenu = () => (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {navigationData.industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <div key={industry.group} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#E5195E]/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#E5195E]" />
                </div>
                <h4 className="font-semibold text-white text-sm border-b border-white/10 pb-2">
                  {industry.group}
                </h4>
              </div>
              <ul className="space-y-2">
                {industry.items.map((item) => (
                  <li key={item.name}>
                    <a 
                      href="#" 
                      className="text-[#CCCCCC] hover:text-white text-sm transition-colors duration-200 block py-1 hover:translate-x-1 transform"
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.href) {
                          navigate(item.href);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <MegaMenuCTA type="Industries" />
    </div>
  );

  const renderGenericMenu = (items: any[], menuType: string) => (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a 
              key={item.text}
              href="#" 
              className="flex items-center gap-4 text-[#CCCCCC] hover:text-white transition-all duration-200 p-4 rounded-lg hover:bg-white/5 group"
              onClick={(e) => {
                e.preventDefault();
                if (item.href) {
                  navigate(item.href);
                }
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-[#E5195E]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4 text-[#E5195E]" />
              </div>
              <span className="font-medium">{item.text}</span>
            </a>
          );
        })}
      </div>
      <MegaMenuCTA type={menuType} />
    </div>
  );

  const getMenuContent = () => {
    switch (type) {
      case 'Services':
        return renderServicesMenu();
      case 'AI & ML':
        return renderAIMenu();
      case 'Solutions':
        return renderSolutionsMenu();
      case 'Industries':
        return renderIndustriesMenu();
      case 'Hire Talent':
        return renderGenericMenu(navigationData.hire_talent, 'Hire Talent');
      case 'Company':
        return renderGenericMenu(navigationData.company, 'Company');
      case 'Resources':
        return renderGenericMenu(navigationData.resources, 'Resources');
      case 'Contact':
        return renderGenericMenu(navigationData.contact, 'Contact');
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-[#121212] backdrop-blur-xl border-t border-white/10 shadow-xl z-50 nav-mega-menu"
      style={{ minHeight: '400px' }}
      onMouseEnter={onCancelClose}
      onMouseLeave={onClose}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-[#0E0E0E] opacity-95" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-12">
        {getMenuContent()}
      </div>
    </motion.div>
  );
};

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const navRef = useRef<HTMLElement>(null);

  const navigate = (path: string) => {
    navigateTo(path);
  };

  const openMenu = useCallback((item: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (['Services', 'AI & ML', 'Solutions', 'Industries', 'Hire Talent', 'Company', 'Resources'].includes(item)) {
      setActiveMenu(item);
    }
  }, []);

  const closeMenu = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const handleNavItemMouseEnter = useCallback((item: string) => {
    cancelClose();
    openMenu(item);
  }, [cancelClose, openMenu]);

  const handleNavItemMouseLeave = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  const handleNavMouseLeave = useCallback((e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Element;
    if (!navRef.current?.contains(relatedTarget)) {
      closeMenu();
    }
  }, [closeMenu]);

  const handleNavMouseEnter = useCallback(() => {
    cancelClose();
  }, [cancelClose]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const hasDropdown = (item: string) => {
    return ['Services', 'AI & ML', 'Solutions', 'Industries', 'Hire Talent', 'Company', 'Resources'].includes(item);
  };

  // Function to get main category page route for navigation items
  const getMainCategoryRoute = (item: string) => {
    switch (item) {
      case 'Services':
        return '/services';
      case 'Company':
        return '/company';
      case 'Resources':
        return '/resources';
      case 'Contact':
        return '/contact';
      case 'Hire Talent':
        return '/hire-talent';
      case 'AI & ML':
        return '/artificial-intelligence';
      case 'Solutions':
        return '/solutions/digital-product-development'; // Default to first solution
      case 'Industries':
        return '/industries/fintech-banking-apps'; // Default to first industry
      default:
        return null;
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E0E]/90 backdrop-blur-lg border-b border-white/10"
      onMouseLeave={handleNavMouseLeave}
      onMouseEnter={handleNavMouseEnter}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a 
              href="#" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              <div className="w-10 h-10">
                <BlackLogo14 />
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationData.main_navigation.map((item) => (
              <div
                key={item}
                className="relative nav-dropdown-trigger"
                onMouseEnter={() => handleNavItemMouseEnter(item)}
                onMouseLeave={handleNavItemMouseLeave}
              >
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-1 text-[#CCCCCC] hover:text-white transition-colors duration-200 py-2 font-medium text-sm xl:text-base whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault();
                    const route = getMainCategoryRoute(item);
                    if (route) {
                      navigate(route);
                    }
                  }}
                >
                  {item}
                  {hasDropdown(item) && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item ? 'rotate-180' : ''}`} />
                  )}
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => navigate('/start-a-project')}
              className="hidden lg:flex"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#CCCCCC] hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {activeMenu && (
          <MegaMenu
            isOpen={true}
            onClose={closeMenu}
            onCancelClose={cancelClose}
            type={activeMenu}
            timeoutRef={timeoutRef}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#121212] border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navigationData.main_navigation.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-[#CCCCCC] hover:text-white transition-colors py-2 font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      const route = getMainCategoryRoute(item);
                      if (route) {
                        navigate(route);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item}
                  </a>
                ))}
                <Button 
                  onClick={() => {
                    navigate('/start-a-project');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-4"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};