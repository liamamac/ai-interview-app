// src/App.tsx
import { useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import InterviewPage from './pages/InterviewPage';
import SummaryPage from './pages/SummaryPage';

type Screen = 'landing' | 'interview' | 'summary';

function App() {
  const [screen, setScreen] = useState<Screen>('landing');

  // optional: later you can pass real data into SummaryPage
  const [summaryData, setSummaryData] = useState<any>(null);

  const startInterview = () => {
    setScreen('interview');
  };

  const endInterview = (summary: any) => {
    setSummaryData(summary);
    setScreen('summary');
  };

  const goHome = () => {
    setScreen('landing');
  };

  if (screen === 'landing') {
    return <LandingPage onStartInterview={startInterview} />;
  }

  if (screen === 'interview') {
    return <InterviewPage onEndInterview={endInterview} onCancel={goHome} />;
  }

  if (screen === 'summary') {
    return <SummaryPage summary={summaryData} onRestart={goHome} />;
  }

  return null;
}

export default App;
