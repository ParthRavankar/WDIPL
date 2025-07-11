export function SplineFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5195E]/10 to-purple-500/10 animate-pulse"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Main 3D scene */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Central 3D composition */}
        <div className="relative">
          {/* Main floating cube with nested elements */}
          <div className="w-40 h-40 relative transform-gpu">
            {/* Outer cube */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E5195E]/30 to-purple-500/30 rounded-3xl transform rotate-12 animate-[float_4s_ease-in-out_infinite] backdrop-blur-sm border border-white/20 shadow-2xl">
              {/* Middle cube */}
              <div className="absolute inset-6 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-2xl transform -rotate-12 animate-[float_3s_ease-in-out_infinite_0.5s] backdrop-blur-sm border border-white/10">
                {/* Inner cube */}
                <div className="absolute inset-6 bg-gradient-to-br from-green-500/50 to-emerald-500/50 rounded-xl transform rotate-6 animate-[float_2s_ease-in-out_infinite_1s] backdrop-blur-sm border border-white/5">
                  {/* Core element */}
                  <div className="absolute inset-4 bg-gradient-to-br from-orange-500/60 to-yellow-500/60 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Orbiting satellites */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Satellite 1 */}
            <div className="absolute -top-8 -right-8 w-8 h-8 bg-gradient-to-r from-[#E5195E] to-pink-500 rounded-xl transform rotate-45 animate-[orbit_8s_linear_infinite] shadow-lg">
              <div className="absolute inset-1 bg-white/20 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Satellite 2 */}
            <div className="absolute -bottom-6 -left-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg transform -rotate-12 animate-[orbit_6s_linear_infinite_reverse] shadow-lg">
              <div className="absolute inset-1 bg-white/30 rounded-sm animate-pulse delay-500"></div>
            </div>
            
            {/* Satellite 3 */}
            <div className="absolute top-1/2 -left-16 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-[orbit_10s_linear_infinite] shadow-lg">
              <div className="absolute inset-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
            </div>
            
            {/* Satellite 4 */}
            <div className="absolute top-1/4 -right-14 w-7 h-7 bg-gradient-to-r from-purple-500 to-violet-400 rounded-2xl transform rotate-30 animate-[orbit_7s_linear_infinite_reverse] shadow-lg">
              <div className="absolute inset-1.5 bg-white/25 rounded-xl animate-pulse delay-1500"></div>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Particle 1 */}
          <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-white/60 rounded-full animate-[float_3s_ease-in-out_infinite] shadow-sm"></div>
          
          {/* Particle 2 */}
          <div className="absolute top-2/3 left-4/5 w-1.5 h-1.5 bg-[#E5195E]/80 rounded-full animate-[float_4s_ease-in-out_infinite_0.8s] shadow-sm"></div>
          
          {/* Particle 3 */}
          <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-blue-400/70 rounded-full animate-[float_2.5s_ease-in-out_infinite_1.2s] shadow-sm"></div>
          
          {/* Particle 4 */}
          <div className="absolute top-1/4 right-1/6 w-1.5 h-1.5 bg-green-400/60 rounded-full animate-[float_3.5s_ease-in-out_infinite_1.8s] shadow-sm"></div>
          
          {/* Particle 5 */}
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400/50 rounded-full animate-[float_4.5s_ease-in-out_infinite_2.2s] shadow-sm"></div>
        </div>
        
        {/* Light rays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-t from-transparent via-white/10 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-[rotate_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-transparent via-[#E5195E]/10 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-135 animate-[rotate_15s_linear_infinite_reverse]"></div>
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-white/70 font-medium">Interactive 3D Experience</span>
      </div>
      
      {/* Tech badge */}
      <div className="absolute top-6 right-6 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
        <span className="text-xs text-white/80 font-medium">AI Powered</span>
      </div>
    </div>
  );
}