"use client"

import FormControls from "../form-controls"

const controls = [
    {
        name: 'degree',
        placeholder: 'Enter the degree',
        type: 'text', 
        label: 'Degree'
    },
    {
        name: 'year',
        placeholder: 'Enter the year',
        type: 'text', 
        label: 'Year'
    },
    {
        name: 'institute',
        placeholder: 'Enter the institute name',
        type: 'text',
        label: 'Institute'
    }
]

export default function AdminEducationView({ formData, setFormData, handleSaveData }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />
                <button onClick={() => handleSaveData('education')} className="border border-green-600 p-4 mt-[10px] font-bold text-[16px]">Add Info</button>
            </div>
        </div>
    )
}