import './App.css'
import Navbar from './components/Navbar'
import AddItems from './AddItems'

function App() {

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <>
      <Navbar />
      <AddItems items={items} />
      
    </>
  )
}

export default App
