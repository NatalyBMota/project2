import React from 'react';
import Card from './Card';

function CreateCard(cars) {
	return <Card
            key={cars.petID} 
            petName={cars.name} 
			imgSrc={cars.imgURL} 
            imgAlt={cars.imgAlt}
            age={cars.age} 
            species={cars.species} 
            petId={cars.petID}
        />;
}

export default CreateCard;
