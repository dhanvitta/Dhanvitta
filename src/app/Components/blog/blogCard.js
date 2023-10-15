/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from "next/image";
import Tags from "./tags";

export default function BlogCard({ blog }) {

    return (
        <div className=" basis-96 shadow-sm rounded-xl border flex-1 overflow-hidden hover:shadow-md cursor-pointer group">
            <div className=" flex flex-col ">
                <div className="w-full flex flex-col">
                    <div className={`p-8 border-b group-hover:bg-yellow-50`}>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <Image src={blog["Added By"].people[0]?.avatar_url} height={10} width={10} className="h-6 w-6 rounded-full " />
                                <h1 className="text-sm font-medium text-gray-700 ml-4">{blog["Added By"].people[0]?.name}</h1>
                            </div>
                            <div className="">
                                <h1 className="text-xs font-medium text-gray-500 text-right px-5 py-2 rounded-lg w-fit border">{blog?.Added?.date?.start.split('T')[0]}</h1>

                            </div>
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-700 my-5"> {blog.Title.title[0].plain_text}</h1>


                    </div>
                    <div className="px-8 py-6">
                        <p className="text-md font-normal text-gray-600 line-clamp-6 leading-normal">{blog.description?.rich_text[0]?.plain_text}</p>
                    </div>
                </div>
            </div>
            <div className="px-8 pb-5  w-full flex flex-wrap gap-2 mt-6">
                {blog?.Category?.multi_select.map((tags, id) => (
                    <Tags data={tags} key={id} />
                )
                )}


            </div>
        </div>
    )
}