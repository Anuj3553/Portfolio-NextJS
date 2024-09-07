"use client"

import React, { useState } from 'react'
import AdminHomeView from '../components/admin-view/home'
import AdminAboutView from '../components/admin-view/about'
import AdminExperienceView from '../components/admin-view/experience'
import AdminEducationView from '../components/admin-view/education'
import AdminProjectView from '../components/admin-view/project'
import AdminContactView from '../components/admin-view/contact'

const initialHomeFormData = {
    heading: '',
    summary: ''
}

const initialAboutFormData = {
    aboutMe: '',
    noOfProjects: '',
    yearsOfExperience: '',
    noOfClients: '',
    skills: ''
}

const initialExperienceFormData = {
    position: '',
    company: '',
    duration: '',
    location: '',
    jobProfile: ''
}

const initialEducationFormData = {
    degree: '',
    year: '',
    institute: ''
}

const initialProjectFormData = {
    projectName: '',
    technologies: '',
    website: '',
    github: ''
}

const AdminView = () => {

    const [currentSelectedTab, setCurrentSelectedTab] = useState('home')
    const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData)
    const [aboutViewFormData, setAboutViewFormData] = useState(initialAboutFormData)
    const [experienceViewFormData, setExperienceViewFormData] = useState(initialExperienceFormData)
    const [educationViewFormData, setEducationViewFormData] = useState(initialEducationFormData)
    const [projectViewFormData, setProjectViewFormData] = useState(initialProjectFormData)

    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            commponent: <AdminHomeView formData={homeViewFormData} setFormData={setHomeViewFormData}/>
        },
        {
            id: 'about',
            label: 'About',
            commponent: <AdminAboutView formData={aboutViewFormData} setFormData={setAboutViewFormData}/>
        },
        {
            id: 'experience',
            label: 'Experience',
            commponent: <AdminExperienceView formData={experienceViewFormData} setFormData={setExperienceViewFormData}/>
        },
        {
            id: 'education',
            label: 'Education',
            commponent: <AdminEducationView formData={educationViewFormData} setFormData={setEducationViewFormData}/>
        },
        {
            id: 'project',
            label: 'Project',
            commponent: <AdminProjectView formData={projectViewFormData} setFormData={setProjectViewFormData}/>
        },
        {
            id: 'contact',
            label: 'Contact',
            commponent: <AdminContactView />
        }
    ]

    return (
        <>
            <div className='border-b border-gray-200'>
                <nav className='mb-0.5 flex justify-center space-x-6' role='tablist'>
                    {
                        menuItems.map(item => (
                            <button key={item.id} type='button' onClick={() => setCurrentSelectedTab(item.id)} className='p-4 font-bold text-xl text-black'>
                                {item.label}
                            </button>
                        ))
                    }
                </nav>

            </div>
            <div className='mt-10 p-10'>
                {
                    menuItems.map(item => item.id === currentSelectedTab && item.commponent)
                }
            </div>
        </>
    )
}

export default AdminView
