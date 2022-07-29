import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import navigationStyles from './Navigation.module.css';



const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact="true"
        className={navigationStyles.link}
      >
        Main Page
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact="true"
          className={navigationStyles.link}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
