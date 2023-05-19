import logo from './logo.svg';
import './App.css';
import Timer from './components/molecules/timer/timer';
import { useState } from 'react';

function App() {

  const [count , setCount] = useState(0)

  function handleClick () {
    // setCount(count+1)
    setCount((preValue) => preValue + 1)
  }

  return (
    <div className="App">
      <Timer/>
      {/* <p>{count}</p> */}
      {/* <button onClick={handleClick}>Click</button> */}
  
    </div>
  );
}

export default App;
