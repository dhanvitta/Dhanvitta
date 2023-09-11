import React, { useEffect, useRef } from 'react'
import { FiTrendingUp, FiShield, FiClock, FiDollarSign, FiPieChart } from "react-icons/fi";
import { Link } from "react-router-dom";

function HeroSection() {


    return (
        <React.Fragment>
            <div className='w-11/12 mx-auto  bg-yellow-300 rounded-3xl p-8 xs:p-8 sm:p-8 md:p-16 lg:p-16 xl:p-16 my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                <div className='flex flex-col w-full xs:w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 '>
                    <h1 className=' text-4xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl  font-semibold ' >Master the Art of Stock Trading  </h1>
                    <h2 className='text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl  my-8'>with DhanVitta</h2>
                    <p className=' break-words text-lg font-normal  tracking-normal align-middle w-full xs:w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6'>Revolutionize Your Trading with RealTime AI Suggestions, Expert Analysis, and Interactive Learning Resources to Help You Trade with Confidence!</p>
                    <div className='w-full xs:w-full sm:w-full m:w-1/2 lg:w-1/2 xl:w-1/2'>
                        <Link to={"https://dhanvitta.graphy.com/"}>  <button className='mt-8 px-6  w-full h-16 rounded-3xl bg-slate-900 hover:text-yellow-300 text-md text-white '>Start Learning</button> </Link>
                    </div>
                </div>

                <div className=' hidden xs:hidden sm:hidden md:hidden lg:grid xl:grid grid-cols-3 grid-rows-auto gap-6 items-center justify-items-stretch justify-content-stretch'>
                    {/*  */}
                    <div className='bg-slate-900 h-1/2 p-8 rounded-3xl flex items-center justify-center -rotate-6 group cursor-pointer'>
                        <FiTrendingUp className='text-white text-8xl group-hover:text-yellow-300 group-hover:-mt-8' />
                    </div>

                    <div className='bg-slate-900 h-1/2 p-8 rounded-3xl  flex items-center justify-center -rotate-6 group cursor-pointer ease-in-out'>
                        <FiShield className='text-white text-8xl group-hover:text-yellow-300 group-hover:-mt-8' />
                    </div>

                    <div className='bg-slate-900 h-1/2 p-8 rounded-3xl flex items-center justify-center -rotate-6 group cursor-pointer'>
                        <FiPieChart className='text-white text-8xl group-hover:text-yellow-300 group-hover:-mt-8' />

                    </div>


                </div>

            </div>
        </React.Fragment>
    )
}

export default HeroSection
