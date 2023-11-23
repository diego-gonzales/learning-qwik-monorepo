import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  color: "default" | "primary";
  label: string;
  icon?: string;
}

export const Button = component$<ButtonProps>(({ color, label, icon }) => {
  return (
    <button
      class={{
        "qwik-button-primary text-xs": color === "primary",
        "qwik-button-default": color !== "primary",
      }}
    >
      {icon && <i class={`uil ${icon}`}></i>}
      {label}
    </button>
  );
});
