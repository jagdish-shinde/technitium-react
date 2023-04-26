import { Fragment, useState } from 'react'
import './form.css'

export default function Form () {

    const [mobile , setMobile] = useState('')
    const [name , setName] = useState('')



    function handleMobileChange (event) {
        setMobile(event.target.value)
    }
    function handleNameChange (event) {
        setName(event.target.value)
    }

    function handleSubmision () {
        console.log('submitting this value : ',{mobile ,name})
    }



    return (
       <Fragment>
         <input
            className='inputTag'
            placeholder='mobile'
            onChange={handleMobileChange}

        />
         <input
            className='inputTag'
            placeholder='name'
            onChange={handleNameChange}

        />

        
        <button onClick={handleSubmision}>
            Submit form
        </button>
       </Fragment>

        
    )

}