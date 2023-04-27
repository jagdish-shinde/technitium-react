import { Fragment, useState } from "react";
import Button from "../../atoms/button/button";
import './form.css'

export default function RegistrationForm () {



    //  all the fields should be there .
    //  each filed should be valid field

    //  name -/> should not be only spaces 
    //           should not be number 
    //   
    
    //  mobile -/> char === 10 
    //             indian number (firm digit [6-9])
    //             min and max 10 
    //    
    
    //   email -/> @gmail.com 
    //    itshould be a proper amial


//     /[6789]\d{9}$/.test('74980542   ')

            // if(/[6789]\d{9}$/.test(mobile)){
            //   alert('add proer mobile ..')
            //   return 
            
            // }

            // if(''.text(email)){
            
            //   retur 
            // }




            


    const [name , setName] = useState()
    const [mobile , setMobile] = useState()
    const [email , setEmail] = useState()



    function handleName (event) {
        setName(event.target.value)
    }
    function handleMobile (event) {
        setMobile(event.target.value)        
    }
    function handleEmail (event) {
        setEmail(event.target.value)
    }

    function handleSubmit () {

        if(!name || !mobile || !email){
            alert('Please fill the form to proceed .')
            return
        }

        if(name.trim() === ''){
            alert('add proper name')
            return
        }





        const dataToSend = {
            name ,
            mobile ,
            email
        }
        console.log('api call to backend')


    }


    return (
        <div className="form">
            <h4>Rgister to join today .</h4>
            <input className="inputField" placeholder="name" onChange = {handleName}/>
            <input className="inputField" placeholder="mobile" onChange = {handleMobile} type="number"/>
            <input className="inputField" placeholder="email" onChange = {handleEmail}/>
            <Button cuttonBtnStyle = 'submitBtn' clickFunction = {handleSubmit}/>
        </div>
    )


}