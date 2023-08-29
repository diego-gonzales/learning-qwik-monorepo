import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="limiter">
      <div
        class="container-login100"
        style='background-image: url("/images/bg-01.jpg");'
      >
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <Slot />
        </div>
      </div>
    </div>
  );
});
