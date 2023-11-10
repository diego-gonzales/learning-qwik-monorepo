import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import App from '../../routes/index';

test(`should add items and remove them`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<App />);

  expect(screen.outerHTML).toContain('Technical Test Qwik!');

  const formElement = screen.querySelector('form');
  expect(formElement).toBeDefined();

  const inputElement = screen.querySelector('input');
  expect(inputElement).toBeDefined();

  const buttonElement = screen.querySelector('button');
  expect(buttonElement).toBeDefined();

  const itemText = 'My item';
  inputElement!.value = itemText;
  await userEvent('button', 'click');

  const itemText2 = 'My item 2';
  inputElement!.value = itemText2;
  await userEvent('button', 'click');

  expect(screen.outerHTML).toContain(itemText);
  expect(screen.outerHTML).toContain(itemText2);
});
