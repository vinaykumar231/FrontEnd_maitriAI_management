import React from 'react'
import Logo from '../../public/images/maitri logo.jpg';

const Header = () => {
  return (
    <>
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
                        <div className="relative group">
                            <a href="/" className="text-gray-800 hover:text-gray-900 text-lg font-medium">Home</a>
                            {/* Dropdown would go here */}
                        </div>
                        <div className="relative group">
                            <a href="/Product" className="text-gray-600 hover:text-gray-900 text-xl font-semibold">Product</a>
                            {/* Dropdown would go here */}
                        </div>
                        <a href="/AboutUs" className="text-gray-900 hover:text-black text-lg font-medium">About</a>
                        <div className="relative group">
                            <a href="/ContactUs" className="text-gray-900 hover:text-black text-lg font-medium">Contact</a>
                            {/* Dropdown would go here */}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* <button className="text-gray-600 hover:text-gray-900 hidden md:block">Login</button> */}
                        <button
                            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
                            onClick={openLogin}
                        >
                            Login
                        </button>
                        {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
              Login
            </button> */}
                    </div>

                </nav>
            </header>

    </>
  )
}

export default Header
