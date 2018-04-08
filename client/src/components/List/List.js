import React from 'react';
import "./style.css";

const List = (props) =>{
	return (
    <div className='row'>
        <div className='col-sm-12'>
            <div className="card">
                <div className="card-body">
                <img className="rounded" src="https://media.gettyimages.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=6&m=185262648&s=170x170&h=3p4rJSwthldAHBomDfnIs0hDW6ck4x4W7SBLAfE7KvQ=" alt=""/>
                <h2>Apples</h2>
                </div>
                <button style={{float: "right"}}className='btn btn-danger'><span className="glyphicon glyphicon-trash"></span> Remove </button>
            </div> 
        </div>
        <div className='col-sm-12'>
            <div className="card">
                <div className="card-body">
                <img className="rounded" src="https://media.gettyimages.com/photos/bowl-of-sour-cream-picture-id478818229?b=1&k=6&m=478818229&s=170x170&h=OlRIpl3ugTniSs184zNSbN3XRJzLvN9Vkk1Udc6BQBA=" alt=""/>
                <h2>Sour Cream</h2>
                </div>
                <button style={{float: "right"}}className='btn btn-danger'><span className="glyphicon glyphicon-trash"></span> Remove </button>
            </div> 
        </div>
    </div>
	);
}

export default List;