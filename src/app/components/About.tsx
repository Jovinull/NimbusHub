export default function About() {
    return (
        <main className="container mx-auto p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Sobre o NimbusHub</h1>
            <p className="text-lg">
                O <strong>NimbusHub</strong> é um dashboard interativo que exibe dados meteorológicos em tempo real. Ele se conecta a uma estação meteorológica DIY via MQTT para fornecer informações como temperatura, umidade, pressão, velocidade do vento e chuva.
            </p>
            <p className="mt-4">
                Desenvolvido por <strong>Jovinull</strong>, este projeto visa fornecer monitoramento ambiental acessível e visualização intuitiva dos dados meteorológicos.
            </p>
        </main>
    );
}
