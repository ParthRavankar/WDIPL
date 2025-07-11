import { Button } from "./ui/button";
import { GridPattern } from "./GridPattern";
import { ChevronRight } from "lucide-react";
import { navigateTo } from "../App";

interface HeroBannerProps {
  category?: string;
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function HeroBanner({
  category,
  title,
  description,
  primaryCTA,
  secondaryCTA
}: HeroBannerProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-[#0E0E0E] overflow-hidden">
      <GridPattern />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category Badge */}
          {category && (
            <div className="inline-flex items-center rounded-full px-4 py-2 mb-8 bg-[#E5195E]/10 border border-[#E5195E]/20">
              <span className="text-[#E5195E] text-sm font-medium">
                {category}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#E5195E] to-[#C41653] hover:from-[#C41653] hover:to-[#A31348] text-white font-semibold px-8 py-4 h-auto text-base"
              onClick={() => navigateTo(primaryCTA.href)}
            >
              {primaryCTA.text}
            </Button>
            
            {secondaryCTA && (
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/30 font-medium px-8 py-4 h-auto text-base"
                onClick={() => navigateTo(secondaryCTA.href)}
              >
                {secondaryCTA.text}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#E5195E]/10 to-purple-500/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-pulse delay-2000 opacity-60"></div>
      </div>
    </section>
  );
}