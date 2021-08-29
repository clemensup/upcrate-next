import React from "react";

export function CreditsBage({
  children,
  className,
  href,
}: React.PropsWithChildren<{ className: string; href: string }>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute top-1/2 transform -translate-y-1/2 -rotate-90 px-2 inline-block origin-right text-white ${className}`}
      style={{ right: 12 }}
    >
      {children}
    </a>
  );
}
