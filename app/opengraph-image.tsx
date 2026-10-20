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
          background: "#f4f1eb",
          color: "#1a1917",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4 }}>
          HOFNIE TRADING CC
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.02,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Construction and renovation in Windhoek and northern Namibia
        </div>
        <div style={{ display: "flex", fontSize: 26 }}>
          Windhoek, Ondangwa, Oshakati, Ongwediva
        </div>
      </div>
    ),
    { ...size },
  );
}
