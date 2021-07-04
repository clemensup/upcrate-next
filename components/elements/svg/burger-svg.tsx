interface BurgerSvgProps {
  className?: string;
}

export function BurgerSvg({ className }: BurgerSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="37"
      viewBox="0 0 57 37"
      className={className}
    >
      <rect
        id="Rectangle_293"
        data-name="Rectangle 293"
        width="57"
        height="9"
        fill="#372152"
      />
      <rect
        id="Rectangle_294"
        data-name="Rectangle 294"
        width="57"
        height="9"
        transform="translate(0 14)"
        fill="#372152"
      />
      <rect
        id="Rectangle_295"
        data-name="Rectangle 295"
        width="57"
        height="9"
        transform="translate(0 28)"
        fill="#372152"
      />
    </svg>
  );
}
