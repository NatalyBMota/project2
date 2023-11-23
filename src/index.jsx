import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/*
let dogPicSrc = "https://tse4-mm.cn.bing.net/th/id/OIP-C.vnGOaFJhenpNROeLpVEi1gHaJ4?w=197&h=182&c=7&r=0&o=5&dpr=2&pid=1.7";
let dogPicAlt = "A dog called Rex.";

let rabbitPicSrc = "https://tse4-mm.cn.bing.net/th/id/OIP-C.IE2iDJrymC-ULRT2pTGqZgHaE8?w=266&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
let rabbitPicAlt = "A rabbit called Rabbit.";

let catPicSrc = "https://tse1-mm.cn.bing.net/th/id/OIP-C.ETFxELWtgKQwMlcoccq-SAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=2&pid=1.7";
let catPicAlt = "A cat called Cat.";
*/

/*
const parentDivStyle = {
    display: 'grid',
	width: "100%",
	backgroundColor: 'lightgreen',
	color: 'red'
}
const childDivStyle = {
	width: "30%",
	backgroundColor: 'lightgreen',
	color: 'red'
}
*/
/*
const userBirthY = [1990, 1992, 1994, 1996];

let userAge = [];
*/
//for each single value of this array, we map to each object inside of this array.
/*
userAge = userBirthY.map(function(val){
	return 2023 - val;
});
console.log(userAge);
*/
// arrow function
// pVal - parameter value
/*
const calAge = (pVal) => 65 - (2023 - pVal);
console.log(calAge(2022));
*/
/* So, how many years until that person retires?
With arrow functions, you can only have one parameter value. */

/* 
- for each single item from the array, do something.
- you still need to push them into a new array.
- When we call the function below, it will not return an array. That's why we have to push every single item into a new array. 
*/
// foreach()
//let userAge2 = [];
/*
userBirthY.forEach(function(val){
	userAge2.push(2023 - val);
});
console.log(userAge2);
*/
/*
userBirthY.forEach((val) => userAge2.push(2023 - val));
console.log(userAge2);
*/
/*
function Card(props) {
    return  <div className="petsBlock">
                <img src={props.imgSrc} alt={props.imgAlt} />
                <h1>{props.petName}</h1>
                <p>Species: {props.species}</p>
                <p>Age: <span>{props.age}</span></p>
                <p>ID: <span>{props.petId}</span></p>
                <button>check more</button>	
            </div>;
}
*/
/*
function createCard(pets) {
	return <Card
            key={pets.petID} 
            petName={pets.name} 
			imgSrc={pets.imgURL} 
            imgAlt={pets.imgAlt}
            age={pets.age} 
            species={pets.species} 
            petId={pets.petID}
        />;
}
*/
ReactDOM.render(  
    <App />,
document.getElementById('root'));


/*
ReactDOM.render(  
    <div className={"petsParentDiv"}>
        <Card petName={pets[0].name} 
			imgSrc={pets[0].imgURL} 
            imgAlt={pets[0].imgAlt}
            age={pets[0].age} 
            species={pets[0].species} 
            petId={pets[0].petID}
        />
        <Card petName={pets[1].name} 
			imgSrc={pets[1].imgURL} 
            imgAlt={pets[1].imgAlt} 
            age={pets[1].age} 
            species={pets[1].species} 
            petId={pets[1].petID}
        />
        <Card petName="Meow" 
			imgSrc={pets[2].imgURL} 
            imgAlt={pets[2].imgAlt} 
            age="2" 
            species="cat" 
            petId="1"
        />
    </div>,
document.getElementById('root'));
*/

/*
ReactDOM.render(  
    <div className="petsParentDiv">
        <Card petName="Rex" 
			imgSrc={dogPicSrc} 
            imgAlt={dogPicAlt}
            age="2" 
            species="dog" 
            petId="1"
        />
        <Card petName="Fluffy" 
			imgSrc={rabbitPicSrc} 
            imgAlt={rabbitPicAlt} 
            age="2" 
            species="rabbit" 
            petId="1"
        />
        <Card petName="Meow" 
			imgSrc={catPicSrc} 
            imgAlt={catPicAlt} 
            age="2" 
            species="cat" 
            petId="1"
        />
    </div>,
document.getElementById('root'));
*/

/*
ReactDOM.render(  
    <div className="parentDiv">
        <div className="childDiv">
            <img src={dogPicSrc} alt={dogPicAlt} />
            <h1>Rex</h1>
            <p>Species: Dog</p>
            <p>Age: <span>2</span></p>
            <p>ID: <span>1</span></p>
            <button>check more</button>	
        </div>
        <div className="childDiv">
            <img src={rabbitPicSrc} alt={rabbitPicAlt} />
            <h1>Rabbit</h1>
            <p>Species: Rabit</p>
            <p>Age: <span>4</span></p>
            <p>ID: <span>2</span></p>
            <button>check more</button>	
        </div>
        <div className="childDiv">
            <img src={catPicSrc} alt={catPicAlt} />
            <h1>Cat</h1>
            <p>Species: Cat</p>
            <p>Age: <span>1</span></p>
            <p>ID: <span>3</span></p>
            <button>check more</button>	
        </div>
    </div>,
document.getElementById('root'));
*/
/*
ReactDOM.render(  
    <div>
        <App />
   </div>, 
   document.getElementById('root'));
*/