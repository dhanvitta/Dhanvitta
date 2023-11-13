import React, { useRef, useEffect } from 'react'
import { FiTrendingUp, FiShield, FiPieChart } from "react-icons/fi";

function Section() {

    const learnPoints = [
        {
            title: 'Gain Confidence and Trade Successfully',
            description: 'Access the latest market trends and insights for informed trading decisions.',
            ref: useRef(null)
        },
        {
            title: 'Learn Faster and Smarter with AI-Powered',
            description: 'Get real-time suggestions for effective learning and faster progress.',
            ref: useRef(null)
        },
        {
            title: 'Save Time and Maximize ROI',
            description: 'Stay updated on market trends and achieve better returns on investments.',
            ref: useRef(null)
        },
        {
            title: 'Connect and Succeed with Community',
            description: 'Join a supportive community of traders and experts to achieve your trading goals.',
            ref: useRef(null)
        },
        {
            title: 'Achieve Trading Goals ',
            description: 'Get everything you need to succeed in the stock market and achieve your trading goals.',
            ref: useRef(null)
        },
        {
            title: 'And Much More ',
            description: 'Get everything you need to succeed in the stock market and achieve your trading goals.',
            ref: useRef(null)
        },
    ]


    return (
        <div className='w-11/12 mx-auto my-28 py-8 flex flex-col bg-white rounded-3xl px-1 sm:px-2 md:px-8 lg:px-8 xl:px-8'>

            <div className='flex items-center justify-center '>
                <div className='px-0'>
                    <h1 className='text-2xl xs:text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl  font-semibold leading-normal text-slate-900 mb-12 flex flex-col text-center ' >Accelerate your move to <span className='text-yellow-300 my-2  '>Dhanvitta</span> learning platform.</h1>

                    {/* <button className='rounded-full p-4 px-8 bg-[#c6e912] text-slate-900 font-semibold text-lg'>Get Started</button> */}
                </div>
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 py-12 z-10 sticky top-0 bg-white '>
                {
                    learnPoints.map(({ title, description, ref } = item, id) => (
                        <div className={`sticky top-28  m-0 p-4 rounded-xl bg-white  `} key={id} ref={(el) => (learnPoints[id].ref = el)} >
                            <div className=' z-0 top-8 left-8 p-8 h-12 w-12 bg-yellow-300 text-slate-900 flex items-center justify-center font-extrabold text-;g rounded-r-3xl mb-2  shadow-sm' >{id + 1}</div>
                            <h1 className='mt-8 text-md font-semibold text-md mb-2 text-slate-900'>{title}</h1>
                            <p className='text-sm text-gray-600 bg-white'>{description}</p>

                        </div>
                    ))

                }
            </div>

        </div>
    )
}

export default Section