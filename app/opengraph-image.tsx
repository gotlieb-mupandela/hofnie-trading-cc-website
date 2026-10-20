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
          background: "#000000",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 8 }}>HOFNIE</div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.02,
            letterSpacing: -1,
            maxWidth: 900,
            fontWeight: 400,
          }}
        >
          Construction and renovation in Windhoek and northern Namibia
        </div>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 2 }}>
          Windhoek, Ondangwa, Oshakati, Ongwediva
        </div>
      </div>
    ),
    { ...size },
  );
}
