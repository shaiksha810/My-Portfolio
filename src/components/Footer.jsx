import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white text-center py-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-2 text-gray-400 text-sm">
                    <NavLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        GitHub
                    </NavLink>
                    <NavLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        LinkedIn
                    </NavLink>
                    <NavLink href="mailto:yourmail@example.com" className="hover:text-white">
                        Contact
                    </NavLink>
                </div>
            </footer>
        </div>
    )
}

export default Footer