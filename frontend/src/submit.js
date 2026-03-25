// submit.js
// Part 4: Backend integration — sends pipeline to /pipelines/parse

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      const dagText = data.is_dag
        ? '✅ Yes — this pipeline is a valid DAG.'
        : '❌ No — this pipeline contains a cycle.';

      alert(
        `📊 Pipeline Analysis\n\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${dagText}`
      );
    } catch (err) {
      alert(`⚠️ Failed to connect to the backend.\n\n${err.message}`);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: '#0d0d1a',
        borderTop: '1px solid #1e1b4b',
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 32px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          letterSpacing: '0.5px',
          boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.target.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.target.style.opacity = '1')}
      >
        ⚡ Submit Pipeline
      </button>
    </div>
  );
};
