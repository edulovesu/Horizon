import photo from '../assets/big--image.png'
import horizon from '../assets/Horizon-logo.png'
export default function Signup(){
    return(
        <>
        <div className='signup'>
            <div className="signup--container">
                <div className="signup--header">
                    <img src={horizon} alt="Horizon logo" />
                    <h1>Horizon</h1>
                </div>
                <h2 className='title'>Sign Up</h2>
                <p>Please enter your details</p>
                <div className="signup--content">
                    <div className='signup--name'>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder='ex: John' autoComplete='FirstName' className='input' />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder='ex: Doe' autoComplete='LastName' className='input'/>
                        </div>
                    </div>
                    
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder='Enter your specific address' autoComplete='Street-address' className='input--add' />
                    
                    <div className='signup--spc'>
                        <div>
                            <label htmlFor="state">State</label>
                            <input type="text" placeholder='ex: NY' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="zip">Postal Code</label>
                            <input type="text" inputMode='numeric' pattern='[0-9]*' placeholder='ex: 11101' className='input'/>
                        </div>
                    </div>
                    <div className='signup--dob'>
                        <div>
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" placeholder='yyyy-mm-dd' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="ssn">SSN</label>
                            <input type="password" inputMode='numeric' placeholder='ex: 1234' className='input'/>
                        </div>
                    </div>
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder='Enter your email' className='input--add'/>
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder='Enter your password' className='input--add'/>
                    <div className='signup--btn'>Sign up</div>
                    <p className='signup--login'>Don't have an account? <span className='blue'><a href="./Login.jsx">Login</a></span></p>
                </div>
            </div>
            <div className='signup--img'>
                <img src={photo} alt="Horizon image"  className='signup--hor'/>
            </div>
        </div>
        </>
    )
}