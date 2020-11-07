import React, { Fragment, useState, useEffect } from 'react';
import Buscador from './componets/Buscador';
import axios from 'axios';

function App() {

  const [ city, saveCity ] = useState('');
  const [ code, saveCode ] = useState(0);

  useEffect(()=> {
    
    if(code === 0 || code === '' ){
      return;
    }

    const consultAPI = async () => {
      const lan = "es";
      const key ="zwYqaXaaX44qma1";
      const url = `https://api.tutiempo.net/json/?lan=${lan}&apid=${key}&lid=${code}`;
      const result = await axios.get(url);
      console.log(url);
      console.log(result);
    }

    consultAPI();
  },[code]);

    
  return (
    <Fragment>
      <div className="container">
        <Buscador 
          saveCity={saveCity}
          saveCode={saveCode}
        />
      </div>
      <p>{city}</p>
    </Fragment>
  );
}

export default App;
