import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { login } from "~/services/auth.service";

export const useLogin = routeAction$(
  async (credentials, { fail }) => {
    try {
      const result = await login(credentials);
      return result;
    } catch (error: any) {
      return fail(error.statusCode, {
        msg: error.message,
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

        {loginAction.value?.msg && <p>{loginAction.value.msg}</p>}
        {loginAction.value?.user && (
          <p>{JSON.stringify(loginAction.value.user, null, 2)}</p>
        )}
      </Form>
    </div>
  );
});
