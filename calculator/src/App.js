import './App.css';
import './style/display.css';
import './style/buttonPad.css';
import Display from './components/display.js';
import ButtonPad from './components/buttonPad';
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
        <div id="name">Bobby De Luna</div>
      </div>
    </div>
  );
}

export default App;
