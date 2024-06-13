"use client"

import Header from '@/app/Components/Header'
import { Widget } from '@typeform/embed-react'
import React from 'react'

export default function Contact() {
    return (
        <React.Fragment>
            <div className='bg-yellow-300 h-screen w-full'>
                <Header />
                {/* <Widget id="P6QHp4Cc" className="h-1/2 w-full top-0 z-10" /> */}
                <div className='w-full'>
                    <h1 className='text-xl '>Dynomyno technologies pvt. Ltd.</h1>
                    <h1 className='mt-4 text-lg'>Registered Ofice:</h1>
                    <p className='mt-2 text-lg'> 8-185/4, Vighnesh Kripa House, Near Polali Dwara, Kinni Kambala Post
                        Tankaulipady, Dakshina Kannada
                        574151, Karnataka, India

                        Contact : 9686802515</p>
                </div>
            </div>
        </React.Fragment>
    )
}