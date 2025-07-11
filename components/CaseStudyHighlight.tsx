import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { GridPattern } from "./GridPattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { navigateTo } from "../App";
import regroupImage from 'figma:asset/92c9546d073e10bfa567559041d8b7e5b0d84ce7.png';
import seezunImage from 'figma:asset/06e3cfb0c62c4da1116eaa2ecf65c8d2c54cf50a.png';
import wokaImage from 'figma:asset/e2af5f3a8dde3f2417315a3b42abfe23ddb0cb03.png';
import wokaAwardImage from 'figma:asset/91ae572d9f4dbf6bf5424e541b65db8087a129ff.png';
import tanamiImage from 'figma:asset/299b700a63c03206afc0281d0a16b76f903195f0.png';

const featuredCaseStudy = {
  title: "Woka",
  description: "Developed Woka as a vibrant platform where learning meets play. With a safe and fun environment to explore, learn, and grow effortlessly.",
  achievement: "+300% User Retention",
  industryTags: ["Education", "Learning Platform"],
  image: wokaAwardImage,
  metrics: [
    { label: "Active Users", value: "500K+" },
    { label: "User Retention", value: "+300%" },
    { label: "Learning Hours", value: "+180%" }
  ]
};

const caseStudies = [
  {
    title: "Seezun",
    description: "Created Seezun as a dynamic customer-driven platform connecting buyers, sellers, and renters for a seamless marketplace that renders fashion accessible, sustainable, and affordable.",
    achievement: "+85% Brand Recognition",
    industryTags: ["Branding", "Fashion"],
    image: seezunImage
  },
  {
    title: "Regroup",
    description: "Built Regroup as a social platform that brings together passion, global connections, teamwork, and love for sports through a vibrant online community.",
    achievement: "+150% User Engagement",
    industryTags: ["Social Media", "Digital Products"],
    image: regroupImage
  },
  {
    title: "Tanami",
    description: "Revolutionized Tanami Capital into a powerful, intuitive platform that streamlines portfolio management and empowers users to grow their wealth effortlessly.",
    achievement: "+200% Portfolio Growth",
    industryTags: ["FinTech", "Wealth Management"],
    image: tanamiImage
  }
];

const SmallCaseStudyCard = ({ study, index }: { study: typeof caseStudies[0]; index: number }) => {
  const getNavigationPath = (title: string) => {
    switch (title) {
      case 'Seezun':
        return '/projects/seezun';
      case 'Woka':
        return '/projects/woka';
      case 'Tanami':
        return '/projects/tanami';
      case 'Regroup':
        return '/projects/regroup';
      default:
        return '/case-studies';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card rounded-[10px] overflow-hidden hover:bg-card/80 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-transparent hover:border-border/50"
      onClick={() => navigateTo(getNavigationPath(study.title))}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/30 px-2 rounded-[10px]">
        <ImageWithFallback
          src={study.image}
          alt={
            study.title === "Seezun" ? "Seezun fashion marketplace app banner showcasing mobile shopping experience" :
            study.title === "Woka" ? "Woka learning platform banner showcasing educational mobile app features" :
            study.title === "Tanami" ? "Tanami Capital financial platform banner showcasing investment portfolio management" :
            study.title === "Regroup" ? "Regroup mobile app banner showcasing sports networking features" :
            study.title
          }
          className={`w-full h-full ${["Seezun", "Woka", "Tanami", "Regroup"].includes(study.title) ? "object-contain" : "object-cover"} object-center ${["Seezun", "Woka", "Tanami", "Regroup"].includes(study.title) ? "group-hover:scale-[1.02]" : "group-hover:scale-105"} transition-transform duration-500 rounded-[10px]`}
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-[10px]">
            {study.achievement}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {study.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {study.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {study.industryTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button 
          className="text-accent text-sm font-medium hover:text-foreground transition-colors duration-300 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
          onClick={(e) => {
            e.stopPropagation();
            navigateTo(getNavigationPath(study.title));
          }}
        >
          View Case Study <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export const CaseStudyHighlight = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <GridPattern strokeDasharray="4 2" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            See What We've Built
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real projects. Here's how we've helped companies scale their digital products.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-[10px] overflow-hidden mb-12 group cursor-pointer hover:bg-card/80 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 border border-transparent hover:border-accent/20"
          onClick={() => navigateTo('/projects/woka')}
        >
          <div className="grid lg:grid-cols-3 gap-0">
            <div className="lg:col-span-2 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-muted/30 px-2 rounded-[10px]">
              <ImageWithFallback
                src={featuredCaseStudy.image}
                alt="Woka educational platform mobile app interface with award recognition and interactive learning features for children"
                className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700 rounded-[10px]"
              />
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-[10px]">
                  {featuredCaseStudy.achievement}
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6 group-hover:text-accent transition-colors duration-300">
                {featuredCaseStudy.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {featuredCaseStudy.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {featuredCaseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">{metric.label}</span>
                    <span className="text-foreground font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredCaseStudy.industryTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                className="text-accent font-medium hover:text-foreground transition-colors duration-300 flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateTo('/projects/woka');
                }}
              >
                View Full Case Study <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <SmallCaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            onClick={() => navigateTo('/case-studies')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-[10px]"
          >
            View All Case Studies <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};