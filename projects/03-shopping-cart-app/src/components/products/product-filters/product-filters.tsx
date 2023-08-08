import { component$ } from '@builder.io/qwik';

export const ProductFilters = component$(() => {
  return (
    <form class="md:flex md:gap-4 md:justify-center md:items-center my-5">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Max. price:</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value="40"
          class="range range-xs"
        />
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Category:</span>
        </label>
        <select class="select select-bordered select-sm">
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
    </form>
  );
});
