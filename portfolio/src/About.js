import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function About() {
    const navStyle = {
        color:'white'
    }
    return ( 
        <div className='container'>
            <div className="greet">
                <h1 className='red'>Hey there !</h1>
                <h1 className='green'>I am Krishna</h1>
            </div>
            <div className='row'>
            <div className="col">
                <ul>
                <h2 className='apricot'>About me:</h2>
                <p><li>I am a Computer's Science Graduate-2020,</li>
                <li>i am intrested in development, i have done  my internship in clg on web-development in clg named Smart Radio, with HTML,CSS,Javascript as frontend and php as a backend , and done my mini project on IOT named Army Security System</li>
                <li>I know basics of Python , HTML, CSS, Javascript, PHP,</li>
                <li>I also have done Few personal Projects which has been uploaded to GITHUB, links were given in <Link className='link' style={navStyle} to='/projects'>Projects</Link></li>
                </p>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default About;