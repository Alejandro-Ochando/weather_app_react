import React, { Fragment, useState } from 'react';
import Buscador from './componets/Buscador';


function App() {

  const [ city, saveCity ] = useState('');
  const [ code, saveCode ] = useState(0);

  return (
    <Fragment>
      <div className="container">
        <Buscador 
          saveCity={saveCity}
          saveCode={saveCode}
        />
      </div>
    </Fragment>
  );
}

export default App;
