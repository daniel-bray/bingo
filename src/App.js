import { useState } from "react";
import Board from "./components/Board";
import { Button, Form } from "react-bootstrap";
import "./App.css";

function App() {
	const [quantity, setQuantity] = useState(0);
	const [boards, setBoards] = useState([]);

	const generateBoards = (event, quantity) => {
		event.preventDefault();
		const numArr = [];
		console.log("event", event);
		console.log(quantity);
		for (let i = 0; i < quantity; i++) {
			numArr.push(i);
		}
		setBoards(numArr);
	};

	return (
		<div className="App">
			<h1>Bingo Card Generator</h1>
			<Form className="container">
				<div className="row justify-content-md-center">
					<div className="col col-md-3 ">
						<Form.Group className="mb-3" controlId="quantity">
							<Form.Control
								type="number"
								onChange={(e) => setQuantity(e.target.value)}
								placeholder="How many cards?"
							/>
						</Form.Group>
						<Button
							variant="success"
							type="submit"
							onClick={(event) => generateBoards(event, quantity)}
						>
							Submit
						</Button>
					</div>
				</div>
			</Form>
			{boards.map((board) => {
				console.log(board);
				return <Board key={board} />;
			})}
		</div>
	);
}

export default App;
