import { Fragment } from 'react'
import styles from './block-inline-tags.module.css'

export default function HtmlElements () {
    // block element (dia)
    // 1. defult it take full availabe width
    // 2. width and height get aplied
    // 3. margin get applied to all the sides
    // 4. padding applied to all the direction
    // 5. start with new line



    // inline element (display : inline)
    // 1. defult it not take full availabe width
    //  2. width and height not get aplied
    // 3. margin get applied {left and right} sides only .
        // 4. padding applied to all the direction
        // 5. follow new addition in the same line


    return (
        <Fragment>
            <h2 className={styles.heading}>I am heading 2</h2>
            {/* <h3>I am heading 3</h3> */}
            {/* <h3>I am heading 3</h3> */}
            {/* h3 - dispaly : block */}
            <a className={styles.link}>Link 1</a>
            <a className={styles.link}>Link 2</a>
            {/* <a>Link 2</a> */}

             {/* a - display : inline */}
        </Fragment>
    )

}