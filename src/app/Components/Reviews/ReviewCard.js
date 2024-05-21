import Image from 'next/image'
import React from 'react'
import ReactStars from 'react-stars'

function ReviewCard() {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }



    return (
        <div className=' h-fit w-80 md:even:mt-6 lg:even:mt-6 xl:even:mt-6 p-6 rounded-2xl border bg-white/40 shadow-sm '>
            <div className='flex flex-row items-center justify-start'>
                <Image src={'account.svg'} height={24} width={24} alt="User Image" className='rounded-full h-7 w-7 border border-gray-800 p-1' />
                <h1 className='ml-4 text-sm text-gray-800 font-medium'>Samanth Kumar</h1>
            </div>
            <hr className='my-3' />
            <ReactStars
                count={5}
                value={4}
                onChange={ratingChanged}
                size={22}
                edit={false}
                color2={'#facc15'} />
            <div className='py-3'>
                <h1 className='text-sm font-medium mb-3'>Worth the price. </h1>
                <p className='text-sm font-normal'>A course with in-depth clarity on all the relevant points.</p>
            </div>
        </div>
    )
}

export default ReviewCard