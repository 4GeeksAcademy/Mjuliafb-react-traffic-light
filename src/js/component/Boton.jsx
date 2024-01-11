import React, { useState } from "react";

export const OpacidadBoton = ({ color, initialOpacidad }) => {
    const [opacidad, setOpacidad] = useState(initialOpacidad);
  
    const cambiarOpacidad = () => {
      setOpacidad((opacidad) => (opacidad === 0.4 ? 1 : 0.4));
    };
  
    return (
      <div>
        <button
          className={color}
          style={{ opacity: opacidad, transition: "opacity 0.5s" }}
          onClick={cambiarOpacidad}
        ></button>
      </div>
    );
  };