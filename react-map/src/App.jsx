import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

let list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function App() {
  return (
    <>
    <h1>List Items</h1>
    <ul>
      {list.map((item, index) => (
        <li key={item}>Index:{index}:{item}</li>
      ))}
    </ul>
    </>
  )
}

export default App
