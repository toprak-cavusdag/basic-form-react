import React from "react";
import "./form.css"
import PropTypes from 'prop-types';


const Form = ({children}) =>{

    return(
        <div className="custom-form">
            {children}
        </div>
    )
}


Form.prototype ={
    children: PropTypes.node
}
Form.defaultProps ={
    children: null
}




export default Form