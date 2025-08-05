import './todo.css';
import { MdDelete } from "react-icons/md";

function TodoItem({ todo, date, onDelete }) {
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
                    <button type="button" className="btn btn-danger" onClick={() => onDelete(todo)}>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;