export function ImageSection({
  variant = "medium",
  bg,
}: {
  variant?: "small" | "medium";
  bg: string;
}) {
  const sizeClasses =
    variant === "medium"
      ? "min-h-sectionBig md:min-h-sectionBigMd"
      : "min-h-sectionSmall md:min-h-sectionSmallMd";

  return <div className={`${sizeClasses} bg-${bg} bg-center bg-cover`}></div>;
}
