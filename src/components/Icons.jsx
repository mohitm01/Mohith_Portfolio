const paths = {
  growth: <path d="M4 17l5-5 4 4 7-8M15 8h5v5" />,
  social: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="16.8" cy="7.2" r=".6" />
    </>
  ),
  ads: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.2-4.2M11 8v6M8 11h6" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z" />
    </>
  ),
  arrow: <path d="M7 17L17 7M8 7h9v9" />,
  down: <path d="M12 5v14M6 13l6 6 6-6" />,
  pin: (
    <>
      <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  phone: <path d="M6 4h3l1.5 4-2 1.3a11 11 0 0 0 5.2 5.2L15 12.5l4 1.5v3a2 2 0 0 1-2 2A13 13 0 0 1 4 6a2 2 0 0 1 2-2z" />,
  cap: <path d="M3 9l9-4 9 4-9 4-9-4zM7 11.5V16c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.5" />,
  badge: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
    </>
  ),
  up: <path d="M12 19V5M6 11l6-6 6 6" />,
}

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
