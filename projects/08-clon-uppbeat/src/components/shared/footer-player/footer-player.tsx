import { component$ } from "@builder.io/qwik";

export const FooterPlayer = component$(() => {
  return (
    <footer class="fixed bottom-0 left-0 z-10 flex h-[64px] w-full justify-between border-t border-solid bg-white">
      <section class="flex w-1/6 items-center justify-center ">
        <button>Play</button>
      </section>
      <section class="flex w-full content-center items-center justify-center ">
        <div class="w-full" id="global-player"></div>
      </section>
    </footer>
  );
});
