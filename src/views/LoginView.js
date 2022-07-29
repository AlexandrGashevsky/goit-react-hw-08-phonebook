import { CssVarsProvider } from '@mui/joy/styles';
import { Sheet, Typography} from '@mui/joy';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';


export default function LoginView() {
  const isError = useSelector(authSelectors.getErrorLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      setError(true);
    }
  }, [isError]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <CssVarsProvider>
      <Sheet

        
      >
        <div>
          <h3>Sign in to continue</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="email"
            label="Email"
            required
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            value={password}
            required
            onChange={handleChange}
            sx={{
              mt: 2,
            }}
          />

          <button
            type="submit"
            color="primary"
          >
            Log in
          </button>
        </form>
        {error && (
          <Typography
            sx={{
              color: '#ff0000',
            }}
          >
            Please, check if you entered email and password correctly
          </Typography>
        )}
      </Sheet>
    </CssVarsProvider>
  );
}
