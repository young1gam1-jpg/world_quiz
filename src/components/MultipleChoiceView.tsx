/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MultipleChoiceQuiz } from '../types';
import ImageLoader from './ImageLoader';

// Mapping country name to ISO code and emoji for high-quality images in options
const countryMetadata: Record<string, { iso: string; emoji: string }> = {
  '한국': { iso: 'kr', emoji: '🇰🇷' },
  '일본': { iso: 'jp', emoji: '🇯🇵' },
  '미국': { iso: 'us', emoji: '🇺🇸' },
  '프랑스': { iso: 'fr', emoji: '🇫🇷' },
  '영국': { iso: 'gb', emoji: '🇬🇧' },
  '이탈리아': { iso: 'it', emoji: '🇮🇹' },
  '독일': { iso: 'de', emoji: '🇩🇪' },
  '스페인': { iso: 'es', emoji: '🇪🇸' },
  '브라질': { iso: 'br', emoji: '🇧🇷' },
  '캐나다': { iso: 'ca', emoji: '🇨🇦' },
  '호주': { iso: 'au', emoji: '🇦🇺' },
  '중국': { iso: 'cn', emoji: '🇨🇳' },
  '인도': { iso: 'in', emoji: '🇮🇳' },
  '튀르키예': { iso: 'tr', emoji: '🇹🇷' },
  '스위스': { iso: 'ch', emoji: '🇨🇭' },
  '그리스': { iso: 'gr', emoji: '🇬🇷' },
  '남아프리카공화국': { iso: 'za', emoji: '🇿🇦' },
  '멕시코': { iso: 'mx', emoji: '🇲🇽' },
  '아르헨티나': { iso: 'ar', emoji: '🇦🇷' },
  '사우디아라비아': { iso: 'sa', emoji: '🇸🇦' },
  '러시아': { iso: 'ru', emoji: '🇷🇺' },
  '베트남': { iso: 'vn', emoji: '🇻🇳' },
  '태국': { iso: 'th', emoji: '🇹🇭' },
  '모로코': { iso: 'ma', emoji: '🇲🇦' },
  '인도네시아': { iso: 'id', emoji: '🇮🇩' },
  '페루': { iso: 'pe', emoji: '🇵🇪' },
  '몽골': { iso: 'mn', emoji: '🇲🇳' },
  '아일랜드': { iso: 'ie', emoji: '🇮🇪' },
  '네덜란드': { iso: 'nl', emoji: '🇳🇱' },
  '포르투갈': { iso: 'pt', emoji: '🇵🇹' },
  '폴란드': { iso: 'pl', emoji: '🇵🇱' },
  '스웨덴': { iso: 'se', emoji: '🇸🇪' },
  '벨기에': { iso: 'be', emoji: '🇧🇪' },
  '가나': { iso: 'gh', emoji: '🇬🇭' },
  '이집트': { iso: 'eg', emoji: '🇪🇬' },
  '캄보디아': { iso: 'kh', emoji: '🇰🇭' },
  '이란': { iso: 'ir', emoji: '🇮🇷' },
  '아이슬란드': { iso: 'is', emoji: '🇮🇸' },
  '말레이시아': { iso: 'my', emoji: '🇲🇾' },
  '동남아시아': { iso: 'th', emoji: '🛖' },
  '북아프리카': { iso: 'eg', emoji: '🏜️' },
  '서아프리카': { iso: 'gh', emoji: '🛖' },
  '미국 남서부': { iso: 'us', emoji: '🏜️' },
  '북유럽': { iso: 'no', emoji: '🌲' },
  '남태평양': { iso: 'fj', emoji: '🌴' },
  '스코틀랜드': { iso: 'gb', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' }
};

function getCountryMedia(countryName: string) {
  return countryMetadata[countryName] || { iso: '', emoji: '🌍' };
}

// Child component to show flag image or falling back gracefully to emoji
function OptionFlag({ country, size = 'normal' }: { country: string; size?: 'normal' | 'large' }) {
  const cleanCountry = country.replace(/[A-Za-z]/g, '').trim();
  const media = getCountryMedia(cleanCountry);
  const [error, setError] = useState(false);

  const flagSrc = media.iso ? `https://flagcdn.com/w160/${media.iso.toLowerCase()}.png` : null;

  return (
    <div 
      id={`flag-option-container-${cleanCountry}`}
      className={`${
        size === 'large' ? 'w-28 h-18 rounded-lg' : 'w-14 h-9 rounded-md'
      } bg-slate-100 border-2 border-[#1e1b4b] overflow-hidden flex items-center justify-center shadow-inner shrink-0 select-none`}
    >
      {!error && flagSrc ? (
        <img
          id={`flag-option-img-${cleanCountry}`}
          src={flagSrc}
          alt={cleanCountry}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span id={`flag-option-emoji-${cleanCountry}`} className={size === 'large' ? 'text-4xl' : 'text-2xl'}>
          {media.emoji}
        </span>
      )}
    </div>
  );
}

interface MultipleChoiceViewProps {
  quiz: MultipleChoiceQuiz;
  onNext: (isCorrect: boolean) => void;
  key?: string | number;
}

export default function MultipleChoiceView({ quiz, onNext }: MultipleChoiceViewProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isClickLocked, setIsClickLocked] = useState(true);

  useEffect(() => {
    // Lock clicks/touches for a brief duration upon changing quiz questions
    // This absolutely prevents double-clicks from the previous screen's "next" button 
    // from triggering choices on the newly mounted page
    setIsClickLocked(true);
    const timer = setTimeout(() => {
      setIsClickLocked(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [quiz]);

  const handleSelect = (option: string) => {
    if (isClickLocked || isAnswered) return;
    
    setSelected(option);
    setIsAnswered(true);
  };

  const isSelectedCorrect = selected === quiz.answer;

  return (
    <div 
      id="mcq-container" 
      className="flex flex-col gap-6 w-full animate-fade-in"
    >
      {/* Visual Header / Card representation */}
      {quiz.category !== '국기' && (
        <div id="mcq-visual-area" className="flex flex-col items-center justify-center p-2 animate-scale-up">
          <ImageLoader iso={quiz.iso} emoji={quiz.emoji} alt={quiz.answer} />
        </div>
      )}

      {/* Question text */}
      <h3 
        id="mcq-question"
        className="text-2xl md:text-3xl font-black text-center text-slate-800 leading-snug tracking-tight px-2"
      >
        {quiz.question}
      </h3>

      {/* 4 Choices Grid */}
      <div id="mcq-options-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-2">
        {quiz.options.map((option, idx) => {
          let btnClass = 'bg-white hover:bg-slate-50 border-4 border-[#1e1b4b] text-slate-900 shadow-[0_6px_0_#1e1b4b] active:translate-y-[4px] active:shadow-[0_2px_0_#1e1b4b] transition-all';
          let icon = '';

          if (isAnswered) {
            if (option === quiz.answer) {
              // The correct one is always highlighted green with safe contrast
              btnClass = 'bg-emerald-500 border-4 border-[#1e1b4b] text-white shadow-[0_6px_0_#1e1b4b] font-black scale-102';
              icon = '✨';
            } else if (selected === option) {
              // The selected wrong option is highlighted red with safe contrast
              btnClass = 'bg-rose-500 border-4 border-[#1e1b4b] text-white shadow-[0_4px_0_#1e1b4b] scale-98 translate-y-[2px]';
              icon = '❌';
            } else {
              // Unselected wrong choices are disabled and faded
              btnClass = 'bg-slate-100 border-4 border-slate-300 text-slate-400 opacity-65 cursor-not-allowed';
            }
          }

          const isFlagsQuiz = quiz.category === '국기';

          return (
            <button
              key={`${option}-${idx}`}
              id={`mcq-btn-${idx}`}
              type="button"
              disabled={isAnswered}
              onClick={() => handleSelect(option)}
              className={`w-full min-h-[96px] py-4 px-5 rounded-2xl text-xl font-extrabold flex items-center justify-between transition-all cursor-pointer ${btnClass}`}
            >
              <span className={`flex items-center gap-4 w-full ${isFlagsQuiz ? 'justify-center' : 'justify-start'}`}>
                {!isFlagsQuiz ? (
                  <>
                    <span className="w-8 h-8 rounded-full bg-slate-950/10 flex items-center justify-center text-sm font-black border border-slate-950/20 shrink-0 select-none">
                      {idx + 1}
                    </span>
                    <OptionFlag country={option} size="normal" />
                    <span className="text-lg md:text-xl font-extrabold text-[#1e1b4b] truncate">
                      {option.replace(/[A-Za-z]/g, '').trim()}
                    </span>
                  </>
                ) : (
                  <OptionFlag country={option} size="large" />
                )}
              </span>
              <span className="text-2xl shrink-0 select-none ml-2">{icon}</span>
            </button>
          );
        })}
      </div>

      {/* Immediate Educational Feedback Display */}
      {isAnswered && (
        <div 
          id="mcq-feedback-box" 
          className={`p-6 rounded-2xl border-4 border-[#1e1b4b] flex flex-col gap-2 mt-4 animate-scale-up ${
            isSelectedCorrect 
              ? 'bg-emerald-50 text-slate-900 shadow-[0_8px_0_rgba(16,185,129,0.3)]' 
              : 'bg-rose-50 text-slate-900 shadow-[0_8px_0_rgba(244,63,94,0.3)]'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">
              {isSelectedCorrect ? '🎉' : '💡'}
            </span>
            <h4 id="mcq-feedback-title" className="text-2xl font-black">
              {isSelectedCorrect ? '참 잘했어요! 정답이에요!' : `아쉬워요! 정답은 '${quiz.answer}'이에요`}
            </h4>
          </div>
          <p id="mcq-feedback-explanation" className="text-lg md:text-xl font-bold leading-relaxed mt-1">
            {quiz.explanation}
          </p>
        </div>
      )}

      {/* Next Question Navigation Button */}
      {isAnswered && (
        <div className="flex justify-center mt-6">
          <button
            id="mcq-next-btn"
            type="button"
            onClick={() => onNext(isSelectedCorrect)}
            className="px-20 py-5.5 bg-[#facc15] text-[#1e1b4b] font-black text-2xl md:text-3xl rounded-full border-4 border-[#1e1b4b] shadow-[0_8px_0_#d97706] active:translate-y-1 active:shadow-[0_4px_0_#d97706] hover:scale-[1.02] transition-all duration-100 cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <span>다음 문제 풀기</span>
            <span className="text-3xl">➡️</span>
          </button>
        </div>
      )}
    </div>
  );
}
