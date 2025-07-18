import React from 'react'
import { NavLink,useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className='flex justify-center items-center flex-col shadow-gray-800 p-32 overflow-hidden'>
            <div className='flex justify-center items-center flex-col h-56 font-bold rounded-xl text-red-500 w-screen'>
                <h1>{error.data}</h1>
                <h1>{error.statusText}</h1>
                <h1>{error.status}</h1>
            </div>

            <button className='border-2 p-2 rounded-xl hover:bg-gray-300 transition'>
                <NavLink to='/'>Homepage</NavLink>
            </button>

            <button
                onClick={handleGoBack}
                className="mt-4 border-2 px-4 py-2 rounded-xl hover:bg-red-400 transition"
            >
                Go Back
            </button>

        </div>
    )
}

export default ErrorPage