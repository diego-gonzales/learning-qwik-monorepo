import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Logo from "~/assets/images/logo.svg?jsx";

export const UppbeatClonLogo = component$(() => {
  return (
    <Link href="/">
      <Logo alt="Uppbeat Clon Logo" class="h-[60px] w-[120px]" />
    </Link>
  );
});
