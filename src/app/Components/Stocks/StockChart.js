import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, ReferenceLine } from 'recharts';

const StockChartRecharts = ({ data }) => {

    return (

        <ResponsiveContainer width="100%" height={480}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                className="text-xs text-gray-900 border-t border-dashed p-5 rounded bg-white mt-6 "
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="strike_price" />
                <YAxis />
                <Tooltip useTranslate3d={true} />
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
                <Brush dataKey="strike_price" height={30} stroke="#475569" alwaysShowText={false} />
            </BarChart>
        </ResponsiveContainer>

    );
};

export default StockChartRecharts;
