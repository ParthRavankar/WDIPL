import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { navigateTo } from "../App";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  Eye, 
  ShoppingCart,
  Heart,
  Star,
  Clock,
  Target,
  Smartphone,
  BarChart3,
  Settings,
  Network,
  Search,
  Calendar,
  PlayCircle,
  PartyPopper,
  PieChart
} from "lucide-react";

const FeaturedCaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "SimplyTend",
      client: "Simply Tend",
      description: "SimpliTend is a mobile-first care management platform that connects patients and caregivers through real-time alerts, scheduling, and safety tools—delivered via dual apps and an admin dashboard.",
      keyAchievement: {
        number: "95%",
        metric: "Care Coordination Efficiency",
        icon: Heart
      },
      visual: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format",
      tags: ["Mobile App", "Care Management", "Real-Time Alerts", "Scheduling"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
      featured: true
    },
    {
      id: 2,
      title: "Seezun",
      client: "Seezun",
      description: "Seezun is a trend-driven P2P fashion marketplace enabling users to rent, buy, sell, or lend South Asian ethnicwear via mobile and web platforms.",
      keyAchievement: {
        number: "85%",
        metric: "Brand Recognition",
        icon: TrendingUp
      },
      visual: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format",
      tags: ["Marketplace", "P2P", "Fashion", "Mobile & Web"],
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      featured: false
    },
    {
      id: 3,
      title: "WOKA",
      client: "WOKA Creations Pvt. Ltd",
      description: "WDI transformed WOKA's hybrid app into a high-performance native Android and iOS platform featuring seamless streaming, deep analytics, and robust 120-hour monthly support.",
      keyAchievement: {
        number: "300%",
        metric: "User Retention",
        icon: Users
      },
      visual: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&auto=format",
      tags: ["Native App", "Streaming", "Analytics", "Support"],
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "green",
      featured: false
    }
  ];

  const moreSuccessStories = [
    {
      id: 4,
      title: "TradersCircuit",
      client: "TradersCircuit",
      description: "TradersCircuit empowers India's millennials and Gen Z with smarter investments through seamless investment experience and ultra-personalized financial planning.",
      keyAchievement: {
        number: "300%",
        metric: "User Growth",
        icon: TrendingUp
      },
      visual: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&auto=format",
      tags: ["FinTech", "Trading Platform", "Indian Market", "Mobile App"],
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "green",
      featured: false
    },
    {
      id: 5,
      title: "RanOutOf",
      client: "Global Ease Solutions",
      description: "WDI developed a smart grocery planning app with barcode scanning, voice commands, reminders, and a web-based admin CMS for Global Ease Solutions.",
      keyAchievement: {
        number: "75%",
        metric: "Shopping Efficiency",
        icon: ShoppingCart
      },
      visual: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop&auto=format",
      tags: ["Mobile App", "Barcode Scanning", "Voice AI", "Grocery Tech"],
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "green",
      featured: false
    },
    {
      id: 6,
      title: "Prosperty",
      client: "Prosperty Ltd",
      description: "Break the barrier of real estate investing. With Prosperty, you can invest in portions of properties, making portfolio diversification smarter and more accessible.",
      keyAchievement: {
        number: "300%",
        metric: "Portfolio Options",
        icon: PieChart
      },
      visual: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format",
      tags: ["Real Estate", "Investment", "FinTech", "Portfolio"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
      featured: false
    },
    {
      id: 7,
      title: "GoodTimes",
      client: "GoodTimes Ltd",
      description: "From casual hangouts to special celebrations, Good Times makes browsing and booking a breeze, so you never miss out.",
      keyAchievement: {
        number: "250%",
        metric: "Event Discovery",
        icon: PartyPopper
      },
      visual: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&auto=format",
      tags: ["Events", "Booking", "Lifestyle", "Mobile App"],
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-white text-base font-medium">Featured Work</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Featured Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped companies across industries achieve remarkable results with our innovative development solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid - Consistent Dimensions */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {caseStudies.map((study, index) => {
            const AchievementIcon = study.keyAchievement.icon;
            
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card 
                  className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-500 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden h-full group-hover:scale-[1.02] transform flex flex-col cursor-pointer"
                  onClick={() => {
                    if (study.title === 'Seezun') {
                      navigateTo('/projects/seezun');
                    } else if (study.title === 'WOKA') {
                      navigateTo('/projects/woka');
                    } else if (study.title === 'Tanami') {
                      navigateTo('/projects/tanami');
                    } else {
                      navigateTo('/case-studies');
                    }
                  }}
                >
                  <CardContent className="p-0 flex flex-col h-full min-h-[600px]">
                    {/* Visual Section - Fixed Height */}
                    <div className="relative overflow-hidden">
                      <div className="relative h-64 w-full">
                        <ImageWithFallback
                          src={study.visual}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay with gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                        
                        {/* Featured Badge */}
                        {study.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-accent text-white shadow-lg">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}

                        {/* Key Achievement - Overlaid on Visual */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-black/80 backdrop-blur-md rounded-xl p-4 border border-white/10"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                                study.accentColor === 'blue' ? 'from-blue-500 to-cyan-500' :
                                study.accentColor === 'green' ? 'from-green-500 to-emerald-500' :
                                study.accentColor === 'purple' ? 'from-purple-500 to-pink-500' :
                                study.accentColor === 'cyan' ? 'from-cyan-500 to-blue-500' :
                                study.accentColor === 'orange' ? 'from-orange-500 to-red-500' :
                                'from-emerald-500 to-teal-500'
                              } flex items-center justify-center flex-shrink-0`}>
                                <AchievementIcon className="w-5 h-5 text-white" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-2xl font-bold text-white">{study.keyAchievement.number}</div>
                                <div className="text-sm text-gray-300 leading-tight">{study.keyAchievement.metric}</div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Flexible Height with Consistent Spacing */}
                    <div className="p-6 flex-1 flex flex-col justify-between min-h-[336px]">
                      <div className="flex-1">
                        {/* Project Title - Consistent Height */}
                        <div className="mb-4 min-h-[60px] flex items-start">
                          <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                            {study.title}
                          </h3>
                        </div>

                        {/* Client & Description - Consistent Height */}
                        <div className="mb-6 min-h-[100px]">
                          <div className="text-accent font-medium text-sm mb-2">{study.client}</div>
                          <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                            {study.description}
                          </p>
                        </div>

                        {/* Tags - Consistent Height */}
                        <div className="mb-6 min-h-[32px]">
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="secondary" 
                                className="text-xs bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50 transition-colors"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Button - Fixed at Bottom */}
                      <div className="mt-auto">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group h-12"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (study.title === 'Seezun') {
                                navigateTo('/projects/seezun');
                              } else if (study.title === 'WOKA') {
                                navigateTo('/projects/woka');
                              } else if (study.title === 'Tanami') {
                                navigateTo('/projects/tanami');
                              } else {
                                navigateTo('/case-studies');
                              }
                            }}
                          >
                            <span>View Full Case Study</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* More Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 mb-16"
        >
          <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-12 text-center">
            More Success Stories
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {moreSuccessStories.map((story, index) => {
              const AchievementIcon = story.keyAchievement.icon;
              
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <Card 
                    className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-500 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden h-full group-hover:scale-[1.02] transform flex flex-col cursor-pointer"
                    onClick={() => {
                      if (story.title === 'TradersCircuit') {
                        navigateTo('/projects/traderscircuit');
                      } else if (story.title === 'GoodTimes') {
                        navigateTo('/projects/goodtimes');
                      } else if (story.title === 'Prosperty') {
                        navigateTo('/projects/prosperty');
                      } else if (story.title === 'RanOutOf') {
                        navigateTo('/projects/ranoutof');
                      } else {
                        navigateTo('/case-studies');
                      }
                    }}
                  >
                    <CardContent className="p-0 flex flex-col h-full min-h-[600px]">
                      {/* Visual Section - Fixed Height */}
                      <div className="relative overflow-hidden">
                        <div className="relative h-64 w-full">
                          <ImageWithFallback
                            src={story.visual}
                            alt={`${story.title} - ${story.client}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Overlay with gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-t ${story.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                          
                          {/* Key Achievement - Overlaid on Visual */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="bg-black/80 backdrop-blur-md rounded-xl p-4 border border-white/10"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                                  story.accentColor === 'blue' ? 'from-blue-500 to-cyan-500' :
                                  story.accentColor === 'green' ? 'from-green-500 to-emerald-500' :
                                  story.accentColor === 'purple' ? 'from-purple-500 to-pink-500' :
                                  story.accentColor === 'cyan' ? 'from-cyan-500 to-blue-500' :
                                  story.accentColor === 'orange' ? 'from-orange-500 to-red-500' :
                                  'from-emerald-500 to-teal-500'
                                } flex items-center justify-center flex-shrink-0`}>
                                  <AchievementIcon className="w-5 h-5 text-white" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-2xl font-bold text-white">{story.keyAchievement.number}</div>
                                  <div className="text-sm text-gray-300 leading-tight">{story.keyAchievement.metric}</div>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section - Flexible Height with Consistent Spacing */}
                      <div className="p-6 flex-1 flex flex-col justify-between min-h-[336px]">
                        <div className="flex-1">
                          {/* Project Title - Consistent Height */}
                          <div className="mb-4 min-h-[60px] flex items-start">
                            <h4 className="text-xl font-semibold text-white leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                              {story.title}
                            </h4>
                          </div>

                          {/* Client & Description - Consistent Height */}
                          <div className="mb-6 min-h-[100px]">
                            <div className="text-accent font-medium text-sm mb-2">{story.client}</div>
                            <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                              {story.description}
                            </p>
                          </div>

                          {/* Tags - Consistent Height */}
                          <div className="mb-6 min-h-[32px]">
                            <div className="flex flex-wrap gap-2">
                              {story.tags.map((tag) => (
                                <Badge 
                                  key={tag} 
                                  variant="secondary" 
                                  className="text-xs bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50 transition-colors"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA Button - Fixed at Bottom */}
                        <div className="mt-auto">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group h-12"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (story.title === 'TradersCircuit') {
                                  navigateTo('/projects/traderscircuit');
                                } else if (story.title === 'GoodTimes') {
                                  navigateTo('/projects/goodtimes');
                                } else if (story.title === 'Prosperty') {
                                  navigateTo('/projects/prosperty');
                                } else if (story.title === 'RanOutOf') {
                                  navigateTo('/projects/ranoutof');
                                } else {
                                  navigateTo('/case-studies');
                                }
                              }}
                            >
                              <span>View Full Case Study</span>
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-accent/50 transition-all duration-300"
          >
            <Eye className="w-5 h-5 mr-2" />
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;