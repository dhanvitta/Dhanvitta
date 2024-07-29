"use client"
import { useState, useEffect } from "react";
import Select from 'react-select';
import MiniCards from "./MiniCards";
import Link from 'next/link';
import { FiAlignRight, FiTrendingUp, FiCheck } from "react-icons/fi";



function StockInfoCard({ data, index, setIndex }) {

    const [isAgree, setIsAgree] = useState(false);

    const options = [
        { value: 'niftyoichange', label: 'Nifty' },
        { value: 'bankniftyoichange', label: 'Bank Nifty' },
    ];

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white', padding: '0.2rem' }),
    };

    const handleIndexChange = (selectedOption) => {
        const newIndex = selectedOption.value;
        setIndex(newIndex);
    };

    return (
        <div className='-border-t bg-white p-5 border-t border-dashed flex flex-col'>

            {!isAgree ?
                <div className="bg-blue-50 p-3 rounded-md text-slate-600 w-full flex flex-row flex-wrap items-center justify-between mb-6 text-sm border ">

                    <div className="flex flex-row items-center justify-start flex-wrap">
                        Information: Please Read the disclaimer prior to utilizing the OI tool for investment decision-making.
                        <Link href='https://drive.google.com/file/d/1pJty6dMBIt1jKRf4OkCkT28MkdYvxb2a/view?usp=sharing' target="_blank"> <p className='text-blue-500 cursor-pointer ml-2 '> View Disclaimer</p></Link>
                    </div>
                    <div className="border border-blue-400 rounded-md text-blue-500 bg-blue-100 p-1 px-2 text-xs flex items-center justify-center cursor-pointer" onClick={() => setIsAgree(true)}><FiCheck className="text-blue-500 mr-2 rounded-full border border-blue-400 p-1 h-5 w-5 " /> Agree</div>

                </div> :
                ""
            }


            <div className='row-span-2 flex-col items-start justify-start w-full top-0 sticky'>
                <div className='pb-0'>
                    <h1 className='text-sm text-slate-600 mb-2'>Symbol</h1>
                    <Select
                        id="index-select"
                        options={options}
                        value={options.find(option => option.value === index)}
                        onChange={handleIndexChange}
                        className="w-40"
                        styles={colourStyles}
                    />
                </div>

            </div>

            {
                data && (
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 mt-6 gap-6'>
                        {Object.entries(data?.resultData?.[index] || {}).map(([key, value]) => (
                            <MiniCards key={key} keyName={key} value={value} />
                        ))}

                    </div>
                )
            }
        </div >
    );
}

export default StockInfoCard;
