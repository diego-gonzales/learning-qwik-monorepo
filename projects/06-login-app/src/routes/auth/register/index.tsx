import { $, component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link, routeLoader$, z } from '@builder.io/qwik-city';
import {
  useForm,
  type InitialValues,
  zodForm$,
  type SubmitHandler,
  formAction$,
} from '@modular-forms/qwik';

const registerSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  email: z
    .string()
    .min(1, 'Please enter your email')
    .email('Please enter a valid email'),
  password: z
    .string()
    .min(1, 'Please enter your password')
    .min(6, 'Password must be at least 6 characters'),
});

type RegisterForm = z.infer<typeof registerSchema>;

export const useRegisterFormLoader = routeLoader$<InitialValues<RegisterForm>>(
  () => {
    return {
      name: '',
      email: '',
      password: '',
    };
  }
);

export const useFormAction = formAction$<RegisterForm>((values) => {
  // Runs on server
  console.log(values);
}, zodForm$(registerSchema));

export default component$(() => {
  const [, { Form, Field }] = useForm<RegisterForm>({
    loader: useRegisterFormLoader(),
    action: useFormAction(),
    validate: zodForm$(registerSchema),
  });

  const handleSubmit = $<SubmitHandler<RegisterForm>>((values, event) => {
    // Runs on client
    console.log(values);
  });

  return (
    <Form class="login100-form" autoComplete="off" onSubmit$={handleSubmit}>
      <span class="login100-form-title p-b-49">Register</span>

      <div class="wrap-input100 m-b-23">
        <span class="label-input100">Nombre</span>
        <Field name="name">
          {(field, props) => (
            <>
              <input
                class="input100"
                placeholder="Nombre"
                {...props}
                type="text"
                value={field.value}
              />
              {field.error && <span class="focus-input100">{field.error}</span>}
            </>
          )}
        </Field>
      </div>

      <div class="wrap-input100 m-b-23">
        <span class="label-input100">Correo</span>
        <Field name="email">
          {(field, props) => (
            <>
              <input
                class="input100"
                placeholder="Correo electrónico"
                {...props}
                type="email"
                value={field.value}
              />
              {field.error && <span class="focus-input100">{field.error}</span>}
            </>
          )}
        </Field>
      </div>

      <div class="wrap-input100">
        <span class="label-input100">Contraseña</span>
        <Field name="password">
          {(field, props) => (
            <>
              <input
                class="input100"
                placeholder="Ingrese su contraseña"
                {...props}
                type="password"
                value={field.value}
              />
              {field.error && <span class="focus-input100">{field.error}</span>}
            </>
          )}
        </Field>
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
