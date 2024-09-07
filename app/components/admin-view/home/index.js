"use client"

import FormControls from "../form-controls"

const controls = [
    {
        name: 'heading',
        placeholder: 'Enter the heading',
        type: 'text',
        label: 'Heading'
    },
    {
        name: 'summary',
        placeholder: 'Enter the career summary',
        type: 'text',
        label: 'Career summary'
    },
]

export default function AdminHomeView({ formData, setFormData, handleSaveData }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />
                <button onClick={() => handleSaveData('home')} className="border border-green-600 p-4 mt-[10px] font-bold text-[16px]">Add Info</button>
            </div>
        </div>
    )
}