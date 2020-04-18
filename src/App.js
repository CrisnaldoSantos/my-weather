import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import api from './services/api';
import {FaTemperatureHigh, FaTemperatureLow, FaWater, FaCloud} from 'react-icons/fa'
import {} from 'react-icons/fi'
import logo from './assets/weather.svg';
import loading from './assets/loading.svg';
import local from './assets/location.svg';

function App() {

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    })
  },[])


  let getWeather = async (lat, long) => {
    let res = await api.get("/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }  
    });
    setWeather(res.data);
  }




  if (location === false){
    return(
      <Fragment>
        <div className="App-container">
          <img src={local} alt="logo" width="300px"/>
          <h3> Você precisa habilitar a localização para obter o clima!</h3>
        </div>
      </Fragment>
    );
  }else if(weather === false){
    return(
      <Fragment>
        <div className="App-container">
          <img src={loading} alt="logo" width="300px"/>
          <h3> Carregando os dados do clima...</h3>
        </div>
      </Fragment>
    );
  }else{
    return (
      <Fragment>
        <div className="App-container">
          <img src={logo} alt="logo" width="300px"/>
          <h3> Clima em {weather.name} : {weather['weather'][0]['description']} </h3>

          <ul>
            <li>
              <center><FaTemperatureHigh/></center>
              Temperatura atual: {weather['main']['temp']}°</li>
            <li>
              <center><FaTemperatureHigh/></center>
              Sensação térmica: {weather['main']['feels_like']}°</li>
            <li>
               <center><FaTemperatureHigh/></center>
               Temperatura máxima: {weather['main']['temp_max']}°</li>
            <li>
              <center><FaTemperatureLow/></center>
              Temperatura mínima: {weather['main']['temp_min']}°</li>
            <li>
              <center><FaCloud/></center>
              Pressão: {weather['main']['pressure']} hpa</li>
            <li>
              <center><FaWater/></center>
              Umidade: {weather['main']['humidity']} %</li>
          </ul>
        </div>
      </Fragment>
    );
  } 
}

export default App;
