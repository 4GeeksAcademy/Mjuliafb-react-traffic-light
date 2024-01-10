import React, { useState } from "react";

const Home = () => {

	const OpacidadBoton = () => {
		const [opacidadBoton, setOpacidadBoton] = useState(0.4);
		const [opacidadBoton2, setOpacidadBoton2] = useState(0.4);
		const [opacidadBoton3, setOpacidadBoton3] = useState(0.4);

		const cambiarOpacidad = () => {
			setOpacidadBoton(opacidadBoton === 0.4 ? 1 : 0.4);
		};

		const cambiarOpacidad2 = () => {
			setOpacidadBoton2(opacidadBoton2 === 0.4 ? 1 : 0.4);
		};

		const cambiarOpacidad3 = () => {
			setOpacidadBoton3(opacidadBoton3 === 0.4 ? 1 : 0.4);
		};

		return (
			<div className="container text-center">
				<div className="palito"></div>
				<div className="backButton">
					<button
						className="yellow"
						style={{ opacity: opacidadBoton, transition: "opacity 0.5s" }}
						onClick={cambiarOpacidad}
					></button>
				</div>
				<div className="backButton">
					<button
						className="blue"
						style={{ opacity: opacidadBoton2, transition: "opacity 0.5s" }}
						onClick={cambiarOpacidad2}
					></button>
				</div>
				<div className="backButton">
					<button
						className="red"
						style={{ opacity: opacidadBoton3, transition: "opacity 0.5s" }}
						onClick={cambiarOpacidad3}
					></button>
				</div>
			</div>
		);
	};

	return <OpacidadBoton />;
};

export default Home;
