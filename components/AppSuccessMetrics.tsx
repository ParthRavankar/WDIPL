import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import successMetricsImage from 'figma:asset/619c58bb9b76889672d43420adc0dd6ef9ef21f6.png';

const AppSuccessMetrics = () => {
  const metrics = [
    {
      value: "75+",
      label: "App Developed",
      description: "Successful mobile applications delivered"
    },
    {
      value: "25+", 
      label: "App Deployed",
      description: "Live applications in production"
    },
    {
      value: "3M+",
      label: "App downloads",
      description: "Total downloads across all platforms"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Proven Success in{" "}
              <span className="text-accent">Mobile Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our portfolio speaks for itself — from concept to launch, we deliver exceptional mobile experiences that users love and businesses rely on.
            </p>
          </motion.div>

          {/* Main Visual Section */}
          <div className="relative">
            
            {/* iPhone Mockups Display */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <div className="relative max-w-4xl w-full">
                <ImageWithFallback
                  src={successMetricsImage}
                  alt="Three iPhone mockups showcasing different mobile applications with success metrics"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Performance Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  {/* Large Metric Number */}
                  <div className="mb-4">
                    <span className="text-6xl lg:text-7xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {metric.value}
                    </span>
                  </div>
                  
                  {/* Metric Label */}
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-300 mb-2">
                    {metric.label}
                  </h3>
                  
                  {/* Metric Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Supporting Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Every project we deliver combines cutting-edge technology with user-centered design, 
              resulting in mobile applications that not only meet but exceed expectations across 
              industries and platforms.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient orbs for depth */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export { AppSuccessMetrics };