import React, { useState, useEffect } from "react";

export const OpacidadBoton = ({
  color,
  initialOpacidad,
  opacidadActiva,
  cambiarOpacidad,
}) => {
  const [opacidad, setOpacidad] = useState(initialOpacidad);

  useEffect(() => {
    if (color === opacidadActiva) {
      setOpacidad(1);
    } else {
      setOpacidad(0.4);
    }
  }, [opacidadActiva, color]);

  const handleClick = () => {
    cambiarOpacidad(color);
  };

  return (
    <div>
      <button
        className={color}
        style={{ opacity: opacidad, transition: "opacity 0.5s" }}
        onClick={handleClick}
      ></button>
    </div>
  );
};
