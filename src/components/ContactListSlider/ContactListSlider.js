import React from 'react';
import { FixedSizeList } from 'react-window';
import ContactList from 'components/ContactList/ContactList';
import Filter from '../Filter/Filter'

function ContactListSlider() {
  return (
    <div
    >
      <h3>
       Contacts
      </h3>
      <Filter/>
      <FixedSizeList
        height={275}
        width={360}
        itemSize={46}
        itemCount={1}
        overscanCount={5}
      >
        {ContactList}
      </FixedSizeList>
    </div>
  );
}

export default ContactListSlider;
