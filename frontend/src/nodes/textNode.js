// textNode.js
// Part 3: Dynamic sizing + variable handle detection

import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = {
  width: 10,
  height: 10,
  background: '#6366f1',
  border: '2px solid #818cf8',
  borderRadius: '50%',
};

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

function extractVariables(text) {
  const vars = new Set();
  let match;
  const re = new RegExp(VAR_REGEX.source, 'g');
  while ((match = re.exec(text)) !== null) {
    vars.add(match[1]);
  }
  return Array.from(vars);
}

const MIN_WIDTH = 220;
const MIN_HEIGHT = 80;
const CHAR_WIDTH = 8.5;
const LINE_HEIGHT = 20;
const PADDING = 60;

function calcSize(text) {
  const lines = text.split('\n');
  const maxLineLen = Math.max(...lines.map((l) => l.length), 10);
  const width = Math.max(MIN_WIDTH, maxLineLen * CHAR_WIDTH + PADDING);
  const height = Math.max(MIN_HEIGHT, lines.length * LINE_HEIGHT + PADDING);
  return { width, height };
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const { width, height } = calcSize(currText);

  useEffect(() => {
    setVariables(extractVariables(currText));
  }, [currText]);

  return (
    <div
      style={{
        width,
        minHeight: height,
        background: 'linear-gradient(135deg, #1e1b4b 0%, #1e1e2e 100%)',
        border: '1px solid #4f46e5',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        overflow: 'visible',
        position: 'relative',
      }}
    >
      {/* Variable input handles */}
      {variables.map((varName, i) => {
        const topPct =
          variables.length === 1
            ? 50
            : ((i + 1) / (variables.length + 1)) * 100;
        return (
          <div key={varName}>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-${varName}`}
              style={{ ...handleStyle, top: `${topPct}%` }}
            />
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
              {varName}
            </span>
          </div>
        );
      })}

      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(90deg, #059669, #0891b2)',
          borderRadius: '11px 11px 0 0',
          padding: '8px 14px',
        }}
      >
        <span
          style={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.3px',
          }}
        >
          ✎ Text
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '10px 14px' }}>
        <span style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px', display: 'block' }}>
          Content
        </span>
        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            width: '100%',
            minHeight: Math.max(60, height - 60),
            background: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '6px',
            color: '#e2e8f0',
            padding: '6px 8px',
            fontSize: '12px',
            resize: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            boxSizing: 'border-box',
          }}
        />
        {variables.length > 0 && (
          <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {variables.map((v) => (
              <span
                key={v}
                style={{
                  background: '#312e81',
                  color: '#a5b4fc',
                  borderRadius: '4px',
                  padding: '2px 6px',
                  fontSize: '10px',
                }}
              >
                {`{{${v}}}`}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ ...handleStyle, background: '#10b981', borderColor: '#34d399', top: '50%' }}
      />
    </div>
  );
};
