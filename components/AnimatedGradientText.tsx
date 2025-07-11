import { motion } from "framer-motion";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export const AnimatedGradientText = ({ text, className = "" }: AnimatedGradientTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`inline-block ${className}`}
    >
      <span className="bg-gradient-to-r from-[#E5195E] via-purple-400 to-[#E5195E] bg-clip-text text-transparent animate-pulse">
        {text}
      </span>
    </motion.div>
  );
};