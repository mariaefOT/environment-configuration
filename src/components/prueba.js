import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Prueba = () => {
const [token, setToken] = useState([]);

const api = () => {
    axios.post('http://localhost:8080/bank/api/v1/auth?password=Demo123!&username=admin@demo.io', {

    })
    .then(response => {
        setToken(response.data.authToken);
        console.log(token);
    }).catch(error => {
        console.log(error);
    })
};

return (
    <div>
        <button onClick={ () => api() }>Prueba</button>
        <div>
            <span>{token}</span>
        </div>
    </div>
)

};

export default Prueba;
