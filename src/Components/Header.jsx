import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FiAlignRight, FiTrendingUp } from "react-icons/fi";

function Header() {
    const [toggleState, setToggleState] = React.useState(false)
    const toggle = () => {
        setToggleState(!toggleState);
    }
    return (
        <React.Fragment>
            <div className='top-0 sticky z-50  backdrop-blur-sm hidden xs:hidden sm:hidden md:hidden lg:flex xl:flex flex-row items-center justify-between py-6 font-normal px-0 w-full mx-auto xs:w-full sm:w-full md:w-full lg:w-11/12 xl-11/12'>
                <div className='w-1/4 '><Link className='w-full' to='/'><div className='flex items-center flex-col w-28 rounded text-md font-medium p-2 text-gray-900 '> <FiTrendingUp className='text-xl mr-2 ' onClick={toggle} /> Dhanvitta</div></Link></div>
                <div className='flex flex-row items-center  justify-center mt-4 xs:mt-6 sm:mt-0 md:mt-0 lg:mt-0 text-sm text-slate-900 w-full '>
                    <Link to='/learn'><p className='hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-wavy mr-6 cursor-pointer'>Learn with AI</p></Link>
                    <Link to='/news'> <p className='hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-wavy mr-6 cursor-pointer'>News</p></Link>
                    <p className='hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-wavy mr-6 cursor-pointer'>Blogs</p>
                    <p className='hover:text-blue-500 hover:underline hover:underline-offset-8 hover:decoration-wavy mr-6 cursor-pointer'>About Us</p>
                </div>
                <div className='w-1/2 flex items-center justify-end '>
                    <button className='px-6 py-3 rounded-lg bg-slate-900 text-sm text-white '>Start Learning</button>

                </div>
            </div >
            {/* responsive header */}
            <div className='top-0 sticky z-50 flex flex-col sm:flex sm:flex-col md:flex md:flex-col lg:hidden xl:hidden items-start justify-between py-6 font-normal w-full mx-auto px-6 bg-white'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <div className='text-1xl font-semibold '>
                        <Link className='w-full flex flex-start' to='/'><div className='flex items-center flex-col text-md font-medium'> <FiTrendingUp className='text-xl mr-2 text-gray-900' onClick={toggle} /> Dhanvitta</div></Link></div >
                    <FiAlignRight className='text-3xl font-normal' onClick={toggle} />
                </div >
                {
                    toggleState ? (
                        <React.Fragment >
                            <div className='flex flex-col items-start  justify-between  text-sm text-slate-900 w-full h-full py-8 '>
                                <Link className='w-full' to='/news'> <p className='hover:text-blue-500   w-full py-8 text-lg border-b cursor-pointer'>Learn with AI</p></Link>
                                <Link className='w-full' to='/news'> <p className='hover:text-blue-500   w-full py-8 text-lg border-b cursor-pointer'>News</p></Link>
                                <Link className='w-full' to='/news'><p className='hover:text-blue-500   w-full py-8 text-lg border-b cursor-pointer'>Blogs</p></Link>
                                <Link className='w-full' to='/news'><p className='hover:text-blue-500  w-full  py-8 text-lg border-b cursor-pointer'>About Us</p></Link>
                            </div>

                            <div className='w-full  flex items-center justify-start py-8'>
                                <button className='w-full h-16 rounded-lg bg-slate-900 text-sm text-white '>Start Learning</button>

                            </div>
                        </React.Fragment >) : ''}
            </div >
        </React.Fragment >
    )
}

export default Header