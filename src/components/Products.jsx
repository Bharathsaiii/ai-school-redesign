import "./Products.css";

function Products() {
  return (
    <section className="products">
        <div className="container"></div>
        <h2>Our AI Solutions for Schools</h2>

      <div className="product-cards">
        <div className="card">
          <h3>AI for Students</h3>
          <p>Personalized AI learning companion for students.</p>
        </div>

        <div className="card">
          <h3>AI for Teachers</h3>
          <p>AI-powered assistant to enhance teaching experience.</p>
        </div>

        <div className="card">
          <h3>AI Tools</h3>
          <p>Ready-to-use AI tools for everyday school needs.</p>
        </div>

        <div className="card">
          <h3>Innovation Lab</h3>
          <p>Hands-on AI projects and experimentation platform.</p>
        </div>

        <div className="card">
          <h3>Infrastructure</h3>
          <p>AI-powered systems to manage school operations.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;