import React from 'react';
import { useSelector } from 'react-redux';
import contactListStyles from './ContactList.module.css'
import { getFilter } from '../../redux/filterSlice';
import { useFetchContactsQuery } from '../../redux/contactSlice';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data } = useFetchContactsQuery();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={contactListStyles.list}>
      {data &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
    </div>
  );
};

export default ContactList;
