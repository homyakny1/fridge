import React from "react";
import Navbar from "../components/Navbar";
import './style.css';
import Footer from "../components/Footer";

const About = (props) => (
    
    <div>
        <Navbar handleLogout ={props.handleLogout}/>
        <div>
         <h3 style={{marginTop:'10%'}} className='center'>What's in my fridge</h3>   
         <h5 className='center'>I hate grocery shopping, I always forget to buy
          something. Do you know that feeling when you come home after being 
          in the store for few hours, and then you open your fridge and 
          realize that you have only 2 eggs left for the next week, and 
          now you need to go back to the store just to buy them, this is 
          a  nightmare. Thankfully this App will allow you to create a 
          shopping list for your grocery shopping.
         </h5>
        </div>
        <Footer/>
    </div>
);

export default About;