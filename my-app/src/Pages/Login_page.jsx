import React from 'react'

function Login_page() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login_page
