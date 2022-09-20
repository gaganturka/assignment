import React from "react";
import  Card from'./Card'

function Modal(props){

  let {firstName, family, fullName, lastName,imageUrl,title,id} =props.selecterChar


    return(<div>
        
      
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Character's Detail</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <div className="container" >
           
                {
                        <div key={id} >
                           
                                <img src={imageUrl} className="card-img-top" />
                                <div className="card-body">
                                <h5 className="card-title">FirstName - {firstName}</h5>
                                <h5 className="card-title">LastName - {lastName}</h5>
                                <h5 className="card-title">FullName - {fullName}</h5>
                                <h5 className="card-title">Title - {title}</h5>
                                <h5 className="card-title">Family - {family}</h5>
                                  
                                </div>
                       </div>
                      
                }
            </div>
  
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        

    )
}

export default Modal