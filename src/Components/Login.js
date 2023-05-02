import React from 'react'
import "../Style/login.css"
const Login = () => {
  return (
    <>
      <div className="form-container">
  <form id="login-form">
    <h2>Login</h2>
    <div className="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" required />
    </div>
    <div className="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
    </div>
    <button type="submit">Login</button>
  </form>

  <form id="register-form">
    <h2>Register</h2>
    <div className="form-group">
      <label for="fullname">Full Name</label>
      <input type="text" id="fullname" name="fullname" required />
    </div>
    <div className="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div className="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
    </div>
    <button type="submit">Register</button>
  </form>
</div>

    </>
  )
}

export default Login
