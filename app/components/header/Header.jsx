import Link from 'next/link'
import Image from 'next/image'
import Image1 from '../../assets/top-left.png'
import Image2 from '../../assets/top-right.png'
import Image3 from '../../assets/bottom-left.png'
import Image4 from '../../assets/bottom-right.png'
import styles from './header.module.css'



import React from 'react'

const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <div className={styles.headerLeft}>
                <h1>My colling is turning your ideas into real life <span className={styles.headerSpan}>products</span> </h1>
                <p>
                    My name is Ahmed Derbali, and I am a Fullstack Web Developer. I have learnt how to build a whole web app &#40;frontend, backend, and database&#41; using Java, Python, and JavaScript, but I specialize in JavaScript &#40; <span className={styles.headerSpan}> MERN Stack</span> &#41;.
                </p>
                <div className={styles.headerCta}>
                    <Link href="/portfolio" className='btn'>Projects</Link>
                    <Link href="/contact" className='btn primary'>Hire me</Link>
                </div>
            </div>
            <div className={styles.headerRight}>
                <article className={styles.card1}>
                    <Image src={Image1} alt='' />
                </article>
                <article className={styles.card2}>
                    <Image src={Image2} alt='' />
                </article>
                <article className={styles.card3}>
                    <Image src={Image3} alt='' />
                </article>
                <article className={styles.card4}>
                    <Image src={Image4} alt='' />
                </article>
            </div>
        </header>
    )
}

export default Header