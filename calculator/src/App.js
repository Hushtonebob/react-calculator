import './App.css';
import Display from './components/display.js';
import NumberPad from './components/numberPad';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Display />
        <NumberPad />
      </div>
    </div>
  );
}

export default App;
