import { component$ } from "@builder.io/qwik";
import { UppbeatClonLogo } from "../uppbeat-logo/uppbeat-logo";
import { Menu } from "../menu/menu";

export const Sidebar = component$(() => {
  return (
    <aside class="h-full max-h-full border-r border-gray-200 bg-gray-50">
      <section class="border-b border-gray-200 p-[30px]">
        <UppbeatClonLogo />
      </section>
      <section class="text-gray-900">
        <Menu />
      </section>
    </aside>
  );
});
