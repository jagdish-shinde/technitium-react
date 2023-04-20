import { Fragment } from "react";



export default function Intro (props) {

    const {
        name ,
        age ,
        city
    } = props


    return  (
        <Fragment>
            <h3>My name is {name} </h3>
            <h3>My age is {age}</h3>
            <h3>I am from {city}</h3>
        </Fragment>
    )
}
