import Image from 'next/image'
import React from 'react'

function Featured() {
    return (
        <div className='w-11/12 my-10 p-8 xs:p-8 sm:p-8 md:p-16 lg:p-16 xl:p-16 py-18 mx-auto border border-slate-100 bg-slate-50 rounded-3xl inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>

            <div className='grid grid-cols-1 '>
                <div className='w-full'>
                    <div className=''>
                        <h1 className='text-3xl text-slate-700 font-medium my-2'>Join 10,000+ Users Who Trust Us – Featured on Moneycontrol </h1>
                    </div>

                    <div className=' flex flex-col  flex-wrap gap-8 mt-8'>
                        <div className='flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row  items-center justify-center gap-8'>
                            <Image src={"https://getlogo.net/wp-content/uploads/2020/04/moneycontrol-logo-vector.png"} width={450}
                                height={450}
                                alt="Money controll dhanvitta" className="object-cover w-72 mix-blend-multiply" />
                            <h1 className='text-xl text-slate-700 my-1 text-left'>We&apos;ve been recognized by Moneycontrol, one of the most trusted financial news platforms. This recognition reinforces our commitment to providing exceptional services to all our users.</h1>
                        </div >
                    </div>
                </div >



            </div>
        </div>
    )
}

export default Featured