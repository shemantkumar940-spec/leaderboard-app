import React from 'react';

const trophyIcons = [
  '👑', // 1st place crown
  '🥈', // 2nd place
  '🥉', // 3rd place
];

function Leaderboard({ users }) {
  const top3 = users.slice(0, 3);
  const others = users.slice(3);

  return (
    <div className="leaderboard-wrapper" style={{ width: '100%', marginBottom: 24 }}>
      {/* Top 3 Cards */}
      <div className="leaderboard-top3" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
        {top3.map((user, idx) => (
          <div
            key={user._id}
            className="leaderboard-card"
            style={{
              background: idx === 0 ? 'linear-gradient(135deg, #ffe082 60%, #fffde7 100%)' : idx === 1 ? 'linear-gradient(135deg, #b3e5fc 60%, #e1f5fe 100%)' : 'linear-gradient(135deg, #ffe0b2 60%, #fff3e0 100%)',
              borderRadius: 20,
              boxShadow: '0 4px 24px #e3e3e3',
              padding: 24,
              minWidth: 180,
              maxWidth: 220,
              textAlign: 'center',
              position: 'relative',
              flex: '1 1 180px',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>{trophyIcons[idx]}</div>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: '#fff',
              margin: '0 auto 12px',
              boxShadow: '0 2px 8px #eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
            }}>
              {/* Placeholder avatar icon */}
              <span role="img" aria-label="avatar">👤</span>
            </div>
            <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 4 }}>{user.name}</div>
            <div style={{ fontSize: 16, color: '#888', marginBottom: 4 }}>Rank {idx + 1}</div>
            <div style={{ fontSize: 20, color: '#ffb300', fontWeight: 'bold' }}>{user.points} pts</div>
          </div>
        ))}
      </div>
      {/* Other Users Table */}
      <div className="leaderboard-table-wrapper" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', overflow: 'auto' }}>
        <table className="leaderboard-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, minWidth: 320 }}>
          <thead style={{ background: '#f5f5f5' }}>
            <tr>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Rank</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Points</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Icon</th>
            </tr>
          </thead>
          <tbody>
            {others.map((user, idx) => (
              <tr key={user._id} style={{ background: idx % 2 === 0 ? '#fff8e1' : '#fff' }}>
                <td style={{ padding: '10px 8px', fontWeight: 'bold', color: '#ff9800' }}>{idx + 4}</td>
                <td style={{ padding: '10px 8px', fontWeight: 'bold' }}>{user.name}</td>
                <td style={{ padding: '10px 8px', color: '#ffb300', fontWeight: 'bold' }}>{user.points}</td>
                <td style={{ padding: '10px 8px', fontSize: 20 }}>🏆</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Responsive styles */}
      <style>{`
        .leaderboard-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .leaderboard-wrapper {
            padding: 0 8px;
          }
        }
        @media (max-width: 700px) {
          .leaderboard-top3 {
            flex-direction: column !important;
            align-items: center !important;
          }
          .leaderboard-card {
            min-width: 90vw !important;
            max-width: 98vw !important;
            margin-bottom: 16px;
          }
          .leaderboard-table-wrapper {
            border-radius: 8px;
          }
        }
        @media (max-width: 500px) {
          .leaderboard-table {
            font-size: 13px !important;
          }
          .leaderboard-card {
            padding: 12px !important;
            font-size: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Leaderboard;