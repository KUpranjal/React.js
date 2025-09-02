import React, { useState, useEffect } from "react";

// Shimmer skeleton loader styled for consistency
const Shimmer = () => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2rem",
    marginTop: "2rem"
  }}>
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i}
        style={{
          width: "100%",
          height: "110px",
          background: "linear-gradient(90deg, #e2e2e2 25%, #f6f6f6 37%, #e2e2e2 63%)",
          backgroundSize: "400% 400%",
          borderRadius: "13px",
          animation: "shimmer 1.2s infinite linear"
        }}>
        <style>
          {`
            @keyframes shimmer {
              0% { background-position: -468px 0;}
              100% { background-position: 468px 0;}
            }
          `}
        </style>
      </div>
    ))}
  </div>
);

const UsersWithShimmer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div style={{
      maxWidth: "1100px",
      margin: "2rem auto",
      fontFamily: "Segoe UI, Arial, sans-serif"
    }}>
      <h1 style={{
        textAlign: "center",
        color: "#174ea6",
        marginBottom: "2.5rem",
        letterSpacing: "1px",
        fontWeight: 700,
        fontSize: "2.4rem"
      }}>
        Users Directory
      </h1>
      {loading ? (
        <Shimmer />
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}>
          {users.map(user => (
            <div key={user.id} style={{
              background: "#fff",
              border: "1px solid #e1e7ef",
              borderRadius: "13px",
              boxShadow: "0 4px 18px rgba(40,70,120,0.07)",
              padding: "1.3rem 1.1rem",
              transition: "box-shadow 0.2s, transform 0.2s",
              minHeight: "125px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              position: "relative"
            }}>
              <div style={{
                fontWeight: "bold",
                color: "#174ea6",
                fontSize: "1.18rem",
                marginBottom: "0.55rem",
              }}>
                {user.name}
              </div>
              <div style={{
                color: "#476daa",
                fontSize: "0.97rem",
                marginBottom: "0.37rem",
                fontWeight: 500
              }}>
                <span style={{marginRight: "4px"}}>📧</span>
                {user.email}
              </div>
              <div style={{
                color: "#777",
                fontSize: "0.96rem",
                marginBottom: "0.28rem"
              }}>
                <span style={{marginRight: "6px"}}>🏙️</span>
                {user.address.city}
              </div>
              <div style={{
                color: "#28a745",
                fontSize: "0.95rem",
                fontWeight: 600
              }}>
                <span style={{marginRight: "3px"}}>🏢</span>
                {user.company.name}
              </div>
              <div style={{
                position: "absolute",
                top: "10px",
                right: "14px",
                fontSize: "0.89rem",
                color: "#c0c0c0"
              }}>
                @{user.username}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersWithShimmer;
