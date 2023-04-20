
export default function Greeting (props) {


    console.log(props , typeof (props))



    //  ceate the variable at wahich you want to pass the data / value  
  //  pass this value to child 
  //  receive this value at  child .
  //  and finally read this value 

    return (
            <h3>Welcome to the {props.name} ...</h3>
    )

}