import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Payment({ activePage, setActivePage }) {
  const [note, setNote] = useState(`Dear John,\n\nI hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it.`)
  const [account, setAccount] = useState('')
  const [email, setEmail] = useState('')
  const [accountNum, setAccountNum] = useState('')
  const [amount, setAmount] = useState('')

  return (
    <div className="layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="payment">
        <div className="payment--header">
          <h1 className="payment--title">Payment Transfer</h1>
          <p>Please provide any specific details or notes related to the payment transfer</p>
        </div>

        <div className="payment--section">
          <div className="payment--section-label">
            <h2>Transfer details</h2>
            <p>Enter the details of the recipient</p>
          </div>
          <div className="payment--divider"></div>

          <div className="payment--row">
            <div className="payment--row-label">
              <div className="payment--field-title">Select Source Bank</div>
              <p>Select the bank account you want to transfer funds from</p>
            </div>
            <div className="payment--select-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <select
                className="payment--select"
                value={account}
                onChange={e => setAccount(e.target.value)}
              >
                <option value="">Select Account</option>
                <option value="chase">Chase Bank - $2,588.12</option>
                <option value="boa">Bank of America - $1,200.00</option>
                <option value="platypus">First Platypus Bank - $540.00</option>
              </select>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>

          <div className="payment--divider"></div>

          <div className="payment--row">
            <div className="payment--row-label">
              <div className="payment--field-title">Transfer Note (Optional)</div>
              <p>Please provide any additional information or instructions related to the transfer</p>
            </div>
            <textarea
              className="payment--textarea"
              value={note}
              onChange={e => setNote(e.target.value)}
              rows={5}
            />
          </div>
        </div>

        <div className="payment--section">
          <div className="payment--section-label">
            <h2>Bank account details</h2>
            <p>Enter the bank account details of the recipient</p>
          </div>
          <div className="payment--divider"></div>

          <div className="payment--field-group">
            <div className="payment--field">
              <label>Recipient's Email Address</label>
              <input
                type="email"
                placeholder="ex: john@gmail.com"
                className="payment--input"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="payment--field">
              <label>Recipient's Bank Account Number</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter the account number"
                className="payment--input"
                value={accountNum}
                onChange={e => setAccountNum(e.target.value)}
              />
            </div>
            <div className="payment--field">
              <label>Amount</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="4000"
                className="payment--input"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button className="payment--btn">Transfer Funds</button>
      </div>
    </div>
  )
}
