import { useState } from 'react'
import Sidebar from './Sidebar'

const allTransactions = [
  { id: 1, name: 'Spotify', initials: 'SP', color: '#1DB954', amount: -15.00, status: 'Processing', date: 'Wed 1:00pm', category: 'Subscriptions', categoryColor: '#3b82f6' },
  { id: 2, name: 'Alexa Doe', initials: 'AD', color: '#6366f1', amount: +88.00, status: 'Success', date: 'Wed 2:45am', category: 'Deposit', categoryColor: '#16a34a' },
  { id: 3, name: 'JSM Pro', initials: 'JS', color: '#111827', amount: -18.99, status: 'Processing', date: 'Mon 1:10pm', category: 'Subscriptions', categoryColor: '#3b82f6' },
  { id: 4, name: 'Fresh F&V', initials: 'FV', color: '#e5e7eb', textColor: '#111', amount: -88.00, status: 'Success', date: 'Tue 12:15pm', category: 'Groceries', categoryColor: '#8b5cf6' },
  { id: 5, name: 'Figma', initials: 'FG', color: '#f24e1e', amount: -18.99, status: 'Processing', date: 'Tue 6:10pm', category: 'Income', categoryColor: '#16a34a' },
  { id: 6, name: 'Sam Sulek', initials: 'SS', color: '#374151', amount: -40.20, status: 'Declined', date: 'Tue 5:40am', category: 'Food and dining', categoryColor: '#ec4899' },
]

const statusColors = {
  Processing: '#888',
  Success: '#16a34a',
  Declined: '#dc2626',
}

export default function TransactionHistory({ activePage, setActivePage }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  return (
    <div className="layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="txhistory">
        <div className="txhistory--top">
          <div>
            <h1 className="txhistory--title">Transaction history</h1>
            <p className="txhistory--subtitle">Gain Insights and Track Your Transactions Over Time</p>
          </div>
          <div className="txhistory--select-account">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            <span>Select Account</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        <div className="txhistory--bank-banner">
          <div>
            <div className="txhistory--bank-name">Chase</div>
            <div className="txhistory--bank-type">Chase Growth Savings Account</div>
            <div className="txhistory--bank-number">●●●●●●●●●●●●9999</div>
          </div>
          <div className="txhistory--bank-balance-box">
            <div className="txhistory--bank-balance-label">Current Balance</div>
            <div className="txhistory--bank-balance-amount">$41,382.80</div>
          </div>
        </div>

        <div className="txhistory--table-section">
          <div className="txhistory--table-header">
            <h2>Transaction history</h2>
            <button className="txhistory--filter-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
              </svg>
              Apply filter
            </button>
          </div>

          <table className="txhistory--table">
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
              {allTransactions.map(tx => (
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
                      <span className="tx--dot" style={{ background: statusColors[tx.status] }}></span>
                      <span style={{ color: statusColors[tx.status] }}>{tx.status}</span>
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

          <div className="txhistory--pagination">
            <button className="txhistory--page-btn" onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>
              ← Previous
            </button>
            <div className="txhistory--pages">
              {[1, 2, 3].map(p => (
                <button
                  key={p}
                  className={`txhistory--page-num ${currentPage === p ? 'active' : ''}`}
                  onClick={() => setCurrentPage(p)}
                >{p}</button>
              ))}
              <span>...</span>
              {[8, 9, 10].map(p => (
                <button
                  key={p}
                  className={`txhistory--page-num ${currentPage === p ? 'active' : ''}`}
                  onClick={() => setCurrentPage(p)}
                >{p}</button>
              ))}
            </div>
            <button className="txhistory--page-btn" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
