import Tags from "./tags";

export default function BlogCard() {
    return (
        <div className=" basis-96 shadow-sm rounded-xl border flex-1 overflow-hidden hover:shadow-md cursor-pointer group">
            <div className=" flex flex-col ">
                <div className="w-full flex flex-col">
                    <div className="p-8 border-b group-hover:bg-yellow-50">
                        <h1 className="text-xs font-medium text-gray-500 text-right px-5 py-2 rounded-lg w-fit border">10-10-2023</h1>
                        <h1 className="text-2xl font-semibold text-gray-700 my-5">Stocks Unveiled: Navigating the Financial Markets</h1>
                        <h1 className="text-sm font-medium text-gray-700 ">@Samanth_kumar</h1>

                    </div>
                    <div className="px-8 py-6">
                        <p className="text-md font-normal text-gray-600 line-clamp-6 leading-normal">Dive into the world of stocks and investing with &quot;Stocks Unveiled,&quot; your trusted resource for everything related to the financial markets. Whether you&apos;re a seasoned investor or just starting your journey, our blog offers valuable insights, market analysis, and expert advice to help you make informed decisions. From understanding stock fundamentals to exploring advanced trading strategies, we cover it all. Join us as we demystify the world of stocks, share market trends, and empower you to grow your wealth through smart investment choices. Start your financial journey with us today and unlock the potential of the stock market!</p>
                    </div>
                </div>
            </div>
            <div className="px-8 pb-5  w-full flex flex-wrap gap-2 mt-6">
                <Tags label='Intraday' />
                <Tags label='Scalp Trading' />
                <Tags label='Stocks' />
                <Tags label='Intraday' />

            </div>
        </div>
    )
}