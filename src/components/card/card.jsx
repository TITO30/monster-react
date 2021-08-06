import React from 'react';

import './card.style.css';


export const Card = (props) =>(
    <div className='card-container'>
        <img alt="luchadores" src={`https://robohash.org/${props.luchadores.id}?set=set2&size=180x180`}/>
        <h2>{props.luchadores.name}</h2>
        <p>{props.luchadores.email}</p>
    </div>
)
