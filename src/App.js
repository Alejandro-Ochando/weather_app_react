import React, { Fragment, useState, useEffect } from 'react';
import Buscador from './componets/Buscador';
import Header from './componets/Header';
import Hours from './componets/Hours';
import Day from './componets/Day';
import axios from 'axios';

function App() {

  const [ city, saveCity ] = useState('');
  const [ code, saveCode ] = useState(0);
  const [ weather, saveWeather ] = useState({});
  const [ temperatures, saveTemperatures ] = useState({});
  const [ hours, saveHours] = useState([]);

  useEffect(()=> {
    
    if(code === 0 || code === '' || city === '' ){
      return;
    }

    const consultAPI = async () => {
      const lan = "es";
      const key ="zwYqaXaaX44qma1";
      const url = `https://api.tutiempo.net/json/?lan=${lan}&apid=${key}&lid=${code}`;
      const result = await axios.get(url);
      saveWeather(result.data.hour_hour.hour1);
      saveTemperatures(result.data.day1);
      saveHours(result.data.hour_hour);
      console.log(hours);
      console.log("primera vez");
    }

    consultAPI();
  },[code]);

    
  return (
    <Fragment>
      <div className="container">
        <Buscador 
          saveCity={saveCity}
          saveCode={saveCode}
          saveWeather={saveWeather}
          saveTemperatures={saveTemperatures}
          saveHours={saveHours}
        />
        <Header 
          city={city}
          weather={weather}
          temperatures={temperatures}
        />
        <Hours
          hours={hours}
        />
        <Day
        
        />
      </div>
    </Fragment>
  );
}

export default App;
