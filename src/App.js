import Andza from "./components/andza";
import Mta from "./components/mta";
import './components/sky/index.scss'
import React, { useState, useEffect } from 'react';
import 'moment-timezone';
import MusicPlayer from "./components/youtube";
import axios from "axios";
var weatherApi = "https://api.open-meteo.com/v1/forecast?latitude=41.6941&longitude=44.8337&hourly=temperature_2m&current_weather=true&forecast_days=3";

function App() {
  const moment = require('moment-timezone');

  const [weather, setWeather] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  // Function to fetch weather data
  const fetchWeatherData = () => {
    axios.get(weatherApi).then((res) => {
      setWeather(res.data.current_weather.temperature);
    });
  };

  useEffect(() => {
    // Fetch weather data initially
    fetchWeatherData();

    // Set up a setInterval to update the clock every second
    const intervalId = setInterval(() => {
      updateClock();
      // Fetch weather data every 10 minutes (adjust as needed)
      if (new Date().getMinutes() % 10 === 0) {
        fetchWeatherData();
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to update the displayed time
  const updateClock = () => {
    const timeZone = 'Asia/Tbilisi';
    const newTime = moment().tz(timeZone).format('HH:mm');
    setCurrentTime(newTime);
  };

  const [currentClass, setCurrentClass] = useState('01');

  useEffect(() => {
    const updateSkyClass = () => {
      const currentTime = new Date();
      const hour = currentTime.getHours();

      let newClass;
      if (hour === 0) {
        newClass = '24';
      } else if (hour >= 1 && hour <= 23) {
        newClass = hour.toString().padStart(2, '0');
      }

      setCurrentClass(newClass);
    };

    updateSkyClass();

    const intervalId = setInterval(updateSkyClass, 1000);

    return () => clearInterval(intervalId);
  }, [currentClass]);
  return (
    <div className={`sky-gradient sky-gradient-${currentClass}`}>
      <div className="weather">
        <h2>ტემპერატურა</h2>
        <h1>{weather} °C</h1>
        <h2>დრო</h2>
        <h1>{currentTime}</h1>
      </div>
      <div className={`star-1 star-opa-${currentClass}`}></div>
      <div className={`star-2 star-opa-${currentClass}`}></div>
      <div className={`star-3 star-opa-${currentClass}`}></div>
      <div className={`star-4 star-opa-${currentClass}`}></div>
      <div className={`star-5 star-opa-${currentClass}`}></div>
      <div className={`star-6 star-opa-${currentClass}`}></div>
      <div className={`star-7 star-opa-${currentClass}`}></div>
      <div className={`star-8 star-opa-${currentClass}`}></div>
      <div className={`star-9 star-opa-${currentClass}`}></div>
      <div className={`star-10 star-opa-${currentClass}`}></div>
      <div className={`sun ball-${currentClass}`}></div>
      <div className={`moon moon-opa-${currentClass}`}></div>
      <Andza currentClass={currentClass} />
      <Mta currentClass={currentClass}> </Mta>
    </div>
  );
}

export default App;
