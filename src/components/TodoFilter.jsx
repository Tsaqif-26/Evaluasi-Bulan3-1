
export default function TodoFilter({filter,setFilter}) {
    return (
        <div className="todo-filter">
            <button onClick={() => setFilter("all")}>
                Semua {filter === "all" ? "✅" : ""}
            </button>

            <button onClick={() => setFilter("active")}>
                Belum Dikerjakan {filter === "active" ? "✅" : ""}
            </button>

            <button onClick={() => setFilter("completed")}>
                Udah Selesai {filter === "completed" ? "✅" : ""}
            </button>

        </div>
    )
}