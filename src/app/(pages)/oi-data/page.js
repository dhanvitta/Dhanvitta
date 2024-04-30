"use client"

import Header from "@/app/Components/Header"

export default function OiData() {
    return (
        <>
            <Header />
            <div className="bg-white text-sm text-slate-600 text-center"><span className="font-semibold mx-2">Note:</span>Do
                not use
                this to
                make investment decisions.</div>
            <iframe src="https://oi-data-dhanvitta.vercel.app/" frameBorder="0" width="100%" height="100%" allowFullScreen className="p-0 m-0 h-screen border-none"></iframe>

        </>
    )
}