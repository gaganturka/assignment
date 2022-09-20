import React, { useState, useEffect } from "react";
import axios from "axios"
import Modal from "./Modal";
import App from "../App"



function Card(props) {
const {imageUrl,fullName,id} = props.person




    return(
     
    


            <div key={id} data-toggle="modal" data-target="#exampleModal" className="col-sm-3" onClick={ ()=>{props.setSelecterChar(props.person)} }  >
              <div className="card">

                <img src={imageUrl} className="card-img-top"   width= '100%'  height= '300vw' object-fit= 'cover'/>
                <div className="card-body" margin='100px'>
                  <h6 className="card-title">{fullName}</h6>
                  
                </div>
              </div>
            </div>
           
    )
}



export default Card