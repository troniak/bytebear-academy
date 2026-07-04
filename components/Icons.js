const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props} aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const Chip = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <rect x="6" y="6" width="12" height="12" rx="3" />
    <path d="M9 1.5v3M15 1.5v3M9 19.5v3M15 19.5v3M1.5 9h3M1.5 15h3M19.5 9h3M19.5 15h3" />
    <circle cx="12" cy="12" r="2.2" />
  </svg>
);

export const Users = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.8 19c.8-3 3.2-4.6 6.2-4.6s5.4 1.6 6.2 4.6" />
    <circle cx="17.5" cy="9.5" r="2.4" />
    <path d="M16.5 14.6c2.4.2 4.2 1.6 4.8 4" />
  </svg>
);

export const ShieldCheck = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="M12 2.5 20 6v5.5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3.5Z" />
    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
  </svg>
);

export const Heart = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="M12 20.5C7 16.6 3.5 13.4 3.5 9.6 3.5 7 5.5 5 8 5c1.6 0 3.1.8 4 2.1C12.9 5.8 14.4 5 16 5c2.5 0 4.5 2 4.5 4.6 0 3.8-3.5 7-8.5 10.9Z" />
  </svg>
);

export const Code = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="m8 8-4.5 4L8 16M16 8l4.5 4L16 16M13.5 5.5l-3 13" />
  </svg>
);

export const Robot = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <rect x="5" y="8" width="14" height="10" rx="3" />
    <path d="M12 8V4.5M12 4.5a1.5 1.5 0 1 0-.01 0Z" />
    <circle cx="9.5" cy="12.5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="12.5" r="0.8" fill="currentColor" stroke="none" />
    <path d="M9.5 15.5h5M2.5 12v3M21.5 12v3" />
  </svg>
);

export const Cube = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="M12 2.8 20.5 7.4v9.2L12 21.2 3.5 16.6V7.4L12 2.8Z" />
    <path d="M3.5 7.4 12 12l8.5-4.6M12 12v9.2" />
  </svg>
);

export const Palette = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="M12 21a9 9 0 1 1 9-9c0 2.5-1.7 3.4-3.4 3.4h-1.9c-1.3 0-2.1 1-1.6 2.2.5 1.3-.1 3.4-2.1 3.4Z" />
    <circle cx="7.8" cy="10.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="16.2" cy="10.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Rocket = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="M12 15.5c5.5-4 7.5-8.3 7-12-3.7-.5-8 1.5-12 7l-3.5 1L7 15l3.5 3.5 1-3Z" />
    <circle cx="13.8" cy="9.7" r="1.6" />
    <path d="M6.5 17.5c-1.3.4-2.6 2-2.5 3.5 1.5.1 3.1-1.2 3.5-2.5" />
  </svg>
);

export const GradCap = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="m12 4 10.5 4.5L12 13 1.5 8.5 12 4Z" />
    <path d="M6 10.5v5c0 1.6 2.7 3 6 3s6-1.4 6-3v-5M22.5 8.5V14" />
  </svg>
);

export const Monitor = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
    <path d="M9 21h6M12 17v4M8 10.5l2 2 4-4.5" />
  </svg>
);

export const MapleLeaf = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="M12 2.5 13.8 6l2.4-1.2-.7 4 3.3-.7-1.2 3 4 1.4-2.6 2.4 1.2 2.4-4.2-.5.3 4.7H12h-3.5l.3-4.7-4.2.5 1.2-2.4L3.2 12.5l4-1.4-1.2-3 3.3.7-.7-4L11 6l1-3.5Z" />
  </svg>
);

export const Check = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={3} {...props} aria-hidden="true">
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const Send = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <path d="M21.5 2.5 10.8 13.2M21.5 2.5 14.5 21.5l-3.7-8.3-8.3-3.7 19-7Z" />
  </svg>
);

export const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-1.9 0-3.3 1.2-3.3 3.4V11H8.5v3h2.7v7h2.3Z" />
  </svg>
);

export const Instagram = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M22 12s0-3.3-.4-4.8c-.2-.9-.9-1.6-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.8c.2.9.9 1.6 1.8 1.8 1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4c-.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.8.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

export const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
    <path d="M6.5 8.5H3.8V21h2.7V8.5ZM5.1 7.3a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM12 21H9.3V8.5H12v1.7c.8-1.2 2-1.9 3.5-1.9 2.6 0 4.4 1.8 4.4 5V21h-2.7v-7c0-1.7-.8-2.8-2.2-2.8-1.5 0-3 1.2-3 3V21Z" />
  </svg>
);
