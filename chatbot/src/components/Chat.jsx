import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RASA_URL =
  import.meta.env.VITE_RASA_URL ||
  "http://localhost:5005/webhooks/rest/webhook";

function getSenderId() {
  let id = localStorage.getItem("rasa_sender_id");

  if (!id) {
    id =
      "user_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);

    localStorage.setItem("rasa_sender_id", id);
  }

  return id;
}

export default function Chat() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      from: "bot",
      type: "text",
      text: "Halo! Selamat Datang di UKNARA! 🤖 Saya siap membantu Anda mendapatkan informasi seputar UKM Universitas Tarumanagara, mulai dari profil UKM, kegiatan, manfaat, hingga cara pendaftaran. Silakan ajukan pertanyaan Anda!"
    },
  ]);

  const [input, setInput] = useState("");

  const sender = useRef(getSenderId());
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendToRasa(messageText) {
    const payload = {
      sender: sender.current,
      message: messageText,
    };

    try {
      const res = await fetch(RASA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      const botMessages = data.map((item) => ({
        from: "bot",
        type: "text",
        text: item.text,
      }));

      setMessages((m) => [...m, ...botMessages]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          type: "text",
          text: "Server error ❌",
        },
      ]);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMsg = {
      from: "user",
      type: "text",
      text: input,
    };

    setMessages((m) => [...m, userMsg]);

    await sendToRasa(input);

    setInput("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 🔴 HEADER */}
      <div
        style={{
          background: "#b30000",
          color: "white",
          padding: "20px 30px",
          fontSize: 20,
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* ⬅ BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          style={{
            border: "none",
            background: "transparent",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          ← Home
        </button>

        {/* UKNARA + LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          
        >
                    <img
            src="/photo/ikon-uknara.png"
            alt="Robot UKNARA"
            style={{
              width: 40,
              height: 40,
              objectFit: "contain",
            }}
          />
          <div 
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            UKNARA
          </div>


        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 30,
        }}
      >
        <div
          style={{
            width: "900px",
            height: "80vh",
            background: "white",
            borderRadius: 12,
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* CHAT AREA */}
          <div
            style={{
              flex: 1,
              padding: 20,
              overflowY: "auto",
              background: "#fafafa",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.from === "user" ? "flex-end" : "flex-start",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    background: msg.from === "user" ? "#b30000" : "#e0e0e0",

                    color: msg.from === "user" ? "white" : "black",

                    padding: "10px 14px",
                    borderRadius: 12,
                    maxWidth: "70%",
                    lineHeight: 1.5,
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div ref={scrollRef} />
          </div>

          {/* INPUT */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              padding: 15,
              borderTop: "1px solid #eee",
              background: "white",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya tentang UKM..."
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />

            <button
              type="submit"
              style={{
                marginLeft: 10,
                padding: "10px 18px",
                background: "#b30000",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
