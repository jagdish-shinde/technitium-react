import { Fragment, useEffect, useRef, useState } from "react"

export default function LearnUseRef () {

    const [count, setCount] = useState(0)
    const inputRef = useRef(null)


    let number = 0
    const countRef = useRef(0)

    console.log(number , countRef.current)

    useEffect(()=> {
        // inputRef.current.focus()
    },[])

    // // when function get recall , data stored in variable is get vanished/ set to default 
    //   data change update ui -/> useState 
    //   data change not ui update -/> useRef 
    //   


    //  when to use useRef ?
    //  1.  when we want to preserve the data in side the functionL COMPONENT , ALSO TAHAT DATA CHAGE WILL NOTAFFECT THE UI CHANGE 
    //   2. when we want to keep the refrense of any html components/ it silimer like we are calling document,getElementbYiD TO UPDATE THE CHAGES









    


    function handleClick () {
        setCount(count + 1)
        number = number + 1
        countRef.current =  countRef.current + 1
    }

    function focusTheInput () {
        // const pickedHtml = document.getElementById('inputField')
        // pickedHtml.focus()
        inputRef.current.focus()

    }






   

    return (
        <div style={{marginTop : '100px'}}>
            {/* <h4>{count}</h4> */}
            {/* <button onClick={handleClick}>Click</button> */}
            <input 
                type="text"
                id="inputField"
                ref={inputRef}
            />
            <button onClick={focusTheInput}>Focus the input</button>
        </div>
    )
}