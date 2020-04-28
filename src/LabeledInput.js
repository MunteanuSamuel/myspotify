import React from 'react';


const LabeledInput = ({user, label, placeholder}) => {
    function handleChange (event){
        let inputText = event.target.value;
        return inputText;
    }
    return (
        <div>
        <label
            htmlFor={user.id}
        >
            {label}
        </label>
        <input
        type="text"
        id={user.id}
        placeholder={placeholder}
        onChange={handleChange}>
        </input>
</div>
    )
};

export default LabeledInput;