import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { CheckCircle, ArrowRight, FileText, Eye } from "lucide-react";
import { navigateTo } from "../App";

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

export const ThankYou = () => {
  // Scroll to top on component mount
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      scrollToTop();
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Thank You Section */}
      <section className="relative pt-24 pb-20 bg-background overflow-hidden min-h-screen flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full border border-accent/20 mb-6">
                <CheckCircle className="w-12 h-12 text-accent" />
              </div>
            </motion.div>

            {/* Main Content Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card/30 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-12 shadow-2xl"
            >
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight"
                style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}
              >
                ✅ Thank You! We've Received Your Message.
              </motion.h1>
              
              {/* Subtext */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4 mb-10"
              >
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Our team will review your request and get back to you shortly.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground/80 leading-relaxed">
                  In the meantime, feel free to explore our work or check out our latest insights.
                </p>
              </motion.div>

              {/* Call-to-Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-[10px] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                  onClick={() => navigateTo('/')}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-foreground hover:bg-white/10 px-8 py-4 rounded-[10px] font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  onClick={() => navigateTo('/case-studies')}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Our Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Additional Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card/20 backdrop-blur-sm rounded-xl border border-white/5 p-6 cursor-pointer transition-all duration-300 hover:border-accent/20"
                onClick={() => navigateTo('/case-studies')}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Case Studies</h3>
                <p className="text-sm text-muted-foreground">Explore our successful projects and client stories</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card/20 backdrop-blur-sm rounded-xl border border-white/5 p-6 cursor-pointer transition-all duration-300 hover:border-accent/20"
                onClick={() => navigateTo('/resources/blog')}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Latest Insights</h3>
                <p className="text-sm text-muted-foreground">Read our latest articles and industry insights</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card/20 backdrop-blur-sm rounded-xl border border-white/5 p-6 cursor-pointer transition-all duration-300 hover:border-accent/20"
                onClick={() => navigateTo('/services')}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Services</h3>
                <p className="text-sm text-muted-foreground">Discover our comprehensive range of services</p>
              </motion.div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 text-center"
            >
              <p className="text-sm text-muted-foreground/70">
                Expected response time: 24-48 hours • Need immediate assistance? Contact us at{" "}
                <a 
                  href="mailto:hello@wdipl.com" 
                  className="text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  hello@wdipl.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};