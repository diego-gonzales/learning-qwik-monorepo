import { $, useComputed$, useContext } from '@builder.io/qwik';
import { QUESTIONS_LIMIT } from '~/consts';
import { QUESTIONS_CTX } from '~/contexts/questions.context';
import { getQuestions } from '~/services/questions.service';

export const useQuestions = () => {
  const questionsStore = useContext(QUESTIONS_CTX);

  const fetchQuestions = $(async (limit: number = 20) => {
    const questions = await getQuestions(limit);
    questionsStore.questions = questions;
  });

  const nextQuestionNumber = $(() => {
    if (questionsStore.currentQuestionNumber === QUESTIONS_LIMIT - 1) return;
    questionsStore.currentQuestionNumber++;
  });

  const previousQuestionNumber = $(() => {
    if (questionsStore.currentQuestionNumber === 0) return;
    questionsStore.currentQuestionNumber--;
  });

  const selectAnswer = $((questionId: number, userAnswerIndex: number) => {
    const newQuestions = [...questionsStore.questions];
    const questionIndex = newQuestions.findIndex((q) => q.id === questionId);
    const questionInfo = newQuestions[questionIndex];
    const isCorrectAnswer = questionInfo.correctAnswer === userAnswerIndex;

    newQuestions[questionIndex] = {
      ...questionInfo,
      isCorrectAnswer,
      userAnswerIndex,
    };

    questionsStore.questions = newQuestions;
  });

  const resetGame = $(() => {
    questionsStore.questions = [];
    questionsStore.currentQuestionNumber = 0;
  });

  return {
    questions: useComputed$(() => questionsStore.questions),
    currentQuestionNumber: useComputed$(
      () => questionsStore.currentQuestionNumber
    ),
    currentQuestion: useComputed$(
      () => questionsStore.questions[questionsStore.currentQuestionNumber]
    ),
    fetchQuestions,
    nextQuestionNumber,
    previousQuestionNumber,
    selectAnswer,
    resetGame,
  };
};
