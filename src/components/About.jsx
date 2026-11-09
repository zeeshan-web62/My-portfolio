export default function About({ paragraphs }) {
  return (
    <section id="about" className="wrap about-section">
      <div className="about-heading">
        <p className="about-kicker">Introduction</p>
        <h2 className="title">About me</h2>
      </div>
      <div className="glass pad about-copy">
        {paragraphs.map((paragraph) => (
          <p className="about-paragraph" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
