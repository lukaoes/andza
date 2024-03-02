import Andza from "./components/andza";
import Mta from "./components/mta";
import './components/sky/index.scss'
import React, { useState, useEffect } from 'react';
import 'moment-timezone';
import 'moment/locale/ka';
import MusicPlayer from "./components/youtube";
import axios from "axios";
var weatherApi = "https://api.open-meteo.com/v1/forecast?latitude=41.6941&longitude=44.8337&hourly=temperature_2m&current_weather=true&forecast_days=3";
const soundFiles = {
  '5-8': require('./components/sounds/5-8.mp3'),
  '8-12': require('./components/sounds/8-12.mp3'),
  '12-18': require('./components/sounds/12-18.mp3'),
  '18-21': require('./components/sounds/18-21.mp3'),
  '21-00': require('./components/sounds/21-00.mp3'),
  '00-02': require('./components/sounds/00-02.mp3'),
  '02-03': require('./components/sounds/02-03.mp3'),
  '03-05': require('./components/sounds/00-02.mp3'),
};
function App() {
  const [audio] = useState(new Audio());
  const [isMuted, setIsMuted] = useState(true);

  const setAudioSource = (currentTimeSound) => {
    let sourceKey;
    if (currentTimeSound >= 5 && currentTimeSound < 8) sourceKey = '5-8';
    else if (currentTimeSound >= 8 && currentTimeSound < 12) sourceKey = '8-12';
    else if (currentTimeSound >= 12 && currentTimeSound < 18) sourceKey = '12-18';
    else if (currentTimeSound >= 18 && currentTimeSound < 21) sourceKey = '18-21';
    else if (currentTimeSound >= 21 && currentTimeSound < 24) sourceKey = '21-00';
    else if (currentTimeSound >= 0 && currentTimeSound < 2) sourceKey = '00-02';
    else if (currentTimeSound >= 2 && currentTimeSound < 3) sourceKey = '02-03';
    else if (currentTimeSound >= 3 && currentTimeSound < 5) sourceKey = '03-05';

    if (sourceKey) {
      audio.src = soundFiles[sourceKey];
      audio.loop = false;
      audio.muted = isMuted;
    }
  };

  const playAudio = () => {
    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  };

  const handleAudioLoadError = (error) => {
    console.error('Error loading audio:', error);
  };

  const handleAudioEnded = () => {
    // Triggered when audio ends, update the source for the next hour
    const nextHour = (new Date().getHours() + 1) % 24;
    setAudioSource(nextHour);
    playAudio();
  };

  useEffect(() => {
    audio.addEventListener('error', handleAudioLoadError);
    audio.addEventListener('ended', handleAudioEnded);

    // Initial setup
    const currentTimeSound = new Date().getHours();
    setAudioSource(currentTimeSound);
    playAudio();

    // Cleanup on component unmount
    return () => {
      audio.removeEventListener('error', handleAudioLoadError);
      audio.removeEventListener('ended', handleAudioEnded);
      audio.pause();
      audio.src = '';
    };
  }, [audio, isMuted]);

  const toggleMute = () => {
    setIsMuted((prevMute) => !prevMute);
    audio.muted = !isMuted;
  };

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
      <div className="control">
        <div className="sound" onClick={toggleMute}>
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30" height="30" viewBox="0 0 75 75">
            <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style={{ stroke: '#fff', strokeWidth: 5, strokeLinejoin: 'round', fill: '#000' }} />
            <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style={{ fill: '#fff', stroke: '#fff', strokeWidth: 5, strokeLinecap: 'round' }} />
          </svg>
        ) : 
        (
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30" height="30" viewBox="0 0 75 75" stroke="#fff" strokeWidth="5">
            <path d="m39,14-17,15H6V48H22l17,15z" fill="#111" strokeLinejoin="round" />
            <path d="m49,26 20,24m0-24-20,24" fill="none" strokeLinecap="round" />
          </svg>
          )
          }
        </div>
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
