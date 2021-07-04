interface ButtonProps {
  variant?: "default" | "outline";
  className: string;
  onClick?: () => void;
  href?: string;
}

export function Button({
  variant = "default",
  children,
  className,
  href,
  onClick,
}: React.PropsWithChildren<ButtonProps>) {
  const variantClassName = variant === "outline" ? "bg-red" : "bg-none";

  if (onClick) {
    return (
      <button
        className={`font-display p-3 pt-2 pb-3 text-3xl inline-flex items-center content-center gap-4 mt-5 ${variantClassName} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`font-display p-3 pt-2 pb-3 text-3xl mt-5 inline-block ${variantClassName} ${className}`}
      >
        <span className="col-span-2 inline-flex items-center content-center gap-4">
          {children}
        </span>
      </a>
    );
  }
}
