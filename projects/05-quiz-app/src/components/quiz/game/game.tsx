import { component$ } from '@builder.io/qwik';
import { LeftArrowIcon, RightArrowIcon } from '~/components/icons/icons';
import { QUESTIONS_LIMIT } from '~/consts';
import { useQuestions } from '~/hooks/use-questions';
import { GameQuestions } from '../game-questions/game-questions';
import { GameStatus } from '../game-status/game-status';

export const Game = component$(() => {
  const { nextQuestionNumber, previousQuestionNumber, currentQuestionNumber } =
    useQuestions();

  return (
    <>
      <section class="flex justify-center items-center gap-2">
        <button
          class="btn btn-circle btn-sm"
          onClick$={() => previousQuestionNumber()}
          disabled={currentQuestionNumber.value === 0}
        >
          <LeftArrowIcon />
        </button>
        <span>
          {currentQuestionNumber.value + 1} / {QUESTIONS_LIMIT}
        </span>
        <button
          class="btn btn-circle btn-sm"
          onClick$={() => nextQuestionNumber()}
          disabled={currentQuestionNumber.value === QUESTIONS_LIMIT - 1}
        >
          <RightArrowIcon />
        </button>
      </section>

      <section class="my-5 border p-4 rounded">
        <GameQuestions />
      </section>

      <section>
        <GameStatus />
      </section>
    </>
  );
});
