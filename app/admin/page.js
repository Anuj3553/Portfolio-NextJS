"use client"

import React, { useEffect, useState } from 'react'
import AdminHomeView from '../components/admin-view/home'
import AdminAboutView from '../components/admin-view/about'
import AdminExperienceView from '../components/admin-view/experience'
import AdminEducationView from '../components/admin-view/education'
import AdminProjectView from '../components/admin-view/project'
import AdminContactView from '../components/admin-view/contact'
import { addData, getData, updateData } from '../services'

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

    const [allData, setAllData] = useState({})
    const [update, setUpdate] = useState(false)
    const [authUser, setAuthUser] = useState(false)

    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            commponent: <AdminHomeView formData={homeViewFormData} handleSaveData={handleSaveData} setFormData={setHomeViewFormData} />
        },
        {
            id: 'about',
            label: 'About',
            commponent: <AdminAboutView formData={aboutViewFormData} handleSaveData={handleSaveData} setFormData={setAboutViewFormData} />
        },
        {
            id: 'experience',
            label: 'Experience',
            commponent: <AdminExperienceView formData={experienceViewFormData} handleSaveData={handleSaveData} setFormData={setExperienceViewFormData} data={allData?.experience} />
        },
        {
            id: 'education',
            label: 'Education',
            commponent: <AdminEducationView formData={educationViewFormData} handleSaveData={handleSaveData} setFormData={setEducationViewFormData} data={allData?.education} />
        },
        {
            id: 'project',
            label: 'Project',
            commponent: <AdminProjectView formData={projectViewFormData} handleSaveData={handleSaveData} setFormData={setProjectViewFormData} data={allData?.project} />
        },
        {
            id: 'contact',
            label: 'Contact',
            commponent: <AdminContactView />
        }
    ]

    async function extractAllDatas() {
        const response = await getData(currentSelectedTab)

        if (currentSelectedTab === 'home' && response && response.data && response.data.length) {
            setHomeViewFormData(response && response.data[0])
            setUpdate(true)
        }

        if (currentSelectedTab === 'about' && response && response.data && response.data.length) {
            setAboutViewFormData(response && response.data[0])
            setUpdate(true)
        }

        if (response?.success) {
            setAllData({ ...allData, [currentSelectedTab]: response && response.data })
        }

    }

    async function handleSaveData() {
        const dataMap = {
            home: homeViewFormData,
            about: aboutViewFormData,
            education: educationViewFormData,
            experience: experienceViewFormData,
            project: projectViewFormData
        }

        const response = update ? await updateData(currentSelectedTab, dataMap[currentSelectedTab]) : await addData(currentSelectedTab, dataMap[currentSelectedTab])
        console.log(response, 'response')

        if (response.success) {
            resetFormDatas();
            extractAllDatas();
        }
    }

    useEffect(() => {
        extractAllDatas();
        // eslint-disable-next-line
    }, [currentSelectedTab])

    function resetFormDatas() {
        setHomeViewFormData(initialHomeFormData)
        setAboutViewFormData(initialAboutFormData)
        setExperienceViewFormData(initialExperienceFormData)
        setEducationViewFormData(initialEducationFormData)
        setProjectViewFormData(initialProjectFormData)
    }

    return (
        <>
            <div className='border-b border-gray-200'>
                <nav className='mb-0.5 flex justify-center space-x-6' role='tablist'>
                    {
                        menuItems.map(item => (
                            <button key={item.id} type='button' onClick={() => { setCurrentSelectedTab(item.id); resetFormDatas() }} className='p-4 font-bold text-xl text-black'>
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
