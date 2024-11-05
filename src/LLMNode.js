// src/nodes/LLMNode.js
import React from 'react';

const LLMNode = ({ data }) => {
    const handleChange = (e) => {
        data.setCredentials(e.target.value);
    };
    return (
        <div>
            <h3>LLM Node</h3>
            <input
                type="text"
                placeholder="OpenAI Model Credentials"
                value={data.credentials}
                onChange={handleChange}
            />
            {/* Add more configuration options as needed */}
        </div>
    );
};

export default LLMNode;