import React from 'react';
import CreateCard from './CreateCard';
import cars from './cars.jsx';

function CardWrapper() {
    return <aside className="wrapperParentAside">
        <h1>Cool Old-Fashioned Cars</h1>
        <div className="carsParentDiv">
            {cars.map(CreateCard)}
        </div>
    </aside>;
}

export default CardWrapper;