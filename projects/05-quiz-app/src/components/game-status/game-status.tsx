import { component$ } from '@builder.io/qwik';
import { useQuestionsStatus } from '~/hooks/use-question-status';
import { Reset } from '../reset/reset';

export const GameStatus = component$(() => {
  const { correctAnswers, incorrectAnswers, unansweredQuestions } =
    useQuestionsStatus();

  return (
    <>
      <p class="text-center mb-5">
        <span>✔ {correctAnswers.value} corrects</span> -{' '}
        <span>❌{incorrectAnswers.value} incorrects</span> -{' '}
        <span>❓{unansweredQuestions.value} unanswered</span>
      </p>

      <Reset />
    </>
  );
});
