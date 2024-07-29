"use client"
import { useState, useEffect } from "react";
import MiniCards from "./MiniCards";

function StockInfodifferenceCard({ data }) {
    const [ce, setCe] = useState(0);
    const [pe, setPe] = useState(0);
    const [doi, setDoi] = useState(0);
    const [signal, setSignal] = useState("Neutral");

    useEffect(() => {
        if (data?.resultData?.data) {
            let totalCe = 0;
            let totalPe = 0;

            data?.resultData.data.forEach(({ calls_change_oi, puts_change_oi }) => {
                totalCe += calls_change_oi;
                totalPe += puts_change_oi;
            });

            const differenceOi = Math.abs(totalCe - totalPe);
            setCe(totalCe);
            setPe(totalPe);
            setDoi(differenceOi);

            if (differenceOi > 5000000) {
                if (totalPe > totalCe) {
                    setSignal("Bullish");
                } else if (totalCe > totalPe) {
                    setSignal("Bearish");
                }
            } else {
                setSignal("Neutral");
            }
        }
    }, [data]);

    return (
        <div className='-border-t bg-white p-5 border-t border-dashed flex flex-col'>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 mt-0 gap-6'>
                <MiniCards keyName={'Total Call OI'} value={ce.toLocaleString('en-IN')} />
                <MiniCards keyName={'Total Put OI'} value={pe.toLocaleString('en-IN')} />
                <MiniCards keyName={'Difference OI'} value={doi.toLocaleString('en-IN')} />
                <MiniCards keyName={'Result'} value={signal.toLocaleString('en-IN')} />
            </div>
        </div>
    );
}

export default StockInfodifferenceCard;
