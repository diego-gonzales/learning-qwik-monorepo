import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="grid min-h-screen place-items-center px-5">
      <form class="flex w-full max-w-xs flex-col gap-3">
        <input class="qwik-input-src" type="text" placeholder="Email" />
        <input class="qwik-input-src" type="text" placeholder="Password" />
        <button class="qwik-button-primary self-center" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
});
