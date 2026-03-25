// transformNode.js — applies a transformation to incoming data

import { useState } from 'react';
import { BaseNode } from './baseNode';

const labelStyle = { fontSize: '11px', color: '#94a3b8', marginBottom: '2px' };
const selectStyle = {
  background: '#0f172a',
  border: '1px solid #334155',
  borderRadius: '6px',
  color: '#e2e8f0',
  padding: '4px 8px',
  fontSize: '12px',
  width: '100%',
  outline: 'none',
  cursor: 'pointer',
};

export const TransformNode = ({ id, data }) => {
  const [transform, setTransform] = useState(data?.transform || 'uppercase');

  return (
    <BaseNode
      id={id}
      title="⟳ Transform"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[{ id: 'output', label: 'output' }]}
      headerColor="linear-gradient(90deg, #0f766e, #059669)"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={labelStyle}>Operation</span>
        <select
          style={selectStyle}
          value={transform}
          onChange={(e) => setTransform(e.target.value)}
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim whitespace</option>
          <option value="reverse">Reverse</option>
          <option value="stringify">Stringify (JSON)</option>
          <option value="parse">Parse (JSON)</option>
        </select>
      </div>
    </BaseNode>
  );
};
