import React from 'react';
import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={s.Title}>{title}</h1>
      <h2 className={s.Container}>Please leave feedback</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
