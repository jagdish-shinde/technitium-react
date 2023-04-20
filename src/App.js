import logo from './logo.svg';
import './App.css';

import Greeting from './components/greeting/greeting';
import Intro from './components/intro-card/intro-card';

function App() {


  //  ceate the variable at wahich you want to pass the data / value 
  //  pass this value to child 
  //  receive this value at  child .
  //  and finally read this value 


// const name = 'React'


// Assigment  -/>  

// ASHISH 





  return (
    <div className="App">
      <Greeting  
        name = 'jagdish'
      />
      <Intro 
        name = 'Gabbar'
        age = "230"
        city = 'Delhi'
      />
    </div>
  );
}

export default App;
