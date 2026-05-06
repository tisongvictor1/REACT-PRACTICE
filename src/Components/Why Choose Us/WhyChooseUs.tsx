import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why">
      <h1>Why Choose Us</h1>
      <p className="why-intro">
        We focus on clarity, discipline, and real trading knowledge not hype.
      </p>

      <div className="row">
        <div className="why-col">
          <h3>Simple Teaching</h3>
          <p>
            We break down complex concepts into simple steps anyone can understand.
          </p>
        </div>

        <div className="why-col">
          <h3>Real Strategies</h3>
          <p>
            Learn proven trading strategies based on real market behavior.
          </p>
        </div>

        <div className="why-col">
          <h3>Risk First Approach</h3>
          <p>
            We teach you how to protect your capital before chasing profits.
          </p>
        </div>

        <div className="why-col">
          <h3>Consistent Growth</h3>
          <p>
            Focus on long-term improvement, not quick wins or shortcuts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;