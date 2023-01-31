import React from "react";
import PropTypes from 'prop-types';
import "./button.css"

const Button = ({text, onClick })=>{
    return(
        <div className="container">
        <button onClick={onClick} className="custom-button">{text}</button>
        </div>
    )
}

Button.prototype ={
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
Button.defaultProps ={
    text: "Tıkla",
}


export default Button