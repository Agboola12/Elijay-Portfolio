import React from 'react';
import Navbar from "./Navbar";
import elite from './images/005.png';
import './App.css';


const About =()=>{
    return(
    <>
            <Navbar/>
            <section id="about" className="offset container-fluid" style={{marginTop: '10em'}}>
                <br/>
        <div className="row">
          
          <div className="col-md-6 col-sm-12 text-center" style={{marginTop: '14em'}}>
             <span id="about" className="h1">I'm <b> Elijah Agboola I.</b></span><br/><br/>
            <p className="wow fadeIn" data-wow-duration="3s">
              I'm a Web Developer focused on crafting clean  & user‑friendly experiences.
            </p>
          </div>

           <div className="col-md-6 col-sm-12 text-center">
            <img src={elite} width="400" alt="myFace" />
          </div>
        </div>

        <br/><br/><br/>

        
  <div id="Skills" className="mt-5">
    <div className="container">
      <span className="bg-info text-white">My Skills</span><hr className="bg-info"/>
      <div className="row">
        <div className="col">
          <div className="card bg-white">
            <h3 className="ml-3 my-3"> HTML </h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'95%'}}>95%</div>
            </div>

            <h3 classNameme="ml-3 my-3"> &nbsp; CSS </h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'90%'}}>90%</div>
            </div>

            <h3 className="ml-3 my-3"> Javascript  </h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'80%'}}>80%</div>
            </div>

            <h3 className="ml-3 my-3"> Bootstrap </h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'85%'}}>85%</div>
            </div>

            <h3 className="ml-3 my-3"> SQL Language</h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'85%'}}>80%</div>
            </div>

            <h3 className="ml-3 my-3"> PHP</h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'80%'}}>80%</div>
            </div>

            <h3 className="ml-3 my-3"> Angular Js</h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'75%'}}>75%</div>
            </div>

            <h3 className="ml-3 my-3"> Vue Js</h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'75%'}}>75%</div>
            </div>

            <h3 className="ml-3 my-3"> React Js</h3>
            <div className="progress mx-3">
            <div className="progress-bar bg-info" style={{width:'75%'}}>75%</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
    </section >
 <br/><br/><br/>
    <div className="container-fluid p-3 bg-info ">
  <div className="row">
    <div className="col">
      <div className="container">
      <p className="text-dark h5 pt-3 text-center">Designed By : Jahnus</p>
    </div>
    </div>
  </div>
</div>
    
    </>
    )   
}

export default About;
