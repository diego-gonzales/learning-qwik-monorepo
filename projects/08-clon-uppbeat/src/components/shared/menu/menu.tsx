import { component$ } from "@builder.io/qwik";
import { MenuItem } from "../menu-item/menu-item";

export const Menu = component$(() => {
  return (
    <>
      <ul class={"flex flex-col gap-1 border-b border-gray-200 p-6"}>
        <li>
          <MenuItem name="Music" route="/" icon="fa-music" />
        </li>
        <li>
          <MenuItem name="Sound effects" route="/sfx/" icon="fa-sliders" />
        </li>
        <li>
          <MenuItem
            name="Playlist generator"
            route="/playlist-generator/"
            icon="fa-robot"
          />
        </li>
      </ul>

      <ul class="flex flex-col gap-1 p-6 ">
        <li>
          <MenuItem name="My favorites" route="/favorites/" icon="fa-heart" />
        </li>
        <li>
          <MenuItem
            name="Download history"
            route="/history/"
            icon="fa-clock-rotate-left"
          />
        </li>
      </ul>
    </>
  );
});
