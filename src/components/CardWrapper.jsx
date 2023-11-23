import React from 'react';
import CreateCard from './CreateCard';
import cars from './cars.jsx';

function CardWrapper() {
    return <section className="wrapperParentSection">
        <h1>Cool Old-Fashioned Cars</h1>
        <div className="carsParentDiv">
            {cars.map(CreateCard)}
        </div>
    </section>;
}

export default CardWrapper;