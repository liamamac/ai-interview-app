// src/pages/LandingPage.tsx
import '../App.css';

type LandingPageProps = {
  onStartInterview: () => void;
};

function LandingPage({ onStartInterview }: LandingPageProps) {
  return (
     <div className="app">
      <header className="nav">
        <div className="nav-left">
          <div className="logo-circle">AI</div>
          <span className="logo-text">Interview Coach</span>
        </div>
        <div className="nav-right">
          <button className="nav-link ghost">Log in</button>
          <button className="nav-link primary">Get Started</button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Practice interviews with an <span className="accent">AI interviewer</span>.
            </h1>
            <p className="hero-subtitle">
              Simulate real interviews, get structured feedback on your answers, and build
              confidence before you meet a real recruiter.
            </p>

            <div className="hero-actions">
                <button
                    className="btn primary-btn"
                    onClick={onStartInterview}
                >
                    Start a practice interview
                </button>
                <button className="btn secondary-btn">Watch demo</button>
            </div>

            <p className="hero-note">
              No credit card • Just your browser • Designed for software engineering roles
            </p>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <div className="panel-header">
                <div className="avatar-circle" />
                <div>
                  <p className="panel-title">AI Interviewer</p>
                  <p className="panel-subtitle">“Tell me about a project you’re proud of.”</p>
                </div>
              </div>

              <div className="panel-body">
                <div className="chat-bubble interviewer">
                  <p>
                    Walk me through a recent project where you had to solve a difficult technical
                    problem.
                  </p>
                </div>
                <div className="chat-bubble candidate">
                  <p>
                    In my last project, I built a full-stack app to predict traffic volume in
                    Toronto using Python and React…
                  </p>
                </div>
              </div>

              <div className="panel-footer">
                <div className="score-card">
                  <span className="score-label">Communication</span>
                  <span className="score-value good">8.6</span>
                </div>
                <div className="score-card">
                  <span className="score-label">Technical depth</span>
                  <span className="score-value medium">7.4</span>
                </div>
                <div className="score-card">
                  <span className="score-label">Confidence</span>
                  <span className="score-value low">6.2</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST TAG */}
        <section className="trust-strip">
          <p>Built for students, new grads, and junior developers preparing for technical interviews.</p>
        </section>

        {/* FEATURES */}
        <section className="section">
          <h2>What you get</h2>
          <p className="section-subtitle">
            Not just random questions — a full interview experience with coaching built in.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h3>Realistic AI interviewer</h3>
              <p>
                Answer role-specific questions from an AI that behaves like a real interviewer:
                follow-ups, clarifications, and “one more question” included.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Objective feedback</h3>
              <p>
                Get scores and comments on communication, technical depth, and structure (STAR),
                instead of vague “you did fine” feedback.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔁</div>
              <h3>Practice on repeat</h3>
              <p>
                Re-run the same question, compare answers over time, and actually see how you’re
                improving before your next real interview.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <h2>How it works</h2>
          <p className="section-subtitle">From “I&apos;m nervous” to “I&apos;ve got this” in three steps.</p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose your role</h3>
              <p>
                Pick from templates like “Junior Web Developer” or paste a real job posting you&apos;re
                applying for.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Run a mock interview</h3>
              <p>
                Answer questions via text or voice in a browser-based interview that feels like a
                real video call.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Review your report</h3>
              <p>
                See what you did well, where you can improve, and what to change before the next
                round.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-card">
            <div>
              <h2>Ready to try your first AI-powered mock interview?</h2>
              <p>
                Spin up a practice session in under a minute and get feedback that&apos;s more honest
                than your friends — and less scary than a real recruiter.
              </p>
            </div>
            <button className="btn primary-btn large">Start a practice interview</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} AI Interview Coach</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
