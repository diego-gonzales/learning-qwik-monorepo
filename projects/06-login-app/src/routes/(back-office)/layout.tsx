import { Slot, component$ } from '@builder.io/qwik';
import { type RequestHandler } from '@builder.io/qwik-city';
import { Navbar } from '~/components/shared/navbar';
import { TOKEN_LOCAL_STORAGE_KEY, USER_LOCAL_STORAGE_KEY } from '~/constants';
import {
  getDataFromCookies,
  saveDataInCookies,
} from '~/helpers/cookies.helper';
import { validateToken } from '~/services/auth.service';

export const onGet: RequestHandler = async ({
  cookie,
  redirect,
  sharedMap,
}) => {
  const token = getDataFromCookies(cookie, TOKEN_LOCAL_STORAGE_KEY);
  const user = getDataFromCookies(cookie, USER_LOCAL_STORAGE_KEY);

  if (!token) throw redirect(302, '/auth/login');
  if (user) sharedMap.set(USER_LOCAL_STORAGE_KEY, user);

  try {
    const { access_token } = await validateToken(token);
    // Se actualiza el token en las cookies
    saveDataInCookies(cookie, TOKEN_LOCAL_STORAGE_KEY, access_token);
  } catch (error) {
    console.log(error);
    throw redirect(302, '/auth/login');
  }
};

export default component$(() => {
  return (
    <div>
      <h1>Back-Office Layout</h1>
      <Navbar />
      <Slot />
    </div>
  );
});
