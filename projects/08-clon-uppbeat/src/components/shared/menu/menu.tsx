import { component$ } from "@builder.io/qwik";
import { MenuItem } from "../menu-item/menu-item";

export const Menu = component$(() => {
  return (
    <>
      <div class={"flex flex-col gap-6 border-b border-gray-200 p-6"}>
        <MenuItem name="Music" route="/" icon="fa-music" />
        <MenuItem name="Sound effects" route="/sfx" icon="fa-sliders" />
        <MenuItem name="Trending" route="/trending" icon="fa-chart-line" />
      </div>
      <div class="flex flex-col gap-6 p-6 ">
        <MenuItem name="My favorites" route="/favorites" icon="fa-heart" />
        <MenuItem name="My playlist" route="/playlist" icon="fa-circle-play" />
        <MenuItem
          name="Download history"
          route="/history"
          icon="fa-clock-rotate-left"
        />
      </div>
    </>
  );
});
