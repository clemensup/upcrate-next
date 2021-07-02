interface ButtonProps {
  colorClass: string;
  text: string;
  href: string;
  withCaret?: boolean;
}

export function Button({
  text,
  colorClass,
  href,
  withCaret = true,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`font-display p-3 pt-2 pb-3 text-3xl inline-flex items-center content-center gap-4 mt-5 ${colorClass}`}
    >
      <span className="col-span-2">{text}</span>
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
