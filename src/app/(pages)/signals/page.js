"use client"
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from "@/app/utils/utils";
import { StockChartRecharts, OpenInterestChart } from '@/app/Components/Stocks/StockChart';
import Header from '@/app/Components/Header';
import StockInfoCard from '@/app/Components/Stocks/StockInfoCard';
import StockInfodifferenceCard from '@/app/Components/Stocks/StockInfoDifferenceCard';

export default function OpenInterestPage() {

    const bankNiftyURL = '/api/openInterest';
    const indexDataURL = '/api/IndexStocksData';
    const [index, setIndex] = useState('niftyoichange');
    const [symbol, setSymbol] = useState('nifty50');


    useEffect(() => {

        localStorage.setItem('index', index);

        if (index == 'niftyoichange') {
            localStorage.setItem('symbolType', 'nifty50');
            setSymbol('nifty50');
        }
        else if (index == 'bankniftyoichange') {
            localStorage.setItem('symbolType', 'niftybank');
            setSymbol('niftybank');
        }

        if (index) {
            mutateData1();
            mutateData2();
        }


    }, [index]);


    const fetcherWithPost = (url) => fetcher(url, 'POST', { body: { symbol: index } });

    const { data: data1, error: error1, isValidating: isValidating1, mutate: mutateData1 } = useSWR(
        bankNiftyURL, fetcherWithPost,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    const { data: data2, error: error2, isValidating: isValidating2, mutate: mutateData2 } = useSWR(
        indexDataURL, fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    if (error1 || error2) return (
        <div className="h-screen w-full flex items-center justify-center text-2xl flex-col">
            Failed to load data
            <button
                className='border rounded-md bg-gray-900 text-white text-sm px-5 py-2 mt-4'
                onClick={() => { mutateData1(); mutateData2(); }}>
                Retry
            </button>
        </div>
    );

    if (isValidating1 || isValidating2) return (
        <div className="h-screen w-full flex items-center justify-center text-2xl animate-pulse flex-col">
            Fetching Dhanvitta Signals ...
            <span className="rounded-md bg-gray-900 text-white mt-5 animate-spin h-6 w-6"></span>
        </div>
    );


    return (
        <React.Fragment>

            <Header />
            <div className='w-full bg-slate-100'>
                <div className='mx-auto w-11/12 h-screen '>

                    <StockInfoCard data={data2} index={index} setIndex={setIndex} symbol={symbol} mutate={{ mutateData1, mutateData2 }} />
                    <StockInfodifferenceCard data={data1} />
                    <div className='flex flex-row flex-wrap mt-5'>
                        <StockChartRecharts data={data1?.resultData?.data} />
                        {/* <OpenInterestChart data={dataOI} /> */}
                    </div>
                    {/* <StockTable data={data1?.data} /> */}
                </div>
            </div>
        </React.Fragment>
    );
}
