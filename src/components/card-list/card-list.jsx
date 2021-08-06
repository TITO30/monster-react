import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card';

export const CardList=(props)=>{
    return(
        <div className='card-list'>
        {
            props.luchadores.map(luchadores => 
                <Card key={luchadores.id} luchadores={luchadores}/>
                )
        }
    </div>)
}