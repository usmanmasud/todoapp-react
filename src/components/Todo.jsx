import { useState } from "react"

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {todos.map(item => <h3>{item}</h3>)}
        </div>
    )
}