import { useState } from "react"

export default function Form({ todos, setTodos }) {

    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}