import React, { useState, useEffect } from "react";

const Extra = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);   
      setLoading(false);            
    }
    getData();
  }, []);

  return (
    <div style={{
      maxWidth: "900px",
      margin: "2rem auto",
      fontFamily: "sans-serif",
    }}>
      <h1 style={{
        textAlign: "center",
        color: "#222",
        marginBottom: "2rem",
      }}>Product</h1>
      {loading ? (
        <div style={{ textAlign: "center", color: "#0a8" }}>Loading...</div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "2rem",
        }}>
          {products.map(product => (
            <div key={product.id}
              style={{
                border: "1px solid #eee",
                borderRadius: "10px",
                padding: "1.25rem",
                background: "#fafafc",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}>
              <img src={product.thumbnail} alt={product.title}
                style={{
                  display: "block",
                  margin: "0 auto 0.5rem",
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  borderRadius: "6px",
                }}
              />
              <h3 style={{
                margin: "0.5rem 0 0.25rem",
                fontWeight: "600",
              }}>{product.title}</h3>
              <p style={{
                fontSize: "0.95rem",
                color: "#555",
                minHeight: "50px",
              }}>{product.description}</p>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "0.7rem",
              }}>
                <span style={{ color: "#c10", fontWeight: "bold" }}>
                 ₹ {product.price}
                </span>
                <span style={{
                  background: "#e1faee",
                  color: "#102",
                  padding: "4px 8px",
                  borderRadius: "5px",
                  fontSize: "0.92rem",
                }}>⭐ {product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Extra;
