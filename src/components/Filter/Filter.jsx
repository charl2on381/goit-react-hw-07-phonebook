import React from 'react';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="search"
      onChange={e => dispatch(filterContact(e.currentTarget.value))}
      placeholder="Find contacts by name"
      className={s.search}
    />
  );
};

export default Filter;
