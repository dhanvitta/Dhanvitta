import React from 'react'
import { FiTrendingUp, FiShield, FiPieChart } from "react-icons/fi";
import Link from 'next/link'
import { MentorshipFeatures } from '../utils/mockData';
import ReviewCard from './Reviews/ReviewCard';
import FeaturesCard from './InteractiveCards/FeaturesCard';

function CoursesSection() {
    return (
        <React.Fragment>
            <div className='h-1/4 w-11/12 mx-auto rounded-3xl p-8 xs:p-8 sm:p-8 md:p-16 lg:p-16 xl:p-16 my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 bg-emerald-200 inset-0 bg-[radial-gradient(#86efac_2px,transparent_2px)] [background-size:16px_16px]'>

                <div className='flex flex-col w-full '>
                    <h2 className=' text-emerald-600 font-medium py-2 text-2xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl  mb-4 rounded-lg w-fit'>Premium</h2>

                    <h1 className=' text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl  font-semibold text-emerald-800' >Options Scalp Trading Course with Mentorship Program  </h1>

                    <div className='font-normal text-emerald-700 text-md xs:text-md sm:text-md md:text-lg lg:text-2xl xl:text-2xl tracking-normal align-middle w-full xs:w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 leading-loose mt-8'>
                        Our Options Scalp Trading Course with Mentorship Program offers a comprehensive curriculum that covers everything from basics to advanced strategies with Personal Mentorship for 1 year.
                    </div>

                    <h2 className='text-emerald-600  font-normal text-sm  mt-8 mb-4 rounded-lg w-fit'>Limited time offer | Act fast—spaces are limited! </h2>

                    <div className='w-full xs:w-full sm:w-full m:w-1/2 lg:w-1/2 xl:w-1/2 mt-1'>
                        <Link href="https://courses.dhanvitta.com/course/mentorship-program#/home">  <button className=' px-6  w-full h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500/90 text-md text-white '>Enroll Now</button> </Link>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 h-96 '>
                    <div className='mt-0 sm:mt-0 md:mt-0 lg:mt-8 xl:mt-0 h-auto w-full flex flex-col flex-nowrap [mask-image:_linear-gradient(to_bottom,transparent_0,_black_160px,_black_calc(100%-160px),transparent_100%)] overflow-hidden'>
                        <div className=' flex flex-col  gap-8 animate-infinite-scroll-y'>
                            {
                                MentorshipFeatures?.map((features, id) => (
                                    <FeaturesCard features={features} key={id} />
                                ))
                            }
                        </div >

                        <div className=' flex flex-col gap-8 animate-infinite-scroll-y mt-8' aria-hidden="true">
                            {
                                MentorshipFeatures?.map((features, id) => {
                                    <FeaturesCard features={features} key={id} />
                                })
                            }
                        </div >
                    </div>

                    {/*  */}
                    <div className='h-auto w-full hidden sm:hidden md:hidden lg:flex xl:flex flex-col flex-nowrap [mask-image:_linear-gradient(to_bottom,transparent_0,_black_160px,_black_calc(100%-160px),transparent_100%)] overflow-hidden'>
                        <div className=' flex flex-col  gap-8 animate-reverse-infinite-scroll-y'>

                            {
                                MentorshipFeatures?.map((features, id) => (
                                    <FeaturesCard features={features} key={id} />
                                ))
                            }

                        </div >

                        <div className=' flex flex-col gap-8 animate-reverse-infinite-scroll-y mt-8' aria-hidden="true">
                            {
                                MentorshipFeatures?.map((features, id) => (
                                    <FeaturesCard features={features} key={id} />
                                ))
                            }

                        </div >
                    </div>


                </div>


            </div>
        </React.Fragment>
    )
}

export default CoursesSection
