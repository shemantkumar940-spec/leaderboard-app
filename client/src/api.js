// API utility for frontend
const API_URL = 'http://localhost:5000';

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export async function addUser(name) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  if (!res.ok) throw new Error('Failed to add user');
  return res.json();
}

export async function claimPoints(userId) {
  const res = await fetch(`${API_URL}/claim`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId })
  });
  if (!res.ok) throw new Error('Failed to claim points');
  return res.json();
}

export async function getHistory() {
  const res = await fetch(`${API_URL}/history`);
  if (!res.ok) throw new Error('Failed to fetch history');
  return res.json();
}