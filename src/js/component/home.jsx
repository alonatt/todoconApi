import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listatareas, setListaTareas] = useState([]);

	useEffect(() => {
		console.log(listatareas);
	}, [listatareas]);

	// funcion que valida que el campo tarea no este vacio y vaya llenanod el arreglo lista tareas
	const validatetareas = () => {
		// === COMPARACIÓN ESTRICTA
		if (tarea === "") {
			console.log("El campo tarea no debe estar vacio");
		} else {
			console.log("perfect!");
		}
	};

	return (
		<>
			<div className="text-center mt-5 mx-5">
				<h1>TO DO LIST</h1>
				<p></p>
				<a href="#" className="btn btn-success">
					@alonatt{" "}
				</a>
				<p>Pendientes</p>
				<div className="partedelinput">
					<input
						type="text"
						onChange={(e) => setTarea(e.target.value)}
						placeholder="tareas pendientes"
					/>
					<div>
						<button
							className="btn btn-success"
							onClick={() => {
								setListaTareas([...listatareas, tarea]);
								console.log(listatareas);
							}}>
							<i className="fas fa-chevron-circle-down"></i>
						</button>
					</div>
				</div>
				<div>
					{listatareas.map((valor, posicion) => {
						return (
							<div
								key={posicion}
								className="alert alert-info"
								role="alert">
								{valor}
								<button
									className="btn btn-light"
									type="button"
									onClick={() => {
										const listaNueva = listatareas.filter(
											(key) => key !== valor
										);
										setListaTareas(listaNueva);
										console.log(listaNueva);
										console.log("hola");
										//console.log(entrada)
									}}>
									<i className="fas fa-trash-alt"></i>
								</button>
							</div>
						);
					})}
				</div>{" "}
			</div>
		</>
	);
};
export default Home;
