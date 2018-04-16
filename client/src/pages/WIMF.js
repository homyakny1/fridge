import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './style.css';


const WIMF = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
            <img id='fridge-photo' src='https://3.bp.blogspot.com/-92t-6yhZFvI/WlQ8pBMwS1I/AAAAAAAAkMM/dnR6rJjD5BQg8coHrZlgWDM-ixPG7hK3gCLcBGAs/s1600/what%2527s%2Bin%2Bmy%2Bfridge%2Bhow%2Bi%2Borganize%2Bmy%2Bfridge-2.jpg' alt='fridge'/>
        <Footer/>
    </div>
);

export default WIMF;