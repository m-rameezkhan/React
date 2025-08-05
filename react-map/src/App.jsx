import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  let list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  // let list = [];

  // if (list.length === 0) {
  //   return <h1>No items in the list</h1>;
  // }

  let emptyMessage = list.length === 0 ? <h1>No items in the list</h1>: null

  return (
    <>
      {emptyMessage}
      <h1>Items in the list</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
