import React from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactSlice';
import { selectFilter } from '../../redux/filterSlice';
import { deleteContact } from '../../redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const filterLowCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowCase)
    );
  };

  const filteredContacts = getFilteredContacts();

  const getSortedContacts = filterContacts => {
    return filterContacts.sort((a, b) => b.id - a.id);
  };
  const sortedContacts = getSortedContacts(filteredContacts);

  return (
    <ul className={s.list}>
      {sortedContacts.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          {name} : {phone}
          <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
