import MiniCards from "./MiniCards"

function StockInfoCard({ data }) {
    const { symbol_name, close } = data.nifty50;

    return (

        <div className='-border-t bg-white p-6 border-t border-dashed  flex flex-col '>

            <div className=' row-span-2 flex-col items-start justify-start border-b border-dashed w-full top-0 sticky'>
                <div className='pb-4'>
                    <h1 className='text-sm text-slate-600 mb-1'>{symbol_name}</h1>
                    <h1 className='text-lg font-semibold text-slate-700'>{close}</h1>
                </div>
            </div>

            <div className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 mt-6 gap-6 '>
                {Object.entries(data?.nifty50).map(([key, value]) => (
                    <>
                        <MiniCards keyName={key} value={value} />
                    </>
                ))}
            </div>
        </div>

    )
}

export default StockInfoCard