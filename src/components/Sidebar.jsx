import { useState } from 'react'
import horizon from '../assets/Horizon-logo.png'

export default function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      id: 'banks',
      label: 'My Banks',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      ),
    },
    {
      id: 'transactions',
      label: 'Transaction History',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      id: 'payment',
      label: 'Payment Transfer',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      ),
    },
    {
      id: 'connect',
      label: 'Connect Bank',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="sidebar">
      <div className="sidebar--logo" onClick={() => setActivePage('home')}>
        <img src={horizon} alt="Horizon logo" className="sidebar--logo-img" />
        <span className="sidebar--logo-text">Horizon</span>
      </div>

      <div className="sidebar--search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="text" placeholder="Search" className="sidebar--search-input" />
      </div>

      <nav className="sidebar--nav">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar--nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <span className="sidebar--nav-icon">{item.icon}</span>
            <span className="sidebar--nav-label">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar--user">
        <div className="sidebar--user-avatar">JS</div>
        <div className="sidebar--user-info">
          <div className="sidebar--user-name">Adrian Hajdin</div>
          <div className="sidebar--user-email">adrian@jsmastery.pro</div>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
      </div>
    </div>
  )
}
