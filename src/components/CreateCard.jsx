import React from 'react';
import Card from './Card';

function CreateCard(cars) {
	return <Card
            key={cars.carID} 
            carName={cars.name} 
			imgSrc={cars.imgURL} 
            imgAlt={cars.imgAlt}
            imgTitle = {cars.imgTitle}
            age={cars.age} 
            kind={cars.kind}
            color={cars.color}
            features={cars.features} 
            carId={cars.carID}
        />;
}

export default CreateCard;
