import { component$ } from '@builder.io/qwik';
import { useQuestions } from '~/hooks/use-questions';

export const Reset = component$(() => {
  const { resetGame } = useQuestions();

  return (
    <div class="text-center">
      <button class="btn btn-primary capitalize" onClick$={() => resetGame()}>
        Reset Game
      </button>
    </div>
  );
});
