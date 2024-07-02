import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {FaLinkedin} from "react-icons/fa";
import styles from './contact.module.css'
import SectionHeader from '../components/section-header/SectionHeader'

const page = () => {
    return (
        <section>
            <SectionHeader title="Get In Touch" subtitle="Contact me via any of the list below." />
            <div className={`container ${styles.contactWrapper}`}>
                <a href="mailto:ahmedder@live.fr" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
                    <MdOutlineEmail className={styles.contactIcon} />
                </a>
                <a href="https://www.facebook.com/ahmed.tun.731" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
                    <RiMessengerLine className={styles.contactIcon} />
                </a>
                <a href="https:/wa.me/+21658021904" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
                    <BsWhatsapp className={styles.contactIcon} />
                </a>
                <a href="https://www.linkedin.com/in/ahmed-derbali/" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className={styles.contactIcon} />
                </a>
            </div>
        </section>
    )
}

export default page