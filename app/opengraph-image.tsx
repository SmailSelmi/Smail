import { ImageResponse } from "next/og";
import { personalData } from "@/lib/data";

export const runtime = "edge";

export const alt = "Smail Selmi | UI/UX Designer & Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111112",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Background Accents */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "rgba(232, 124, 44, 0.15)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background: "rgba(232, 124, 44, 0.1)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />

        {/* Brand bar */}
        <div
          style={{
            width: "60px",
            height: "8px",
            background: "#e87c2c",
            marginBottom: "40px",
            borderRadius: "4px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "900",
              color: "white",
              margin: "0 0 16px 0",
              letterSpacing: "-0.05em",
            }}
          >
            {personalData.name}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#a1a1aa",
              margin: "0",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            {personalData.role}
          </p>
        </div>

        {/* Footer info */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "10px 20px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            KYODAI CODE
          </div>
          <div
            style={{
              color: "#e87c2c",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            smailselmi.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
