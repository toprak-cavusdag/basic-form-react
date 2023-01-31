import React from "react";
import PropTypes from 'prop-types';
import "./button.css"

const Button = ({text, onClick })=>{
    return(
        <button onClick={onClick} className="custom-button">{text}</button>
    )
}

Button.prototype ={
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
Button.defaultProps ={
    text: "Click",
}


export default Button