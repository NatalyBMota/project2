import React from 'react';

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

function Message() {
	return <h1 className="header">{msg}</h1>
}

export default Message;