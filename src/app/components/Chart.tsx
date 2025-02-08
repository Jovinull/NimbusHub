"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
    data: { time: string, value: number }[];
    color?: string;
    title: string;
}

export default function Chart({ data, color = "#8884d8", title }: ChartProps) {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke={color} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
