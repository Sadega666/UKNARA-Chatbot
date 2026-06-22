import React from "react";

export default function About() {

  const imageContainerStyle = {
    width: 220,
    height: 220,
    overflow: "hidden",
    borderRadius: 8,
    flexShrink: 0,
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "25px 15%",
        boxSizing: "border-box",
      }}
    >
      {/* Saya*/}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 40,
          maxWidth: "1200px",
          marginBottom: 60,
        }}
      >
        {/* Foto */}
        <div style={imageContainerStyle}>
          <img
            src="/photo/adit.jpeg"
            alt="Foto adit"
            style={imageStyle}
          />
        </div>

        {/* Teks */}
        <div>
          <p
            style={{
              background: "#b30000",
              color: "white",
              padding: "12px 16px",
              borderRadius: 8,
              display: "inline-block",
              lineHeight: 1.6,
              fontSize: 16,
            }}
          >
            Halo, saya Aditya Ardiansyah, developer di balik UKNARA Chatbot. 
            Saya mengembangkan platform ini untuk menciptakan solusi komunikasi 
            yang efisien dan responsif bagi seluruh mahasiswa.
          </p>
        </div>
      </div>

      {/* Dosen Pembimbing*/}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
          maxWidth: "1200px",
        }}
      >
        {/* Teks */}
        <div>
          <p
            style={{
              background: "#b30000",
              color: "white",
              padding: "12px 16px",
              borderRadius: 8,
              display: "inline-block",
              lineHeight: 1.6,
              fontSize: 16,
            }}
          >
            Halo, saya Tri Sutrisno S.SI., M.Sc, Dosen Pembimbing dalam pengembangan UKNARA Chatbot. 
            Peran saya adalah memastikan riset ini berjalan secara sistematis guna 
            menghasilkan inovasi teknologi yang bermanfaat bagi lingkungan akademis dan organisasi.
          </p>
        </div>

        {/* Foto */}
        <div style={imageContainerStyle}>
          <img
            src="/photo/pak-tri.jpeg"
            alt="Penyanyi"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}