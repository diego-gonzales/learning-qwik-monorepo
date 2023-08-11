import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './user-table.css?inline';
import { type User } from '~/interfaces/users.inteface';
import { useFilters } from '~/hooks/use-filters';

interface UserTableProps {
  users: User[];
}

export const UserTable = component$<UserTableProps>(({ users }) => {
  useStylesScoped$(styles);
  const filtersStore = useFilters();

  return (
    <table class="table">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class={filtersStore.isColoringTable ? 'coloring' : ''}>
        {users.map((user) => (
          <tr key={user.login.uuid}>
            <td>
              <img
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
              <button class="button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
