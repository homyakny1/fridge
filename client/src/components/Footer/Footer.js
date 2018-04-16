import React from 'react';
import "./style.css";

const Footer = (props) =>{
	return (
		<div>
    <footer className="footer">
      <div className="container">
        <span>
        2018 What's in my Fridge? &#169;
        <a href='https://www.linkedin.com/in/eugenekhom/' target="_blank" rel="noopener noreferrer">
          <img className='SMIcons' src='https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697071-linkedin-256.png' alt='LinkedIn'/>
        </a>
        <a href='https://www.facebook.com/homyakny/' target="_blank" rel="noopener noreferrer">
          <img className='SMIcons' src='https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697057-facebook-256.png' alt='FaceBook'/>
        </a>
        <a href='https://www.instagram.com/homyakny1/' target="_blank" rel="noopener noreferrer">
          <img className='SMIcons' src='https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697067-instagram-256.png' alt='Instagram'/>
        </a>
        <a href='https://github.com/homyakny1' target="_blank" rel="noopener noreferrer">
          <img className='SMIcons' src='https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697061-github-256.png' alt='GitHub'/>
        </a>
        </span>
      </div>
      
</footer>
</div>
	);
}

export default Footer;