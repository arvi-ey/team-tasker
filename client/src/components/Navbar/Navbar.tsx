import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Home, LogIn, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const Navigate = useNavigate()
    const NavArray = [
        { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
        { name: 'Sign In', path: '/auth/signin', icon: <LogIn size={20} /> },
        { name: 'Sign Up', path: '/auth/signup', icon: <UserPlus size={20} /> },
    ];

    return (
        <nav className="bg-white text-black p-4 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">

                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => Navigate("/")} >
                    <span className="text-xl font-semibold">Team Tasker</span>
                </div>
                <ul className="flex space-x-6 items-center">
                    {NavArray.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center px-3 py-2  text-sm font-medium transition-colors duration-200 ${isActive
                                        ? '  border-b-1 '
                                        : 'hover:text-primary hover:border-b-1 hover:border-primary'
                                    }`
                                }
                            >
                                {item.icon}
                                <span className="ml-2">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;
