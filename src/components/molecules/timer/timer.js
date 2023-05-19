import { useEffect, useState } from "react"

export default function Timer () {

    const [timeLeft , setTimeLeft] = useState(600)

    useEffect(() => {

        setInterval(()=> {
            setTimeLeft(prevTime => prevTime - 1)
        },1000)

    },[])


    useEffect(() => {
        if(timeLeft === 0) {
            // alert('time over')
            // submit the quiz 
        }
    } ,[timeLeft])


    function getRedableTimeFormat () {

        const minutes = Math.floor(timeLeft/60)
        const seconds = timeLeft%60

        return `${minutes} : ${seconds}`

    }



    return (
        <div>
            Time : {getRedableTimeFormat()}
        </div>
    )

}