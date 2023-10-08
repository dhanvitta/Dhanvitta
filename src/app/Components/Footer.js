import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='w-full bg-slate-950 py-12 flex items-center justify-center bottom-0 '>
            <div className='w-full p-8 xs:w-full sm: md:w-1/2 lg:w-1/2 xl:w-1/2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  sm:py-12 md:py-12 lg:py-12 xl:py-12'>
                {/*  */}
                <div className=''>
                    <h1 className='text-white text-xl font-semibold'>DhanVitta</h1>
                    <p className='text-gray-300 text-xs font-normal mt-1'>Copyright © 2023</p>

                </div>
                {/*  */}
                <div className='my-8 sm:my-8 md:my-0 lg:my-0 xl:my-0'>
                    <h1 className='text-md font-semibold text-white mb-4'>Resources</h1>
                    <div className='text-white'>
                        <Link href=''><h6 className='text-sm mb-3 hover:text-yellow-300 text-gray-300'>News</h6></Link>
                        <Link href=''><h6 className='text-sm mb-3 hover:text-yellow-300 text-gray-300'>Learn</h6></Link>
                        <Link href=''><h6 className='text-sm mb-3 hover:text-yellow-300 text-gray-300'>Support</h6></Link>
                        <Link href=''><h6 className='text-sm mb-3 hover:text-yellow-300 text-gray-300'>Blog</h6></Link>
                    </div>
                </div>
                {/*  */}
                <div className=''>
                    <h1 className='text-md font-semibold text-white mb-4'>Company</h1>
                    <div className='text-white'>
                        <Link href=''><h6 className='text-sm mb-3 hover:text-yellow-300 text-gray-300'>About</h6></Link>
                        <Link href=''><h6 className='text-sm mb-3 hover:text-yellow-300 text-gray-300'>Careers</h6></Link>
                        <Link href=''><h6 className='text-sm mb-3 hover:text-yellow-300 text-gray-300'>Privacy</h6></Link>
                        <Link href=''><h6 className='text-sm mb-3 hover:text-yellow-300 text-gray-300'>terms</h6></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer