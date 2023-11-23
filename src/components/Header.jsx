import React from 'react';
import Message from './Message';
//import holidayStyle from './holidayStyle';

const headerStyle = {
	border: '3px solid rgb(207,181,59, .5)',
	backgroundColor: 'rgba(212,175,55, .5)',
}

// this is a component
function Header() {
	return <header style={headerStyle}>
	  <h1 className="header"><Message /></h1>
	</header>;
}

export default Header;