import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, ReferenceLine } from 'recharts';

const StockChartRecharts = ({ data }) => {
    console.log(data)


    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                className="text-xs text-gray-900"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="strike_price" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                <ReferenceLine y={0} stroke="#d1d5db" />
                <Legend />
                <Bar
                    dataKey="calls_change_oi"
                    name="Calls Change in OI"
                    fill="#ef4444"
                /> 
                <Bar
                    dataKey="puts_change_oi"
                    name="Puts Change in OI"
                    fill="#22c55e"

                />
                <Brush dataKey="strike_price" height={20} stroke="#93c5fd" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StockChartRecharts;
