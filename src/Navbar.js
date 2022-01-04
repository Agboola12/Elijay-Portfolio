import React from 'react';
import Jahnus from "./images/JAHNUS.png";
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-info" >

            <a  className="navbar-brand p-3"><img src={Jahnus} alt="jahnus" width="50px" height="50px"/></a>
            <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="sab">    
            <ul className="navbar-nav list-line ml-auto text-light">               
                    <li className="nav-item active list-line-item mr-5 ">
                        <Link to="/" className="nav-link " >About</Link>
                    </li>

                    {/* <li className="nav-item dropdown list-line-item mr-5 " >
                    <a  className="nav-link">Portfolio</a>
                    </li> */}

                    <li className="nav-item dropdown  list-line-item mr-5" >
                        <Link to="/project" className="nav-link " >Project</Link>
                    </li>

                    <li className="nav-item dropdown list-line-item mr-5" >
                    <Link to="/contact"  className="nav-link">Contact</Link>
                    </li>
            </ul>
                <a ><span className="fab fa-facebook con text-light"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a ><span className="fab fa-twitter con text-light"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a ><span className="fab fa-github con text-light"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a ><span className="fab fa-linkedin con text-light"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a ><span className="fas fa-envelope con text-light "></span></a>&nbsp;&nbsp;&nbsp;
            </div> 
            </nav>
        </>
    )
}

export default Navbar;