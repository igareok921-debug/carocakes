import { ImageResponse } from "next/og";
import { homeDescription, homeTitle } from "@/lib/seo";

export const runtime = "edge";
export const alt = "CaroCakes - torturi personalizate la comandă în Chișinău";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 82px",
          background:
            "radial-gradient(circle at 75% 24%, rgba(217,155,145,0.34), transparent 260px), linear-gradient(135deg, #fff8ee 0%, #f5e3ca 100%)",
          color: "#482511",
          fontFamily: "Georgia, serif"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 690 }}>
          <div
            style={{
              display: "flex",
              marginBottom: 34,
              color: "#c79a57",
              fontFamily: "Arial, sans-serif",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 8,
              textTransform: "uppercase"
            }}
          >
            CaroCakes Chișinău
          </div>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 0.95, fontWeight: 700 }}>
            {homeTitle.replace("CaroCakes — ", "")}
          </div>
          <div
            style={{
              display: "flex",
              width: 520,
              height: 2,
              marginTop: 34,
              marginBottom: 28,
              background: "linear-gradient(90deg, #482511, #c79a57, transparent)"
            }}
          />
          <div style={{ display: "flex", maxWidth: 700, fontSize: 30, lineHeight: 1.35, color: "#7a4227" }}>
            {homeDescription}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: 326,
            height: 326,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 72,
            border: "16px solid #482511",
            background: "#fff8ee",
            boxShadow: "0 34px 90px rgba(72,37,17,0.22)"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 190,
              lineHeight: 1,
              color: "#5a2d17",
              fontWeight: 700,
              transform: "translateY(10px)"
            }}
          >
            C
          </div>
          <div
            style={{
              position: "absolute",
              right: 55,
              top: 76,
              width: 68,
              height: 68,
              borderRadius: 999,
              background: "radial-gradient(circle at 35% 28%, #fff2df 0 8px, #d99b91 24px, #8a4a2d 68px)",
              boxShadow: "0 8px 18px rgba(72,37,17,0.28)"
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 36,
              top: 44,
              width: 72,
              height: 56,
              borderTop: "8px solid #c79a57",
              borderRadius: "50%",
              transform: "rotate(-28deg)"
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 58,
              width: 178,
              height: 14,
              borderBottom: "6px solid #d99b91",
              borderRadius: "50%"
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
