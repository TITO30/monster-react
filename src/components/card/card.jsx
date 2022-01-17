import React from 'react';

import './card.style.css';


export const Card = (props) =>(
    <div className='card-container'>
        <img alt="luchadores" src={props.luchadores.image}/>
        <h2>{props.luchadores.name}</h2>
        <p>{props.luchadores.email}</p>
        <button>Mandar</button>
    </div>
)
