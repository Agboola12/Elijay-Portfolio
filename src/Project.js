import React from "react";
import Navbar from "./Navbar";
import imag from "./images/css01.PNG";
import aaaa from "./images/css02.PNG";
import java from "./images/java01.PNG";
import png from "./images/java02.PNG";
import src from "./images/chat.PNG";
import pharmacy from "./images/pharmacy01.PNG";

const Project =()=>{
    return(
        <>
        <Navbar/> <br/><br/>

        <div className="container" id="project">
    	<div>
    		 <br/><br/><br/><br/>
		<h1 className=" text-center" >Projects</h1> <br/><br/>

    		<div className="container-fluid" >
    			<div className="row">
    				<div className="col-4" >
						<div className="card" style={{width:'300px'}}>
						   <img className="card-img-top" src={imag} alt="imge" style={{width:'100%'}} />
						   <div className="card-body">
						    	<p className="card-text">This is a ludo built with html and css</p>
						    </div>
						</div>
                        
					</div>	
    				<div className="col-4">
    					<div className="card" style={{width:'300px'}}>
						   <img className="card-img-top" src={aaaa} alt="Card" style={{width:'100%'}}/>
						   <div className="card-body">
						    	<p className="card-text">This is a web page "<b>Go taxi</b>" built with html and css</p>
						    </div>
						</div>
    				</div>
    				<div className="col-4">
    					<div className="card" style={{width:'300px'}}>
						   <img className="card-img-top" src={java} alt="Cage" style={{width:'100%'}}/>
						   <div className="card-body">
						    	<p className="card-text"> &nbsp;&nbsp;&nbsp;This is a voucher built with html, css and javascript.<br/> 
                                &nbsp;&nbsp;&nbsp;Voucher is used to generate numbers </p>
						    </div>
						</div>
    				</div>
    			</div> <br/><br/>


    			<div className="row">
    				<div className="col-4" >
						<div className="card" style={{width:'300px'}}>
						   <img className="card-img-top" src={png} alt="Ca" style={{width:'100%'}}/>
						   <div className="card-body">
						    	<p className="card-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a school grade built with html, css and javascript.<br/>
                                &nbsp;&nbsp;&nbsp; This is used to check student grade maybe they do well or otherwise.</p>
						    </div>
						</div>
					</div>	
    				<div className="col-4">
    					<div className="card" style={{width:'300px'}}>
						   <img className="card-img-top" src={src} alt="Car" style={{width:'100%'}}/>
						   <div className="card-body">
						    	<p className="card-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a Chat app built with angular framework.<br/>
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This can be used to communicate between each other.
                                 </p>
						    </div>
						</div>
    				</div>
    				<div className="col-4">
    					<div className="card" style={{width:'300px'}}>
						   <img className="card-img-top" src={pharmacy} alt=" ge" style={{width:'100%'}}/>
						   <div className="card-body">
						    	<p className="card-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is an Inventory System for a pharmacy, it was built with html, css, Bootstrap, Javascript 
                                and PHP as the front-end while MySql as the back-end. <br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Inventory System is used monitor and calculate how the goods are consume by the customer.</p>
						    </div>
						</div>
    				</div>
    			</div>
    		</div>
    	</div>
        </div>

		<div className="container-fluid p-3 bg-info ">
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

export default Project;