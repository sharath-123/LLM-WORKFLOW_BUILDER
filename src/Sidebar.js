import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Components</h3>
      <p>Drag and Drop</p>
      <div className="node-item">Input</div>
      <div className="node-item">LLM Engine</div>
      <div className="node-item">Output</div>
    </div>
  );
}

export default Sidebar;

