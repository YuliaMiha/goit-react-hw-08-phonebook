import { useState } from 'react';
import React from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contactSelector';

import { addContactsThunk } from '../../redux/contactsThunk';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const actions = {
    name: setName,
    number: setNumber,
  };

  const handleChange = e => {
    const { name, value } = e.target;
    actions[name](value);
  };

  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
          contact.number.trim() === number.trim()
      )
    ) {
      return alert(`${name} already exists`);
    }
    dispatch(addContactsThunk(newContact));
    handleReset();
  };
  

  const handleReset = () => {
    console.log(Object.values(actions));
    Object.values(actions).map(item => item(''));
  };

  return (
    <form className={css.form} action="" onSubmit={handleSubmit}>
      <label  className={css.form__label}>
        Name
      </label>
      <input
        onChange={handleChange}
        name="name"
        value={name}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.form__input}
      />
      <label  className={css.form__label}>
        Number
      </label>
      <input
        onChange={handleChange}
        name="number"
        value={number}
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.form__input}
      />
      <button className={css.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;