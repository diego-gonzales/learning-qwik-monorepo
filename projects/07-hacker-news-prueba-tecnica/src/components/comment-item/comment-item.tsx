import { Resource, component$, useResource$ } from '@builder.io/qwik';
import type { CommentInfo } from '~/interfaces/comment.interface';
import { getItemInfoById } from '~/services/hacker-news.service';
import { getRelativeTime } from '~/utils/getRelativeTime';
import { CommentList } from '../comment-list/comment-list';

interface Props {
  commentId: number;
}

export const CommentItem = component$<Props>(({ commentId }) => {
  const commentInfo = useResource$<CommentInfo>(async ({ track }) => {
    track(() => commentId);

    const data = await getItemInfoById<CommentInfo>(commentId);
    return data;
  });

  return (
    <Resource
      value={commentInfo}
      onPending={() => <p>Loading...</p>}
      onResolved={({ by, text, time, kids }) => {
        const commentKids = kids ?? [];

        return (
          <>
            <details open>
              <summary>
                <small>
                  <span>{by}</span>
                  <span>·</span>
                  <span>{getRelativeTime(time)}</span>
                </small>
              </summary>

              <p>{text}</p>
            </details>

            {commentKids.length > 0 && (
              <CommentList commentIds={commentKids.slice(0, 10)} />
            )}
          </>
        );
      }}
    />
  );
});
