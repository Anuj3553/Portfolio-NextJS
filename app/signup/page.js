"use client";

import { useState } from "react";
import FormControls from "../components/admin-view/form-controls";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const controls = [
    {
        name: 'username',
        placeholder: 'Enter your username',
        type: 'text',
        label: 'Username'
    },
    {
        name: 'email',
        placeholder: 'Enter your email',
        type: 'email',
        label: 'Email'
    },
    {
        name: 'password',
        placeholder: 'Enter your password',
        type: 'password',
        label: 'Password'
    },
    {
        name: 'confirmPassword',
        placeholder: 'Confirm your password',
        type: 'password',
        label: 'Confirm Password'
    },
];

export default function Signup() {
    const [formData, setFormData] = useState({});
    const router = useRouter();

    const handleSignup = () => {
        // Handle signup logic here
        console.log("Signup logic to be implemented");
    };

    const handleLoginRedirect = () => {
        router.push('/admin');
    };

    return (
        <div className="flex relative top-20 justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center mb-4">Portfolio Signup</h1>
                <p className="text-center mb-6 text-gray-600">Create your portfolio account</p>
                
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />

                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleSignup}
                        className="bg-red-500 text-white-500 px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                </div>
                
                <div className="flex flex-col items-center mt-6">
                    <p className="text-gray-600 mb-4">Or sign up with</p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => alert('Google signup not implemented')}
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
                        >
                            <FaGoogle className="text-red-500 mr-2 text-xl" />
                            Google
                        </button>
                        <button
                            onClick={() => alert('GitHub signup not implemented')}
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
                        >
                            <FaGithub className="text-gray-800 mr-2 text-xl" />
                            GitHub
                        </button>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLoginRedirect}
                        className="text-red-500 font-semibold underline"
                    >
                        Already have an account? Login
                    </button>
                </div>
            </div>
        </div>
    );
}
