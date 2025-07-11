import { motion } from "framer-motion";

const foundersAndCTOs = [
  { 
    name: "SimpliTend", 
    title: "HealthTech Platform",
    country: "India",
    code: "IN",
    flagEmoji: "🇮🇳",
    projectType: "Care Management"
  },
  { 
    name: "Seezun", 
    title: "Fashion Marketplace",
    country: "United Kingdom",
    code: "GB",
    flagEmoji: "🇬🇧",
    projectType: "P2P Platform"
  },
  { 
    name: "AMOZ", 
    title: "E-commerce Platform",
    country: "United States",
    code: "US",
    flagEmoji: "🇺🇸",
    projectType: "Digital Commerce"
  },
  { 
    name: "TradersCircuit", 
    title: "Trading Platform",
    country: "United Arab Emirates",
    code: "AE",
    flagEmoji: "🇦🇪",
    projectType: "FinTech"
  },
  { 
    name: "FreeU", 
    title: "Social Platform",
    country: "Australia",
    code: "AU",
    flagEmoji: "🇦🇺",
    projectType: "Community"
  },
  { 
    name: "Dorf Ketal", 
    title: "Manufacturing Tech",
    country: "Germany",
    code: "DE",
    flagEmoji: "🇩🇪",
    projectType: "Industrial IoT"
  },
  { 
    name: "WOKA", 
    title: "Learning Platform",
    country: "Singapore",
    code: "SG",
    flagEmoji: "🇸🇬",
    projectType: "EdTech"
  },
  { 
    name: "Regroup", 
    title: "Sports Networking",
    country: "Canada",
    code: "CA",
    flagEmoji: "🇨🇦",
    projectType: "Social Sports"
  },
  { 
    name: "Tanami Capital", 
    title: "Wealth Management",
    country: "Brazil",
    code: "BR",
    flagEmoji: "🇧🇷",
    projectType: "FinTech"
  },
  { 
    name: "SSA", 
    title: "Networking Platform",
    country: "Japan",
    code: "JP",
    flagEmoji: "🇯🇵",
    projectType: "Professional Network"
  },
  { 
    name: "Amble", 
    title: "Travel Platform",
    country: "France",
    code: "FR",
    flagEmoji: "🇫🇷",
    projectType: "Travel Tech"
  },
  { 
    name: "Agromate", 
    title: "AgriTech Solution",
    country: "Netherlands",
    code: "NL",
    flagEmoji: "🇳🇱",
    projectType: "Agriculture"
  },
  { 
    name: "Moving Cargo", 
    title: "Logistics Platform",
    country: "Sweden",
    code: "SE",
    flagEmoji: "🇸🇪",
    projectType: "Supply Chain"
  },
  { 
    name: "Farm Feeder", 
    title: "Agricultural Tech",
    country: "New Zealand",
    code: "NZ",
    flagEmoji: "🇳🇿",
    projectType: "AgriTech"
  },
  { 
    name: "Melbourne City Card", 
    title: "City Services Platform",
    country: "South Korea",
    code: "KR",
    flagEmoji: "🇰🇷",
    projectType: "Civic Tech"
  }
];

export const CountryFlags = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {foundersAndCTOs.map((project, index) => (
          <motion.div
            key={project.code + index}
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
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="group cursor-pointer relative"
          >
            <div className="text-center">
              {/* Flag Icon */}
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-accent/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <span className="text-2xl" role="img" aria-label={`${project.country} flag`}>
                    {project.flagEmoji}
                  </span>
                </div>
              </div>
              
              {/* Project Badge */}
              <div className="bg-white/8 rounded-lg border border-white/10 px-3 py-2.5 group-hover:bg-white/12 group-hover:border-accent/30 transition-all duration-300 shadow-sm backdrop-blur-sm min-h-[60px] flex flex-col justify-center">
                <div className="text-white/90 font-medium text-sm leading-tight mb-1 group-hover:text-white transition-colors duration-300">
                  {project.name}
                </div>
                <div className="text-white/60 text-xs leading-tight">
                  {project.projectType}
                </div>
              </div>
              
              {/* Enhanced Tooltip */}
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-[#0E0E0E] text-white text-xs px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-white/20 z-50 backdrop-blur-md">
                <div className="text-center">
                  <div className="font-semibold text-accent mb-1">{project.name}</div>
                  <div className="text-white/80 mb-1">{project.title}</div>
                  <div className="text-white/60 flex items-center gap-1 justify-center">
                    <span>{project.flagEmoji}</span>
                    <span>{project.country}</span>
                  </div>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0E0E0E]"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};