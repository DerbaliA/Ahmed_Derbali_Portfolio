import React from 'react'
import {data} from './faqsData'
import './faqs.module.css'
import FaqItem from './FaqItem'
import styles from './faqs.module.css'

const Faqs = () => {
    return (
        <section className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <p>Find answer to some of the frequently asked questions below. Contact me if you have more questions.</p>
            <div className={`container ${styles.container}`}>
                {data.map(({id, title, description}) => <FaqItem key={id} title={title} desc={description} />)}
            </div>


        </section>
    )
}

export default Faqs