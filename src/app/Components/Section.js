import Link from 'next/link';
import React, { useRef, useEffect } from 'react'
import { FiTrendingUp, FiShield, FiPieChart } from "react-icons/fi";

function Section() {

    const learnPoints = [
        {
            title: 'Gain Confidence and Trade Successfully',
            description: 'Learn the latest market trends and insights.',
            ref: useRef(null)
        },
        {
            title: 'Learn Faster and Smarter',
            description: 'Effective learning and faster progress.',
            ref: useRef(null)
        },
        {
            title: 'And Much More',
            description: 'Achieve your trading goals and more.',
            ref: useRef(null)
        },
        // {
        //     title: 'Connect and Succeed with Community',
        //     description: 'Join a supportive community of traders and experts to achieve your trading goals.',
        //     ref: useRef(null)
        // },
        // {
        //     title: 'Achieve Trading Goals ',
        //     description: 'Learn everything you need to succeed in the stock market and achieve your trading goals.',
        //     ref: useRef(null)
        // },
        // {
        //     title: 'And Much More ',
        //     description: 'Achieve your trading goals.',
        //     ref: useRef(null)
        // },
    ]


    return (
        <div className='w-11/12 mx-auto my-28 py-8 flex flex-col bg-white rounded-3xl px-1 sm:px-2 md:px-8 lg:px-8 xl:px-8'>

            <div className='w-full flex flex-col items-center justify-center '>
                <h1 className='text-2xl xs:text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl  font-medium leading-normal text-slate-700 mb-8 flex flex-col text-center ' >Accelerate your move to <span className='text-emerald-500 my-2  '>Dhanvitta</span> learning platform.</h1>
                <div className='w-full flex items-center justify-center '>
                    <iframe id='st_registerform_iframe' width='100%' height='780px' src="https://courses.dhanvitta.com/embedcourses?layout=type5&filter=all" name="iFrame Name" scrolling="Yes" className='border-0 w-full '></iframe>
                    {/* <Link href="https://courses.dhanvitta.com">  <button className='mt-2 px-8  w-full h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-500/80 text-md text-white '>Explore Now!</button> </Link> */}
                </div>
            </div>
            {/* <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 py-12 z-10 sticky top-0 bg-white '>
                {
                    learnPoints.map(({ title, description, ref } = item, id) => (
                        <div className={`sticky top-28  m-0 p-4 rounded-xl bg-white  flex flex-col items-center`} key={id} ref={(el) => (learnPoints[id].ref = el)} >
                            <div className=' z-0 top-8 left-8 p-8 h-12 w-12 bg-emerald-300 text-emerald-800 flex items-center justify-center font-extrabold rounded-full mb-2  shadow-sm' >{id + 1}</div>
                            <h1 className='mt-8 text-md font-semibold text-lg mb-2 text-emerald-800'>{title}</h1>
                            <p className='text-md text-gray-600 bg-white font-normal'>{description}</p>

                        </div>
                    ))

                }
            </div> */}

        </div>
    )
}

export default Section