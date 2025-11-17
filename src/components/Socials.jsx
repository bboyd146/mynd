import React from "react";

/**
 * Socials.jsx
 *
 * Usage:
 * <Socials
 *   handles={{
 *     instagram: "moremynd",
 *     tiktok: "moremynd",
 *   }}
 *   size={20}
 *   gap={10}
 *   direction="row"
 *   label="Follow me"
 * />
 *
 * Note: this component is intended to include only instagram and tiktok handles.
 */

const ICONS = {
  instagram: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
    </svg>
  ),
  tiktok: (size) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      className="bi bi-tiktok"
      viewBox="0 0 16 16"
    >
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
    </svg>
  ),
  twitter: (size) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path
        d="M22 5.9c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.4-1.7-.6.4-1.3.6-2 .8-.6-.6-1.4-1-2.3-1-1.8 0-3.2 1.8-2.8 3.5C12 9 9.7 8.1 8 6.6c-.7 1.2-.1 2.8 1.1 3.5-.5 0-1-.1-1.4-.4v.1c0 1.5 1.1 2.8 2.6 3-.5.1-1 .1-1.6 0 .5 1.5 2 2.6 3.7 2.6A6.5 6.5 0 0 1 6 18.6c2.5 1.6 5.5 2.4 8.6 2.4 6.8 0 10.5-6 10.5-11.2v-.5c.7-.5 1.2-1.2 1.6-2z"
        fill="currentColor"
      />
    </svg>
  ),
  youtube: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M10 8.5v7l5-3.5-5-3.5z" fill="currentColor" />
    </svg>
  ),
};

function buildUrl(platform, value) {
  if (!value) return null;
  const v = value.trim();
  if (v.startsWith("http://") || v.startsWith("https://")) return v;
  const clean = v.replace(/^@|^\/+/, "");
  switch (platform) {
    case "instagram":
      return `https://instagram.com/${clean}`;
    case "tiktok":
      // tiktok expects @username in path for many profiles; use /@username when not a url
      return `https://www.tiktok.com/@${clean.replace(/^@/, "")}`;
    case "twitter":
      return `https://twitter.com/${clean}`;
    case "youtube":
      return `https://youtube.com/${clean}`;
    default:
      return clean;
  }
}

export default function Socials({
  handles = {},
  size = 60,
  gap = 15,
  direction = "down",
className="flex flex-col items-center justify-center py-24 gap-10 animate-fadeIn",
  iconColor = "currentColor",
  label = "Follow me",
}) {
  const platforms = Object.keys(handles).filter((p) => handles[p] && ICONS[p]);

  if (platforms.length === 0) return null;

  const rootStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };

  const subheaderStyle = {
    fontSize: 40,
    textTransform: "uppercase",
    paddingBottom: 80,
    letterSpacing: "0.06em",
    color: "#ffff", // neutral gray, similar to muted subheaders
    fontWeight: 600,
  };

  const iconsStyle = {
    display: "flex flex-wrap",
    flexDirection: direction === "column" ? "column" : "row",
    gap: 6,
    alignItems: "center",
  };

  const labelId = "socials-subheader";

  return (
    <div className={className} style={rootStyle}>
      <div id={labelId} style={subheaderStyle}>
        {label}
      </div>

      <div role="group" aria-labelledby={labelId} style={iconsStyle}>
        {platforms.map((platform) => {
          const href = buildUrl(platform, handles[platform]);
          return (
            <a
              key={platform}
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform}
              style={{
                display: "inline-flex",
                padding: 10,
                width: size,
                height: size,
                color: iconColor,
                textDecoration: "none",
              }}
            >
              {ICONS[platform] ? ICONS[platform](size) : null}
            </a>
          );
        })}
      </div>
    </div>
  );
}
