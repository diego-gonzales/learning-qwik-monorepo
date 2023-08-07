import { type PropFunction, component$, type Signal } from '@builder.io/qwik';

interface Props {
  handleSubmit: PropFunction<() => void>;
  search: Signal<string>;
}

export const MovieSearcher = component$<Props>(({ handleSubmit, search }) => {
  return (
    <form class="flex gap-2" onSubmit$={handleSubmit} preventdefault:submit>
      <input
        type="text"
        class="bg-transparent border rounded-sm p-1"
        placeholder="Type here to search"
        bind:value={search}
      />
      <button
        type="submit"
        class="bg-blue-500 py-1 px-3 rounded-sm  hover:opacity-95 transition-opacity"
      >
        Search
      </button>
    </form>
  );
});
