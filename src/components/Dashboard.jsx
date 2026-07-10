import useFetch from './useFetch'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const getRandomDate = (start, end) => {
  const startTime = new Date(start).getTime()
  const endTime = new Date(end).getTime()
  const randomTimestamp = startTime + Math.random() * (endTime - startTime)
  const randomDate = new Date(randomTimestamp)
  return randomDate.toISOString().split('T')[0]
}
const budgets = [
  { name: 'Subscriptions', amount: '$25 left', color: '#3b82f6', progress: 70 },
  { name: 'Food and booze', amount: '$120 left', color: '#ef4444', progress: 45 },
  { name: 'Savings', amount: '$50 left', color: '#22c55e', progress: 60 },
]

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  
    
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')
  
  const transactions = data ? data.map(user => ({
    id: user.id,
      name: user.name,
      initials: user.name.split('').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
      color: '#6366f1',
      amount: -(Math.random() * 100).toFixed(2),
      status: ['Success', 'Processing', 'Declined'][Math.floor(Math.random() * 3)],
      statusColor: '#888',
      date: getRandomDate('2026-04-02', '2026-09-17'),
      category: 'Transfer',
      categoryColor: '#3b82f6',
    })) : []
    
    const filteredTransactions = transactions.filter(tx =>
      tx.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  return (
    
      <div className="dashboard">
        <div className="dashboard--main">
          <div className="dashboard--header">
            <h1>Welcome, <span className="blue">Chiedu</span></h1>
            <p>Access &amp; manage your account and transactions efficiently.</p>
          </div>

          <div className="dashboard--balance-card">
            <div className="dashboard--donut">
              <svg viewBox="0 0 100 100" width="80" height="80">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#3b82f6" strokeWidth="12"
                  strokeDasharray="100 139" strokeLinecap="round"
                  transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#bfdbfe" strokeWidth="12"
                  strokeDasharray="40 199" strokeDashoffset="-100" strokeLinecap="round"
                  transform="rotate(-90 50 50)" />
              </svg>
            </div>
            <div className="dashboard--balance-info">
              <div className="dashboard--balance-accounts">2 Bank Accounts</div>
              <div className="dashboard--balance-label">Total Current Balance</div>
              <div className="dashboard--balance-amount">$2,698.12</div>
            </div>
            <button className="dashboard--add-bank">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add bank
            </button>
          </div>

          <div className="dashboard--transactions-section">
            <div className="dashboard--transactions-header">
              <h2>Recent transactions</h2>
              <button className="dashboard--view-all" onClick={() => navigate('/transactions')}>View all</button>
            </div>
            <input 
              type='text'
              placeholder='Search transactions...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                margin: '1.2rem 2.4rem',
                padding: '0.8rem 1.2rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.8rem',
                fontSize: '1.4rem',
                width: 'calc(100% - 4.8rem)'
              }}
            />
            <div className="dashboard--tabs">
              <span className="dashboard--tab active">Chase Bank</span>
              <span className="dashboard--tab">Bank of America</span>
              <span className="dashboard--tab">First Platypus Bank</span>
            </div>

            <div className="dashboard--bank-row">
              <div className="dashboard--bank-avatar" style={{ background: '#2563eb' }}>CB</div>
              <div>
                <div className="dashboard--bank-name">Chase Bank</div>
                <div className="dashboard--bank-balance">$2,588.12</div>
              </div>
              <span className="dashboard--badge" style={{ color: '#16a34a', background: '#dcfce7' }}>savings</span>
            </div>

            {loading ? (
              <div style={{ color: '#6b7280', textAlign: 'center', padding: '2rem' }} className="dashboard--loading">
                Loading transactions...
              </div>
            ) : error ? (
              <div style={{ color: '#ef4444', textAlign: 'center', padding: '2rem' }} className="dashboard--error">
                {error}
              </div>
            ) : (
            <table className="dashboard--table">
              <thead>
                <tr>
                  <th>Transaction</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map(tx => (
                  <tr key={tx.id}>
                    <td>
                      <div className="tx--name">
                        <div className="tx--avatar" style={{ background: tx.color, color: tx.textColor || '#fff' }}>
                          {tx.initials}
                        </div>
                        {tx.name}
                      </div>
                    </td>
                    <td style={{ color: tx.amount < 0 ? '#ef4444' : '#16a34a', fontWeight: 600 }}>
                      {tx.amount < 0 ? `- $${Math.abs(tx.amount).toFixed(2)}` : `+ $${tx.amount.toFixed(2)}`}
                    </td>
                    <td>
                      <span className="tx--status">
                        <span className="tx--dot" style={{ background: tx.statusColor }}></span>
                        {tx.status}
                      </span>
                    </td>
                    <td style={{ color: '#6b7280' }}>{tx.date}</td>
                    <td>
                      <span className="tx--category" style={{ color: tx.categoryColor, borderColor: tx.categoryColor }}>
                        • {tx.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            )}            
            
          </div>
        </div>

        <div className="dashboard--right">
          <div className="dashboard--profile-card">
            <div className="dashboard--profile-banner"></div>
            <div className="dashboard--profile-avatar">
              <div className="dashboard--profile-initials">JS</div>
            </div>
            <div className="dashboard--profile-name">CHIEDU MORDI</div>
            <div className="dashboard--profile-email">chiedu@jsmastery.pro</div>
          </div>

          <div className="dashboard--my-banks">
            <div className="dashboard--my-banks-header">
              <span>My Banks</span>
              <button className="dashboard--add-bank-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Add bank
              </button>
            </div>
            <div className="dashboard--cards-stack">
              <div className="dashboard--mini-card" style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', zIndex: 2, transform: 'translateY(0)' }}>
                <div className="mini-card--top">
                  <span>JS Mastery Pro.</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
                    <path d="M1 6h22v12H1zM1 10h22"/>
                  </svg>
                </div>
                <div className="mini-card--name">CHIEDU MORDI</div>
                <div className="mini-card--bottom">
                  <span className="mini-card--number">1234 1234 1234 1234</span>
                  <span>VISA</span>
                </div>
              </div>
              <div className="dashboard--mini-card" style={{ background: 'linear-gradient(135deg, #6d28d9, #8b5cf6)', zIndex: 1, transform: 'translateY(-12px) translateX(18px) scale(0.96)' }}>
                <div className="mini-card--top">
                  <span>Bank of America</span>
                </div>
                <div className="mini-card--name">OLIVIA RHYE</div>
                <div className="mini-card--bottom">
                  <span className="mini-card--number">1234 1234 1234 1234</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard--budgets">
            <div className="dashboard--budgets-header">
              <span>My budgets</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                <circle cx="12" cy="5" r="1" fill="#888"/><circle cx="12" cy="12" r="1" fill="#888"/><circle cx="12" cy="19" r="1" fill="#888"/>
              </svg>
            </div>
            {budgets.map((b, i) => (
              <div key={i} className="dashboard--budget-item">
                <div className="dashboard--budget-info">
                  <div className="dashboard--budget-icon" style={{ background: b.color + '22' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/>
                    </svg>
                  </div>
                  <span className="dashboard--budget-name">{b.name}</span>
                  <span className="dashboard--budget-amount" style={{ color: b.color }}>{b.amount}</span>
                </div>
                <div className="dashboard--progress-bar">
                  <div className="dashboard--progress-fill" style={{ width: `${b.progress}%`, background: b.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  )
}
