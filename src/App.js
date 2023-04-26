import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NameChanger from './components/name-changer/name-changer';
import Form from './components/form/form';

function App() {

  //  useState , useRef , useEffect , useCallback , useMemo 
  //  use State -/> 1. whre you want to store the data , jiske cahnge hone pe you want to update the ui as well
  // 2. where you want to read and write the data .
  //  hooks are the rect functions 
  //  useState -/> function 

   const [count , setCount] = useState(0)


  //  count []

  //  conunt -/> read access 
  //  setCount -/> function to update the useSate


  // let count = 0


  function handleClick () {
    const newCount = count + 1 ;
    setCount(newCount) ;
    //  array , object , function 


    // count = count + 1
    // console.log({count})
  }









  return (
    <div className="App">
      <h4>Count is :</h4>
      <h4>{count}</h4>

      <button onClick={handleClick}>
        Increase the count
      </button>



      <NameChanger/>

        <div>


        <Form/>

        </div>



 
    </div>
  );
}

export default App;
