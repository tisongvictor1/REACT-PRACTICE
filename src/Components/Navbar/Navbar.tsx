
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
  

  <nav className="navbar">

    {/* <!-- SEGMENT 1: Logo --> */}
    <div className="segment segment-logo">
      <div className="logo-box">
        <span>nx</span>
      </div>
      <span className="logo-name">nexus</span>
    </div>

    {/* <!-- SEGMENT 2: Nav Links --> */}
    <div className="segment links">
      <button className="nav-link active">Dashboard</button>
      <button className="nav-link">
        Projects <span className="badge">4</span>
      </button>
      <button className="nav-link">Analytics</button>
      <button className="nav-link">Settings</button>
    </div>

    {/* <!-- SEGMENT 3: Actions --> */}
    <div className="segment">
      <button className="btn-icon" title="Search">
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M10.5 7a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-.447 3.346a5 5 0 111.06-1.06l2.8 2.8a.75.75 0 01-1.06 1.06l-2.8-2.8z"/>
        </svg>
      </button>
      <button className="btn-icon" title="Notifications">
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1a5 5 0 00-5 5v2.31L1.293 9.707A1 1 0 002 11.5h3.27A2.755 2.755 0 008 13.5a2.755 2.755 0 002.73-2H14a1 1 0 00.707-1.707L13 8.31V6a5 5 0 00-5-5z"/>
        </svg>
      </button>
      <button className="btn-primary">+ New project</button>
      <div className="avatar">JD</div>
    </div>

  </nav>


    </div>
  )
}

export default Navbar
