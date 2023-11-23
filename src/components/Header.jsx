import React from 'react';
//import holidayStyle from './holidayStyle';

const headerStyle = {
	border: '3px solid rgb(207,181,59, .5)',
	backgroundColor: 'rgba(212,175,55, .5)',
}

const userBirthYear = 1996;
//const userInput = new Array(1996, 1190);
const currentTime = new Date();
const currentYear = currentTime.getFullYear();
let msg;

if ((currentYear !== userBirthYear) && (userBirthYear >  (currentYear - 16))) {
	msg = 'CONGRATS! you can apply for driver license! 😄';
} else {
	msg = 'Sorry! You can NOT apply for a driver license! 🙁';
}


// this is a component
function Header() {
	return <header style={headerStyle}>
	  <h1 className="header">{msg}</h1>
	</header>;
}

export default Header;