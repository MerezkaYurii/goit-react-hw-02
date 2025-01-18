import React from 'react';
import s from './Description.module.css';
const Description = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Sip Happens Café</h1>
      <h3 className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h3>
    </div>
  );
};

export default Description;
