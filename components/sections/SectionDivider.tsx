"use client";

export function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-4xl px-6">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-gold/30"
        >
          <path
            d="M10 2L12.2 7.6L18 8.4L13.8 12.6L15 18.4L10 15.4L5 18.4L6.2 12.6L2 8.4L7.8 7.6L10 2Z"
            fill="currentColor"
          />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}
