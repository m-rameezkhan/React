import './App.css'
import React from 'react'
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <React.Fragment>
      <AppName />
      <AddTodo />
      <TodoItem todo="Buy new Car" date="12/07/2026" />
      <TodoItem todo="Buy new Laptop" date="11/05/2026" />
      <TodoItem todo="Sell old Car" date="11/05/2027" />
      <TodoItem todo="Sell old Laptop" date="11/05/2027" />
    </React.Fragment>
  )
}

export default App
