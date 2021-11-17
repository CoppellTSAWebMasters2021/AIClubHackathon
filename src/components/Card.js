import React from 'react';
import './css/Card.css'


function Card(props) {
    return (
        <div className="card-container">

            <div className="card-content">
                <div className="card-title" >
                    <h3>{props.title}</h3>
                </div>
                <div className="card-body">
                    <p>{props.body}</p>
                </div>

            </div>

            <div className="btn">
                {/* <button>{props.btn}</button> */}
                <a href={props.btn}>Learn More</a>

            </div>


        </div >
    )
}

export default Card;