import { component$ } from "@builder.io/qwik";

export const SearchInput = component$(() => {
  return (
    <form class="qwik-input-src">
      <input
        id="input-src-qwik"
        class="w-full bg-transparent"
        placeholder="Search tracks, artists, styles or sound effects"
        type="text"
      />
      <div class="flex items-center justify-center">
        <button class="h-6 w-6 rounded-lg bg-slate-800">
          <i class="fa-solid fa-search text-white"></i>
        </button>
      </div>
    </form>
  );
});
