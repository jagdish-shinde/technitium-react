import logo from './logo.svg';
import './App.css';
import List from './components/molecules/list/list';
import { number , names } from './components/const';
import RegistrationForm from './components/organisms/form/form';
import { useState } from 'react';
import Card from './components/atoms/card/card';



function App() {

  const [userDetail ,setUserDetail] = useState([])






  async function getUsers () {
    // fetch('https://reqres.in/api/users/')
    // .then((response)=> response.json())
    // .then((data)=>console.log(data.data))

    const response = await fetch('https://reqres.in/api/users/')
    const userData =  await response.json()
    console.log(userData.data)
    setUserDetail(userData.data)


  
  }



  return (
    <div className="App">
      <div className='cardWrapper'>
        {
          userDetail.map((userData)=> <Card userData = {userData} key={userData.id}/>)
        }
      </div>
      <button onClick={getUsers}>Get User</button>

    </div>
  );
}

export default App;
