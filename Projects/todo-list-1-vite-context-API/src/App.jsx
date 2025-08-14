import './App.css'
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Box from "./components/Box";
import Wellcome from "./components/Wellcome";
import TodoItemsContextProvider, { TodoItemsContext } from './store/TodoItemsContext';

function App() {

  return (
    <TodoItemsContextProvider>
      <Box>
        <AppName />
        <AddTodo />
        <Wellcome />
        <TodoItems />
      </Box >
    </TodoItemsContextProvider>
  )
}

export default App
