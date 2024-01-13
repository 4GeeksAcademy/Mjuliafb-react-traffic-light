import React, { useState } from "react";
import { OpacidadBoton } from "./Boton";

const Home = () => {
  const [opacidadActiva, setOpacidadActiva] = useState(null);

  const cambiarOpacidad = (color) => {
    setOpacidadActiva(color);
  };

  return (
    <div className="container text-center">
      <div className="palito"></div>
      <div className="backButton">
        <OpacidadBoton
          color="yellow"
          initialOpacidad={0.4}
          opacidadActiva={opacidadActiva}
          cambiarOpacidad={cambiarOpacidad}
        />
        <OpacidadBoton
          color="blue"
          initialOpacidad={0.4}
          opacidadActiva={opacidadActiva}
          cambiarOpacidad={cambiarOpacidad}
        />
        <OpacidadBoton
          color="red"
          initialOpacidad={0.4}
          opacidadActiva={opacidadActiva}
          cambiarOpacidad={cambiarOpacidad}
        />
      </div>
    </div>
  );
};

export default Home;

