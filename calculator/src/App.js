import './App.css';
import Display from './components/display.js';
import ButtonPad from './components/ButtonPad';
import { useState } from 'react';

function App() {

const [display, setDisplay] = useState("React Calculator");

  return (
    <div className="App">
      <div className="container">
        <Display 
        display={display}
        />
        <div className='buttonContainer'>
          <ButtonPad 
          display={display}
          setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  );
}

export default App;
