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
          color="red"
          initialOpacidad={0.4}
          opacidadActiva={opacidadActiva}
          cambiarOpacidad={cambiarOpacidad}
        />
        <OpacidadBoton
          color="yellow"
          initialOpacidad={0.4}
          opacidadActiva={opacidadActiva}
          cambiarOpacidad={cambiarOpacidad}
        />
        <OpacidadBoton
          color="green"
          initialOpacidad={0.4}
          opacidadActiva={opacidadActiva}
          cambiarOpacidad={cambiarOpacidad}
        />
      </div>
    </div>
  );
};

export default Home;

