export const GridPattern = ({ strokeDasharray = "4 2" }: { strokeDasharray?: string }) => {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
};