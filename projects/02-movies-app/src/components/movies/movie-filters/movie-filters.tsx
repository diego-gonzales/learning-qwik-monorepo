import { type Signal, component$, useSignal, $ } from '@builder.io/qwik';
import { SortType } from '~/enums/sort-type.enum';

interface Props {
  sortTypeSelected: Signal<SortType>;
}
export const MovieFilters = component$<Props>(({ sortTypeSelected }) => {
  const sortTypes = useSignal<SortType[]>([
    SortType.NONE,
    SortType.ASC,
    SortType.DESC,
  ]);

  const handleSelectChange = $((element: HTMLSelectElement) => {
    sortTypeSelected.value = element.value as SortType;
  });

  return (
    <div class="mt-4 flex gap-2 items-center justify-center">
      <label>Sort by title:</label>
      <select
        class="bg-inherit p-1 border rounded"
        onChange$={(_, element) => handleSelectChange(element)}
      >
        {sortTypes.value.map((sortType, index) => (
          <option
            key={index}
            class="bg-[#222]"
            value={sortType}
            selected={sortType === sortTypeSelected.value}
          >
            {sortType}
          </option>
        ))}
      </select>
    </div>
  );
});
