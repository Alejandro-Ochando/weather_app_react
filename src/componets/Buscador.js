import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../data/pueblos.json';

const Buscador = ({ saveCity, saveCode, saveWeather, saveTemperatures, saveHours, saveDay }) => {
    const element = <FontAwesomeIcon icon={faSearch} />
    
    const [ search, saveSearch ] = useState('');

    const handlerChange = e => {
        saveSearch(e.target.value);
    }

    const handlerSubmit = e => {
        e.preventDefault();

        const city = search.toLowerCase();
        const datacity = require('../data/pueblos.json');
        
        if(city.trim() === '' || isNaN(city) === false){
            return;
        }

        const result = datacity.filter(pueblos => city === pueblos.name);
        
        if( result.length >= 1 ){
            saveCity(result[0].name);
            saveCode(result[0].id);
        }else{
            saveCity('');
            saveCode('');
            saveWeather('');
            saveTemperatures('');
            saveHours('');
            saveDay('');
            return;
        }
    }

    return ( 
        
        <div className="center">
            <div className="row">
                <form 
                    className="col s12"
                    autoComplete="off"
                    onSubmit={handlerSubmit}
                >
                    <div className="row">
                        <div className="col s12 height">
                            {/*<p className="location-text">Localización:</p>*/}
                            <div className="input-field inline">
                                <input 
                                    type="text"
                                    name="city"
                                    onChange={handlerChange}
                                />
                                <label className="location-label">{element}</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>  
        </div>
     );
}
 
export default Buscador;