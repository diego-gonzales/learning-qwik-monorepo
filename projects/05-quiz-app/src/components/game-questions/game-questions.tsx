import { component$ } from '@builder.io/qwik';
import { useQuestions } from '~/hooks/use-questions';
import { type Question } from '~/interfaces/question.interface';

const getBackgroundColor = (question: Question, answerIndex: number) => {
  const { userAnswerIndex, correctAnswer } = question;

  if (userAnswerIndex == null) return 'transparent';
  if (answerIndex !== correctAnswer && answerIndex !== userAnswerIndex)
    return 'transparent';
  if (answerIndex === correctAnswer) return 'green';
  if (answerIndex === userAnswerIndex) return 'red';
  return 'transparent';
};

export const GameQuestions = component$(() => {
  const { currentQuestion, selectAnswer } = useQuestions();

  return (
    <>
      <h2 class="text-center">{currentQuestion.value.question}</h2>
      <pre class="bg-neutral p-2 my-4 w-full overflow-y-auto rounded">
        <code>{currentQuestion.value.code}</code>
      </pre>
      <ul class="menu bg-base-200 rounded">
        {currentQuestion.value.answers.map((answer, index) => (
          <li
            key={index}
            class={[
              'rounded-lg',
              currentQuestion.value.userAnswerIndex != null ? 'disabled' : '',
            ]}
            style={{
              backgroundColor: getBackgroundColor(currentQuestion.value, index),
            }}
          >
            <button
              onClick$={() => selectAnswer(currentQuestion.value.id, index)}
              class={
                currentQuestion.value.userAnswerIndex != null
                  ? 'cursor-not-allowed'
                  : ''
              }
              disabled={currentQuestion.value.userAnswerIndex != null}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
});
