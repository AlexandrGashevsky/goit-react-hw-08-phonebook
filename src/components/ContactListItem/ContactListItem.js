import React from 'react';
import PropTypes from 'prop-types';
import contactListItemStyles from './ContactListItem.module.css'
import { Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
  ListDivider,
} from '@mui/joy';
import { useDeleteContactsMutation } from '../../redux/contactSlice';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

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
