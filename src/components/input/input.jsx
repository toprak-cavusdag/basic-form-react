
import React from "react";
import './input.css'
import PropTypes from 'prop-types';

const Input = ({type,placeholder,value,onChange})=>{
    return(
        <input className="custom-input" type="text" value={value} placeholder={placeholder} onChange={onChange} />
    )
}

Input.prototype ={
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type:  PropTypes.string
}
Input.defaultProps ={
    placeholder: "Değer Giriniz",
    type: "Text"
}

export default Input