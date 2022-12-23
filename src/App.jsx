import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { BsMoonFill } from "react-icons/bs";
import Card from "./Components/CardComponent";
import {
	avatarlogo,
	poster,
	cast01,
	cast02,
	cast03,
	cast04,
	cast05,
	cast06,
	poster02,
} from "./assets";
import "./App.scss";

const info = `Jake Sully & Ney'tiri have formed a family and are doing everything
						to stay together. However, they must leave their home and explore
						the regions of Pandora.`;
function App() {
	const [isSwitch, setIsSwitch] = useState(true);
	return (
		<div className={`App ${isSwitch ? "light" : ""}`}>
			<div className="title">
				<h2>Movie Card: Hover or Click(Mobile)</h2>
			</div>
			<div className="themer">
				<div className="switch">
					<div
						className={`indicator ${isSwitch ? "right" : ""}`}
						onClick={() => setIsSwitch((prev) => !prev)}
					>
						{isSwitch ? <CiLight /> : <BsMoonFill />}
					</div>
				</div>
			</div>
			<div className="cards">
				{["a", "b", "c", "d"].map((_, i) => (
					<Card
						key={i + 1}
						avatarlogo={avatarlogo}
						posterImg={isSwitch ? poster02 : poster}
						director={"James Cameron"}
						tag01={"sci-fi"}
						tag02={"Action"}
						tag03={"Drama"}
						cast01={cast01}
						cast02={cast02}
						cast03={cast03}
						cast04={cast04}
						cast05={cast05}
						cast06={cast06}
						info={info}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
