import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        background: "#b30000",
        padding: "25px 8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* LOGO + TEXT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: 30,
            letterSpacing: 1,
          }}
        >
          UKNARA
        </div>

        <img
          src="/photo/ikon-uknara.png"
          alt="Robot UKNARA"
          style={{
            width: 45,
            height: 45,
            objectFit: "contain",
          }}
        />
      </div>

      {/* MENU */}
      <div style={{ display: "flex", gap: 30, fontSize: 17 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link to="/help" style={{ color: "white", textDecoration: "none" }}>
          Help
        </Link>

        <Link to="/chat" style={{ color: "white", textDecoration: "none" }}>
          Chat
        </Link>
      </div>
    </div>
  );
}
