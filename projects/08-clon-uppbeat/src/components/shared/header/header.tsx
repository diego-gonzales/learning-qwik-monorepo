import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "../button/button";
import { SearchInput } from "../search-input/search-input";
import { Avatar } from "../avatar/avatar";

export const Header = component$(() => {
  return (
    <header class="flex p-4">
      <div class="flex w-full">
        <SearchInput />
      </div>
      <div class="flex gap-2">
        <div class="flex gap-2">
          <Button label="Pricing" color="default" />
          <Button label="Go Premiun" icon="fa-star" color="primary" />
        </div>
        <div class="flex gap-2">
          <Link href="/auth/login">
            <Avatar src="https://avatars.githubusercontent.com/u/72168645?v=4" />
          </Link>
        </div>
      </div>
    </header>
  );
});
