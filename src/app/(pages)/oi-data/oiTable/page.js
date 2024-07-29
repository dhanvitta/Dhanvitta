"use client"
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const IndexPage = () => {
    const [data, setData] = useState(null);
    const [tableData, setTableData] = useState([]);
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const index = localStorage.getItem('index') || 'niftyoichange';
            const url = `https://api.niftytrader.in/api/FinNiftyOI/niftyoichange?reqType=${index}`;

            const response = await fetch(url);
            const out = await response.json();
            const arr = out?.resultData?.data || [];

            const time = [];
            const price = [];
            const tce = [];
            const tpe = [];
            const tableData = [];

            for (let i = 0; i < arr.length; i++) {
                const item = arr[i];
                const data = item[index === 'niftyoichange' ? 'niftyoi' : 'bankniftyoi'];

                const ce = data?.reduce((acc, d) => acc + d.calls_change_oi, 0) || 0;
                const pe = data?.reduce((acc, d) => acc + d.puts_change_oi, 0) || 0;

                time.push(converttoist(item.timestamp));
                price.push(item.cmp);
                tce.push(ce);
                tpe.push(pe);

                if (i > 0) {
                    const prevItem = arr[i - 1];
                    const prevData = prevItem[index === 'niftyoichange' ? 'niftyoi' : 'bankniftyoi'];

                    const prevCe = prevData?.reduce((acc, d) => acc + d.calls_change_oi, 0) || 0;
                    const prevPe = prevData?.reduce((acc, d) => acc + d.puts_change_oi, 0) || 0;

                    const ceChange = ce - prevCe;
                    const peChange = pe - prevPe;
                    const signal = ceChange > 0 && peChange < 0 ? "SELL" : ceChange < 0 && peChange > 0 ? "BUY" : "NEUTRAL";

                    tableData.push({
                        timestamp: converttoist(item.timestamp),
                        cmp: item.cmp,
                        ceChange: ceChange.toLocaleString('en-IN'),
                        peChange: peChange.toLocaleString('en-IN'),
                        signal
                    });
                }
            }

            setData({ time, tce, tpe, price });
            setTableData(tableData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data && chartRef.current) {
            const { time, tce, tpe, price } = data;
            const ctx = chartRef.current.getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: time,
                    datasets: [
                        {
                            label: 'Index Price',
                            data: price,
                            backgroundColor: 'transparent',
                            borderColor: 'rgb(52, 67, 188)',
                            borderWidth: 2,
                            yAxisID: "y-axis-price"
                        },
                        {
                            label: 'Total CE',
                            data: tce,
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(135,35,35,0.7)',
                            borderWidth: 2,
                            yAxisID: "y-axis-oi",
                            borderDash: [5, 5]
                        },
                        {
                            label: 'Total PE',
                            data: tpe,
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(43,135,65,0.7)',
                            borderWidth: 2,
                            yAxisID: "y-axis-oi",
                            borderDash: [5, 5]
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    elements: {
                        point: {
                            radius: 0,
                            hoverRadius: 4
                        },
                        line: {
                            tension: 0.1
                        }
                    },
                    scales: {
                        x: {
                            barPercentage: 1,
                            categoryPercentage: 0.6
                        },
                        y: {
                            id: "y-axis-price",
                            position: "left",
                            title: {
                                display: true,
                                text: 'Price'
                            }
                        },
                        y1: {
                            id: "y-axis-oi",
                            position: "right",
                            title: {
                                display: true,
                                text: 'Open Interest'
                            }
                        }
                    }
                }
            });
        }
    }, [data]);

    return (
        <div>
            <h1>Open Interest Chart</h1>
            {/* <canvas ref={chartRef} id="oiChart" style={{ width: '100%', height: '400px' }}></canvas> */}
            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Price</th>
                        <th>CE Change</th>
                        <th>PE Change</th>
                        <th>Signal</th>
                    </tr>
                </thead>
                <tbody id="oirows">
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.timestamp}</td>
                            <td>{row.cmp}</td>
                            <td style={{ color: row.signal === "SELL" ? 'red' : row.signal === "BUY" ? 'green' : 'black' }}>{row.ceChange}</td>
                            <td style={{ color: row.signal === "SELL" ? 'red' : row.signal === "BUY" ? 'green' : 'black' }}>{row.peChange}</td>
                            <td>{row.signal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const converttoist = (mytime) => {
    const myDate = new Date(mytime);
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
};

export default IndexPage;
