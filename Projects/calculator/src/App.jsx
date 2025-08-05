import './App.css'
import Display from './components/display.jsx'
import Buttons from './components/Buttons.jsx'
import React, { useState } from 'react';

function App() {

  let [calValue, setCalValue] = useState("0");
  const ButtonClick = (button) => {
    console.log(button);
    if (button === "C") {
      setCalValue(calValue.slice(0, -1));
    }
    else if (button === "AC") {
      setCalValue("0");
    }
    else if (button === "=") {
      try {
        setCalValue(eval(calValue));
      }
      catch (error) {
        setCalValue("Error");
      }
    }
    else {
      if (calValue == "0" && button !== ".") {
        setCalValue(button);
      } else {
        setCalValue(calValue + button);
      }
    }
  }
  return (
    <div className="calculator">
      <h1 className='heading'>Calculator</h1>
      <Display displayValue={calValue} />
      <Buttons onButtonClick={ButtonClick} />
    </div>
  )
}

export default App
