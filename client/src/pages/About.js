import React from "react";
import Navbar from "../components/Navbar";
import './style.css';
import Footer from "../components/Footer";

const About = (props) => (
    
    <div>
        <Navbar handleLogout ={props.handleLogout}/>
        <Footer/>
    </div>
);

export default About;