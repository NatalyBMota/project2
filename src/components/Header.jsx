import React from 'react';
import Message from './Message';

const headerStyle = {
	border: '3px solid rgb(207,181,59, .5)',
	backgroundColor: 'rgba(212,175,55, .5)',
}

function Header() {
	return <header style={headerStyle}>
	  <Message />
	</header>;
}

export default Header;