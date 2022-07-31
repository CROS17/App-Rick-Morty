import { useState,useEffect } from "react";

export default function Welcome(props){
	// console.log(props);
	const [counter, setCounter] = useState(0)
	const [semaforo, setSemaforo] = useState(false);
	const { name, platillo } = props;


	useEffect(() => {
		return () => {
			console.log(semaforo);
		};
	}, [semaforo]);

	const disminuir = () => {
		setCounter(counter-1);
		setSemaforo(!semaforo);
	}

	const aumentar = () => {
		setCounter(counter+1);
		setSemaforo(!semaforo);
	}

	return (		
		<div>
			<h1>Bienvenido {name}</h1>
			<h2>{ platillo }</h2>
			<h4>Cuantos Atun Comi: {counter}</h4>
			<button type="submit" onClick={disminuir}>
				Devolver Atun
			</button>
			<br/>
			<button type="submit" onClick={aumentar}>
				Comer Atun
			</button>
		</div>
	);
}