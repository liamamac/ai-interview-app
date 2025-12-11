// src/pages/InterviewPage.tsx
import '../App.css';

type InterviewPageProps = {
  onEndInterview: (summary: any) => void;
  onCancel: () => void;
};

function InterviewPage({ onEndInterview, onCancel }: InterviewPageProps) {
  const handleFinish = () => {
    // later you'll pass real summary data instead of null
    onEndInterview(null);
  };

  return (
    <div className="app">
      <header className="nav">
        <div className="nav-left">
          <div className="logo-circle">AI</div>
          <span className="logo-text">Interview Coach</span>
        </div>
      </header>

      <main className="section">
        <h1>Interview Session</h1>
        <p>This is where the mock interview UI will go.</p>

        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn secondary-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn primary-btn" onClick={handleFinish}>
            Finish Interview
          </button>
        </div>
      </main>
    </div>
  );
}

export default InterviewPage;
