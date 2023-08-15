import {
  Slot,
  component$,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik';
import {
  QUESTIONS_CTX,
  type QuestionsStoreProps,
} from '~/contexts/questions.context';

export const QuestionsProvider = component$(() => {
  const questionsStore = useStore<QuestionsStoreProps>({
    questions: [],
    currentQuestionNumber: 0,
  });

  useVisibleTask$(() => {
    const data = localStorage.getItem('data');

    if (data) {
      const info = JSON.parse(data) as QuestionsStoreProps;
      questionsStore.questions = info.questions;
      questionsStore.currentQuestionNumber = info.currentQuestionNumber;
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => [
      questionsStore.questions,
      questionsStore.currentQuestionNumber,
    ]);

    localStorage.setItem('data', JSON.stringify(questionsStore));
  });

  useContextProvider(QUESTIONS_CTX, questionsStore);
  return <Slot />;
});
