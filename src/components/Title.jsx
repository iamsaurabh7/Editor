import React from "react";

export const Title = () => {
  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    background: "#f0f0f0",
    padding: "5px",
    marginBottom: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return <div style={titleStyle}>Editor by Saurabh Verma</div>;
};
