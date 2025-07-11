import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import insightImage from 'figma:asset/d58522b34e65dfb3a3e4cdc2bccdd805708c9198.png';
import { navigateTo } from "../App";

const resources = [
  {
    title: "UX review presentations",
    excerpt: "How do you create compelling presentations that wow clients, and actually close projects and deals? Here are the key insights that will elevate your game.",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=400&fit=crop&auto=format",
    author: {
      name: "Olivia Rhye",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    category: "Design",
    slug: "ux-review-presentations"
  },
  {
    title: "Migrating to Linear 101",
    excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started and make the most of it.",
    readTime: "6 min read", 
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&auto=format",
    author: {
      name: "Phoenix Baker",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    category: "Software Engineering",
    slug: "migrating-to-linear-101"
  },
  {
    title: "Building your API Stack",
    excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them. Here are the best practices for API development.",
    readTime: "12 min read",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop&auto=format",
    author: {
      name: "Lana Steiner",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    category: "Software Engineering",
    slug: "building-your-api-stack"
  }
];

const ResourceCard = ({ resource, index }: { resource: typeof resources[0]; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group bg-card rounded-lg border border-border overflow-hidden hover:border-border/80 transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={() => navigateTo(`/insights/${resource.slug}`)}
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden relative">
        <ImageWithFallback
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Capsule Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full border border-border/50">
            {resource.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Date and Read Time */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {resource.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {resource.readTime}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-foreground font-medium leading-tight group-hover:text-accent transition-colors">
          {resource.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {resource.excerpt}
        </p>
        
        {/* Author */}
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <ImageWithFallback
            src={resource.author.avatar}
            alt={resource.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="font-medium text-foreground text-sm">
              {resource.author.name}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-accent hover:text-accent-foreground hover:bg-accent/10 p-2 h-auto group-hover:translate-x-1 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              navigateTo(`/insights/${resource.slug}`);
            }}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export const ResourceCards = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Insights for Founders & Product Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from our experience building 200+ digital products. Practical insights, real case studies, and actionable strategies.
          </p>
        </motion.div>
        
        {/* Resource Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <ResourceCard key={resource.title} resource={resource} index={index} />
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 rounded-lg px-6 py-3" onClick={() => navigateTo('/resources')}>
            View All Resources <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};