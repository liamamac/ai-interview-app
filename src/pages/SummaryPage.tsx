// src/pages/SummaryPage.tsx
import '../App.css';
import type { InterviewSummary } from '../App';

type SummaryPageProps = {
  summary: InterviewSummary | null;
  onRestart: () => void;
};

function SummaryPage({ summary, onRestart }: SummaryPageProps) {
  if (!summary) {
    // Fallback if someone somehow lands here without data
    return (
      <div className="app">
        <header className="nav">
          <div className="nav-left">
            <div className="logo-circle">AI</div>
            <span className="logo-text">Interview Coach</span>
          </div>
        </header>

        <main className="section">
          <h1>Interview Summary</h1>
          <p>We couldn&apos;t find any interview data. Try running a new practice session.</p>
          <button className="btn primary-btn" style={{ marginTop: '1rem' }} onClick={onRestart}>
            Back to home
          </button>
        </main>
      </div>
    );
  }

  const { completedAt, answers } = summary;
  const date = new Date(completedAt);

  return (
    <div className="app">
      <header className="nav">
        <div className="nav-left">
          <div className="logo-circle">AI</div>
          <span className="logo-text">Interview Coach</span>
        </div>
        <div className="nav-right">
          <button className="nav-link ghost" onClick={onRestart}>
            Back to home
          </button>
        </div>
      </header>

      <main className="section">
        <h1>Interview summary</h1>
        <p className="section-subtitle">
          Here&apos;s a recap of the questions you answered and what you said. Later we&apos;ll add AI
          feedback and scores on top of this.
        </p>

        <div className="summary-meta">
          <div className="summary-meta-item">
            <span className="summary-label">Completed</span>
            <span className="summary-value">
              {date.toLocaleDateString()} at {date.toLocaleTimeString()}
            </span>
          </div>
          <div className="summary-meta-item">
            <span className="summary-label">Questions answered</span>
            <span className="summary-value">{answers.length}</span>
          </div>
        </div>

        <div className="summary-grid">
          {answers.map((item, index) => (
            <div key={index} className="summary-card">
              <div className="summary-question-header">
                <span className="summary-question-number">Q{index + 1}</span>
                <span className="summary-question-label">Question</span>
              </div>
              <p className="summary-question-text">{item.question}</p>

              <div className="summary-answer-block">
                <span className="summary-answer-label">Your answer</span>
                {item.answer ? (
                  <p className="summary-answer-text">{item.answer}</p>
                ) : (
                  <p className="summary-answer-text muted">
                    You didn&apos;t provide an answer for this question.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="summary-footer">
          <button className="btn secondary-btn" onClick={onRestart}>
            Back to landing
          </button>
          <button
            className="btn primary-btn"
            onClick={onRestart}
          >
            Start another practice interview
          </button>
        </div>
      </main>
    </div>
  );
}

export default SummaryPage;
