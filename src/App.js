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
    const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP'

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mobile : 8010821516}),
    }

    fetch(url, option)
    .then((response) => response.json())
    .then((data) => console.log({data}))
    .catch((error) => console.log(error))

    // do the same thing using async await 





  
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
