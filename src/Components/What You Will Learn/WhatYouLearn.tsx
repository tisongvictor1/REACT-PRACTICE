import "./WhatYouLearn.css";

const WhatYouLearn = () => {
  return (
    <section className="learn">
      <h1>What You’ll Learn</h1>
      <p className="learn-intro">
        Learn the core foundations of forex trading with a simple and practical approach.
      </p>

      <div className="row">
        <div className="learn-col">
          <h3>Market Structure</h3>
          <p>
            Understand how the market moves including trends, breakouts, and reversals.
          </p>
        </div>

        <div className="learn-col">
          <h3>Price Action</h3>
          <p>
            Learn how to read candlesticks and identify high-probability trade setups.
          </p>
        </div>

        <div className="learn-col">
          <h3>Risk Management</h3>
          <p>
            Protect your capital and manage risk like a professional trader.
          </p>
        </div>

        <div className="learn-col">
          <h3>Trading Psychology</h3>
          <p>
            Master your emotions and build discipline for consistent results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;