export default function Logo({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" aria-label="SentriPath PM logo">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      <path d="M128 18 C 88 18 50 34 50 82 C 50 140 88 180 128 226 C 168 180 206 140 206 82 C 206 34 168 18 128 18 Z" fill="url(#g)"/>
      <path d="M 168 76 C 132 54, 94 84, 128 104 C 174 132, 116 146, 96 182" fill="none" stroke="#fff" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity="0.96"/>
      <circle cx="168" cy="76" r="9" fill="#fff" />
      <circle cx="96" cy="182" r="9" fill="#fff" />
    </svg>
  );
}
