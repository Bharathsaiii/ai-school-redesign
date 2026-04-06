import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-flex">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <span className="badge">India’s First K-12 AI Ecosystem</span>

          <h1>
            Help your school <span className="highlight">lead the AI era</span><br />
            not just survive it.
          </h1>

          <p>
            A complete AI ecosystem built for schools — personalized learning for students,
            powerful tools for teachers, and infrastructure to run it all.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Schedule a Call →</button>
            <button className="secondary-btn">See Products</button>
          </div>

        </div>

        {/* RIGHT SIDE (🔥 YOUR CREATIVE PANEL) */}
        <div className="ai-panel">

          <div className="ai-header">🤖 AI Insight</div>

          <ul>
            <li>AI ecosystem for schools</li>
            <li>Built for students & teachers</li>
            <li>Trusted by 10,000+ users</li>
          </ul>

          <button className="panel-btn">Quick Preview →</button>

        </div>

      </div>
    </section>
  );
}

export default Hero;