import logo from './logo.svg';
import './App.css';
import List from './components/molecules/list/list';
import { number , names } from './components/const';
import RegistrationForm from './components/organisms/form/form';

function App() {

  return (
    <div className="App">
      {/* <List array = {number}/>
      <List array = {names}/> */}
      <RegistrationForm/>
    </div>
  );
}

export default App;
