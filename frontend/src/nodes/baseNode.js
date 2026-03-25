// baseNode.js
// Reusable base node abstraction for all node types

import { Handle, Position } from 'reactflow';

const handleStyle = {
  width: 10,
  height: 10,
  background: '#6366f1',
  border: '2px solid #818cf8',
  borderRadius: '50%',
};

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],    // [{ id, label, style }]
  outputs = [],   // [{ id, label, style }]
  style = {},
  headerColor = '#6366f1',
  minWidth = 220,
  minHeight = 80,
}) => {
  const containerStyle = {
    minWidth,
    minHeight,
    background: 'linear-gradient(135deg, #1e1b4b 0%, #1e1e2e 100%)',
    border: '1px solid #4f46e5',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    overflow: 'visible',
    ...style,
  };

  const headerStyle = {
    background: headerColor,
    borderRadius: '11px 11px 0 0',
    padding: '8px 14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const titleStyle = {
    color: '#fff',
    fontWeight: 600,
    fontSize: '13px',
    letterSpacing: '0.3px',
  };

  const bodyStyle = {
    padding: '10px 14px',
  };

  return (
    <div style={containerStyle}>
      {/* Input Handles */}
      {inputs.map((input, i) => {
        const topPct = inputs.length === 1
          ? 50
          : ((i + 1) / (inputs.length + 1)) * 100;
        return (
          <div key={input.id}>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-${input.id}`}
              style={{ ...handleStyle, top: `${topPct}%`, ...input.style }}
            />
            {input.label && (
              <span
                style={{
                  position: 'absolute',
                  left: 16,
                  top: `calc(${topPct}% - 8px)`,
                  fontSize: '10px',
                  color: '#94a3b8',
                  pointerEvents: 'none',
                }}
              >
                {input.label}
              </span>
            )}
          </div>
        );
      })}

      {/* Header */}
      <div style={headerStyle}>
        <span style={titleStyle}>{title}</span>
      </div>

      {/* Body */}
      <div style={bodyStyle}>{children}</div>

      {/* Output Handles */}
      {outputs.map((output, i) => {
        const topPct = outputs.length === 1
          ? 50
          : ((i + 1) / (outputs.length + 1)) * 100;
        return (
          <div key={output.id}>
            <Handle
              type="source"
              position={Position.Right}
              id={`${id}-${output.id}`}
              style={{ ...handleStyle, background: '#10b981', borderColor: '#34d399', top: `${topPct}%`, ...output.style }}
            />
            {output.label && (
              <span
                style={{
                  position: 'absolute',
                  right: 16,
                  top: `calc(${topPct}% - 8px)`,
                  fontSize: '10px',
                  color: '#94a3b8',
                  pointerEvents: 'none',
                  textAlign: 'right',
                }}
              >
                {output.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
