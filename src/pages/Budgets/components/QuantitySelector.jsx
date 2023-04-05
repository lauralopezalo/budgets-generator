import React from 'react';


const QuantitySelector = (props) => {
    const handleDecrement = () => {
        const newValue = parseInt(props.value, 10) - 1;
        props.onChangeQuantity(newValue);
    };

    const handleIncrement = () => {
        const newValue = parseInt(props.value, 10) + 1;
        props.onChangeQuantity(newValue);
    };

    return (
        <div className='flex items-center'>
            <button 
                onClick={()=>handleDecrement()}
                className="inline-block rounded-full bg-tangerine text-white font-bold w-7 h-7 m-2">
                -
            </button>
            <input 
                type="text" 
                value={props.value} 
                onChange={(e) => props.onChangeQuantity(e.target.value)} 
                className="h-10 w-14 rounded border p-2 text-sm text-center focus:outline-none focus:shadow-outline focus:border-2 focus:border-tangerine"/>
            <button 
                onClick={()=>handleIncrement()}
                className="inline-block rounded-full bg-tangerine text-white font-bold w-7 h-7 m-2">
                +
            </button>
        </div>
    );
}

export default QuantitySelector;
