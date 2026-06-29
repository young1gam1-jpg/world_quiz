/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { QuizQuestion } from './types';
import { generateQuizSession } from './data';
import MainMenu from './components/MainMenu';
import QuizDisplay from './components/QuizDisplay';
import ScoreResults from './components/ScoreResults';

type ScreenState = 'menu' | 'quiz' | 'result';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('menu');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);

  // Initiates a new quiz session with custom selected categories
  const handleStartQuiz = (categoryIds: string[]) => {
    const sessionQuestions = generateQuizSession(categoryIds);
    setSelectedCategories(categoryIds);
    setQuestions(sessionQuestions);
    setScore(0);
    setCurrentQuestionIdx(0);
    setScreen('quiz');
  };

  // Handles moving to the next question or completing the quiz session
  const handleAnswerSubmitted = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setScreen('result');
    }
  };

  // Restarts with same category selections but builds fresh new questions
  const handleRestartSame = () => {
    const sessionQuestions = generateQuizSession(selectedCategories);
    setQuestions(sessionQuestions);
    setScore(0);
    setCurrentQuestionIdx(0);
    setScreen('quiz');
  };

  // Navigates back to the main menu screen
  const handleGoHome = () => {
    setSelectedCategories([]);
    setQuestions([]);
    setScore(0);
    setCurrentQuestionIdx(0);
    setScreen('menu');
  };

  return (
    <main 
      id="root-layout-wrapper" 
      className="min-h-screen py-10 px-4 md:py-16 flex items-center justify-center font-sans tracking-normal selection:bg-amber-300 selection:text-slate-900"
    >
      <div id="app-canvas" className="w-full max-w-3xl flex flex-col justify-center">
        {screen === 'menu' && (
          <MainMenu onStartQuiz={handleStartQuiz} />
        )}

        {screen === 'quiz' && questions.length > 0 && (
          <QuizDisplay
            question={questions[currentQuestionIdx]}
            currentIndex={currentQuestionIdx}
            totalQuestions={questions.length}
            onAnswerSubmitted={handleAnswerSubmitted}
            onQuitQuiz={handleGoHome}
          />
        )}

        {screen === 'result' && (
          <ScoreResults
            score={score}
            onRestartSame={handleRestartSame}
            onGoHome={handleGoHome}
          />
        )}
      </div>
    </main>
  );
}
