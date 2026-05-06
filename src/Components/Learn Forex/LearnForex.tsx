import "./LearnForex.css";

export default function LearnForex() {
  return (
    <div className="learn-container">
      <h1>Learn Forex Trading</h1>

      <div className="grid">
        <div className="card">
          <h2>Market Structure</h2>
          <p>Learn how price moves in trends, breaks, and reversals.</p>
        </div>

        <div className="card">
          <h2>Liquidity</h2>
          <p>Understand where smart money enters and exits the market.</p>
        </div>

        <div className="card">
          <h2>Momentum</h2>
          <p>Discover how to identify strong moves in the market.</p>
        </div>

        <div className="card">
          <h2>Risk Management</h2>
          <p>Learn how to protect your capital and grow consistently.</p>
        </div>
      </div>
    </div>
  );
}

