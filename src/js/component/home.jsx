import React, {useState} from "react";
import style from "./home.module.css"

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("");

	const  trafficLight = (color) => {
		setColor(color)
	}

	return (
		<div className="mt-4 p-5 text-white rounded">
			<div className={style.header}>
				<div className="stick bg-dark mb-5 rounded">
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<div className="d-flex-column justify-content-center align-items-center mt-4 p-2 bg-dark text-white shadow-lg rounded">
						<div onMouseOver={() => trafficLight("red")} onMouseOut={() => trafficLight("none")} className={color === "red" ? style.lightOnRed : style.lightOffRed}></div>
						<div onMouseOver={() => trafficLight("yellow")} onMouseOut={() => trafficLight("none")} className={color === "yellow" ? style.lightOnYellow : style.lightOffYellow}></div>
						<div onMouseOver={() => trafficLight("green")} onMouseOut={() => trafficLight("none")} className={color === "green" ? style.lightOnGreen : style.lightOffGreen}></div>
					</div>
				</div>
			</div>
		</div>	
	);
};

export default Home;
