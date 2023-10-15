"use client"

import BlogCard from "@/app/Components/blog/blogCard";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Image from "next/image";
import React from "react";
import useSWR from 'swr';
import { fetcher } from "@/app/utils/utils";

export default function Blogs() {
    const apiUrl = '/api/all_blogs';

    const { data, error, isValidating } = useSWR(apiUrl, fetcher);
    if (error) return <div>Failed to load</div>
    if (isValidating) return <div className="h-screen w-full flex items-center justify-center text-4xl animate-pulse ">Loading...</div>

    return (
        <React.Fragment>
            <Header />
            <div className="w-11/12 mx-auto pb-8 my-6 overflow-hidden h-full">
                <div className="bg-white py-8 flex items-center justify-center flex-col border-b sticky top-0 z-10">
                    <h1 className="text-4xl italic text-gray-800 font-normal">Blogs</h1>
                    <h2 className="text-lg italic text-gray-600 font-normal mt-3">Get unlimited access to the best of blogs.</h2>
                </div>

                {/* Layout */}
                <div className="p-8 flex flex-wrap w-full gap-8 static mt-6">
                    {data && data?.message?.map((blog, id) => (
                        <BlogCard key={id} blog={blog} />
                    ))}



                </div>
            </div>
        </React.Fragment>
    )
}
