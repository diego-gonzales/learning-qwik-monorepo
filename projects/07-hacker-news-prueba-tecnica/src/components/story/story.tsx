import {
  Resource,
  component$,
  useResource$,
  useSignal,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { StoryInfo } from '~/interfaces/story.interface';
import { getItemInfoById } from '~/services/hacker-news.service';
import { getRelativeTime } from '~/utils/getRelativeTime';

interface Props {
  storyId: number;
  storyIndex: number;
}

export const Story = component$<Props>(({ storyId, storyIndex }) => {
  const domain = useSignal<string>('');

  const storyInfo = useResource$<StoryInfo>(async ({ track }) => {
    track(() => storyId);

    const data = await getItemInfoById<StoryInfo>(storyId);

    if (data.url) {
      const url = new URL(data.url).hostname.replace('www.', '');
      domain.value = url;
    }

    return data;
  });

  return (
    <Resource
      value={storyInfo}
      onPending={() => <p>Loading...</p>}
      onResolved={({ by, kids, score, title, url, time }) => (
        <article class="mb-4">
          <header class="flex items-center gap-2">
            <small class="text-xs">{storyIndex + 1}.</small>
            <a href={url} target="_blank">
              {title}
            </a>
            <a href={url} class="text-gray-400 hover:underline">
              ({domain.value})
            </a>
          </header>

          <footer class="text-xs flex items-center gap-2">
            <span>{score} points</span>
            <Link
              href={`/article/${storyId}`}
              class="text-gray-400 hover:underline"
            >
              {by}
            </Link>
            <Link href={`/article/${storyId}`}>
              <time dateTime={new Date(time * 1000).toISOString()}>
                {getRelativeTime(time)}
              </time>
            </Link>
            <Link
              href={`/article/${storyId}`}
              class="text-gray-400 hover:underline"
            >
              {kids?.length ?? 0} comments
            </Link>
          </footer>
        </article>
      )}
    />
  );
});
