/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuizQuestion } from '../types';
import MultipleChoiceView from './MultipleChoiceView';
import MatchingCardsView from './MatchingCardsView';
import ConnectingLinesView from './ConnectingLinesView';

interface QuizDisplayProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  onAnswerSubmitted: (isCorrect: boolean) => void;
  onQuitQuiz: () => void;
}

export default function QuizDisplay({
  question,
  currentIndex,
  totalQuestions,
  onAnswerSubmitted,
  onQuitQuiz
}: QuizDisplayProps) {
  // Compute percentage progress safely
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div 
      id="quiz-display-layer"
      className="w-full max-w-2xl mx-auto py-4 px-4 flex flex-col gap-5 animate-scale-up z-20"
    >
      {/* Top Escape Hatch Bar */}
      <div className="flex justify-between items-center w-full bg-linear-to-r from-red-50 to-rose-100/80 backdrop-blur-xs rounded-2xl py-3 px-4 border-2 border-rose-300 shadow-sm">
        <span className="text-sm font-bold text-rose-800 select-none">
          ⚠️ 혹시 문제가 안 바뀌거나 오류가 있나요?
        </span>
        <button
          type="button"
          onClick={onQuitQuiz}
          className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-black rounded-xl border-2 border-[#1e1b4b] shadow-[0_3px_0_#1e1b4b] active:translate-y-0.5 active:shadow-[0_1.5px_0_#1e1b4b] cursor-pointer text-xs flex items-center gap-1 transition-all"
        >
          🏠 처음으로
        </button>
      </div>

      {/* Quiz Progress header area */}
      <div 
        id="quiz-display-header"
        className="bg-indigo-900/70 backdrop-blur-md rounded-2xl p-5 border-4 border-white/20 shadow-[0_6px_0_rgba(0,0,0,0.15)] text-white flex flex-col gap-3"
      >
        <div className="flex items-center justify-between font-black text-lg">
          {/* Active category Badge */}
          <span 
            id="active-category-badge"
            className="bg-[#facc15] hover:bg-yellow-500 text-slate-900 text-sm md:text-base font-black px-4 py-1.5 rounded-full shadow-[0_4px_0_#d97706] border-2 border-slate-950 select-none"
          >
            📂 카테고리: {question.category}
          </span>

          {/* Sizing Indicator */}
          <span id="question-steps" className="text-yellow-300 select-none font-black text-xl bold-accent-shadow">
            진행: {currentIndex + 1} / {totalQuestions}
          </span>
        </div>
      </div>

      {/* Main card covering the Quiz Question layout */}
      <div 
        id="quiz-main-card"
        className="w-full bg-white rounded-3xl p-6 md:p-8 border-6 border-[#1e1b4b] shadow-[0_12px_0_rgba(30,27,75,0.2)] flex flex-col items-center gap-2 relative overflow-hidden"
      >
        {/* Terminate button on top-right */}
        <button
          id="quit-quiz-header-btn"
          type="button"
          onClick={onQuitQuiz}
          className="absolute top-4 right-4 text-slate-400 hover:text-rose-500 font-extrabold text-xl transition-colors cursor-pointer select-none bg-slate-100 hover:bg-rose-50 p-2.5 rounded-full border-2 border-slate-200 hover:border-rose-200 shadow-xs"
          title="처음으로 돌아가기"
        >
          ✕
        </button>

        {/* Dynamic conditional render by type */}
        {question.type === 'multiple' && (
          <MultipleChoiceView
            key={`multiple-choice-${currentIndex}`}
            quiz={question}
            onNext={onAnswerSubmitted}
          />
        )}

        {question.type === 'matching' && (
          <MatchingCardsView
            key={`matching-cards-${currentIndex}`}
            quiz={question}
            onNext={onAnswerSubmitted}
          />
        )}

        {question.type === 'connecting' && (
          <ConnectingLinesView
            key={`connecting-lines-${currentIndex}`}
            quiz={question}
            onNext={onAnswerSubmitted}
          />
        )}
      </div>
    </div>
  );
}
