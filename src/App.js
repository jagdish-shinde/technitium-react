import logo from './logo.svg';
import './App.css'
import Button from './components/button/button';

function App() {


  // css -/> inline , internal , external 
  //  html -/> <h1 style = 'color : red'> </h1>
  // react style = {{color : 'red'}}

  //  internal css 
  //  html -/> in side style tag
  // 

  const headingStyle = {
    color : 'green',
    backgroundColor : 'red' ,
    fontSize : '50px'
  }


  //  intrnal 

  const ButtonStyle = {
    color : 'white' ,
    border : 'none' ,
    height : '30px' ,
    width : '120px' ,
    marginRight : '20px' ,
    borderRadius : '10px' ,
    fontWeight : '700' ,
    backgroundColor : 'blue'
  } 

  // external


  const names = [
    'jagdish' ,
    'rajan' ,
    'shivam' ,
    'raju' ,
    'kaju',
    'jagdish' ,
    'rajan' ,
    'shivam' ,
    'raju' ,
    'kaju'
  ]




  //  external 

  //  in html -/> link tag 


  function register (input){
    alert(input)
  }

  function login () {
    alert('Login')
  }







  return (
    <div className="App">
      <h2 style={{color : 'red'}}>I am heading two ...</h2>
      <h3 style = {headingStyle}>I am heading three ...</h3>
      <h4 className='headingFour'>I am heading four ....</h4>

      <Button/>

      {/* Registration wale page pe */}
      <Button 
        buttonText = 'Register'
        onClickFunction = {register}
        buttonStyle = {ButtonStyle}


      />


      {/* Login wale page pe */}
      <Button 
         buttonText = 'Login'
         onClickFunction = {login}
        //  buttonStyle = {ButtonStyle}
        externalClassName = 'externalStyleBtn'
      />

      {/* <h5>JAGISH</h5>
      <h5>Arin</h5>
      <h5>rajan</h5>
      <h5>sachin</h5>
      <h5>shivam</h5> */}

      {
        names.map(name => <h5>{name}</h5>)
      }

      {/*  forEach  */}
    </div>
  );
}

export default App;
