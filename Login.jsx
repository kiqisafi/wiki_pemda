import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src="logojogja.png" alt="SSO Pemda DIY" className="login-logo" />
          
        </div>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username" style={{ color: '#0056b3' }}>Username or Email</label><br></br><br></br>
            <input type="text" id="username" name="username" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: '#0056b3' }}>Password</label><br></br><br></br>
            <input type="password" id="password" name="password" className="form-control" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary login-btn">Login</button>
        </form>
        <div className="login-info">
         
        </div>
      </div>
    </div>
  );
};

export default Login;