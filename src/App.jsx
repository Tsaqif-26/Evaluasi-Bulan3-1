import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

export default function App() {

  const [todos,setTodos] = useState([]);

  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos,newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const filteredTodo = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed; }
    if (filter === "completed") {
      return todo.completed; }

      return true;
  }
) 

      return (
        <div className="app-container">
          <div className="main-box">
          <h1>Todo-List</h1>

          <TodoForm onAdd = {addTodo}/>

          <TodoFilter filter = {filter} setFilter = {setFilter}/>

          <TodoList 
                    todos = {filteredTodo}
                    onDelete = {deleteTodo}
                    onToggle = {toggleTodo} />
            </div>
        </div>
      )
}
