import Box from "./BoxComponent";
import Column from "./ColumnComponent";
const Board = () => (
	<div className="container box printing">
		<div>
			<Box letter={"B"} />
			<Column position={0} min={1} />
		</div>
		<div>
			<Box letter={"I"} />
			<Column position={1} min={16} />
		</div>
		<div>
			<Box letter={"N"} />
			<Column position={2} min={31} />
		</div>
		<div>
			<Box letter={"G"} />
			<Column position={3} min={46} />
		</div>
		<div>
			<Box letter={"O"} />
			<Column position={4} min={61} />
		</div>
	</div>
	// </div>
);

export default Board;
