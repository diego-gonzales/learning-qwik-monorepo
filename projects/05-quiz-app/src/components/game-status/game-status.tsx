import { component$ } from '@builder.io/qwik';
import { useQuestionStatus } from '~/hooks/use-question-status';

export const GameStatus = component$(() => {
  const { correctAnswers, incorrectAnswers, unansweredQuestions } =
    useQuestionStatus();

  return (
    <p class="text-center">
      <span>✔ {correctAnswers.value} corrects</span> -{' '}
      <span>❌{incorrectAnswers.value} incorrects</span> -{' '}
      <span>❓{unansweredQuestions.value} unanswered</span>
    </p>
  );
});
