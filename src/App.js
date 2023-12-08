import Andza from "./components/andza";
import Mta from "./components/mta";
import './components/sky/index.scss'
import React, { useState, useEffect } from 'react';

function App() {

  const [currentClass, setCurrentClass] = useState("01");

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

    const intervalId = setInterval(updateSkyClass, 60000);

    return () => clearInterval(intervalId);
  }, [currentClass]);

  return (
    <div className={`sky-gradient sky-gradient-${currentClass}`}>
      <div className="star-1"></div>
      <div className="star-2"></div>
      <div className="star-3"></div>
      <div className="star-4"></div>
      <div className="star-5"></div>
      <div className="star-6"></div>
      <div className="star-7"></div>
      <div className="star-8"></div>
      <div className="star-9"></div>
      <div className="star-10"></div>
      <div className={`sun ball-${currentClass}`}></div>
      <div className={`moon moon-opa-${currentClass}`}></div>
      <Andza currentClass={currentClass} />
      <Mta currentClass={currentClass}> </Mta>
    </div>
  );
}

export default App;
