import { component$ } from '@builder.io/qwik';
import { CommentItem } from '../comment-item/comment-item';

interface Props {
  commentIds: number[];
}

export const CommentList = component$<Props>(({ commentIds }) => {
  return (
    <ul>
      {commentIds.map((commentId) => (
        <li key={commentId} class="px-5 mb-3">
          <CommentItem commentId={commentId} />
        </li>
      ))}
    </ul>
  );
});
