import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  errorLogin: null,
  errorRegister: null,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.errorRegister = null;
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.errorRegister = null;
      state.isLoading = false;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.errorRegister = payload;
      state.isLoading = false;
    },
    [authOperations.logIn.pending](state) {
      state.errorLogin = null;
      state.isLoading = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.errorLogin = null;
      state.isLoading = false;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.errorLogin = payload;
      state.isLoading = false;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
