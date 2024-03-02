import Andza from "./components/andza";
import Mta from "./components/mta";
import './components/sky/index.scss'
import React, { useState, useEffect } from 'react';
import 'moment-timezone';
import 'moment/locale/ka';
import MusicPlayer from "./components/youtube";
import axios from "axios";
var weatherApi = "https://api.open-meteo.com/v1/forecast?latitude=41.6941&longitude=44.8337&hourly=temperature_2m&current_weather=true&forecast_days=3";

function App() {
  const moment = require('moment-timezone');
  const [visible, setVisible] = useState(true)
  const [weather, setWeather] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  const visibleData = () => {
    setVisible(!visible)
  }

  const fetchWeatherData = () => {
    axios.get(weatherApi).then((res) => {
      setWeather(res.data.current_weather.temperature);
    });
  };

  useEffect(() => {
    fetchWeatherData();

    const intervalId = setInterval(() => {
      updateClock();
      if (new Date().getMinutes() % 10 === 0) {
        fetchWeatherData();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const updateClock = () => {
    const timeZone = 'Asia/Tbilisi';
    const newTime = moment().tz(timeZone).locale('ka').format('DD MMM. HH:mm სთ.');
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
      <div className="view" onClick={() => visibleData()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" id="view">
          <g>
            <path 
              d="M50 34c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm44.4-13.4l-8.6-8.7C76.3 30.3 63.6 25 50 25s-26.3 5.3-35.8 14.9l-8.6 8.7c-.8.8-.8 2 0 2.8l8.6 8.7C23.7 69.7 36.4 75 50 75s26.3-5.3 35.8-14.9l8.6-8.7c.8-.8.8-2 0-2.8zM83 57.3C74.2 66.1 62.5 71 50 71s-24.2-4.9-33-13.7L9.8 50l7.2-7.3C25.8 33.9 37.5 29 50 29s24.2 4.9 33 13.7l7.2 7.3-7.2 7.3z">
            </path>
          </g>
          <g>
            <path fill="#00F" d="M944-790V894H-840V-790H944m8-8H-848V902H952V-798z">
            </path>
          </g>
        </svg>
      </div>
      {visible ? 
        (
          <div className="weather">
          <h2>ტემპერატურა</h2>
          <h1>{weather} °C</h1>
          <h2>დრო</h2>
          <h1>{currentTime}</h1>
        </div>
        ) : ''
      }
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
