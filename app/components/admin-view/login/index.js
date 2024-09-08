"use client"

import { useRouter } from "next/navigation";
import FormControls from "../form-controls";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const controls = [
    {
        name: 'username',
        placeholder: 'Enter your username',
        type: 'text',
        label: 'Username'
    },
    {
        name: 'password',
        placeholder: 'Enter your password',
        type: 'password',
        label: 'Password'
    },
];

export default function Login({ formData, setFormData, handleLogin }) {
    const router = useRouter();

    const handleSignupRedirect = () => {
        router.push('/signup');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center mb-4">Portfolio Admin Login</h1>
                <p className="text-center mb-6 text-gray-600">Access your portfolio by logging in below</p>
                
                <FormControls controls={controls} formData={formData} setFormData={setFormData} />

                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLogin}
                        className="bg-red-500 text-white-500 px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-200"
                    >
                        Login
                    </button>
                </div>
                
                {/* <div className="flex flex-col items-center mt-6">
                    <p className="text-gray-600 mb-4">Or sign in with</p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => alert('Google login not implemented')}
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
                        >
                            <FaGoogle className="text-red-500 mr-2 text-xl" />
                            Google
                        </button>
                        <button
                            onClick={() => alert('GitHub login not implemented')}
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
                        >
                            <FaGithub className="text-gray-800 mr-2 text-xl" />
                            GitHub
                        </button>
                    </div>
                </div> */}

                {/* <div className="flex justify-center mt-6">
                    <button
                        onClick={handleSignupRedirect}
                        className="text-red-500 font-semibold underline"
                    >
                        Don't have an account? Sign up
                    </button>
                </div> */}
            </div>
        </div>
    );
}
