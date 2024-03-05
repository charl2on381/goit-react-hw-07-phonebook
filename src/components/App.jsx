import React, { useEffect } from 'react';
import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from '../redux/contactSlice';
import { fetchContacts } from '../redux/operations';
import Loader from './Loader/Loader';
import { toast } from 'react-toastify';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isError) {
    toast.error(`Sorry, problem connection to server! ${isError}`);
  }

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {!isError &&
        (contacts?.length > 0 ? (
          <>
            <Filter />
            {isLoading && <Loader />}
            <ContactList />
          </>
        ) : (
          <>
            <Notification message="No contacts" />
            {isLoading && <Loader />}
          </>
        ))}
    </div>
  );
};

export default App;
