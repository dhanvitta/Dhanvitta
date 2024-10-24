"use client"
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from "@/app/utils/utils";
import { StockChartRecharts, OpenInterestChart } from '@/app/Components/Stocks/StockChart';
import Header from '@/app/Components/Header';
import StockInfoCard from '@/app/Components/Stocks/StockInfoCard';
import StockInfodifferenceCard from '@/app/Components/Stocks/StockInfoDifferenceCard';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    SignIn,
    RedirectToSignIn
  } from '@clerk/nextjs'

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
        <ClerkProvider>
            <Header />
            {/* <SignIn /> */}
        
            <div className='w-full relative mt-5 '>
                <div className='mx-auto w-11/12 h-screen rounded-3xl '>
                    
                    <div className='bg-white rounded-lg flex items-center justify-end py-3 px-2 '>
                    <SignedOut>
                        <SignInButton mode='modal' forceRedirectUrl='/signals'>
                            <button className='bg-emerald-700 text-white px-4 py-1.5 rounded-sm text-xs'>Sign in</button>
                        </SignInButton>
                    </SignedOut>
                    <UserButton >
                        
                    </UserButton>
                    </div>

                    <SignedIn>
                        <StockInfoCard data={data2} index={index} setIndex={setIndex} symbol={symbol} mutate={{ mutateData1, mutateData2 }} />
                        <StockInfodifferenceCard data={data1} />
                        <div className='flex flex-row flex-wrap mt-5'>
                            <StockChartRecharts data={data1?.resultData?.data} />
                            {/* <OpenInterestChart data={dataOI} /> */}
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <div className='rounded-4xl w-full h-1/2 p-8 flex items-center justify-start bg-white inset-0 bg-[radial-gradient(#86efac_2px,transparent_2px)] [background-size:32px_32px]'>
                            <div className="rounded-2xl  ">
                            <h1 className=' text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl  font-semibold text-emerald-800 rounded-sm bg-emerald-300 w-fit p-3' >Real-Time Signals  </h1>
                            <h1 className=' text-lg xs:text-xl sm:text-xl md:text-xl lg:text-4xl xl:text-4xl  font-semibold text-emerald-700 bg-white p-3 w-fit ' >Sign In Now to Unlock Exclusive Access! </h1>
                            <h1 className=' text-sm xs:text-sm sm:text-sm md:text-lg lg:text-2xl xl:text-2xl  font-normal text-emerald-600 bg-white p-3 w-fit ' >Join a growing community of traders who have benefited from our consistent and actionable market signals.</h1>

                            <SignedOut>
                        <SignInButton mode='modal' forceRedirectUrl='/signals'>
                            <button className='bg-emerald-700 text-white px-4 py-2 rounded-md text-sm mt-8'>Explore Features </button>
                        </SignInButton>
                    </SignedOut>
                            </div>
                        </div>
                    </SignedOut>
                    {/* <StockTable data={data1?.data} /> */}
                </div>
            </div>
            </ClerkProvider>
        </React.Fragment>
    );
}
