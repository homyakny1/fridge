import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StartSimple from "../components/MultiStep/StartSimple";

const About = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout}/>
        <div className='container'>
            <StartSimple/>
        <Footer/>
        </div>
    </div>
);

export default About;