import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Prajwal Chikkur — Software Engineer building scalable backend and AI systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const portrait = readFileSync(
    join(process.cwd(), "public", "prajwal-hero.png"),
  ).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbf8f1",
          color: "#14293a",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 70% at 82% 22%, rgba(47,147,130,0.16), transparent 62%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 6,
                color: "#10695c",
                fontWeight: 600,
              }}
            >
              HELLO, I&apos;M
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 86,
                fontWeight: 700,
                letterSpacing: -3,
                lineHeight: 1,
              }}
            >
              Prajwal Chikkur.
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 86,
                fontWeight: 700,
                letterSpacing: -3,
                lineHeight: 1,
                color: "#e5a01b",
              }}
            >
              Software Engineer.
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 27,
                color: "#5a7183",
                maxWidth: 620,
                lineHeight: 1.4,
              }}
            >
              Scalable backend systems, Generative AI applications and
              automation platforms.
            </div>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            {["Python", "FastAPI", "PostgreSQL", "Celery", "AWS", "GenAI"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    border: "1px solid rgba(20,41,58,0.14)",
                    borderRadius: 999,
                    padding: "9px 20px",
                    fontSize: 21,
                    color: "#2d4657",
                    background: "rgba(255,255,255,0.7)",
                  }}
                >
                  {tag}
                </div>
              ),
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 340,
              height: 340,
              borderRadius: 999,
              overflow: "hidden",
              background: "#fcfbf9",
              border: "3px solid rgba(229,160,27,0.65)",
            }}
          >
            <img
              src={`data:image/png;base64,${portrait}`}
              alt=""
              width={340}
              height={340}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
