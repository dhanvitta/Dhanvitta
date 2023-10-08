"use client"

import Header from '@/app/Components/Header'
import { Widget } from '@typeform/embed-react'
import React from 'react'

export default function Contact() {
    return (
        <React.Fragment>
            <div className='bg-yellow'>
                <Header />
                <Widget id="P6QHp4Cc" className=" h-screen w-full top-0 fixed" />
            </div>
        </React.Fragment>
    )
}