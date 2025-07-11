import { motion } from "framer-motion";
import { 
  CreditCard, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Truck, 
  Video,
  Building,
  Plane,
  Factory,
  Wheat,
  Gamepad2,
  Cloud
} from "lucide-react";
import { GridPattern } from "./GridPattern";

const industries = [
  // First row
  { name: "FinTech", icon: CreditCard },
  { name: "HealthTech", icon: Heart },
  { name: "eCommerce", icon: ShoppingCart },
  { name: "EdTech", icon: GraduationCap },
  // Second row
  { name: "Logistics", icon: Truck },
  { name: "Media & OTT", icon: Video },
  { name: "Real Estate", icon: Building },
  { name: "Travel", icon: Plane },
  // Third row (we'll make it 3x4 instead to fit all 12)
  { name: "Manufacturing", icon: Factory },
  { name: "AgriTech", icon: Wheat },
  { name: "Gaming", icon: Gamepad2 },
  { name: "SaaS", icon: Cloud }
];

const IndustryCard = ({ industry, index }: { 
  industry: { name: string; icon: any }; 
  index: number;
}) => {
  const Icon = industry.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E5195E]/50 transition-all duration-300 cursor-pointer text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#E5195E]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E5195E]/20 transition-all duration-300">
        <Icon className="w-8 h-8 text-[#E5195E]" />
      </div>
      <h3 className="text-white font-medium text-lg group-hover:text-[#E5195E] transition-colors duration-300">
        {industry.name}
      </h3>
    </motion.div>
  );
};

export const HorizontalTagScroller = () => {
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
            Tailored Solutions for Your Industry
          </h2>
          <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
            We serve diverse industries with specialized expertise and domain knowledge
          </p>
        </motion.div>
        
        {/* 4x3 Grid for larger screens, 2x6 for tablets, 1x12 for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.name} 
              industry={industry} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};