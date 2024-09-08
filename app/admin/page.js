"use client"

import React, { useEffect, useState } from 'react'
import AdminHomeView from '../components/admin-view/home'
import AdminAboutView from '../components/admin-view/about'
import AdminExperienceView from '../components/admin-view/experience'
import AdminEducationView from '../components/admin-view/education'
import AdminProjectView from '../components/admin-view/project'
import AdminContactView from '../components/admin-view/contact'
import { addData, getData, login, updateData } from '../services'
import Login from '../components/admin-view/login'

const initialHomeFormData = {
    heading: '',
    summary: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    github: ''
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

const initialLoginFormData = {
    username: '',
    password: '',
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
    const [loginFormData, setLoginFormData] = useState(initialLoginFormData)
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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
            commponent: <AdminContactView data={allData && allData?.contact} />
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

    useEffect(() => {
        setAuthUser(JSON.parse(sessionStorage.getItem('authUser')))
    }, [])

    async function handleLogin() {
        const res = await login(loginFormData)

        console.log(res, 'login')

        if (res?.success) {
            setAuthUser(true)
            sessionStorage.setItem('authUser', JSON.stringify(true))
        }
    }

    function handleLogout() {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            setAuthUser(false);
            sessionStorage.removeItem('authUser');
        }
    }

    if (!authUser) return <Login formData={loginFormData} handleLogin={handleLogin} setFormData={setLoginFormData} />

    return (
        <>
            <div className='border-b border-gray-200'>
                <nav className='flex flex-wrap items-center md:justify-center lg:row-start-1 p-4 bg-gray-100'>
                    <div className='flex items-center'>
                        <button className='text-xl font-bold text-black md:hidden' onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                            ☰
                        </button>
                        <div className='sm:hidden md:mb-0.5 md:flex md:justify-center md:space-x-6' role='tablist'>
                            {
                                menuItems.map((item, index) => (
                                    <button
                                        key={`${index}-${item.id}`}
                                        type='button'
                                        onClick={() => { setCurrentSelectedTab(item.id); resetFormDatas(); setUpdate(false) }}
                                        className='p-4 font-bold text-xl text-black hover:text-red-500'
                                    >
                                        {item.label}
                                    </button>
                                ))
                            }
                            <button
                                onClick={handleLogout}
                                className='p-4 font-bold text-xl text-black hover:text-red-main'
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-40 transition-opacity duration-300 ${isNavbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
                        <div className='fixed inset-0 bg-red-500 flex justify-center items-center flex-col space-y-4'>
                            <button className='text-4xl font-bold text-white absolute top-[20px] left-[30px]' onClick={() => setIsNavbarOpen(false)}>X</button>
                            {
                                menuItems.map((item, index) => (
                                    <button
                                        key={`${item.id}-${index}`}
                                        type='button'
                                        onClick={() => { setCurrentSelectedTab(item.id); setIsNavbarOpen(false); resetFormDatas(); setUpdate(false) }}
                                        className='block w-full p-4 font-bold text-3xl text-white'
                                    >
                                        {item.label}
                                    </button>
                                ))
                            }
                            <button
                                onClick={() => { setAuthUser(false); sessionStorage.removeItem('authUser'); setIsNavbarOpen(false); }}
                                className='block w-full p-4 font-bold text-3xl text-white'
                            >
                                Logout
                            </button>
                        </div>
                    </div>
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
