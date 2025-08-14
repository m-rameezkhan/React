import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
    items: [],
    addNewItem: () => { },
    deleteItem: () => { }
})

const todoItemsReducer = (currentTodoItems, action) => {
    let newTodoItems = currentTodoItems
    if (action.type === 'NEW_ITEM') {
        newTodoItems = [
            ...currentTodoItems, {
                name: action.payload.todoName,
                dueDate: action.payload.dueDate
            }
        ]
    } else if (action.type === 'DELETE_ITEM') {
        newTodoItems = currentTodoItems.filter(item => item.name !== action.payload.todoName);
    }
    return newTodoItems
}

const TodoItemsContextProvider = ({ children }) => {

    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

    const addNewItem = (todoName, dueDate) => {
        const newItemAction = {
            type: 'NEW_ITEM',
            payload: {
                todoName,
                dueDate
            }
        }
        dispatchTodoItems(newItemAction)
    }

    const deleteItem = (itemName) => {
        const deleteItemAction = {
            type: 'DELETE_ITEM',
            payload: {
                todoName: itemName,
            }
        }
        dispatchTodoItems(deleteItemAction)
    }
    return (
        <TodoItemsContext.Provider value={{
            items: todoItems,
            addNewItem: addNewItem,
            deleteItem: deleteItem
        }}>
            {children}
        </TodoItemsContext.Provider>
    )
}

export default TodoItemsContextProvider;