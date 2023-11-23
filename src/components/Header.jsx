import React from 'react';
//import holidayStyle from './holidayStyle';



const userBirthYear = 1996;
//const userInput = new Array(1996, 1190);
const currentTime = new Date();
const currentYear = currentTime.getFullYear();
let msg;

const headerStyle = {
	border: '3px solid rgb(207,181,59, .5)',
	backgroundColor: 'rgba(212,175,55, .5)',
}

if ((currentYear !== userBirthYear) && (userBirthYear >  (currentYear - 16))) {
	msg = 'CONGRATS! you can apply for driver license! 😄';
} else {
	msg = 'Sorry! You can NOT apply for a driver license! 🙁';
}

//const imgSrc="https://images.freeimages.com/images/large-previews/400/bird-at-zoo-1579028.jpg";
//const imgSrc="logo192.png";

// this is a component
function Header() {
	return <header style={headerStyle}>
	  <h1 className="header">{msg}</h1>
	</header>;
  }
/*
function Header() {
	return <div>
	    <h1 title={'This is a heading'} spellCheck={true}>A message from DMV. Your age is: {currentYear-userBirthYear}</h1>
	    <h1 style={{color:"red"}}>{msg}</h1>
	    <h1 style={headerStyle} className="randomStyle">{msg}</h1>
        <img src={imgSrc} alt="Some alt"/>
	    <p>some text....</p>
	    <button>click me</button>
  </div>;
}
*/
export default Header;