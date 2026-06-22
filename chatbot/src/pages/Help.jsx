import React from "react";

export default function Help() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10%",
        boxSizing: "border-box",
      }}
    >
      {/* CONTAINER */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // 👈 bikin tetap center
          gap: 120, // 👈 jarak text & gambar
        }}
      >
        <div>
          <img
            src="/photo/logo-chat.png"
            alt="Robot UKNARA"
            style={{
              width: 320,
              height: 320,
              objectFit: "contain",
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(98%) saturate(5200%) hue-rotate(350deg) brightness(85%) contrast(110%)",
            }}
          />
        </div>
        {/* TEXT */}
        <div
          style={{
            maxWidth: "600px",
            fontSize: 20,
            lineHeight: 2,
          }}
        >
          <h2
            style={{
              fontSize: 34,
              marginBottom: 10,
            }}
          >
            Bantuan
          </h2>

          <p>Contoh pertanyaan yang bisa kamu tanyakan:</p>

          <div style={{ marginTop: 15 }}>
            <div>1. Apa itu UKM Taekwondo?</div>
            <div>2. Bagaimana cara daftar Adhyatmaka ?</div>
            <div>3. Dimana latihan voli?</div>
            <div>4. Kapan latihan basket?</div>
            <div>5. TEC punya visi apa?</div>
            <div>6. Ada berapa ukm di untar?</div>
          </div>
        </div>
      </div>
    </div>
  );
}
