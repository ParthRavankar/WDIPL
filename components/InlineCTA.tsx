import { motion } from "framer-motion";
import { Lightbulb, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { GridPattern } from "./GridPattern";
import { navigateTo } from "../App";

export const InlineCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <GridPattern strokeDasharray="4 2" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <motion.div 
              className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Main icon with subtle animation */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Lightbulb className="w-10 h-10 text-accent relative z-10" />
              </motion.div>
              
              {/* Sparkle effects */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [0, 1.2, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              
              <motion.div
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
              />
              
              <motion.div
                className="absolute top-2 -left-2 w-1 h-1 bg-accent rounded-full"
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-3xl lg:text-5xl font-semibold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Have an Idea? Let's Talk.
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Get clarity, timelines, and answers within 24 hours.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg border-0 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigateTo('/contact')}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mr-2"
                >
                  <Lightbulb className="w-5 h-5" />
                </motion.div>
                Request a Proposal
              </Button>
            </motion.div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">24-hour response guarantee</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-foreground">15min</div>
              <div className="text-sm text-muted-foreground">Quick Discovery Call</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-foreground">24hrs</div>
              <div className="text-sm text-muted-foreground">Detailed Proposal</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-foreground">48hrs</div>
              <div className="text-sm text-muted-foreground">Project Kickoff</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};