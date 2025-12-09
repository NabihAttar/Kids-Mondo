"use client";

import React, { useRef, useState, useEffect } from "react";

const FloorCompare: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0.5); // 0 = left, 1 = right

  // Stop dragging when mouse/touch leaves window
  useEffect(() => {
    const stopDrag = () => setIsDragging(false);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);
    window.addEventListener("mouseleave", stopDrag);

    return () => {
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
      window.removeEventListener("mouseleave", stopDrag);
    };
  }, []);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    let nextPos = x / rect.width;

    if (nextPos < 0) nextPos = 0;
    if (nextPos > 1) nextPos = 1;

    setPosition(nextPos);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Click anywhere to move handle there
    updatePosition(e.clientX);
  };

  return (
    <div className="twentytwenty-wrapper">
      <div
        ref={containerRef}
        className="twentytwenty-container safeArea"
        style={{ height: 986, position: "relative", overflow: "hidden" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* BEFORE IMAGE = Ground Floor */}
        <a href="/Beirut/En/Ground-Floor" id="PHContent_rptrMaps_aMap_0">
          <img
            src="/img/illustrations/schools.jpg"
            id="PHContent_rptrMaps_imgMap_0"
            className="imgMap twentytwenty-before"
            alt="Ground Floor"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              clipPath: `inset(0 ${100 - position * 100}% 0 0)`, // dynamic mask from left to handle
            }}
          />
        </a>

        {/* AFTER IMAGE = First Floor */}
        <a href="/Beirut/En/First-Floor" id="PHContent_rptrMaps_aMap_1">
          <img
            src="/img/illustrations/events.jpg"
            id="PHContent_rptrMaps_imgMap_1"
            className="imgMap twentytwenty-after"
            alt="First Floor"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </a>

        {/* Overlay labels (optional) */}
        <div className="twentytwenty-overlay">
          <div className="twentytwenty-before-label" />
          <div className="twentytwenty-after-label" />
        </div>

        {/* Handle */}
        <div
          className="twentytwenty-handle"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${position * 100}%`,
            transform: "translateX(-50%)",
            cursor: "ew-resize",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <span className="twentytwenty-left-arrow" />
          <span className="twentytwenty-right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default FloorCompare;
