import React from 'react';
import Logo from '../../public/images/maitri logo.jpg';
import { Link, useNavigate } from 'react-router-dom';

const AboutUs = ({ openLogin }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-cyan-100 to-blue-100">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 shadow-sm fixed w-full top-0 z-10">
                <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/"> {/* Add Link component with "to" prop pointing to home */}
                            <img src={Logo} alt="MaitriAI" className="h-12" />
                        </Link>

                        <Link to="/">
                            <span className="ml-2 text-lg font-semibold">MaitriAI</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <a href="/" className="text-gray-800 hover:text-gray-900 text-lg font-medium">Home</a>
                        <a href="/Product" className="text-gray-600 hover:text-gray-900 text-xl font-semibold">Product</a>
                        <a href="/AboutUs" className="text-gray-900 hover:text-black text-lg font-medium">About</a>
                        <a href="/ContactUs" className="text-gray-900 hover:text-black text-lg font-medium">Contact</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
                            onClick={openLogin}>
                            Login
                        </button>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
                {/* About Us Header */}
                <section className="text-center py-20">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">ABOUT US</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Empowering businesses with cutting-edge AI solutions</p>
                </section>

                {/* Who We Are Section */}
                <section className="flex justify-center items-center py-10 bg-white rounded-lg shadow-lg overflow-hidden mb-20">
                    <div className="w-2/5 relative h-96">
                        <img
                            src="your-image-path.jpg"
                            alt="MaitriAI"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-400
 opacity-75"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-16 h-16 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14.752 11.168l-5.197 3.087A1 1 0 018 13.385V7.614a1 1 0 011.555-.832l5.197 3.087a1 1 0 010 1.664z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="w-3/5 px-10 py-8 text-left">
                        <h2 className="text-orange-500 font-bold text-xl mb-2">Who we are</h2>
                        <h1 className="text-4xl font-bold mb-6 text-gray-800">MaitriAI</h1>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            At MaitriAI, we stand at the forefront of innovation as an artificial intelligence company dedicated to crafting advanced AI technologies that elevate human experiences and empower businesses spanning various industries.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is firmly rooted in harnessing the immense potential of AI to stimulate innovation, tackle intricate challenges, and generate a positive societal impact.
                        </p>
                    </div>
                </section>

                {/* Mission, Vision, History Section */}
                <section className="py-20">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Our Mission', description: 'Our mission is resolute — we aim to unlock AI\'s potential to reshape lives. We endeavor to push the boundaries, construct ethical solutions, foster social impact, and empower individuals for a brighter future.' },
                            { title: 'Our Vision', description: 'MaitriAI envisions leadership in artificial general intelligence, spearheading positive transformations for our clients and the global community at large.' },
                            { title: 'Our History', description: 'With a track record spanning over a decade, MaitriAI has consistently delivered extraordinary technology solutions that surpass client expectations.' }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-teal-400 text-white transform hover:scale-105 transition duration-300">
                                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                <p className="text-white leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values Section */}
                <section className="bg-white py-16 px-4 rounded-lg shadow-lg">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-orange-500 text-sm font-semibold mb-2 text-center">Our Core Principles</h2>
                        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Our Values</h1>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Our commitment to embodying these values aligns with our vision and mission. We remain steadfast in our dedication to becoming a trusted partner for businesses looking to harness technology for growth and transformation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Innovation', icon: '💡' },
                                { title: 'Integrity', icon: '🛡️' },
                                { title: 'Collaboration', icon: '🤝' },
                                { title: 'Client-Centricity', icon: '🎯' }
                            ].map((value, index) => (
                                <div key={index} className="p-6 rounded-lg bg-orange-100 border-l-4 border-orange-500 shadow-md transform hover:scale-105 transition duration-300">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                                    <p className="text-gray-600">
                                        {value.title === 'Innovation' && "We nurture creativity and drive advancements to maintain our technological edge, delivering innovative solutions."}
                                        {value.title === 'Integrity' && "Upholding the highest standards of honesty and ethics in all interactions and business practices."}
                                        {value.title === 'Collaboration' && "As a cohesive team, we work in unity, leveraging diverse expertise and perspectives to realize shared objectives."}
                                        {value.title === 'Client-Centricity' && "Prioritizing the unique needs of our clients, we deliver tailored solutions that drive their success and satisfaction."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-black text-white p-8 rounded-lg shadow-lg mt-auto">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </a>
                </div>
                <nav className="flex justify-center space-x-10 mb-4 text-sm">
                    <a href="/UpdateUserForm" className="hover:underline">Home</a>
                    <a href="/" className="hover:underline">News</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                    <a href="#" className="hover:underline">Our Team</a>
                </nav>
                <div className="text-center text-xs">
                    Copyright ©2024, MaitriAI
                </div>
            </footer>

        </div>
    );
};

export default AboutUs;
