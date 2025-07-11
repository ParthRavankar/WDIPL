import { motion } from "framer-motion";
import { Smartphone, Globe, Palette, Brain, RefreshCw, Users } from "lucide-react";
import { GridPattern } from "./GridPattern";
import { navigateTo } from "../App";

const services = [
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile solutions",
    href: "/services/mobile-app-development"
  },
  {
    title: "Web & SaaS Engineering",
    icon: Globe,
    description: "Scalable web applications and SaaS platforms"
  },
  {
    title: "UI/UX & Prototyping",
    icon: Palette,
    description: "User-centered design and interactive prototypes"
  },
  {
    title: "AI & Data Intelligence",
    icon: Brain,
    description: "Machine learning and data-driven solutions"
  },
  {
    title: "Product Modernization",
    icon: RefreshCw,
    description: "Legacy system upgrades and optimization"
  },
  {
    title: "Dedicated Development Teams",
    icon: Users,
    description: "Extended teams and staff augmentation"
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  
  const handleClick = () => {
    if (service.href) {
      navigateTo(service.href);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -8
      }}
      className={`group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E5195E] transition-all duration-500 overflow-hidden ${
        service.href ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={handleClick}
    >
      <div className="relative z-10">
        <div className="mb-6">
          {/* Icon container with glassmorphism effect */}
          <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5195E]/20 to-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/10">
            {/* Icon glow effect */}
            <div className="absolute inset-0 rounded-xl bg-[#E5195E]/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            <Icon className="relative w-8 h-8 text-[#E5195E] transition-colors duration-300" />
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-[#CCCCCC] text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {service.description}
          </p>
        </div>
        
        {/* Arrow indicator - only show for clickable services */}
        {service.href && (
          <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <div className="w-8 h-8 rounded-full bg-[#E5195E]/20 backdrop-blur-sm flex items-center justify-center border border-[#E5195E]/30">
              <svg 
                className="w-4 h-4 text-[#E5195E]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        )}
      </div>
      
      {/* Hover overlay for clickable services */}
      {service.href && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#E5195E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </motion.div>
  );
};

export const ServicesGrid = () => {
  return (
    <section className="relative py-20 bg-[#0E0E0E] overflow-hidden">
      <GridPattern strokeDasharray="4 2" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
            What We Do
          </h2>
          <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
            We deliver comprehensive digital solutions that transform ideas into powerful, scalable applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};