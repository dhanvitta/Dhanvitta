import MiniCards from "./MiniCards"

function StockInfoCard({ data }) {

    const { symbol_name, close } = data.nifty50

    return (
        <>
            <div className='border bg-white p-6 rounded-3xl mb-6 flex flex-col'>

                <div className=' p-4 row-span-2 flex-col items-start justify-start border-b border-dashed w-full '>
                    <div className=''>
                        <h1 className='text-md text-gray-800 mb-1'>{symbol_name}</h1>
                        <h1 className='text-xl font-semibold text-gray-700'>{close}</h1>
                    </div>
                </div>

                <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 my-4'>
                    {Object.entries(data?.nifty50).map(([key, value]) => (
                        <>
                            <MiniCards keyName={key} value={value} />
                        </>
                    ))}


                </div>
            </div>
        </>
    )
}

export default StockInfoCard