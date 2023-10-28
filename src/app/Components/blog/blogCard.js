/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from "next/image";
import Tags from "./tags";

export default function BlogCard({ blog }) {
    return (
        <div className="basis-80 flex-1 shadow-sm rounded-xl border overflow-hidden hover:shadow-md cursor-pointer group">
            <div className=" flex flex-col ">
                <div className="w-full flex flex-col">
                    <div className={`p-8 border-b group-hover:bg-yellow-50`}>
                        <div className="">
                            <h1 className="text-sm font-medium text-slate-500 text-left rounded-lg">{blog?.Added?.date?.start.split('T')[0]}</h1>
                        </div>

                        <div className="py-4">
                            <h1 className="text-xl font-semibold text-gray-700 "> {blog?.Title?.title[0]?.plain_text}</h1>
                        </div>

                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <Image src={blog["Added By"]?.people[0]?.avatar_url} height={10} width={10} className="h-6 w-6 rounded-full " alt={blog["Added By"].people[0]?.name} />
                                <h1 className="text-sm font-medium text-gray-500 ml-4">{blog["Added By"]?.people[0]?.name}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 py-6">
                        <p className="text-sm font-normal text-gray-600 line-clamp-2 leading-normal">{blog?.description?.rich_text[0]?.plain_text}</p>
                    </div>
                </div>
            </div>
            <div className="px-8 pb-5  w-full flex flex-wrap gap-2 ">
                {blog?.Category?.multi_select.map((tags, id) => (
                    <Tags data={tags} key={id} />
                )
                )}

            </div>
        </div>
    )
}