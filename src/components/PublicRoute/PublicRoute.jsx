import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from '../../redux/auth/authSelector';

export const PublicRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Navigate to={'/contacts'} /> : <Outlet />;
};
