import { motion } from "framer-motion";
import { FileText, Palette, Code, Rocket } from "lucide-react";
import { GridPattern } from "./GridPattern";

const steps = [
  {
    title: "Define Scope",
    description: "We analyze your requirements and create a detailed project roadmap with clear timelines.",
    icon: FileText,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Design UI/UX",
    description: "Our designers create intuitive, user-centered interfaces that align with your brand.",
    icon: Palette,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Develop with Agile Sprints",
    description: "We build your product using agile methodology with regular updates and feedback loops.",
    icon: Code,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Test, Launch & Scale",
    description: "Comprehensive testing, smooth deployment, and ongoing support for continuous growth.",
    icon: Rocket,
    color: "from-[#E5195E] to-orange-500"
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Connection Line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
      )}
      
      <div className="relative z-10 text-center">
        <div className="mb-6">
          <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className="w-8 h-8 mx-auto rounded-full bg-[#E5195E] flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
        <p className="text-[#CCCCCC] leading-relaxed max-w-sm mx-auto">{step.description}</p>
      </div>
    </motion.div>
  );
};

export const StepsIllustrated = () => {
  return (
    <section className="relative py-20 bg-[#121212] overflow-hidden">
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
            How We Turn Your Idea Into a Scalable Product
          </h2>
          <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
            Our proven 4-step process ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};