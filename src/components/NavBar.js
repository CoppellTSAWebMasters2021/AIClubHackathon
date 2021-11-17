import React from 'react';
import { Component } from 'react';
import './css/NavBar.css';

class Navbar extends Component {
    

    render() {
        return (
            <div>
                   
                <ul id="nav">
                    
                    <div>
                    <li  ><a  href="/"><h1 className="title" >AI</h1></a></li>

                    </div>
                    


                    <div className="list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Projects</a></li>
                    </div>


                </ul>
            </div>
        )
    }
}

export default Navbar;