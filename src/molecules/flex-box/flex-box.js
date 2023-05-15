import styles from './flex-box.module.css'


export default function FlexBox () {
    return (
        <div className={styles.flexContainer}>
            {
                Array.from(Array(8)).fill(1).map((num,index) =><div className={styles.flexChild}>{num+index}</div>)
            }
        </div>

        // <div className={styles.parent}>

        //     <div className={styles.child}>Child</div>

        //     {/* <div className={styles.child1} >1</div> */}
        //     {/* <div className={styles.child2} >2</div> */}

        // </div>
    )
}