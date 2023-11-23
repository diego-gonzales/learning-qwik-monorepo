import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { DATA_KEY } from "~/constants";
import { login } from "~/services/auth.service";

export const useLogin = routeAction$(
  async (credentials, { fail, cookie, redirect }) => {
    try {
      const resp = await login(credentials);
      cookie.set(DATA_KEY, resp, { secure: true, path: "/" });
      redirect(302, "/");
    } catch (error: any) {
      return fail(error.statusCode, {
        myErrorMsg: error.message,
      });
    }
  },
  zod$({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
);

export default component$(() => {
  const loginAction = useLogin();

  return (
    <div class="grid min-h-screen place-items-center px-5">
      <Form action={loginAction} class="flex w-full max-w-xs flex-col gap-3">
        <input
          name="email"
          class="qwik-input-src"
          type="text"
          placeholder="Email"
        />
        {loginAction.value?.fieldErrors?.email && (
          <span class="qwik-text-error">
            {loginAction.value.fieldErrors.email}
          </span>
        )}

        <input
          name="password"
          class="qwik-input-src"
          type="password"
          placeholder="Password"
        />
        {loginAction.value?.fieldErrors?.password && (
          <span class="qwik-text-error">
            {loginAction.value.fieldErrors.password}
          </span>
        )}

        <button class="qwik-button-primary self-center" type="submit">
          Log in
        </button>

        {loginAction.value?.myErrorMsg && <p>{loginAction.value.myErrorMsg}</p>}
      </Form>
    </div>
  );
});
