interface ButtonProps {
  className: string;
  variant?: "default" | "outline";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export function Button({
  variant = "default",
  children,
  className,
  href,
  onClick,
  disabled = false,
}: React.PropsWithChildren<ButtonProps>) {
  const variantClassName = variant === "outline" ? "bg-red" : "bg-none";

  if (onClick) {
    return (
      <button
        className={`font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center content-center gap-4 mt-2 md:mt-5 max-w-max mx-auto ${variantClassName} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`font-display p-3 pt-2 pb-3 md:text-3xl mt-2 md:mt-5 inline-block max-w-max mx-auto ${variantClassName} ${className}`}
      >
        <span className="col-span-2 inline-flex items-center content-center gap-4">
          {children}
        </span>
      </a>
    );
  }
}
