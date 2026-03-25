// llmNode.js

import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="⚡ LLM"
      inputs={[
        { id: 'system', label: 'system' },
        { id: 'prompt', label: 'prompt' },
      ]}
      outputs={[{ id: 'response', label: 'response' }]}
      headerColor="linear-gradient(90deg, #7c3aed, #db2777)"
    >
      <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
        Language Model node — connect a system prompt and user prompt to generate a response.
      </p>
    </BaseNode>
  );
};
