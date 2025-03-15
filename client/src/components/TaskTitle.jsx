import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";

const TaskTitle = ({ label, color }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    //another way to deal with responsive size
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "2.5rem", // 10 in Tailwind
        maxHeight: "3rem", // 12 in Tailwind
        padding: "0 0.5rem", // px-2
        borderRadius: "0.375rem", // rounded
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <div
          style={{
            width: "1rem", 
            height: "1rem", 
            borderRadius: "50%",
            backgroundColor: color || "gray",
          }}
        />
        <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>{label}</p>
      </div>

      {isLargeScreen && (
        <button
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoMdAdd
            style={{
              fontSize: "1.125rem",
              color: "black", // Change color if needed
            }}
          />
        </button>
      )}
    </div>
  );
};

export default TaskTitle;
