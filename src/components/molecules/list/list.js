import { Fragment } from 'react'
import './list.css'


export default function List ({array}) {

    return (
       <Fragment>
            {array.map(number => (
                <h4>{number}</h4>
            ))}
       </Fragment>
    )
}