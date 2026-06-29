/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CategoryInfo } from '../types';
import { categoriesList } from '../data';

interface MainMenuProps {
  onStartQuiz: (selectedCategoryIds: string[]) => void;
}

export default function MainMenu({ onStartQuiz }: MainMenuProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [shakeButton, setShakeButton] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleCardClick = (id: string) => {
    setShowWarning(false);
    if (id === '종합') {
      // Toggle General. If General selected, deselect others, or vice-versa
      if (selectedIds.includes('종합')) {
        setSelectedIds([]);
      } else {
        setSelectedIds(['종합']);
      }
    } else {
      // Add or remove normal category. Exclude General.
      let list = selectedIds.filter((item) => item !== '종합');
      if (list.includes(id)) {
        list = list.filter((item) => item !== id);
      } else {
        list.push(id);
      }
      setSelectedIds(list);
    }
  };

  const handleStartClick = () => {
    if (selectedIds.length === 0) {
      setShakeButton(true);
      setShowWarning(true);
      setTimeout(() => setShakeButton(false), 500);
      return;
    }
    onStartQuiz(selectedIds);
  };

  const isCardSelected = (id: string) => selectedIds.includes(id);

  return (
    <div 
      id="main-menu-container" 
      className="flex flex-col gap-6 w-full max-w-2xl mx-auto py-4 px-4 animate-scale-up"
    >
      {/* App Header Titles */}
      <div id="main-header" className="text-center relative">
        <span className="text-6xl md:text-7xl block animate-float mb-2" role="img" aria-label="world">
          🌍 
        </span>
        <h1 
          id="app-title"
          className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter text-center mt-2 bold-text-shadow"
        >
          세계 나라 탐험 퀴즈
        </h1>
        <p 
          id="app-subtitle"
          className="text-xl md:text-2xl font-bold text-amber-300 mt-3 tracking-wide bold-accent-shadow"
        >
          친구들! 세계 여러 나라를 알아보아요!
        </p>
      </div>

      {/* Guide notice */}
      <div 
        id="menu-guide" 
        className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white font-extrabold text-lg border-3 border-white/20 shadow-md mt-2"
      >
        💡 풀고 싶은 퀴즈의 종류를 선택해 주세요.
        <br />
        <span className="text-yellow-300 font-black text-base mt-1 block">
          (여러 가지 선택 가능)
        </span>
      </div>

      {/* Grid of 8 cards - 2 cols, 4 rows on mobile/desktop */}
      <div 
        id="categories-grid" 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-2"
      >
        {categoriesList.map((cat: CategoryInfo) => {
          const isSelected = isCardSelected(cat.id);

          return (
            <div
              key={cat.id}
              id={`cat-card-${cat.id}`}
              onClick={() => handleCardClick(cat.id)}
              className={`relative rounded-3xl p-6 flex flex-col justify-between select-none cursor-pointer overflow-hidden chunky-card ${
                isSelected ? 'chunky-card-selected' : 'chunky-card-unselected'
              }`}
            >
              {/* Checkmark icon */}
              {isSelected && (
                <div 
                  id={`checked-marker-${cat.id}`}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center font-black text-lg border-2 border-slate-950 animate-scale-up"
                >
                  ✓
                </div>
              )}

              {/* Card visual elements */}
              <div className="flex flex-col items-center justify-center text-center gap-2 py-2 w-full overflow-hidden">
                <span className="text-5xl md:text-6xl my-1 shrink-0 select-none" role="img" aria-label={cat.name}>
                  {cat.icon}
                </span>
                <div className="flex flex-col items-center w-full overflow-hidden">
                  <h2 className="text-lg md:text-xl font-black tracking-tight text-slate-900 mt-1 whitespace-nowrap text-center select-none">
                    {cat.id === '종합' ? '🌐 ' : ''}{cat.id}
                  </h2>
                  <p className="text-xs font-bold mt-1.5 text-slate-500 leading-snug text-center max-w-full">
                    {cat.description.replace('세계를 배웁니다.', '퀴즈를 맞혀요').replace('맞추어봅니다.', '맞혀요')}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Shaking Alert for empty selections */}
      {showWarning && (
        <div 
          id="warning-banner"
          className="text-center py-3.5 px-6 rounded-2xl bg-rose-500 text-white font-black text-xl shadow-lg border-3 border-rose-950 animate-shake flex items-center justify-center gap-2 mt-4"
        >
          <span>⚠️</span>
          <span>메뉴를 선택해 주세요! 😊</span>
        </div>
      )}

      {/* Start Quiz Action Button */}
      <div className="flex justify-center mt-6">
        <button
          id="start-quiz-submit-btn"
          type="button"
          onClick={handleStartClick}
          className={`px-16 py-4.5 rounded-full text-2xl md:text-3xl font-black cursor-pointer transition-all ease-out duration-100 flex items-center justify-center gap-3 ${
            shakeButton ? 'animate-shake' : ''
          } ${
            selectedIds.length > 0
              ? 'bg-[#facc15] text-[#1e1b4b] shadow-[0_8px_0_#d97706] active:translate-y-1 active:shadow-[0_4px_0_#d97706] opacity-100 pointer-events-auto'
              : 'bg-slate-300 text-slate-500 shadow-[0_8px_0_#94a3b8] opacity-50 cursor-not-allowed pointer-events-none'
          }`}
        >
          <span>퀴즈 시작!</span>
          <span className="text-3xl">🚀</span>
        </button>
      </div>
    </div>
  );
}
