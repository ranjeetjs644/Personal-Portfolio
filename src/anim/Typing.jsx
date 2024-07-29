import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Typing({ strings }) {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 200,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <div className="typed-container">
      <span ref={typedTextRef}></span>
    </div>
  );
}

export default Typing;
