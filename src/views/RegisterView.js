import { CssVarsProvider } from '@mui/joy/styles';
import { Typography} from '@mui/joy';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';


export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const isError = useSelector(authSelectors.getErrorRegister);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
  };

  useEffect(() => {
    if (isError) {
      setError(true);
    }
  }, [isError]);

  return (
    <CssVarsProvider>
      <div >
        <div >
          <h3>Sign up</h3>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input 
            name="name"
            type="text"
            value={name}
            placeholder="Name"
            required
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            value={email}
            placeholder="email"
            required
            onChange={handleChange}
            sx={{
              mt: 2,
            }}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
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
            sx={{
              mt: 4,
            }}
          >
            Sign up
          </button>
        </form>
        {error && (
          <Typography
            sx={{
              color: '#ff0000',
            }}
          >
            Please, check if you entered email and password correctly. Your password must contain at least 7 characters. 
          </Typography>
        )}
      </div>
    </CssVarsProvider>
  );
}
