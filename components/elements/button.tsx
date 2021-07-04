interface ButtonProps {
  variant?: "default" | "outline";
  className: string;
  onClick?: () => void;
  href?: string;
  withCaret?: boolean;
}

export function Button({
  variant = "default",
  children,
  className,
  href,
  withCaret = false,
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
        className={`font-display p-3 pt-2 pb-3 text-3xl inline-flex items-center content-center gap-4 mt-5 ${variantClassName} ${className}`}
      >
        <span className="col-span-2">{children}</span>
        {withCaret && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.171"
            height="28.141"
            viewBox="0 0 19.171 28.141"
          >
            <path
              id="Path_237"
              data-name="Path 237"
              d="M304.22,3262.3l11.445,11.445-11.746,11.746"
              transform="translate(-301.444 -3259.823)"
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="7"
            />
          </svg>
        )}
      </a>
    );
  }
}
