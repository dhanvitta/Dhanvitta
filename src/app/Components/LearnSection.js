import React, { useRef, useEffect } from 'react'

function LearnSection() {

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
    ]


    return (
        <div className='w-11/12 mx-auto my-28 py-8 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  bg-[#f9fafb] rounded-3xl shadow-sm px-8'>
            <div className='flex items-center justify-center '>
                <div className=''>
                    <h1 className='text-4xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl  font-extrabold leading-normal text-slate-900 mb-12 flex flex-col' >WHAT YOU’LL GET AS  <span className='text-blue-300  -rotate-12'>RESULT</span></h1>
                    {/* <button className='rounded-full p-4 px-8 bg-[#c6e912] text-slate-900 font-semibold text-lg'>Get Started</button> */}
                </div>
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 py-8 z-0 sticky top-0 bg-[#f9fafb] '>
                {
                    learnPoints.map(({ title, description, ref } = item, id) => (
                        <div className={` sticky top-40  border m-8 p-4 rounded-xl bg-white shadow-sm `} key={id} ref={(el) => (learnPoints[id].ref = el)} >
                            <div className='absolute z-0 -top-8 -left-8 p-8 h-12 w-12 bg-yellow-300 text-slate-900 flex items-center justify-center font-extrabold text-xl rounded-lg mb-6  shadow-sm' >{id + 1}</div>
                            <h1 className='mt-8 text-md font-semibold text-lg mb-2 text-slate-900'>{title}</h1>
                            <p className='text-md text-gray-600'>{description}</p>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default LearnSection