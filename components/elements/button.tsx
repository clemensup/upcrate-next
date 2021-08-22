import { motion } from "framer-motion";

interface ButtonProps {
  className: string;
  variant?: "default" | "outline";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "submit";
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
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          className={`font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center content-center gap-4 mt-2 md:mt-5 max-w-max mx-auto ${variantClassName} ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href={href}
          className={`font-display p-3 pt-2 pb-3 md:text-3xl mt-2 md:mt-5 inline-block max-w-max mx-auto ${variantClassName} ${className}`}
        >
          <span className="col-span-2 inline-flex items-center content-center gap-4">
            {children}
          </span>
        </a>{" "}
      </motion.div>
    );
  }
}
