import React from 'react';
import { NavLink } from 'react-router-dom';
import registerNavStyles from './RegisterNav.module.css'

export default function RegisterNav() {
  return (
    <NavLink
      to="/register"
      exact="true"
      className={registerNavStyles.link}
    >
      Sign up
    </NavLink>
  );
}
