import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic';

const ReactStars = dynamic(() => import('react-stars'), { ssr: false });

function ReviewCard({ data = {} }) {


    const { name, message, ratings } = data;




    return (
        <div className=' h-fit w-80 md:even:mt-6 lg:even:mt-6 xl:even:mt-6 p-6 rounded-2xl border bg-white/40 shadow-sm snap-center '>
            <div className='flex flex-row items-center justify-start'>
                <Image src={'account.svg'} height={24} width={24} alt="User Image" className='rounded-full h-7 w-7 border border-gray-800 p-1' />
                <h1 className='ml-4 text-sm text-gray-800 font-medium'>{data?.name}</h1>
            </div>
            <hr className='my-3' />
            <ReactStars
                count={5}
                value={ratings}

                size={22}
                edit={false}
                color2={'#facc15'} />
            <div className='py-3'>
                <p className='text-sm font-normal leading-normal'>{message}</p>
            </div>
        </div>
    )
}

export default ReviewCard