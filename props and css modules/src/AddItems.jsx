import Items from './items.jsx';

const AddItems = ({ Items }) => {
    return (
        <div>
            <h2>Add Items</h2>
            <form>
                <input type="text" placeholder="Item Name" />
                <button type="submit">Add Item</button>
            {Items.map((item, index) => (
                <Items key={index} name={item} />))}

                {/* <Items name="Item 1" />
                <Items name="Item 2" />
                <Items name="Item 3" />
                <Items name="Item 4" /> */}
            </form>
        </div>
    );
}

export default AddItems;