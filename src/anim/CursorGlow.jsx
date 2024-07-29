import React, { useRef, useEffect } from "react";

const CursorGlow = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`; // Use clientY for viewport-relative positioning
        cursorRef.current.style.left = `${e.clientX}px`; // Use clientX for viewport-relative positioning
      }
    };

    // Add event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-glow"
    />
  );
};

export default CursorGlow;
