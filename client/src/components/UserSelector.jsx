import React, { useState } from 'react';

function UserSelector({ users, onSelect, onAdd }) {
  const [newUser, setNewUser] = useState('');

  return (
    <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
      <select
        onChange={e => onSelect(e.target.value)}
        style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', minWidth: 160 }}
      >
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add user"
        value={newUser}
        onChange={e => setNewUser(e.target.value)}
        style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', minWidth: 120 }}
      />
      <button
        onClick={() => { if (newUser) { onAdd(newUser); setNewUser(''); } }}
        style={{ padding: '8px 16px', borderRadius: 6, background: '#1976d2', color: '#fff', border: 'none', cursor: 'pointer' }}
      >
        Add
      </button>
    </div>
  );
}

export default UserSelector;