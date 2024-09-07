"use client"

import FormControls from "../form-controls"

const controls = [
    {
        name: 'position',
        placeholder: 'Enter the position',
        type: 'text', 
        label: 'Position'
    },
    {
        name: 'company',
        placeholder: 'Enter the company',
        type: 'text', 
        label: 'Company'
    },
    {
        name: 'duration',
        placeholder: 'Enter the duration',
        type: 'text', 
        label: 'Duration'
    },
    {
        name: 'location',
        placeholder: 'Enter the location',
        type: 'text', 
        label: 'Location'
    },
    {
        name: 'jobProfile',
        placeholder: 'Enter the job profile',
        type: 'text', 
        label: 'Job Profile'
    },
]

export default function AdminExperienceView({ formData, setFormData }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />
                <button className="border border-green-600 p-4 mt-[10px] font-bold text-[16px]">Add Info</button>
            </div>
        </div>
    )
}