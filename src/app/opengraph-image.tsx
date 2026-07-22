import { ImageResponse } from "next/og";

export const alt = "Kevin T. McClain — The River Witches Trilogy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background:
            "radial-gradient(circle at 50% 30%, #0e1a2b 0%, #060b14 55%, #030509 100%)",
          color: "#f2ece1",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(201,168,106,0) 0%, rgba(201,168,106,0.08) 50%, rgba(201,168,106,0) 100%)",
          }}
        />
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: "#c9a86a",
            textTransform: "uppercase",
            marginBottom: 24,
            display: "flex",
          }}
        >
          The River Witches Trilogy
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            display: "flex",
            marginBottom: 20,
          }}
        >
          Kevin T. McClain
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#7d93a8",
            display: "flex",
          }}
        >
          Where History, Magic, and Danger Collide
        </div>
      </div>
    ),
    { ...size }
  );
}
