// src/pages/InterviewPage.tsx
import { useState } from 'react';
import '../App.css';

type InterviewPageProps = {
  onEndInterview: (summary: any) => void;
  onCancel: () => void;
};

type Answer = {
  question: string;
  answer: string;
};

const QUESTIONS: string[] = [
  'Tell me about yourself and how you got into software development.',
  'Describe a challenging bug or issue you faced in a recent project and how you solved it.',
  'Tell me about a time you had to work with others on a team. What was your role?',
  'Walk me through a personal project you’re proud of. What was your contribution?',
  'Why are you interested in this role, and what do you want to learn from this co-op?'
];

function InterviewPage({ onEndInterview, onCancel }: InterviewPageProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState<Answer[]>([]);

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[questionIndex];

  const handleNext = () => {
    const trimmed = currentAnswer.trim();

    // You could require an answer; for now we allow blank
    const updatedAnswers: Answer[] = [
      ...answers,
      { question: currentQuestion, answer: trimmed }
    ];

    // If this was the last question, finish the interview
    if (questionIndex === totalQuestions - 1) {
      const summary = {
        completedAt: new Date().toISOString(),
        answers: updatedAnswers
      };
      onEndInterview(summary);
      return;
    }

    // Otherwise, move to the next question
    setAnswers(updatedAnswers);
    setQuestionIndex(questionIndex + 1);
    setCurrentAnswer('');
  };

  const handleEndNow = () => {
    // Finish early with what we have so far
    const summary = {
      completedAt: new Date().toISOString(),
      answers: [
        ...answers,
        { question: currentQuestion, answer: currentAnswer.trim() }
      ]
    };
    onEndInterview(summary);
  };

  const handleCancel = () => {
    // Optional: ask for confirmation later
    onCancel();
  };

  const progressLabel = `Question ${questionIndex + 1} of ${totalQuestions}`;
  const showFinishLabel = questionIndex === totalQuestions - 1;

  return (
    <div className="app">
      <header className="nav">
        <div className="nav-left">
          <div className="logo-circle">AI</div>
          <span className="logo-text">Interview Coach</span>
        </div>
        <div className="nav-right">
          <button className="nav-link ghost" onClick={handleCancel}>
            Exit
          </button>
        </div>
      </header>

      <main className="interview-layout">
        {/* LEFT: AI interviewer / question panel */}
        <section className="interview-panel interviewer-panel">
          <div className="panel-header">
            <div className="avatar-circle" />
            <div>
              <p className="panel-title">AI Interviewer</p>
              <p className="panel-subtitle">{progressLabel}</p>
            </div>
          </div>

          <div className="interviewer-question-card">
            <p className="interviewer-label">Current question</p>
            <p className="interviewer-question-text">{currentQuestion}</p>
          </div>

          <div className="interviewer-hint">
            <p>
              Tip: for behavioural questions, try using the{' '}
              <strong>STAR</strong> format:
            </p>
            <ul>
              <li>Situation – set the context</li>
              <li>Task – what you needed to do</li>
              <li>Action – what you actually did</li>
              <li>Result – what happened in the end</li>
            </ul>
          </div>
        </section>

        {/* RIGHT: answer panel */}
        <section className="interview-panel answer-panel">
          <h1 className="answer-title">Your answer</h1>
          <p className="answer-subtitle">
            Imagine you&apos;re speaking to a real interviewer. You can type your answer here
            for now — later we&apos;ll add voice.
          </p>

          <textarea
            className="answer-input"
            rows={10}
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder="Start typing your answer here..."
          />

          <div className="answer-footer">
            <span className="answer-helper">
              You don&apos;t have to write a perfect answer — focus on being clear and specific.
            </span>

            <div className="answer-buttons">
              <button className="btn secondary-btn" onClick={handleEndNow}>
                End interview now
              </button>
              <button className="btn primary-btn" onClick={handleNext}>
                {showFinishLabel ? 'Finish interview' : 'Next question'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default InterviewPage;
