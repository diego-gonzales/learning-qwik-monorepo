import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface MenuItemProps {
  name: string;
  route: string;
  icon: string;
}

export const MenuItem = component$<MenuItemProps>(({ name, route, icon }) => {
  return (
    <Link class="qwik-sidebar-item-component" href={route}>
      <span>
        <i class={`fa-solid ${icon}`}></i>
      </span>
      <span class="text-sm">{name}</span>
    </Link>
  );
});
