import { randomNumber } from "../scripts/randomNumber";
import Box from "./BoxComponent";
function Column(props) {
	const { min } = props;

	const numArray = [];

	while (numArray.length < 5) {
		let number = randomNumber(min, 15);
		if (!numArray.includes(number)) {
			numArray.push(number);
		}
	}
	return (
		<div>
			<Box letter={numArray[0]} />
			<Box letter={numArray[1]} />
			{props.position === 2 ? (
				<Box letter={"FREE"} />
			) : (
				<Box letter={numArray[2]} />
			)}
			<Box letter={numArray[3]} />
			<Box letter={numArray[4]} />
		</div>
	);
}

export default Column;
