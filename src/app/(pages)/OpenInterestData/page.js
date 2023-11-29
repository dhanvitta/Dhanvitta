"use client"
import React from 'react'
import useSWR from 'swr';
import { fetcher } from "@/app/utils/utils";
import { StockChartRecharts, OpenInterestChart } from '@/app/Components/Stocks/StockChart';
import Header from '@/app/Components/Header';
import StockInfoCard from '@/app/Components/Stocks/StockInfoCard';

export default function OpenInterestPage() {

    const niftyOiDataChangeDataURL = 'https://oidata-server.onrender.com/api/niftyoichangedata';
    const OIDataURL = 'https://oidata-server.onrender.com/oidata/niftyoi'
    const indexDataURL = 'https://oidata-server.onrender.com/api/indexdata';

    const useData = (url) => {
        const { data, error, isValidating, mutate } = useSWR(url, fetcher, {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        });

        return {
            data,
            error,
            isValidating,
            mutateData: () => mutate(),
        };
    };

    const { data: data1, error: error1, isValidating: isValidating1, mutateData: mutateData1 } = useData(niftyOiDataChangeDataURL);
    const { data: data2, error: error2, isValidating: isValidating2, mutateData: mutateData2 } = useData(indexDataURL);
    const { data: dataOI, error: errorOI, isValidating: isValidatingOI, mutateData: mutateDataOI } = useData(OIDataURL);

    if (error1 || error2 || errorOI) return <div className="h-screen w-full flex items-center justify-center text-2xl flex-col">
        Failed to load data
        <div className=''>
            <button className='border rounded-md bg-gray-900 text-white text-sm px-5 py-2 mt-4' onClick={() => mutateData1('https://oidata-server.onrender.com/api/niftyoichangedata')}>Retry</button>
        </div>
    </div>

    if (isValidating1 || isValidating2 || isValidatingOI) return <div className="h-screen w-full flex items-center justify-center text-2xl animate-pulse flex-col">Fetching Open Interest Data ... <span className="rounded-md bg-gray-900 text-white mt-5 animate-spin h-6 w-6 "></span></div>

    return (
        <React.Fragment>
            <Header />
            <div className=' w-full  bg-slate-100 '>
                <div className='mx-auto w-11/12 h-screen'>
                    <StockInfoCard data={data2} />
                    <div className='flex flex-row flex-wrap mt-5'>
                        <StockChartRecharts data={data1?.data} />
                        <OpenInterestChart data={dataOI} />
                    </div>
                </div >
            </div>
        </React.Fragment>
    )
}
