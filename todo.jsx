import React, { useState } from "react";

//create your first component
const Todo = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div>
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						name="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								console.log("Enter was pressed");
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="what do you need to do?"></input>
				</li>
				{todos.map((item, index) => (
					<li>
						{item}{" "}
						<i
							className="fas fa-trash"
							onClick={() =>
								setTodos(
									todos.filter(
										(t, currentIndex) =>
											index != currentIndex
									)
								)
							}></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Todo;
