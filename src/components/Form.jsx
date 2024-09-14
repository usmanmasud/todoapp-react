import { useState } from "react"
import styles from './form.module.css'

export default function Form({ todos, setTodos }) {

    const [todo, setTodo] = useState({ name: '', done: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ name: '', done: false })
    }

    return (
        <form onSubmit={handleSubmit} className={styles.todoform}>
            <div className={styles.formflex}>
                <input placeholder="Enter todo..." className={styles.modernInput} type="text" value={todo.name} onChange={(e) => setTodo({ name: e.target.value, done: false })} />
                <button type="submit" className={styles.modernBtn} >Submit</button>
            </div>
        </form >
    )
}