// src/nodes/OutputNode.js
import React from 'react';

const OutputNode = ({ data }) => {
    return (
        <div>
            <h3>Output Node</h3>
            <p>{data.output}</p>
        </div>
    );
};

export default OutputNode;