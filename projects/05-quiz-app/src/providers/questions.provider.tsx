import {
  Slot,
  component$,
  useContextProvider,
  useStore,
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

  useContextProvider(QUESTIONS_CTX, questionsStore);
  return <Slot />;
});
