import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, Suspense, lazy } from 'react';
import AppBarMenu from './AppBarMenu/AppBarMenu';
import authOperations from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRoure/PrivateRoure';
import PublicRoute from './PublicRoute/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';
import Loader from './Loader/Loader';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(
    authSelectors.getIsRefreshingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <div
        style={{
          minWidth: '1000px',
          display: 'inline-block',

          padding: '10px',
          height: '100vh',
          margin: '0 auto',
        }}
      >
        <AppBarMenu />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute path="/">
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute path="/register" redirectTo="/contacts" restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute path="/login" redirectTo="/contacts" restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute path="/contacts" redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundView />}></Route>
          </Routes>
        </Suspense>
      </div>
    )
  );
}
