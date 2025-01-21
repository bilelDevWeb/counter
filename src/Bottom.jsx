import React from 'react';

const Button = ({ onclick, disabled, label }) => {
    return (
        <button onclick={onClick} disabled={disabled}></button>
    );
};

export default Button