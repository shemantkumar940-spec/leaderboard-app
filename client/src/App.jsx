import React, { useEffect, useState } from 'react';
import { getUsers, addUser, claimPoints, getHistory } from './api';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import ClaimHistory from './components/ClaimHistory';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [awardedPoints, setAwardedPoints] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const fetchHistory = async () => {
    const data = await getHistory();
    setHistory(data);
  };

  useEffect(() => {
    fetchUsers();
    fetchHistory();
  }, []);

  const handleAddUser = async name => {
    await addUser(name);
    fetchUsers();
  };

  const handleClaim = async () => {
    setLoading(true);
    const res = await claimPoints(selectedUser);
    setAwardedPoints(res.points);
    fetchUsers();
    fetchHistory();
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, background: '#f4f6fa', borderRadius: 12, boxShadow: '0 4px 24px #e3e3e3' }}>
      <h2 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 32 }}>Leaderboard System</h2>
      <UserSelector users={users} onSelect={setSelectedUser} onAdd={handleAddUser} />
      <ClaimButton selectedUser={selectedUser} onClaim={handleClaim} loading={loading} />
      {awardedPoints !== null && (
        <div style={{ marginBottom: 24, textAlign: 'center', fontSize: 18, color: '#43a047', fontWeight: 'bold' }}>
          Points Awarded: {awardedPoints}
        </div>
      )}
      <Leaderboard users={users} />
      <ClaimHistory history={history} />
    </div>
  );
}

export default App;