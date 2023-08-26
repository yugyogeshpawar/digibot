import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import AdminGuestGuard from '../guards/AdminGuestGuard';
// login option 3 routing
const AdminLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/AdminLogin')));
const ForgotPassword = Loadable(lazy(() => import('views/pages/authentication/auth-forms/ForgotPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: (
    <AdminGuestGuard>
      <MinimalLayout />{' '}
    </AdminGuestGuard>
  ),
  children: [
    {
      path: '/login',
      element: <AdminLogin />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    }
  ]
};

export default AuthenticationRoutes;
