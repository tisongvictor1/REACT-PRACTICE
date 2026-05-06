import "./Login.css"



const Login = () => {
  return (
    <div>
      <div className="glass-container">
      <div className="glass-card">
        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Sign in to continue to your dashboard</p>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="primary-btn">Sign In</button>

        <div className="divider">or continue with</div>

        <div className="socials">
          <button className="google">Google</button>
          <button className="linkedin">LinkedIn</button>
          <button className="twitter">Twitter</button>
        </div>

        <div className="bottom-text">
          Forgot password? <span>Reset</span>
        </div>
      </div>
    </div>
 
    </div>
  )
}

export default Login
