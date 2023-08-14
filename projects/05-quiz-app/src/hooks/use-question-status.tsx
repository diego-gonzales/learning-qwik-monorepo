import { useComputed$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useQuestions } from './use-questions';

export const useQuestionStatus = () => {
  const { questions } = useQuestions();
  const correctAnswers = useSignal(0);
  const incorrectAnswers = useSignal(0);
  const unansweredQuestions = useSignal(0);

  useVisibleTask$(({ track }) => {
    const value = track(() => questions.value);

    // Reset values to 0 to prevent them from accumulating
    correctAnswers.value = 0;
    incorrectAnswers.value = 0;
    unansweredQuestions.value = 0;

    value.forEach((q) => {
      if (q.userAnswerIndex == null) unansweredQuestions.value++;
      else if (q.correctAnswer === q.userAnswerIndex) correctAnswers.value++;
      else incorrectAnswers.value++;
    });
  });

  return {
    correctAnswers: useComputed$(() => correctAnswers.value),
    incorrectAnswers: useComputed$(() => incorrectAnswers.value),
    unansweredQuestions: useComputed$(() => unansweredQuestions.value),
  };
};
