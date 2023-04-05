import React from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="flex flex-wrap text-center md:text-left">
            <div className="w-full md:w-1/2 mx-auto max-w-2xl px-10 sm:py-32 lg:px-8 max-h-screen">
                <div className="flex items-center relative overflow-hidden min-h-screen sm:min-h-fit">
                    <div className="lg:py-20">
                        <p className="mb-3 text-lg text-bermuda font-bold leading-8">
                            Welcome to
                        </p>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">
                                The Budgets Generator
                            </h1>
                            <p className="text-lg leading-8 text-gray-700">
                                You can create detailed budgets for your website projects, SEO consulting and Google Ads campaigns here. Easily and efficiently.
                            </p>
                        </div>
                        <div className="mt-24 flex items-center justify-center md:justify-start">
                            <button className="border-2 border-tangerine bg-white font-bold text-tangerine rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-tangerine hover:text-white active:bg-orange-500"><Link to='/budget'>Get started</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <div className="hidden md:inline-flex bg-[url('/src/assets/home-img.jpg')] w-1/3 h-screen bg-cover bg-no-repeat bg-center"></div>
        </div>
    )
}
export default Welcome;