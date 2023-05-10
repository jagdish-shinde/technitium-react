import styles from './scrollbar.module.css'

export default function Scrollbar () {

    return (
        <div className={styles.wrapper}>
           
            {
                Array.from(Array(10)).map(ele => (
                    <div className={styles.card}></div>
                ))
            }
        </div>
    )
}