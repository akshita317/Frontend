// splitNode.js — splits data into multiple outputs based on a delimiter

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

export const SplitNode = ({ id, data }) => {
  const [delimiter, setDelimiter] = useState(data?.delimiter || ',');

  return (
    <BaseNode
      id={id}
      title="⊸ Split"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[
        { id: 'part1', label: 'part 1' },
        { id: 'part2', label: 'part 2' },
        { id: 'rest', label: 'rest' },
      ]}
      headerColor="linear-gradient(90deg, #be185d, #9d174d)"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={labelStyle}>Delimiter</span>
        <input
          style={inputStyle}
          type="text"
          placeholder="e.g. , or \\n"
          value={delimiter}
          onChange={(e) => setDelimiter(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};
