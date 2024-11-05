// src/components/LLMEngineForm.js
import React from 'react';
import { Handle } from 'react-flow-renderer';

const LLMEngineForm = ({ data }) => (
  <div className="node llm-node">
    <strong>LLM Engine</strong>
    <p>Configure LLM Parameters</p>
    <select onChange={(e) => data.onModelChange(e.target.value)}>
      <option value="gpt-3.5">gpt-3.5</option>
      <option value="gpt-4">gpt-4</option>
    </select>
    <input
      type="text"
      placeholder="OpenAI API Base"
      onChange={(e) => data.onApiBaseChange(e.target.value)}
    />
    <input
      type="password"
      placeholder="OpenAI Key"
      onChange={(e) => data.onApiKeyChange(e.target.value)}
    />
    <input
      type="number"
      placeholder="Max Tokens"
      onChange={(e) => data.onMaxTokensChange(e.target.value)}
    />
    <input
      type="number"
      step="0.1"
      min="0"
      max="1"
      placeholder="Temperature"
      onChange={(e) => data.onTemperatureChange(e.target.value)}
    />
    <Handle type="source" position="right" />
    <Handle type="target" position="left" />
  </div>
);

export default LLMEngineForm;
