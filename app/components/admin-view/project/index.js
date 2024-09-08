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

export default function AdminProjectView({ formData, setFormData, handleSaveData, data }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-10">
                    {
                        data && data.length ?
                            data.map((item, index) => (
                                <div key={`${index}-${item.id}`} className="flex flex-col gap-4 border p-4 border-gray-600">
                                    <p>{item.projectName}</p>
                                    <p>{item.technologies}</p>
                                    <p>{item.website}</p>
                                    <p>{item.github}</p>
                                </div>)
                            )
                            : null
                    }
                </div>
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />
                <div className="md:block sm:flex justify-center items-center">
                    <button onClick={() => handleSaveData('project')} className="border border-red-500 p-4 mt-[10px] font-bold text-[16px]">Add Info</button>
                </div>
            </div>
        </div>
    )
}