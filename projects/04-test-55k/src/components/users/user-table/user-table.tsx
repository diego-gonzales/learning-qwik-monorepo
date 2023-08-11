import { type QRL, component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './user-table.css?inline';
import { type User } from '~/interfaces/users.inteface';
import { useFilters } from '~/hooks/use-filters';
import { SORT_BY } from '~/consts';

interface UserTableProps {
  users: User[];
  removeUser: QRL<(userId: string) => void>;
}

export const UserTable = component$<UserTableProps>(({ users, removeUser }) => {
  useStylesScoped$(styles);
  const filtersStore = useFilters();

  return (
    <table class="table">
      <thead>
        <tr>
          <th>Photo</th>
          <th
            class="header-pointer"
            onClick$={() => {
              filtersStore.sortBy = SORT_BY.NAME;
            }}
          >
            Name
          </th>
          <th
            class="header-pointer"
            onClick$={() => {
              filtersStore.sortBy = SORT_BY.LASTNAME;
            }}
          >
            Lastname
          </th>
          <th
            class="header-pointer"
            onClick$={() => {
              filtersStore.sortBy = SORT_BY.COUNTRY;
            }}
          >
            Country
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class={filtersStore.isColoringTable ? 'coloring' : ''}>
        {users.map((user) => (
          <tr key={user.login.uuid}>
            <td>
              <img
                class="user_photo"
                src={user.picture.thumbnail}
                alt={`Image from user ${user.name.first}`}
                width={45}
                height={45}
              />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button
                class="button"
                onClick$={() => removeUser(user.login.uuid)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
