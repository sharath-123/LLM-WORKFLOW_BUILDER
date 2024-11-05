// src/nodes/InputNode.js
import React from 'react';

const InputNode = ({ data }) => {
    const handleChange = (e) => {
        data.setInputValue(e.target.value);
    };

    return (
        <div>
            <h3>Input Node</h3>
            <input
                type="text"
                placeholder="Enter your query"
                value={data.inputValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputNode;