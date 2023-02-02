import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h3>Statistics</h3>
    <div>
      <ul className={s.FeedbackContainerLabels}>
        <li className={s.FeedbackLabelGood} 
          style={{ color: 'green' }}>
          Good: {good}
        </li>
        <li className={s.FeedbackLabelNeutral} 
          style={{ color: 'brown' }}>
          Neutral: {neutral}
        </li>
        <li className={s.FeedbackLabelBad} 
          style={{ color: 'red' }}>
          Bad: {bad}
        </li>
      </ul>
      <ul className={s.CountContainerLabels}>
        <li className={s.CountTotalFeedback}>
          Total: {total}</li>
        <li className={s.CountPositiveFeedbackPercentage}>
          Positive Feedback: {positivePercentage} %
        </li>
      </ul>
    </div>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;