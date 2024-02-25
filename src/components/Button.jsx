import React from "react";

const Button = ({ handleSave }) => {
  const buttonStyle = {
    padding: "8px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#fff",
    background: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const handleSaveInternal = () => {
    handleSave();
  };

  return (
    <button style={buttonStyle} onClick={handleSaveInternal}>
      Save
    </button>
  );
};

export default Button;
