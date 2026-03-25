// conditionalNode.js — routes data based on a boolean condition

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

export const ConditionalNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || 'value > 0');

  return (
    <BaseNode
      id={id}
      title="⎇ Conditional"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[
        { id: 'true', label: 'true' },
        { id: 'false', label: 'false' },
      ]}
      headerColor="linear-gradient(90deg, #9333ea, #7c3aed)"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={labelStyle}>Condition</span>
        <input
          style={inputStyle}
          type="text"
          placeholder="e.g. value > 0"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />
        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
          <span style={{ fontSize: '10px', color: '#4ade80' }}>▶ true branch</span>
          <span style={{ fontSize: '10px', color: '#f87171' }}>▶ false branch</span>
        </div>
      </div>
    </BaseNode>
  );
};
