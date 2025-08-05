import './App.css'
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Box from "./components/Box";
import Wellcome from "./components/Wellcome";
import { useState } from 'react';
import { TodoItemsContext } from './store/TodoItemsContext';


function App() {
  let initialTodoItems = []

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (todoName, dueDate) => {
    const newTodoItem = {
      name: todoName,
      dueDate: dueDate
    };
    setTodoItems([...todoItems, newTodoItem]);
    console.log(`Todo Name: ${todoName} Due Date: ${dueDate}`);
  }

  const deleteItem = (itemName) => {
    const updatedItems = todoItems.filter(item => item.name !== itemName);
    setTodoItems(updatedItems);
  }

  return (
    <TodoItemsContext.Provider value={{
      items: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem
    }}>
    <Box>
      <AppName />
      <AddTodo/>
      <Wellcome/>
      <TodoItems/>
    </Box >
    </TodoItemsContext.Provider>
  )
}

export default App
