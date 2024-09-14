import styles from './todoItem.module.css';

export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(item) {
        console.log(`deleted ${item}`)
        setTodos(todos.filter((todo) => todo !== item));
    }

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>{item.name}
                <span>
                    <button className={styles.deleteBtn} onClick={() => handleDelete(item)}>x</button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    )
}