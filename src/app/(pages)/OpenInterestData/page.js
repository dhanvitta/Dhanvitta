"use client"
import React from 'react'
import useSWR from 'swr';
import { fetcher } from "@/app/utils/utils";
import StockChartRecharts from '@/app/Components/Stocks/StockChart';
import Header from '@/app/Components/Header';

export default function OpenInterestPage() {
    const apiURL = 'https://oidata-server.onrender.com/api/niftyoichangedata';

    const { data, error, isValidating } = useSWR(apiURL, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });


    if (error) return <div>Failed to load</div>
    if (isValidating) return <div className="h-screen w-full flex items-center justify-center text-2xl animate-pulse flex-col">Fetching Open Interest Data ... <span className="rounded-md bg-gray-900 text-white mt-5 animate-spin h-6 w-6 "></span></div>

    return (
        <React.Fragment>
            {/* <Header /> */}
            <div className='w-full  bg-gray-50 '>
                <div className='mx-auto w-11/12 '>
                    <StockChartRecharts data={data?.data} />
                    {/* {
                        data?.data?.map((data, index) =>
                            <div className='ml-4 border flex flex-row w-fit' key={index}>
                                <h1 className='text-md'>{data.strike_price}</h1>
                                <h1 className='text-sm mx-2 text-green-500'>{data.puts_change_oi}</h1>
                                <h1 className='text-sm mx-2 text-red-500'>{data.calls_change_oi}</h1>
                            </div >
                        )
                    } */}
                </div >
            </div>
        </React.Fragment>
    )
}
