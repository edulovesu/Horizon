import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Bank from './Bank'
import TransactionHistory from './TransactionHistory'
import Payment from './PaymentTransfer'

export default function App() {
  const [authPage, setAuthPage] = useState('login') // 'login' | 'signup' | 'app'
  const [activePage, setActivePage] = useState('home')

  if (authPage === 'signup') {
    return <Signup onLogin={() => setAuthPage('login')} onSignup={() => setAuthPage('app')} />
  }
  if (authPage === 'login') {
    return <Login onLogin={() => setAuthPage('app')} onSignup={() => setAuthPage('signup')} />
  }

  // App pages
  if (activePage === 'home') return <Dashboard activePage={activePage} setActivePage={setActivePage} />
  if (activePage === 'banks') return <Bank activePage={activePage} setActivePage={setActivePage} />
  if (activePage === 'transactions') return <TransactionHistory activePage={activePage} setActivePage={setActivePage} />
  if (activePage === 'payment') return <Payment activePage={activePage} setActivePage={setActivePage} />

  return <Dashboard activePage={activePage} setActivePage={setActivePage} />
}
