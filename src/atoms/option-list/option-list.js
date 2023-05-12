import styles from './option-list.module.css'
// RxCrossCircled
import { RxCrossCircled } from "react-icons/rx";


export default function NavMobile ({closeFunction}) {
    return (
        <div className={styles.wrapper}>

            <div className={styles.iconHolder}>
                <RxCrossCircled 
                    className={styles.closeIcon}
                    onClick={closeFunction}
                />
            </div>
            <div>

                <p>sdkjghdfjg</p>
                <p>sdkjghdfjg</p>
                <p>sdkjghdfjg</p>
                <p>sdkjghdfjg</p>
                <p>sdkjghdfjg</p>

            </div>

        </div>
    )
}