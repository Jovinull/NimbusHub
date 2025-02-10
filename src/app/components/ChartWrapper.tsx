"use client";

import dynamic from 'next/dynamic';

// Importa dinamicamente o Chart e desativa SSR
const Chart = dynamic(() => import('./Chart'), { ssr: false });

interface ChartWrapperProps {
    data: number | null;
    color?: string;
    title: string;
}

export default function ChartWrapper({ data, color, title }: ChartWrapperProps) {
    return <Chart data={data} color={color} title={title} />;
}
