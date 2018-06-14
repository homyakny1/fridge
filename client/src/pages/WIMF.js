import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FridgePhoto from "../components/FridgePhoto"
import './style.css';



const WIMF = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
        <div className ='center'>
            <FridgePhoto/>
        </div>
        <Footer/>
    </div>
);

export default WIMF;