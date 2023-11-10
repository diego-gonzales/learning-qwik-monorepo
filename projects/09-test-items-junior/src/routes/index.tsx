import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

type ItemId = `${string}-${string}-${string}-${string}-${string}`;
interface Item {
  id: ItemId;
  text: string;
}

export default component$(() => {
  const items = useSignal<Item[]>([]);

  const addItem = $((itemText: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text: itemText,
    };

    items.value = [...items.value, newItem];
  });

  const removeItem = (itemId: ItemId) =>
    $(() => {
      const newItems = items.value.filter((item) => item.id !== itemId);
      items.value = newItems;
    });

  const handleSubmit = $((formElement: HTMLFormElement) => {
    const { elements } = formElement;

    const input = elements.namedItem('item-input');
    const isInput = input instanceof HTMLInputElement;

    if (input == null || !isInput || input.value.trim().length === 0) return;

    addItem(input.value);

    input.value = '';
  });

  return (
    <>
      <main>
        <aside>
          <h1>Technical Test Qwik!</h1>
          <p>Add and remove items from the list</p>
          <form
            onSubmit$={(_, currenTarget) => handleSubmit(currenTarget)}
            preventdefault:submit
          >
            <label for="my-input">
              Item to add:
              <input type="text" id="my-input" name="item-input" />
            </label>
            <button type="submit">Add</button>
          </form>
        </aside>

        <section>
          <h2>Item list</h2>
          <ol>
            {items.value.length === 0 ? (
              <p>The list is empty</p>
            ) : (
              items.value.map((item) => (
                <li key={item.id} role="button" onClick$={removeItem(item.id)}>
                  <p>{item.text}</p>
                </li>
              ))
            )}
          </ol>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Item List',
  meta: [
    {
      name: 'description',
      content: 'App to add or remove items from your list',
    },
  ],
};
