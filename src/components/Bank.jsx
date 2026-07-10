

const cards = [
  { id: 1, bank: 'Horizon Banking', name: 'CHIEDU MORDI', number: '1234 1234 1234 1234', expiry: '06/24', gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)', spending: '$2,840.40', progress: 65 },
  { id: 2, bank: 'Bank of Australia', name: 'CHIEDU MORDI', number: '1234 1234 1234 1234', expiry: '06/24', gradient: 'linear-gradient(135deg, #1d4ed8, #60a5fa)', spending: '$2,840.40', progress: 55 },
  { id: 3, bank: 'Bank of India', name: 'CHIEDU MORDI', number: '1234 1234 1234 1234', expiry: '06/24', gradient: 'linear-gradient(135deg, #1e40af, #93c5fd)', spending: '$2,840.40', progress: 45 },
  { id: 4, bank: 'Bank of America', name: 'OLIVIA RHYE', number: '1234 1234 1234 1234', expiry: '06/24', gradient: 'linear-gradient(135deg, #5b21b6, #7c3aed)', spending: '$2,840.40', progress: 70 },
  { id: 5, bank: 'Bank of Canada', name: 'OLIVIA RHYE', number: '1234 1234 1234 1234', expiry: '06/24', gradient: 'linear-gradient(135deg, #6d28d9, #8b5cf6)', spending: '$2,840.40', progress: 60 },
  { id: 6, bank: 'Bank of Pakistan', name: 'OLIVIA RHYE', number: '1234 1234 1234 1234', expiry: '06/24', gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)', spending: '$2,840.40', progress: 40 },
]

export default function Bank() {
  return (
    
      <div className="bank">
        <div className="bank--header">
          <h1 className="bank--title">My Bank Accounts</h1>
          <p className="bank--subtitle">Effortlessly Manage Your Banking Activities</p>
        </div>

        <div className="bank--cards-section">
          <div className="bank--cards-header">
            <h2>Your cards</h2>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <circle cx="12" cy="5" r="1" fill="#888"/><circle cx="12" cy="12" r="1" fill="#888"/><circle cx="12" cy="19" r="1" fill="#888"/>
            </svg>
          </div>
          <div className="bank--cards-grid">
            {cards.map(card => (
              <div key={card.id} className="bank--card-wrapper">
                <div className="bank--card" style={{ background: card.gradient }}>
                  <div className="bank--card-top">
                    <span className="bank--card-bank">{card.bank}</span>
                    <button className="bank--card-copy" title="Copy card number">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    </button>
                  </div>
                  <div className="bank--card-name">{card.name}</div>
                  <div className="bank--card-bottom">
                    <div className="bank--card-details">
                      <span className="bank--card-number">{card.number}</span>
                      <span className="bank--card-expiry">{card.expiry}</span>
                    </div>
                    <div className="bank--card-mc">
                      <div className="mc-circle mc-red"></div>
                      <div className="mc-circle mc-yellow"></div>
                    </div>
                  </div>
                  <div className="bank--card-waves">
                    <svg viewBox="0 0 300 150" preserveAspectRatio="none" opacity="0.12">
                      <path d="M0,80 C50,20 100,140 150,80 C200,20 250,140 300,80 L300,150 L0,150 Z" fill="white"/>
                      <path d="M0,100 C60,40 120,160 180,100 C240,40 270,140 300,100 L300,150 L0,150 Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div className="bank--card-info">
                  <span>Spending this month</span>
                  <span className="bank--card-spending">{card.spending}</span>
                </div>
                <div className="bank--card-progress">
                  <div className="bank--card-progress-fill" style={{ width: `${card.progress}%`, background: card.gradient }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  )
}
