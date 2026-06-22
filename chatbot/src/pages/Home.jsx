import React from "react";
import { useNavigate } from "react-router-dom";
import bannerUKM from "../assets/grid ukm.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "0 8%",
            position: "relative",
            zIndex: 2,
            background: "#f5f5f5",
          }}
        >
          <div style={{ maxWidth: "520px" }}>
            {/* TITLE */}
            <h1
              style={{
                color: "#b30000",
                fontSize: 60,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              UKNARA
            </h1>

            {/* SUBTITLE */}
            <h2
              style={{
                fontSize: 30,
                marginTop: 0,
                marginBottom: 20,
                color: "#111",
                fontWeight: "bold",
                lineHeight: 1.3,
              }}
            >
              UKM Navigation Assistant Tarumanagara
            </h2>

            {/* DESCRIPTION */}
            <p
              style={{
                color: "#444",
                lineHeight: 1.8,
                fontSize: 17,
                marginBottom: 35,
              }}
            >
              UKNARA adalah platform chatbot yang membantu mahasiswa
              mendapatkan informasi mengenai Unit Kegiatan Mahasiswa
              secara cepat, interaktif, dan mudah digunakan.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/chat")}
              style={{
                background: "#b30000",
                color: "white",
                border: "none",
                padding: "14px 28px",
                borderRadius: 999,
                fontSize: 16,
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              Mulai Chat →
            </button>
          </div>
        </div>

        {/* RIGHT BANNER */}
        <div
          style={{
            flex: 1.3,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={bannerUKM}
            alt="Banner UKM"
            style={{
              width: "100%",
              height: "95%",
              display: "block",
              position: "relative",
              top:"-40px"
            }}
          />

          {/* OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(245,245,245,0.9) 0%, rgba(245,245,245,0.1) 40%, rgba(0,0,0,0.1) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}