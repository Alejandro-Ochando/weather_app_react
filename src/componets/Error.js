import React from 'react';
import './Error.css';

const Error = ({ mensaje }) => {
    return ( 
        <div className="column center">
            <div className="row">
                <div className="red lighten-2 error">
                    <p className="message-error">{mensaje}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Error;