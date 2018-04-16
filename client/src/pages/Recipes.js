import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import './style.css';


const Recipes = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
            <div className='container'>
                <AddRecipe/>
            </div>
        <Footer/>
    </div>
);

export default Recipes;