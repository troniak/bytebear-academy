export default function BearIcon({ className, strokeWidth = 3 }) {
  return (
    <svg
      viewBox="0 0 48 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10.5" cy="10" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="37.5" cy="10" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect
        x="4.5"
        y="8.5"
        width="39"
        height="35"
        rx="17.5"
        fill="var(--bear-face, transparent)"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M17.5 21.5 12.5 26.5 17.5 31.5"
        stroke="var(--bear-code, currentColor)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.5 21.5 35.5 26.5 30.5 31.5"
        stroke="var(--bear-code, currentColor)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.5 19.5 21.5 33.5"
        stroke="var(--bear-code, currentColor)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
