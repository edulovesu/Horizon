import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Bank from './Bank'
import TransactionHistory from './TransactionHistory'
import Payment from './PaymentTransfer'
import Sidebar from './Sidebar'

export default function App() {
  const [authPage, setAuthPage] = useState(
    localStorage.getItem('authPage') || 'login'
  )

  if (authPage === 'signup') {
    return <Signup 
    onLogin={() => {
      setAuthPage('login')
      localStorage.setItem('authPage' , 'login')
    }} 
    onSignup={() => {
      setAuthPage('app')
      localStorage.setItem('authPage' , 'app')
    }} 
    />
  }
  
  if (authPage === 'login') {
    return <Login 
    onLogin={() => {
      setAuthPage('app')
      localStorage.setItem('authPage' , 'app')
    }} 
    onSignup={() => {
      setAuthPage('signup')
      localStorage.setItem('authPage' , 'signup')
    }} 
    />
  }
  return(
    <div className="layout">
      <Sidebar onLogout = {() => {
        console.log('onLogout fired')
        setAuthPage('login')
        localStorage.setItem('authPage' , 'login')
      }}
      />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/banks' element={<Bank />} />
          <Route path= '/transactions' element={<TransactionHistory/>} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </div>
    </div>
  )
}
