import logo from './logo.svg';
import './App.css';

import ProfileCard from './components/card/card';



function App() {

  const userOne = {
    image : 'https://images.pexels.com/photos/3299906/pexels-photo-3299906.jpeg?auto=compress&cs=tinysrgb&w=800' ,
    name : 'Arun' ,
    designataion : 'Ui Ux Designer' ,
    description : 'Hi , I am Arun'
  }

  const userTwo = {
    image : 'https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg?auto=compress&cs=tinysrgb&w=800' ,
    name : 'Raju' ,
    designataion : 'App Developer' ,
    description : 'Hi , I am Raju'
  }

  function AlerUserOne () {
    alert( 'hi iam from app.js file' + userOne.name)
  }

  function AlerUserTwo () {
    alert('hi iam from app.js file' + userTwo.name)
  }

  const buttonOneStyle = {
    background : 'red'
  }

  const buttonTwoStyle = {
    background : 'green'
  }

  return (
    <div className="App">

      <ProfileCard 
        useDetail = {userOne}
        alertFunction  = {AlerUserOne}
        buttonStyle = {buttonOneStyle}
      />

      <ProfileCard  
        useDetail={userTwo} 
        alertFunction = {AlerUserTwo} 
        buttonStyle = {buttonTwoStyle}
      />

      {/* <ProfileCard/>
      <ProfileCard/> */}

      {/* <h1 className='name'>i am jagdish</h1>
      <h1 className='desgnation'>web developer </h1> */}


    </div>
  );
}

export default App;
