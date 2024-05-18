import Image from 'next/image'
import React from 'react'

function VideoFeedback() {
    return (
        <div className='w-11/12 my-12 p-8 xs:p-8 sm:p-8 md:p-16 lg:p-16 xl:p-16 py-18 mx-auto border border-slate-100 bg-slate-50 rounded-3xl inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                <div className='w-full'>
                    <div className=''>
                        <h1 className='text-4xl text-slate-700 font-medium'>What is <span className='text-yellow-300 rounded-xl px-3 py-1'>Dhanvitta</span>  ? </h1>
                        <h1 className='text-xl text-slate-700 font-normal my-5'>Hear from our expert. </h1>
                    </div>

                    <div className=' flex flex-row flex-wrap gap-8 mt-8'>
                        <iframe src="https://drive.google.com/file/d/1kvduCZdAbOWKhsQA9Pb7fXXwUrfxQTm-/preview" width="" height="" allow="autoplay" poster='.\ public\ image.jpg' className='h-96  w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4  rounded-2xl '></iframe>
                    </div >

                </div >


                <div className='mt-12 xs:mt-12 sm:mt-12 md:mt-12 lg:mt-0 xl:mt-0'>
                    <div className=''>
                        <h1 className='text-4xl text-slate-700 font-medium'>What our customers are saying</h1>
                        <h1 className='text-xl text-slate-700 font-normal my-3'>Listen to our customers feedback. </h1>
                    </div>

                    <div className=' flex flex-row flex-wrap gap-3 mt-8'>
                        <iframe src="https://drive.google.com/file/d/1NBnmynPWEN91dzyHXt5KzwOUXLlhBBa9/preview" width="" height="" allow="autoplay" poster='.\ public\ image.jpg' className='h-48 w-80 rounded-2xl '></iframe>
                        < iframe src="https://drive.google.com/file/d/1XxQu1lTjGGbAx2r3dRcVoer9nqn65k8h/preview" width="" height="" allow="autoplay" poster='.\public\image.jpg' className='h-48 w-80 rounded-2xl' ></iframe >
                        <iframe src="https://drive.google.com/file/d/1KBKCJeupjw8vIVTKI8FA7OihZ65OaqBZ/preview" width="" height="" allow="autoplay" poster='.\public\image.jpg' className='h-48 w-80 rounded-2xl'></iframe>
                        {/* <Image src='https://drive.google.com/thumbnail?id=13iIIZlf3BfQQMKIwP_diSqsxSenmKN41&sz=w1000' height={100} width={100} className="h-80 w-1/3 " alt="image" quality={'high'} />
                <Image src='https://drive.google.com/thumbnail?id=13iIIZlf3BfQQMKIwP_diSqsxSenmKN41&sz=w1000' height={100} width={100} className="h-80 w-1/3 " alt="image" quality={'high'} />
                <Image src='https://drive.google.com/thumbnail?id=13iIIZlf3BfQQMKIwP_diSqsxSenmKN41&sz=w1000' height={100} width={100} className="h-80 w-1/3 " alt="image" quality={'high'} /> */}
                    </div >

                </div>
            </div>
        </div>
    )
}

export default VideoFeedback