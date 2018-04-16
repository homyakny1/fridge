import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddList from "../components/AddList";
import './style.css';


const Home = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
        <div className='container'>
            {props.auth.userId && <AddList
                handleSubmit = {props.handleSubmit}
                value = {props.itemName}
                onChange = {props.handleChange}/>}
            <Footer/>
        </div>
    </div>
)

export default Home;