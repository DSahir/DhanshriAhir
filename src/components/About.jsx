import './Section.css';

function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-avatar">
            <div className="avatar-placeholder">DA</div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm <strong>Dhanshri Ahir</strong>, a passionate developer
              who loves building web applications and solving problems through
              code.
            </p>
            <p>
              I enjoy working with modern technologies and am always eager to
              learn new skills. My goal is to create impactful software that
              makes a difference.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">&#128187;</span>
                <span>Web Development</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">&#128640;</span>
                <span>Problem Solving</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">&#128218;</span>
                <span>Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
