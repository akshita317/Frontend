// toolbar.js

import { DraggableNode } from './draggableNode';

const toolbarStyle = {
  background: '#12121f',
  borderBottom: '1px solid #1e1b4b',
  padding: '12px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const brandStyle = {
  color: '#818cf8',
  fontWeight: 700,
  fontSize: '18px',
  letterSpacing: '0.5px',
  marginRight: '16px',
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  flexShrink: 0,
};

const nodesContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  alignItems: 'center',
};

const NODE_DEFS = [
  { type: 'customInput', label: 'Input',       color: 'linear-gradient(135deg, #4f46e5, #7c3aed)' },
  { type: 'customOutput', label: 'Output',     color: 'linear-gradient(135deg, #0891b2, #0284c7)' },
  { type: 'llm',          label: 'LLM',        color: 'linear-gradient(135deg, #7c3aed, #db2777)' },
  { type: 'text',         label: 'Text',       color: 'linear-gradient(135deg, #059669, #0891b2)' },
  { type: 'filter',       label: 'Filter',     color: 'linear-gradient(135deg, #b45309, #d97706)' },
  { type: 'transform',    label: 'Transform',  color: 'linear-gradient(135deg, #0f766e, #059669)' },
  { type: 'merge',        label: 'Merge',      color: 'linear-gradient(135deg, #1d4ed8, #4f46e5)' },
  { type: 'split',        label: 'Split',      color: 'linear-gradient(135deg, #be185d, #9d174d)' },
  { type: 'conditional',  label: 'Conditional', color: 'linear-gradient(135deg, #9333ea, #7c3aed)' },
];

export const PipelineToolbar = () => {
  return (
    <div style={toolbarStyle}>
      <span style={brandStyle}>⚡ VectorShift</span>
      <div style={nodesContainerStyle}>
        {NODE_DEFS.map(({ type, label, color }) => (
          <DraggableNode key={type} type={type} label={label} color={color} />
        ))}
      </div>
    </div>
  );
};
