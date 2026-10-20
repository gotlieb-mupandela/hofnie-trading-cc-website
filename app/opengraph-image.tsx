import { ImageResponse } from "next/og";

export const alt =
  "Hofnie Trading CC, construction and renovation in Windhoek, Ondangwa, Oshakati, and Ongwediva";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1e3328",
          color: "#f3eee6",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 3 }}>
          HOFNIE TRADING CC
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.05,
            maxWidth: 920,
          }}
        >
          Construction and renovation in Windhoek and northern Namibia
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#e7d3a1" }}>
          Windhoek · Ondangwa · Oshakati · Ongwediva
        </div>
      </div>
    ),
    { ...size },
  );
}
