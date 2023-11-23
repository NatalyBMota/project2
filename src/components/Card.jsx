import React from 'react';
//import ReactDOM from 'react-dom';
//import pets from './pets';

function Card(props) {
    
    return  <div className="cardBlock">
                <img src={props.imgSrc} alt={props.imgAlt} />
                <h1>{props.petName}</h1>
                <p>Species: {props.species}</p>
                <p>Age: <span>{props.age}</span></p>
                <p>ID: <span>{props.petId}</span></p>
                <button className="btn fill">check more</button>	
            </div>;
}

export default Card;
