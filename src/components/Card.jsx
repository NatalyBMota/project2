import React from 'react';
//import ReactDOM from 'react-dom';
//import pets from './pets';

function Card(props) {
    
    return  <div className="cardBlock">
                <img src={props.imgSrc} alt={props.imgAlt} title={props.imgTitle} />
                <h1>{props.carName}</h1>
                <p><strong>Kind:</strong> {props.kind}</p>
                <p><strong>Age:</strong> <span>{props.age}</span></p>
                <p><strong>Color:</strong> <span>{props.color}</span></p>
                <p><strong>Features:</strong> <span>{props.features}</span></p>
                <p><strong>ID:</strong> <span>{props.carId}</span></p>
                <button className="btn fill">check more</button>	
            </div>;
}

export default Card;
