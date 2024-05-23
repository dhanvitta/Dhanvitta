import React from 'react'
import Link from 'next/link'
import { financialTerms, keywords } from '../utils/mockData';
import PillsCard from './InteractiveCards/PillsCard';

function HeroSection() {

    return (
        <React.Fragment>
            <div className='w-11/12 mx-auto rounded-3xl p-8 xs:p-8 sm:p-8 md:p-16 lg:p-16 xl:p-16 my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 bg-cyan-200 inset-0 bg-[radial-gradient(#67e8f9_2px,transparent_2px)] [background-size:16px_16px]'>

                <div className='flex flex-col w-full xs:w-full sm:w-full md:w-full lg:w-5/6 xl:w-5/6 '>
                    <h1 className='text-cyan-800 text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl  font-semibold ' >Master the Art of Stock Trading  </h1>
                    <h2 className='text-cyan-700 text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl  my-6'>with Dhanvitta</h2>
                    <p className=' text-cyan-900 break-words text-md xs:text-md sm:text-md md:text-lg lg:text-lg xl:text-lg font-normal  tracking-normal align-middle w-full xs:w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6'>Revolutionize Your Trading with Interactive Learning Resources and Expert Analysis to Help You Trade with Confidence!</p>
                    <div className='w-full xs:w-full sm:w-full m:w-1/2 lg:w-1/2 xl:w-1/2'>
                        <Link href="https://courses.dhanvitta.com/#/allcourses">  <button className='mt-8 px-6  w-full h-14 rounded-2xl bg-cyan-900 hover:bg-cyan-700 text-md text-white '>Enroll Now!</button> </Link>
                    </div>
                </div>

                <div className=' hidden xs:hidden sm:hidden md:hidden  lg:grid xl:grid grid-cols-2 grid-col-auto gap-6 items-center justify-items-stretch justify-content-stretch'>
                    {/*  */}
                    {/* <div className=' bg-slate-900 h-1/2 p-8 rounded-3xl flex items-center justify-center -rotate-6 group cursor-pointer'>
                        <FiTrendingUp className='text-white text-8xl group-hover:text-yellow-300 group-hover:-mt-8' />
                    </div>

                    <div className=' bg-slate-900 h-1/2 p-8 rounded-3xl  flex items-center justify-center -rotate-6 group cursor-pointer ease-in-out'>
                        <FiShield className='text-white text-8xl group-hover:text-yellow-300 group-hover:-mt-8' />
                    </div>

                    <div className=' bg-slate-900 h-1/2 p-8 rounded-3xl flex items-center justify-center -rotate-6 group cursor-pointer'>
                        <FiPieChart className='text-white text-8xl group-hover:text-yellow-300 group-hover:-mt-8' />
                    </div> */}


                    <div className='relative h-72 w-full mt-0 sm:mt-0 md:mt-0 lg:mt-8 xl:mt-0 flex flex-col flex-nowrap [mask-image:_linear-gradient(to_bottom,transparent_0,_black_160px,_black_calc(100%-160px),transparent_100%)] overflow-hidden'>
                        <div className='flex flex-col  gap-8 animate-infinite-scroll-y  '>
                            {
                                keywords?.map((features, id) => (
                                    <PillsCard key={id} features={features} color='cyan' />
                                ))
                            }
                        </div >


                        <div className='flex flex-col gap-8 animate-infinite-scroll-y mt-8  '>
                            {
                                keywords?.map((features, id) => (
                                    <PillsCard key={id} features={features} color='cyan' />
                                ))
                            }
                        </div >

                    </div>
                    <div className='relative h-72 w-full flex flex-col flex-nowrap [mask-image:_linear-gradient(to_bottom,transparent_0,_black_160px,_black_calc(100%-160px),transparent_100%)] overflow-hidden'>
                        <div className='flex flex-col  gap-8 animate-infinite-scroll-y  '>
                            {
                                financialTerms?.map((features, id) => (
                                    <PillsCard key={id} features={features} color='cyan' />
                                ))
                            }
                        </div >


                        <div className='flex flex-col gap-8 animate-infinite-scroll-y mt-8  '>
                            {
                                financialTerms?.map((features, id) => (
                                    <PillsCard key={id} features={features} color='cyan' />
                                ))
                            }
                        </div >

                    </div>



                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroSection
