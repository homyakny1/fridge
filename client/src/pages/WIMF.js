import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './style.css';


const WIMF = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
        <div className ='center'>
            <img id='fridge-photo' src='http://homyakny1.epizy.com/fridge.jpg' alt='fridge'/>
        </div>
        <Footer/>
    </div>
);

export default WIMF;