export interface ImageSectionProps {
  variant?: "xs" | "small" | "medium";
  className?: string;
  bg: string;
}

export function ImageSection({
  className,
  variant = "medium",
  bg,
}: ImageSectionProps) {
  let sizeClasses = "min-h-sectionBig md:min-h-sectionBigMd";

  if (variant === "xs") {
    sizeClasses = "min-h-sectionXs";
  }

  if (variant === "small") {
    sizeClasses = "min-h-sectionSmall md:min-h-sectionSmallMd";
  }

  return (
    <div
      className={`${sizeClasses} ${className} bg-center bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url('/${bg}.png')` }}
    ></div>
  );
}
