import { $, component$ } from '@builder.io/qwik';
import { Link, useLocation, useNavigate } from '@builder.io/qwik-city';
import { logout } from '~/services/auth.service';

export const Navbar = component$(() => {
  const { url } = useLocation();
  const navigate = useNavigate();

  const handleLogout = $(() => {
    logout();
    navigate('/auth/login');
  });

  return (
    <nav>
      <ul style={{ display: 'flex', gap: '10px' }}>
        <li>
          <Link
            class={{ 'is-active': url.pathname === '/dashboard/' }}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            class={{ 'is-active': url.pathname === '/users/' }}
            href="/users"
          >
            Users
          </Link>
        </li>

        <li>
          <button onClick$={() => handleLogout()}>Logout</button>
        </li>
      </ul>
    </nav>
  );
});
