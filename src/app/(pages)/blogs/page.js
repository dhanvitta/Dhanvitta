import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import React from "react";

export default function Blogs() {
    return (
        <React.Fragment>
            <Header />
            <div className="w-11/12 bg-gray-100 mx-auto rounded-3xl border pb-12 my-12 overflow-hidden">
                <div className=" bg-white p-8 rounded-lg ">
                    <h1 className="text-3xl text-gray-800 font-normal">Blogs</h1>
                    <h2 className="text-md text-gray-600 font-normal mt-3">Get unlimited access to the best of blogs.</h2>
                </div>

                {/* Layoult */}
                <div className="grid grid-cols-2">

                    {/* Blog post layoult */}
                    <div className="border p-8 w-3/4">
                        <div className="bg-white p-8 shadow-md rounded-3xl border w-full  flex flex-row">
                            <div className="w-1/4">image</div>
                            <div className="w-full ">
                                <h1 className="text-3xl font-semibold text-gray-900 mb-6">Stocks Unveiled: Navigating the Financial Markets</h1>
                                <p className="text-md font-normal text-slate-500">Dive into the world of stocks and investing with "Stocks Unveiled," your trusted resource for everything related to the financial markets. Whether you're a seasoned investor or just starting your journey, our blog offers valuable insights, market analysis, and expert advice to help you make informed decisions. From understanding stock fundamentals to exploring advanced trading strategies, we cover it all. Join us as we demystify the world of stocks, share market trends, and empower you to grow your wealth through smart investment choices. Start your financial journey with us today and unlock the potential of the stock market!</p>
                            </div>

                        </div>
                    </div>
                    {/* Blog external components layoult */}
                    <div className="">

                        <div className="py-12 ">
                            <div className="bg-white p-8 shadow-md rounded-3xl border w-48 h-64 ">comp 2</div>
                        </div>

                    </div>


                </div>

            </div>
        </React.Fragment>

    )
}