/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, Fragment } from 'react';
import { ConnectingQuiz } from '../types';

const countryEmojis: Record<string, string> = {
  '한국': '🇰🇷',
  '일본': '🇯🇵',
  '미국': '🇺🇸',
  '프랑스': '🇫🇷',
  '영국': '🇬🇧',
  '이탈리아': '🇮🇹',
  '독일': '🇩🇪',
  '스페인': '🇪🇸',
  '브라질': '🇧🇷',
  '캐나다': '🇨🇦',
  '호주': '🇦🇺',
  '중국': '🇨🇳',
  '인도': '🇮🇳',
  '튀르키예': '🇹🇷',
  '스위스': '🇨🇭',
  '그리스': '🇬🇷',
  '남아프리카공화국': '🇿🇦',
  '멕시코': '🇲🇽',
  '아르헨티나': '🇦🇷',
  '사우디아라비아': '🇸🇦',
  '러시아': '🇷🇺',
  '베트남': '🇻🇳',
  '태국': '🇹🇭',
  '모로코': '🇲🇦',
  '인도네시아': '🇮🇩',
  '페루': '🇵🇪',
  '몽골': '🇲🇳',
  '아일랜드': '🇮🇪',
  '네덜란드': '🇳🇱',
  '포르투갈': '🇵🇹',
  '폴란드': '🇵🇱',
  '스웨덴': '🇸🇪',
  '벨기에': '🇧🇪',
  '가나': '🇬🇭',
  '이집트': '🇪🇬',
  '캄보디아': '🇰🇭',
  '이란': '🇮🇷',
  '아이슬란드': '🇮🇸',
  '말레이시아': '🇲🇾',
  '스코틀랜드': '🏴󠁧󠁢󠁳󠁣󠁴󠁿'
};

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

function OptionFlag({ country }: { country: string }) {
  const [error, setError] = useState(false);
  const media = countryMetadata[country] || { iso: '', emoji: '🌍' };
  const flagSrc = media.iso ? `https://flagcdn.com/w160/${media.iso.toLowerCase()}.png` : null;

  return (
    <div 
      className="w-16 h-10 rounded-md bg-slate-100 border-2 border-[#1e1b4b] overflow-hidden flex items-center justify-center shadow-inner shrink-0 select-none"
    >
      {!error && flagSrc ? (
        <img
          src={flagSrc}
          alt={country}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-3xl">
          {media.emoji}
        </span>
      )}
    </div>
  );
}

function ConnectionFlag({ country }: { country: string }) {
  const [error, setError] = useState(false);
  const cleanCountry = country.replace(/[A-Za-z]/g, '').trim();
  const media = countryMetadata[cleanCountry] || { iso: '', emoji: '🌍' };
  const flagSrc = media.iso ? `https://flagcdn.com/w160/${media.iso.toLowerCase()}.png` : null;

  return (
    <div className="w-10 h-7 rounded-sm bg-slate-100 border border-slate-300 overflow-hidden flex items-center justify-center shrink-0 select-none">
      {!error && flagSrc ? (
        <img
          src={flagSrc}
          alt={cleanCountry}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-xl">
          {media.emoji}
        </span>
      )}
    </div>
  );
}

interface ConnectingLinesViewProps {
  quiz: ConnectingQuiz;
  onNext: (isCorrect: boolean) => void;
  key?: string | number;
}

interface LineCoords {
  leftKey: string;
  rightKey: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function ConnectingLinesView({ quiz, onNext }: ConnectingLinesViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [connections, setConnections] = useState<Record<string, string>>({}); // { leftKey: rightKey }
  const [lineCoords, setLineCoords] = useState<LineCoords[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrectAll, setIsCorrectAll] = useState(false);
  const [isClickLocked, setIsClickLocked] = useState(true);

  useEffect(() => {
    setIsClickLocked(true);
    const timer = setTimeout(() => {
      setIsClickLocked(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [quiz]);
  
  // Re-calculate coordinates whenever connections or layout modifies
  const updateLineCoordinates = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    const coords: LineCoords[] = [];

    Object.entries(connections).forEach(([leftKey, rightKey]) => {
      const leftEl = document.getElementById(`connect-left-${leftKey}`);
      const rightEl = document.getElementById(`connect-right-${rightKey}`);

      if (leftEl && rightEl) {
        const leftRect = leftEl.getBoundingClientRect();
        const rightRect = rightEl.getBoundingClientRect();

        coords.push({
          leftKey,
          rightKey: rightKey as string,
          x1: leftRect.right - containerRect.left,
          y1: leftRect.top - containerRect.top + leftRect.height / 2,
          x2: rightRect.left - containerRect.left,
          y2: rightRect.top - containerRect.top + rightRect.height / 2
        });
      }
    });

    setLineCoords(coords);
  };

  // Run update coordinates on change, on resize, or with animation frames to stay perfectly synced
  useEffect(() => {
    updateLineCoordinates();
    
    window.addEventListener('resize', updateLineCoordinates);
    // Timeout help for render delays
    const timer = setTimeout(updateLineCoordinates, 150);

    return () => {
      window.removeEventListener('resize', updateLineCoordinates);
      clearTimeout(timer);
    };
  }, [connections, selectedLeft, isChecked]);

  const handleLeftClick = (leftKey: string) => {
    if (isClickLocked || isChecked) return;
    setSelectedLeft(leftKey);
  };

  const handleRightClick = (rightKey: string) => {
    if (isClickLocked || isChecked) return;
    if (!selectedLeft) return;

    // Check if rightKey is already connected to another left key. If so, disconnect it.
    const newConnections = { ...connections };
    Object.keys(newConnections).forEach((lKey) => {
      if (newConnections[lKey] === rightKey) {
        delete newConnections[lKey];
      }
    });

    // Make the new connection
    newConnections[selectedLeft] = rightKey;
    setConnections(newConnections);
    setSelectedLeft(null); // Reset selection
  };

  const handleResetConnection = (leftKey: string) => {
    if (isChecked) return;
    const newConnections = { ...connections };
    delete newConnections[leftKey];
    setConnections(newConnections);
    setSelectedLeft(null);
  };

  const checkAnswers = () => {
    setIsChecked(true);

    // Validate all connections
    let allCorrect = true;
    quiz.leftItems.forEach((leftKey) => {
      const userMatch = connections[leftKey];
      const correctMatch = quiz.answers[leftKey];
      if (userMatch !== correctMatch) {
        allCorrect = false;
      }
    });

    // Also must connect all 4 to be fully checked
    const connectionCount = Object.keys(connections).length;
    if (connectionCount < quiz.leftItems.length) {
      allCorrect = false;
    }

    setIsCorrectAll(allCorrect);
  };

  const allConnected = Object.keys(connections).length === quiz.leftItems.length;

  return (
    <div 
      id="connecting-view" 
      className="flex flex-col gap-6 w-full animate-fade-in"
    >
      {/* Title */}
      <h3 
        id="connecting-title"
        className="text-2xl md:text-3xl font-black text-center text-slate-800 leading-snug px-2"
      >
        {quiz.title}
      </h3>

      {/* Helper notice */}
      <div id="connecting-guide" className="text-center rounded-2xl bg-indigo-50 text-[#1e1b4b] py-3.5 px-5 font-black text-lg border-4 border-[#1e1b4b] shadow-[0_4px_0_#1e1b4b]">
        {!isChecked 
          ? '📢 왼쪽 나라를 하나 선택하고 오른쪽 알맞은 설명/아이템을 차례대로 터치해 보세요!'
          : '📢 맞은 선은 초록색, 틀린 선은 빨간색으로 표시돼요!'}
      </div>

      {/* Main Interactive Grid Container with SVG Canvas */}
      <div 
        ref={containerRef}
        id="connecting-mesh-container"
        className="relative w-full grid grid-cols-2 gap-x-20 gap-y-4 py-4 pr-1 min-h-[300px]"
      >
        {/* SVG Drawing Layer */}
        <svg 
          id="connections-svg"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          {lineCoords.map((line, idx) => {
            const isPairCorrect = quiz.answers[line.leftKey] === line.rightKey;
            
            // Choose colors based on validation
            let strokeColor = '#6366f1'; // Indigo during layout draft
            let strokeWidth = 6;
            let strokeDash = '';

            if (isChecked) {
              if (isPairCorrect) {
                 strokeColor = '#10b981'; // Green (emerald) on correct
              } else {
                strokeColor = '#f43f5e'; // Red (rose) on incorrect
                strokeDash = '8,4';
              }
            }

            return (
              <g key={`group-line-${idx}`}>
                {/* Background shadow glow line */}
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#1e1b4b"
                  strokeWidth={strokeWidth + 6}
                  strokeLinecap="round"
                  opacity={0.3}
                />
                
                {/* Foreground active line */}
                <line
                  id={`line-${idx}`}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={strokeDash}
                  className="transition-all duration-300"
                />

                {/* Left/Right points indicators */}
                <circle cx={line.x1} cy={line.y1} r="8" fill={strokeColor} stroke="#1e1b4b" strokeWidth="2" />
                <circle cx={line.x2} cy={line.y2} r="8" fill={strokeColor} stroke="#1e1b4b" strokeWidth="2" />
              </g>
            );
          })}
        </svg>

        {/* 2 * 4 Items aligned perfectly row by row */}
        {Array.from({ length: 4 }).map((_, i) => {
          const leftItem = quiz.leftItems[i];
          const rightItem = quiz.rightItems[i];

          // Left Item Logic
          const leftHasLink = leftItem !== undefined && connections[leftItem] !== undefined;
          const leftIsCurFocus = selectedLeft === leftItem;

          let leftHighlightClass = 'bg-white border-[#1e1b4b] text-slate-900 shadow-[0_5px_0_#1e1b4b] active:translate-y-[4px] active:shadow-[0_1px_0_#1e1b4b]';
          if (leftIsCurFocus) {
            leftHighlightClass = 'bg-yellow-100 border-[#1e1b4b] text-[#1e1b4b] shadow-[0_5px_0_#1e1b4b] scale-102 ring-4 ring-yellow-400/40';
          } else if (leftHasLink) {
            leftHighlightClass = 'bg-indigo-50 border-[#1e1b4b] text-[#1e1b4b] font-black shadow-[0_5px_0_#1e1b4b]';
          }

          // Right Item Logic
          const rightIsConnected = rightItem !== undefined && Object.values(connections).includes(rightItem);

          let rightHighlightClass = 'bg-white border-[#1e1b4b] text-slate-900 shadow-[0_5px_0_#1e1b4b] active:translate-y-[4px] active:shadow-[0_1px_0_#1e1b4b]';
          if (selectedLeft) {
            rightHighlightClass = 'bg-amber-50 hover:bg-amber-100 border-[#1e1b4b] border-dashed text-slate-900 shadow-[0_5px_0_#1e1b4b]';
          } else if (rightIsConnected) {
            rightHighlightClass = 'bg-indigo-50 border-[#1e1b4b] text-[#1e1b4b] font-black shadow-[0_5px_0_#1e1b4b]';
          }

          return (
            <Fragment key={i}>
              {/* Left Item */}
              {leftItem ? (
                <div className="relative">
                  <button
                    id={`connect-left-${leftItem}`}
                    type="button"
                    onClick={() => handleLeftClick(leftItem)}
                    disabled={isChecked}
                    className={`w-full min-h-[64px] py-3.5 px-4 rounded-2xl text-lg font-extrabold border-4 flex items-center justify-between transition-all duration-155 cursor-pointer text-left ${leftHighlightClass}`}
                  >
                    <span className="truncate pr-1 flex items-center gap-2.5">
                      {quiz.category !== '국기' && <ConnectionFlag country={leftItem} />}
                      <span>{leftItem.replace(/[A-Za-z]/g, '').trim()}</span>
                    </span>
                    {leftHasLink && !isChecked && (
                      <span 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleResetConnection(leftItem);
                        }}
                        className="text-xs px-2.5 py-1 rounded-full bg-indigo-100 hover:bg-rose-100 text-indigo-700 hover:text-rose-700 block transition-colors border-2 border-[#1e1b4b]"
                        title="연결 지우기"
                      >
                        ✕
                      </span>
                    )}
                  </button>
                </div>
              ) : <div />}

              {/* Right Item */}
              {rightItem ? (
                <button
                  id={`connect-right-${rightItem}`}
                  type="button"
                  onClick={() => handleRightClick(rightItem)}
                  disabled={isChecked || !selectedLeft}
                  className={`w-full min-h-[64px] py-3.5 px-4 rounded-2xl text-lg font-extrabold border-4 shadow-sm transition-all duration-155 cursor-pointer ${
                    quiz.category === '국기' ? 'justify-center' : 'text-right justify-end'
                  } flex items-center ${rightHighlightClass}`}
                >
                  {quiz.category === '국기' ? (
                    <div className="w-full h-full flex items-center justify-center py-1">
                      <OptionFlag country={rightItem} />
                    </div>
                  ) : (
                    <span className="truncate pl-1">{rightItem}</span>
                  )}
                </button>
              ) : <div />}
            </Fragment>
          );
        })}
      </div>

      {/* Connect validation logic & explanations per matches */}
      {isChecked && (
        <div 
          id="connect-feedback-box"
          className={`p-6 rounded-2xl border-4 border-[#1e1b4b] flex flex-col gap-2 mt-4 animate-scale-up ${
            isCorrectAll 
              ? 'bg-emerald-50 text-slate-950 shadow-[0_8px_0_rgba(16,185,129,0.3)]' 
              : 'bg-rose-50 text-slate-950 shadow-[0_8px_0_rgba(244,63,94,0.3)]'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{isCorrectAll ? '🎉' : '💡'}</span>
            <h4 className="text-2xl font-black text-slate-950">
              {isCorrectAll ? '대단해요! 모두 정확하게 이었어요!' : '조금 틀린 부분이 있어요! 맞는 선들을 복습해 보아요 😊'}
            </h4>
          </div>
          <div className="mt-2 text-base font-bold flex flex-col gap-2">
            {quiz.leftItems.map((leftKey) => {
              const correctRight = quiz.answers[leftKey];
              const userRight = connections[leftKey];
              const isMatchOk = userRight === correctRight;
              return (
                <div key={`exp-${leftKey}`} className="flex items-center gap-2 border-b border-dashed border-slate-300 pb-1 last:border-0 last:pb-0 text-slate-800">
                  <span>{isMatchOk ? '✅' : '❌'}</span>
                  <span><strong>{leftKey}</strong> ➡️ <strong>{correctRight}</strong></span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Connecting Actions bar: standard Check or Next button */}
      <div className="flex justify-center mt-4">
        {!isChecked ? (
          <button
            id="connect-check-btn"
            type="button"
            disabled={!allConnected}
            onClick={checkAnswers}
            className={`px-12 py-4.5 rounded-full text-2xl font-black transition-all duration-100 cursor-pointer flex items-center justify-center gap-2 border-4 border-[#1e1b4b] ${
              allConnected
                ? 'bg-[#facc15] text-[#1e1b4b] shadow-[0_8px_0_#d97706] active:translate-y-1 active:shadow-[0_4px_0_#d97706]'
                : 'bg-slate-300 text-slate-500 shadow-[0_8px_0_#94a3b8] opacity-50 cursor-not-allowed pointer-events-none'
            }`}
          >
            <span>선 연결 결과 확인하기</span>
            <span className="text-3xl">🗳️</span>
          </button>
        ) : (
          <button
            id="connect-next-btn"
            type="button"
            onClick={() => onNext(isCorrectAll)}
            className="px-20 py-5.5 bg-[#facc15] text-[#1e1b4b] font-black text-2xl md:text-3xl rounded-full border-4 border-[#1e1b4b] shadow-[0_8px_0_#d97706] active:translate-y-1 active:shadow-[0_4px_0_#d97706] hover:scale-[1.02] transition-all duration-100 cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <span>다음 문제 풀기</span>
            <span className="text-3xl">➡️</span>
          </button>
        )}
      </div>
    </div>
  );
}
