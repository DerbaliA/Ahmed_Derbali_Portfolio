import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import AboutImage from '../assets/about.jpg'


const page = () => {
    return (
        <section>
            <SectionHeader title="About Me" subtitle="Who I am and what I do" />
            <div className={`container ${styles.container}`}>
                <article className={styles.image}>
                    <Image src={AboutImage} alt='About Image' />
                </article>
                <article className={styles.aboutContent}>
                    <h4>My name is Ahmed, and I am a Fullstack Web Developer</h4>
                    <p>
                        I served in the Tunisian army for almost eight years. My passion for web development has led me to pursue a career in the civilian sector, combining my military experience with my passion for web development. I have developed discipline, flexibility, problem-solving, and leadership qualities, which have been adapted to my new field. My friends and coworkers have been instrumental in my journey, providing encouragement and support. I am passionate about exploring various programming languages, such as HTML, CSS, JavaScript, Python and Java, and  motivated to provide solutions that empower and inspire others. Balancing military and academic obligations has been a challenge, but I have accepted the task with enthusiasm. I am excited about the opportunities in web development and to work with other experts and contribute to the creation of groundbreaking digital experiences.
                        I love creating pages where I’m able to create enjoyable interactions and experiences for everyone! And with Coding Dojo’s education and support, I can now call myself a junior Full-stack Web Developer...
                    </p>
                    <a href="/cv.pdf" download="cv.pdf" className={`btn primary ${styles.aboutCta}`} rel='noopener noreferrer'>Download CV</a>


                </article>
            </div>
        </section>
    )
}

export default page  