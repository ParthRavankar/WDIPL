import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FileText, Figma, Code, Rocket, ArrowRight, Smartphone, Monitor, Palette, Database, Cloud, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { GridPattern } from "./GridPattern";

const steps = [
  {
    id: "discovery",
    title: "Define the Scope",
    subtext: "We begin by understanding your vision, identifying key problems, and drafting a well-defined scope with clear goals and deliverables.",
    icon: FileText,
    visual: "workspace_parallax",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "design", 
    title: "Designing the Experience",
    subtext: "Our designers craft intuitive and stunning user interfaces in Figma, turning requirements into clickable, user-first prototypes.",
    icon: Figma,
    visual: "figma_canvas_animation",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "development",
    title: "Engineering the Solution", 
    subtext: "We bring designs to life with clean, scalable code—choosing the right tech stack to ensure performance and longevity.",
    icon: Code,
    visual: "code_editor_animation",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: "launch",
    title: "Launch & Beyond",
    subtext: "We ship your product with confidence—ensuring QA, deployment, and post-launch support to keep it growing.",
    icon: Rocket,
    visual: "launch_animation", 
    color: "from-orange-500/20 to-red-500/20"
  }
];

const WorkspaceVisual = ({ inView }: { inView: boolean }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        {/* Floating Documents */}
        <motion.div
          animate={inView ? { x: [-10, 10, -10], y: [-5, 5, -5] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 left-4 w-12 h-16 bg-white/10 rounded shadow-lg flex items-center justify-center"
        >
          <FileText className="w-6 h-6 text-blue-400" />
        </motion.div>
        
        {/* Sticky Notes */}
        <motion.div
          animate={inView ? { rotate: [-2, 2, -2] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 right-8 w-16 h-16 bg-yellow-400/20 rounded-sm p-2"
        >
          <div className="w-full h-1 bg-yellow-400/40 rounded mb-1"></div>
          <div className="w-3/4 h-1 bg-yellow-400/30 rounded mb-1"></div>
          <div className="w-1/2 h-1 bg-yellow-400/20 rounded"></div>
        </motion.div>
        
        {/* Pointer Highlighting */}
        <motion.div
          animate={inView ? { x: [0, 100, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-8 left-8 w-2 h-2 bg-accent rounded-full"
        >
          <div className="absolute -top-1 -left-1 w-4 h-4 border-2 border-accent rounded-full animate-pulse"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const FigmaCanvasVisual = ({ inView }: { inView: boolean }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        {/* UI Frames */}
        <motion.div
          animate={inView ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 left-4 w-20 h-32 bg-white/10 rounded-lg border border-purple-400/30 p-2"
        >
          <div className="w-full h-4 bg-purple-400/20 rounded mb-2"></div>
          <div className="space-y-1">
            <div className="w-full h-2 bg-purple-400/15 rounded"></div>
            <div className="w-3/4 h-2 bg-purple-400/10 rounded"></div>
          </div>
          <Smartphone className="absolute bottom-2 right-2 w-4 h-4 text-purple-400/50" />
        </motion.div>
        
        <motion.div
          animate={inView ? { scale: [1, 1.03, 1] } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-4 right-4 w-24 h-16 bg-white/10 rounded-lg border border-pink-400/30 p-2"
        >
          <div className="w-full h-3 bg-pink-400/20 rounded mb-1"></div>
          <div className="w-2/3 h-2 bg-pink-400/15 rounded"></div>
          <Monitor className="absolute bottom-1 right-1 w-3 h-3 text-pink-400/50" />
        </motion.div>
        
        {/* Design Tools */}
        <motion.div
          animate={inView ? { rotate: [0, 360] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 left-8"
        >
          <Palette className="w-8 h-8 text-purple-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const CodeEditorVisual = ({ inView }: { inView: boolean }) => {
  const [typedText, setTypedText] = useState("");
  const codeSnippet = "const app = () => {\n  return <div>Hello World</div>\n}";
  
  useEffect(() => {
    if (inView) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < codeSnippet.length) {
          setTypedText(codeSnippet.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else {
      setTypedText("");
    }
  }, [inView]);
  
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900/50 rounded-lg p-4 h-full"
      >
        {/* Code Editor Interface */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        
        {/* Typed Code */}
        <pre className="text-green-400 text-sm font-mono">
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="bg-green-400 w-2 h-4 inline-block ml-1"
          />
        </pre>
        
        {/* Tech Stack Icons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <motion.div
            animate={inView ? { y: [-2, 2, -2] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Database className="w-6 h-6 text-green-400" />
          </motion.div>
          <motion.div
            animate={inView ? { y: [2, -2, 2] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Cloud className="w-6 h-6 text-emerald-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const LaunchVisual = ({ inView }: { inView: boolean }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-full"
      >
        {/* Rocket Animation */}
        <motion.div
          animate={inView ? { y: [-20, -40, -20], x: [0, 10, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Rocket className="w-12 h-12 text-orange-400" />
          <motion.div
            animate={inView ? { scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-400/30 rounded-full blur-sm"
          />
        </motion.div>
        
        {/* Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-4 right-4 w-24 h-16 bg-white/10 rounded p-2"
        >
          <div className="flex items-end justify-between h-full">
            <motion.div
              animate={inView ? { height: ["40%", "60%", "40%"] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 bg-orange-400/60 rounded-t"
            />
            <motion.div
              animate={inView ? { height: ["60%", "80%", "60%"] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="w-2 bg-red-400/60 rounded-t"
            />
            <motion.div
              animate={inView ? { height: ["30%", "70%", "30%"] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="w-2 bg-yellow-400/60 rounded-t"
            />
          </div>
        </motion.div>
        
        {/* Success Indicators */}
        <motion.div
          animate={inView ? { scale: [0, 1, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-8 left-8"
        >
          <CheckCircle className="w-8 h-8 text-green-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const ProcessStep = ({ step, index, inView }: { step: typeof steps[0]; index: number; inView: boolean }) => {
  const Icon = step.icon;
  
  const renderVisual = () => {
    switch (step.visual) {
      case "workspace_parallax":
        return <WorkspaceVisual inView={inView} />;
      case "figma_canvas_animation":
        return <FigmaCanvasVisual inView={inView} />;
      case "code_editor_animation":
        return <CodeEditorVisual inView={inView} />;
      case "launch_animation":
        return <LaunchVisual inView={inView} />;
      default:
        return null;
    }
  };
  
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Content */}
      <div className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center"
          >
            <Icon className="w-8 h-8 text-accent" />
          </motion.div>
          <div className="text-sm text-accent font-medium">
            Step {index + 1}
          </div>
        </div>
        
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl lg:text-4xl font-semibold text-foreground"
        >
          {step.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          {step.subtext}
        </motion.p>
      </div>
      
      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`${!isEven ? "lg:order-1" : ""}`}
      >
        {renderVisual()}
      </motion.div>
    </motion.div>
  );
};

export const ScrollParallaxProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const y1 = useTransform(springScrollProgress, [0, 1], [0, -100]);
  const y2 = useTransform(springScrollProgress, [0, 1], [0, -200]);
  const y3 = useTransform(springScrollProgress, [0, 1], [0, -50]);
  
  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      <GridPattern strokeDasharray="4 2" />
      
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
      />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            How We Turn an Idea into a{" "}
            <span className="text-accent">Scalable Product</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Our proven process transforms your vision into reality through strategic planning, 
            thoughtful design, and expert engineering—every step of the way.
          </p>
        </motion.div>
        
        <div className="space-y-32">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.id} 
              step={step} 
              index={index} 
              inView={true}
            />
          ))}
        </div>
        
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg group"
          >
            Let's Build Yours
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};