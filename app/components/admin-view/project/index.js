"use client"

import FormControls from "../form-controls"

const controls = [
    {
        name: 'projectName',
        placeholder: 'Enter the project',
        type: 'text', 
        label: 'Project'
    },
    {
        name: 'technologies',
        placeholder: 'Enter the technologies',
        type: 'text', 
        label: 'Enter technologies'
    },
    {
        name: 'website',
        placeholder: 'Enter the website url',
        type: 'text', 
        label: 'Website'
    },
    {
        name: 'github',
        placeholder: 'Enter the github url',
        type: 'text', 
        label: 'Github'
    },
]

export default function AdminProjectView({ formData, setFormData, handleSaveData }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />
                <button onClick={() => handleSaveData('project')} className="border border-green-600 p-4 mt-[10px] font-bold text-[16px]">Add Info</button>
            </div>
        </div>
    )
}