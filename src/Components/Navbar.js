import React from 'react';
import pet from '../img/pet.png'
// rafce= para crear un stateless functional component
//rce= para crear un componente clase

const Navbar = ({titulo}) => (
    
    	<nav className="navbar text-light bg-info p-3 ">
		<div className="container">
			<a className="mx-auto title"><img src={pet} width="40" height="40" className="d-inline-block align-top mr-3" alt="dog"/>{titulo}</a>	
		</div>
	    </nav>
    
)

export default Navbar;

