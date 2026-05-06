import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-row">
        
        <div className="about-col">
          <h1>About Us</h1>
          <p>
            We are dedicated to teaching forex trading in a simple and practical way.
            Our goal is to help beginners understand the market, develop confidence,
            and trade with a clear strategy—not guesswork.
          </p>
          <p>
            We focus on real knowledge: market structure, price action, and proper
            risk management so you can grow steadily as a trader.
          </p>
        </div>

        <div className="about-col">
          <img 
            src="https://images.unsplash.com/photo-1559526324-593bc073d938" 
            alt="Trading setup" 
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;