import React from 'react';
import CreateCard from './CreateCard';
import cars from './cars.jsx';

function CardWrapper() {
    return <div className="wrapperParentDiv">
        <h1>Pets Available for Adoption</h1>
        <div className="carsParentDiv">
            {cars.map(CreateCard)}
        </div>
    </div>;
}

export default CardWrapper;