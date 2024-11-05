// src/App.js
import React from 'react';
import Workflow from './Workflow';
import './App.css';
// import InputForm from './nodes/InputNode';
// import LLMEngineForm from './nodes/LLMNode.Js';
// import OutputForm from './nodes/OutputNode.Js';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>LLM Workflow Application</h1>
        <button> Deploy </button>
        <button>Run</button>
      </header>
      <div className="app-body">
        <aside className="sidebar">
          <h2>Components</h2>
          <ul>
            <li>Input</li>
            <li>LLM Engine</li>
            <li>Output</li>
          </ul>
        </aside>
        <main className="workflow-container">
          <Workflow />
        </main>
      </div>
    </div>
  );
}

export default App;
