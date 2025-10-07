
export default function TodoItem({todo,onDelete,onToggle}) {
    return (
        <li>
            <input type="checkbox"
                   checked = {todo.completed}
                   onChange={() => {onToggle(todo.id)}} />

            <span style={{textDecoration: todo.completed ? "line-through" : ""}}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Hapus</button>
        </li>
    )
}