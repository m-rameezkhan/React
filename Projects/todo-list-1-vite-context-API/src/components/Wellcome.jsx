import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";

function Wellcome() {
    const {items} = useContext(TodoItemsContext)
    return (
        items.length === 0 && < div className = "wellcome" ><h3 className="text-center">No items to show</h3></div >
    )
}

export default Wellcome;