import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Box = (props) => {
	const { letter } = props;
	return (
		<Card
			className="justify-content-center align-items-center border-5 border-dark rounded-0"
			style={{
				width: "15rem",
				height: "15rem",
				fontSize: "9rem",
			}}
		>
			{letter === "FREE" ? <FontAwesomeIcon icon={faStar} /> : letter}
		</Card>
	);
};

export default Box;
