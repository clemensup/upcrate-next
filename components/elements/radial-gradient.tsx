import React from "react";

interface RadialGradientProps {
  className: string;
  variant?: "top" | "bottom";
}

export function RadialGradient({
  className,
  variant = "top",
}: RadialGradientProps) {
  const positionClass = variant === "top" ? "-top-72" : "-bottom-72";

  return (
    <div
      className={`${className} ${positionClass} absolute h-gradient filter blur-gradient w-1/2 left-1/4`}
    ></div>
  );
}
