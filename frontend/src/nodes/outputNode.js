// outputNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  marginBottom: '6px',
};

const labelStyle = {
  fontSize: '11px',
  color: '#94a3b8',
  marginBottom: '2px',
};

const inputStyle = {
  background: '#0f172a',
  border: '1px solid #334155',
  borderRadius: '6px',
  color: '#e2e8f0',
  padding: '4px 8px',
  fontSize: '12px',
  width: '100%',
  outline: 'none',
};

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer',
};

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="◈ Output"
      inputs={[{ id: 'value', label: 'value' }]}
      headerColor="linear-gradient(90deg, #0891b2, #0284c7)"
    >
      <div style={fieldStyle}>
        <span style={labelStyle}>Name</span>
        <input
          style={inputStyle}
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </div>
      <div style={fieldStyle}>
        <span style={labelStyle}>Type</span>
        <select
          style={selectStyle}
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};
