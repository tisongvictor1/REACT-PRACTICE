import "./AboutRoute.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Us</h1>
        <p>
          We are a premium forex education platform dedicated to helping traders
          understand the financial markets with clarity, structure, and confidence.
        </p>

        <p>
          Our goal is to simplify trading concepts like market structure, liquidity,
          momentum, and risk management so anyone can learn and grow consistently.
        </p>

        <div className="stats">
          <div>
            <h2>10K+</h2>
            <span>Students</span>
          </div>
          <div>
            <h2>5+</h2>
            <span>Years Experience</span>
          </div>
          <div>
            <h2>90%</h2>
            <span>Success Focus</span>
          </div>
        </div>
      </div>
    </div>
  );
}