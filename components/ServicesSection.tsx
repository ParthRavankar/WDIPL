export function ServicesSection() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Native & cross-platform apps with pixel-perfect UIs and seamless user experiences.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
      gradient: "from-[#E5195E]/20 to-purple-500/20"
    },
    {
      title: "Web Platforms",
      description: "Scalable, secure, and SEO-optimized web applications built for performance.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
      gradient: "from-[#E5195E]/20 to-blue-500/20"
    },
    {
      title: "AI & ML Solutions",
      description: "Intelligent features powered by cutting-edge algorithms and machine learning.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
      gradient: "from-[#E5195E]/20 to-cyan-500/20"
    },
    {
      title: "DevOps & Cloud",
      description: "CI/CD pipelines and managed cloud infrastructure for seamless deployment.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      ),
      gradient: "from-[#E5195E]/20 to-orange-500/20"
    },
    {
      title: "Product Design",
      description: "Human-centered UX with delightful micro-interactions and intuitive interfaces.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
        />
      ),
      gradient: "from-[#E5195E]/20 to-pink-500/20"
    },
    {
      title: "Security & Compliance",
      description: "Pen-testing, auditing, and regulatory alignment for enterprise-grade security.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      gradient: "from-[#E5195E]/20 to-green-500/20"
    }
  ];

  return (
    <section id="services" className="border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What We Do</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            End-to-end solutions for every stage of your product lifecycle.
          </p>
        </div>

        {/* Services Grid - Wider container and larger cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative p-10 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 rounded-[10px] backdrop-blur-sm hover:backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Glassmorphism Icon */}
              <div className={`relative mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <svg
                  className="w-10 h-10 text-white/90 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-4">
                <span className="text-[#E5195E]">{service.title.split(' ')[0]}</span>
                {service.title.split(' ').slice(1).join(' ') && ` ${service.title.split(' ').slice(1).join(' ')}`}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}