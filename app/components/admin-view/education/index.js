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

export default function AdminEducationView({ formData, setFormData, handleSaveData, data }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    {
                        data && data.length ?
                            data.map(item => (
                                <div key={`${index}-${item.id}`} className="flex flex-col gap-4 border p-4 border-gray-600">
                                    <p>{item.degree}</p>
                                    <p>{item.year}</p>
                                    <p>{item.institute}</p>
                                </div>)
                            )
                            : null
                    }
                </div>
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />
                <div className="md:block sm:flex justify-center items-center">
                    <button onClick={() => handleSaveData('education')} className="border border-red-500 p-4 mt-[10px] font-bold text-[16px]">Add Info</button>
                </div>
            </div>
        </div>
    )
}