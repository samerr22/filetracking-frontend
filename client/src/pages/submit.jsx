import React, { useState, useRef } from "react";

export default function DragFlipCard() {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState(0); // 0 to 180 degrees
  const startX = useRef(0);
  const dragging = useRef(false);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const onPointerDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
    cardRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;

    const deltaX = e.clientX - startX.current;
    // Map deltaX to rotation angle:
    // Dragging right (positive deltaX) → rotate towards 0
    // Dragging left (negative deltaX) → rotate towards 180

    // Adjust sensitivity:
    const sensitivity = 1.5; // pixels per degree

    let newRotation = clamp(
      rotation - deltaX / sensitivity,
      0,
      180
    );

    setRotation(newRotation);

    // Reset startX for smooth dragging
    startX.current = e.clientX;
  };

  const onPointerUp = (e) => {
    dragging.current = false;
    cardRef.current.releasePointerCapture(e.pointerId);

    // Snap rotation to nearest side (0 or 180)
    if (rotation > 90) {
      setRotation(180);
    } else {
      setRotation(0);
    }
  };

  return (
    <div
      ref={cardRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp} // in case pointer leaves while dragging
      style={{
        width: 320,
        height: 180,
        perspective: 1000,
        cursor: "grab",
        userSelect: "none",
        margin: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transition: dragging.current ? "none" : "transform 0.3s",
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation}deg)`,
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            borderRadius: 8,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
            backfaceVisibility: "hidden",
          }}
        >
          <label
            style={{ marginBottom: 8, fontWeight: "600" }}
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            style={{
              border: "1px solid #d1d5db",
              borderRadius: 6,
              padding: "8px 16px",
              width: "100%",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            borderRadius: 8,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <label
            style={{ marginBottom: 8, fontWeight: "600" }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            style={{
              border: "1px solid #d1d5db",
              borderRadius: 6,
              padding: "8px 16px",
              width: "100%",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>
    </div>
  );
}
