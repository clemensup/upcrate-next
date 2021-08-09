export interface ImageSectionProps {
  variant?: "xs" | "small" | "medium";
  bg: string;
}

export function ImageSection({ variant = "medium", bg }: ImageSectionProps) {
  let sizeClasses = "min-h-sectionBig md:min-h-sectionBigMd";

  if (variant === "xs") {
    sizeClasses = "min-h-sectionXs";
  }

  if (variant === "small") {
    sizeClasses = "min-h-sectionSmall md:min-h-sectionSmallMd";
  }

  return (
    <div
      className={`${sizeClasses} bg-center bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url('/${bg}.png')` }}
    ></div>
  );
}
