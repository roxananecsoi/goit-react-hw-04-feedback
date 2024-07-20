import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <div>Good: {good}</div>
    <div>Neutral: {neutral}</div>
    <div>Bad: {bad}</div>
    <div>Total: {total}</div>
    <div>Positive feedback: {positivePercentage}%</div>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
