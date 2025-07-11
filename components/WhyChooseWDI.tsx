import { motion } from "framer-motion";
import { Wrench, Shield, Zap } from "lucide-react";
import { GridPattern } from "./GridPattern";

const features = [
  {
    icon: Wrench,
    title: "24+ Years of Product Engineering",
    description: "Deep expertise in building scalable, production-ready solutions"
  },
  {
    icon: Shield,
    title: "100% Project Ownership & IP Transfer",
    description: "Complete intellectual property rights and full project ownership"
  },
  {
    icon: Zap,
    title: "Agile, Transparent, and Outcome-Driven",
    description: "Fast delivery with clear communication and measurable results"
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="text-center group"
    >
      <div className="mb-6">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-[#E5195E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 text-[#E5195E]" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
        <p className="text-[#CCCCCC] leading-relaxed max-w-sm mx-auto">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export const WhyChooseWDI = () => {
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
            Why Leading Startups Choose WDI
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};