import navStyle from './navbar.module.css'

export default function Navbar () {

    const navOption = [
        'About',
        'Home',
        'Register' ,
        'Login' ,
        'Contact Us'
    ]
    return(
        <nav className={navStyle.navBar}>
            {
                navOption.map(page => (
                    <p key={page}>{page}</p>
                ))
            }
            

        </nav>
    )
}