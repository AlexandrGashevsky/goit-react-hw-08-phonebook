import * as React from 'react';
import appBarMenuStyles from './AppBarMenu.module.css'
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import LoginNav from '../LoginNav/LoginNav';
import RegisterNav from '../RegisterNav/RegisterNav';
import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBarMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div>
      <div position="static">
        <div className={appBarMenuStyles.toolBar}>
          <Navigation />
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div>
              <RegisterNav />
              <LoginNav />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
