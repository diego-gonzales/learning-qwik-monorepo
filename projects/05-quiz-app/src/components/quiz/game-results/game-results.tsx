import { component$ } from '@builder.io/qwik';
import { ButtonReset } from '../button-reset/button-reset';
import { useQuestionsStatus } from '~/hooks/use-question-status';

export const GameResults = component$(() => {
  const { correctAnswers, incorrectAnswers } = useQuestionsStatus();
  return (
    <div class="text-center">
      <h2 class="text-2xl">Your results!</h2>

      <div class="my-4">
        <p>✔ {correctAnswers.value} correctas</p>
        <p>❌ {incorrectAnswers.value} incorrectas</p>
      </div>

      <ButtonReset />
    </div>
  );
});
