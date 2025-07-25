import type { ReactNode } from "react";
import "./gradientText.css";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className} flex right-10`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content text-lg md:text-xl mt-4 text-white mb-5" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}