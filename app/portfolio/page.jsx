"use client"

import React, {useState} from 'react'
import styles from './portfolio.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import {data} from './data'
import CategoryButtons from './CategoryButtons'
import Projects from './Projects'

const page = () => {
    const [projects, setProjects] = useState(data)
    const categories = data.map(item => item.category);
    const uniqueCategories = ["All", ...new Set(categories)]

    //function to filter projects using categories
    const filterProjectsHandler = (category) => {
        if (category === "All") {
            setProjects(data)
            return
        }

        const filteredProjects = data.filter(project => project.category === category)
        setProjects(filteredProjects)
    }
    return (
        <section>
            <SectionHeader title='My Projects' subtitle='My recent projects. Filter with the buttons' />
            <div className="container">
                <CategoryButtons categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
                <Projects projects={projects} />
            </div>
        </section>
    )
}

export default page