import ChartWrapper from './components/ChartWrapper';

const sampleData = [
    { time: '07:00', value: 22 },
    { time: '13:00', value: 30 },
    { time: '19:00', value: 25 },
];

export default function Home() {
    return (
        <>
            <main className="container mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ChartWrapper data={sampleData} title="Temperatura (°C)" color="#ff7300" />
                <ChartWrapper data={sampleData} title="Umidade (%)" color="#0088FE" />
                <ChartWrapper data={sampleData} title="Pressão (hPa)" color="#00C49F" />
            </main>
        </>
    );
}
