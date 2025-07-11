import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Heart, Activity, Users, Trophy, Target, Zap, Brain,
  AlertTriangle, CheckCircle, Search, Code, Network, Rocket,
  X, ArrowRight, Star, Calendar, MessageSquare, Eye,
  Settings, BarChart3, FileText, Palette, Clock,
  ChevronRight, UserCheck, Award, Smartphone, Monitor,
  Play, Camera, Share, Gift, MapPin, Volume2, Headphones
} from "lucide-react";

// Fitness & Wellness Hero Section
const FitnessWellnessHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Industries • Healthcare</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Fitness & Wellness Platforms
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Inspire healthier living and build thriving communities with engaging, personalized, and data-driven fitness and wellness digital platforms.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4">
                <div className="inline-flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 flex-shrink-0" />
                  <span>Get a Free Consultation</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <Eye className="w-5 h-5 flex-shrink-0" />
                  <span>View Wellness Case Studies</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-3xl p-6 mx-auto max-w-2xl shadow-2xl border border-gray-700"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex items-center justify-between mb-6"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white">Fitness Dashboard</h3>
                      <p className="text-gray-400 text-sm">Personal wellness tracking</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-purple-100 text-sm mb-1">Today's Goal Progress</div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.4 }}
                          className="text-white text-3xl font-bold"
                        >
                          8,432 steps
                        </motion.div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-purple-100 text-sm">
                      <span className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        Goal: 10,000
                      </span>
                      <span>84% Complete</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="grid grid-cols-2 gap-4 mb-6"
                  >
                    {[
                      { name: "Calories Burned", value: "420", unit: "kcal", icon: Zap, color: "orange" },
                      { name: "Workout Time", value: "45", unit: "min", icon: Clock, color: "blue" },
                      { name: "Heart Rate", value: "72", unit: "bpm", icon: Heart, color: "red" },
                      { name: "Sleep Score", value: "8.5", unit: "/10", icon: Activity, color: "green" }
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                        className="bg-gray-800/50 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <metric.icon className={`w-4 h-4 ${
                            metric.color === 'orange' ? 'text-orange-400' :
                            metric.color === 'blue' ? 'text-blue-400' :
                            metric.color === 'red' ? 'text-red-400' :
                            'text-green-400'
                          }`} />
                          <span className="text-white font-medium text-sm">{metric.name}</span>
                        </div>
                        <div className="text-gray-300 text-lg font-semibold">{metric.value}</div>
                        <div className="text-gray-400 text-xs">{metric.unit}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-white">
                      <span className="font-medium">Recent Activities</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    {[
                      { activity: "Morning Yoga", detail: "30 min session completed", time: "2h ago", icon: Heart, color: "purple" },
                      { activity: "Evening Run", detail: "5K distance covered", time: "1 day ago", icon: Activity, color: "green" },
                      { activity: "Strength Training", detail: "Upper body workout", time: "2 days ago", icon: Trophy, color: "blue" }
                    ].map((activity, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.8 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.color === 'purple' ? 'bg-purple-500/20' :
                          activity.color === 'green' ? 'bg-green-500/20' :
                          'bg-blue-500/20'
                        }`}>
                          <activity.icon className={`w-4 h-4 ${
                            activity.color === 'purple' ? 'text-purple-400' :
                            activity.color === 'green' ? 'text-green-400' :
                            'text-blue-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">{activity.activity}</div>
                          <div className="text-gray-400 text-xs">{activity.detail}</div>
                        </div>
                        <div className="text-gray-400 text-xs">{activity.time}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Heart className="w-3 h-3 mr-1" />
                  Personalized
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Users className="w-3 h-3 mr-1" />
                  Community
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Trophy className="w-3 h-3 mr-1" />
                  Gamified
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main Fitness & Wellness Page
export const FitnessWellnessPlatforms = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      <section className="bg-black">
        <FitnessWellnessHero />
      </section>
      
      {/* Additional sections would go here following the same pattern as other industry pages */}
      
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};