import styles from './header.module.css'
import Navbar from '../../atoms/navbar/navbar'
import { HiMenuAlt1 } from "react-icons/hi";
import NavMobile from '../../atoms/option-list/option-list';
import { useState } from 'react';
// HiMenuAlt1

export default function Header () {

    const [isNavMobileVisible , setIsNavMobileVisible] = useState(false)

    function showList () {
        setIsNavMobileVisible(true)
    }
    function Closelist () {
        setIsNavMobileVisible(false)
    }

    function handListOpening () {
        setIsNavMobileVisible(!isNavMobileVisible)
    }

    if(isNavMobileVisible){
        return <NavMobile closeFunction = {Closelist}/>
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img 
                    src='https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    height={80}
                    width={80}
                    style={{borderRadius : '50%'}}
                />
            </div>
            <div className={styles.navWrapper}>
                <Navbar/>
            </div>
            <div className={styles.iconWrapper}>
                <HiMenuAlt1 onClick={showList}/>
            </div>
        </header>
    )
}