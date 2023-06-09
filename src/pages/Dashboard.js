import React from 'react'
import Features from '../components/Features'

const Dashboard = () => {
  return (
    <div>
      
<main className="relative h-screen overflow-hidden  bg-slate-900">
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
        <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
                Watch.ME
            </div>
            <div className="flex items-center">
                
                <button className="flex flex-col ml-4 lg:hidden">
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                </button>
            </div>
        </div>
    </header>
    <div className="relative z-20 flex items-center overflow-hidden  bg-slate-900">
        <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
                </span>
                <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                    Be on
                    <span className="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                        Get Sponsors
                    </a>
                    <a href="#" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Become a Sponsor
                    </a>
                </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                <img src="/images/object/10.png" className="max-w-xs m-auto md:max-w-sm"/>
            </div>
        </div>
    </div>

</main>
    <svg viewBox="0 0 1446 199" focusable="false" class="chakra-icon css-1w3t3sf" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z" fill="#02042B"></path>
    </svg>
    <Features/>

    </div>
  )
}

export default Dashboard
