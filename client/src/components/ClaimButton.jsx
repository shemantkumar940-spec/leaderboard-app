import React from 'react';

function ClaimButton({ selectedUser, onClaim, loading }) {
  return (
    <button
      onClick={onClaim}
      disabled={!selectedUser || loading}
      style={{
        marginBottom: 24,
        padding: '10px 24px',
        borderRadius: 6,
        background: !selectedUser || loading ? '#ccc' : '#43a047',
        color: '#fff',
        border: 'none',
        fontWeight: 'bold',
        fontSize: 16,
        cursor: !selectedUser || loading ? 'not-allowed' : 'pointer',
        transition: 'background 0.2s',
      }}
    >
      {loading ? 'Claiming...' : 'Claim Points'}
    </button>
  );
}

export default ClaimButton;