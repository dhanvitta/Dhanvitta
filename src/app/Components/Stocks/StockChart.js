import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, ReferenceLine, LineChart, Line, AreaChart, Area
} from 'recharts';

const StockChartRecharts = ({ data }) => {

    return (
        <div className='bg-white  p-5 w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2'>

            <ResponsiveContainer width="100%" height={480}>
                <BarChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    className="text-xs text-gray-900 rounded bg-white"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend verticalAlign='top' />
                    <XAxis dataKey="strike_price" />
                    <YAxis />
                    <Tooltip useTranslate3d={true} />
                    <ReferenceLine y={0} stroke="#d1d5db" />

                    <Bar
                        dataKey="calls_change_oi"
                        name="Change in Call OI"
                        fill="#ef4444"
                    />
                    <Bar
                        dataKey="puts_change_oi"
                        name="Change in Put OI"
                        fill="#22c55e"

                    />
                    <Brush dataKey="strike_price" height={20} stroke="#94a3b8" alwaysShowText={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const OpenInterestChart = ({ data }) => {

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="border bg-white p-3">
                    <p className="label">{`Date: ${label.split('T')[0]}`}</p>
                    <p className="label">{`Time: ${new Date(label).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</p>
                    <p className="label text-green-500">{`cmp: ${payload[0].payload.cmp}`}</p>


                </div>
            );
        }

        return null;
    };

    return (
        <div className='bg-white p-5 w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2'>
            <ResponsiveContainer width="100%" height={480}>
                <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    className="text-xs"
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>

                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} className="text-xs" />
                    {/* <XAxis dataKey="_id" className="text-xs" /> */}

                    <YAxis dataKey={"cmp"} domain={['dataMin', 'auto']} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="cmp" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}


export { StockChartRecharts, OpenInterestChart };
