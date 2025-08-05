import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import TodoItem from "./TodoItem";


const TodoItems = () => {
    
    const {items} = useContext(TodoItemsContext)

    return (
        <>
            {items.map((item, index) => (
                <TodoItem
                    key={index}
                    todo={item.name}
                    date={item.dueDate}
                />
            ))}
        </>
    );
};

export default TodoItems;
