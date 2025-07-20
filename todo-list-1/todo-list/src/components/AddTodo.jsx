function AddTodo() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <input type="text" name="" id="" placeholder="Enter something" />
                </div>
                <div className="col-4">
                    <input type="date" name="date" id="date" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success">Success</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;