
<h1 align="center">
    <img src="./src/assets/nuvem.png" width="50px">
    <br/>My Weather
</h1>

## Descrição:
<p>
Front-end contruído em ReactJS que informa dados climáticos a partir da geolocalização do usuário. Os dados são consumidos da API OpenWeather.
</p>
<p>
São detalhados o nome da cidade, clima geral, temperatura, sensação térmica, temperatura máxima, temperatura mínima, pressão e umidade.
</p>

A aplicação pode ser acessada em produção através da url:
<a href="https://meuclima.netlify.app/" target="_blank">https://meuclima.netlify.app/</a>

## Funcionamento:

A aplicação reage há três eventos:
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

- No terceiro são exibidas as informações climáticas referentes a localização informada:
<br/>
<p align="center">
    <img src="./src/assets/inicial.PNG" width="700px">
</p>




