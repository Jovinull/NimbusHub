# NimbusHub

Este é um **dashboard web desenvolvido em Next.js** para monitoramento dos dados de uma **Estação Meteorológica DIY** baseada no **ESP32**. O dashboard exibe **temperatura, umidade, pressão atmosférica, velocidade e direção do vento, além da precipitação** em tempo real, integrando-se ao **MQTT**.

## Funcionalidades

- **Visualização em tempo real** dos dados meteorológicos coletados pelo ESP32.
- **Gráficos históricos** para análise de tendências climáticas.
- **Indicação da direção do vento** em uma bússola interativa.
- **Monitoramento da temperatura e umidade** do ambiente.
- **Registro de chuvas e velocidade do vento**.
- **Responsivo**, compatível com dispositivos móveis e desktops.

## Requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 16+)
- **Yarn ou npm**

## Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Jovinull/NimbusHub.git
   cd NimbusHub
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ou
   yarn install
   ```

3. **Crie um arquivo `.env.local` e configure a URL do Broker MQTT utilizado:**
   ```
   NEXT_PUBLIC_HA_API_URL=http://SEUSERVIDOR
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ou
   yarn dev
   ```

5. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

```
weather-station-dashboard
├── components    # Componentes reutilizáveis (gráficos, cards, widgets)
├── pages         # Páginas principais do app
│   ├── index.js  # Página inicial com dashboard
│   ├── settings.js  # Página de configurações
├── hooks         # Hooks personalizados para integração com API
├── styles        # Estilos CSS/Tailwind
├── .env.local    # Variáveis de ambiente
├── package.json  # Dependências do projeto
└── README.md     # Documentação do projeto
```

## Contribuição

Contribuições são bem-vindas! Para colaborar:

1. **Faça um fork** do repositório.
2. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. **Faça commit das suas alterações**:
   ```bash
   git commit -m "Adicionei nova funcionalidade X"
   ```
4. **Envie para o GitHub**:
   ```bash
   git push origin minha-feature
   ```
5. **Abra um Pull Request**. 🚀

## Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usá-lo e modificá-lo conforme necessário.

## Agradecimentos

Obrigado a **Giovanni Aggiustatutto** pelo incrível projeto da Estação Meteorológica DIY!
