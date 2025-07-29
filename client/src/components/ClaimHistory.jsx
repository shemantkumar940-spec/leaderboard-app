import React from 'react';

function ClaimHistory({ history }) {
  return (
    <div style={{ maxHeight: 220, overflowY: 'auto', border: '1px solid #ccc', padding: 16, borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px #eee' }}>
      <h3 style={{ marginTop: 0, marginBottom: 12, color: '#1976d2' }}>Claim History</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {history.map(item => (
          <li key={item._id} style={{ marginBottom: 8, fontSize: 15 }}>
            <strong style={{ color: '#1976d2' }}>{item.userId ? item.userId.name : 'Unknown User'}</strong> claimed <strong style={{ color: '#43a047' }}>{item.points}</strong> points at <span style={{ color: '#555' }}>{new Date(item.timestamp).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClaimHistory;