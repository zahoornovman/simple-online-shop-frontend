import React from "react";

import './styles.css'

import { Link } from "react-router-dom";


export function LoginModal(props) {

    console.log(props);
    
    return (
        
        
        <div className="login-modal" onClick={props.handleClick}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">
                        Login to view items in Cart:
                    </h4>
                </div>
                <div className="modal-footer">
                    <Link to='/login'>Login</Link>
                    <button onClick={props.handleClick} >Close</button>
                </div>
            </div>
        </div>
    )
     

}

