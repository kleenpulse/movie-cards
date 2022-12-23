import ScrollContainer from "react-indiana-drag-scroll";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./style.scss";

export default function Card({
	posterImg,
	director,
	tag01,
	tag02,
	tag03,
	info,
	cast01,
	cast02,
	cast03,
	cast04,
	cast05,
	cast06,
	avatarlogo,
}) {
	return (
		<div className="card">
			<div className="poster">
				<img src={posterImg} alt="poster" />
			</div>
			<div className="details">
				<img className="logo" src={avatarlogo} alt="way of the water" />
				<h3>Directed by {director !== undefined ? director : "director"}</h3>
				<div className="rating">
					<AiFillStar className="solid star" />
					<AiFillStar className="solid star" />
					<AiFillStar className="solid star" />
					<AiFillStar className="solid star" />
					<AiOutlineStar className="outline star" />
					<span>4/5</span>
				</div>
				<div className="tags">
					<span className="sci">{tag01 !== undefined ? tag01 : "sci-fi"}</span>
					<span className="action">
						{tag02 !== undefined ? tag02 : "Action"}
					</span>
					<span className="drama">{tag03 !== undefined ? tag03 : "Drama"}</span>
				</div>
				<div className="info">
					<p>{info}</p>
				</div>
				<div className="cast">
					<p>Cast</p>
					<ScrollContainer className="images" horizontal={true}>
						<img src={cast01} alt="cast" />
						<img src={cast02} alt="cast" />
						<img src={cast03} alt="cast" />
						<img src={cast04} alt="cast" />
						<img src={cast05} alt="cast" />
						<img src={cast06} alt="cast" />
					</ScrollContainer>
				</div>
			</div>
		</div>
	);
}
