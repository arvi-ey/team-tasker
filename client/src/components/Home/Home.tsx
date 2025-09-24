import { CheckCircle, Star } from "lucide-react";

const Home = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Empower Your Team with <span className="text-[#9088F1]">Seamless</span> Collaboration
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Experience real-time collaboration, file sharing, and project management in one place.
                </p>
                <div className="mt-6 flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="px-4 py-3 border rounded-l-lg w-72 focus:outline-none"
                    />
                    <button className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-r-lg hover:opacity-90">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-[#9088F1]">80%</h2>
                        <p className="text-gray-600">Seamless collaboration and task management</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#9088F1]">10K+</h2>
                        <p className="text-gray-600">Remote teams rely on our platform</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#9088F1]">98%</h2>
                        <p className="text-gray-600">High user satisfaction ratings</p>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Organize, Prioritize, <span className="text-[#9088F1]">Achieve Goals</span>
                    </h2>
                    <p className="text-gray-600">
                        Streamline your workflow with powerful, intuitive tools that keep every team member aligned.
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <CheckCircle className="text-[#9088F1]" size={40} />
                    <p className="text-lg font-medium">Easy task tracking & management</p>
                </div>
            </div>

            {/* Pricing */}
            {/* Pricing Section */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-10">
                        Simple, <span className="text-[#9088F1]">Transparent</span> Pricing
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { plan: "Basic", price: "$0", features: ["Up to 5 users", "Task management", "File sharing"] },
                            { plan: "Pro", price: "$9.99", features: ["Unlimited users", "Advanced integrations", "Analytics dashboard"] },
                            { plan: "Enterprise", price: "$15.99", features: ["Custom solutions", "Dedicated support", "Admin controls"] }
                        ].map((pkg, i) => (
                            <div key={i} className="rounded-2xl shadow-lg">
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold">{pkg.plan}</h3>
                                    <p className="text-3xl font-bold mt-4 text-[#9088F1]">{pkg.price}</p>
                                    <ul className="mt-6 space-y-2 text-gray-600">
                                        {pkg.features.map((f, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <Star className="w-4 h-4 text-[#9088F1]" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="mt-6 p-4 cursor-pointer w-full bg-[#9088F1] hover:bg-indigo-600 text-white rounded-xl">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home