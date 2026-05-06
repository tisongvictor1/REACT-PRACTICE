
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Students Say</h2>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <p>
            “Before joining, forex was confusing. Now I understand market structure and I’m finally profitable.”
          </p>
          <h4>- David A.</h4>
        </div>

        <div className="testimonial-card">
          <p>
            “The lessons are simple and straight to the point. Best forex mentorship I’ve joined so far.”
          </p>
          <h4>- Sarah K.</h4>
        </div>

        <div className="testimonial-card">
          <p>
            “I went from zero knowledge to confidently analyzing charts in just a few weeks.”
          </p>
          <h4>- Michael T.</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;