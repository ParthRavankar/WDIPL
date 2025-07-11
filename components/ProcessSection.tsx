import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, FileText, Users, CheckCircle, Rocket, Search, Code, Palette, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const steps = [
  {
    id: "step-1",
    title: "1. Define Scope",
    description: "We begin by gathering all project inputs, defining clear goals, creating technical documentation, and aligning on expectations.",
    visual: {
      type: "icon_or_doc_mockup",
      style: "minimal_ui"
    }
  },
  {
    id: "step-2",
    title: "2. Design UI/UX",
    description: "Our designers craft user-centric interfaces in Figma with clickable flows, visual systems, and detailed wireframes for all screens.",
    tags: [
      { label: "Wireframes", color: "#6366F1" },
      { label: "Prototyping", color: "#10B981" },
      { label: "UI System", color: "#F59E0B" }
    ]
  },
  {
    id: "step-3",
    title: "3. Develop with Agile Sprints",
    description: "We use Agile sprints to turn designs into production-ready code, with continuous integration and weekly builds.",
    tags: [
      { label: "Frontend", color: "#3B82F6" },
      { label: "Backend", color: "#0EA5E9" },
      { label: "APIs", color: "#8B5CF6" }
    ]
  },
  {
    id: "step-4",
    title: "4. Test, Launch & Scale",
    description: "After QA and UAT, we help launch confidently. Then we monitor, iterate, and scale your product to grow with your users.",
    chat_simulation: [
      { from: "You", text: "Are we ready to go live?" },
      { from: "Team", text: "Yes! Final tests passed 🚀" }
    ]
  }
];

// Chat simulation component - Compact version
const ChatSimulation = ({ messages }: { messages: Array<{ from: string; text: string }> }) => {
  return (
    <div className="space-y-2 p-3 bg-background rounded-lg border border-border">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: message.from === "You" ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          viewport={{ once: true }}
          className={`flex ${message.from === "You" ? "justify-start" : "justify-end"}`}
        >
          <div
            className={`max-w-[80%] px-3 py-1.5 rounded-lg ${
              message.from === "You"
                ? "bg-muted border border-border text-foreground"
                : "bg-accent text-accent-foreground"
            }`}
          >
            <div className="text-xs font-medium mb-1 opacity-70">{message.from}</div>
            <div className="text-xs">{message.text}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Document mockup component - Compact version  
const DocumentMockup = () => {
  return (
    <div className="relative">
      <div className="w-full bg-background rounded-lg border border-border p-4">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-foreground">Project Scope</span>
            </div>
            <div className="text-xs text-muted-foreground">Draft v1.2</div>
          </div>
          
          {/* Document sections */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-1.5"
            >
              <div className="h-1.5 bg-muted rounded w-3/4"></div>
              <div className="h-1.5 bg-muted/60 rounded w-full"></div>
              <div className="h-1.5 bg-muted/60 rounded w-5/6"></div>
            </motion.div>
            
            <div className="flex gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs"
              >
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span className="text-muted-foreground">Requirements</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs"
              >
                <Search className="w-3 h-3 text-blue-400" />
                <span className="text-muted-foreground">Research</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Process step card component
const ProcessCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const cardRef = useRef(null);
  
  const renderContent = () => {
    if (step.visual?.type === "icon_or_doc_mockup") {
      return <DocumentMockup />;
    }
    
    if (step.chat_simulation) {
      return <ChatSimulation messages={step.chat_simulation} />;
    }
    
    if (step.tags) {
      return (
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag, tagIndex) => (
            <motion.div
              key={tagIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: tagIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Badge
                className="text-white border-0 px-3 py-1 text-xs font-medium rounded-lg"
                style={{ backgroundColor: tag.color }}
              >
                {tag.label}
              </Badge>
            </motion.div>
          ))}
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-card rounded-lg border border-border hover:border-border/80 transition-all duration-300 overflow-hidden group hover:shadow-lg"
    >
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-3">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            viewport={{ once: true }}
            className="text-foreground leading-tight text-lg"
          >
            {step.title}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed text-base"
          >
            {step.description}
          </motion.p>
        </div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
          viewport={{ once: true }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ProcessSection = () => {
  const titleRef = useRef(null);
  
  return (
    <section className="relative overflow-hidden py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-semibold text-foreground mb-4"
          >
            How We Turn an Idea into a{" "}
            <span className="text-accent">Scalable Product</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            Our proven process transforms your vision into reality through strategic planning, 
            thoughtful design, and expert engineering—every step of the way.
          </motion.p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 rounded-lg px-8 py-4 group text-lg"
          >
            <span className="flex items-center gap-2">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};