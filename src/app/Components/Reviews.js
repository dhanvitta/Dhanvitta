import Image from 'next/image'
import React from 'react'
import { reviewsData } from '../utils/mockData'
import ReviewCard from './Reviews/ReviewCard'

function Reviews() {



    return (
        <div className='w-11/12 my-12 p-8 xs:p-8 sm:p-8 md:p-16 lg:p-16 xl:p-16 py-18 mx-auto border border-slate-100 bg-slate-50 rounded-3xl inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>

            <div className='flex flex-row flex-wrap'>

                <div className='w-full'>
                    <div className='mb-14'>
                        <h1 className='text-4xl text-slate-700 font-medium'>Learners Say <span className='text-slate-400 rounded-xl '>Dhanvitta</span>  Things! </h1>
                        <h1 className='text-xl text-slate-700 font-normal my-5'>One of our hidden secret to finding such good courses is our learners. </h1>
                    </div>

                    <div className='w-full flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_110px,_black_calc(100%-120px),transparent_100%)] overflow-hidden'>
                        <div className=' flex flex-row  gap-8 animate-infinite-scroll'>
                            {
                                reviewsData?.users?.map((user, id) => (
                                    <ReviewCard key={id} data={user} />
                                ))
                            }

                        </div >

                        <div className=' flex flex-row gap-8 ml-8 animate-infinite-scroll ' aria-hidden="true">
                            {
                                reviewsData?.users?.map((user, id) => (
                                    <ReviewCard key={id} data={user} />
                                ))
                            }


                        </div >
                    </div>

                </div >


            </div>
        </div>
    )
}

export default Reviews