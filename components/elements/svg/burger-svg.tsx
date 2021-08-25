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
      <rect width="57" height="9" fill="#372152" />
      <rect width="57" height="9" transform="translate(0 14)" fill="#372152" />
      <rect width="57" height="9" transform="translate(0 28)" fill="#372152" />
    </svg>
  );
}
