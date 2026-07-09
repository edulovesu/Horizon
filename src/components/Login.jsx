import {useState} from 'react'
import photo from '../assets/big--image.png'
import horizon from '../assets/Horizon-logo.png'

export default function Login({ onLogin, onSignup }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, SetError] = useState('')

  function handleLogin(){
    if(!email || !password ){
      SetError('Please fill in all fields')
      return
    }
    if(!email.includes('@')){
      SetError('Please enter a valid email')
      return 
    }
    if(password.length < 5){
      SetError('Password must be at lease 5 characters')
      return 
    }
    SetError('')
    onLogin()
  }

  return (
    <div className='login'>
      <div className='login--container'>
        <div className='login--header'>
          <img src={horizon} alt="logo" className='login--logo' />
          <h1>Horizon</h1>
        </div>
        <h2 className='title'>Log in</h2>
        <p>Welcome back! Please enter your details</p>
        <div className='login--content'>
          <label htmlFor="Email">Email</label>
          <input 
          type="email" required 
          placeholder="Enter your email" 
          className='input1'
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="Password">Password</label>
          <input 
          type="password" required 
          placeholder="Enter your password" 
          className='input2' 
          value={password}
          onChange={e => setPassword(e.target.value)}
          />

          {error && (
            <p style={{color: '#ef4444', fontSize: '1.3rem', margin: '0'}}>
              {error}
            </p>
          )}  

          <button className='login--btn' onClick={handleLogin}>Login</button>
        </div>
        <p className='login--signup'>Don't have an account?{' '}
          <span className='blue' style={{ cursor: 'pointer' }} onClick={onSignup}> Sign up</span>
        </p>
      </div>
      <div className='login--img'>
        <img src={photo} alt="Horizon dashboard image" className='login--hor' />
      </div>
    </div>
  )
}
