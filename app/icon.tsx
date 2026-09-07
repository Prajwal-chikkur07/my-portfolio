import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Wordmark favicon: teal plate, ivory "P", gold accent dot. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#10695c",
          borderRadius: 14,
          color: "#fbf8f1",
          fontSize: 42,
          fontWeight: 700,
          letterSpacing: -2,
          position: "relative",
        }}
      >
        P
        <div
          style={{
            position: "absolute",
            right: 12,
            bottom: 15,
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "#e5a01b",
          }}
        />
      </div>
    ),
    size,
  );
}
