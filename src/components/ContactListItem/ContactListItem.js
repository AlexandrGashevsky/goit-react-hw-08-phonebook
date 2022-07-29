import React from 'react';
import PropTypes from 'prop-types';
import contactListItemStyles from './ContactListItem.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {
  ListDivider,
} from '@mui/joy';
import { useDeleteContactsMutation } from '../../redux/contactSlice';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();

  return (
    <>
      <div className={contactListItemStyles.item}>
        <div className={contactListItemStyles.nameAndNumber}>
          <h3>
            {name}
          </h3>
          <p>{number}</p>
        </div>
        <button className={contactListItemStyles.deleteButton} onClick={() => deleteContact(id)}>
          <DeleteIcon />
        </button>
      </div>
      <ListDivider />
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
