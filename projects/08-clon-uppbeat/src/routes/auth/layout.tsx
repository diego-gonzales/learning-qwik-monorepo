import { Slot, component$ } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import { DATA_KEY } from "~/constants";

export const onGet: RequestHandler = async ({ cookie, redirect }) => {
  const dataFromCookie = cookie.get(DATA_KEY)?.value;

  if (dataFromCookie) throw redirect(308, "/");
};

export default component$(() => {
  return <Slot />;
});
