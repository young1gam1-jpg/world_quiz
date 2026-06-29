/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MatchingCardQuiz } from '../types';

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

function CardFlag({ country }: { country: string }) {
  const media = countryMetadata[country] || { iso: '', emoji: '🌍' };
  const [error, setError] = useState(false);
  const flagSrc = media.iso ? `https://flagcdn.com/w160/${media.iso.toLowerCase()}.png` : null;

  return (
    <div className="w-full h-full p-1 flex items-center justify-center select-none">
      {!error && flagSrc ? (
        <img
          src={flagSrc}
          alt={country}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
          className="w-full h-full object-contain rounded-xl max-h-[68px]"
        />
      ) : (
        <span className="text-5xl">
          {media.emoji}
        </span>
      )}
    </div>
  );
}

interface CardItem {
  id: string;
  text: string;
  emoji?: string;
  pairId: number; // Identifies which pair it belongs to
  side: 'left' | 'right';
}

interface MatchingCardsViewProps {
  quiz: MatchingCardQuiz;
  onNext: (isCorrect: boolean) => void;
  key?: string | number;
}

export default function MatchingCardsView({ quiz, onNext }: MatchingCardsViewProps) {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [isBusy, setIsBusy] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isClickLocked, setIsClickLocked] = useState(true);

  useEffect(() => {
    setIsClickLocked(true);
    const timer = setTimeout(() => {
      setIsClickLocked(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [quiz]);

  // Initialize cards
  useEffect(() => {
    const list: CardItem[] = [];
    quiz.pairs.forEach((pair, idx) => {
      // Add left card
      list.push({
        id: `left-${idx}`,
        text: pair.left,
        emoji: pair.leftEmoji,
        pairId: idx,
        side: 'left'
      });
      // Add right card
      list.push({
        id: `right-${idx}`,
        text: pair.right,
        emoji: pair.rightEmoji,
        pairId: idx,
        side: 'right'
      });
    });

    // Shuffle the 6 cards
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    setCards(shuffled);
    setFlippedIds([]);
    setMatchedPairs([]);
    setIsFinished(false);
  }, [quiz]);

  const handleCardClick = (cardId: string, pairId: number) => {
    if (isClickLocked || isBusy || isFinished) return;
    if (flippedIds.includes(cardId) || matchedPairs.includes(pairId)) return;

    const newFlipped = [...flippedIds, cardId];
    setFlippedIds(newFlipped);

    // If we have flipped 2 cards, check for a match
    if (newFlipped.length === 2) {
      setIsBusy(true);
      const firstCard = cards.find(c => c.id === newFlipped[0])!;
      const secondCard = cards.find(c => c.id === newFlipped[1])!;

      if (firstCard.pairId === secondCard.pairId) {
        // MATCH!
        setTimeout(() => {
          setMatchedPairs(prev => {
            const next = [...prev, firstCard.pairId];
            if (next.length === 3) {
              setIsFinished(true);
            }
            return next;
          });
          setFlippedIds([]);
          setIsBusy(false);
        }, 600);
      } else {
        // NO MATCH - Flip back after 1.2 seconds so user can see
        setTimeout(() => {
          setFlippedIds([]);
          setIsBusy(false);
        }, 1200);
      }
    }
  };

  const isCardFlipped = (card: CardItem) => {
    return flippedIds.includes(card.id) || matchedPairs.includes(card.pairId);
  };

  const isCardMatched = (card: CardItem) => {
    return matchedPairs.includes(card.pairId);
  };

  return (
    <div id="matching-cards-container" className="flex flex-col gap-6 w-full animate-fade-in">
      {/* Title */}
      <h3 
        id="matching-title"
        className="text-2xl md:text-3xl font-black text-center text-slate-800 leading-snug px-2"
      >
        {quiz.title}
      </h3>

      {/* Guide details */}
      <div id="matching-guide" className="text-center rounded-2xl bg-indigo-50 text-[#1e1b4b] py-3.5 px-5 font-black text-lg border-4 border-[#1e1b4b] shadow-[0_4px_0_#1e1b4b]">
        📢 한 번에 두 장의 카드를 터치해서 똑같은 나라와 짝꿍 카드를 3쌍 완성해봐요!
      </div>

      {/* Cards 3x2 Grid */}
      <div id="cards-grid" className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full mt-2 perspective-1000">
        {cards.map((card) => {
          const flipped = isCardFlipped(card);
          const matched = isCardMatched(card);

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id, card.pairId)}
              className="relative aspect-[4/3] rounded-3xl cursor-pointer select-none h-32 md:h-36 preserve-3d transition-all duration-300 active:scale-95 m-1"
              style={{
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* CARD FRONT (Back of card - showing ? mark) */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl flex flex-col items-center justify-center border-4 border-[#1e1b4b] shadow-[0_6px_0_#1e1b4b] backface-hidden"
              >
                <span className="text-5xl text-yellow-300 font-black bold-text-shadow">?</span>
                <span className="text-xs text-white mt-1 font-black underline decoration-2 select-none">뒤집기!</span>
              </div>

              {/* CARD BACK (Front of card - showing item content) */}
              <div 
                className={`absolute inset-0 rounded-3xl flex flex-col items-center justify-center border-4 px-3 py-2 text-center backface-hidden rotate-y-180 transition-colors duration-300 shadow-[0_6px_0_#1e1b4b] ${
                  matched 
                    ? 'bg-emerald-400 border-[#1e1b4b] text-slate-900 font-extrabold animate-pulse' 
                    : 'bg-white border-[#1e1b4b] text-slate-900'
                }`}
              >
                {quiz.category === '국기' ? (
                  card.side === 'left' ? (
                    <span className="text-lg md:text-xl font-black leading-tight break-all text-[#1e1b4b]">
                      {card.text}
                    </span>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <CardFlag country={card.text} />
                    </div>
                  )
                ) : (
                  <>
                    {card.emoji && (
                      <span className="text-3xl mb-1 select-none">
                        {card.emoji}
                      </span>
                    )}
                    <span className="text-base md:text-lg font-black leading-tight break-all">
                      {card.text}
                    </span>
                  </>
                )}
                
                {matched && (
                  <span className="absolute top-1 right-2 text-lg text-amber-950">
                    ✨
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Matching Done Feedback */}
      {isFinished && (
        <div 
          id="matching-feedback-box"
          className="p-6 rounded-2xl border-4 border-[#1e1b4b] bg-emerald-50 text-slate-900 flex flex-col gap-2 mt-4 animate-scale-up shadow-[0_8px_0_rgba(16,185,129,0.3)]"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎉</span>
            <h4 className="text-2xl font-black text-slate-900">
              멋져요! 완벽하게 짝을 맞췄어요!
            </h4>
          </div>
          <p className="text-lg md:text-xl font-bold text-[#1e1b4b]">
            알맞은 짝꿍 카드 3쌍을 완성했어요. 계속해서 다음 문제도 힘차게 도전해봐요! 기운 쑥쑥! ✨
          </p>
        </div>
      )}

      {/* Next button */}
      {isFinished && (
        <div className="flex justify-center mt-6">
          <button
            id="matching-next-btn"
            type="button"
            onClick={() => onNext(true)}
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
