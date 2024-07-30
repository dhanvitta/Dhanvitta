"use client"
import { useState, useEffect } from "react";
import Select from 'react-select';
import MiniCards from "./MiniCards";
import Link from 'next/link';
import { FiAlignRight, FiTrendingUp, FiCheck } from "react-icons/fi";
import { IoRefreshSharp } from "react-icons/io5";



function StockInfoCard({ data, index, setIndex, symbol, mutate }) {

    console.log("SYMBOL", Object.entries(data?.resultData?.[symbol] || {}).slice(0, 7))
    const [isAgree, setIsAgree] = useState(false);

    const options = [
        { value: 'niftyoichange', label: 'Nifty' },
        { value: 'bankniftyoichange', label: 'Bank Nifty' },
    ];

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white', padding: '0.1rem' }),
    };

    const handleIndexChange = (selectedOption) => {
        const newIndex = selectedOption.value;
        setIndex(newIndex);
    };





    return (
        <div className='-border-t bg-white  border-t border-dashed flex flex-col p-4'>

            {!isAgree ?
                <div className="bg-blue-50 p-3 rounded-md text-slate-600 w-full flex flex-row flex-wrap items-center justify-between mb-6 text-sm border gap-2">

                    <div className="flex flex-row items-center justify-start flex-wrap gap-2">
                        Information: Please Read the disclaimer prior to utilizing the OI tool for investment decision-making.
                        <Link href='https://drive.google.com/file/d/1pJty6dMBIt1jKRf4OkCkT28MkdYvxb2a/view?usp=sharing' target="_blank"> <p className='text-blue-500 cursor-pointer '> View Disclaimer</p></Link>
                    </div>
                    <div className="border border-blue-400 rounded-md text-blue-500 bg-blue-100 p-1 px-2 text-xs flex items-center justify-center cursor-pointer" onClick={() => setIsAgree(true)}><FiCheck className="text-blue-500 mr-2 rounded-full border border-blue-400 p-1 h-5 w-5 " /> Agree</div>

                </div> :
                ""
            }


            <div className='bg-white z-40 row-span-2 flex-col items-start justify-between  w-full top-0 sticky border-b border-dashed pb-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
                <div className=''>
                    <h1 className='text-xs text-slate-600 mb-2'>Symbol</h1>
                    <Select
                        id="index-select"
                        options={options}
                        value={options.find(option => option.value === index)}
                        onChange={handleIndexChange}
                        className="w-full sm:w-full md:w-44 lg:w-44 xl:w-44 text-sm z-50"
                        styles={colourStyles}
                    />
                </div>



                <div className=' col-start-1 sm:col-start-1 md:col-start-3 lg:col-start-4 xl:col-start-4  col-span-1 w-full bg-blue-100 hover:bg-blue-200 text-blue-500 border-2 rounded-lg border-blue-500 flex items-center justify-center self-end float-right flex-col py-4 cursor-pointer group' onClick={() => { mutate.mutateData1(); mutate.mutateData2() }}>
                    <IoRefreshSharp className="h-6 w-6 group-hover:rotate-180 transition ease-in-out duration-300  " />
                </div>

                {/* <div className=' bg-blue-100 text-blue-500 border-2 rounded-lg border-blue-500 flex items-center justify-center flex-col py-4' onClick={() => { mutate.mutateData1(); mutate.mutateData2() }}>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={interval}
                        onChange={(e) => {
                            setInterval(Number(e.target.value));
                            localStorage.setItem('interval', Number(e.target.value));

                        }}
                    />
                </div> */}

            </div>


            {
                data?.resultData && (
                    <div className='bg-white z-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 gap-6 pt-4 top-0 sticky '>
                        {Object.entries(data?.resultData?.[symbol] || {}).slice(0, 7).map(([key, value]) => (
                            <MiniCards key={key} keyName={key} value={value} />
                        ))}

                    </div>
                )
            }
        </div >
    );
}

export default StockInfoCard;
