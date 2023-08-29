import { Slot, component$ } from '@builder.io/qwik';
import { type RequestHandler } from '@builder.io/qwik-city';
import { TOKEN_LOCAL_STORAGE_KEY } from '~/constants';
import { validateToken } from '~/services/auth.service';

export const onGet: RequestHandler = async ({ cookie, redirect }) => {
  const token = cookie.get(TOKEN_LOCAL_STORAGE_KEY)?.value;

  if (!token) throw redirect(302, '/auth/login');

  try {
    const resp = await validateToken(token);
    cookie.set(TOKEN_LOCAL_STORAGE_KEY, resp.access_token, {
      secure: true,
      path: '/',
    });
  } catch (error) {
    console.log(error);
    throw redirect(302, '/auth/login');
  }
};

export default component$(() => {
  return (
    <div>
      <h1>Back-Office Layout</h1>
      <Slot />
    </div>
  );
});
