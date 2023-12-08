import { Slot, component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { FooterPlayer } from "~/components/shared/footer-player/footer-player";
import { Header } from "~/components/shared/header/header";
import { Sidebar } from "~/components/shared/sidebar/sidebar";
import { DATA_KEY, USER_KEY } from "~/constants";
import { type LoginResponse } from "~/interfaces/login.interface";
import { PlayerProvider } from "~/providers/player.provider";
import { verifyToken } from "~/services/auth.service";

export const onRequest: RequestHandler = async ({
  cookie,
  redirect,
  sharedMap,
}) => {
  const dataFromCookie = cookie.get(DATA_KEY)?.value;

  if (!dataFromCookie) throw redirect(308, "/auth/login");

  const { access_token } = JSON.parse(dataFromCookie) as LoginResponse;

  try {
    const resp = await verifyToken(access_token);
    cookie.set(DATA_KEY, resp, { secure: true, path: "/" });
    sharedMap.set(USER_KEY, resp.user);
  } catch (error) {
    throw redirect(308, "/auth/login");
  }
};

export default component$(() => {
  return (
    <PlayerProvider>
      <div class="flex h-[100vh]">
        <div class="min-w-[256px]">
          <Sidebar />
        </div>
        <div class="grid w-full grid-cols-1 grid-rows-[76px_1fr]">
          <Header />
          <main class="p-12">
            <Slot />
          </main>
        </div>
      </div>

      <FooterPlayer />
    </PlayerProvider>
  );
});
