export default function PlantThumbnail({ color, name }) {
  return (
    <svg
      className="thumbnail"
      viewBox="0 0 100 100"
      role="img"
      aria-label={`${name} thumbnail`}
    >
      <rect width="100" height="100" fill="#e9f5ec" />
      <path
        d="M50 14 C22 34 22 70 50 84 C78 70 78 34 50 14Z"
        fill={color}
      />
      <path d="M50 24 V78" stroke="#1f3a25" strokeWidth="3" />
      <path d="M32 80 H68 L62 94 H38 Z" fill="#8d5a3b" />
    </svg>
  );
}
