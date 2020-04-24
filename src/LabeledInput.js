import React from 'react';


const LabeledInput = (props) => {
    const getInput = (input) => {
        input.onChange(
        );
    };
    return (
        <div>
        <label
            htmlFor={props.id}
        >
            {}
        </label>
        <input
        type="text"
        id={props.id}
        placeholder={'Input User Id'}
        value={getInput()}>
        </input>
</div>
    )
};

export default LabeledInput;