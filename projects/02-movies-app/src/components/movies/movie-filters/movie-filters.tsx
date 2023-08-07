import { type Signal, component$, $, useStore } from '@builder.io/qwik';
import { SortType } from '~/enums/sort-type.enum';

interface Props {
  sortTypeSelected: Signal<SortType>;
}
export const MovieFilters = component$<Props>(({ sortTypeSelected }) => {
  const sortTypes = useStore<SortType[]>([
    SortType.NONE,
    SortType.ASC,
    SortType.DESC,
  ]);

  const handleSelectChange = $((element: HTMLSelectElement) => {
    sortTypeSelected.value = element.value as SortType;
  });

  return (
    <div class="mb-6 flex gap-2 items-center justify-center">
      <label>Sort by title:</label>
      <select
        class="bg-inherit p-1 border rounded"
        onChange$={(_, element) => handleSelectChange(element)}
      >
        {sortTypes.map((sortType, index) => (
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
