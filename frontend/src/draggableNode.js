// draggableNode.js

export const DraggableNode = ({ type, label, color }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        background: color || '#1C2536',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        transition: 'transform 0.15s, box-shadow 0.15s',
        padding: '0 12px',
      }}
      draggable
    >
      <span
        style={{
          color: '#fff',
          fontSize: '12px',
          fontWeight: 600,
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          letterSpacing: '0.3px',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
};
  