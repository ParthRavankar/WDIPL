import { motion } from "framer-motion";
import { Phone, Clock, Zap, Calendar, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { GridPattern } from "./GridPattern";
import { navigateTo } from "../App";

export const SplitCallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <GridPattern strokeDasharray="4 2" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-foreground mb-6 whitespace-nowrap">
                Ready to Build with WDI?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Schedule a no-commitment discovery call with our consulting team. Let's discuss your vision and create a roadmap to success.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-foreground font-medium">Free Consultation</div>
                  <div className="text-muted-foreground text-sm">No sales pitch, just honest advice</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-foreground font-medium">Flexible Scheduling</div>
                  <div className="text-muted-foreground text-sm">Available across all time zones</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-foreground font-medium">Quick Response</div>
                  <div className="text-muted-foreground text-sm">We'll get back to you within 2 hours</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Book a Discovery Call
                </h3>
                <p className="text-muted-foreground mb-8">
                  Let's discuss your project and explore how we can help you succeed.
                </p>
              </div>
              
              <div className="space-y-8">
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 text-lg border-0 rounded-lg"
                  onClick={() => navigateTo('/contact')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Free Call
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-semibold text-foreground">200+</div>
                    <div className="text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">25+</div>
                    <div className="text-muted-foreground">Years</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">15+</div>
                    <div className="text-muted-foreground">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};