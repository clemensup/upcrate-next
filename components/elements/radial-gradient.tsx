import React from "react";

interface RadialGradientProps {
  className: string;
  variant?:
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-right"
    | "center"
    | "center-xl";
}

export function RadialGradient({
  className,
  variant = "top",
}: RadialGradientProps) {
  let posClass = "";

  switch (variant) {
    case "top":
      posClass = "-top-72 left-1/4 w-1/2";
      break;

    case "top-left":
      posClass = "-top-72 -left-1/4 w-1/2";
      break;

    case "top-right":
      posClass = "-top-72 -right-1/4 w-1/2";
      break;

    case "bottom":
      posClass = "-bottom-72 left-1/4 w-1/2";
      break;

    case "center":
      posClass =
        "gradient-center top-0 md:top-1/2 left-1/4 md:left-1/2 w-1/2 md:w-1/4 h-1/2 md:h-1/4";
      break;

    case "center-xl":
      posClass =
        "gradient-center top-0 md:top-1/2 left-1/4 md:left-1/2 w-full h-full";
      break;

    case "bottom-right":
      posClass = "-bottom-72 -right-1/4 w-1/2";
      break;

    default:
      posClass = "-top-72 left-1/4 w-1/2";
      break;
  }

  return (
    <div
      className={`absolute h-gradient filter blur-gradient ${posClass} ${className} `}
    ></div>
  );
}
