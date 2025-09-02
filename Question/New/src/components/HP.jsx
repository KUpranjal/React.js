import React, { useState, useEffect } from "react";

const HP = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await res.json();
      setCharacters(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#222",
          marginBottom: "2rem",
        }}
      >
        Harry Potter Characters
      </h1>
      {loading ? (
        <div style={{ textAlign: "center", color: "#0a8" }}>Loading...</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
          }}
        >
          {characters.map((char) => (
            <div
              key={char.id}
              style={{
                border: "1px solid #eee",
                borderRadius: "10px",
                padding: "1.25rem",
                background: "#fafafc",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <img
                src={char.image}
                alt={char.name}
                style={{
                  display: "block",
                  margin: "0 auto 0.5rem",
                  width: "120px",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3
                style={{
                  margin: "0.5rem 0 0.25rem",
                  fontWeight: "600",
                }}
              >
                {char.name}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  minHeight: "60px",
                  margin: "0.25rem 0",
                }}
              >
                House: {char.house || "Unknown"}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#777",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                Actor: {char.actor || "Unknown"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HP;
