import React from 'react'
import { FiTrendingUp, FiShield, FiClock, FiDollarSign, FiPieChart } from "react-icons/fi";

function Advantanges() {
    const advantages = [
        {
            title: 'News and Insights',
            description: 'Stay informed with news feeds on latest market trends and insights.',
            style: 'border-0 xs:border-0 sm:border-0 md:border-0 lg:border-r lg:border-b xl:border-r xl:border-b flex flex-row p-0 xs:p-0 sm:p-0 md:p-0 lg:p-8 xl:p-8'
        },
        {
            title: 'Real-Time AI Suggestions',
            description: 'Stay ahead with smart alerts based on market trends.',
            style: ' border-0 xs:border-0 sm:border-0 md:border-0 lg:border-b xl:border-b  flex flex-row p-0 xs:p-0 sm:p-0 md:p-0 lg:p-8 xl:p-8'

        },
        {
            title: 'Expert Guidance',
            description: 'Get support from experienced traders and analysts.',
            style: 'border-0 xs:border-0 sm:border-0 md:border-0 lg:border-r xl:border-r  flex flex-row p-0 xs:p-0 sm:p-0 md:p-0 lg:p-8 xl:p-8'

        },
        {
            title: 'Comprehensive Learning Resources',
            description: 'Access blogs, news feeds, and simulations to enhance your skills.',
            style: 'border-0 xs:border-0 sm:border-0 md:border-0 lg:border-0 xl:border-0  flex flex-row p-0 xs:p-0 sm:p-0 md:p-0 lg:p-8 xl:p-8'

        }
    ]
    return (
        <div className='px-8 xs:px-8 sm:px-8 md:px-8 lg:px-0 xl:px-0 w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mx-auto my-28 py-8 '>
            <div className='grid grid-cols-1 items-center justify-center'>
                <div className='flex flex-col items-center mb-20 '>
                    <h1 className='text-4xl font-semibold mb-4'>Advantages</h1>
                    <p className='text-lg w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 text-center'>We listen to our customers and work with them to improve the user experience of our platform</p>
                </div>

                <div className=' grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 '>
                    {/*  */}
                    {advantages.map(({ title, description, style } = data, id) => (
                        <div className={`${style} mb-12 xs:mb-12 sm:mb-12 md:mb-12 lg:mb-0 xl:mb-0`} key={id}>

                            <div className=''>
                                <div className='p-4 h-18 w-18 rounded-full flex items-start justify-center bg-yellow-300 mr-8'>
                                    <FiTrendingUp className='text-lg font-bold  ' />
                                </div>
                            </div>

                            <div className=''>
                                <h1 className='text-lg font-semibold'>{title}</h1>
                                <p className='mt-2 text-md text-gray-600'>{description}</p>
                                <button className='px-3 py-2 rounded-lg border mt-4 bg-gray-200 text-sm'>Explore More</button>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Advantanges