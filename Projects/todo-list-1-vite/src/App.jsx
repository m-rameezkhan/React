import './App.css'
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Box from "./components/Box";
import Wellcome from "./components/Wellcome";
import { useState } from 'react';


function App() {
  let initialTodoItems = []

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (todoName, dueDate) => {
    const newTodoItem = {
      name: todoName,
      dueDate: dueDate
    };
    setTodoItems([...todoItems, newTodoItem]);
    console.log(`Todo Name: ${todoName} Due Date: ${dueDate}`);
  }

  const handleDelete = (itemName) => {
    const updatedItems = todoItems.filter(item => item.name !== itemName);
    setTodoItems(updatedItems);
  }

  return (
    <Box>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      { todoItems.length === 0 && <Wellcome/> }
      <TodoItems items={todoItems} onDelete={handleDelete} />
    </Box >
  )
}

export default App
