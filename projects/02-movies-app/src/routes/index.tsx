import { component$ } from '@builder.io/qwik';
import { type RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ redirect }) => {
  throw redirect(301, '/movies');
};

export default component$(() => {
  return null;
});
