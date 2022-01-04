import React from "react";
import Navbar from "./Navbar";
import aa from "./images/002.png"

const Contact =()=>{
    return(
        <>
            <Navbar/>
          <div className="container-fluid "  id="contact"> <br></br>
          <div className="row " style={{marginTop: '7em'}}>

          <div className="col-md-6 col-sm-12 text-center mt-5 ">
            <div className=" container jumbotron card" style={{width: "60%"}}>
            <p className="text-center text-dark h1">Contact Me</p><br/><br/>
            <p>
              
              <span><a href="www.facebook.com/Agboola12" className><i className="fab fa-facebook h4 con text-primary"></i></a>Facebook
              {/* <a className="ml-5"><i className="fab fa-twitter con  h4 text-info"></i></a>  Twitter */}
               </span>
            </p>

        <p>
         <span><a href="www.github.com/Agboola12"><i className="fab fa-github con h4 text-dark"></i></a> Github
          <a href="www.linkedin.com/in/Agboola Elijah" ><i className="fab fa-linkedin con ml-5 h4 text-primary"></i></a>LinkedIn</span>
        </p>
            </div>
            
          </div>

           <div className="col-md-6 col-sm-12 text-center">
            <img src={aa} alt="face" width="300"/>
          </div>
        </div>
    </div>

    <div className="container-fluid bg-info fixed-bottom p-3 ">
			<div className="row">
				<div className="col">
				<div className="container">
				<p className="text-light h5 pt-3 text-center">Designed By : Jahnus</p>
				</div>
				</div>
			</div>
			</div>
        </>
    )
}

export default Contact;