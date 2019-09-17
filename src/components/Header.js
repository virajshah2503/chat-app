import React from 'react';

const Header = ({to}) => {
	return (
		<header className="chat-header">
	        <div className="container">
	          <h2>{to}</h2>
	        </div>
	    </header>
	);
}

export default Header;