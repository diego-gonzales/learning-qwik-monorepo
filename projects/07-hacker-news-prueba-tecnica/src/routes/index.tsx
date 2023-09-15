import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Story } from '~/components/story/story';
import { getTopStories } from '~/services/hacker-news.service';

export default component$(() => {
  const storyIds = useSignal<number[]>([]);

  useVisibleTask$(async () => {
    const data = await getTopStories(1, 10);
    storyIds.value = data;
  });

  return (
    <ul>
      {storyIds.value.map((storyId, index) => (
        <li key={storyId}>
          <Story storyId={storyId} storyIndex={index} />
        </li>
      ))}
    </ul>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
