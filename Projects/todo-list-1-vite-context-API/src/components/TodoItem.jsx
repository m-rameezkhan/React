import { useContext } from 'react';
import { TodoItemsContext } from '../store/TodoItemsContext';
import './todo.css';
import { MdDelete } from "react-icons/md";

function TodoItem({ todo, date}) {

    const { deleteItem } = useContext(TodoItemsContext)

    return (
        <div className="container text-center">
            <div className="row todoItem">
                <div className="col-6">
                    {todo}
                </div>
                <div className="col-4">
                    {date}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger" onClick={() => deleteItem(todo)}>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;