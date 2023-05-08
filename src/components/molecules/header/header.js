import styles from './header.module.css'
import { ImMenu } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";

// FcGoogle
// BsTwitter



export default function Header () {

    //  module.css file
    //  scope local

    const navOptions = [
        'Home',
        'AboutUs' ,
        'Register' ,
        'Login' ,
        'Courses' ,
        'Placements' ,
        'Contacts'
    ]

    return (
        <header className={styles.header}>
            <div className={styles.navOption}>
                {
                    navOptions.map(page => (
                        <p>{page}</p>
                    ))
                }
            </div>
            <BsTwitter 
                className={styles.menu} 
                onClick={()=> alert(2359734985)}
            />
        </header>
    )
}