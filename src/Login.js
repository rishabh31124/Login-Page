import React from 'react'
//jsx
const Login = () => {
    return (<div className="App">
    <form className="Login_form">
      <div className= "heading">
        <h1>
          Login
        </h1>
      </div>
    
      <div className='input'>
        <input 
        type='text'
        id='Email-Id'
        name='email id'
        placeholder='Email-id*'
        />
      </div>
      <div className='input'>
        <input 
        type='password'
        id='Password'
        name='password'
        placeholder='Password*'
        />
      </div>
      <div>
        <button className='check' type='button' />
        <p className='remember'>Remember Me</p>
        
      </div>
      <div>
        <button className='submit' type='submit'>LOGIN</button>
      </div>
      <div>
        <span><p className='forgot-pass'>Forgot your password?<a href= '#'>click here</a></p></span>
      </div>
      </form>
  </div>)
}

export default Login