"use client"

import Header from "@/app/Components/Header"
import Link from 'next/link'

export default function OiData() {
    return (
        <>
            <Header />
            <div className="bg-white text-sm  w-full flex flex-row items-center">
                <div className="text-slate-600 w-full flex flex-row items-center justify-center"> <span className="font-semibold mx-2">Note:</span>Please Read the disclaimer prior to utilizing the OI tool for investment decision-making. |
                    <Link href='https://drive.google.com/file/d/1pJty6dMBIt1jKRf4OkCkT28MkdYvxb2a/view?usp=sharing' target="_blank"><p className='text-blue-500  mx-2 cursor-pointer'>View Disclaimer</p></Link>

                </div>

            </div>
            <iframe src="https://oi-data-dhanvitta.vercel.app/" frameBorder="0" width="100%" height="100%" allowFullScreen className="p-0 m-0 h-screen border-none"></iframe>

        </>
    )
}