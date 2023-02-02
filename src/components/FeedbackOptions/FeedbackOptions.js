import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.FeedbackContainerButtons}>
    {options.map(option => (
        <button
            key={option}
            className={s.FeedbackButton}
            onClick={()=>onLeaveFeedback(option)}
        >
            {option}
        </button>))}
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;