// src/pages/SummaryPage.tsx
import '../App.css';

type SummaryPageProps = {
  summary: any;
  onRestart: () => void;
};

function SummaryPage({ summary, onRestart }: SummaryPageProps) {
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
        <p>After an interview, you’ll see feedback and scores here.</p>

        <pre style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
          {JSON.stringify(summary, null, 2)}
        </pre>

        <button
          className="btn primary-btn"
          style={{ marginTop: '1rem' }}
          onClick={onRestart}
        >
          Back to home
        </button>
      </main>
    </div>
  );
}

export default SummaryPage;
