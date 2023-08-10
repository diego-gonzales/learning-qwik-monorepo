import { component$, useStore } from '@builder.io/qwik';
import { Category } from '~/enums/category.enum';
import { useFilters } from '~/hooks/use-filters';

export const ProductFilters = component$(() => {
  const categories = useStore<Category[]>([
    Category.ALL,
    Category.FRAGRANCES,
    Category.GROCERIES,
    Category.HOME_DECORATION,
    Category.LAPTOPS,
    Category.SKINCARE,
    Category.SMARTPHONES,
  ]);
  const filtersStore = useFilters();

  return (
    <form class="md:flex md:gap-6 md:justify-center md:items-center my-5">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Max. price:</span>
        </label>
        <div class="flex gap-2 items-center">
          <input
            type="range"
            min="0"
            max="1800"
            value={filtersStore.maxPrice}
            class="range range-xs"
            onChange$={(_, element) => {
              filtersStore.maxPrice = Number(element.value);
            }}
          />
          <span class="text-sm">${filtersStore.maxPrice}</span>
        </div>
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Category:</span>
        </label>
        <select
          class="select select-bordered select-sm capitalize"
          onChange$={(_, element) => {
            filtersStore.category = element.value as Category;
          }}
        >
          {categories.map((category, index) => (
            <option
              class="capitalize"
              key={index}
              value={category}
              selected={category === filtersStore.category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
});
