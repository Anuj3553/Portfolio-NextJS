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
    // {
    //     name: 'facebook',
    //     placeholder: 'Enter the facebook id',
    //     type: 'text',
    //     label: 'Facebook'
    // },
    // {
    //     name: 'twitter',
    //     placeholder: 'Enter the twitter id',
    //     type: 'text',
    //     label: 'Twitter'
    // },
    // {
    //     name: 'linkedin',
    //     placeholder: 'Enter the linkedin id',
    //     type: 'text',
    //     label: 'Linkedin'
    // },
    // {
    //     name: 'instagram',
    //     placeholder: 'Enter the instagram id',
    //     type: 'text',
    //     label: 'Instagram'
    // },
    // {
    //     name: 'github',
    //     placeholder: 'Enter the github id',
    //     type: 'text',
    //     label: 'Github'
    // },
]

export default function AdminHomeView({ formData, setFormData, handleSaveData }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />
                <div className="md:block sm:flex justify-center items-center">
                    <button onClick={() => handleSaveData('home')} className="border border-red-500 p-4 mt-[10px] font-bold text-[16px]">Add Info</button>
                </div>
            </div>
        </div>
    )
}