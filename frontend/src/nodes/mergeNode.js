// mergeNode.js — merges multiple data streams into one

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

export const MergeNode = ({ id, data }) => {
  const [strategy, setStrategy] = useState(data?.strategy || 'concat');

  return (
    <BaseNode
      id={id}
      title="⊕ Merge"
      inputs={[
        { id: 'input1', label: 'input 1' },
        { id: 'input2', label: 'input 2' },
        { id: 'input3', label: 'input 3' },
      ]}
      outputs={[{ id: 'merged', label: 'merged' }]}
      headerColor="linear-gradient(90deg, #1d4ed8, #4f46e5)"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={labelStyle}>Merge Strategy</span>
        <select
          style={selectStyle}
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
        >
          <option value="concat">Concatenate</option>
          <option value="join">Join with separator</option>
          <option value="zip">Zip arrays</option>
          <option value="merge">Deep merge objects</option>
        </select>
      </div>
    </BaseNode>
  );
};
