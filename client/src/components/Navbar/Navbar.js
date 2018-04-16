import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

const Navbar = (props) =>{
	return (
		<div className='NavBar'>
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		<Link className="navbar-brand" to='/home'>
		<img src="https://www.shareicon.net/data/512x512/2016/08/18/814310_cold_512x512.png" width="62" height="62" alt=""/>
		</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
	  
		<div id='navbarSupportedContent' className="collapse navbar-collapse">

		<ul className="navbar-nav mr-auto"/>
			
			<Link  to='/home'>
			  <button className="nav-btn btn btn-primary">Shopping List</button>
			</Link>
			<br/>
			<Link  to='/recipes'>
			  <button className="nav-btn btn btn-primary">Recipes</button>
			</Link>
			<br/>
			<Link  to='/whats_in_my_fridge'>
			  <button className="nav-btn btn btn-primary">What's in my Fridge?</button>
			</Link>
			<br/>
			<Link  to='/about'>
			  <button className="nav-btn btn btn-primary">About</button>
			</Link>
			<br/>
			<a>
				<button className = 'nav-btn btn btn-primary' onClick = {props.handleLogout}>Log Out</button>
			</a>

		</div>
		</nav>
		</div>
	);
}

export default Navbar;