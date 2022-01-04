import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Home from './Home';
// import Navbar from "./Navbar";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";


const Church =()=>{
    return(
        <>
            <Router>
                <switch>
                    <Route exact path='/'> <About/> </Route>
                </switch>
                <switch>
                    <Route exact path="/project"> <Project/> </Route>
                </switch>
                <switch>
                    <Route exact path="/contact"> <Contact/> </Route>
                </switch>
            </Router>
        </>
    )
}

export default Church;