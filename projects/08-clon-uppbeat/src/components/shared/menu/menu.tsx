import { component$ } from "@builder.io/qwik";
import { MenuItem } from "../menu-item/menu-item";

export const Menu = component$(() => {
  return (
    <>
      <div class={"flex flex-col gap-6 border-b border-gray-200 p-6"}>
        <MenuItem name="Music" route="/" icon="uil-music" />
        <MenuItem name="Sound effects" route="/sfx" icon="uil-graph-bar" />
        <MenuItem name="Trending" route="/trending" icon="uil-chart-line" />
      </div>
      <div class="flex flex-col gap-6 p-6 ">
        <MenuItem name="My favorites" route="/favorites" icon="uil-heart" />
        <MenuItem name="My playlist" route="/playlist" icon="uil-book-alt" />
        <MenuItem name="Download history" route="/history" icon="uil-history" />
      </div>
    </>
  );
});
