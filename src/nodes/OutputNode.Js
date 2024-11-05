// src/components/OutputForm.js
import React from 'react';
import { Handle } from 'react-flow-renderer';

const OutputForm = ({ data }) => (
  <div className="node output-node">
    <strong>Output</strong>
    <p>Output Response</p>
    <div>{data.output}</div>
    <Handle type="target" position="left" />
  </div>
);

export default OutputForm;
