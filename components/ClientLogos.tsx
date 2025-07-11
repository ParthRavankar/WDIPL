import { motion } from "framer-motion";
import { GridPattern } from "./GridPattern";

const companyLogos = [
  { name: "TechFlow Solutions", logo: null, width: "140" },
  { name: "DataSync Pro", logo: null, width: "120" },
  { name: "CloudNova Systems", logo: null, width: "140" },
  { name: "AMOZ", logo: null, width: "90" },
  { name: "SimpliTend", logo: null, width: "120" },
  { name: "Seezun", logo: null, width: "100" },
  { name: "TradersCircuit", logo: null, width: "140" },
  { name: "FreeU", logo: null, width: "90" },
  { name: "Amble", logo: null, width: "100" },
  { name: "Lean In World", logo: null, width: "130" },
  { name: "WOKA", logo: null, width: "90" },
  { name: "SSA", logo: null, width: "80" },
  { name: "Dorf Ketal", logo: null, width: "120" },
  { name: "Agromate", logo: null, width: "120" },
  { name: "Regroup", logo: null, width: "110" },
  { name: "CAD IT Solutions", logo: null, width: "150" },
  { name: "Tanami Capital", logo: null, width: "140" },
  { name: "SuperMoney Advisor", logo: null, width: "170" },
  { name: "Prosperty Platform", logo: null, width: "160" },
  { name: "Moving Cargo", logo: null, width: "130" },
  { name: "GSF Mobile", logo: null, width: "120" },
  { name: "Farm Feeder", logo: null, width: "120" },
  { name: "Melbourne City Card", logo: null, width: "170" },
  { name: "ByteForge Labs", logo: null, width: "130" },
  { name: "CodeCraft Studio", logo: null, width: "140" },
  { name: "DevStream Tech", logo: null, width: "130" },
  { name: "NextGen Solutions", logo: null, width: "150" },
  { name: "ProdPush Platform", logo: null, width: "140" },
  { name: "ScaleUp Ventures", logo: null, width: "140" },
  { name: "AlphaVision Labs", logo: null, width: "140" },
  { name: "CloudSync Systems", logo: null, width: "140" },
  { name: "TechNova Group", logo: null, width: "130" },
  { name: "DataFlow Pro", logo: null, width: "120" },
  { name: "InnovateLab", logo: null, width: "120" }
];

const countryFlags = [
  {
    name: "United States",
    alt: "United States flag icon",
    flagSvg: (
      <svg viewBox="0 0 24 18" className="w-8 h-6">
        <rect width="24" height="18" fill="#B22234"/>
        <rect width="24" height="1.38" y="1.38" fill="white"/>
        <rect width="24" height="1.38" y="4.15" fill="white"/>
        <rect width="24" height="1.38" y="6.92" fill="white"/>
        <rect width="24" height="1.38" y="9.69" fill="white"/>
        <rect width="24" height="1.38" y="12.46" fill="white"/>
        <rect width="24" height="1.38" y="15.23" fill="white"/>
        <rect width="9.6" height="9.69" fill="#3C3B6E"/>
      </svg>
    )
  },
  {
    name: "United Kingdom",
    alt: "United Kingdom flag icon",
    flagSvg: (
      <svg viewBox="0 0 24 18" className="w-8 h-6">
        <rect width="24" height="18" fill="#012169"/>
        <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="2"/>
        <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1"/>
        <path d="M12 0V18M0 9H24" stroke="white" strokeWidth="3"/>
        <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="2"/>
      </svg>
    )
  },
  {
    name: "India",
    alt: "India flag icon",
    flagSvg: (
      <svg viewBox="0 0 24 18" className="w-8 h-6">
        <rect width="24" height="6" fill="#FF9933"/>
        <rect width="24" height="6" y="6" fill="white"/>
        <rect width="24" height="6" y="12" fill="#138808"/>
        <circle cx="12" cy="9" r="2" fill="none" stroke="#000080" strokeWidth="0.3"/>
        <g transform="translate(12,9)">
          {Array.from({length: 24}, (_, i) => (
            <line key={i} x1="0" y1="-1.5" x2="0" y2="-1.8" stroke="#000080" strokeWidth="0.1" transform={`rotate(${i * 15})`}/>
          ))}
        </g>
      </svg>
    )
  },
  {
    name: "Canada",
    alt: "Canada flag icon",
    flagSvg: (
      <svg viewBox="0 0 24 18" className="w-8 h-6">
        <rect width="6" height="18" fill="#FF0000"/>
        <rect width="12" height="18" x="6" fill="white"/>
        <rect width="6" height="18" x="18" fill="#FF0000"/>
        <path d="M12 4L13 7H16L13.5 9L14.5 12L12 10L9.5 12L10.5 9L8 7H11L12 4Z" fill="#FF0000"/>
      </svg>
    )
  },
  {
    name: "Australia",
    alt: "Australia flag icon",
    flagSvg: (
      <svg viewBox="0 0 24 18" className="w-8 h-6">
        <rect width="24" height="18" fill="#012169"/>
        <g transform="scale(0.5)">
          <rect width="24" height="9" fill="#012169"/>
          <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="2"/>
          <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1"/>
          <path d="M12 0V18M0 9H24" stroke="white" strokeWidth="3"/>
          <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="2"/>
        </g>
        <g fill="white">
          <circle cx="18" cy="6" r="0.5"/>
          <circle cx="20" cy="8" r="0.3"/>
          <circle cx="19" cy="10" r="0.4"/>
          <circle cx="21" cy="12" r="0.3"/>
          <circle cx="18" cy="14" r="0.5"/>
        </g>
      </svg>
    )
  }
];

const ProjectImageCircles = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
    className="flex justify-center items-center mb-12"
  >
    <div className="flex items-center">
      {countryFlags.map((flag, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.5 + (index * 0.1),
            type: "spring",
            stiffness: 200 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1, 
            zIndex: 10,
            transition: { duration: 0.2 }
          }}
          className="relative w-16 h-16 cursor-pointer group"
          style={{
            marginLeft: index > 0 ? '-8px' : '0',
            zIndex: countryFlags.length - index
          }}
        >
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 group-hover:border-accent/50 group-hover:bg-white/15 transition-all duration-300 shadow-lg group-hover:shadow-xl flex items-center justify-center overflow-hidden">
            <div 
              className="w-10 h-8 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
              role="img" 
              aria-label={flag.alt}
            >
              {flag.flagSvg}
            </div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#0E0E0E] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-white/10 z-50">
            <div className="text-center">
              <div className="font-medium text-accent">{flag.name}</div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-[#0E0E0E]"></div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const LogoCard = ({ name, width }: { name: string; width: string }) => (
  <div 
    className="flex items-center justify-center h-16 bg-white/8 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/12 hover:border-accent/20 transition-all duration-300 px-6 shadow-lg backdrop-blur-sm group"
    style={{ minWidth: `${width}px` }}
  >
    <span className="text-white/80 font-medium text-sm text-center leading-tight group-hover:text-white/95 transition-colors duration-300">
      {name}
    </span>
  </div>
);

const MarqueeRow = ({ logos }: { logos: typeof companyLogos }) => (
  <motion.div
    animate={{
      x: [0, -3200],
    }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 120,
        ease: "linear",
      },
    }}
    className="flex gap-6 items-center"
    style={{
      width: "fit-content",
    }}
  >
    {[...logos, ...logos].map((company, index) => (
      <LogoCard key={`${company.name}-${index}`} name={company.name} width={company.width} />
    ))}
  </motion.div>
);

export const ClientLogos = () => {
  return (
    <section className="relative py-20 bg-[#121212] border-y border-white/5 overflow-hidden">
      <GridPattern strokeDasharray="4 2" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Trusted by Founders and CTOs Across 15+ Countries
          </h2>
        </motion.div>
        
        {/* Project Image Circles */}
        <ProjectImageCircles />
        
        {/* Company Logos Ticker */}
        <div className="overflow-hidden">
          <MarqueeRow logos={companyLogos} />
        </div>
      </div>
    </section>
  );
};