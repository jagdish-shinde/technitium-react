import logo from './logo.svg';
import './App.css';
import {useNavigate ,Link} from 'react-router-dom'

function App() {
  const nevigate = useNavigate()

  // const pathByKey = {
  //   'login' : '/login' ,
  //   'register' : '/register'
  // }

  // const handleRedirect = function (key) {
  //   const pathToRedirect = pathByKey[key]
  //   nevigate(pathToRedirect)
  // }



  function hanldeLogin () {
    nevigate('/login')
  }
  function handleRegister () {
    nevigate('/register')
  }


  return (
    <div className="App">
      <button onClick={hanldeLogin}>login</button> 
      <button onClick={handleRegister}>Register</button>
      <button>About us</button>
      {/* <Link to={'/login'}>go to login</Link> */}

    </div>
  );
}

export default App;
