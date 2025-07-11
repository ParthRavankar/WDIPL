import { Button } from "./ui/button";
import { GridPattern } from "./GridPattern";
import { SplineFallback } from "./SplineFallback";
import { Calendar, Briefcase } from "lucide-react";
import { navigateTo } from "../App";

export function HeroSection() {
  return (
    <section id="hero" className="relative lg:min-h-[85vh] flex items-center pt-20">
      <GridPattern />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 w-full py-24 relative z-10">
          <div className="w-full lg:w-1/2">
            {/* Animated Badge */}
            <div className="group relative inline-flex items-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-6">
              <span
                className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                style={{
                  WebkitMask: "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "subtract",
                }}
              />
              <span className="relative z-10 flex items-center text-sm font-medium">
                🎉
                <span aria-hidden="true" className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#ffaa40_0%,#9c40ff_50%,#ffaa40_100%)] bg-[length:200%_100%] animate-[gradientMove_6s_ease_infinite]">
                  25+ Years Of Industry Expertise
                </span>
                <svg
                  className="ml-1 w-4 h-4 stroke-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl">
              Architecting Digital Success for Startups & Enterprises
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-400">
              We design and build secure, AI-powered apps and software tailored for scale, speed, and user engagement.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="whitespace-nowrap" onClick={() => navigateTo('/contact')}>
                <Calendar className="w-4 h-4" />
                Book a Free Consultation
              </Button>
              
              <Button variant="secondary" size="lg" className="whitespace-nowrap" onClick={() => navigateTo('/services')}>
                <Briefcase className="w-4 h-4" />
                Explore Services
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[320px] md:h-[480px] lg:h-[560px] shrink-0 relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#E5195E]/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
            </div>

            {/* Interactive 3D-like Animation */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5195E]/5 to-purple-500/5 rounded-xl"></div>
              <div className="relative z-10 w-full h-full">
                <SplineFallback />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}