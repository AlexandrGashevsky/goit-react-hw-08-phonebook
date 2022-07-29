import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#054DA7',
  },
  activeLink: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#096BDE',
  },
};

export default function LoginNav() {
  return (
    <NavLink
      to="/login"
      exact="true"
      style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Log in
    </NavLink>
  );
}
