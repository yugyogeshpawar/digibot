import { useSnackbar } from 'notistack5';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// routes
// hooks
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { logout } = useAuth();

  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setTimeout(() => {
        navigate('/dashboard/app');
      }, 1000);
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout', { variant: 'error' });
    }
  };

  return <></>;
}
