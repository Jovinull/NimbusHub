"use client";

import Image from "next/image";

export default function About() {
    return (
        <main className="container mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-6">Sobre o NimbusHub</h1>

            {/* Imagem da Estação Meteorológica */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/images/estacao-metereologica.jpg"
                    alt="Estação Meteorológica NimbusHub"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Introdução */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">O que é o NimbusHub?</h2>
                <p className="text-lg leading-relaxed">
                    O <strong>NimbusHub</strong> é uma plataforma completa para <strong>monitoramento meteorológico</strong>. 
                    Ele foi desenvolvido para capturar dados <strong>em tempo real</strong> e fornecer previsões precisas com o 
                    auxílio de <strong>Inteligência Artificial</strong>. Nossa solução utiliza um sistema robusto baseado em 
                    <strong>ESP32</strong>, comunicação via <strong>MQTT</strong>, armazenamento no <strong>PostgreSQL</strong> e um backend desenvolvido 
                    em <strong>AdonisJS v6</strong>.
                </p>
            </section>

            {/* Tecnologias Utilizadas */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h2>
                <ul className="list-disc list-inside text-lg text-left mx-auto max-w-3xl">
                    <li><strong>ESP32</strong> - Microcontrolador responsável pela coleta de dados.</li>
                    <li><strong>MQTT</strong> - Protocolo de comunicação leve para envio dos dados meteorológicos.</li>
                    <li><strong>PostgreSQL</strong> - Banco de dados para armazenar históricos de medições.</li>
                    <li><strong>AdonisJS v6</strong> - Backend para processamento e disponibilização dos dados.</li>
                    <li><strong>Next.js</strong> - Interface frontend para visualização e análise dos dados.</li>
                    <li><strong>Inteligência Artificial</strong> - Algoritmos para prever padrões meteorológicos.</li>
                </ul>
            </section>

            {/* Como funciona? */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Como funciona?</h2>
                <p className="text-lg leading-relaxed">
                    A estação meteorológica utiliza diversos sensores para medir temperatura, umidade, pressão 
                    atmosférica, velocidade do vento e precipitação. Os dados coletados são enviados para nosso <strong>servidor via MQTT</strong>,
                    onde são armazenados no <strong>PostgreSQL</strong> e disponibilizados para 
                    visualização no <strong>NimbusHub</strong>.
                </p>
            </section>

            {/* Backend em AdonisJS */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Nosso Backend em AdonisJS</h2>
                <p className="text-lg leading-relaxed">
                    O backend do <strong>NimbusHub</strong> é desenvolvido em <strong>AdonisJS v6</strong>, garantindo uma API robusta e 
                    eficiente para lidar com os dados meteorológicos. Ele gerencia a <strong>persistência de dados</strong>, 
                    autenticação e serve como ponte entre o <strong>ESP32</strong> e o painel de visualização.
                </p>
            </section>

            {/* Inteligência Artificial para previsão do tempo */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Previsão Meteorológica com IA</h2>
                <p className="text-lg leading-relaxed">
                    O <strong>NimbusHub</strong> implementará um sistema de <strong>Inteligência Artificial</strong> para previsão do tempo, 
                    utilizando técnicas de <strong>machine learning</strong> para analisar padrões climáticos e prever mudanças 
                    com maior precisão. Isso permitirá que usuários tenham uma visão antecipada das condições 
                    meteorológicas.
                </p>
            </section>

            {/* Equipe */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Nossa Equipe</h2>
                <div className="flex justify-center mb-6">
                    <Image
                        src="/images/equipe-completa.jpg"
                        alt="Equipe NimbusHub"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <p className="text-lg leading-relaxed">
                    O projeto <strong>NimbusHub</strong> foi desenvolvido por uma equipe de <strong>desenvolvedores independentes</strong>, composta por:
                </p>
                <ul className="list-disc list-inside text-lg text-left mx-auto max-w-3xl">
                    <li><strong>Felipe Jovino</strong> - Desenvolvimento Backend e Infraestrutura.</li>
                    <li><strong>Cassiano Campos</strong> - Integração MQTT e Hardware.</li>
                    <li><strong>Gilberto Bispo</strong> - Desenvolvimento Frontend e Interface Gráfica.</li>
                </ul>
            </section>

            {/* Finalização */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Conclusão</h2>
                <p className="text-lg leading-relaxed">
                    O <strong>NimbusHub</strong> é mais do que uma simples estação meteorológica: é um projeto inovador que combina 
                    <strong>tecnologia IoT, Big Data e Inteligência Artificial</strong> para fornecer <strong>previsões precisas e 
                    monitoramento ambiental eficiente</strong>. Estamos constantemente evoluindo a plataforma para garantir 
                    dados cada vez mais confiáveis e acessíveis.
                </p>
            </section>
        </main>
    );
}
