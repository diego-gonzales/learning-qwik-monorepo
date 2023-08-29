import { component$ } from '@builder.io/qwik';
import {
  type DocumentHead,
  Form,
  Link,
  routeAction$,
  zod$,
  z,
} from '@builder.io/qwik-city';
import { login } from '~/services/auth.service';

export const useLoginAction = routeAction$(
  async (data, { redirect, fail }) => {
    try {
      await login(data);
      redirect(302, '/dashboard');
    } catch (error: any) {
      return fail(401, { error });
    }
  },
  zod$({
    email: z.string().email(),
    password: z.string().min(6),
  })
);

export default component$(() => {
  const action = useLoginAction();

  return (
    <Form class="login100-form" action={action}>
      <span class="login100-form-title p-b-49">Login</span>

      <div class="wrap-input100 m-b-23">
        <span class="label-input100">Correo</span>
        <input class="input100" name="email" placeholder="Correo electrónico" />
        {action.value?.failed && (
          <span class="focus-input100">{action.value.fieldErrors?.email}</span>
        )}
      </div>

      <div class="wrap-input100">
        <span class="label-input100">Contraseña</span>
        <input
          class="input100"
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
        />
        {action.value?.failed && (
          <span class="focus-input100">
            {action.value.fieldErrors?.password}
          </span>
        )}
      </div>

      <div class="text-right p-t-8 p-b-31"></div>

      <div class="container-login100-form-btn">
        <div class="wrap-login100-form-btn">
          <div class="login100-form-bgbtn"></div>
          <button class="login100-form-btn" type="submit">
            Login
          </button>
        </div>
      </div>

      <div>
        {action.value?.failed && (
          <span class="txt1 p-b-17">{action.value.error}</span>
        )}
      </div>

      <div class="flex-col-c p-t-60">
        <span class="txt1 p-b-17">¿No tienes cuenta?</span>
        <Link class="txt2" href="/auth/register">
          Crear una aquí
        </Link>
      </div>
    </Form>
  );
});

export const head: DocumentHead = {
  title: 'Login',
  meta: [
    {
      name: 'description',
      content: 'Login page',
    },
    {
      name: 'keywords',
      content: 'login, page',
    },
  ],
};
