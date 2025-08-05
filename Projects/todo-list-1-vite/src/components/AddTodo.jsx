import { useState, useRef } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import './todo.css';

function AddTodo({ onNewItem }) {

    // const [todoName, setTodoName] = useState("");
    // const [dueDate, setDueDate] = useState("");

    const todoNameElement = useRef()
    const dueDateElement = useRef()

    // const handleOnNameChange = (event) => {
    //     setTodoName(event.target.value);
    //     console.log(event.target.value)
    // }
    // const handleOnDateChange = (event) => {
    //     setDueDate(event.target.value);
    // }

    const handleOnAddButton = (event) => {
        event.preventDefault();
        
        let todoName = todoNameElement.current.value
        let dueDate = dueDateElement.current.value

        if (todoName.trim() === "" || dueDate.trim() === "") {
            alert("Please enter both todo name and due date.");
            return;
        }

        onNewItem(todoName, dueDate);
        todoNameElement.current.value = ''
        dueDateElement.current.value = ''
    }


    return (
        <form className="container text-center" onSubmit={handleOnAddButton}>
            <div className="row">
                <div className="col-6">
                    <input type="text" ref={todoNameElement} name="" id="input" placeholder="Enter something"/>
                </div>
                <div className="col-4">
                    <input type="date" ref={dueDateElement} name="date" id="date"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-success"><IoMdAddCircle /></button>
                </div>
            </div>
        </form>
    )
}

export default AddTodo;