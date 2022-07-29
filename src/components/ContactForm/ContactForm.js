import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  useCreateContactsMutation,
  useFetchContactsQuery,
} from '../../redux/contactSlice';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();

  const [createContact] = useCreateContactsMutation();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`${name} is not processed`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const checkSameName = name => {
      return data.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    };

    checkSameName(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : createContact(contact) && reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <div>
        <div>
          <h3>
            <b>Phonebook</b>
          </h3>
          <p>Input new contact</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <input
            name="number"
            type="tel"
            placeholder="num"
            label="Number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <button
            type="submit"
            color="primary"
          >
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
