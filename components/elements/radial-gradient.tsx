import React from "react";

interface RadialGradientProps {
  className: string;
  variant?: "top" | "bottom" | "bottom-right";
}

export function RadialGradient({
  className,
  variant = "top",
}: RadialGradientProps) {
  let posClass = "";

  console.log(variant);

  switch (variant) {
    case "top":
      posClass = "-top-72 left-1/4";
      break;

    case "bottom":
      posClass = "-bottom-72 left-1/4";
      break;

    case "bottom-right":
      posClass = "-bottom-72 -right-1/4";
      break;

    default:
      posClass = "-top-72 left-1/4";
      break;
  }

  console.log(posClass);

  return (
    <div
      className={`${className} ${posClass} absolute h-gradient filter blur-gradient w-1/2`}
    ></div>
  );
}
