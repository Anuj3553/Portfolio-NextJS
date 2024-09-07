"use client"

import FormControls from "../form-controls"

const controls = [
    {
        name: 'aboutMe',
        placeholder: 'Write about yourself',
        type: 'text', 
        label: 'About'
    },
    {
        name: 'noOfProjects',
        placeholder: 'No of projects',
        type: 'text', 
        label: 'Projects'
    },
    {
        name: 'yearsOfExperience',
        placeholder: 'No of experience',
        type: 'text', 
        label: 'Experience'
    },
    {
        name: 'noOfClients',
        placeholder: 'No of clients',
        type: 'text', 
        label: 'Clients'
    },
    {
        name: 'skills',
        placeholder: 'Enter the skills',
        type: 'text', 
        label: 'Skills'
    },
]

export default function AdminAboutView({ formData, setFormData, handleSaveData }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />
                <button onClick={() => handleSaveData('about')} className="border border-green-600 p-4 mt-[10px] font-bold text-[16px]">Add Info</button>
            </div>
        </div>
    )
}