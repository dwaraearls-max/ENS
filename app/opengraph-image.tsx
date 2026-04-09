import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #022c22 0%, #065f46 55%, #047857 100%)",
          padding: 64,
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#fbbf24",
            marginBottom: 20,
          }}
        >
          Ghana • Susu & savings
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 24,
            textAlign: "center",
            color: "rgba(255,255,255,0.9)",
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
