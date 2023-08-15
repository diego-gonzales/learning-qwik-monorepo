import { component$ } from '@builder.io/qwik';
import { QUESTIONS_LIMIT } from '~/consts';
import { useQuestions } from '~/hooks/use-questions';

export const ButtonStart = component$(() => {
  const { fetchQuestions } = useQuestions();

  return (
    <div class="text-center">
      <button
        class="btn btn-primary capitalize"
        onClick$={() => fetchQuestions(QUESTIONS_LIMIT)}
      >
        Start Game!
      </button>
    </div>
  );
});
