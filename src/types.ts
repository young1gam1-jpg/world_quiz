/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type QuizType = 'multiple' | 'matching' | 'connecting';

export interface MultipleChoiceQuiz {
  type: 'multiple';
  category: string;
  emoji: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  iso?: string; // Flag ISO code (lowercase, 2 chars) for flagcdn.com
}

export interface MatchingPair {
  left: string;
  right: string;
  leftEmoji?: string;
  rightEmoji?: string;
}

export interface MatchingCardQuiz {
  type: 'matching';
  category: string;
  title: string;
  pairs: MatchingPair[];
}

export interface ConnectingQuiz {
  type: 'connecting';
  category: string;
  title: string;
  leftItems: string[];
  rightItems: string[];
  answers: Record<string, string>;
}

export type QuizQuestion = MultipleChoiceQuiz | MatchingCardQuiz | ConnectingQuiz;

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface RawQuizItem {
  country: string;
  emoji: string;
  iso?: string; // Specifically for Flags
  valueName: string; // Detail element name (e.g. "태극기", "스시", "에펠탑")
  features: string; // Brief hint (e.g. "태극 문양, 빨강/파랑/흰색")
  explanation: string; // Long explanation
}
