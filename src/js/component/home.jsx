import React, { useState } from "react";
import { OpacidadBoton } from "./Boton";

const Home = () => {
  return (
    <div className="container text-center">
	  <div className="palito"></div>
	  <div className="backButton">
      <OpacidadBoton color="yellow" initialOpacidad={0.4} />
      <OpacidadBoton color="blue" initialOpacidad={0.4} />
      <OpacidadBoton color="red" initialOpacidad={0.4} />
    </div>
	</div>
  );
};

export default Home;

