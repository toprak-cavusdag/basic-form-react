import React from "react";
import PropTypes from 'prop-types';

const Button = ({text, onClick })=>{
    return(
        <button onClick={onClick} className="custom-bottom">{text}</button>
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