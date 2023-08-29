import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Form, Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <Form class="login100-form" autoComplete="off">
      <span class="login100-form-title p-b-49">Register</span>

      <div class="wrap-input100 m-b-23">
        <span class="label-input100">Nombre</span>
        <input class="input100" type="text" placeholder="Nombre" />
        <span class="focus-input100"></span>
      </div>

      <div class="wrap-input100 m-b-23">
        <span class="label-input100">Correo</span>
        <input class="input100" type="email" placeholder="Correo electrónico" />
        <span class="focus-input100"></span>
      </div>

      <div class="wrap-input100">
        <span class="label-input100">Contraseña</span>
        <input
          class="input100"
          type="password"
          placeholder="Ingrese su contraseña"
        />
        <span class="focus-input100"></span>
      </div>

      <div class="text-right p-t-8 p-b-31"></div>

      <div class="container-login100-form-btn">
        <div class="wrap-login100-form-btn">
          <div class="login100-form-bgbtn"></div>
          <button class="login100-form-btn" type="submit">
            Register
          </button>
        </div>
      </div>

      <div class="flex-col-c p-t-60">
        <span class="txt1 p-b-17">¿Ya tienes cuenta?</span>
        <Link class="txt2" href="/auth/login">
          Ingresa aquí
        </Link>
      </div>
    </Form>
  );
});

export const head: DocumentHead = {
  title: 'Register',
  meta: [
    {
      name: 'description',
      content: 'Register page',
    },
    {
      name: 'keywords',
      content: 'register, page',
    },
  ],
};
