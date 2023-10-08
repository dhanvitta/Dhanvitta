"use client"

import Header from '@/app/Components/Header'
import { Widget } from '@typeform/embed-react'
import React from 'react'

export default function Contact() {
    return (
        <React.Fragment>
            <div className='bg-yellow-300 h-screen w-full'>
                <Header />
                <Widget id="P6QHp4Cc" className="h-1/2 w-full top-0 z-10" />
            </div>
        </React.Fragment>
    )
}