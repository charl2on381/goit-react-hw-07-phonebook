import React from 'react';
import { Bars } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = ({ color = '#4f9f4f' }) => {
  return (
    <div className={s.loader}>
      <Bars
        height="60"
        width="60"
        color={color}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
