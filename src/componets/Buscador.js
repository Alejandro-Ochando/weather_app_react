import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Buscador = () => {

    const element = <FontAwesomeIcon icon={faSearch} />

    return ( 
        
        <div className="container center">
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="col s12">
                            <p className="location-text">Localización:</p>
                            <div class="input-field inline">
                                <input type="text"/>
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