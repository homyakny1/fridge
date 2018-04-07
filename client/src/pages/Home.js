import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddList from "../components/AddList";
import List from "../components/List";


const Home = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
        <div className='container'>
        <AddList
            handleSubmit = {props.handleSubmit}
            value = {props.itemName}
            onChange = {props.handleChange}/>
        <List/>
        </div>
        <Footer/>
    </div>
)

export default Home;