import { useState } from 'react';
import './App.css';


function App() {

  const [image , setImage] = useState('https://images.pexels.com/photos/3177388/pexels-photo-3177388.jpeg?auto=compress&cs=tinysrgb&w=800')


  //  https://jsonplaceholder.typicode.com/posts

  // https://images.dog.ceo/breeds/entlebucher/n02108000_352.jpg
  //  fetch methode -/> used to request the server  , browser
  //  

  
    // https://jsonplaceholder.typicode.com/posts
    // https://restcountries.com/v2/all
    // https://api.chucknorris.io/jokes/random
    // https://dog.ceo/api/breeds/image/random


  async function getDogData () {
    // alert(3543)

    //  we wil hit api
    //  it gives data {mesage : 'new-dog-image-link'
    // success -/> then -/> function 
    // failure -/> catch
    // console.log({data})

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data)=> data.json())
    .then ((response)=> setImage(response.message))
    .catch((error) => console.log(error))  

  }

  async function getDog () {

    try{
        // async await (to wait till request is processed
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        setImage(data.message)
    }
    catch(error){
      console.log('i am from catch' ,error)
    }


  }




  









  return (
    <div className="App">
      <img 
        src={image}
        height={'200px'}
        width={'200px'}
        alt='dog image'
      />

      <button 
      // onClick={getDogData}
      onClick = {getDog}
      >Get Dog</button>

    </div>
  );
}

export default App;
