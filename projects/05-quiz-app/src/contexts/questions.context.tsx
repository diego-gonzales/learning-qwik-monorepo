import { createContextId } from '@builder.io/qwik';
import { type Question } from '~/interfaces/question.interface';

export interface QuestionsStoreProps {
  questions: Question[];
  currentQuestionNumber: number;
}

export const QUESTIONS_CTX =
  createContextId<QuestionsStoreProps>('questions.context');
