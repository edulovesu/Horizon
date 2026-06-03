import photo from '../assets/big--image.png'
import horizon from '../assets/Horizon-logo.png'

export default function Login({ onLogin, onSignup }) {
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
          <input type="email" required placeholder="Enter your email" className='input1' />
          <label htmlFor="Password">Password</label>
          <input type="password" required placeholder="Enter your password" className='input2' />
          <button className='login--btn' onClick={onLogin}>Login</button>
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
