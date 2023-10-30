"use client"

import BlogCard from "@/app/Components/blog/blogCard";
import Header from "@/app/Components/Header";
import React from "react";
import useSWR from 'swr';
import { fetcher } from "@/app/utils/utils";

export default function Blogs() {
    const apiUrl = '/api/all_blogs';
    const { data, error, isValidating } = useSWR(apiUrl, fetcher);
    if (error) return <div>Failed to load</div>
    if (isValidating) return <div className="h-screen w-full flex items-center justify-center text-2xl animate-pulse flex-col">Fetching Dhanvitta Blogs... <span className="rounded-md bg-gray-900 text-white mt-5 animate-spin h-6 w-6 "></span></div>

    return (
        <React.Fragment>
            <Header />
            <div className="w-11/12 mx-auto pb-8 my-6 overflow-hidden h-full">
                <div className="bg-white py-8 flex items-center justify-center flex-col border-0 sticky top-0 z-10">
                    <h1 className="text-2xl italic text-gray-800 font-normal">Blogs</h1>
                    <h2 className="text-md italic text-gray-600 font-normal mt-2">Get unlimited access to the best of blogs.</h2>
                </div>

                {/* Layout */}
                <div className="p-2 sm:p-2 md:p-8 lg:p-8 xl:p-8 flex flex-wrap w-full gap-8 static mt-6">
                    {data ? (
                        data?.message?.map((blog, id) => (
                            <BlogCard key={id} blog={blog} />
                        ))
                    ) : <div className="flex items-center justify-center mx-auto text-3xl text-gray-600">
                        No Blogs found!
                    </div>}
                </div>
            </div>
        </React.Fragment>
    )
}
