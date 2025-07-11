import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ClientLogos } from "./components/ClientLogos";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseWDI } from "./components/WhyChooseWDI";
import { HorizontalTagScroller } from "./components/HorizontalTagScroller";
import { CaseStudyHighlight } from "./components/CaseStudyHighlight";
import { InlineCTA } from "./components/InlineCTA";
import { ProcessSection } from "./components/ProcessSection";
import { CarouselTestimonials } from "./components/CarouselTestimonials";
import { ResourceCards } from "./components/ResourceCards";
import { SplitCallToAction } from "./components/SplitCallToAction";
import { Footer } from "./components/Footer";
import { Button } from "./components/ui/button";

// Main Category Pages
import { Services } from "./pages/Services";
import { Solutions } from "./pages/Solutions";
import { Industries } from "./pages/Industries";
import { Resources } from "./pages/Resources";
import { Company } from "./pages/Company";
import { ContactMain } from "./pages/ContactMain";
import { WebCloudServices } from "./pages/WebCloudServices";
import { SoftwareEngineering } from "./pages/SoftwareEngineering";
import { DesignExperience } from "./pages/DesignExperience";
import { ArtificialIntelligenceServices } from "./pages/ArtificialIntelligenceServices";
import { MachineLearning } from "./pages/MachineLearning";

// Service Pages
import { MobileAppDevelopment } from "./pages/MobileAppDevelopment";
import { IOSAppDevelopment } from "./pages/iOSAppDevelopment";
import { AndroidAppDevelopment } from "./pages/AndroidAppDevelopment";
import { CrossPlatformAppDevelopment } from "./pages/CrossPlatformAppDevelopment";
import { NativeAppDevelopment } from "./pages/NativeAppDevelopment";
import { PWADevelopment } from "./pages/PWADevelopment";
import { WearableDeviceDevelopment } from "./pages/WearableDeviceDevelopment";
import { CustomWebAppDevelopment } from "./pages/CustomWebAppDevelopment";
import { SaaSProductEngineering } from "./pages/SaaSProductEngineering";
import { EcommercePlatforms } from "./pages/EcommercePlatforms";
import { AdminPanelsDashboards } from "./pages/AdminPanelsDashboards";
import { APIBackendDevelopment } from "./pages/APIBackendDevelopment";
import { EnterpriseSoftwareSolutions } from "./pages/EnterpriseSoftwareSolutions";
import { SystemArchitectureDevOps } from "./pages/SystemArchitectureDevOps";
import { ThirdPartyIntegrations } from "./pages/ThirdPartyIntegrations";
import { ProductModernization } from "./pages/ProductModernization";
import { UIUXDesign } from "./pages/UIUXDesign";
import { ClickablePrototypes } from "./pages/ClickablePrototypes";
import { DesignThinkingWorkshops } from "./pages/DesignThinkingWorkshops";
import { UserResearchTesting } from "./pages/UserResearchTesting";
import { AIStrategyConsulting } from "./pages/AIStrategyConsulting";
import { AIAutomationWorkflows } from "./pages/AIAutomationWorkflows";
import { AIIntegrationDigitalProducts } from "./pages/AIIntegrationDigitalProducts";
import { GenAIIntegrationDigitalProducts } from "./pages/GenAIIntegrationDigitalProducts";
import { AIChatbotsVirtualAssistants } from "./pages/AIChatbotsVirtualAssistants";
import { AIModelDeploymentMLOps } from "./pages/AIModelDeploymentMLOps";
import { CustomMLModelDevelopment } from "./pages/CustomMLModelDevelopment";
import { PredictiveAnalyticsForecasting } from "./pages/PredictiveAnalyticsForecasting";
import { ComputerVisionApplications } from "./pages/ComputerVisionApplications";
import { NLPTextAnalytics } from "./pages/NLPTextAnalytics";
import { RecommendationEngines } from "./pages/RecommendationEngines";

// Solution Pages
import { DigitalProductDevelopment } from "./pages/DigitalProductDevelopment";
import { MVPStartupLaunchPackages } from "./pages/MVPStartupLaunchPackages";
import { LegacySystemRebuilds } from "./pages/LegacySystemRebuilds";
import { DedicatedOffshoreODC } from "./pages/DedicatedOffshoreODC";
import { BusinessProcessAutomation } from "./pages/BusinessProcessAutomation";
import { ComplianceReadySystems } from "./pages/ComplianceReadySystems";

// Industry Pages - Financial Services
import { FinTechBankingApps } from "./pages/FinTechBankingApps";
import { WealthTechPlatforms } from "./pages/WealthTechPlatforms";
import { RealEstateTech } from "./pages/RealEstateTech";

// Industry Pages - Healthcare & Wellness
import { HealthTechApplications } from "./pages/HealthTechApplications";
import { MedicalComplianceSolutions } from "./pages/MedicalComplianceSolutions";
import { FitnessWellnessPlatforms } from "./pages/FitnessWellnessPlatforms";

// Industry Pages - Learning & Education
import { EdTechPlatforms } from "./pages/EdTechPlatforms";
import { VirtualClassroomsLMS } from "./pages/VirtualClassroomsLMS";
import { MicrolearningApps } from "./pages/MicrolearningApps";

// Industry Pages - Commerce & Consumer
import { EcommerceMarketplaces } from "./pages/EcommerceMarketplaces";
import { FoodOrderingDelivery } from "./pages/FoodOrderingDelivery";
import { TravelBookingSystems } from "./pages/TravelBookingSystems";
import { EventTicketingSolutions } from "./pages/EventTicketingSolutions";

// Industry Pages - Media & Community
import { OTTStreamingApps } from "./pages/OTTStreamingApps";
import { SocialPlatformsNetworks } from "./pages/SocialPlatformsNetworks";
import { SportsFanEngagement } from "./pages/SportsFanEngagement";

// Industry Pages - Mobility & Logistics
import { TransportationApps } from "./pages/TransportationApps";
import { OnDemandServices } from "./pages/OnDemandServices";
import { SupplyChainFleetManagement } from "./pages/SupplyChainFleetManagement";

// Industry Pages - Industrial & Emerging Tech
import { ManufacturingAutomation } from "./pages/ManufacturingAutomation";
import { AgriTechPlatforms } from "./pages/AgriTechPlatforms";
import { OilGasMonitoringSystems } from "./pages/OilGasMonitoringSystems";

// Company Pages
import { AboutWDI } from "./pages/AboutWDI";
import { OurHistory } from "./pages/OurHistory";
import { LeadershipTeam } from "./pages/LeadershipTeam";
import { AwardsCertifications } from "./pages/AwardsCertifications";
import { Careers } from "./pages/Careers";
import { CultureValues } from "./pages/CultureValues";
import { PressMedia } from "./pages/PressMedia";

// Hire Talent Pages
import { HireTalent } from "./pages/HireTalent";
import { HireMobileAppDevelopers } from "./pages/HireMobileAppDevelopers";
import { HireFullStackDevelopers } from "./pages/HireFullStackDevelopers";
import { HireFrontendDevelopers } from "./pages/HireFrontendDevelopers";
import { HireBackendDevelopers } from "./pages/HireBackendDevelopers";
import { HireUIUXDesigners } from "./pages/HireUIUXDesigners";
import { HireQAEngineers } from "./pages/HireQAEngineers";
import { DedicatedDevelopmentTeams } from "./pages/DedicatedDevelopmentTeams";
import { EngagementModels } from "./pages/EngagementModels";
import { TeamAugmentationServices } from "./pages/TeamAugmentationServices";

// Resource Pages
import { Blog } from "./pages/Blog";
import { CaseStudies } from "./pages/CaseStudies";
import { ClientTestimonials } from "./pages/ClientTestimonials";
import { WhitepapersInsights } from "./pages/WhitepapersInsights";
import { FAQs } from "./pages/FAQs";

// Contact Pages
import { Contact } from "./pages/Contact";
import { RequestProposal } from "./pages/RequestProposal";
import { ScheduleDiscoveryCall } from "./pages/ScheduleDiscoveryCall";
import { OfficeLocations } from "./pages/OfficeLocations";
import { ClientSupport } from "./pages/ClientSupport";
import { SendYourCV } from "./pages/SendYourCV";
import { StartAProject } from "./pages/StartAProject";
import { ThankYou } from "./pages/ThankYou";
import { RegroupProject } from "./pages/RegroupProject";
import { SeezunProject } from "./pages/SeezunProject";
import { WokaProject } from "./pages/WokaProject";
import { TanamiProject } from "./pages/TanamiProject";
import { TradersCircuitProject } from "./pages/TradersCircuitProject";
import { GoodTimesProject } from "./pages/GoodTimesProject";
import { ProspertyProject } from "./pages/ProspertyProject";
import { RanOutOfProject } from "./pages/RanOutOfProject";
import { ArticleDetail } from "./pages/ArticleDetail";
import { FutureOfAIHealthcare } from "./pages/FutureOfAIHealthcare";
import { ComplianceReadyFintech } from "./pages/ComplianceReadyFintech";
import { LegacySystemScaling } from "./pages/LegacySystemScaling";
import { AutomationReshapingBusiness } from "./pages/AutomationReshapingBusiness";
import { UXReviewPresentations } from "./pages/UXReviewPresentations";
import { MigratingToLinear101 } from "./pages/MigratingToLinear101";
import { BuildingYourAPIStack } from "./pages/BuildingYourAPIStack";
import { CookieConsent } from "./components/CookieConsent";

// Create a global navigation context
let setCurrentPath: ((path: string) => void) | null = null;

// Smooth scroll to top function
const scrollToTop = () => {
  const scrollStep = -window.scrollY / (300 / 15); // Duration in ms / frame rate
  const scrollInterval = () => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      window.requestAnimationFrame(scrollInterval);
    }
  };
  window.requestAnimationFrame(scrollInterval);
};

export const navigateTo = (path: string) => {
  if (setCurrentPath) {
    // First update the URL and path
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  }
};

// Simple routing logic with better state management
const useRouter = () => {
  const [currentPath, setCurrentPathState] = useState(
    window.location.pathname,
  );

  useEffect(() => {
    // Set the global navigation function
    setCurrentPath = setCurrentPathState;

    const handlePopState = () => {
      setCurrentPathState(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      setCurrentPath = null;
    };
  }, []);

  // Scroll to top whenever the path changes - but only after a delay to ensure rendering
  useEffect(() => {
    // Use a timeout to ensure the new page has rendered before scrolling
    const scrollTimeout = setTimeout(() => {
      scrollToTop();
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, [currentPath]);

  return { currentPath };
};

// Placeholder component for pages that don't exist yet
const PlaceholderPage = ({
  title = "Coming Soon",
}: {
  title?: string;
}) => (
  <div className="dark min-h-screen bg-background">
    <Navigation />
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            This page is currently under development. Please
            check back soon!
          </p>
          <Button onClick={() => navigateTo("/")} size="lg">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// Homepage component - ENSURED ALL SECTIONS USE DARK BACKGROUNDS
const Homepage = () => (
  <div className="dark min-h-screen bg-background">
    <Navigation />

    {/* Hero Section - Dark background */}
    <section className="bg-background">
      <HeroSection />
    </section>

    {/* Client Logos - Dark background */}
    <section className="bg-background">
      <ClientLogos />
    </section>

    {/* Services Grid - Dark background */}
    <section className="bg-background">
      <ServicesSection />
    </section>

    {/* Why Choose WDI - Dark background */}
    <section className="bg-background">
      <WhyChooseWDI />
    </section>

    {/* Industry Solutions - Dark background */}
    <section className="bg-background">
      <HorizontalTagScroller />
    </section>

    {/* Case Studies - Dark background */}
    <section className="bg-background">
      <CaseStudyHighlight />
    </section>

    {/* Inline CTA - Dark background */}
    <section className="bg-background">
      <InlineCTA />
    </section>

    {/* Process Steps - Dark background */}
    <section className="bg-background">
      <ProcessSection />
    </section>

    {/* Testimonials - Dark background */}
    <section className="bg-background">
      <CarouselTestimonials />
    </section>

    {/* Resources - Dark background */}
    <section className="bg-background">
      <ResourceCards />
    </section>

    {/* Final CTA - Dark background */}
    <section className="bg-background">
      <SplitCallToAction />
    </section>

    {/* Footer - Dark background */}
    <section className="bg-background">
      <Footer />
    </section>
  </div>
);

export default function App() {
  const { currentPath } = useRouter();

  // Route definitions for cleaner code
  const routes = {
    // Homepage
    "/": Homepage,
    "/home": Homepage,

    // MAIN CATEGORY PAGES - ALL NOW FULLY IMPLEMENTED ✅
    "/services": Services,
    "/solutions": Solutions,
    "/industries": Industries,
    "/resources": Resources,
    "/company": Company,
    "/contact": ContactMain,
    "/web-cloud": WebCloudServices,
    "/software-engineering": SoftwareEngineering,
    "/design-experience": DesignExperience,
    "/artificial-intelligence": ArtificialIntelligenceServices,
    "/machine-learning": MachineLearning,

    // SERVICES
    "/services/mobile-app-development": MobileAppDevelopment,
    "/services/ios-app-development": IOSAppDevelopment,
    "/services/android-app-development": AndroidAppDevelopment,
    "/services/cross-platform-app-development":
      CrossPlatformAppDevelopment,
    "/services/native-app-development": NativeAppDevelopment,
    "/services/pwa-development": PWADevelopment,
    "/services/wearable-device-development":
      WearableDeviceDevelopment,
    "/services/custom-web-app-development":
      CustomWebAppDevelopment,
    "/services/saas-product-engineering":
      SaaSProductEngineering,
    "/services/ecommerce-platforms": EcommercePlatforms,
    "/services/admin-panels-dashboards": AdminPanelsDashboards,
    "/services/api-backend-development": APIBackendDevelopment,
    "/services/enterprise-software-solutions":
      EnterpriseSoftwareSolutions,
    "/services/system-architecture-devops":
      SystemArchitectureDevOps,
    "/services/third-party-integrations":
      ThirdPartyIntegrations,
    "/services/product-modernization": ProductModernization,
    "/services/ui-ux-design": UIUXDesign,
    "/services/clickable-prototypes": ClickablePrototypes,
    "/services/design-thinking-workshops":
      DesignThinkingWorkshops,
    "/services/user-research-testing": UserResearchTesting,
    "/services/ai-strategy-consulting": AIStrategyConsulting,
    "/services/ai-automation-workflows": AIAutomationWorkflows,
    "/services/ai-integration-digital-products":
      AIIntegrationDigitalProducts,
    "/services/gen-ai-integration-digital-products":
      GenAIIntegrationDigitalProducts,
    "/services/ai-chatbots-virtual-assistants":
      AIChatbotsVirtualAssistants,
    "/services/ai-model-deployment-mlops":
      AIModelDeploymentMLOps,
    "/services/custom-ml-model-development":
      CustomMLModelDevelopment,
    "/services/predictive-analytics-forecasting":
      PredictiveAnalyticsForecasting,
    "/services/computer-vision-applications":
      ComputerVisionApplications,
    "/services/nlp-text-analytics": NLPTextAnalytics,
    "/services/recommendation-engines": RecommendationEngines,

    // SOLUTIONS - Original routes
    "/solutions/digital-product-development":
      DigitalProductDevelopment,
    "/solutions/mvp-startup-launch-packages":
      MVPStartupLaunchPackages,
    "/solutions/legacy-system-rebuilds": LegacySystemRebuilds,
    "/solutions/dedicated-offshore-odc": DedicatedOffshoreODC,
    "/solutions/business-process-automation":
      BusinessProcessAutomation,
    "/solutions/compliance-ready-systems":
      ComplianceReadySystems,

    // SOLUTIONS - New simplified routes
    "/digital-product-development": DigitalProductDevelopment,
    "/mvp-startup-launch": MVPStartupLaunchPackages,
    "/legacy-system-rebuilds": LegacySystemRebuilds,
    "/dedicated-development-centers": DedicatedOffshoreODC,
    "/business-process-automation": BusinessProcessAutomation,
    "/compliance-ready-systems": ComplianceReadySystems,

    // INDUSTRIES - Financial Services
    "/industries/fintech-banking-apps": FinTechBankingApps,
    "/industries/financial-services/wealthtech-platforms":
      WealthTechPlatforms,
    "/industries/financial-services/real-estate-tech":
      RealEstateTech,

    // INDUSTRIES - Healthcare & Wellness
    "/industries/healthcare/healthtech-applications":
      HealthTechApplications,
    "/industries/healthcare/medical-compliance-solutions":
      MedicalComplianceSolutions,
    "/industries/healthcare/fitness-wellness-platforms":
      FitnessWellnessPlatforms,

    // INDUSTRIES - Learning & Education
    "/industries/education/edtech-platforms": EdTechPlatforms,
    "/industries/education/virtual-classrooms-lms":
      VirtualClassroomsLMS,
    "/industries/education/microlearning-apps":
      MicrolearningApps,

    // INDUSTRIES - Commerce & Consumer
    "/industries/commerce/ecommerce-marketplaces":
      EcommerceMarketplaces,
    "/industries/commerce/food-ordering-delivery":
      FoodOrderingDelivery,
    "/industries/commerce/travel-booking-systems":
      TravelBookingSystems,
    "/industries/commerce/event-ticketing-solutions":
      EventTicketingSolutions,

    // INDUSTRIES - Media & Community
    "/industries/media/ott-streaming-apps": OTTStreamingApps,
    "/industries/media/social-platforms-networks":
      SocialPlatformsNetworks,
    "/industries/media/sports-fan-engagement":
      SportsFanEngagement,

    // INDUSTRIES - Mobility & Logistics
    "/industries/mobility/transportation-apps":
      TransportationApps,
    "/industries/mobility/on-demand-services": OnDemandServices,
    "/industries/mobility/supply-chain-fleet-management":
      SupplyChainFleetManagement,

    // INDUSTRIES - Industrial & Emerging Tech
    "/industries/industrial/manufacturing-automation":
      ManufacturingAutomation,
    "/industries/industrial/agritech-platforms":
      AgriTechPlatforms,
    "/industries/industrial/oil-gas-monitoring-systems":
      OilGasMonitoringSystems,

    // COMPANY PAGES - About WDI now accessible only through Company dropdown
    "/company/about-wdi": AboutWDI,
    "/company/our-history": OurHistory,
    "/company/leadership-team": LeadershipTeam,
    "/company/awards-certifications": AwardsCertifications,
    "/company/careers": Careers,
    "/company/culture-values": CultureValues,
    "/company/press-media": PressMedia,

    // CAREERS PAGES - Direct access routes
    "/careers": Careers,
    "/careers/open-positions": Careers,
    "/careers/send-cv": Careers,

    // HIRE TALENT PAGES
    "/hire-talent": HireTalent,
    "/hire-talent/mobile-app-developers":
      HireMobileAppDevelopers,
    "/hire-talent/full-stack-developers":
      HireFullStackDevelopers,
    "/hire-talent/frontend-developers": HireFrontendDevelopers,
    "/hire-talent/backend-developers": HireBackendDevelopers,
    "/hire-talent/ui-ux-designers": HireUIUXDesigners,
    "/hire-talent/qa-engineers": HireQAEngineers,
    "/dedicated-development-teams": DedicatedDevelopmentTeams,
    "/engagement-models": EngagementModels,
    "/team-augmentation-services": TeamAugmentationServices,

    // RESOURCES PAGES
    "/resources/blog": Blog,
    "/case-studies": CaseStudies,
    "/resources/client-testimonials": ClientTestimonials,
    "/resources/whitepapers-insights": WhitepapersInsights,
    "/resources/faqs": FAQs,

    // CONTACT PAGES - Updated to use proper main contact route
    "/contact-us": Contact, // Contact Us Now page
    "/contact-us-now": Contact, // Alternative URL for Contact Us Now page
    "/contact/request-a-proposal": RequestProposal,
    "/contact/schedule-a-discovery-call": ScheduleDiscoveryCall,
    "/contact/office-locations": OfficeLocations,
    "/contact/client-support": ClientSupport,
    "/contact/send-your-cv": SendYourCV,
    "/start-a-project": StartAProject,
    "/thank-you": ThankYou,

    // LEGACY CONTACT ROUTE SUPPORT
    "/contact/contact-form": ContactMain, // Support for contact form specific route

    // PROJECT PAGES
    "/projects/regroup": RegroupProject,
    "/projects/seezun": SeezunProject,
    "/projects/woka": WokaProject,
    "/projects/tanami": TanamiProject,
    "/projects/traderscircuit": TradersCircuitProject,
    "/projects/goodtimes": GoodTimesProject,
    "/projects/prosperty": ProspertyProject,
    "/projects/ranoutof": RanOutOfProject,

    // ARTICLE PAGES
    "/articles/future-of-ai-healthcare": FutureOfAIHealthcare,
    "/articles/compliance-ready-systems-fintech":
      ComplianceReadyFintech,
    "/articles/legacy-system-scaling": LegacySystemScaling,
    "/articles/automation-reshaping-business":
      AutomationReshapingBusiness,

    // INSIGHT PAGES
    "/insights/ux-review-presentations": UXReviewPresentations,
    "/insights/migrating-to-linear-101": MigratingToLinear101,
    "/insights/building-your-api-stack": BuildingYourAPIStack,
  };

  // Check if current path matches any route
  const RouteComponent =
    routes[currentPath as keyof typeof routes];
  if (RouteComponent) {
    return (
      <div className="min-h-screen bg-background">
        <RouteComponent />
        <CookieConsent />
      </div>
    );
  }

  // Handle dynamic article routes
  if (currentPath.startsWith("/articles/")) {
    return (
      <div className="min-h-screen bg-background">
        <ArticleDetail />
        <CookieConsent />
      </div>
    );
  }

  // Handle dynamic insight routes
  if (currentPath.startsWith("/insights/")) {
    const slug = currentPath.replace("/insights/", "");
    let InsightComponent;

    switch (slug) {
      case "ux-review-presentations":
        InsightComponent = UXReviewPresentations;
        break;
      case "migrating-to-linear-101":
        InsightComponent = MigratingToLinear101;
        break;
      case "building-your-api-stack":
        InsightComponent = BuildingYourAPIStack;
        break;
      default:
        InsightComponent = null;
    }

    if (InsightComponent) {
      return (
        <div className="min-h-screen bg-background">
          <InsightComponent />
          <CookieConsent />
        </div>
      );
    }
  }

  // Default to homepage for root path and unmatched paths
  return (
    <div className="min-h-screen bg-background">
      <Homepage />
      <CookieConsent />
    </div>
  );
}