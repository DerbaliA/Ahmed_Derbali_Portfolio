"use client"

import React, {useContext, useEffect, useState} from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import {FaBars} from 'react-icons/fa6'
import {AiOutlineClose} from 'react-icons/ai'
import {GoMoon, GoSun} from 'react-icons/go'
import {usePathname} from 'next/navigation'
import {ThemeContext} from '@/app/context/themeContext'

const data = [
    {id: 1, link: '/', caption: 'Home'},
    {id: 2, link: '/about', caption: 'About'},
    {id: 3, link: '/services', caption: 'Services'},
    {id: 4, link: '/portfolio', caption: 'Portfolio'},
    {id: 5, link: '/contact', caption: 'Contact'}
]

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const pathName = usePathname();
    const {theme, setTheme} = useContext(ThemeContext);

    //CHECK IF USER IS ON SCREEN LARGER THAN 600PX , IF SO THEN SHOW NAV MENU
    useEffect(() => {
        if (window.innerWidth > 600) {
            setNavOpen(true);
        }
    }, [navOpen])

    // CLOSE DROPDOWN WHEN ON SMALL SCREENS
    const closeNavHandler = () => {
        if (window.innerWidth <= 600) {
            setNavOpen(false);
        } else {
            setTheme('light')
        }
    }

    // function to change theme 
    const changeThemeHandler = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }


    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.navContainer}`}>
                <Link href='/' className={styles.navLogo} onClick={closeNavHandler}>Ahmed Derbali</Link>
                {navOpen && <ul className={styles.navItems}>
                    {
                        data.map(({id, link, caption}) => <li key={id}>
                            <Link href={link} onClick={closeNavHandler} className={pathName === link ? "active" : ""}>{caption}</Link>
                        </li>)
                    }
                </ul>}
                <div className={styles.navBtns}>
                    <button className={styles.themeBtn} onClick={changeThemeHandler}>{theme === 'light' ? <GoMoon /> : <GoSun />}</button>
                    <button className={styles.navBtn} onClick={() => setNavOpen(!navOpen)}>{navOpen ? <AiOutlineClose /> : <FaBars />}</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar