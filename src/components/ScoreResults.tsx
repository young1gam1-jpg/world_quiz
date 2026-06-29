/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface ScoreResultsProps {
  score: number;
  onRestartSame: () => void;
  onGoHome: () => void;
}

export default function ScoreResults({ score, onRestartSame, onGoHome }: ScoreResultsProps) {
  // Compute praise statement based on score count
  let titleEmoji = '🎉';
  let message = '';
  let colorClass = 'text-amber-500';

  if (score === 5) {
    titleEmoji = '🏆';
    message = '완벽해요! 세계 문화 박사! 🏆';
    colorClass = 'text-amber-500';
  } else if (score === 4) {
    titleEmoji = '🌟';
    message = '훌륭해요! 거의 다 맞혔어요! 🌟';
    colorClass = 'text-yellow-500';
  } else if (score === 3) {
    titleEmoji = '😊';
    message = '잘했어요! 조금만 더 공부해봐요! 😊';
    colorClass = 'text-lime-600';
  } else {
    titleEmoji = '💪';
    message = '다시 도전해봐요! 할 수 있어요! 💪';
    colorClass = 'text-rose-500';
  }

  return (
    <div 
      id="results-container"
      className="flex flex-col items-center gap-7 w-full max-w-xl mx-auto py-6 px-4 text-center animate-scale-up"
    >
      {/* Celebration Icon */}
      <span className="text-8xl block animate-float select-none">
        {titleEmoji}
      </span>

      {/* Main score box card */}
      <div 
        id="score-card"
        className="w-full bg-white rounded-3xl p-8 border-6 border-[#1e1b4b] shadow-[0_12px_0_rgba(30,27,75,0.2)] flex flex-col items-center gap-5"
      >
        <span className="text-xl md:text-2xl font-black text-slate-500 uppercase tracking-widest">
          최종 탐험 결과
        </span>
        
        {/* Score count display */}
        <h2 id="score-text" className="text-6xl md:text-7xl font-sans font-black text-slate-800 flex items-baseline gap-1">
          <span className="text-indigo-600 font-black">{score}</span>
          <span className="text-slate-400 font-bold text-3xl">/ 5 개</span>
        </h2>

        {/* 5-Star visualizer rating */}
        <div id="stars-row" className="flex justify-center gap-2 my-2 select-none">
          {[1, 2, 3, 4, 5].map((idx) => {
            const isFilled = idx <= score;
            return (
              <span 
                key={`star-${idx}`}
                id={`rating-star-${idx}`}
                className={`text-5xl md:text-6xl transition-all duration-300 ${
                  isFilled 
                    ? 'text-amber-400 drop-shadow-md scale-110' 
                    : 'text-slate-200 scale-90'
                }`}
              >
                ⭐
              </span>
            );
          })}
        </div>

        {/* Dynamic educational praise */}
        <h3 
          id="score-praise-msg"
          className={`text-2xl md:text-3xl font-black ${colorClass} tracking-tight leading-snug px-2 mt-2`}
        >
          {message}
        </h3>
      </div>

      {/* Control Action Buttons Bar */}
      <div id="results-actions" className="flex flex-col sm:flex-row gap-5 w-full mt-4">
        {/* Retrying Option */}
        <button
          id="btn-retry-same"
          type="button"
          onClick={onRestartSame}
          className="flex-1 py-5.5 bg-[#facc15] text-[#1e1b4b] font-black text-2xl md:text-3xl rounded-full border-4 border-[#1e1b4b] shadow-[0_8px_0_#d97706] active:translate-y-1 active:shadow-[0_4px_0_#d97706] hover:scale-[1.02] transition-all duration-100 cursor-pointer text-center flex items-center justify-center gap-2"
        >
          <span>🔄 다시 풀기</span>
        </button>

        {/* Going Home Option */}
        <button
          id="btn-go-home"
          type="button"
          onClick={onGoHome}
          className="flex-1 py-5.5 bg-white text-[#1e1b4b] font-black text-2xl md:text-3xl rounded-full border-4 border-[#1e1b4b] shadow-[0_8px_0_#1e1b4b] active:translate-y-1 active:shadow-[0_4px_0_#1e1b4b] hover:scale-[1.02] transition-all duration-100 cursor-pointer text-center flex items-center justify-center gap-2"
        >
          <span>🏠 처음으로</span>
        </button>
      </div>
    </div>
  );
}
