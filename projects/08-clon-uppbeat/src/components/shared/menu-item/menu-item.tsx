import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

interface MenuItemProps {
  name: string;
  route: string;
  icon: string;
}

export const MenuItem = component$<MenuItemProps>(({ name, route, icon }) => {
  const location = useLocation();

  return (
    <Link
      class={[
        "qwik-sidebar-item-component",
        { "qwik-active-link": location.url.pathname === route },
      ]}
      href={route}
    >
      <span class="text-xs">
        <i class={`fa-solid ${icon}`}></i>
      </span>
      <span class="text-sm">{name}</span>
    </Link>
  );
});
