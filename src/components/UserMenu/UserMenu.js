import { useDispatch } from 'react-redux';
import Button from '@mui/joy/Button';
import authOperations from '../../redux/auth/auth-operations';
import userMenuStyles from './UserMenu.module.css'

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <>
      
      <div ClassName={userMenuStyles.container}>
        <Button
          color="primary"
          variant="soft"
          type="button"
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      </div>
    </>
  );
}
