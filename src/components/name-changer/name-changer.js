import './name-changer.css'
import {Fragment, useState} from 'react'

export default function NameChanger () {

    const [name , setName] = useState('Arun')
    // const [isNameArunVisible,setIsNameArunVisible] = useState(true)
    // initil name -/> arun 
    // after click -/> akash

    function handleClick () {

        // if(name === 'Arun'){
        //     setName('Akash')
        // }
        // else{
        //     setName('Arun')
        // }

        // name === 'Arun' ? setName('Akash') :  setName('Arun')

        const newName = name === 'Arun' ? 'Akash' : 'Arun'
        setName(newName)

        // setIsNameArunVisible(!isNameArunVisible)




    }

    return (
       <Fragment>
            <h1>my name is {name}</h1>
            <button onClick={handleClick}>change name</button>

            {/* <h3>hi there , i am {isNameArunVisible ? 'Arun' : 'akash'}</h3> */}
       </Fragment>
    )
}