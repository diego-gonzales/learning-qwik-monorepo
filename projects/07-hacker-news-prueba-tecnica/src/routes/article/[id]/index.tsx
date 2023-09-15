import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { CommentList } from '~/components/comment-list/comment-list';
import type { StoryInfo } from '~/interfaces/story.interface';
import { getItemInfoById } from '~/services/hacker-news.service';

export default component$(() => {
  const commentIds = useSignal<number[]>([]);
  const location = useLocation();

  useVisibleTask$(async () => {
    const storyId = location.params.id;
    const { kids } = await getItemInfoById<StoryInfo>(+storyId);
    commentIds.value = kids?.slice(0, 10) || [];
  });

  return commentIds.value.length > 0 ? (
    <CommentList commentIds={commentIds.value} />
  ) : (
    <p>Loading...</p>
  );
});

export const head: DocumentHead = {
  title: 'Article',
  meta: [
    {
      name: 'description',
      content: 'Article comments',
    },
  ],
};
