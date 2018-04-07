import React from 'react';
import "./style.css";

const List = (props) =>{
	return (
    <div className='row'>
        <div className='col-sm-12'>
            <div className="card">
                <div className="card-body">
                <img className="rounded" src="https://dummyimage.com/80/6.png&amp;text=+" alt=""/>
                <h1>Text</h1>
                <button className='btn btn-warning'>Delete</button>
                </div>
            </div> 
        </div>
    </div>
	);
}

export default List;