
<h1 align="center">
    <img src="./src/assets/nuvem.png" width="50px">
    <br/>My Weather
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/CrisnaldoSantos/my-weather?color=89c7de">

  <a href="https://www.crisnaldocarvalho.com.br">
    <img alt="Made by Crisnaldo" src="https://img.shields.io/badge/made%20by-Crisnaldo Carvalho-89c7de">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-89c7de">

  <a href="https://github.com/CrisnaldoSantos/my-weather/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/CrisnaldoSantos/my-weather?style=social">
  </a>
</p>


## Descrição:
<p>
Front-end contruído em ReactJS que informa dados climáticos a partir da geolocalização do usuário. Os dados são consumidos da API OpenWeather.
</p>
<p>
São detalhados o nome da cidade, clima geral, temperatura, sensação térmica, temperatura máxima, temperatura mínima, pressão e umidade.
</p>

A aplicação pode ser acessada em produção através da url:
<a href="https://meuclima.netlify.app/" target="_blank">https://meuclima.netlify.app/</a>

## Instalação:
Após clonar o repositório, instale as dependências do projeto com os comandos abaixo via terminal:
```js
cd my-weather
yarn install                 //npm start *para quem está ulitizando o npm como gerênciador de dependências*
```
Abra o projeto no seu editor de código na sua preferência, renomeie o arquivo ".env.example" para ".env" e insira a sua chave de API do <a href="https://openweathermap.org/api" target="_blank">OpenWeatherMap </a> na váriável de ambiente presente no arquivo.
Com o terminal na pasta raiz do projeto, execute o comando:
```js
yarn start                  //npm start *para quem está ulitizando o Npm como gerênciador de dependências*
```

## Funcionamento:

A aplicação reage à três eventos:
- No primeiro momento caso o usuário não tenha habilitado a localização do dispositivo:
<br/>
<p align="center">
    <img src="./src/assets/localização.PNG" width="700px">
</p>

- No segundo é o momento que os dados estão sendo requisitados à API:
<br/>
<p align="center">
    <img src="./src/assets/carregando.PNG" width="700px">
</p>

- No terceiro são exibidas as informações climáticas referentes a localização informada no momento atual:
<br/>
<p align="center">
    <img src="./src/assets/inicial.PNG" width="700px">
</p>




