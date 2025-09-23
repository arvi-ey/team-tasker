import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-2xl max-w-md w-full p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Sign In
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                        <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9088F1] focus:border-[#9088F1] transition"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute top-3 left-3 text-gray-400" size={18} />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9088F1] focus:border-[#9088F1] transition"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-3 right-3 text-gray-400"
                        >
                            {showPassword ? <EyeOff size={18} className='cursor-pointer' /> : <Eye size={18} className='cursor-pointer' />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer py-3 rounded-lg text-white font-semibold transition bg-[#9088F1] hover:bg-[#7a70e0]"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-500">
                    Don’t have an account?{' '}
                    <Link to="/auth/signup" className="text-[#9088F1] font-medium hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
