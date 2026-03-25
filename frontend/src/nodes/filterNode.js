// filterNode.js — filters data based on a condition

import { useState } from 'react';
import { BaseNode } from './baseNode';

const labelStyle = { fontSize: '11px', color: '#94a3b8', marginBottom: '2px' };
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
const selectStyle = { ...inputStyle, cursor: 'pointer' };

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');
  const [operator, setOperator] = useState(data?.operator || 'equals');

  return (
    <BaseNode
      id={id}
      title="⚙ Filter"
      inputs={[{ id: 'data', label: 'data' }]}
      outputs={[
        { id: 'match', label: 'match' },
        { id: 'noMatch', label: 'no match' },
      ]}
      headerColor="linear-gradient(90deg, #b45309, #d97706)"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={labelStyle}>Operator</span>
        <select style={selectStyle} value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="equals">Equals</option>
          <option value="contains">Contains</option>
          <option value="startsWith">Starts with</option>
          <option value="endsWith">Ends with</option>
          <option value="greaterThan">Greater than</option>
          <option value="lessThan">Less than</option>
        </select>
        <span style={labelStyle}>Value</span>
        <input
          style={inputStyle}
          type="text"
          placeholder="Filter value..."
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};
