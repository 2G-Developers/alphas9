import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby'
// import { menuData } from '../data/MenuData'

const Navbar = ({list}) => {
    const [navbar, setNavbar] = useState(false)
    const [navbarBg, setNavbarBg] = useState(false)
    const [activeNav, setActiveNav] = useState('/')


    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbarBg(true)
        } else {
            setNavbarBg(false)
        }
    }

    useEffect(() => {
        setActiveNav(window.location.pathname)
        window.addEventListener('scroll', changeBackground)

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])


    return (
        <nav className="nav" style={{background: `${navbarBg ? '#fff': ''}`}}>
            <div className="nav__logo">
                <img src="https://res.cloudinary.com/gopal1996/image/upload/v1609703905/studioKalasangam/logo-thumb_zbchbw.webp" width="140px" height="auto" alt="StudioKalasangam"/>
            </div>
            
            <ul className={navbar ? "nav__list nav__list--active": "nav__list"}>
                {
                    Object.keys(list).map((data, index) => (
                        // eslint-disable-next-line
                        <li key={index} onClick={() => setNavbar(false)} onKeyPress={() => setNavbar(false)} className="nav-item"><Link to={`#${data}`} className={activeNav === data ? 'nav__link nav__link--active': 'nav__link'} onClick={() => setActiveNav(data)}>{data}</Link></li>
                    ))
                }
            </ul>

            <button className="nav__hamburger" onClick={() => setNavbar(prevState => !prevState)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}

export default Navbar
