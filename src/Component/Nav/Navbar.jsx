import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export const Navbar=() =>{
  return (
    <div className='id'>
        <div className='nav'>
            <h1>Shoping House</h1>
            <ul>
                <li>
                    {""}
                    <Link to="/">Home</Link>
                    {" "}
                </li>
                <li>
                    {""}
                    <Link to="/About">About</Link>
                    {" "}
                </li>
                <li>
                    {""}
                    <Link to="/Blog">Blog</Link>
                    {" "}
                </li>
            </ul>
        </div>
        

    </div>
  )
}
