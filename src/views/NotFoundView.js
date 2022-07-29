import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Typography from '@mui/joy/Typography';

function NotFoundView() {
  const styles = {
    link: {
      display: 'flex',
      flexDirection: 'row',
      textDecoration: 'none',
      justifyContent: 'center',
      padding: 12,
      fontWeight: 700,
      fontSize: '20px',
      color: '#054DA7',
      marginTop: '30px',
    },
    activeLink: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      fontSize: '20px',
      color: '#096BDE',
      marginTop: '30px',
    },
  };
  const location = useLocation();
  return (
    <>
      <NavLink
        to={location?.state?.from ?? '/'}
        exact="true"
        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        <FaArrowLeft />
        <Typography sx={{ px: 1 }} color="primary" level="h1" component="h1">
          <b>Go back</b>
        </Typography>
      </NavLink>
      <Typography
        sx={{ px: 1, fontSize: '40px' }}
        color="primary"
        level="h1"
        component="h1"
      >
        <b>404 Not Found</b>
      </Typography>
    </>
  );
}

export default NotFoundView;
