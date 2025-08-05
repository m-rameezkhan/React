import TodoItem from "./TodoItem";

const TodoItems = ({ items, onDelete }) => {
    return (
        <>
            {items.map((item, index) => (
                <TodoItem
                    key={index}
                    todo={item.name}
                    date={item.dueDate}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
};

export default TodoItems;
