// src/Workflow.js
import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background, Handle } from 'react-flow-renderer';

const CustomNode = ({ data }) => (
  <div className="custom-node">
    <strong>{data.label}</strong>
    <div>{data.description}</div>
    {data.inputs && <input type="text" placeholder="Type something..." />}
    {data.apiBase && <input type="text" placeholder="API Base" />}
    {data.apiKey && <input type="password" placeholder="OpenAI Key" />}
    {data.maxTokens && <input type="number" placeholder="Max Tokens" />}
    {data.temperature && <input type="number" step="0.1" min="0" max="1" defaultValue={data.temperature} />}
    <Handle type="source" position="right" />
    <Handle type="target" position="left" />
  </div>
);

const Workflow = () => {
  const [elements] = useState([
    {
      id: '1',
      type: 'customNode',
      position: { x: 100, y: 100 },
      data: { label: 'Input', description: 'Write the input/question you want to ask', inputs: true }
    },
    {
      id: '2',
      type: 'customNode',
      position: { x: 400, y: 100 },
      data: {
        label: 'LLM Engine',
        description: 'Configure the LLM model parameters',
        apiBase: true,
        apiKey: true,
        maxTokens: true,
        temperature: 0.5,
      }
    },
    {
      id: '3',
      type: 'customNode',
      position: { x: 700, y: 100 },
      data: { label: 'Output', description: 'Output response will be shown here' }
    },
    { id: 'e1-2', source: '1', target: '2', type: 'default' },
    { id: 'e2-3', source: '2', target: '3', type: 'default' },
  ]);

  return (
    <ReactFlow
      elements={elements}
      nodeTypes={{ customNode: CustomNode }}
      style={{ width: '100%', height: '100%' }}
    >
      <MiniMap />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default Workflow;
