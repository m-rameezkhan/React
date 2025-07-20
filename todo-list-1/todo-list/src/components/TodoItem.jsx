function TodoItem(props) {
    return (
        <div className="container text-center">
            <div className="row todoItem">
                <div className="col-6">
                    {props.todo}
                </div>
                <div className="col-4">
                    {props.date}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;