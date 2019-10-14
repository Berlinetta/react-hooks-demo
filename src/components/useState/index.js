import React, { useState } from "react";

export default function YourFunctionComponent() {
    const [valid, setValid] = useState(true);
    const [age, setAge] = useState(18);
    const [fruit, setFruit] = useState("apple");
    const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
    return (
        <div>
            <button onClick={() => setValid(!valid)}>Toggle Valid</button>
            <button onClick={() => setAge(age++)}>Add Age</button>
            <button onClick={() => setFruit(fruit)}>Set Fruit</button>
            <button onClick={() => setTodos(todos)}>Set Todos</button>
        </div>
    );
}








