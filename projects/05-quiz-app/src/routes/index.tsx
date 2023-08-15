import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { JavascriptIcon } from '~/components/icons/icons';
import { ButtonStart, Game, GameResults } from '~/components/quiz';
import { useQuestionsStatus } from '~/hooks/use-question-status';
import { useQuestions } from '~/hooks/use-questions';

export default component$(() => {
  const { questions } = useQuestions();
  const { unansweredQuestions } = useQuestionsStatus();

  return (
    <>
      <header class="flex gap-4 items-center">
        <JavascriptIcon />
        <h1 class="text-2xl">Javascript quiz</h1>
      </header>
      <main class="mt-5 w-full max-w-sm">
        {questions.value.length === 0 && <ButtonStart />}
        {questions.value.length > 0 && unansweredQuestions.value > 0 && (
          <Game />
        )}
        {questions.value.length > 0 && unansweredQuestions.value === 0 && (
          <GameResults />
        )}
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
