import "./Home.css";

const Home = () => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
       <section className="header">
      <nav>
        <h2 className="logo">ForexPro</h2>

        <div className="nav-links">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">LEARN FOREX</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      <div className="text-box">
        <h1>Master Forex Trading the Smart Way</h1>

        <p>
          Learn price action, market structure, and risk management with a simple and clear approach.
        </p>

        <a href="#" className="hero-btn">Start Learning</a>
      </div>
    </section>
  
    </div>
  )
}

export default Home
