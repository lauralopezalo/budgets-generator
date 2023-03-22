import React from 'react';
import { QuantitySelectorContainer, QuantityButton, QuantityInput } from './QuantitySelector.styles'

const QuantitySelector = (props) => {
    const handleDecrement = () => {
        const newValue = parseInt(props.value, 10) - 1;
        props.onChange(newValue);
    };

    const handleIncrement = () => {
        const newValue = parseInt(props.value, 10) + 1;
        props.onChange(newValue);
    };

    return (
        <QuantitySelectorContainer>
            <QuantityButton onClick={handleDecrement}>-</QuantityButton>
            <QuantityInput type="text" value={props.value} onChange={(e) => props.onChange(e.target.value)} />
            <QuantityButton onClick={handleIncrement}>+</QuantityButton>
        </QuantitySelectorContainer>
    );
}

export default QuantitySelector;
