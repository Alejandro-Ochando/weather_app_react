import React from 'react';
import './Title.css';

const Title = () => {
    const date = new Date().getFullYear();
    
    return ( 
        <div className="column center">
            <div className="row ">
                <img className="image" src="https://i.ibb.co/Y0hVTxd/770b805d5c99c7931366c2e84e88f251.png" />
                <p className="title-p">El Tiempo</p>
                
                <p className="author">Alejandro Ochando ©{date}</p>
            </div>
        </div>);
}
 
export default Title;