import { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactSlice';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContact(name)) {
      return;
    }

    dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const checkContact = name => {
    const checkName = name.toLowerCase();
    const isExist = contacts.find(
      item => item.name.toLowerCase() === checkName
    );
    if (isExist) {
      alert(`${name} is already exist`);
    }
    return isExist;
  };

  return (
    <form onSubmit={handleSubmit} className={s.form} autoComplete="on">
      <input
        className={s.input}
        type="text"
        name="name"
        required
        placeholder="Enter Name"
        value={name}
        onChange={handleChange}
      />
      <input
        className={s.input}
        type="text"
        name="phone"
        required
        placeholder="Enter Phone"
        value={phone}
        onChange={handleChange}
      />
      <button className={s.btn}>Add contact</button>
    </form>
  );
};

export default ContactForm;
